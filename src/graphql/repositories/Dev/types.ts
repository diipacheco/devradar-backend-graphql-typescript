import { gql } from 'apollo-server';

export default gql`

type Location {
  id: ID
  coordinates: [Float]
  type: String
}

type Dev {
  id: ID!
  name: String!
  github_username: String!
  avatar_url: String!
  bio: String
  techs: [String!]!
  location: Location!
}

input RegistrationInput {
  github_username: String!
  techs: String!
  bio: String 
  latitude: Float
  longitude: Float
}

input SearchInput {
  latitude: Float!
  longitude: Float!
  techs: String!
}

type Query {
  devs: [Dev!]!
}

type Mutation {
  registrateDev(input: RegistrationInput): Dev
  searchDev(input: SearchInput): [Dev]
}
`;
