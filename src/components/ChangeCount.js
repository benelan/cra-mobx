import React from "react";
import { observer } from "mobx-react";
import { useStores } from '../hooks/use-stores'

const ChangeCount = observer(() => {
    const { counterStore } = useStores()
    return (
        <div>
            <button onClick={() => counterStore.increment()}>Increment</button>
            <button onClick={() => counterStore.reset()}>Reset</button>
            <button onClick={() => counterStore.decrement()}>Decrement</button>
        </div>
    );
}
);

export default ChangeCount;