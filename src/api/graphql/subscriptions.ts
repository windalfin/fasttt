/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateUser = /* GraphQL */ `subscription OnCreateUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onCreateUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onUpdateUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onDeleteUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onCreateProfile = /* GraphQL */ `subscription OnCreateProfile(
  $filter: ModelSubscriptionProfileFilterInput
  $owner: String
) {
  onCreateProfile(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateProfileSubscriptionVariables,
  APITypes.OnCreateProfileSubscription
>;
export const onUpdateProfile = /* GraphQL */ `subscription OnUpdateProfile(
  $filter: ModelSubscriptionProfileFilterInput
  $owner: String
) {
  onUpdateProfile(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateProfileSubscriptionVariables,
  APITypes.OnUpdateProfileSubscription
>;
export const onDeleteProfile = /* GraphQL */ `subscription OnDeleteProfile(
  $filter: ModelSubscriptionProfileFilterInput
  $owner: String
) {
  onDeleteProfile(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteProfileSubscriptionVariables,
  APITypes.OnDeleteProfileSubscription
>;
export const onCreateFastingEvent = /* GraphQL */ `subscription OnCreateFastingEvent(
  $filter: ModelSubscriptionFastingEventFilterInput
  $owner: String
) {
  onCreateFastingEvent(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateFastingEventSubscriptionVariables,
  APITypes.OnCreateFastingEventSubscription
>;
export const onUpdateFastingEvent = /* GraphQL */ `subscription OnUpdateFastingEvent(
  $filter: ModelSubscriptionFastingEventFilterInput
  $owner: String
) {
  onUpdateFastingEvent(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateFastingEventSubscriptionVariables,
  APITypes.OnUpdateFastingEventSubscription
>;
export const onDeleteFastingEvent = /* GraphQL */ `subscription OnDeleteFastingEvent(
  $filter: ModelSubscriptionFastingEventFilterInput
  $owner: String
) {
  onDeleteFastingEvent(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteFastingEventSubscriptionVariables,
  APITypes.OnDeleteFastingEventSubscription
>;
