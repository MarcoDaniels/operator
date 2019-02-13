import { GraphQLFieldConfig, GraphQLFieldResolver } from 'graphql'

export interface GraphQLFieldQueryType<Source, Context, Args> extends GraphQLFieldConfig<Source, Context, Args> {
    description: string
    resolve: GraphQLFieldResolver<Source, Context, Args>
}
