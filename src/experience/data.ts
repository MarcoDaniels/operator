import { ExperienceType } from './type'
import { UserType } from '../user/type'

const experiences: ExperienceType[] = [
    {
        userName: 'marcodaniels',
        position: 'Software Developer @ Jysk Fynske Medier',
        workplace: 'Jysk Fynske Medier',
        from: 'September 2013',
        to: 'today',
        location: 'Odense, Denmark',
        details: [
            'Creating web solutions for GulogGratis.dk. Maintenance of PHP monolith.',
            'Implementation of micro-services using Node.js, GraphQL and Typescript.',
            'PHP, JavaScript, TypeScript, Node.js, GraphQL, React.js, REST, gRPC, RabbitMQ, Solr, MySQL.'
        ]
    },
    {
        userName: 'marcodaniels',
        position: 'Software Developer @ SoftExpert',
        workplace: 'SoftExpert',
        from: 'October 2011',
        to: 'October 2012',
        location: 'Joinvile, Brazil',
        details: [
            'Implementation of Java aplications using Agile practices.',
            'Integration of 3D modeling software(Inventor, AutoCAD) with Document Management.',
            'Java Web, Servlets, PHP, JavaEE, SQL Server, Delphi, SVN.'
        ]
    }
]

export function getExperiences(user?: UserType): ExperienceType[] {
    if (user) {
        return experiences.filter((experience) => {
            return experience.userName === user.userName
        })
    }
    return experiences
}

export function getExperience(args: ExperienceType): ExperienceType {
    const [experience] = experiences.filter((experience) => {
        return experience.position === args.position
    })

    return experience
}