/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
};

export type ModelUserConditionInput = {
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type User = {
  __typename: "User",
  id: string,
  profile?: Profile | null,
  fastingHistory?: ModelFastingEventConnection | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type Profile = {
  __typename: "Profile",
  id: string,
  name: string,
  age: number,
  gender?: string | null,
  weight?: number | null,
  height?: number | null,
  user?: User | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelFastingEventConnection = {
  __typename: "ModelFastingEventConnection",
  items:  Array<FastingEvent | null >,
  nextToken?: string | null,
};

export type FastingEvent = {
  __typename: "FastingEvent",
  id: string,
  userId: string,
  startTime: string,
  endTime: string,
  duration: number,
  user?: User | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateUserInput = {
  id: string,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateProfileInput = {
  id?: string | null,
  name: string,
  age: number,
  gender?: string | null,
  weight?: number | null,
  height?: number | null,
};

export type ModelProfileConditionInput = {
  name?: ModelStringInput | null,
  age?: ModelIntInput | null,
  gender?: ModelStringInput | null,
  weight?: ModelFloatInput | null,
  height?: ModelFloatInput | null,
  and?: Array< ModelProfileConditionInput | null > | null,
  or?: Array< ModelProfileConditionInput | null > | null,
  not?: ModelProfileConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateProfileInput = {
  id: string,
  name?: string | null,
  age?: number | null,
  gender?: string | null,
  weight?: number | null,
  height?: number | null,
};

export type DeleteProfileInput = {
  id: string,
};

export type CreateFastingEventInput = {
  id?: string | null,
  userId: string,
  startTime: string,
  endTime: string,
  duration: number,
};

export type ModelFastingEventConditionInput = {
  userId?: ModelIDInput | null,
  startTime?: ModelStringInput | null,
  endTime?: ModelStringInput | null,
  duration?: ModelFloatInput | null,
  and?: Array< ModelFastingEventConditionInput | null > | null,
  or?: Array< ModelFastingEventConditionInput | null > | null,
  not?: ModelFastingEventConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateFastingEventInput = {
  id: string,
  userId?: string | null,
  startTime?: string | null,
  endTime?: string | null,
  duration?: number | null,
};

export type DeleteFastingEventInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelProfileFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  age?: ModelIntInput | null,
  gender?: ModelStringInput | null,
  weight?: ModelFloatInput | null,
  height?: ModelFloatInput | null,
  and?: Array< ModelProfileFilterInput | null > | null,
  or?: Array< ModelProfileFilterInput | null > | null,
  not?: ModelProfileFilterInput | null,
};

export type ModelProfileConnection = {
  __typename: "ModelProfileConnection",
  items:  Array<Profile | null >,
  nextToken?: string | null,
};

export type ModelFastingEventFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  startTime?: ModelStringInput | null,
  endTime?: ModelStringInput | null,
  duration?: ModelFloatInput | null,
  and?: Array< ModelFastingEventFilterInput | null > | null,
  or?: Array< ModelFastingEventFilterInput | null > | null,
  not?: ModelFastingEventFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionProfileFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  age?: ModelSubscriptionIntInput | null,
  gender?: ModelSubscriptionStringInput | null,
  weight?: ModelSubscriptionFloatInput | null,
  height?: ModelSubscriptionFloatInput | null,
  and?: Array< ModelSubscriptionProfileFilterInput | null > | null,
  or?: Array< ModelSubscriptionProfileFilterInput | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionFastingEventFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  startTime?: ModelSubscriptionStringInput | null,
  endTime?: ModelSubscriptionStringInput | null,
  duration?: ModelSubscriptionFloatInput | null,
  and?: Array< ModelSubscriptionFastingEventFilterInput | null > | null,
  or?: Array< ModelSubscriptionFastingEventFilterInput | null > | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    profile?:  {
      __typename: "Profile",
      id: string,
      name: string,
      age: number,
      gender?: string | null,
      weight?: number | null,
      height?: number | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    fastingHistory?:  {
      __typename: "ModelFastingEventConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    profile?:  {
      __typename: "Profile",
      id: string,
      name: string,
      age: number,
      gender?: string | null,
      weight?: number | null,
      height?: number | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    fastingHistory?:  {
      __typename: "ModelFastingEventConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    profile?:  {
      __typename: "Profile",
      id: string,
      name: string,
      age: number,
      gender?: string | null,
      weight?: number | null,
      height?: number | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    fastingHistory?:  {
      __typename: "ModelFastingEventConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateProfileMutationVariables = {
  input: CreateProfileInput,
  condition?: ModelProfileConditionInput | null,
};

export type CreateProfileMutation = {
  createProfile?:  {
    __typename: "Profile",
    id: string,
    name: string,
    age: number,
    gender?: string | null,
    weight?: number | null,
    height?: number | null,
    user?:  {
      __typename: "User",
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateProfileMutationVariables = {
  input: UpdateProfileInput,
  condition?: ModelProfileConditionInput | null,
};

export type UpdateProfileMutation = {
  updateProfile?:  {
    __typename: "Profile",
    id: string,
    name: string,
    age: number,
    gender?: string | null,
    weight?: number | null,
    height?: number | null,
    user?:  {
      __typename: "User",
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteProfileMutationVariables = {
  input: DeleteProfileInput,
  condition?: ModelProfileConditionInput | null,
};

export type DeleteProfileMutation = {
  deleteProfile?:  {
    __typename: "Profile",
    id: string,
    name: string,
    age: number,
    gender?: string | null,
    weight?: number | null,
    height?: number | null,
    user?:  {
      __typename: "User",
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateFastingEventMutationVariables = {
  input: CreateFastingEventInput,
  condition?: ModelFastingEventConditionInput | null,
};

export type CreateFastingEventMutation = {
  createFastingEvent?:  {
    __typename: "FastingEvent",
    id: string,
    userId: string,
    startTime: string,
    endTime: string,
    duration: number,
    user?:  {
      __typename: "User",
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateFastingEventMutationVariables = {
  input: UpdateFastingEventInput,
  condition?: ModelFastingEventConditionInput | null,
};

export type UpdateFastingEventMutation = {
  updateFastingEvent?:  {
    __typename: "FastingEvent",
    id: string,
    userId: string,
    startTime: string,
    endTime: string,
    duration: number,
    user?:  {
      __typename: "User",
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteFastingEventMutationVariables = {
  input: DeleteFastingEventInput,
  condition?: ModelFastingEventConditionInput | null,
};

export type DeleteFastingEventMutation = {
  deleteFastingEvent?:  {
    __typename: "FastingEvent",
    id: string,
    userId: string,
    startTime: string,
    endTime: string,
    duration: number,
    user?:  {
      __typename: "User",
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    profile?:  {
      __typename: "Profile",
      id: string,
      name: string,
      age: number,
      gender?: string | null,
      weight?: number | null,
      height?: number | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    fastingHistory?:  {
      __typename: "ModelFastingEventConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProfileQueryVariables = {
  id: string,
};

export type GetProfileQuery = {
  getProfile?:  {
    __typename: "Profile",
    id: string,
    name: string,
    age: number,
    gender?: string | null,
    weight?: number | null,
    height?: number | null,
    user?:  {
      __typename: "User",
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListProfilesQueryVariables = {
  filter?: ModelProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProfilesQuery = {
  listProfiles?:  {
    __typename: "ModelProfileConnection",
    items:  Array< {
      __typename: "Profile",
      id: string,
      name: string,
      age: number,
      gender?: string | null,
      weight?: number | null,
      height?: number | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetFastingEventQueryVariables = {
  id: string,
};

export type GetFastingEventQuery = {
  getFastingEvent?:  {
    __typename: "FastingEvent",
    id: string,
    userId: string,
    startTime: string,
    endTime: string,
    duration: number,
    user?:  {
      __typename: "User",
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListFastingEventsQueryVariables = {
  filter?: ModelFastingEventFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFastingEventsQuery = {
  listFastingEvents?:  {
    __typename: "ModelFastingEventConnection",
    items:  Array< {
      __typename: "FastingEvent",
      id: string,
      userId: string,
      startTime: string,
      endTime: string,
      duration: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type FastingEventsByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelFastingEventFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type FastingEventsByUserIdQuery = {
  fastingEventsByUserId?:  {
    __typename: "ModelFastingEventConnection",
    items:  Array< {
      __typename: "FastingEvent",
      id: string,
      userId: string,
      startTime: string,
      endTime: string,
      duration: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    profile?:  {
      __typename: "Profile",
      id: string,
      name: string,
      age: number,
      gender?: string | null,
      weight?: number | null,
      height?: number | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    fastingHistory?:  {
      __typename: "ModelFastingEventConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    profile?:  {
      __typename: "Profile",
      id: string,
      name: string,
      age: number,
      gender?: string | null,
      weight?: number | null,
      height?: number | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    fastingHistory?:  {
      __typename: "ModelFastingEventConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    profile?:  {
      __typename: "Profile",
      id: string,
      name: string,
      age: number,
      gender?: string | null,
      weight?: number | null,
      height?: number | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    fastingHistory?:  {
      __typename: "ModelFastingEventConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateProfileSubscriptionVariables = {
  filter?: ModelSubscriptionProfileFilterInput | null,
  owner?: string | null,
};

export type OnCreateProfileSubscription = {
  onCreateProfile?:  {
    __typename: "Profile",
    id: string,
    name: string,
    age: number,
    gender?: string | null,
    weight?: number | null,
    height?: number | null,
    user?:  {
      __typename: "User",
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateProfileSubscriptionVariables = {
  filter?: ModelSubscriptionProfileFilterInput | null,
  owner?: string | null,
};

export type OnUpdateProfileSubscription = {
  onUpdateProfile?:  {
    __typename: "Profile",
    id: string,
    name: string,
    age: number,
    gender?: string | null,
    weight?: number | null,
    height?: number | null,
    user?:  {
      __typename: "User",
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteProfileSubscriptionVariables = {
  filter?: ModelSubscriptionProfileFilterInput | null,
  owner?: string | null,
};

export type OnDeleteProfileSubscription = {
  onDeleteProfile?:  {
    __typename: "Profile",
    id: string,
    name: string,
    age: number,
    gender?: string | null,
    weight?: number | null,
    height?: number | null,
    user?:  {
      __typename: "User",
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateFastingEventSubscriptionVariables = {
  filter?: ModelSubscriptionFastingEventFilterInput | null,
  owner?: string | null,
};

export type OnCreateFastingEventSubscription = {
  onCreateFastingEvent?:  {
    __typename: "FastingEvent",
    id: string,
    userId: string,
    startTime: string,
    endTime: string,
    duration: number,
    user?:  {
      __typename: "User",
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateFastingEventSubscriptionVariables = {
  filter?: ModelSubscriptionFastingEventFilterInput | null,
  owner?: string | null,
};

export type OnUpdateFastingEventSubscription = {
  onUpdateFastingEvent?:  {
    __typename: "FastingEvent",
    id: string,
    userId: string,
    startTime: string,
    endTime: string,
    duration: number,
    user?:  {
      __typename: "User",
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteFastingEventSubscriptionVariables = {
  filter?: ModelSubscriptionFastingEventFilterInput | null,
  owner?: string | null,
};

export type OnDeleteFastingEventSubscription = {
  onDeleteFastingEvent?:  {
    __typename: "FastingEvent",
    id: string,
    userId: string,
    startTime: string,
    endTime: string,
    duration: number,
    user?:  {
      __typename: "User",
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
