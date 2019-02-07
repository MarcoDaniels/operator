import { dataBase } from '../database'
import { UserType } from '../user/type'

const collection = dataBase.collection('userSocialMedia')

export async function getSocialMedias(user: UserType) {
    const socialMedias: any[] = []

    const query = collection.where('userName', '==', user.userName)
    await query.orderBy('weight').get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                socialMedias.push(doc.data())
            })
        })

    return socialMedias
}
