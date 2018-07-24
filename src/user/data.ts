import { dataBase } from '../database'

const collection = dataBase.collection('users')

export async function getUsers() {
    const users: any[] = []

    await collection.orderBy('weight').get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                users.push(doc.data())
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