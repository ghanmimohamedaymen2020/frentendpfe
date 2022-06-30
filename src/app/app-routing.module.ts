import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFicheInterventionComponent } from './add-fiche-intervention/add-fiche-intervention.component';
import { AuthGuard } from './auth/auth.guard';
import { CreateUserComponent } from './create-user/create-user.component';
import { ListOfFicheInterventionComponent } from './list-of-fiche-intervention/list-of-fiche-intervention.component';
import { ListeDetailleeTravailFinJourneeComponent } from './liste-detaillee-travail-fin-journee/liste-detaillee-travail-fin-journee.component';
import { LoginComponent } from './login/login.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [

  {path :"ListOfFichesInterventions" ,component : ListOfFicheInterventionComponent},

  {path: "app-login", component:LoginComponent },
  {path: 'users',component: UserListComponent },
  {path : 'createNewUser', component : CreateUserComponent , },
  { path: '', redirectTo: 'users',pathMatch:'full'},
  {path: 'addFicheIntervention',component:AddFicheInterventionComponent  },
  {path : 'ldfj' ,component: ListeDetailleeTravailFinJourneeComponent , canActivate:[AuthGuard],data:{roles:['Admin'] }},

  {path: 'update-user/:id',component:UpdateUserComponent},
  {path : 'detate-user/:id' , redirectTo :'users'},
  {path:"ListOfFichesInterventions",component:ListOfFicheInterventionComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
