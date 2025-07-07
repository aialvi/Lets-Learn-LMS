'use client';

import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  User,
  Mail,
  BookOpen,
  Edit3,
  Save,
  X,
  Trophy,
  Calendar,
  CheckCircle,
} from 'lucide-react';
import { MainNav } from '@/components/layout/main-nav';
import { Footer } from '@/components/layout/footer';
import { fetchEnrollments, getCourseVideosProgress } from '@/lib/api';

interface Course {
  id: string;
  title: string;
  description: string;
  price: number;
  author: {
    id: string;
    username: string;
    firstName: string;
    lastName: string;
  };
  lessons: {
    id: string;
    title: string;
    order: number;
  }[];
}

interface Enrollment {
  id: string;
  status: string;
  progress: number;
  course: Course;
  createdAt: string;
}

interface VideoProgress {
  lessonId: string;
  completed: boolean;
  watchTime: number;
}

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const [videoProgress, setVideoProgress] = useState<
    Record<string, VideoProgress[]>
  >({});
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    name: '',
    email: '',
  });

  useEffect(() => {
    if (status === 'unauthenticated') {
      redirect('/auth/signin');
    }
  }, [status]);

  useEffect(() => {
    if (session?.user) {
      setEditData({
        name: session.user.name || '',
        email: session.user.email || '',
      });
    }
  }, [session]);

  useEffect(() => {
    const loadEnrollments = async () => {
      if (session?.accessToken) {
        try {
          const data = await fetchEnrollments(session.accessToken);
          setEnrollments(data);
          
          // Fetch video progress for each enrolled course
          const progressData: Record<string, VideoProgress[]> = {};
          for (const enrollment of data) {
            try {
              const progress = await getCourseVideosProgress(
                enrollment.course.id,
                session.accessToken
              );
              
              // Handle different response formats
              if (Array.isArray(progress)) {
                progressData[enrollment.course.id] = progress;
              } else if (progress && typeof progress === 'object') {
                progressData[enrollment.course.id] = progress.data || progress.progress || [];
              } else {
                progressData[enrollment.course.id] = [];
              }
            } catch (error) {
              console.error(`Error fetching progress for course ${enrollment.course.id}:`, error);
              progressData[enrollment.course.id] = [];
            }
          }
          setVideoProgress(progressData);
        } catch (error) {
          console.error('Error loading enrollments:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    loadEnrollments();
  }, [session]);

  const handleSave = async () => {
    // In a real app, you'd make an API call to update the user profile
    console.log('Saving profile:', editData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData({
      name: session?.user?.name || '',
      email: session?.user?.email || '',
    });
    setIsEditing(false);
  };

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-background">
        <MainNav />
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center h-96">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!session) {
    return null;
  }

  const completedCourses = (enrollments || []).filter(e => e.progress >= 100).length;
  const totalLessons = (enrollments || []).reduce((acc, e) => acc + (e.course.lessons?.length || 0), 0);
  const completedLessons = (enrollments || []).reduce((acc, e) => {
    const courseProgress = videoProgress[e.course.id] || [];
    if (!Array.isArray(courseProgress)) return acc;
    const completed = courseProgress.filter(p => p.completed).length;
    return acc + completed;
  }, 0);
  const memberSince = new Date(session.user.email ? '2024-01-01' : Date.now()).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
  });

  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
              <User className="w-10 h-10 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">
                {session.user.name || 'User'}
              </h1>
              <p className="text-muted-foreground flex items-center gap-2">
                <Mail className="w-4 h-4" />
                {session.user.email}
              </p>
              <div className="flex items-center gap-4 mt-2">
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  Member since {memberSince}
                </Badge>
                <Badge variant="outline" className="flex items-center gap-1">
                  <Trophy className="w-3 h-3" />
                  {session.user.role}
                </Badge>
              </div>
            </div>
          </div>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="courses">My Courses</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Enrolled Courses
                  </CardTitle>
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{(enrollments || []).length}</div>
                  <p className="text-xs text-muted-foreground">
                    Active learning paths
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Completed Courses
                  </CardTitle>
                  <Trophy className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{completedCourses}</div>
                  <p className="text-xs text-muted-foreground">
                    Certificates earned
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Completed Lessons
                  </CardTitle>
                  <CheckCircle className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{completedLessons}</div>
                  <p className="text-xs text-muted-foreground">
                    Out of {totalLessons} total
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                {(enrollments || []).length > 0 ? (
                  <div className="space-y-4">
                    {(enrollments || []).slice(0, 3).map((enrollment) => (
                      <div key={enrollment.id} className="flex items-center justify-between p-3 rounded-lg border">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <BookOpen className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium">{enrollment.course.title}</h4>
                            <p className="text-sm text-muted-foreground">
                              by {enrollment.course.author.firstName} {enrollment.course.author.lastName}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium">{enrollment.progress}% complete</p>
                          <p className="text-xs text-muted-foreground">
                            {enrollment.course.lessons?.length || 0} lessons
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>No courses enrolled yet</p>
                    <Button asChild className="mt-4">
                      <Link href="/courses">Browse Courses</Link>
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="courses" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>My Enrolled Courses</CardTitle>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <div className="flex items-center justify-center h-32">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                  </div>
                ) : (enrollments || []).length > 0 ? (
                  <div className="space-y-4">
                    {(enrollments || []).map((enrollment) => (
                      <div key={enrollment.id} className="p-4 rounded-lg border">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="font-semibold text-lg">{enrollment.course.title}</h3>
                            <p className="text-muted-foreground">{enrollment.course.description}</p>
                            <p className="text-sm text-muted-foreground mt-1">
                              by {enrollment.course.author.firstName} {enrollment.course.author.lastName}
                            </p>
                          </div>
                          <Badge variant={enrollment.progress >= 100 ? 'default' : 'secondary'}>
                            {enrollment.progress >= 100 ? 'Completed' : 'In Progress'}
                          </Badge>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Progress</span>
                            <span>{enrollment.progress}%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div
                              className="bg-primary h-2 rounded-full transition-all"
                              style={{ width: `${enrollment.progress}%` }}
                            />
                          </div>
                          <div className="flex justify-between items-center mt-3">
                            <span className="text-sm text-muted-foreground">
                              {enrollment.course.lessons?.length || 0} lessons
                            </span>
                            <Button asChild size="sm">
                              <Link href={`/courses/${enrollment.course.id}`}>
                                {enrollment.progress >= 100 ? 'Review' : 'Continue'}
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>No courses enrolled yet</p>
                    <Button asChild className="mt-4">
                      <Link href="/courses">Browse Courses</Link>
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Account Information</CardTitle>
                {!isEditing && (
                  <Button variant="outline" size="sm" onClick={() => setIsEditing(true)}>
                    <Edit3 className="w-4 h-4 mr-2" />
                    Edit
                  </Button>
                )}
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    {isEditing ? (
                      <Input
                        id="name"
                        value={editData.name}
                        onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                      />
                    ) : (
                      <p className="text-sm p-2 bg-muted rounded-md">{session.user.name}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    {isEditing ? (
                      <Input
                        id="email"
                        type="email"
                        value={editData.email}
                        onChange={(e) => setEditData({ ...editData, email: e.target.value })}
                      />
                    ) : (
                      <p className="text-sm p-2 bg-muted rounded-md">{session.user.email}</p>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Role</Label>
                  <p className="text-sm p-2 bg-muted rounded-md">{session.user.role}</p>
                </div>
                {/* <div className="space-y-2">
                  <Label>User ID</Label>
                  <p className="text-sm p-2 bg-muted rounded-md font-mono">{session.user.id}</p>
                </div> */}
                
                {isEditing && (
                  <div className="flex gap-2 pt-4">
                    <Button onClick={handleSave} size="sm">
                      <Save className="w-4 h-4 mr-2" />
                      Save Changes
                    </Button>
                    <Button variant="outline" onClick={handleCancel} size="sm">
                      <X className="w-4 h-4 mr-2" />
                      Cancel
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Preferences</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Email Notifications</h4>
                      <p className="text-sm text-muted-foreground">
                        Receive email updates about your courses
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      Configure
                    </Button>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Privacy Settings</h4>
                      <p className="text-sm text-muted-foreground">
                        Manage your data and privacy preferences
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      Manage
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      <Footer />
    </div>
  );
}
