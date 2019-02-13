import { dataBase } from '../database'
import { IUser } from '../user/type'

const collection = dataBase.collection('userSkills')

export async function listUserSkills(user: IUser) {
    const skills: any[] = []

    const userQuery = collection.where('userName', '==', user.userName).orderBy('level')
    await userQuery.get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                skills.push(doc.data())
            })
        })

    return skills
}
