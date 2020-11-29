import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {
  
  heroes:Heroe[]=[]
  constructor(private heroesService: HeroesService, 
              private router: Router) {
//Si ponemos una funcion en el constructor cargara antes que renderice la el componente 
    //console.log("constructor ")
   }

  ngOnInit() {
  this.heroes = this.heroesService.getHeroes();
 // console.log(this.heroes); 
 //Si ponemos la funcion en el ngOnInit cargara despues que renderice los componentes :D! 
  }


  verHeroe(idx: number){
this.router.navigate(['/heroe', idx])
     }
}
