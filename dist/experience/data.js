"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const experiences = [
    {
        position: 'Software Developer @ Jysk Fynske Medier',
        workplace: 'Jysk Fynske Medier',
        from: 'September 2013',
        to: 'today',
        location: 'Odense, Denmark',
        details: 'Creating web solutions for GulogGratis.dk. Maintenance of PHP monolith.\n' +
            'Implementation of micro-services using Node.js, GraphQL and Typescript.\n' +
            'PHP, JavaScript, TypeScript, Node.js, GraphQL, React.js, REST, gRPC, RabbitMQ, Solr, MySQL.'
    },
    {
        position: 'Software Developer @ SoftExpert',
        workplace: 'SoftExpert',
        from: 'October 2011',
        to: 'October 2012',
        location: 'Joinvile, Brazil',
        details: 'Implementation of Java aplications using Agile practices.\n' +
            'Integration of 3D modeling software(Inventor, AutoCAD) with Document Management.\n' +
            'Java Web, Servlets, PHP, JavaEE, SQL Server, Delphi, SVN.'
    }
];
function getExperiences() {
    return experiences;
}
exports.getExperiences = getExperiences;
function getExperience(args) {
    const [experience] = experiences.filter((experience) => {
        return experience.position === args.position;
    });
    return experience;
}
exports.getExperience = getExperience;
//# sourceMappingURL=data.js.map