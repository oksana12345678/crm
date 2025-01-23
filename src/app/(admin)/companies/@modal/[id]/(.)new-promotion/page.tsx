import React from 'react';
import { notFound } from 'next/navigation';
import ClientPageComponent from '@/app/components/client-page-component';

export interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
  const id = (await params).id;

  if (!id) {
    notFound();
  }

  return <ClientPageComponent companyId={id} />;
}
