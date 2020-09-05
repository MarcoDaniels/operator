import { Project } from '../type'
import { GraphQLList, GraphQLNonNull, GraphQLString } from 'graphql'

jest.mock('../../user/type', () => {
  return { User: {} }
})

jest.mock('../../user/query', () => {
  return { ProjectCollaboratorsQuery: { type: {} } }
})

describe('project type', () => {
  it('should check for all project fields type', () => {
    const fields = Project.getFields()

    expect(fields).toHaveProperty('name')
    expect(fields.name.type).toMatchObject(GraphQLNonNull(GraphQLString))

    expect(fields).toHaveProperty('homepage')
    expect(fields.homepage.type).toMatchObject(GraphQLNonNull(GraphQLString))

    expect(fields).toHaveProperty('releaseDate')
    expect(fields.releaseDate.type).toMatchObject(GraphQLString)

    expect(fields).toHaveProperty('description')
    expect(fields.description.type).toMatchObject(GraphQLNonNull(GraphQLString))

    expect(fields).toHaveProperty('details')
    expect(fields.details.type).toMatchObject(GraphQLList(GraphQLString))

    expect(fields).toHaveProperty('collaborators')
  })
})
