import { Link } from "react-router-dom";
import { Breadcrumbs } from "@mantine/core";
// this comp will take in props

type BreadCrumbItem = {
  label: string;
  link?: string;
};

type BreadCrumbProps = {
  items: BreadCrumbItem[];
};

const BreadCrumb: React.FC<BreadCrumbProps> = ({ items }) => {
  const breadcumbitem = items.map((item, i) => {
    return <div key={i}>{item.link ? <Link to={item.link}>{item.label}</Link> : item.label}</div>;
  });

  return (
    <Breadcrumbs separator="→" mt="xs">
      {breadcumbitem}
    </Breadcrumbs>
  );
};

export default BreadCrumb;
