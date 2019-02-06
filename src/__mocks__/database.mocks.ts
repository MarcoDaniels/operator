export const dataBaseGet = (mockObject: any) => {
    return new Promise(resolve => {
        resolve([{
            data: jest.fn(() => {
                return mockObject
            })
        }])
    })
}
