import { NotificationProps } from "@/components/common/notification";

//  notification message details
export const createSuccessNotificationDetails: NotificationProps = {
  type: "success",
  title: "created package successfully",
  body: "Successfully created New Package",
};
export const updateSuccessNotificationDtails: NotificationProps = {
  title: "Updated package successfully",
  body: "Selected package has been updated successfully",
  type: "success",
};

export const updateErrorNotificationDetails: NotificationProps = {
  title: "Failed to Updated Package",
  body: "Unable to updated Package Details",
  type: "error",
};

export const createErrorNotificationDetails: NotificationProps = {
  type: "error",
  title: "Failed to Add a package",
  body: "Unable to Add New Pakage Information ",
};
