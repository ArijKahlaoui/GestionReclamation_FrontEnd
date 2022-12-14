import { HistoriquePlainte } from "./HistoriquePlainte";
import { Soumissionnaire } from "./Soumissionnaire";

export interface Document{
    idDocument:String,
    documentNom:String,
    soumissionnaire:Soumissionnaire,
    appeloffre:String
    documentDateInsertion:String
    historiquePlainte:HistoriquePlainte,
}