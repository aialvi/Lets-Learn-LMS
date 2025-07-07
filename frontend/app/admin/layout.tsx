'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Sidebar } from '@/components/admin/Sidebar';
import { Header } from '@/components/admin/Header';
import { useAuth } from '@/hooks/useAuth';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, isLoading } = useAuth();
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    if (!isLoading && (!user || user.role !== 'admin')) {
      router.push('/auth/signin');
    }
  }, [user, isLoading, router]);

  if (isLoading) {
    return (
      <div className='flex items-center justify-center min-h-screen'>
        Loading...
      </div>
    );
  }

  if (!user || user.role !== 'admin') {
    return null;
  }

  return (
    <div className='min-h-screen w-full bg-gray-100'>
      <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      <div className='flex'>
        <Sidebar isOpen={isSidebarOpen} />
        <main
          className={`flex-1 p-6 transition-all duration-300 ${
            isSidebarOpen ? 'ml-64' : 'ml-0'
          }`}
        >
          {children}
        </main>
      </div>
    </div>
  );
}
