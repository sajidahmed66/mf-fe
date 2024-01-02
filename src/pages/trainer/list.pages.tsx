import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import TrainerListData from "@/components/trainer/TrainerListTable";
import { useGetTrainerListQuery } from "@/features/trainer/trainerAPI";
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
  const { data: trainerData, isLoading, error } = useGetTrainerListQuery();
  const [activePage, setPage] = useState(1);
  // const [search, setSearch] = useState("");
  // const handleSearchChange = (event: ChangeEventHandler<HTMLInputElement>) => {
  //   const { value } = event.currentTarget;
  //   setSearch(value);
  // };

  //
  if (isLoading) return <div>Loading...</div>;
  //
  if (error) return <div>Error while loading Retry later</div>;
  //
  if (!trainerData) return <div>No data</div>;
  return (
    <div>
      <BreadCrumb items={trainerListPageBreadcrumb} />
      <div className="h-full w-full p-4 md:p-8">
        {/* search item */}
        {/* <TextInput
          placeholder="Search by any field"
          mb="md"
          leftSection={<IconSearch style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
          value={search}
          onChange={handleSearchChange}
        /> */}
        <TrainerListData data={trainerData} />
        <div className="flex w-full flex-row items-center justify-center px-8 py-4">
          <Pagination value={activePage} onChange={setPage} total={10} />
        </div>
      </div>
    </div>
  );
};

export default TrainerList;
