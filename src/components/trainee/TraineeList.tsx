import { Table } from "@mantine/core";
import { faker } from '@faker-js/faker';
const dummyTraineeData = [{
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  phone: faker.phone.number(),
  createAt: faker.date.past()
}, {
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  phone: faker.phone.number(),
  createAt: faker.date.past()
}, {
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  phone: faker.phone.number(),
  createAt: faker.date.past()
}, {
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  phone: faker.phone.number(),
  createAt: faker.date.past()
}, {
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  phone: faker.phone.number(),
  createAt: faker.date.past()
}, {
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  phone: faker.phone.number(),
  createAt: faker.date.past()
}, {
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  phone: faker.phone.number(),
  createAt: faker.date.past()
}, {
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  phone: faker.phone.number(),
  createAt: faker.date.past()
}, {
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  phone: faker.phone.number(),
  createAt: faker.date.past()
}, {
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  phone: faker.phone.number(),
  createAt: faker.date.past()
}, {
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  phone: faker.phone.number(),
  createAt: faker.date.past()
},]

const TraineeListData = () => {

  const rows = dummyTraineeData.map(dt => (
    <Table.Tr key={dt.firstName}>
      <Table.Td>{dt.firstName}</Table.Td>
      <Table.Td>{dt.lastName}</Table.Td>
      <Table.Td>{dt.phone}</Table.Td>
      <Table.Td>{dt.createAt.toString()}</Table.Td>
    </Table.Tr>
  ))
  return <div>
    <Table striped highlightOnHover>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>First Name</Table.Th>
          <Table.Th>Last Name</Table.Th>
          <Table.Th>Phone Number</Table.Th>
          <Table.Th>Member Since</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  </div>;
};

export default TraineeListData;
