import {ProjectType} from './type'

const projects: ProjectType[] = [
    {
        name: "Joyful Talks",
        homepage: "http://joyfultalks.com",
        releaseDate: "June 2016",
        description: "Joyful Talks is a personal blog",
        details: "Joyful talks run in CodeIgniter PHP, MySQL, jQuery and CSS Bootstrap."
    },
    {
        name: "Cerejas Mari'José",
        homepage: "http://marijose.pt",
        releaseDate: "May 2014",
        description: "Website for a fruit company",
        details: "Cerejas Mari'José runs in Laravel PHP framework, Bootstrap CSS, MySQL and jQuery."
    }
]

export function getProject(args: ProjectType): ProjectType {
    const [project] = projects.filter((project) => {
        return project.name == args.name
    })

    return project
}

export function getProjects(): ProjectType[] {
    return projects
}