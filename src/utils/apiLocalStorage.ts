export class ApiLocalStorage {
    private readonly endpoint:string;

    constructor(endpoint) {
        this.endpoint = endpoint;
    }

    saveData(data): void {
        window.sessionStorage.setItem(this.endpoint, JSON.stringify(data));
    }

    getData(): any {
        return JSON.parse(window.sessionStorage.getItem(this.endpoint));
    }

    async getOneData(id: number) {
        return await this.getData().find(x => x.id === id) || {};
    }

    saveItem(newItem) {
        const data = this.getData();
        data.push(newItem);
        this.saveData(data);

        return newItem;
    }

    updateItem(id, newItem) {
        const data = this.getData();
        const itemIndex = data.findIndex(x => x.id === id);

        data.splice(itemIndex, 1, newItem);

        this.saveData(data);

        return newItem;
    }

    deleteItem(id) {
        const data = this.getData();
        const itemIndex = data.findIndex(x => x.id === id);

        const deletedItem = data.splice(itemIndex, 1)[0];

        this.saveData(data);

        return deletedItem;
    }
}
