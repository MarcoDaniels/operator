import { GraphQLList } from 'graphql'
import { SocialMedia } from './type'
import { UserType } from '../user/type'
import { dataBase } from '../database'

const collection = dataBase.collection('userSocialMedia')

async function getSocialMedias(user: UserType) {
    const socialMedias: any[] = []

    const query = collection.where('userName', '==', user.userName)
    await query.get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                socialMedias.push(doc.data())
            })
        })

    return socialMedias
}

export const ListUserSocialMediaQuery: any = {
    type: new GraphQLList(SocialMedia),
    description: SocialMedia.description,
    resolve: (source: UserType) => {
        return getSocialMedias(source)
    }
}