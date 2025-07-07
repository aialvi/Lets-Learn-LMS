import { MainNav } from '@/components/layout/main-nav';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  FileText, 
  Shield, 
  Users, 
  CreditCard,
  AlertTriangle,
  Scale
} from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Terms of Service
          </h1>
          <p className="text-muted-foreground">
            Last updated: July 8, 2025
          </p>
        </div>

        {/* Introduction */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              Introduction
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              Welcome to Let&apos;s Learn. These Terms of Service (&quot;Terms&quot;) govern your use of our website, 
              mobile application, and services (collectively, the &quot;Service&quot;) operated by Let&apos;s Learn 
              (&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;). By accessing or using our Service, you agree to be bound by these Terms.
            </p>
          </CardContent>
        </Card>

        {/* Account Terms */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Account Terms
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Account Creation</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                You must create an account to access certain features of our Service. You are responsible 
                for maintaining the confidentiality of your account credentials and for all activities 
                that occur under your account.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Account Eligibility</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                You must be at least 13 years old to use our Service. If you are under 18, you must have 
                your parent or guardian&apos;s permission to use our Service.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Account Responsibilities</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                You are responsible for providing accurate and complete information when creating your account 
                and for keeping your account information updated.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Service Usage */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              Acceptable Use
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Permitted Uses</h4>
              <ul className="text-muted-foreground text-sm space-y-1 ml-4">
                <li>• Access and use our courses for personal or educational purposes</li>
                <li>• Participate in course discussions and forums</li>
                <li>• Share course completion certificates</li>
                <li>• Provide feedback and reviews on courses</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Prohibited Uses</h4>
              <ul className="text-muted-foreground text-sm space-y-1 ml-4">
                <li>• Share your account credentials with others</li>
                <li>• Download or redistribute course content without permission</li>
                <li>• Use the Service for any illegal or unauthorized purpose</li>
                <li>• Interfere with or disrupt the Service or servers</li>
                <li>• Harass, abuse, or harm other users</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Payment Terms */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-primary" />
              Payment Terms
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Course Purchases</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Some courses may require payment. All fees are clearly displayed before purchase. 
                Payment is due immediately upon enrollment unless otherwise specified.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Refund Policy</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We offer a 30-day money-back guarantee for most courses. Refunds must be requested 
                within 30 days of purchase and before completing more than 30% of the course content.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Subscription Services</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Some services may be offered on a subscription basis. Subscriptions automatically 
                renew unless cancelled before the renewal date. You can cancel your subscription 
                at any time through your account settings.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Intellectual Property */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Scale className="h-5 w-5 text-primary" />
              Intellectual Property
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Our Content</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                All content on our Service, including courses, videos, text, graphics, logos, and 
                software, is owned by Let&apos;s Learn or our content providers and is protected by 
                copyright, trademark, and other intellectual property laws.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Your Content</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                You retain ownership of any content you submit to our Service, but you grant us a 
                license to use, modify, and distribute your content in connection with our Service.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">License to Use</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We grant you a limited, non-exclusive, non-transferable license to access and use 
                our Service for your personal, non-commercial use.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Disclaimers */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-yellow-500" />
              Disclaimers and Limitations
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Service Availability</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We strive to maintain continuous service availability but cannot guarantee 
                uninterrupted access. We may suspend or terminate the Service for maintenance, 
                updates, or other operational reasons.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Content Accuracy</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                While we make efforts to ensure content accuracy, we cannot guarantee that all 
                information is current, complete, or error-free. Course content is for educational 
                purposes and should not be considered professional advice.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Limitation of Liability</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Our liability is limited to the maximum extent permitted by law. We are not liable 
                for any indirect, incidental, special, or consequential damages arising from your 
                use of our Service.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Termination */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Termination</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Either party may terminate these Terms at any time. We may suspend or terminate your 
              account if you violate these Terms or engage in activities that harm our Service or 
              other users.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Upon termination, your right to use our Service will cease immediately. Provisions 
              of these Terms that by their nature should survive termination will remain in effect.
            </p>
          </CardContent>
        </Card>

        {/* Changes to Terms */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Changes to Terms</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We may update these Terms from time to time. We will notify you of any material 
              changes by posting the new Terms on our website and updating the &quot;Last updated&quot; date. 
              Your continued use of our Service after the changes take effect constitutes your 
              acceptance of the new Terms.
            </p>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="text-sm space-y-1">
              <p><strong>Email:</strong> legal@letslearn.com</p>
              <p><strong>Address:</strong> 123 Learning Street, Education City, EC 12345</p>
              <p><strong>Phone:</strong> +1 (555) 123-4567</p>
            </div>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
}
