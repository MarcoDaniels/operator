import { IEducation } from '../education/type'
import { IExperience } from '../experience/type'
import { IHelp } from '../help/type'
import { IProject } from '../project/type'
import { ISkills } from '../skills/type'
import { ISocialMedia } from '../social/type'
import { IUser } from '../user/type'

export const educationMock: IEducation = {
    institution: 'MIT',
    degree: 'Bsc.',
    field: 'Computer Science',
    location: 'mit',
    from: 'never',
    to: 'never ending'
}

export const experienceMock: IExperience = {
    user: {},
    position: 'developer',
    workplace: 'home',
    from: 'beginning',
    to: 'end',
    location: 'home'
}

export const helpMock: IHelp = {
    type: 'help',
    description: 'this is help'
}

export const projectMock: IProject = {
    name: 'operator',
    homepage: 'www',
    description: 'operator is a GraphQL API',
    collaborators: ['me', 'you']
}

export const skillsMock: ISkills = {
    identifier: 'fast',
    name: 'Faster'
}

export const socialMediaMock: ISocialMedia = {
    identifier: 'social',
    name: 'My social media',
    url: 'https://marcodaniels.com'
}

export const userMock: IUser = {
    userName: 'this-user'
}
