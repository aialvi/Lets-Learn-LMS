import { SignUpForm } from "@/components/auth/sign-up-form";
import { Footer } from "@/components/layout/footer";
import { MainNav } from "@/components/layout/main-nav";

export default function SignUpPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />
      <main className="flex-1 flex items-center justify-center py-12">
        <SignUpForm />
      </main>
      <Footer />
    </div>
  );
}
