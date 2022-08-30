import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterActeurTypeComponent } from './Views/Parametrages/acteur-type/ajouter-acteur-type/ajouter-acteur-type.component';
import { DetailActeurTypeComponent } from './Views/Parametrages/acteur-type/detail-acteur-type/detail-acteur-type.component';
import { ListeActeurTypeComponent } from './Views/Parametrages/acteur-type/liste-acteur-type/liste-acteur-type.component';
import { ModifierActeurTypeComponent } from './Views/Parametrages/acteur-type/modifier-acteur-type/modifier-acteur-type.component';
import { AjouterDecisionComponent } from './Views/Parametrages/Decision/ajouter-decision/ajouter-decision.component';
import { DetailDecisionComponent } from './Views/Parametrages/Decision/detail-decision/detail-decision.component';
import { ListeDecisionComponent } from './Views/Parametrages/Decision/liste-decision/liste-decision.component';
import { ModifierDecisionComponent } from './Views/Parametrages/Decision/modifier-decision/modifier-decision.component';
import { AjouterDocumentCategorieComponent } from './Views/Parametrages/document-categorie/ajouter-document-categorie/ajouter-document-categorie.component';
import { DetailDocumentCategorieComponent } from './Views/Parametrages/document-categorie/detail-document-categorie/detail-document-categorie.component';
import { ListeDocumentCategorieComponent } from './Views/Parametrages/document-categorie/liste-document-categorie/liste-document-categorie.component';
import { ModifierDocumentCategorieComponent } from './Views/Parametrages/document-categorie/modifier-document-categorie/modifier-document-categorie.component';
import { AjouterEtapesDemandesComponent } from './Views/Parametrages/etapes-demandes/ajouter-etapes-demandes/ajouter-etapes-demandes.component';
import { DetailEtapesDemandesComponent } from './Views/Parametrages/etapes-demandes/detail-etapes-demandes/detail-etapes-demandes.component';
import { ListeEtapesDemandesComponent } from './Views/Parametrages/etapes-demandes/liste-etapes-demandes/liste-etapes-demandes.component';
import { ModifierEtapesDemandesComponent } from './Views/Parametrages/etapes-demandes/modifier-etapes-demandes/modifier-etapes-demandes.component';
import { AjouterEtatSuiviComponent } from './Views/Parametrages/etatSuivi/ajouter-etat-suivi/ajouter-etat-suivi.component';
import { DetailEtatSuiviComponent } from './Views/Parametrages/etatSuivi/detail-etat-suivi/detail-etat-suivi.component';
import { ListeEtatSuiviComponent } from './Views/Parametrages/etatSuivi/liste-etat-suivi/liste-etat-suivi.component';
import { ModifierEtatSuiviComponent } from './Views/Parametrages/etatSuivi/modifier-etat-suivi/modifier-etat-suivi.component';
import { ParametrageComponent } from './Views/Parametrages/parametrage/parametrage.component';
import { AjouterplainteComponent } from './Views/Parametrages/plainte/ajouterplainte/ajouterplainte.component';
import { DetailplainteComponent } from './Views/Parametrages/plainte/detailplainte/detailplainte.component';
import { HistoriquePlainteComponent } from './Views/Parametrages/plainte/historique-plainte/historique-plainte.component';
import { HistoriqueReponseComponent } from './Views/Parametrages/plainte/historique-reponse/historique-reponse.component';
import { ListeplainteComponent } from './Views/Parametrages/plainte/listeplainte/listeplainte.component';
import { TraitementplainteComponent } from './Views/Parametrages/plainte/traitementplainte/traitementplainte.component';
import { AjouterTypeDemandeComponent } from './Views/Parametrages/type-demande/ajouter-type-demande/ajouter-type-demande.component';
import { DetailTypeDemandeComponent } from './Views/Parametrages/type-demande/detail-type-demande/detail-type-demande.component';
import { ListeTypeDemandeComponent } from './Views/Parametrages/type-demande/liste-type-demande/liste-type-demande.component';
import { ModifierTypeDemandeComponent } from './Views/Parametrages/type-demande/modifier-type-demande/modifier-type-demande.component';

const routes: Routes = [
  {
    path:'',
    component: ParametrageComponent
  },


  {
    path:'ListeDem',
    component: ListeTypeDemandeComponent
  },
  {
    path:'ajoutDem',
    component:AjouterTypeDemandeComponent
  },
  {
    path:'modifDem/:demandeTypeId',
    component:ModifierTypeDemandeComponent,
  },
  {
    path:'detailDem/:demandeTypeId',
    component:DetailTypeDemandeComponent,
  },
  //**************************** etat ********************************** 
  {
    path:'ListeEtat',
    component: ListeEtatSuiviComponent,
  },
  {
    path:'ajoutEtat',
    component:AjouterEtatSuiviComponent,
  },
  {
    path:'modifEtat/:etatSuiviId',
    component:ModifierEtatSuiviComponent,
  },
  {
    path:'detailEtat/:etatSuiviId',
    component:DetailEtatSuiviComponent,
  },
  //**************************** decision *******************************
  {
    path:'ListeDec',
    component: ListeDecisionComponent,
  },
  {
    path:'ajoutDec',
    component:AjouterDecisionComponent,
  },
  {
    path:'modifDec/:decisionId',
    component:ModifierDecisionComponent,
  },
  {
    path:'detailDec/:decisionId',
    component:DetailDecisionComponent,
  },
  //**************************** Type Acteur *******************************
  {
    path:'ListeAct',
    component: ListeActeurTypeComponent,
  },
  {
    path:'ajoutAct',
    component:AjouterActeurTypeComponent,
  },
  {
    path:'modifAct/:acteurTypeId',
    component:ModifierActeurTypeComponent,
  },
  {
    path:'detailAct/:acteurTypeId',
    component:DetailActeurTypeComponent,
  },
  //**************************** Etape Demande *******************************
  {
    path:'ListeEtp',
    component: ListeEtapesDemandesComponent,
  },
  {
    path:'ajoutEtp/:demandeTypeId',
    component:AjouterEtapesDemandesComponent,
  },
  {
    path:'modifEtp/:demandeTypeId/:etapesDemandesId',
    component:ModifierEtapesDemandesComponent,
  },
  {
    path:'detailEtp/:demandeTypeId/:etapesDemandesId',
    component:DetailEtapesDemandesComponent,
  },
  //**************************** categorie Document *******************************
  {
    path:'ListeDocCat',
    component: ListeDocumentCategorieComponent,
  },
  {
    path:'ajoutDocCat',
    component:AjouterDocumentCategorieComponent,
  },
  {
    path:'modifDocCat/:documentCategorieId',
    component:ModifierDocumentCategorieComponent,
  },
  {
    path:'detailDocCat/:documentCategorieId',
    component:DetailDocumentCategorieComponent,
  },
  //**************************** Plainte *******************************
  {
    path:'ListePlainte',
    component: ListeplainteComponent,
  },
  {
    path:'ajoutPlainte',
    component:AjouterplainteComponent,
  },
  
  {
    path:'detailPlainte/:plainteId',
    component:DetailplainteComponent,
  },

  {
    path:'traitPlainte/:plainteId',
    component:TraitementplainteComponent,
  },

  {
    path:'historiquePlainte/:demandeTypeId/:plainteId',
    component:HistoriquePlainteComponent,
  },

  {
    path:'historiqueRep/:plainteId',
    component:HistoriqueReponseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
