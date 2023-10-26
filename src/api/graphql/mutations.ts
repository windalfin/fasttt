/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const createProfile = /* GraphQL */ `mutation CreateProfile(
  $input: CreateProfileInput!
  $condition: ModelProfileConditionInput
) {
  createProfile(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateProfileMutationVariables,
  APITypes.CreateProfileMutation
>;
export const updateProfile = /* GraphQL */ `mutation UpdateProfile(
  $input: UpdateProfileInput!
  $condition: ModelProfileConditionInput
) {
  updateProfile(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateProfileMutationVariables,
  APITypes.UpdateProfileMutation
>;
export const deleteProfile = /* GraphQL */ `mutation DeleteProfile(
  $input: DeleteProfileInput!
  $condition: ModelProfileConditionInput
) {
  deleteProfile(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteProfileMutationVariables,
  APITypes.DeleteProfileMutation
>;
export const createFastingEvent = /* GraphQL */ `mutation CreateFastingEvent(
  $input: CreateFastingEventInput!
  $condition: ModelFastingEventConditionInput
) {
  createFastingEvent(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateFastingEventMutationVariables,
  APITypes.CreateFastingEventMutation
>;
export const updateFastingEvent = /* GraphQL */ `mutation UpdateFastingEvent(
  $input: UpdateFastingEventInput!
  $condition: ModelFastingEventConditionInput
) {
  updateFastingEvent(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateFastingEventMutationVariables,
  APITypes.UpdateFastingEventMutation
>;
export const deleteFastingEvent = /* GraphQL */ `mutation DeleteFastingEvent(
  $input: DeleteFastingEventInput!
  $condition: ModelFastingEventConditionInput
) {
  deleteFastingEvent(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteFastingEventMutationVariables,
  APITypes.DeleteFastingEventMutation
>;
