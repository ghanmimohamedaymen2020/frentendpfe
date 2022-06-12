import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FicheIntervention } from '../Models/fiche-intervention';
import { FicheInterventionService } from '../services/fiche-intervention.service';

@Component({
  selector: 'app-add-fiche-inventaire',
  templateUrl: './add-fiche-inventaire.component.html',
  styleUrls: ['./add-fiche-inventaire.component.css']
})
export class AddFicheInventaireComponent implements OnInit {

  ficheIntervention : FicheIntervention = new FicheIntervention ;


  constructor( private ficheInterventionService : FicheInterventionService,
    private router :Router ) { }

  ngOnInit(): void {
  }

  gotToListIntervention(){

    return this.router.navigate(['/ListOfFichesInterventions'])
    
    
        }
  saveFicheIntervention (){
    return this.ficheInterventionService.createFicheIntervention(this.ficheIntervention).subscribe(data  =>{console.log(data);
      this.gotToListIntervention ();}
      , error=> console.log(error))
  }
  


    OnSubmit(){
   
      console.log(this.ficheIntervention)
      this.saveFicheIntervention();
     }
    }
