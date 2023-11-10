import { Table } from "@mantine/core";
import { FC } from "react";

interface ITableProps {
    data: [];
    dataHeader: string[];
}



const TableWithData: FC<ITableProps> = ({ data, dataHeader }) => {
    // const rows = data.map(dt => (
    //     <Table.Tr key={ }>

    //     </Table.Tr>
    // ))
    console.log(data)
    return (
        <Table>
            <Table.Thead>
                <Table.Tr>
                    {dataHeader.map((header, index) => (
                        <Table.Th key={index}>{header}</Table.Th>
                    ))}
                </Table.Tr>
            </Table.Thead>

        </Table>
    )

};

export default TableWithData;