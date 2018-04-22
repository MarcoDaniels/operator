"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users = [
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
];
function getUser(args) {
    const [user] = users.filter((user) => {
        return user.name === args.name;
    });
    return user;
}
exports.getUser = getUser;
function getUsers() {
    return users;
}
exports.getUsers = getUsers;
//# sourceMappingURL=data.js.map