export type User = {
	id: string;
	name: string;
	email: string;
	profileImage?: string; // Optional profile image URL
	// ... other profile fields
	fastingHistories?: FastingHistory[]; // An array to store the fasting histories linked to a user
      };
      