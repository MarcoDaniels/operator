import { ProjectType } from './type'
import { UserType } from '../user/type'
import { dataBase } from '../database'

const collection = dataBase.collection('projects')

export async function getProject(args: ProjectType) {
    let project: any = {}

    const query = collection.where('name', '==', args.name)
    await query.get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                project = doc.data()
            })
        })

    return project
}

export async function getProjects(user?: UserType) {
    const projects: any[] = []

    if (user) {
        const collaborator: string = 'collaborators.' + user.userName
        const query = collection.where(collaborator, '==', true)
        await query.orderBy('weight').get()
            .then((snapshot) => {
                snapshot.forEach((doc) => {
                    projects.push(doc.data())
                })
            })
    } else {
        await collection.orderBy('weight').get()
            .then((snapshot) => {
                snapshot.forEach((doc) => {
                    projects.push(doc.data())
                })
            })
    }

    return projects
}