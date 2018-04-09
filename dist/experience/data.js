"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const experiences = [
    {
        position: "Web Developer",
        workplace: "GulogGratis.dk",
        startDate: "September 2013",
        endDate: "today",
        location: "Odense, Denmark",
        details: "Web Developer @ GulogGratis.dk A/S"
    },
    {
        position: "Software Developer",
        workplace: "SoftExpert",
        startDate: "October 2011",
        endDate: "October 2012",
        location: "Joinvile, Brazil",
        details: "Software Developer @ SoftExpert"
    }
];
function getExperience(args) {
    const [experience] = experiences.filter((experience) => {
        return experience.position == args.position;
    });
    return experience;
}
exports.getExperience = getExperience;
function getExperiences() {
    return experiences;
}
exports.getExperiences = getExperiences;
//# sourceMappingURL=data.js.map