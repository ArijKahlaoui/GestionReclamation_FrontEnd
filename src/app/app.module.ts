import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjouterTypeDemandeComponent } from './Views/Parametrages/type-demande/ajouter-type-demande/ajouter-type-demande.component';
import { ListeTypeDemandeComponent } from './Views/Parametrages/type-demande/liste-type-demande/liste-type-demande.component';
import { ModifierTypeDemandeComponent } from './Views/Parametrages/type-demande/modifier-type-demande/modifier-type-demande.component';
import { DetailTypeDemandeComponent } from './Views/Parametrages/type-demande/detail-type-demande/detail-type-demande.component';
import { HeaderComponent } from './Views/header/header.component';
import { SidebarComponent } from './Views/sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { MatTooltipModule} from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AjouterEtatSuiviComponent } from './Views/Parametrages/etatSuivi/ajouter-etat-suivi/ajouter-etat-suivi.component';
import { ListeEtatSuiviComponent } from './Views/Parametrages/etatSuivi/liste-etat-suivi/liste-etat-suivi.component';
import { DetailEtatSuiviComponent } from './Views/Parametrages/etatSuivi/detail-etat-suivi/detail-etat-suivi.component';
import { ModifierEtatSuiviComponent } from './Views/Parametrages/etatSuivi/modifier-etat-suivi/modifier-etat-suivi.component';
import { AjouterDecisionComponent } from './Views/Parametrages/Decision/ajouter-decision/ajouter-decision.component';
import { DetailDecisionComponent } from './Views/Parametrages/Decision/detail-decision/detail-decision.component';
import { ListeDecisionComponent } from './Views/Parametrages/Decision/liste-decision/liste-decision.component';
import { ModifierDecisionComponent } from './Views/Parametrages/Decision/modifier-decision/modifier-decision.component';
import { ModifierActeurTypeComponent } from './Views/Parametrages/acteur-type/modifier-acteur-type/modifier-acteur-type.component';
import { ListeActeurTypeComponent } from './Views/Parametrages/acteur-type/liste-acteur-type/liste-acteur-type.component';
import { DetailActeurTypeComponent } from './Views/Parametrages/acteur-type/detail-acteur-type/detail-acteur-type.component';
import { AjouterActeurTypeComponent } from './Views/Parametrages/acteur-type/ajouter-acteur-type/ajouter-acteur-type.component';
import { AjouterEtapesDemandesComponent } from './Views/Parametrages/etapes-demandes/ajouter-etapes-demandes/ajouter-etapes-demandes.component';
import { ListeEtapesDemandesComponent } from './Views/Parametrages/etapes-demandes/liste-etapes-demandes/liste-etapes-demandes.component';
import { DetailEtapesDemandesComponent } from './Views/Parametrages/etapes-demandes/detail-etapes-demandes/detail-etapes-demandes.component';
import { ModifierEtapesDemandesComponent } from './Views/Parametrages/etapes-demandes/modifier-etapes-demandes/modifier-etapes-demandes.component';
import {MatSelectModule} from '@angular/material/select';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {CdkTableModule} from '@angular/cdk/table';
import { AjouterDocumentCategorieComponent } from './Views/Parametrages/document-categorie/ajouter-document-categorie/ajouter-document-categorie.component';
import { ListeDocumentCategorieComponent } from './Views/Parametrages/document-categorie/liste-document-categorie/liste-document-categorie.component';
import { DetailDocumentCategorieComponent } from './Views/Parametrages/document-categorie/detail-document-categorie/detail-document-categorie.component';
import { ModifierDocumentCategorieComponent } from './Views/Parametrages/document-categorie/modifier-document-categorie/modifier-document-categorie.component';
import { AjouterplainteComponent } from './Views/Parametrages/plainte/ajouterplainte/ajouterplainte.component';
import { ListeplainteComponent } from './Views/Parametrages/plainte/listeplainte/listeplainte.component';
import { DetailplainteComponent } from './Views/Parametrages/plainte/detailplainte/detailplainte.component';
import { TraitementplainteComponent } from './Views/Parametrages/plainte/traitementplainte/traitementplainte.component';
import { HistoriqueReponseComponent } from './Views/Parametrages/plainte/historique-reponse/historique-reponse.component';
import { HistoriquePlainteComponent } from './Views/Parametrages/plainte/historique-plainte/historique-plainte.component';
import { NgxNavbarModule } from 'ngx-bootstrap-navbar';
import {MatExpansionModule} from '@angular/material/expansion';
import { ParametrageComponent } from './Views/Parametrages/parametrage/parametrage.component';

@NgModule({
  declarations: [
    AppComponent,
    AjouterTypeDemandeComponent,
    ListeTypeDemandeComponent,
    ModifierTypeDemandeComponent,
    DetailTypeDemandeComponent,
    HeaderComponent,
    SidebarComponent,
    AjouterEtatSuiviComponent,
    ListeEtatSuiviComponent,
    DetailEtatSuiviComponent,
    ModifierEtatSuiviComponent,
    AjouterDecisionComponent,
    DetailDecisionComponent,
    ListeDecisionComponent,
    ModifierDecisionComponent,
    ModifierActeurTypeComponent,
    ListeActeurTypeComponent,
    DetailActeurTypeComponent,
    AjouterActeurTypeComponent,
    AjouterEtapesDemandesComponent,
    ListeEtapesDemandesComponent,
    DetailEtapesDemandesComponent,
    ModifierEtapesDemandesComponent,
    AjouterDocumentCategorieComponent,
    ListeDocumentCategorieComponent,
    DetailDocumentCategorieComponent,
    ModifierDocumentCategorieComponent,
    AjouterplainteComponent,
    ListeplainteComponent,
    DetailplainteComponent,
    TraitementplainteComponent,
    HistoriqueReponseComponent,
    HistoriquePlainteComponent,
    ParametrageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    FormsModule,
    DataTablesModule,
    MatTooltipModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    DragDropModule,
    CdkTableModule,
    NgxNavbarModule,
    MatExpansionModule
    //SidebarModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
