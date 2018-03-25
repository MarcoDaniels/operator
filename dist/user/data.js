"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getUser(args) {
    return { id: 1, name: 'user 1', email: 'user1@example.com', phone: '111 111 111' };
}
exports.getUser = getUser;
function getUsers() {
    return [
        { id: 1, name: 'user 1', email: 'user1@example.com', phone: '111 111 111' },
        { id: 2, name: 'user 2', email: 'user2@example.com', phone: '111 222 222' },
        { id: 3, name: 'user 3', email: 'user3@example.com', phone: '111 333 333' }
    ];
}
exports.getUsers = getUsers;
//# sourceMappingURL=data.js.map