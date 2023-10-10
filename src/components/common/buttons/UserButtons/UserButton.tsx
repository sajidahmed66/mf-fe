import { UnstyledButton, Group, Avatar, Text, rem } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import classes from "./UserButton.module.css";
// import { isAuthenticated, userInfo } from "@/libs/utils/auth/auth";

export function UserButton() {
  // TODO need to implement a hook to get useringo from token
  // const getUserInfo = () => {
  //   return userInfo() && userInfo();
  // };
  return (
    <UnstyledButton
      className={classes.user}
      onClick={() => {
        console.log("userclicked");
      }}
    >
      <Group>
        {/* TODO need to add an api that fatcher a user picture */}
        <Avatar
          src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
          radius="xl"
        />

        <div style={{ flex: 1 }}>
          <Text size="sm" fw={500}>
            Harriette Spoonlicker
          </Text>

          <Text c="dimmed" size="xs">
            hspoonlicker@outlook.com
          </Text>
        </div>

        <IconChevronRight style={{ width: rem(14), height: rem(14) }} stroke={1.5} />
      </Group>
    </UnstyledButton>
  );
}
