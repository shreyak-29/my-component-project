// import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import DataTable from './DataTable';

// Sample data for the stories
const sampleData = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Charlie', age: 22 },
];

const sampleColumns = [
  { key: 'id', title: 'ID', sortable: true },
  { key: 'name', title: 'Name', sortable: true },
  { key: 'age', title: 'Age', sortable: true },
];

const meta: Meta = {
  title: 'Components/DataTable',
  component: DataTable,
};

export default meta;

const Template: StoryFn<typeof DataTable> = (args) => <DataTable {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: sampleData,
  columns: sampleColumns,
};

export const Sortable = Template.bind({});
Sortable.args = {
  data: sampleData,
  columns: sampleColumns,
};

export const Selectable = Template.bind({});
Selectable.args = {
  data: sampleData,
  columns: sampleColumns,
  selectable: true,
  onRowSelect: (rows) => console.log('Selected rows:', rows),
};

export const LoadingState = Template.bind({});
LoadingState.args = {
  data: [],
  columns: sampleColumns,
  loading: true,
};

export const EmptyState = Template.bind({});
EmptyState.args = {
  data: [],
  columns: sampleColumns,
};