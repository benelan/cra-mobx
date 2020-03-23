import { action, observable, decorate } from "mobx"

export class CounterStore {
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

decorate(CounterStore, {
    counter: observable,
    increment: action,
    decrement: action,
    reset: action
})