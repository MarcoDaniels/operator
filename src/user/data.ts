import { dataBase } from '../database'
import { IObjectListArguments, IObjectList } from '../utils/objectList'

const collection = dataBase.collection('users')

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

export async function listUsers(args: IObjectListArguments) {
    const users: IObjectList = {
        metadata: {
            page: args.page,
            perPage: args.perPage,
            total: 0
        },
        data: []
    }

    const offset = (args.page - 1) * args.perPage
    await collection.orderBy('weight')
        .limit(args.perPage)
        .offset(offset)
        .get().then((snapshot) => {
            users.metadata.total = snapshot.size
            snapshot.forEach((doc) => {
                users.data.push(doc.data())
            })
        })

    return users
}

export async function getCollaborators(users: string[]) {
    const collaborators: any[] = []

    // Too many requests?!
    for (let userName in users) {
        if (users.hasOwnProperty(userName)) {
            collaborators.push(await getUser(userName))
        }
    }

    return collaborators
}
