'use client';

import { useState, useEffect } from 'react';
import { DashboardCard } from '@/components/admin/DashboardCard';
import api from '@/lib/api';

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    users: 0,
    courses: 0,
    lessons: 0,
    enrollments: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        console.log('Fetching dashboard stats...');
        const response = await api.get('/admin/dashboard');
        console.log('Dashboard stats response:', response);
        console.log('Response data:', response.data);
        setStats(response.data);
      } catch (error) {
        console.error('Failed to fetch dashboard stats:', error);
        if (error instanceof Error) {
          console.error('Error details:', error.message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (isLoading) {
    return <div className="flex items-center justify-center h-full">Loading...</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mt-16 mb-6">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard
          title="Total Users"
          value={stats.users}
          icon="👤"
          color="bg-blue-100"
        />
        <DashboardCard
          title="Total Courses"
          value={stats.courses}
          icon="📚"
          color="bg-green-100"
        />
        <DashboardCard
          title="Total Lessons"
          value={stats.lessons}
          icon="📝"
          color="bg-yellow-100"
        />
        <DashboardCard
          title="Total Enrollments"
          value={stats.enrollments}
          icon="🎓"
          color="bg-purple-100"
        />
      </div>
    </div>
  );
}
