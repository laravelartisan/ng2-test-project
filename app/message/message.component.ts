import {Component, OnInit} from '@angular/core';
import {MessageService} from './../shared/message.service'
import {Message} from './../shared/message'

@Component({

    selector:'message-list',
    templateUrl:'./app/message/message.component.html'
})

export class MessageComponent extends OnInit{

    //message:String;
    messages:Message[];
    errorMessage:String;
    constructor(private messageService:MessageService){

    }

    ngOnInit(){

        this.messageService.getMessages()
            .subscribe(
                //messages => this.messages = messages,
                date => this.messages = date,
                results => this.messages = results,
                //error =>  this.errorMessage = <any>error);
    }
}