import { ExperienceType } from './type'

const experiences: ExperienceType[] = [
    {
        position: 'Web Developer',
        workplace: 'GulogGratis.dk',
        startDate: 'September 2013',
        endDate: 'today',
        location: 'Odense, Denmark',
        details: 'Web Developer @ GulogGratis.dk A/S'
    },
    {
        position: 'Software Developer',
        workplace: 'SoftExpert',
        startDate: 'October 2011',
        endDate: 'October 2012',
        location: 'Joinvile, Brazil',
        details: 'Software Developer @ SoftExpert'
    }
]

export function getExperience(args: ExperienceType): ExperienceType {
    const [experience] = experiences.filter((experience) => {
        return experience.position == args.position
    })

    return experience
}

export function getExperiences(): ExperienceType[] {
    return experiences
}