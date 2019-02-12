import { dataBase } from '../database'
import { UserType } from '../user/type'

const collection = dataBase.collection('userExperience')

export async function getExperiences(user: UserType) {
    const experiences: any[] = []

    const query = collection.where('userName', '==', user.userName)
    await query.orderBy('weight').get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                experiences.push(doc.data())
            })
        })

    return experiences
}
