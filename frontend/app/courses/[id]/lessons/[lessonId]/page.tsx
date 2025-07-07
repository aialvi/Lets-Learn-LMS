import { Metadata } from 'next';
import VideoPlayer from '@/components/courses/video-player';

export const metadata: Metadata = {
  title: 'Video Lesson',
  description: 'Watch video lessons and track your progress',
};

interface LessonPageProps {
  params: Promise<{
    id: string;
    lessonId: string;
  }>;
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { id, lessonId } = await params;
  
  return (
    <div className="container mx-auto py-8">
      <VideoPlayer courseId={id} lessonId={lessonId} />
    </div>
  );
}
