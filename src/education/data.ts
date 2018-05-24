import { EducationType } from './type'
import { UserType } from '../user/type'

const educations: EducationType[] = [
    {
        userName: 'marcodaniels',
        institution: 'Universidade do Algarve',
        degree: 'Computer Engineering',
        field: 'Engineering',
        from: '2007',
        to: '2013',
        location: 'Faro, Portugal',
        details: [
            'Solid knowledge in C/C++, Java, PHP, HTML, CSS, MySQL, JavaScript, OpenGL, UML.',
            'CodeIgniter PHP Framework, MVC, interface design and systems analysis and modeling.',
            'Basic knowledge in Haskel, Assembly, Pascal and Shockwave Flash.'
        ]
    }
]

export function getEducations(user: UserType) {
    return educations.filter((education) => {
        return education.userName === user.userName
    })
}