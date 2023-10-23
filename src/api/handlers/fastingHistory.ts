import { API, graphqlOperation } from 'aws-amplify';
import * as mutations from './graphql/mutations';  // Assuming your graphql mutations are here

export const storeFastingHistory = async (data: any) => {
  try {
    const result = await API.graphql(graphqlOperation(mutations.createFastingHistory, { input: data }));
    return result;
  } catch (error) {
    console.error("Error storing FastingHistory:", error);
    throw error;
  }
};
