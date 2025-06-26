import { SidebarProvider } from "@/components/ui/sidebar";
import React, { Children } from "react";

type Props = {
  children: React.ReactNode;
};

const SidebarLayout = ({ children }: Props) => {
  return (
    <SidebarLayout>
      {/* <AppSidebar/> */}
      <main className="m-2 w-full">
        <div className="border-sidebar-border bg-sidebar flex items-center gap-2 rounded-md border p-2 px-4 shadow">
          {/* <SearchBar/> */}
          <div className="ml-auto"></div>
          <UserButton />
        </div>
      </main>
    </SidebarLayout>
  );
};
