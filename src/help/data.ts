import { HelpType } from './type'

const helpData: HelpType[] = [
    {
        type: 'about',
        description: 'Contains all about the users',
        usage: 'about [<args>] [<u_name>]',
        content: [
            'about [--help] [-h] Displays help options',
            'about [--list] [-ls] Lists all users',
            'about [--info] [-i] <u_name> Displays detailed information about the user',
            'about [--work] [-w] <u_name> Displays work experiences about the user',
        ]
    },
    {
        type: 'project',
        description: 'Contains all the projects',
        usage: 'project [<args>] [<project name>]',
        content: [
            'project [--help] [-h] Displays help options',
            'project [--list] [-ls] Lists all projects',
            'project [--info] [-i] <project name> Displays detailed information about the project',
            'project [--open] [-o] <project name> Opens project in a new tab',
        ]
    }
]

export function listHelp() {
    return helpData
}

export function getHelp(args: HelpType): HelpType {
    const [help] = helpData.filter((help) => {
        return help.type === args.type
    })

    return help
}