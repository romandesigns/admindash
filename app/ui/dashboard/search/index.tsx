"use client";

import React from "react";
import { TextField } from "@radix-ui/themes";
import { MdSearch } from "react-icons/md";

export const SearchComponent = ({ placeholder }: { placeholder: string }) => {
  return (
    <TextField.Root>
      <TextField.Slot>
        <MdSearch size={18} />
      </TextField.Slot>
      <TextField.Input placeholder={placeholder} size="3" />
    </TextField.Root>
  );
};
