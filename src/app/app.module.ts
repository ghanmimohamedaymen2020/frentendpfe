import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListOfFicheInterventionComponent } from './list-of-fiche-intervention/list-of-fiche-intervention.component';
import {MatExpansionModule} from '@angular/material/expansion';

import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon'
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {CdkAccordionModule} from '@angular/cdk/accordion';

import { SaveFichInterventionToPDFComponent } from './save-fich-intervention-to-pdf/save-fich-intervention-to-pdf.component';
import { AddFicheInterventionComponent } from './add-fiche-intervention/add-fiche-intervention.component';

import { AddFicheInventaireComponent } from './add-fiche-inventaire/add-fiche-inventaire.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { CreateUserComponent } from './create-user/create-user.component';





@NgModule({
  declarations: [
    AppComponent,
    ListOfFicheInterventionComponent,
    SaveFichInterventionToPDFComponent,
    AddFicheInterventionComponent,
    AddFicheInventaireComponent,
    NavbarComponent,
    LoginComponent,
    UpdateUserComponent,
    UserListComponent,
    CreateUserComponent,
    
    
  ],
  imports: [
    MatCardModule,
    MatCardModule,
    FormsModule,
    CdkAccordionModule,
    BrowserModule,
    AppRoutingModule,
    MatExpansionModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule ,
    MatButtonModule,
    MatSelectModule,
    MatSliderModule,
    MatPaginatorModule ,
    MatFormFieldModule,
    MatTableModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule, 
    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
