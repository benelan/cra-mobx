import { action, observable, computed, decorate } from "mobx"

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
    get square() {
        return this.count * this.count;
      }
}

decorate(CounterStore, {
    counter: observable,
    increment: action.bound,
    decrement: action.bound,
    reset: action.bound,
    square: computed
})