import { HelpType } from './type'
import { dataBase } from '../database'

const collection = dataBase.collection('help')

export async function getHelp(args: HelpType) {
    let help: any = {}

    const query = collection.where('type', '==', args.type)
    await query.get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                help = doc.data()
            })
        })

    return help
}

export async function listHelp() {
    let help: any[] = []

    await collection.orderBy('weight').get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                help.push(doc.data())
            })
        })

    return help
}