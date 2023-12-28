import { NotificationProps } from "@/components/common/notification";

//  notification message details for package crude
export const createSuccessPackageNotificationDetails: NotificationProps = {
  type: "success",
  title: "created package successfully",
  body: "Successfully created New Package",
};
export const updateSuccessPackageNotificationDtails: NotificationProps = {
  title: "Updated package successfully",
  body: "Selected package has been updated successfully",
  type: "success",
};

export const updateErrorPackageNotificationDetails: NotificationProps = {
  title: "Failed to Updated Package",
  body: "Unable to updated Package Details",
  type: "error",
};

export const createErrorPackageNotificationDetails: NotificationProps = {
  type: "error",
  title: "Failed to Add a package",
  body: "Unable to Add New Pakage Information ",
};

export const deleteSuccessPackageNotificationDetails: NotificationProps = {
  type: "success",
  title: "Deleted package successfully",
  body: "Selected package has been deleted successfully",
};

// notification message details for workout crud
export const createSuccessWorkoutNotificationDetails: NotificationProps = {
  type: "success",
  title: "created workout successfully",
  body: "Successfully created New Workout",
};
export const updateSuccessWorkoutNotificationDetails: NotificationProps = {
  type: "success",
  title: "updated workout successfully",
  body: "Successfully updated Workout",
};
export const updateErrorWorkoutNotificationDetails: NotificationProps = {
  type: "error",
  title: "failed to update workout",
  body: "Unable to update Workout Details",
};
export const createErrorWorkoutNotificationDetails: NotificationProps = {
  type: "error",
  title: "failed to add workout",
  body: "Unable to Add New Workout Information ",
};
export const deleteSuccessWorkoutNotificationDetails: NotificationProps = {
  type: "success",
  title: "deleted workout successfully",
  body: "Successfully deleted Workout",
};
