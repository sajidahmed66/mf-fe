import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import TrainerListData from "@/components/trainer/TrainerListTable";
import { useGetTrainerListQuery } from "@/features/trainer/trainerAPI";
import routepaths from "@/libs/routepaths";
import { ITrainerData } from "@/libs/types";
import { Pagination, TextInput, rem } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { chunk } from "lodash";
import { ChangeEvent, FC, useState } from "react";

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
  const [search, setSearch] = useState("");
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    setSearch(value);
  };
  const searchedTrainerData = trainerData?.filter((item) => {
    return search.toLowerCase() === ""
      ? item
      : item.firstname.toLowerCase().includes(search) ||
          item.lastname.toLowerCase().includes(search) ||
          item.phone.toString().includes(search);
  });

  //
  if (isLoading) return <div>Loading...</div>;
  //
  if (error) return <div>Error while loading Retry later</div>;
  //
  if (!trainerData) return <div>No data</div>;
  const paginatedTrainerdata = chunk(searchedTrainerData as ITrainerData[], 10);
  return (
    <div>
      <BreadCrumb items={trainerListPageBreadcrumb} />
      <div className="h-full w-full p-4 md:p-8">
        {/* search item */}
        <TextInput
          placeholder="Search by any field"
          mb="md"
          leftSection={<IconSearch style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
          value={search}
          onChange={handleSearchChange}
        />
        {paginatedTrainerdata[activePage - 1] ? (
          <TrainerListData data={paginatedTrainerdata[activePage - 1]} />
        ) : (
          <span>No Results Found!!!</span>
        )}

        <div className="flex w-full flex-row items-center justify-center px-8 py-4">
          <Pagination value={activePage} onChange={setPage} total={paginatedTrainerdata.length} />
        </div>
      </div>
    </div>
  );
};

export default TrainerList;
