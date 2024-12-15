import {
  Table,
  type TableColumnsType,
  type TableSortingStateType,
} from '@sb/react-mantine';
import type { Meta, StoryObj } from '@storybook/react';
import { useEffect, useMemo, useState } from 'react';
import { makeData, Person } from './makeData';

export default {
  title: 'Mantine/Components/Table',
  component: Table,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Table>;

type Story = StoryObj<typeof Table>;

export const Virtualized: Story = {
  args: {
    maxHeight: '600px',
  },
  render: (args) => {
    const columns = useMemo<TableColumnsType<Person>>(
      () => [
        {
          accessorKey: 'firstName',
          header: 'First Name',
          size: 150,
        },
        {
          accessorKey: 'middleName',
          header: 'Middle Name',
          size: 150,
        },
        {
          accessorKey: 'lastName',
          header: 'Last Name',
          size: 150,
        },
        {
          accessorKey: 'email',
          header: 'Email Address',
          size: 300,
        },
        {
          accessorKey: 'phoneNumber',
          header: 'Phone Number',
          size: 250,
        },
        {
          accessorKey: 'address',
          header: 'Address',
          size: 300,
        },
        {
          accessorKey: 'zipCode',
          header: 'Zip Code',
        },
        {
          accessorKey: 'city',
          header: 'City',
          size: 220,
        },
        {
          accessorKey: 'state',
          header: 'State',
        },
        {
          accessorKey: 'country',
          header: 'Country',
          size: 350,
        },
        {
          accessorKey: 'petName',
          header: 'Pet Name',
        },
        {
          accessorKey: 'age',
          header: 'Age',
        },
        {
          accessorKey: 'salary',
          header: 'Salary',
        },
        {
          accessorKey: 'dateOfBirth',
          header: 'Date of Birth',
        },
        {
          accessorKey: 'dateOfJoining',
          header: 'Date of Joining',
        },
        {
          accessorKey: 'isActive',
          header: 'Is Active',
        },
      ],
      []
    );

    const [data, setData] = useState<Person[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [sorting, setSorting] = useState<TableSortingStateType>([]);

    useEffect(() => {
      if (typeof window !== 'undefined') {
        setData(makeData(10_000));
        setIsLoading(false);
      }
    }, []);
    return (
      <Table
        {...args}
        data={data}
        columns={columns}
        onSortingChange={setSorting}
        state={{ sorting, isLoading }}
      />
    );
  },
};
