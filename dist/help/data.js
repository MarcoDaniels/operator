"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpData = [
    {
        type: 'project',
        description: 'Contains all the projects',
        usage: 'project [<args>] [<project name>]',
        content: [
            'project [--help]  Displays help options',
            'project [--list] [-ls] Lists all projects',
            'project [--info] [-i] <project name> Displays detailed information about the project',
        ]
    },
    {
        type: 'experience',
        description: 'Contains all the work experiences',
        usage: 'experience [<args>] [<experience position>]',
        content: [
            'experience [--help]  Displays help options',
            'experience [--list] [-ls] Lists all work experiences',
            'experience [--info] [-i] <project name> Displays detailed information about the work experience'
        ]
    }
];
function getHelp() {
    return helpData;
}
exports.getHelp = getHelp;
function getHelpData(args) {
    const [help] = helpData.filter((help) => {
        return help.type === args.type;
    });
    return help;
}
exports.getHelpData = getHelpData;
//# sourceMappingURL=data.js.map