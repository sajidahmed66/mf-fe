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
  const breadcumbitem = items.map((item) => {
    return (
      <>
        <Breadcrumbs separator="→" mt="xs">
          {item.link ? <Link to={item.link}>{item.label}</Link> : item.label}
        </Breadcrumbs>
      </>
    );
  });

  return <>{breadcumbitem}</>;
};

export default BreadCrumb;
