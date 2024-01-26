"use client";
import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import "./style.css";

interface DatatableProps {
  data: any;
  selectable: boolean;
}

const selectableColumn: ColumnDef<any> = {
  id: "select",
  header: ({ table }) => (
    <Checkbox
      checked={table.getIsAllPageRowsSelected()}
      onCheckedChange={(value) =>
        table.toggleAllPageRowsSelected(Boolean(value))
      }
      aria-label="Select all"
    />
  ),
  cell: ({ row }) => (
    <Checkbox
      checked={row.getIsSelected()}
      onCheckedChange={(value) => row.toggleSelected(Boolean(value))}
      aria-label="Select row"
    />
  ),
  enableSorting: false,
  enableHiding: false,
};

const Datatable = (props: DatatableProps) => {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const [columns, setColumns] = React.useState<ColumnDef<any>[]>([]);
  const [searchInput, setSearchInput] = React.useState<string>();
  const data = props.data.values;

  console.log(data);

  useEffect(() => {
    getHeaders();
  }, [props.data]);

  const getHeaders = () => {
    if (props.selectable) {
      setColumns((current) => [...current, selectableColumn]);
    }
    Object.keys(data[0]).forEach((key: any, i: number) => {
      if (key !== "id") {
        setColumns((current) => [
          ...current,
          {
            accessorKey: key,
            header: ({ column }) => (
              <div className="flex items-center justify-between space-y-2">
                <span className="font-bold text-black">
                  {props.data.headers[i]}
                </span>
                <span
                  className="cursor-pointer"
                  onClick={() =>
                    column.toggleSorting(column.getIsSorted() === "asc")
                  }
                >
                  {column.getIsSorted() === "asc" ? (
                    <ArrowDown className="ml-2 h-4 w-4" />
                  ) : (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11 8.80002L8.10005 11.7C7.91672 11.8834 7.68338 11.975 7.40005 11.975C7.11672 11.975 6.88338 11.8834 6.70005 11.7C6.51672 11.5167 6.42505 11.2834 6.42505 11C6.42505 10.7167 6.51672 10.4834 6.70005 10.3L11.3 5.70002C11.5 5.50002 11.7334 5.40002 12 5.40002C12.2667 5.40002 12.5 5.50002 12.7 5.70002L17.3 10.3C17.4834 10.4834 17.575 10.7167 17.575 11C17.575 11.2834 17.4834 11.5167 17.3 11.7C17.1167 11.8834 16.8834 11.975 16.6 11.975C16.3167 11.975 16.0834 11.8834 15.9 11.7L13 8.80002V17C13 17.2834 12.904 17.521 12.712 17.713C12.52 17.905 12.2827 18.0007 12 18C11.7167 18 11.479 17.904 11.287 17.712C11.095 17.52 10.9994 17.2827 11 17V8.80002Z"
                        fill="black"
                      />
                    </svg>
                  )}
                </span>
              </div>
            ),
            cell: ({ row }) => <div>{row.getValue(key)}</div>,
          },
        ]);
      }
    });
  };

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="flex items-center py-4 space-x-2 justify-right">
        <Button variant="outline" className="filters-buttons font-bold">
          Ordenar por
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 18.1749V11.9999C14 11.7166 14.096 11.4789 14.288 11.2869C14.48 11.0949 14.7174 10.9993 15 10.9999C15.2834 10.9999 15.521 11.0959 15.713 11.2879C15.905 11.4799 16.0007 11.7173 16 11.9999V18.1749L17.875 16.2999C18.0584 16.1166 18.2877 16.0206 18.563 16.0119C18.8384 16.0033 19.0757 16.0993 19.275 16.2999C19.475 16.4833 19.5794 16.7126 19.588 16.9879C19.5967 17.2633 19.5007 17.5006 19.3 17.6999L15.7 21.2999C15.6 21.3999 15.4917 21.4709 15.375 21.5129C15.2584 21.5549 15.1334 21.5756 15 21.5749C14.8667 21.5749 14.7417 21.5539 14.625 21.5119C14.5084 21.4699 14.4 21.3993 14.3 21.2999L10.7 17.6999C10.5167 17.5166 10.425 17.2873 10.425 17.0119C10.425 16.7366 10.525 16.4993 10.725 16.2999C10.925 16.1166 11.1584 16.0206 11.425 16.0119C11.6917 16.0033 11.925 16.0993 12.125 16.2999L14 18.1749ZM8.00005 5.82494L6.12505 7.69994C5.90838 7.91661 5.66672 8.01661 5.40005 7.99994C5.13338 7.98328 4.90838 7.88328 4.72505 7.69994C4.52505 7.49994 4.42505 7.26228 4.42505 6.98694C4.42505 6.71161 4.51672 6.48261 4.70005 6.29994L8.30005 2.69994C8.40005 2.59994 8.50838 2.52894 8.62505 2.48694C8.74172 2.44494 8.86672 2.42428 9.00005 2.42494C9.13338 2.42494 9.25838 2.44561 9.37505 2.48694C9.49172 2.52828 9.60005 2.59928 9.70005 2.69994L13.3 6.29994C13.4834 6.48328 13.575 6.71661 13.575 6.99994C13.575 7.28328 13.4834 7.51661 13.3 7.69994C13.1 7.89994 12.8624 7.99994 12.587 7.99994C12.3117 7.99994 12.0744 7.89994 11.875 7.69994L10 5.82494V11.9999C10 12.2833 9.90405 12.5209 9.71205 12.7129C9.52005 12.9049 9.28272 13.0006 9.00005 12.9999C8.71672 12.9999 8.47905 12.9039 8.28705 12.7119C8.09505 12.5199 7.99938 12.2826 8.00005 11.9999V5.82494Z"
              fill="black"
            />
          </svg>
        </Button>
        <Button variant="outline" className="filters-buttons font-bold">
          Acciones
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 23.7001C4.45 23.7001 3.979 23.5044 3.587 23.1131C3.195 22.7217 2.99934 22.2507 3 21.7001V7.70005C3 7.15005 3.196 6.67905 3.588 6.28705C3.98 5.89505 4.45067 5.69938 5 5.70005H13.925L11.925 7.70005H5V21.7001H19V14.75L21 12.75V21.7001C21 22.25 20.804 22.7211 20.412 23.1131C20.02 23.5051 19.5493 23.7007 19 23.7001H5ZM16.175 6.27505L17.6 7.67505L11 14.275V15.7H12.4L19.025 9.07505L20.45 10.475L13.825 17.1C13.6417 17.2834 13.429 17.4294 13.187 17.538C12.945 17.6467 12.691 17.7007 12.425 17.7H10C9.71667 17.7 9.479 17.604 9.287 17.412C9.095 17.22 8.99934 16.9827 9 16.7V14.275C9 14.0084 9.05 13.754 9.15 13.512C9.25 13.27 9.39167 13.0577 9.575 12.875L16.175 6.27505ZM20.45 10.475L16.175 6.27505L18.675 3.77505C19.075 3.37505 19.5543 3.17505 20.113 3.17505C20.6717 3.17505 21.1423 3.37505 21.525 3.77505L22.925 5.20005C23.3083 5.58338 23.5 6.05005 23.5 6.60005C23.5 7.15005 23.3083 7.61672 22.925 8.00005L20.45 10.475Z"
              fill="black"
            />
          </svg>
        </Button>
        <Button variant="outline" className="filters-buttons font-bold">
          Filtrar
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 18C10.7167 18 10.479 17.904 10.287 17.712C10.095 17.52 9.99934 17.2827 10 17C10 16.7167 10.096 16.479 10.288 16.287C10.48 16.095 10.7173 15.9993 11 16H13C13.2833 16 13.521 16.096 13.713 16.288C13.905 16.48 14.0007 16.7173 14 17C14 17.2833 13.904 17.521 13.712 17.713C13.52 17.905 13.2827 18.0007 13 18H11ZM4 8C3.71667 8 3.479 7.904 3.287 7.712C3.095 7.52 2.99934 7.28267 3 7C3 6.71667 3.096 6.479 3.288 6.287C3.48 6.095 3.71734 5.99934 4 6H20C20.2833 6 20.521 6.096 20.713 6.288C20.905 6.48 21.0007 6.71734 21 7C21 7.28334 20.904 7.521 20.712 7.713C20.52 7.905 20.2827 8.00067 20 8H4ZM7 13C6.71667 13 6.479 12.904 6.287 12.712C6.095 12.52 5.99934 12.2827 6 12C6 11.7167 6.096 11.479 6.288 11.287C6.48 11.095 6.71734 10.9993 7 11H17C17.2833 11 17.521 11.096 17.713 11.288C17.905 11.48 18.0007 11.7173 18 12C18 12.2833 17.904 12.521 17.712 12.713C17.52 12.905 17.2827 13.0007 17 13H7Z"
              fill="black"
            />
          </svg>
        </Button>
        <Input
          placeholder="ej: Farmaland"
          onChange={
            (event) => setSearchInput(event.target.value)
            // table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <Button variant="outline" className="filters-buttons font-bold">
          Buscar
        </Button>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-between space-y-2">
        <div className="flex items-center justify-end space-x-2 py-4 ">
          <div className="flex-1">{props.data.values.length} contratos.</div>
        </div>
        <div className="flex items-right py-4 space-x-2">
          <Button variant="outline" className="font-bold">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.8499 13L10.6999 15.85C10.8999 16.05 10.9959 16.2834 10.9879 16.55C10.9799 16.8167 10.8839 17.05 10.6999 17.25C10.4999 17.45 10.2626 17.5544 9.9879 17.563C9.71324 17.5717 9.47557 17.4757 9.2749 17.275L4.6999 12.7C4.4999 12.5 4.3999 12.2667 4.3999 12C4.3999 11.7334 4.4999 11.5 4.6999 11.3L9.2749 6.72504C9.4749 6.52504 9.71257 6.42937 9.9879 6.43804C10.2632 6.44671 10.5006 6.55071 10.6999 6.75004C10.8832 6.95004 10.9792 7.18337 10.9879 7.45004C10.9966 7.71671 10.9006 7.95004 10.6999 8.15004L7.8499 11H18.9999C19.2832 11 19.5209 11.096 19.7129 11.288C19.9049 11.48 20.0006 11.7174 19.9999 12C19.9999 12.2834 19.9039 12.521 19.7119 12.713C19.5199 12.905 19.2826 13.0007 18.9999 13H7.8499Z"
                fill="black"
              />
            </svg>
            Atras
          </Button>
          <Button variant="outline" className="font-bold">
            1
          </Button>
          <Button variant="outline" className="font-bold">
            2
          </Button>
          <Button variant="outline" className="font-bold">
            3
          </Button>
          <Button variant="outline" className="font-bold">
            Siguiente
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.3 17.275C13.1 17.075 13.004 16.8334 13.012 16.55C13.02 16.2667 13.1243 16.025 13.325 15.825L16.15 13H5C4.71667 13 4.479 12.904 4.287 12.712C4.095 12.52 3.99934 12.2827 4 12C4 11.7167 4.096 11.479 4.288 11.287C4.48 11.095 4.71734 10.9994 5 11H16.15L13.3 8.15005C13.1 7.95005 13 7.71238 13 7.43705C13 7.16172 13.1 6.92438 13.3 6.72505C13.5 6.52505 13.7377 6.42505 14.013 6.42505C14.2883 6.42505 14.5257 6.52505 14.725 6.72505L19.3 11.3C19.4 11.4 19.471 11.5084 19.513 11.625C19.555 11.7417 19.5757 11.8667 19.575 12C19.575 12.1334 19.554 12.2584 19.512 12.375C19.47 12.4917 19.3993 12.6 19.3 12.7L14.7 17.3C14.5167 17.4834 14.2877 17.575 14.013 17.575C13.7383 17.575 13.5007 17.475 13.3 17.275Z"
                fill="black"
              />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Datatable;
