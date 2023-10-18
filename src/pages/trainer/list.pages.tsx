import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import TrainerListData from "@/components/trainer/TrainerListTable";
import routepaths from "@/libs/routepaths";
import { Pagination, TextInput, rem } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { ChangeEventHandler, FC, useState } from "react";

const trainerListPageBreadcrumb = [
  {
    label: "Dashboard",
    link: routepaths.dashboard,
  },
  {
    label: "Trainer List",
    // link: routepaths.trainer,
  },
];

const TrainerList: FC = () => {
  const [activePage, setPage] = useState(1);
  const [search, setSearch] = useState("")
  const handleSearchChange = (event: ChangeEventHandler<HTMLInputElement>) => {
    const { value } = event.currentTarget
    setSearch(value);
  }
  return (
    <div>
      <BreadCrumb items={trainerListPageBreadcrumb} />
      <div className="w-full h-full p-4 md:p-8">
        {/* search item */}
        <TextInput
          placeholder="Search by any field"
          mb="md"
          leftSection={<IconSearch style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
          value={search}
          onChange={handleSearchChange}
        />
        <TrainerListData />
        <div className="w-full px-8 py-4 flex flex-row items-center justify-center">

          <Pagination value={activePage} onChange={setPage} total={10} />
        </div>
      </div>
    </div>
  );
};

export default TrainerList;
