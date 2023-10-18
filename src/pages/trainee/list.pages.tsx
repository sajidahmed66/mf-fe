import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import TraineeListData from "@/components/trainee/TraineeList";
import routepaths from "@/libs/routepaths";
import { ChangeEventHandler, FC, SyntheticEvent, useState } from "react";
import { Pagination, TextInput, rem } from '@mantine/core';
import { IconSearch } from "@tabler/icons-react";


const TraineeListPageBreadcrumb = [
  {
    label: "Dashboard",
    link: routepaths.dashboard,
  },
  {
    label: "Traniee",
    // link: routepaths.trainee,
  },
];
const TraineeList: FC = () => {
  const [activePage, setPage] = useState(1);
  const [search, setSearch] = useState("")
  const handleSearchChange = (event: ChangeEventHandler<HTMLInputElement>) => {
    const { value } = event.currentTarget
    setSearch(value);
  }
  return (
    <div>
      <BreadCrumb items={TraineeListPageBreadcrumb} />
      <div className="w-full h-full p-4 md:p-8">
        {/* search item */}
        <TextInput
          placeholder="Search by any field"
          mb="md"
          leftSection={<IconSearch style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
          value={search}
          onChange={handleSearchChange}
        />
        <TraineeListData />
        {/* pagination */}
        <div className="w-full px-8 py-4 flex flex-row items-center justify-center">

          <Pagination value={activePage} onChange={setPage} total={10} />
        </div>
      </div>
    </div>
  );
};

export default TraineeList;
