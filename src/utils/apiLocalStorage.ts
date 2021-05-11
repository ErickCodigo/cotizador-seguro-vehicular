export class ApiLocalStorage<T> {
    private readonly endpoint: string;

    constructor(endpoint) {
        this.endpoint = endpoint;
    }

    saveData(data): void {
        window.sessionStorage.setItem(this.endpoint, JSON.stringify(data));
    }

    getData(): T[] {
        return JSON.parse(window.sessionStorage.getItem(this.endpoint));
    }

    findOne(prop: string, value: number | string): T {
        return this.getData().find(x => x[prop] === value);
    }

    saveItem(newItem: T): T {
        const data = this.getData();
        data.push(newItem);

        this.saveData(data);

        return newItem;
    }

    updateItem(id: number, newItem): T {
        const data = this.getData();
        // @ts-ignore
        const itemIndex = data.findIndex(x => x.id === id);
        // @ts-ignore
        const item = data.find(x => x.id === id);

        data.splice(itemIndex, 1, newItem);

        this.saveData(data);

        return item;
    }

    deleteItem(id: number): T {
        const data = this.getData();
        // @ts-ignore
        const itemIndex = data.findIndex(x => x.id === id);

        const deletedItem = data.splice(itemIndex, 1)[0];

        this.saveData(data);

        return deletedItem;
    }
}
