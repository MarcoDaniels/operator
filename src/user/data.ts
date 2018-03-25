export function getUser(args: any) {
    return {id: 1, name: 'user 1', email: 'user1@example.com', phone: '111 111 111'}
}

export function getUsers() {
    return [
        {id: 1, name: 'user 1', email: 'user1@example.com', phone: '111 111 111'},
        {id: 2, name: 'user 2', email: 'user2@example.com', phone: '111 222 222'},
        {id: 3, name: 'user 3', email: 'user3@example.com', phone: '111 333 333'}
    ]
}