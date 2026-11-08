import { useParams } from 'react-router-dom';
import { getServiceAreaPage } from '@/data/serviceAreas';
import ServiceAreaPage from '@/pages/ServiceAreaPage';
import ServiceLocationPage from '@/pages/ServiceLocationPage';

export default function SlugPage() {
  const { slug = '' } = useParams();
  if (getServiceAreaPage(slug)) return <ServiceAreaPage />;
  return <ServiceLocationPage />;
}
