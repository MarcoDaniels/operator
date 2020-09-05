import { dataBase } from '../database'
import { IUser } from '../user/type'

const collection = dataBase.collection('userEducation')

export async function getEducation(user: IUser) {
  const educations: any[] = []

  const query = collection.where('userName', '==', user.userName)
  await query.get().then((snapshot) => {
    snapshot.forEach((doc) => {
      educations.push(doc.data())
    })
  })

  return educations
}
