import { dataBase } from '../database'

const collection = dataBase.collection('skills')

export async function getSkills() {
    const skills: any[] = []

    await collection.get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                skills.push(doc.data())
            })
        })

    return skills
}