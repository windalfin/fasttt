export type FastingHistory = {
	id: string;
	userId: string; // Foreign key linking back to the User
	startDate: string; // Use string type to store AWSDateTime
	endDate: string; // Use string type to store AWSDateTime
	targetHours: number;
	duration: number; //duration in minutes
	// ... other fasting-specific fields
      };
      