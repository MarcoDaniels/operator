import { UserType } from './type'

const users: UserType[] = [
    {
        name: 'root',
        description: 'I am root',
        welcomeMessage: [
            'I am a cybernetic organism. Living components, classes, modules, services and templates over a HTML endoskeleton.',
            'My mission is to execute and interpret commands submited by you!'
        ]
    },
    {
        name: 'Marco Daniel Martins',
        description: 'Software Developer @ Jysk Fynske Medier',
        welcomeMessage: [
            'Graduated in Computer Engineer at Universidade do Algarve in Faro, Portugal.',
            'Passion for web development, programming, calculus, physics and everything logic.',
        ]
    },
]

export function getUser(args: any): UserType {
    const [user] = users.filter((user) => {
        return user.name === args.name
    })

    return user
}

export function getUsers(): UserType[] {
    return users
}