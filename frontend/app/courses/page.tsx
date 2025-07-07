import { Metadata } from 'next';
import { Footer } from '@/components/layout/footer';
import { MainNav } from '@/components/layout/main-nav';
import CoursesPageContent from '@/components/courses/courses-page-content';

export const metadata: Metadata = {
  title: "Courses | Let's Learn",
  description: "Browse all available courses on Let's Learn platform",
};

export default function CoursesPage() {
  return (
    <div className='flex flex-col min-h-screen items-center'>
      <MainNav />
      <main className='flex-1 flex items-center justify-center py-12'>
        <CoursesPageContent />
      </main>
      <Footer />
    </div>
  );
}
