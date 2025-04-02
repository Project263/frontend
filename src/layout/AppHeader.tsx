"use client";
import { ThemeToggleButton } from "@/components/common/ThemeToggleButton";
import UserDropdown from "@/components/header/UserDropdown";
import { useUser } from "@/hooks/useUser";
import Link from "next/link";


const AppHeader: React.FC = () => {
  const { user } = useUser()

  return (
    <header className="sticky top-0 flex w-full bg-white border-gray-200 z-99999 dark:border-gray-800 dark:bg-gray-900 lg:border-b">
    
      <div className="flex flex-col items-center justify-between grow lg:flex-row lg:px-6">
      <Link href="/">
        <h1 className="text-blue-500">Главная</h1>
      </Link>
        <div
          className={`items-center justify-between w-full gap-4 px-5 py-4 lg:flex shadow-theme-md lg:justify-end lg:px-0 lg:shadow-none`}
        >
          
          <div className="flex items-center gap-2 2xsm:gap-3">
            <ThemeToggleButton />
            {/* <NotificationDropdown />  */}
          </div>
          <UserDropdown user={user} /> 
        </div>
      </div>
    </header>
  );
};

export default AppHeader;