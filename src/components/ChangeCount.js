import React, { Component } from "react";
import { observer } from "mobx-react";
import storesContext from '../contexts/storesContext'

const ChangeCount = (
    observer(
        class ChangeCount extends Component {
            static contextType = storesContext

            componentDidMount() {
                const store = this.context
                console.log(store.counter)
            }

            render() {
                const store = this.context
                return (
                    <div>
                        <button onClick={() => store.increment()}>Increment</button>
                        <button onClick={() => store.reset()}>Reset</button>
                        <button onClick={() => store.decrement()}>Decrement</button>
                    </div>
                );
            }
        }
    )
);

export default ChangeCount;