import React, { useMemo } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
import remove from '../assets/images/DashBordCard/delete.svg'
import edit from '../assets/images/DashBordCard/editIcon.svg'

const UseTable = ({ props }) => {
  // Ensure props.data is defined before using it
  const temp = props?.data || []; // Default to an empty array if props.data is undefined or null
  console.log(props?.data); // Add optional chaining here as well

  const columns = useMemo(
    () => [
      {
        accessorKey: 'email',
        header: 'Email',
        size: 150,
      },
      {
        accessorKey: 'name',
        header: 'Name',
        size: 150,
      },
      {
        accessorKey: 'role',
        header: 'Role',
        size: 150,
      },
      {
        accessorKey: 'state',
        header: 'State',
        size: 150,
        // Adding Edit and Remove links in the 'State' column
        Cell: ({ row }) => (
          <div className="flex gap-2">
            <a
              href="#"
              className="font-medium flex text-hoverColor items-center justify-center   hover:underline"
              onClick={(e) => {
                e.preventDefault(); // Prevent default link behavior
                props.setUpdateUserId(row.original._id); // Use row.original to access the row's data
                props.setFormOpener(true);
                props.setChangeForm(true);
                console.log(row.original._id); // Log the user ID
              }}
            >
              <img src={edit} alt="" className ='w-[1rem] mx-1' />
              Edit
            </a>
            <a
              href="#"
              className="font-medium flex text-red-600 items-center justify-center dark:text-red-500 hover:underline ms-3"
              onClick={(e) => {
                e.preventDefault(); // Prevent default link behavior
                props.setDeleteUserId(row.original._id); // Use row.original to access the row's data
                console.log('Remove clicked for', row.original._id);
              }}
            >
              <img src={remove} alt="" className ='w-[1rem] mx-1' />
              Remove
            </a>
          </div>
        ),
      },
    ],
    [props],
  );

  const table = useMaterialReactTable({
    columns,
    data: temp, // Use the checked `temp` data
  });

  return (
      <MaterialReactTable table={table} />
    
  );
};

export default UseTable;
