import { useDisclosure } from "@mantine/hooks";
import { AppShell, Burger, Group } from "@mantine/core";
import React, { FC } from "react";
import Logo from "src/assets/svg/logo.svg?react";
import { NavbarNested } from "@/components/navigation-bar/SideNavigationDrawer";
import Container from "@/components/common/ui/Container";

interface ILayoutProps {
  children?: React.ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }) => {
  const [opened, { toggle }] = useDisclosure();
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Logo className="w-32 h-12 md:w-34 fill-white md:ml-8 md:h-16" />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar>
        <NavbarNested />
      </AppShell.Navbar>
      <AppShell.Main>
        <Container>{children}</Container>
      </AppShell.Main>
    </AppShell>
  );
};
export default Layout;
