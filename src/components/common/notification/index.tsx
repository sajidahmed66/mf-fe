import { FC, useEffect, useState } from "react";
import { IconX, IconCheck, IconAlertTriangleFilled } from "@tabler/icons-react";
import { Notification } from "@mantine/core";

export interface NotificationProps {
  title: string;
  body: string;
  type: "info" | "success" | "error";
}

const NotificationAlert: FC<NotificationProps> = ({ title, body, type }) => {
  const [showNotification, setShowNotification] = useState(true);
  const crossIcon = <IconX size={20} />;
  const tickIcon = <IconCheck size={20} />;
  const infoIcon = <IconAlertTriangleFilled size={20} />;

  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log("called");
      setShowNotification(false);
    }, 3500);

    return () => clearTimeout(timeout);
  }, [setShowNotification]);

  return (
    <>
      {/* Todo add a fade effect would be nice */}
      {showNotification && (
        <Notification
          title={title}
          icon={
            (type === "success" && tickIcon) ||
            (type === "error" && crossIcon) ||
            (type === "info" && infoIcon)
          }
          onClose={() => {
            setShowNotification(false);
          }}
          color={
            (type === "success" && "teal") ||
            (type === "error" && "red") ||
            (type === "info" && "blue") ||
            "blue"
          }
        >
          {body}
        </Notification>
      )}
    </>
  );
};

export default NotificationAlert;
