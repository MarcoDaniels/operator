import { GraphQLList } from 'graphql'
import { Education } from './type'
import { UserType } from '../user/type'
import { dataBase } from '../database'

const collection = dataBase.collection('userEducation')

async function getEducations(user: UserType) {
    const educations: any[] = []

    const query = collection.where('userName', '==', user.userName)
    await query.get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                educations.push(doc.data())
            })
        })

    return educations
}

export const ListUserEducationQuery: any = {
    type: new GraphQLList(Education),
    description: Education.description,
    resolve: (source: UserType) => {
        return getEducations(source)
    }
}