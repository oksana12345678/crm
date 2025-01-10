'use client';

import React, { useEffect, useState } from 'react';
import Header from '@/app/components/header';

export interface PageProps {
  params: Promise<{ id: string }>;
}

function Page({ params }: PageProps) {
  const [id, setId] = useState<string | number | null>(null);

  useEffect(() => {
    params.then((resolvedParams) => {
      const { id } = resolvedParams;

      setId(id);
    });
  }, [params]);

  return (
    <>
      <Header>companies ({id})</Header>
    </>
  );
}

export default Page;
