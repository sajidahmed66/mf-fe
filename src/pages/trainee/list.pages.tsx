import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import TraineeListData from "@/components/trainee/TraineeList";
import routepaths from "@/libs/routepaths";
import { ChangeEvent, FC, useState } from "react";
import { Pagination, TextInput, rem } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { useGetTraineeListQuery } from "@/features/trainee/traineeAPI";
import { useNavigate } from "react-router-dom";
import AddNewBtn from "@/components/common/buttons/AddNewBtn/AddNewBtn";

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
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const { data: trainees, isError, isLoading, error } = useGetTraineeListQuery();
  //
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setSearch(value);
  };

  console.log({ trainees, isError, isLoading, error });
  // TODO implement search function here
  //

  //conditonal rendering based on data
  if (isLoading) return <div>Loading...</div>;
  //
  if (error) return <div>Error while loading Retry later</div>;
  //
  if (!trainees) return <div>No data</div>;

  return (
    <div>
      <BreadCrumb items={TraineeListPageBreadcrumb} />

      <div className="h-full w-full space-y-2 p-4 md:p-8">
        {/* search item */}

        <TextInput
          placeholder="Search by any field"
          mb="md"
          leftSection={<IconSearch style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
          value={search}
          onChange={handleSearchChange} // figure out why is this happing
        />
        <AddNewBtn routepath={routepaths.add_trainee} />
        <TraineeListData trainees={trainees} />

        {/* pagination */}
        <div className="flex w-full flex-row items-center justify-center px-8 py-4">
          <Pagination value={activePage} onChange={setPage} total={10} />
        </div>
      </div>
    </div>
  );
};

export default TraineeList;
