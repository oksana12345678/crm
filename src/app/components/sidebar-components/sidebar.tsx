'use client'; // Ensure the component is marked as a client component

import Image from 'next/image';
import React from 'react';
import SidebarItems from './sidebar-items';
import { usePathname, useRouter } from 'next/navigation';

// export interface SidebarProps {}

function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();

  const handleExitClick = () => {
    router.push('/');
  };

  return (
    <aside className="fixed  top-0 left-0 z-40 w-60 h-screen">
      <div className="flex flex-col h-full bg-gray-900 overflow-y-auto">
        <Image
          className="py-8 mb-11 mx-auto"
          width={122}
          height={25}
          src="/icons/logoCrm.svg"
          alt="logo"
          priority
        />
        <ul className="space-y-7">
          <li>
            <SidebarItems
              current={pathname === '/dashboard'}
              pathname="/dashboard"
              src="/icons/squares.svg"
              alt="dashboard icon"
            >
              Dashboard
            </SidebarItems>
          </li>
          <li>
            <SidebarItems
              current={pathname === '/companies'}
              pathname="/companies"
              src="/icons/briefcase.svg"
              alt="companies icon"
            >
              Companies
            </SidebarItems>
          </li>
        </ul>
        <button
          className="flex items-center p-6 gap-2 mt-auto  mx-auto "
          onClick={handleExitClick}
        >
          <Image
            width={18}
            height={18}
            src="/icons/arrow-left-on-rectangle.svg"
            alt="exit icon"
          />
          <span className="font-medium text-white">Exit</span>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
