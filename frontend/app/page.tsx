'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { MainNav } from '@/components/layout/main-nav';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/home/hero-section';
import { FeaturedCourses } from '@/components/home/featured-courses';
import { useAuth } from '@/hooks/useAuth';

export default function Home() {
  const { user } = useAuth();
  return (
    <div className='flex flex-col items-center min-h-screen'>
      <MainNav />
      <main className='flex-1'>
        <HeroSection />
        <FeaturedCourses />

        <section className='py-20 bg-gray-50 dark:bg-gray-900'>
          <div className='container px-4 md:px-6'>
            <div className='text-center max-w-3xl mx-auto'>
              <h2 className='text-3xl font-bold tracking-tight mb-6'>
                Ready to Start Learning?
              </h2>
              <p className='text-muted-foreground mb-8'>
                Join our community of learners and enhance your skills today.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <Button asChild size='lg'>
                  <Link href='/courses'>Browse Courses</Link>
                </Button>
                {!user && (
                  <Button asChild variant='outline' size='lg'>
                    <Link href='/auth/signup'>Sign Up Now</Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
