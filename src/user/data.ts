import {UserType} from './type'

const users: UserType[] = [
    {
        name: 'root',
        title: 'I am root',
        description: 'I am root',
        welcomeMessage: [
            'I am a cybernetic organism. Living components, classes, modules, services and templates over a HTML endoskeleton.',
            'My mission is to execute and interpret commands submited by you!'
        ]
    },
    {
        name: 'Marco Daniel',
        title: 'I am Marco Daniel',
        description: 'Nothing',
        welcomeMessage: [
            'Hey',
        ]
    },
]

export function getUser(args: any): UserType {
    const [user] = users.filter((user) => {
        return user.name == args.name
    })

    return user
}

export function getUsers(): UserType[] {
    return users
}