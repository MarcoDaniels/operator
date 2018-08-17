import { dataBase } from '../database'
import { CollectionArgumentsType, CollectionOutputType } from '../collection'

const collection = dataBase.collection('users')

export async function getUsers(args: CollectionArgumentsType) {
    const users: CollectionOutputType = {
        metadata: {
            page: args.page,
            perPage: args.perPage,
            total: 0
        },
        data: []
    }

    await collection.orderBy('weight')
        .limit(args.perPage)
        .get().then((snapshot) => {
            snapshot.forEach((doc) => {
                users.data.push(doc.data())
            })
        })

    return users
}

export async function getUser(userName: string) {
    let user: any = {}

    const query = collection.where('userName', '==', userName)
    await query.get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                user = doc.data()
            })
        })

    return user
}

export async function getCollaborators(users: object) {
    const collaborators: any[] = []

    // Too many requests?!
    for (let userName in users) {
        if (users.hasOwnProperty(userName)) {
            collaborators.push(await getUser(userName))
        }
    }

    return collaborators
}