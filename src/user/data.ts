import { dataBase } from '../database'

const collection = dataBase.collection('users')

export async function getUsers() {
    const users: any[] = []

    await collection.get()
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

export async function getCollaborators(userNames: string[]) {
    const collaborators: any[] = []

    const query = collection.where('userName', '==', userNames[0])
    await query.get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                collaborators.push(doc.data())
            })
        })

    return collaborators
}