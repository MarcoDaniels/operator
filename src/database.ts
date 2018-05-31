import { config } from 'firebase-functions'
import { firestore, initializeApp } from 'firebase-admin'

initializeApp(config().firebase)

export const dataBase = firestore()