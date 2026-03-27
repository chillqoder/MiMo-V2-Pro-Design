import { CountryDetailContent } from './CountryDetailContent';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function CountryDetailPage({ params }: PageProps) {
  const { slug } = await params;
  return <CountryDetailContent slug={slug} />;
}
