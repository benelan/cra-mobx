import React, { Component } from "react";
import { observer, inject } from "mobx-react";

const ShowCount = inject("DataStore")(
    observer(
        class ShowCount extends Component {
            render() {
                return (
                    <div>{this.props.DataStore.counter}</div>
                );
            }
        }
    )
);

export default ShowCount;