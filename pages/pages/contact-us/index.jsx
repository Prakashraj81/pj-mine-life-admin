import React from "react";
import FullLayout from "../../../components/layouts/full/FullLayout";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
  Button,
  TablePagination,
  Tooltip,
} from "@mui/material";
import DashboardCard from "../../../components/shared/DashboardCard";
import { IconEye, IconCirclePlus, IconTrashX } from "@tabler/icons-react";

const products = [
  {
    id: "1",
    name: "Prakashraj",
    email: "prakash.raj@g-japan.com",
    inquiry: "Test",
    date: "2023-06-05",
    phone: "9087477747",
  },
  {
    id: "2",
    name: "Prakashraj",
    email: "prakash.raj@g-japan.com",
    inquiry: "Test",
    date: "2023-06-05",
    phone: "9087477747",
  },
  {
    id: "3",
    name: "Prakashraj",
    email: "prakash.raj@g-japan.com",
    inquiry: "Test",
    date: "2023-06-05",
    phone: "9087477747",
  },
  {
    id: "4",
    name: "Prakashraj",
    email: "prakash.raj@g-japan.com",
    inquiry: "Test",
    date: "2023-06-05",
    phone: "9087477747",
  },
  {
    id: "5",
    name: "Prakashraj",
    email: "prakash.raj@g-japan.com",
    inquiry: "Test",
    date: "2023-06-05",
    phone: "9087477747",
  },
  {
    id: "6",
    name: "Prakashraj",
    email: "prakash.raj@g-japan.com",
    inquiry: "Test",
    date: "2023-06-05",
    phone: "9087477747",
  },
  {
    id: "7",
    name: "Prakashraj",
    email: "prakash.raj@g-japan.com",
    inquiry: "Test",
    date: "2023-06-05",
    phone: "9087477747",
  },
];

export default function ContactUs() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  return (
    <>
      <DashboardCard title="Contact Us List">        
        <Box sx={{ overflow: 'auto', width: { xs: '280px', sm: 'auto' } }}>
          <Table
            aria-label="simple table"
            sx={{
              whiteSpace: "nowrap",
            }}
          >
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                    S.N0
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                    Name
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                    Email
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                    Phone no
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                    Inquiry type
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                    Date
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography align="center" variant="subtitle2" fontWeight={600}>
                    Action
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((product) => (
                  <TableRow key={product.name} sx={{ border: "2px solid #f6f9fc" }}>
                    <TableCell sx={{ borderRight: "2px solid #f6f9fc" }}>
                      <Typography>
                        {product.id}
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ borderRight: "2px solid #f6f9fc" }}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Box>
                          <Typography>
                            {product.name}
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell sx={{ borderRight: "2px solid #f6f9fc" }}>
                      <Typography>{product.email}</Typography>
                    </TableCell>
                    <TableCell sx={{ borderRight: "2px solid #f6f9fc" }}>
                      <Typography>{product.phone}</Typography>
                    </TableCell>
                    <TableCell sx={{ borderRight: "2px solid #f6f9fc" }}>
                      <Typography>{product.inquiry}</Typography>
                    </TableCell>
                    <TableCell sx={{ borderRight: "2px solid #f6f9fc" }}>
                      <Typography>{product.date}</Typography>
                    </TableCell>
                    <TableCell>
                      <div className="flex justify-between items-center">
                        <Tooltip title="View" arrow>
                          <IconEye className="mx-auto text-gray-500 cursor-pointer" />
                        </Tooltip>
                        <Tooltip title="Delete" arrow>
                          <IconTrashX className="mx-auto text-gray-500 cursor-pointer" />
                        </Tooltip>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}

            </TableBody>
          </Table>
        </Box>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 50]}
          component="div"
          count={products.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={(event, newPage) => {
            setPage(newPage);
          }}
          onRowsPerPageChange={(event) => {
            setRowsPerPage(parseInt(event.target.value, 10));
            setPage(0);
          }}
        />
      </DashboardCard>
    </>
  )
}

ContactUs.getLayout = function getLayout(page) {
  return <FullLayout>{page}</FullLayout>;
};