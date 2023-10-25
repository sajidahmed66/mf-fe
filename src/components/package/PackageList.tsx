import { IPackageData } from "@/libs/types";
import { Table } from "@mantine/core";
import { FC } from "react";


interface IPackageListProps {
    data: IPackageData[]
}

const PackageList: FC<IPackageListProps> = ({ data }) => {


    const rows = data.map(p => (
        <Table.Tr key={p._id}>
            <Table.Td>{p.name}</Table.Td>
            <Table.Td>{p.amount}</Table.Td>
            <Table.Td>{p.time_duration}</Table.Td>
            <Table.Td>{p.date.toString()}</Table.Td>
            <Table.Td>{p.entryBy.firstName + " " + p.entryBy.lastName}</Table.Td>
        </Table.Tr>
    ))
    return <div>
        <Table striped highlightOnHover>
            <Table.Thead>
                <Table.Tr>
                    <Table.Th>Name</Table.Th>
                    <Table.Th>Amount</Table.Th>
                    <Table.Th>Duration</Table.Th>
                    <Table.Th>Created At</Table.Th>
                    <Table.Th>Entry By</Table.Th>
                </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
        </Table>
    </div>;
}

export default PackageList