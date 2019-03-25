import { GraphQLList } from 'graphql'
import { SocialMedia } from './type'
import { IUser } from '../user/type'
import { getSocialMedias } from './data'
import { IGraphQLFieldQuery } from '../utils/GraphQLFieldQuery'

export const ListUserSocialMediaQuery: IGraphQLFieldQuery<IUser, {}, {}> = {
    type: GraphQLList(SocialMedia),
    description: SocialMedia.description,
    resolve: (source: IUser) => {
        return getSocialMedias(source)
    }
}
