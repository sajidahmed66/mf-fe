import { ScrollArea } from "@mantine/core";
import { IconGauge, IconAdjustmentsHorizontal } from "@tabler/icons-react";
import { LinksGroup, LinksGroupProps } from "@/components/NavigationBar/NavbarlinksGroup/NavbarLiksGroup";

import classes from "@/components/NavigationBar/NavbarNested.module.css";

const mockdata2: LinksGroupProps[] = [
  { label: "Dashboard", icon: IconGauge, link: "/" },
  {
    label: "Trainer",
    icon: IconGauge,
    links: [
      { label: "list", link: "/" },
      { label: "add new", link: "/" },
    ],
  },
  {
    label: "Trainee",
    icon: IconGauge,
    links: [
      { label: "list", link: "/" },
      { label: "add new", link: "/" },
    ],
  },
  {
    label: "Diet",
    icon: IconGauge,
    links: [
      { label: "list", link: "/" },
      { label: "crate diet", link: "/" },
      { label: "request", link: "/" },
    ],
  },
  {
    label: "Workouts",
    icon: IconGauge,
    links: [
      { label: "list", link: "/" },
      { label: "crate Workout", link: "/" },
      { label: "request", link: "/" },
    ],
  },
  {
    label: "Settings",
    icon: IconAdjustmentsHorizontal,
    links: [{ label: "Profile", link: "/" }],
  },
];

export function NavbarNested() {
  const links = mockdata2.map((item) => <LinksGroup {...item} key={item.label} />);

  return (
    <nav className={classes.navbar}>
      <ScrollArea className={classes.links}>
        <div className={classes.linksInner}>{links}</div>
      </ScrollArea>
      <div className={classes.footer}>{/* <UserButton /> */}</div>
    </nav>
  );
}
