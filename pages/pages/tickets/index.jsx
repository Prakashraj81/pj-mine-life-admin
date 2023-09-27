import React, { useState } from "react";
import Link from "next/link";
import {
  Typography,
  Box,
  Grid,
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
import theme from "../../../components/theme";
import DashboardCard from "../../../components/shared/DashboardCard";
import FullLayout from "../../../components/layouts/full/FullLayout";
import { IconEyeEdit } from "@tabler/icons-react";

const products = [
  {
    ticketid: "#01234",
    name: "Shree Hari",
    email: "shree.hari@g-japan.com",
    medium: "Call",
    date: "2023-06-05",
    status: "Approved",
  },
  {
    ticketid: "#02234",
    name: "Prakashraj",
    email: "prakash.raj@g-japan.com",
    medium: "Message",
    date: "2023-06-05",
    status: "Pending",
  },
  {
    ticketid: "#03234",
    name: "Gowtham",
    email: "gowtham@g-japan.com",
    medium: "Message",
    date: "2023-06-05",
    status: "Completed",
  },
];

export default function Tickets() {
  return (
    <>
      <DashboardCard title="Customer Tickets Lists">
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
                    Ticket Id
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
                    Medium
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                    Date
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                    Status
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
                .map((product) => (
                  <TableRow key={product.name} sx={{ border: "2px solid #f6f9fc" }}>
                    <TableCell>
                      <Typography>
                        {product.ticketid}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>{product.name}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>{product.email}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>{product.medium}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>{product.date}</Typography>
                    </TableCell>
                    <TableCell>
                      {product.status === "Pending" ? (
                        <Chip
                          className="text-xs"
                          color="success"
                          size="small"
                          label={product.status}
                        />
                      ) : product.status === "Approved" ? (
                        <Chip
                          className="text-xs"
                          color="error"
                          size="small"
                          label={product.status}
                        />
                      ) : product.status === "Completed" ? (
                        <Chip
                          className="text-xs"
                          color="primary"
                          size="small"
                          label={product.status}
                        />
                      ) : (
                        <Chip
                          className="text-xs"
                          size="small"
                          color="error"
                          label="Unknown Status"
                        />
                      )}
                    </TableCell>
                    <TableCell>
                      <Tooltip title="View" arrow>
                        <IconEyeEdit id={btoa(product.id)} className="mx-auto text-gray-500 cursor-pointer" />
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </Box>
      </DashboardCard>
    </>
  )
}
Tickets.getLayout = function getLayout(page) {
  return <FullLayout>{page}</FullLayout>;
};