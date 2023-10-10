import { ScrollArea } from "@mantine/core";
import { IconGauge, IconAdjustmentsHorizontal } from "@tabler/icons-react";
import { LinksGroup, LinksGroupProps } from "@/components/NavigationBar/NavbarlinksGroup/NavbarLiksGroup";

import classes from "@/components/NavigationBar/NavbarNested.module.css";

import routepaths from "@/libs/routepaths";
import { UserButton } from "@/components/common/buttons/UserButtons/UserButton";
//
const mockdata2: LinksGroupProps[] = [
  { label: "Dashboard", icon: IconGauge, link: routepaths.dashboard },
  {
    label: "Trainer",
    icon: IconGauge,
    links: [
      { label: "list", link: routepaths.trainer },
      { label: "add new", link: routepaths.trainer_create },
    ],
  },
  {
    label: "Trainee",
    icon: IconGauge,
    links: [
      { label: "list", link: routepaths.trainee },
      { label: "add new", link: routepaths.trainee_create },
    ],
  },
  {
    label: "Diet",
    icon: IconGauge,
    links: [
      { label: "list", link: routepaths.diet },
      { label: "crate diet", link: routepaths.diet_create },
      { label: "request", link: routepaths.diet_request },
    ],
  },
  {
    label: "Workouts",
    icon: IconGauge,
    links: [
      { label: "list", link: routepaths.workout },
      { label: "crate Workout", link: routepaths.workout_create },
      { label: "request", link: routepaths.workout_request },
    ],
  },
  {
    label: "Settings",
    icon: IconAdjustmentsHorizontal,
    links: [{ label: "Profile", link: routepaths.profile }],
  },
];

export function NavbarNested() {
  const links = mockdata2.map((item) => <LinksGroup {...item} key={item.label} />);

  return (
    <nav className={classes.navbar}>
      <ScrollArea className={classes.links}>
        <div className={classes.linksInner}>{links}</div>
      </ScrollArea>
      <div className={classes.footer}>
        <UserButton />
      </div>
    </nav>
  );
}
