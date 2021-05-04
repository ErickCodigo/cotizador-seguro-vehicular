import {ApiLocalStorage} from "./apiLocalStorage";
import {DataUpdate, NewData} from "./models/ApiPolicyholder";

/*Nota:
* Debido a: "You can use GET, POST, PUT, PATCH and DELETE. Changes aren't persisted between calls."
* Es decir, que estos métodos no cambiarán realmente los datos sino que serán simulados obté por utilizar
* el almacenamiento local para manipular los datos.*/

export class ApiPolicyholder {
    private readonly baseEndpoint: string;
    private apiLocalStorage: ApiLocalStorage;

    constructor() {
        this.baseEndpoint = "https://my-json-server.typicode.com/ErickCodigo/datos-asegurados-hacking-challenge/policyholders";
        this.apiLocalStorage = new ApiLocalStorage(this.baseEndpoint);
        this.init().then();
    }

    private async init(): Promise<void> {
        const data = await (await fetch(this.baseEndpoint)).json();

        this.apiLocalStorage.saveData(data);
    }

    async save(newData: NewData) {
        // const options = {
        //     method: 'POST',
        //     body: JSON.stringify(newData),
        //     headers: {'Content-type': 'application/json; charset=UTF-8',}
        // };
        //
        // return await (await fetch(this.baseEndpoint, options)).json();
        return this.apiLocalStorage.saveItem(newData);
    }

    async show() {
        // return (await fetch(this.baseEndpoint)).json();
        return await this.apiLocalStorage.getData();
    }

    async showOne(id: number) {
        // const endpoint = this.baseEndpoint.concat(`/${id}`);
        // return await (await fetch(endpoint)).json();
        return this.apiLocalStorage.getOneData(id);
    }

    async update(id: number, newData: DataUpdate) {
        // const options = {
        //     method: 'PUT',
        //     body: JSON.stringify(newData),
        //     headers: {'Content-type': 'application/json; charset=UTF-8',}
        // };
        //
        // return await (await fetch(this.baseEndpoint, options)).json();
        return this.apiLocalStorage.updateItem(id, newData);
    }

    async delete(id: number) {
        // const endpoint = this.baseEndpoint.concat(`/${id}`);
        // const options = {method: 'DELETE'};
        //
        // console.log(endpoint)
        //
        // return await (await fetch(endpoint, options)).json();
        return this.apiLocalStorage.deleteItem(id);
    }
}
