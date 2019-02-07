export const dbGetMock = (mockObject: any) => {
    return new Promise(resolve => {
        resolve([{
            data: jest.fn(() => {
                return mockObject
            })
        }])
    })
}

export function dbCollectionMock(objectMock: any) {
    return {
        dataBase: {
            collection: jest.fn(() => {
                return {
                    where: jest.fn(() => {
                        return {
                            get: jest.fn(() => dbGetMock(objectMock)),
                            orderBy: jest.fn(() => {
                                return {
                                    get: jest.fn(() => dbGetMock(objectMock))
                                }
                            })
                        }
                    }),
                    orderBy: jest.fn(() => {
                        return {
                            get: jest.fn(() => dbGetMock(objectMock))
                        }
                    })
                }
            })
        }
    }
}
