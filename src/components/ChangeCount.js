import React, { Component } from "react";
import { observer, inject } from "mobx-react";

const ChangeCount = inject("DataStore")(
    observer(
        class ChangeCount extends Component {
            inc = () => {
                this.props.DataStore.increment()
            }
            res = () => {
                this.props.DataStore.reset()
            }
            dec = () => {
                this.props.DataStore.decrement()
            }
            render() {
                return (
                    <div>
                        <button onClick={() =>this.inc()}>Increment</button>
                        <button onClick={() => this.res()}>Reset</button>
                        <button onClick={() => this.dec()}>Decrement</button>
                    </div>
                );
            }
        }
    )
);

export default ChangeCount;