import { GraphQLFieldConfig, GraphQLFieldResolver } from 'graphql'

export interface IGraphQLFieldQuery<Source, Context, Args> extends GraphQLFieldConfig<Source, Context, Args> {
    description: string
    resolve: GraphQLFieldResolver<Source, Context, Args>
}
