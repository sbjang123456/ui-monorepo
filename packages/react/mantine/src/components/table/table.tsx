import { useEffect, useRef } from 'react';
import {
  MantineReactTable,
  useMantineReactTable,
  type MRT_ColumnDef,
  type MRT_SortingState,
  type MRT_Virtualizer,
  type MRT_TableOptions,
} from 'mantine-react-table';

export type TableSortingStateType = MRT_SortingState;
export type TableColumnsType<T extends object> = MRT_ColumnDef<T>[];

type TableProps<T extends object> = {
  columns: TableColumnsType<T>;
  data: T[];
  onSortingChange: MRT_TableOptions<T>['onSortingChange'];
  state: MRT_TableOptions<T>['state'];
  maxHeight?: number | string;
};

export function Table<T extends object>({
  columns,
  data,
  onSortingChange,
  state,
  maxHeight,
}: TableProps<T>) {
  //optionally access the underlying virtualizer instance
  const rowVirtualizerInstanceRef =
    useRef<MRT_Virtualizer<HTMLDivElement, HTMLTableRowElement>>(null);

  useEffect(() => {
    try {
      //scroll to the top of the table when the sorting changes
      rowVirtualizerInstanceRef.current?.scrollToIndex(0);
    } catch (e) {
      console.log(e);
    }
  }, [state?.sorting]);

  const table = useMantineReactTable({
    columns,
    data, //10,000 rows
    enableBottomToolbar: false,
    enableColumnResizing: true,
    enableColumnVirtualization: true,
    enableGlobalFilterModes: true,
    enablePagination: false,
    enablePinning: true,
    enableRowNumbers: true,
    enableRowVirtualization: true,
    mantineTableContainerProps: { style: { maxHeight } },
    onSortingChange,
    state,
    rowVirtualizerInstanceRef, //optional
    rowVirtualizerProps: { overscan: 5 }, //optionally customize the row virtualizer
    columnVirtualizerProps: { overscan: 2 }, //optionally customize the column virtualizer
  });

  return <MantineReactTable table={table} />;
}
