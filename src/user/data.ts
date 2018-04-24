import { UserType } from './type'

const users: UserType[] = [
    {
        name: 'root',
        email: 'root@example.com',
        userName: 'root',
        description: [
            'I am root'
        ],
        welcomeMessage: [
            'I am a cybernetic organism. Living components, classes, modules, services and templates over a HTML endoskeleton.',
            'My mission is to execute and interpret commands submitted by you!'
        ]
    },
    {
        name: 'Marco Daniel Martins',
        email: 'marcodanielmartins@gmail.com',
        userName: 'marcodaniels',
        description: [
            'Software Developer @ Jysk Fynske Medier'
        ],
        welcomeMessage: [
            'Graduated in Computer Engineer at Universidade do Algarve in Faro, Portugal.',
            'Passion for web development, programming, calculus, physics and everything logic.',
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