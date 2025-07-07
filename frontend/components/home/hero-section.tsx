'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";

export function HeroSection() {
  const { user } = useAuth();
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 md:grid-cols-2 items-center">
          <div className="flex flex-col space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
              Expand Your Knowledge with Let&apos;s Learn
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Access high-quality courses taught by expert instructors. Start learning today and unlock your potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              <Button asChild size="lg">
                <Link href="/courses">
                  Browse Courses
                </Link>
              </Button>
              {!user && (
                <Button asChild variant="outline" size="lg">
                  <Link href="/auth/signup">
                    Sign Up For Free
                  </Link>
                </Button>
              )}
            </div>
          </div>
          <div className="rounded-lg overflow-hidden h-[300px] md:h-[400px] lg:h-[500px] bg-gray-100 dark:bg-gray-800 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm flex items-center justify-center">
              <div className="text-center space-y-4 p-6">
                <h3 className="text-xl font-bold">Interactive Learning Platform</h3>
                <p className="max-w-md">Our platform combines video lectures, interactive quizzes, and hands-on projects to ensure effective learning.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
