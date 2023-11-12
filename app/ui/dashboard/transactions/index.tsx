import React from "react";
import { Table, Avatar, Box } from "@radix-ui/themes";
import { FaUserAlt } from "react-icons/fa";
import { twMerge } from "tailwind-merge";
import cn from "classnames";

export const Transactions = () => {
  const status = {
    completed: true,
    pending: false,
    canceled: false,
  };

  return (
    <div className="bg-neutral-900 p-[2rem] rounded-md">
      <div className="w-full mb-7 border-neutral-700 border-b-2">
        <h2>Transactions</h2>
      </div>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Date</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Amount</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row align="center">
            <Table.RowHeaderCell className="space-x-4">
              <Avatar
                src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
                fallback={
                  <Box className="w-5 h-5">
                    <FaUserAlt size={18} />
                  </Box>
                }
              />
              <span>Danilo Sousa</span>
            </Table.RowHeaderCell>
            <Table.Cell>
              <span
                className={twMerge(
                  cn(
                    `
                   p-1 px-2 rounded-md
                   bg-neutral-800
                    text-neutral-100
                   `,
                    {
                      "bg-green-500/25": status.completed,
                      "bg-yellow-500/25": status.pending,
                      "bg-red-500/25": status.canceled,
                      "text-green-500": status.completed,
                      "text-yellow-500": status.pending,
                      "text-red-500": status.canceled,
                    }
                  )
                )}>
                Completed
              </span>
            </Table.Cell>
            <Table.Cell>
              <span>02/14/2024</span>
            </Table.Cell>
            <Table.Cell>
              <span>$3.200</span>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    </div>
  );
};
