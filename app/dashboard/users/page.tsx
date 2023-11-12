import { SearchComponent } from "@/app/ui/dashboard/search";
import { Button, Link } from "@radix-ui/themes";
import React from "react";

const UsersPage = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <SearchComponent placeholder="Search for user..." />
        <Link href="/dashboard/users/add">
          <Button>
            <span>Create New</span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default UsersPage;
