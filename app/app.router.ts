import {Routes, RouterModule} from '@angular/router'
import {AppComponent} from './app.component'
import {MessageComponent} from './message/message.component'

const APP_ROUTES:Routes = [
    {path:'',redirectTo:'/message',pathMatch:'full'},
    {path:'message',component:MessageComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);