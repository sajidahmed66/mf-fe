import { UnstyledButton, Group, Avatar, Text, rem } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import classes from "./UserButton.module.css";
import { userLoggedOut } from "@/features/auth/authSlice";
import { signOut } from "@/libs/utils/auth/auth";
import { useAppDispatch } from "@/app/hooks";
import { useNavigate } from "react-router-dom";
// import { isAuthenticated, userInfo } from "@/libs/utils/auth/auth";

const  UserButton=()=> {
  const dispatch = useAppDispatch();
  const navigate = useNavigate()
  // TODO need to implement a hook to get userinfo from token or call an api or something
  // };
  return (
    <UnstyledButton
      className={classes.user}
      onClick={() => {
        signOut(() => dispatch(userLoggedOut()));
        navigate("/login")
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
            user name
          </Text>

          <Text c="dimmed" size="xs">
            user email
          </Text>
        </div>

        <IconChevronRight style={{ width: rem(14), height: rem(14) }} stroke={1.5} />
      </Group>
    </UnstyledButton>
  );
}


export default UserButton;