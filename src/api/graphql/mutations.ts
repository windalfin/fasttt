// ./graphql/mutations.ts

export const createFastingHistory = /* GraphQL */ `
  mutation CreateFastingHistory(
    $input: CreateFastingHistoryInput!
    $condition: ModelFastingHistoryConditionInput
  ) {
    createFastingHistory(input: $input, condition: $condition) {
      id
      userID
      startDate
      endDate
      duration
      notes
    }
  }
`;

export const updateFastingHistory = /* GraphQL */ `
  mutation UpdateFastingHistory(
    $input: UpdateFastingHistoryInput!
    $condition: ModelFastingHistoryConditionInput
  ) {
    updateFastingHistory(input: $input, condition: $condition) {
      id
      userID
      startDate
      endDate
      targetHours
      duration
      notes
    }
  }
`;

export const deleteFastingHistory = /* GraphQL */ `
  mutation DeleteFastingHistory(
    $input: DeleteFastingHistoryInput!
    $condition: ModelFastingHistoryConditionInput
  ) {
    deleteFastingHistory(input: $input, condition: $condition) {
      id
      userID
      startDate
      endDate
      targetHours
      duration
      notes
    }
  }
`;
