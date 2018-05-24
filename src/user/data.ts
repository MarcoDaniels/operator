import { UserType } from './type'

const users: UserType[] = [
    {
        userName: 'root',
        name: 'I am root',
        email: 'root@example.com',
        title: 'i am root @ my little virtual friend',
        welcomeMessage: [
            'I am a cybernetic organism. Living components, classes, modules, services and templates over a HTML endoskeleton.',
            'My mission is to execute and interpret commands submitted by you!'
        ],
        description: [
            'I am a machine designed by Marco Daniel Martins to interpret some of your commands.',
            'My data consists in projects, work experiences, educations and interests about Marco Daniel.',
            'In a more "human" way, I am a virtual command line interface Curriculum Vitae for Marco Daniel.',
            'I am in a constant upgrade, but I hope my services can meet your expectations.',
        ],
        interests: [
            'I like TypeScript, JavaScript, React, GraphQL, Git and Firebase.',
        ]
    },
    {
        userName: 'marcodaniels',
        name: 'Marco Daniel Martins',
        email: 'marcodanielmartins@gmail.com',
        title: 'Software Developer @ Jysk Fynske Medier',
        welcomeMessage: [
            'I build Software, Lego sets and Ikea furniture.',
        ],
        description: [
            'I am a software developer with 5+ years of experience in building web and software applications.',
            'Through my working experience I developed an ability to understand, adapt and work with large and complex code base applications.',
            'I have an interest in problem-solving and (re)building solutions to improve software performance, with a particular interest in software architecture and agile methodologies.',
            'Passion for programming, technology, physics, calculus and everything logic.',
        ],
        interests: [
            'Despite the regular interest for technology and programming, I also like to spend some time reading comic books and watching movies(mostly super-hero based). I don’t consider myself a “collector”, but I have a considerable amount of comic books and Lego superhero minifigures.',
            'I also like to take some pictures and share them on my Instagram.',
        ]
    },
]

export function getUsers(): UserType[] {
    return users
}

export function getUser(userName: string): UserType {
    const [user] = users.filter((user) => {
        return user.userName === userName
    })

    return user
}

export function getCollaborators(userNames: string[]): UserType[] {
    const collaborators: UserType[] = []

    users.map(value => {
        if (userNames.includes(value.userName)) {
            collaborators.push(value)
        }
    })

    return collaborators
}