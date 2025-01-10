import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export interface SidebarItemsProps {
  current?: boolean;
  pathname: string;
  src: string;
  alt: string;
  children: React.ReactNode;
}

function SidebarItems({
  pathname,
  src,
  alt,
  children,
  current,
}: SidebarItemsProps) {
  return (
    <Link
      href={pathname}
      className={clsx(
        'flex items-center h-9 mx-1 gap-3.5',
        current &&
          'after:h-full after:ml-auto after:border-2 after:border-purple-200 after:rounded-sm',
      )}
    >
      <Image className="ml-5" width={18} height={18} src={src} alt={alt} />
      <span className="font-medium text-zinc-50 ">{children}</span>
    </Link>
  );
}

export default SidebarItems;
