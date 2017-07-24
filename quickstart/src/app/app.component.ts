

import {Component} from '@angular/core';

@Component ({
selector :'my-app',
template :`


<h1>Hello {{title}}</h1>
<nav>
<a routerLink="/heroes">Heroes</a><br>
<a routerLink = "/dashboard" > Dashboard </a>
</nav>

<router-outlet></router-outlet>


`
,
styleUrls: ['./app.component.css']
})


export class AppComponent{

    title = 'Tours of heroes';
}