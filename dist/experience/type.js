"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
exports.ExperienceType = new graphql_1.GraphQLObjectType({
    name: 'Experience',
    description: 'Work experience.',
    fields: function () { return ({
        id: {
            type: graphql_1.GraphQLID,
            description: 'The experience id.'
        },
        position: {
            type: graphql_1.GraphQLString,
            description: 'The position name.'
        },
        workplace: {
            type: graphql_1.GraphQLString,
            description: 'The workplace name.'
        },
        startDate: {
            type: graphql_1.GraphQLString,
            description: 'The start date of the experience'
        },
        endDate: {
            type: graphql_1.GraphQLString,
            description: 'The end date of the experience'
        },
        location: {
            type: graphql_1.GraphQLString,
            description: 'The city or/and country.'
        },
        details: {
            type: graphql_1.GraphQLString,
            description: 'Details of the experience.'
        }
    }); }
});
//# sourceMappingURL=type.js.map