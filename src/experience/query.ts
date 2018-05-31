import { Experience } from './type'
import { GraphQLList } from 'graphql'
import { UserType } from '../user/type'
import { dataBase } from '../database'

const collection = dataBase.collection('userExperience')

async function getExperiences(user: UserType) {
    const experiences: any[] = []

    const query = collection.where('userName', '==', user.userName)
    await query.get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                experiences.push(doc.data())
            })
        })

    return experiences
}

export const ListUserExperienceQuery: any = {
    type: new GraphQLList(Experience),
    description: Experience.description,
    resolve: (source: UserType) => {
        return getExperiences(source)
    }
}