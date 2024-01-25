import { User } from "./UserModel.js";

class AdmModel extends User{
    constructor(name, email, password, status){
        super(name, email, password);
        this.store = status;
    }
}

export { AdmModel }