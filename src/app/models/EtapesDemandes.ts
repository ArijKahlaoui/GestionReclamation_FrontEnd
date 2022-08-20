
import { ActeurType } from "./ActeurType";
import { DemandeType } from "./DemandeType";

export interface EtapesDemandes{
    etapesDemandesId: String;
    etapesDemandesLibelle: String; 
    etapesDemandesDescription: String;
    etapesDemandesDelaiExecution: String;
    etapesDemandesOrdre:  String;
    etapesDemandesEnvoiAlerte:  String;
    etapesDemandesDureeJour: String; 
    etapesDemandesDureeJourOuvrable:String;
    etapesDemandesActeurType: ActeurType;
	etapesDemandesType: DemandeType;
}