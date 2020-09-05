import '../__mocks__/queries.mock'
import { User } from '../type'
import { GraphQLList, GraphQLNonNull, GraphQLString } from 'graphql'

describe('user type', () => {
  afterAll(() => {
    jest.clearAllMocks()
  })

  it('should check for all user fields type', () => {
    const fields = User.getFields()

    expect(fields).toHaveProperty('userName')
    expect(fields.userName.type).toMatchObject(GraphQLNonNull(GraphQLString))

    expect(fields).toHaveProperty('name')
    expect(fields.name.type).toMatchObject(GraphQLNonNull(GraphQLString))

    expect(fields).toHaveProperty('email')
    expect(fields.email.type).toMatchObject(GraphQLNonNull(GraphQLString))

    expect(fields).toHaveProperty('title')
    expect(fields.title.type).toMatchObject(GraphQLNonNull(GraphQLString))

    expect(fields).toHaveProperty('image')
    expect(fields.image.type).toMatchObject(GraphQLString)

    expect(fields).toHaveProperty('welcomeMessage')
    expect(fields.welcomeMessage.type).toMatchObject(GraphQLList(GraphQLString))

    expect(fields).toHaveProperty('description')
    expect(fields.description.type).toMatchObject(GraphQLList(GraphQLString))

    expect(fields).toHaveProperty('interests')
    expect(fields.interests.type).toMatchObject(GraphQLList(GraphQLString))

    expect(fields).toHaveProperty('skills')
    expect(fields).toHaveProperty('experience')
    expect(fields).toHaveProperty('projects')
    expect(fields).toHaveProperty('education')
    expect(fields).toHaveProperty('socialMedia')
  })
})
