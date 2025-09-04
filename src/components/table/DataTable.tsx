import React, { useState } from 'react';

// Define the component's props interfaces
interface Column<T> {
  key: string;
  title: string;
  sortable?: boolean;
}

interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  selectable?: boolean;
  onRowSelect?: (selectedRows: T[]) => void;
}

const DataTable = <T extends { [key: string]: any }>({
  data,
  columns,
  loading = false,
  selectable = false,
  onRowSelect,
}: DataTableProps<T>) => {
  const [sortedData, setSortedData] = useState(data);
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'ascending' | 'descending' } | null>(null);
  const [selectedRows, setSelectedRows] = useState<T[]>([]);

  // Sorting logic
  const handleSort = (columnKey: string) => {
    let direction: 'ascending' | 'descending' = 'ascending';
    if (sortConfig && sortConfig.key === columnKey && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }

    const sorted = [...data].sort((a, b) => {
      const aValue = a[columnKey];
      const bValue = b[columnKey];

      if (aValue < bValue) return direction === 'ascending' ? -1 : 1;
      if (aValue > bValue) return direction === 'ascending' ? 1 : -1;
      return 0;
    });

    setSortedData(sorted);
    setSortConfig({ key: columnKey, direction });
  };

  // Row selection logic
  const handleRowSelect = (row: T) => {
    const isSelected = selectedRows.includes(row);
    let updatedSelection = isSelected
      ? selectedRows.filter((selectedRow) => selectedRow !== row)
      : [...selectedRows, row];

    setSelectedRows(updatedSelection);
    if (onRowSelect) {
      onRowSelect(updatedSelection);
    }
  };
  
  // Empty state handling
  if (!loading && data.length === 0) {
    return (
      <div className="flex items-center justify-center p-8 text-gray-500">
        No data available.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-lg shadow-lg border border-gray-200">
      <table className="min-w-full table-auto divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            {selectable && (
              <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-600 bg-gray-100">
                Select
              </th>
            )}
            {columns.map((column) => (
              <th
                key={column.key}
                scope="col"
                className={`px-6 py-3 text-left text-xs font-semibold text-gray-600 transition-colors duration-200 ${column.sortable ? 'cursor-pointer hover:bg-blue-50' : ''}`}
                onClick={() => column.sortable && handleSort(column.key)}
              >
                <span className="flex items-center">
                  {column.title}
                  {column.sortable && sortConfig?.key === column.key && (
                    <span className="ml-1 text-blue-500">
                      {sortConfig.direction === 'ascending' ? '▲' : '▼'}
                    </span>
                  )}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {loading ? (
            <tr>
              <td colSpan={columns.length + (selectable ? 1 : 0)} className="text-center py-6 text-gray-400 animate-pulse">
                Loading...
              </td>
            </tr>
          ) : (
            (sortedData.length > 0 ? sortedData : data).map((row, rowIndex) => {
              const isSelected = selectable && selectedRows.includes(row);
              return (
                <tr
                  key={rowIndex}
                  className={`transition-colors duration-200 ${rowIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'} ${isSelected ? 'bg-blue-50' : ''} hover:bg-blue-100`}
                >
                  {selectable && (
                    <td className="px-6 py-4 whitespace-nowrap">
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => handleRowSelect(row)}
                        className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                    </td>
                  )}
                  {columns.map((column) => (
                    <td key={column.key} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {row[column.key]}
                    </td>
                  ))}
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;