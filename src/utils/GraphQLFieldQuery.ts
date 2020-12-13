import { GraphQLFieldConfig, GraphQLFieldResolver } from 'graphql'
import { Maybe } from 'graphql/jsutils/Maybe'

export interface IGraphQLFieldQuery<Source, Context, Args> extends GraphQLFieldConfig<Source, Context, Args> {
  description: Maybe<string>
  resolve: GraphQLFieldResolver<Source, Context, Args>
}
