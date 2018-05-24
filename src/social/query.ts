import { GraphQLList } from 'graphql'
import { SocialMedia } from './type'
import { UserType } from '../user/type'
import { getSocialMedias } from './data'

export const ListUserSocialMediaQuery: any = {
    type: new GraphQLList(SocialMedia),
    description: SocialMedia.description,
    resolve: (source: UserType) => {
        return getSocialMedias(source)
    }
}