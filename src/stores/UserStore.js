import { action, observable, decorate } from "mobx"

export class UserStore {
    name = "Anonymous";
    sI = false; // signed in?

    signIn() {
        this.name = "John Smith";
        this.sI = true;
    }
    signOut() {
        this.name = "Anonymous";
        this.sI = false;
    }
}

decorate(UserStore, {
    name: observable,
    sI: observable,
    signIn: action,
    signOut: action
})