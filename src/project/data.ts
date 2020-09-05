import { IUser } from '../user/type'
import { dataBase } from '../database'

const collection = dataBase.collection('projects')

export async function getProject(name: string) {
  let project: any = {}

  const query = collection.where('name', '==', name)
  await query.get().then((snapshot) => {
    snapshot.forEach((doc) => {
      project = doc.data()
    })
  })

  return project
}

export async function listProjects(user?: IUser) {
  const projects: any[] = []

  if (user) {
    const collaborator: string = 'collaborators.' + user.userName
    const query = collection.where(collaborator, '==', true)
    await query
      .orderBy('weight')
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          projects.push(doc.data())
        })
      })
  } else {
    await collection
      .orderBy('weight')
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          projects.push(doc.data())
        })
      })
  }

  return projects
}
