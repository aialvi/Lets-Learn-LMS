import { MainNav } from '@/components/layout/main-nav';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Shield, 
  Eye, 
  Database, 
  Cookie,
  Share2,
  Settings,
  Mail,
  Lock
} from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground">
            Last updated: July 8, 2025
          </p>
        </div>

        {/* Introduction */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              Introduction
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              At Let&apos;s Learn, we take your privacy seriously. This Privacy Policy explains how we collect, 
              use, disclose, and safeguard your information when you use our website, mobile application, 
              and services. By using our Service, you consent to the data practices described in this policy.
            </p>
          </CardContent>
        </Card>

        {/* Information We Collect */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5 text-primary" />
              Information We Collect
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Personal Information</h4>
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">
                We collect personal information that you voluntarily provide to us, including:
              </p>
              <ul className="text-muted-foreground text-sm space-y-1 ml-4">
                <li>• Name and email address</li>
                <li>• Account credentials and profile information</li>
                <li>• Payment information (processed securely by third-party providers)</li>
                <li>• Communication preferences and settings</li>
                <li>• Course reviews and feedback</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Usage Information</h4>
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">
                We automatically collect information about how you use our Service:
              </p>
              <ul className="text-muted-foreground text-sm space-y-1 ml-4">
                <li>• Course progress and completion data</li>
                <li>• Learning analytics and performance metrics</li>
                <li>• Device information and browser type</li>
                <li>• IP address and location data</li>
                <li>• Log files and usage patterns</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Cookies and Tracking</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We use cookies and similar tracking technologies to enhance your experience, 
                analyze usage patterns, and provide personalized content. You can control 
                cookie preferences through your browser settings.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* How We Use Information */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5 text-primary" />
              How We Use Your Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Service Provision</h4>
              <ul className="text-muted-foreground text-sm space-y-1 ml-4">
                <li>• Create and manage your account</li>
                <li>• Provide access to courses and learning materials</li>
                <li>• Track your progress and issue certificates</li>
                <li>• Process payments and manage subscriptions</li>
                <li>• Provide customer support and technical assistance</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Communication</h4>
              <ul className="text-muted-foreground text-sm space-y-1 ml-4">
                <li>• Send important service updates and notifications</li>
                <li>• Respond to your inquiries and support requests</li>
                <li>• Send marketing communications (with your consent)</li>
                <li>• Notify you of course updates and new offerings</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Improvement and Analytics</h4>
              <ul className="text-muted-foreground text-sm space-y-1 ml-4">
                <li>• Analyze usage patterns to improve our Service</li>
                <li>• Personalize your learning experience</li>
                <li>• Develop new features and course recommendations</li>
                <li>• Ensure security and prevent fraud</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Information Sharing */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Share2 className="h-5 w-5 text-primary" />
              Information Sharing and Disclosure
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">We Do Not Sell Your Data</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We do not sell, trade, or otherwise transfer your personal information to third 
                parties for their marketing purposes.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Limited Sharing</h4>
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">
                We may share your information in the following circumstances:
              </p>
              <ul className="text-muted-foreground text-sm space-y-1 ml-4">
                <li>• With service providers who assist in operating our Service</li>
                <li>• When required by law or to protect our rights</li>
                <li>• In connection with a business transfer or merger</li>
                <li>• With your explicit consent</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Course Instructors</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Course instructors may see aggregate data about student progress and engagement 
                but do not have access to your personal information unless you choose to share it.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Data Security */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="h-5 w-5 text-primary" />
              Data Security
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Security Measures</h4>
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">
                We implement appropriate technical and organizational measures to protect your data:
              </p>
              <ul className="text-muted-foreground text-sm space-y-1 ml-4">
                <li>• Encryption of data in transit and at rest</li>
                <li>• Regular security assessments and updates</li>
                <li>• Access controls and authentication measures</li>
                <li>• Secure payment processing through certified providers</li>
                <li>• Regular data backups and disaster recovery procedures</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Data Retention</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We retain your personal information only as long as necessary to provide our 
                services and fulfill the purposes outlined in this policy, or as required by law.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Your Rights */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5 text-primary" />
              Your Rights and Choices
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Access and Control</h4>
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">
                You have the right to:
              </p>
              <ul className="text-muted-foreground text-sm space-y-1 ml-4">
                <li>• Access and update your personal information</li>
                <li>• Delete your account and associated data</li>
                <li>• Opt out of marketing communications</li>
                <li>• Request a copy of your data</li>
                <li>• Correct inaccurate information</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Cookie Controls</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                You can control cookies through your browser settings. Note that disabling certain 
                cookies may affect the functionality of our Service.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Data Portability</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                You can request a copy of your data in a structured, commonly used format. 
                Contact us to exercise this right.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Cookies */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Cookie className="h-5 w-5 text-primary" />
              Cookies and Tracking Technologies
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Essential Cookies</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                These cookies are necessary for the Service to function and cannot be switched off. 
                They are usually set in response to actions you take, such as logging in or filling forms.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Performance Cookies</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                These cookies help us understand how you interact with our Service by collecting 
                anonymous information about page visits and user behavior.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Functionality Cookies</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                These cookies enable enhanced functionality and personalization, such as remembering 
                your preferences and providing customized content.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* International Users */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>International Users</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Our Service is operated from the United States. If you are accessing our Service from 
              outside the United States, please be aware that your information may be transferred to, 
              stored, and processed in the United States.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We comply with applicable data protection laws and implement appropriate safeguards 
              to protect your information during international transfers.
            </p>
          </CardContent>
        </Card>

        {/* Children's Privacy */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Children&apos;s Privacy</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Our Service is not intended for children under 13 years of age. We do not knowingly 
              collect personal information from children under 13. If you become aware that a child 
              has provided us with personal information, please contact us immediately.
            </p>
          </CardContent>
        </Card>

        {/* Changes to Privacy Policy */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Changes to This Privacy Policy</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any material 
              changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. 
              We encourage you to review this Privacy Policy periodically for any changes.
            </p>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-primary" />
              Contact Us
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="text-sm space-y-1">
              <p><strong>Email:</strong> privacy@letslearn.com</p>
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
