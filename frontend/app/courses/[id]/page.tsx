import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { fetchCourseById } from '@/lib/api';
import CourseDetailContent from '@/components/courses/course-detail-content';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  
  try {
    const course = await fetchCourseById(id);

    return {
      title: `${course.title} | Let's Learn`,
      description:
        course.description || "Join this course on Let's Learn platform",
    };
  } catch (error: unknown) {
    return {
      title: "Course Not Found | Let's Learn",
      description: `The requested course could not be found.${error}`,
    };
  }
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  
  try {
    const course = await fetchCourseById(id);
    return <CourseDetailContent course={course} />;
  } catch {
    notFound();
  }
}
