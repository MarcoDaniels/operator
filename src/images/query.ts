import { Images } from './type'
import { UserType } from '../user/type'
import { dataBase } from '../database'

const collection = dataBase.collection('userImages')

async function getImage(user: UserType) {
    let image: any = {}

    const query = collection
        .where('userName', '==', user.userName)
        .where('type', '==', 'avatar')
    await query.get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                image = doc.data()
            })
        })

    return image
}

export const GetUserImageQuery: any = {
    type: Images,
    description: Images.description,
    resolve: (source: UserType) => {
        return getImage(source)
    }
}