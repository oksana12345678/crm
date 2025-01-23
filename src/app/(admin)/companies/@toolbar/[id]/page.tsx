import AddPromotionButton from '@/app/components/add-promotion-button';
import Toolbar from '@/app/components/toolbar';
import SearchInput from '../../../../components/search-input';

export interface PageProps {
  params: Promise<{ id: string }>;
}

async function Page({ params }: PageProps) {
  const id = (await params).id;

  return (
    <Toolbar action={<AddPromotionButton companyId={id} />}>
      <SearchInput />
    </Toolbar>
  );
}

export default Page;
