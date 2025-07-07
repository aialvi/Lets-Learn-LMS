import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { formatDate, truncateText } from '@/lib/utils';
import { EditLessonModal } from '@/components/admin/EditLessonModal';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

interface Course {
  id: number;
  title: string;
}

interface Lesson {
  id: number;
  title: string;
  description: string;
  duration: number;
  courseId: string;
  videoUrl?: string;
  course?: Course;
  createdAt: string;
}

interface EditLessonData {
  title: string;
  description: string;
  duration: number;
  courseId: string;
  videoUrl?: string;
}

interface LessonTableProps {
  lessons: Lesson[];
  courses: Course[];
  onUpdate: (id: number, data: EditLessonData) => void;
  onDelete: (id: number) => void;
}

export function LessonTable({
  lessons,
  courses,
  onUpdate,
  onDelete,
}: LessonTableProps) {
  const [editingLesson, setEditingLesson] = useState<Lesson | null>(null);

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Duration (min)</TableHead>
            <TableHead>Course</TableHead>
            <TableHead>Created At</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {lessons.map((lesson) => (
            <TableRow key={lesson.id}>
              <TableCell>{lesson.id}</TableCell>
              <TableCell>{lesson.title}</TableCell>
              <TableCell>{truncateText(lesson.description, 50)}</TableCell>
              <TableCell>{lesson.duration}</TableCell>
              <TableCell>{lesson.course?.title || 'Unknown'}</TableCell>
              <TableCell>{formatDate(lesson.createdAt)}</TableCell>
              <TableCell>
                <div className='flex space-x-2'>
                  <Button
                    variant='outline'
                    size='sm'
                    onClick={() => setEditingLesson(lesson)}
                  >
                    Edit
                  </Button>

                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant='destructive' size='sm'>
                        Delete
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently
                          delete the lesson and remove it from the course.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={() => onDelete(lesson.id)}>
                          Delete
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {editingLesson && (
        <EditLessonModal
          lesson={editingLesson}
          courses={courses}
          isOpen={!!editingLesson}
          onClose={() => setEditingLesson(null)}
          onSubmit={(data) => {
            onUpdate(editingLesson.id, data);
            setEditingLesson(null);
          }}
        />
      )}
    </>
  );
}
