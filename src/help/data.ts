import { IHelp } from './type'
import { dataBase } from '../database'

const collection = dataBase.collection('help')

export async function getHelp(args: IHelp) {
  let help: any = {}

  const query = collection.where('type', '==', args.type)
  await query.get().then((snapshot) => {
    snapshot.forEach((doc) => {
      help = doc.data()
    })
  })

  return help
}

export async function listHelp() {
  const help: any[] = []

  await collection
    .orderBy('weight')
    .get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        help.push(doc.data())
      })
    })

  return help
}
