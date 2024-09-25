import React from 'react';
import {
    MaterialReactTable,
    useMaterialReactTable,
    createMRTColumnHelper,
} from 'material-react-table';
import { Box, Button } from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import { faker } from '@faker-js/faker';

// Generate mock data
export const data = Array.from({ length: 100 }).map(() => ({
    id: faker.datatype.uuid(), // Generate a unique ID
    firstName: faker.name.firstName(), // Generate a first name
    lastName: faker.name.lastName(), // Generate a last name
    company: faker.company.companyName(), // Generate a company name
    city: faker.address.city(), // Generate a city name
    country: faker.address.country(), // Generate a country name
}));

const columnHelper = createMRTColumnHelper();

const columns = [
    columnHelper.accessor('id', { header: 'ID', size: 40 }),
    columnHelper.accessor('firstName', { header: 'First Name', size: 120 }),
    columnHelper.accessor('lastName', { header: 'Last Name', size: 120 }),
    columnHelper.accessor('company', { header: 'Company', size: 300 }),
    columnHelper.accessor('city', { header: 'City' }),
    columnHelper.accessor('country', { header: 'Country', size: 220 }),
];

const BookingsDetails = () => {
    const handleExportRows = (rows) => {
        const doc = new jsPDF();
        const tableData = rows.map((row) => Object.values(row.original));
        const tableHeaders = columns.map((c) => c.header);

        autoTable(doc, {
            head: [tableHeaders],
            body: tableData,
        });

        doc.save('mrt-pdf-example.pdf');
    };

    const table = useMaterialReactTable({
        columns,
        data,
        enableRowSelection: true,
        columnFilterDisplayMode: 'popover',
        paginationDisplayMode: 'pages',
        positionToolbarAlertBanner: 'bottom',
        renderTopToolbarCustomActions: ({ table }) => (
            <Box sx={{ display: 'flex', gap: '16px', padding: '8px', flexWrap: 'wrap' }}>
                <Button
                    disabled={table.getPrePaginationRowModel().rows.length === 0}
                    onClick={() => handleExportRows(table.getPrePaginationRowModel().rows)}
                    startIcon={<FileDownloadIcon />}
                >
                    Export All Rows
                </Button>
                <Button
                    disabled={table.getRowModel().rows.length === 0}
                    onClick={() => handleExportRows(table.getRowModel().rows)}
                    startIcon={<FileDownloadIcon />}
                >
                    Export Page Rows
                </Button>
                <Button
                    disabled={!table.getIsSomeRowsSelected() && !table.getIsAllRowsSelected()}
                    onClick={() => handleExportRows(table.getSelectedRowModel().rows)}
                    startIcon={<FileDownloadIcon />}
                >
                    Export Selected Rows
                </Button>
            </Box>
        ),
    });

    return <MaterialReactTable table={table} />;
};

export default BookingsDetails;
