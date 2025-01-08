import Image from 'next/image';
import React from 'react';

export interface SearchInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onSearchClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function SearchInput({ onSearchClick, ...rest }: SearchInputProps) {
  return (
    <div>
      <input
        type="text"
        {...rest}
        className="text-sm flex-1 py-3 pl-3 pr-11 rounded border border-gray-50"
      />
      <button
        type="button"
        className="absolute top-0 right-0 p-3"
        onClick={onSearchClick}
      >
        <Image
          width={20}
          height={20}
          src="/icons/magnifying-glass.svg"
          alt="search icons"
        />
      </button>
    </div>
  );
}

export default SearchInput;
