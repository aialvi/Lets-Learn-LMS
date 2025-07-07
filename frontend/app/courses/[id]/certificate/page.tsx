import { Metadata } from 'next';
import Certificate from '@/components/courses/certificate';

export const metadata: Metadata = {
  title: 'Certificate of Completion',
  description: 'Download your certificate of completion',
};

interface CertificatePageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function CertificatePage({ params }: CertificatePageProps) {
  const { id } = await params;
  
  return (
    <div className="container mx-auto py-8">
      <Certificate courseId={id} />
    </div>
  );
}
