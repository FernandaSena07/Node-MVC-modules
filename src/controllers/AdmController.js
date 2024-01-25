import { AdmModel } from "../model/AdmModel.js"

let adms = []

export function registerAdm(name, email, password, status){
    const newAdm = new AdmModel(name, email, password, status);
    adms.push(newAdm);
    return newAdm;
}

export function getAllAdms(){
   return adms;
}

export function getAdmsByEmail(email){
    const adm = adms.find(data => data.email === email);
    return adm;
}
