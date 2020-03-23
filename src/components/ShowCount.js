import React from "react";
import { observer } from "mobx-react";
import { useStores } from '../hooks/use-stores'

const ShowCount = observer(() => {
    const { counterStore } = useStores()
    return (
        <div>{counterStore.counter}</div>
    );
}
);

export default ShowCount;