"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users = [
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
];
function getUser(args) {
    const [user] = users.filter((user) => {
        return user.name == args.name;
    });
    return user;
}
exports.getUser = getUser;
function getUsers() {
    return users;
}
exports.getUsers = getUsers;
//# sourceMappingURL=data.js.map