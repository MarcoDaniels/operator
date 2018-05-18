import { ProjectType } from './type'
import { UserType } from '../user/type'

const projects: ProjectType[] = [
    {
        name: 'my little virtual friend',
        homepage: 'http://mylittlevirtualfriend.com',
        releaseDate: 'April 2018',
        description: 'A virtual command line interface',
        details: [
            'My little virtual friend interprets commands inserted by the user.',
            'Developed using Node.js, React.js, GraphQL and TypeScript.'
        ],
        collaborators: ['marcodaniels']
    },
    {
        name: 'Marco Daniel Martins',
        homepage: 'http://marcodaniels.com',
        releaseDate: 'October 2017',
        description: 'Online CV',
        details: [
            'Online CV.',
            'Developed using HTML and CSS.'
        ],
        collaborators: ['marcodaniels']
    },
    {
        name: 'Joyful Talks',
        homepage: 'http://joyfultalks.com',
        releaseDate: 'June 2016',
        description: 'Joyful Talks is a personal blog',
        details: [
            'Web application for a personal blog.',
            'Developed using CodeIgniter PHP, MySQL, jQuery and CSS Bootstrap.'
        ],
        collaborators: ['marcodaniels']
    },
    {
        name: 'Cerejas Mari\'José',
        homepage: 'http://marijose.pt',
        releaseDate: 'May 2014',
        description: 'Cerejas Mari\'José is a fruit company',
        details: [
            'Web application development for a family fruit company.',
            'Website with back-office and news feed management.',
            'Developed using Laravel PHP framework and Bootstrap, MySQL, jQuery, HTML5 and CSS3.'
        ],
        collaborators: ['marcodaniels']
    }
]

export function getProject(args: ProjectType): ProjectType {
    const [project] = projects.filter((project) => {
        return project.name === args.name
    })

    return project
}

export function getProjects(user?: UserType): ProjectType[] {
    if (user) {
        return projects.filter((project) => {
            return project.collaborators.filter((collaborator) => {
                return collaborator === user.userName
            })
        })
    }
    return projects
}