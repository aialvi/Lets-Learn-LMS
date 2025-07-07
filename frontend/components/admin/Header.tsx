'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';

interface HeaderProps {
  toggleSidebar: () => void;
}

export function Header({ toggleSidebar }: HeaderProps) {
  const { user, logout } = useAuth();

  return (
    <header className='fixed top-0 left-0 right-0 h-16 bg-white shadow-sm z-20 flex items-center justify-between px-4'>
      <div className='flex items-center'>
        <Button variant='ghost' onClick={toggleSidebar} className='mr-4'>
          ☰
        </Button>
        <Link href='/admin' className='text-xl font-bold'>
          Let&apos;s Learn Admin
        </Link>
      </div>
      <div className='flex items-center space-x-4'>
        <div className='text-sm'>
          <span className='font-medium'>
            {user?.username} {user?.role ? `(${user.role})` : ''}
          </span>
        </div>
        <Button variant='outline' size='sm' onClick={logout}>
          Logout
        </Button>
      </div>
    </header>
  );
}
