import { SocialMediaType } from './type'
import { UserType } from '../user/type'

const socialMedias: SocialMediaType[] = [
    {
        userName: 'marcodaniels',
        identifier: 'linkedin',
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/marcodanielmartins',
        displayName: 'marcodanielsmartins'
    },
    {
        userName: 'marcodaniels',
        identifier: 'github',
        name: 'GitHub',
        url: 'https://github.com/MarcoDaniels',
        displayName: 'MarcoDaniels'
    },
    {
        userName: 'marcodaniels',
        identifier: 'instagram',
        name: 'Instagram',
        url: 'https://www.instagram.com/marcodanielmartins',
        displayName: 'marcodanielmartins'
    },
    {
        userName: 'marcodaniels',
        identifier: 'twitter',
        name: 'Twitter',
        url: 'https://twitter.com/iMarcoDaniels',
        displayName: 'iMarcoDaniels'
    }
]

export function getSocialMedias(user: UserType) {
    return socialMedias.filter((social) => {
        return social.userName === user.userName
    })
}