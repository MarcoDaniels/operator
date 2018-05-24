import { SkillsType } from './type'

const skills: SkillsType[] = [
    {
        identifier: 'php',
        name: 'PHP',
        description: 'PHP: Hypertext Preprocessor is a server-side scripting language designed for web development but also used as a general-purpose programming language.'
    },
    {
        identifier: 'js',
        name: 'JavaScript',
        description: 'JavaScript, often abbreviated as JS, is a high-level, interpreted programming language.'
    },
    {
        identifier: 'java',
        name: 'Java',
        description: 'Java is a general-purpose computer-programming language that is concurrent, class-based, object-oriented, and specifically designed to have as few implementation dependencies as possible.'
    },
    {
        identifier: 'mysql',
        name: 'MySQL',
        description: 'MySQL is an open-source relational database management system.'
    },
]

export function getSkills(search?: string): SkillsType[] {
    if (search) {
        return skills.filter((skill) => {
            return skill.name.includes(search)
        })
    }
    return skills
}