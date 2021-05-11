import {ApiLocalStorage} from "./apiLocalStorage";
import {PolicyholderToUpdate, Policyholder} from "./models/ApiPolicyholder";
import {ENDPOINTS} from "../specs/endpoints";

/*Nota:
* Debido a: "You can use GET, POST, PUT, PATCH and DELETE. Changes aren't persisted between calls."
* Es decir, que estos métodos no cambiarán realmente los datos sino que serán simulados decidí por utilizar
* el almacenamiento local para manipular los datos.*/

export class ApiPolicyholder {
    private readonly baseEndpoint: string;
    private apiLocalStorage: ApiLocalStorage<Policyholder>;

    constructor() {
        this.baseEndpoint = ENDPOINTS.POLICYHOLDERS;
        this.apiLocalStorage = new ApiLocalStorage(this.baseEndpoint);
    }

    save(newData: Policyholder) {
        // const options = {
        //     method: 'POST',
        //     body: JSON.stringify(newData),
        //     headers: {'Content-type': 'application/json; charset=UTF-8',}
        // };
        //
        // return await (await fetch(this.baseEndpoint, options)).json();
        return this.apiLocalStorage.saveItem(newData);
    }

    show(): Policyholder[] {
        // return (await fetch(this.baseEndpoint)).json();
        return this.apiLocalStorage.getData();
    }

    // findOne(id: number): Policyholder {
    findOne(prop: string, value: number | string): Policyholder {
        // const endpoint = this.baseEndpoint.concat(`/${id}`);
        // return await (await fetch(endpoint)).json();

        return this.apiLocalStorage.findOne(prop, value);
    }

    update(id: number, newData: PolicyholderToUpdate): Policyholder {
        // const options = {
        //     method: 'PUT',
        //     body: JSON.stringify(newData),
        //     headers: {'Content-type': 'application/json; charset=UTF-8',}
        // };
        //
        // return await (await fetch(this.baseEndpoint, options)).json();
        return this.apiLocalStorage.updateItem(id, newData);
    }

    delete(id: number): Policyholder {
        // const endpoint = this.baseEndpoint.concat(`/${id}`);
        // const options = {method: 'DELETE'};
        // return await (await fetch(endpoint, options)).json();
        return this.apiLocalStorage.deleteItem(id);
    }
}
