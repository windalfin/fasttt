/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    profile {
      id
      name
      age
      gender
      weight
      height
      createdAt
      updatedAt
      owner
      __typename
    }
    fastingHistory {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const getProfile = /* GraphQL */ `query GetProfile($id: ID!) {
  getProfile(id: $id) {
    id
    name
    age
    gender
    weight
    height
    user {
      id
      createdAt
      updatedAt
      owner
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetProfileQueryVariables,
  APITypes.GetProfileQuery
>;
export const listProfiles = /* GraphQL */ `query ListProfiles(
  $filter: ModelProfileFilterInput
  $limit: Int
  $nextToken: String
) {
  listProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      age
      gender
      weight
      height
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListProfilesQueryVariables,
  APITypes.ListProfilesQuery
>;
export const getFastingEvent = /* GraphQL */ `query GetFastingEvent($id: ID!) {
  getFastingEvent(id: $id) {
    id
    userId
    startTime
    endTime
    duration
    user {
      id
      createdAt
      updatedAt
      owner
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetFastingEventQueryVariables,
  APITypes.GetFastingEventQuery
>;
export const listFastingEvents = /* GraphQL */ `query ListFastingEvents(
  $filter: ModelFastingEventFilterInput
  $limit: Int
  $nextToken: String
) {
  listFastingEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userId
      startTime
      endTime
      duration
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListFastingEventsQueryVariables,
  APITypes.ListFastingEventsQuery
>;
export const fastingEventsByUserId = /* GraphQL */ `query FastingEventsByUserId(
  $userId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelFastingEventFilterInput
  $limit: Int
  $nextToken: String
) {
  fastingEventsByUserId(
    userId: $userId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userId
      startTime
      endTime
      duration
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.FastingEventsByUserIdQueryVariables,
  APITypes.FastingEventsByUserIdQuery
>;
