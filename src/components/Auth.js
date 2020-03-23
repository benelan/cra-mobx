import React from "react";
import { observer } from "mobx-react";
import { useStores } from '../hooks/use-stores'

const Auth = observer(() => {
    const { userStore } = useStores()
    return (
        <div>
            <div>{userStore.name}</div>
            {
                userStore.sI ?
                    <button onClick={() => userStore.signOut()}>Sign Out</button>
                    :
                    <button onClick={() => userStore.signIn()}>Sign In</button>
            }
        </div>
    );
}
);

export default Auth;