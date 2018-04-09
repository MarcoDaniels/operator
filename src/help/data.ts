import {HelpType} from './type'

const helpData: HelpType[] = [
    {
        type: 'project',
        content: [
            'usage: project [<args>] [<project name>]',
            '',
            'project [--help]  Displays help options',
            'project [--list] [-ls] Lists all projects',
            'project [--info] [-i] <project name> Displays detailed information about the project',
            'project [--open] [-o] <project name> Opens project in a new tab'
        ]
    },
    {
        type: 'experience',
        content: [
            'usage: experience [<args>] [<experience position>]',
            '',
            'experience [--help]  Displays help options',
            'experience [--list] [-ls] Lists all work experiences',
            'experience [--info] [-i] <project name> Displays detailed information about the work experience'
        ]
    }
]

export function getHelp(args: HelpType): HelpType {
    const [help] = helpData.filter((help) => {
        return help.type == args.type
    })

    return help
}