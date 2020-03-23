import React, { Component } from "react";
import { observer} from "mobx-react";
import storesContext from '../contexts/storesContext'

const ShowCount = (
    observer(
        class ShowCount extends Component {
            static contextType = storesContext
            render() {
                const store = this.context
                return (
                    <div>{store.counter}</div>
                );
            }
        }
    )
);

export default ShowCount;