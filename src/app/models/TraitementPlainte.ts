import { Decision } from "./Decision";
import { Plainte } from "./Plainte";

export interface TraitementPlainte{
    traitementId: string;
    reponse:string;
    decision: Decision;
    plainte: Plainte;
}