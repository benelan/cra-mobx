import { action, observable, decorate } from "mobx"

class DataStore {
    counter = 0;

    increment() {
        this.counter++;
    }
    decrement() {
        this.counter--;
    }
    reset() {
        this.counter = 0;
    }
}

decorate(DataStore, {
    counter: observable,
    increment: action,
    decrement: action,
    reset: action
})

export default new DataStore()