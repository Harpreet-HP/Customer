import { Component , Input } from '@angular/core';
import {Hero} from './hero';
import { OnInit} from '@angular/core';
import {Router} from '@angular/router';


import {HeroService} from './hero.service';



@Component({
  selector: 'my-heroes',
   templateUrl: './heroes.component.html',
    styleUrls: [ './heroes.component.css' ]
  //tyleUrls: [ './dashboard.component.css' ]
  
})



export class HeroesComponent implements OnInit {
 heroes : Hero[];
 selectedHero : Hero;

ngOnInit() : void {
  this.getHeroes();
}


constructor(private heroservice: HeroService, private router: Router ){}


//Heroes = heroes;
onSelect(hero:Hero):void{this.selectedHero = hero;}
 
 getHeroes() : void{ 
   this.heroservice.getHeroes().then(heroes=>this.heroes = heroes);}

   gotoDetail(): void {
     this.router.navigate(['/detail', this.selectedHero.id]);
   }

add(name: string): void {
  name = name.trim();
  if (!name) { return; }
  this.heroservice.create(name)
    .then(hero => {
      this.heroes.push(hero);
      this.selectedHero = null;
    });
}

// delete(hero: Hero): void {
//   this.heroservice
//       .delete(hero.id)
//       .then(() => {
//         this.heroes = this.heroes.filter(h => h !== hero);
//         if (this.selectedHero === hero) { this.selectedHero = null; }
//       });
//   }
}




   
