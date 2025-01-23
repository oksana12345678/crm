import Header from '@/app/components/header';
import { Company, getCompany } from '@/lib/app';
import getQueryClient from '@/lib/utils/getQueryClient';
import React from 'react';

export interface PageProps {
  params: Promise<{ id: string }>;
}

async function Page({ params }: PageProps) {
  const queryClient = getQueryClient();

  const id = (await params).id;

  await queryClient.prefetchQuery({
    queryKey: ['company', id],
    queryFn: () => getCompany(id, { cache: 'no-store' }),
    staleTime: 1 * 1000,
  });

  const company = queryClient.getQueryData<Company>(['company', id]) as Company;

  return (
    <>
      <Header>{company?.title}</Header>
    </>
  );
}

export default Page;
