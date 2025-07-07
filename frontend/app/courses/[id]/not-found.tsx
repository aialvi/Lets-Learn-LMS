import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function CourseNotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[60vh] py-12 text-center">
      <h1 className="text-4xl font-bold tracking-tight mb-2">Course Not Found</h1>
      <p className="text-muted-foreground mb-8 max-w-md">
        The course you&apos;re looking for doesn&apos;t exist or has been removed.
      </p>
      <Button asChild>
        <Link href="/courses">Browse All Courses</Link>
      </Button>
    </div>
  );
}
