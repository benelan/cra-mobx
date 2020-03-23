import React from 'react'
import { CounterStore } from '../stores/CounterStore'
import { UserStore } from '../stores/UserStore'

export const storesContext = React.createContext({
  counterStore: new CounterStore(),
  userStore: new UserStore()
})