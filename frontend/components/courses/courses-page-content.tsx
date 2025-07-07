'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { fetchCourses } from '@/lib/api';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { BookOpen, User, Users, Search } from 'lucide-react';
import { truncateText } from '@/lib/utils';
import { toast } from 'sonner';
import { useSession } from 'next-auth/react';

interface Course {
  id: string;
  title: string;
  description: string;
  author: {
    username: string;
  };
  _count: {
    lessons: number;
    enrollments: number;
  };
}

export default function CoursesPageContent() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popular');
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    const loadCourses = async () => {
      try {
        const data = await fetchCourses();
        setCourses(data);
        setFilteredCourses(data);
      } catch (error) {
        console.error('Error loading courses:', error);
        toast('Failed to load courses. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    loadCourses();
  }, []);

  useEffect(() => {
    let result = [...courses];

    // Filter by search query
    if (searchQuery) {
      result = result.filter(
        (course) =>
          course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          course.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort courses
    if (sortBy === 'popular') {
      result.sort((a, b) => b._count.enrollments - a._count.enrollments);
    } else if (sortBy === 'newest') {
      // Assuming course IDs are somewhat chronological
      result.sort((a, b) => b.id.localeCompare(a.id));
    } else if (sortBy === 'alphabetical') {
      result.sort((a, b) => a.title.localeCompare(b.title));
    }

    setFilteredCourses(result);
  }, [courses, searchQuery, sortBy]);

  const handleJoinCourse = (courseId: string) => {
    if (!session) {
      // Redirect to login if not logged in
      router.push(`/auth/signin?callbackUrl=/courses/${courseId}`);
      return;
    }

    // If logged in, go directly to the course
    router.push(`/courses/${courseId}`);
  };

  return (
    <div className='container py-10 px-4 md:px-6'>
      <div className='flex flex-col gap-8'>
        <div className='text-center max-w-3xl mx-auto'>
          <h1 className='text-4xl font-bold tracking-tight mb-4'>
            Explore Our Courses
          </h1>
          <p className='text-muted-foreground'>
            Browse through our comprehensive course catalog and start your
            learning journey today
          </p>
        </div>

        <div className='grid gap-4 md:grid-cols-[1fr_200px] mt-16 mb-6'>
          <div className='relative'>
            <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4' />
            <Input
              placeholder='Search courses...'
              className='pl-10'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger>
              <SelectValue placeholder='Sort by' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='popular'>Most Popular</SelectItem>
              <SelectItem value='newest'>Newest</SelectItem>
              <SelectItem value='alphabetical'>A-Z</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {isLoading ? (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card key={i} className='animate-pulse'>
                <CardHeader className='space-y-2'>
                  <div className='h-6 bg-gray-200 dark:bg-gray-700 rounded'></div>
                  <div className='h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4'></div>
                </CardHeader>
                <CardContent>
                  <div className='h-20 bg-gray-200 dark:bg-gray-700 rounded'></div>
                </CardContent>
                <CardFooter>
                  <div className='h-10 bg-gray-200 dark:bg-gray-700 rounded w-full'></div>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : filteredCourses.length > 0 ? (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {filteredCourses.map((course) => (
              <Card key={course.id} className='flex flex-col h-full'>
                <CardHeader>
                  <CardTitle>{course.title}</CardTitle>
                  <CardDescription className='flex items-center gap-1'>
                    <User className='h-4 w-4' /> {course.author.username}
                  </CardDescription>
                </CardHeader>
                <CardContent className='flex-grow'>
                  <p className='text-muted-foreground'>
                    {truncateText(
                      course.description || 'No description available',
                      120
                    )}
                  </p>
                  <div className='flex items-center justify-between mt-4 text-sm text-muted-foreground'>
                    <div className='flex items-center gap-1'>
                      <BookOpen className='h-4 w-4' />
                      <span>{course._count.lessons} lessons</span>
                    </div>
                    <div className='flex items-center gap-1'>
                      <Users className='h-4 w-4' />
                      <span>{course._count.enrollments} enrolled</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className='pt-6'>
                  <Button
                    className='w-full cursor-pointer'
                    onClick={() => handleJoinCourse(course.id)}
                  >
                    {session ? 'View Course' : 'Join Course'}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <div className='text-center py-12 border rounded-lg'>
            <h3 className='text-lg font-medium mb-2'>No courses found</h3>
            <p className='text-muted-foreground'>
              {searchQuery
                ? 'Try adjusting your search query or filters'
                : 'No courses are available at the moment'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
