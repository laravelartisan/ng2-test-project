import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Message} from './../shared/message';

@Injectable()
export class MessageService{

    //private messageUrl = 'http://date.jsontest.com/';
    private messageUrl = 'http://swapi.co/api/people/';
    //private messageUrl = 'http://localhost:8000/api/v1/messages/';

    constructor(private http:Http){}

    getMessages (): Observable<Message[]> {
        //return this.http.get(this.messageUrl)
        return this.http.get(`${this.messageUrl}`,{headers: this.getHeaders()})
            .map(this.extractData)
            .catch(this.handleError);
    }
    private getHeaders(){
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        return headers;
    }
    private extractData(res: Response) {
        let body = res.json();
        //return body.date || { };
        //return body.messages || { };
        return body.results || { };
    }
    private handleError (error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}