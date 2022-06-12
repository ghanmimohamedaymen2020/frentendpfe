import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFicheInventaireComponent } from './add-fiche-inventaire/add-fiche-inventaire.component';
import { AuthGuard } from './auth/auth.guard';
import { CreateUserComponent } from './create-user/create-user.component';
import { ListOfFicheInterventionComponent } from './list-of-fiche-intervention/list-of-fiche-intervention.component';
import { LoginComponent } from './login/login.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [

  {path :"ListOfFichesInterventions" ,component : ListOfFicheInterventionComponent},
  {path :"addNewFicheIntervention" ,component : AddFicheInventaireComponent},


  {path: "app-login", component:LoginComponent },
  {path: 'users',component: UserListComponent },
  {path : 'create-user', component : CreateUserComponent , },
  { path: '', redirectTo: 'users',pathMatch:'full'},
  {path: 'update-user/:id',component:UpdateUserComponent},

  {path: 'update-user/:id',component:UpdateUserComponent},
  {path: "ticket-List", component:AddFicheInventaireComponent},
  {path:"ListOfFicheInterventionComponent",component:ListOfFicheInterventionComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
