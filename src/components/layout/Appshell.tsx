import { useDisclosure } from "@mantine/hooks";
import { AppShell, Burger, Group } from "@mantine/core";
import React, { FC } from "react";
import Logo from "src/assets/svg/logo.svg?react";
import { NavbarNested } from "@/components/NavigationBar/SideNavigationDrawer";
interface ILayoutProps {
  children: React.ReactNode;
}
const Layout: FC<ILayoutProps> = ({ children }) => {
  const [opened, { toggle }] = useDisclosure(); // special hook that takes care of this nuisence

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
      <AppShell.Navbar h="100%">
        {/* this part is a skeleton
        {Array(15)
          .fill(0)
          .map((_, index) => (
            <Skeleton key={index} h={28} mt="sm" animate={false} />
          ))}

           */}
        <NavbarNested />
      </AppShell.Navbar>
      <AppShell.Main>
        {/* outlet will be here  */}
        {children}
      </AppShell.Main>
    </AppShell>
  );
};
export default Layout;
