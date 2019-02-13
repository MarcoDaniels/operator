jest.mock('../../skills/query', () => {
    return {ListUserSkillsQuery: {type: {}}}
})

jest.mock('../../experience/query', () => {
    return {ListUserExperienceQuery: {type: {}}}
})

jest.mock('../../project/query', () => {
    return {ListUseProjectQuery: {type: {}}}
})

jest.mock('../../education/query', () => {
    return {ListUseEducationQuery: {type: {}}}
})

jest.mock('../../social/query', () => {
    return {ListUseSocialMediaQuery: {type: {}}}
})
