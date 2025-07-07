'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { LessonTable } from '@/components/admin/LessonTable';
import CreateLessonModal from '@/components/admin/CreateLessonModal';
import { CreateLessonData, UpdateLessonData } from '@/types';
import api from '@/lib/api';

export default function LessonsManagement() {
  const [lessons, setLessons] = useState([]);
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const fetchLessons = async () => {
    try {
      setIsLoading(true);
      const response = await api.get('/admin/lessons');
      setLessons(response.data);
    } catch (error) {
      console.error('Failed to fetch lessons:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchCourses = async () => {
    try {
      const response = await api.get('/admin/courses');
      setCourses(response.data);
    } catch (error) {
      console.error('Failed to fetch courses:', error);
    }
  };

  useEffect(() => {
    fetchLessons();
    fetchCourses();
  }, []);

  const handleCreateLesson = async (lessonData: CreateLessonData) => {
    try {
      await api.post('/admin/lessons', lessonData);
      fetchLessons();
      setIsCreateModalOpen(false);
    } catch (error) {
      console.error('Failed to create lesson:', error);
    }
  };

  const handleUpdateLesson = async (id: number, lessonData: UpdateLessonData) => {
    try {
      await api.patch(`/admin/lessons/${id}`, lessonData);
      fetchLessons();
    } catch (error) {
      console.error('Failed to update lesson:', error);
    }
  };

  const handleDeleteLesson = async (id: number) => {
    try {
      await api.delete(`/admin/lessons/${id}`);
      fetchLessons();
    } catch (error) {
      console.error('Failed to delete lesson:', error);
    }
  };

  return (
    <div>
      <div className='flex justify-between items-center mt-16 mb-6'>
        <h1 className='text-3xl font-bold'>Lessons Management</h1>
        <Button onClick={() => setIsCreateModalOpen(true)}>
          Create Lesson
        </Button>
      </div>

      {isLoading ? (
        <div className='flex items-center justify-center h-64'>Loading...</div>
      ) : (
        <LessonTable
          lessons={lessons}
          courses={courses}
          onUpdate={handleUpdateLesson}
          onDelete={handleDeleteLesson}
        />
      )}

      <CreateLessonModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onSubmit={handleCreateLesson}
        courses={courses}
      />
    </div>
  );
}
