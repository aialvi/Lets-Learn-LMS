import { MainNav } from '@/components/layout/main-nav';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  Mail, 
  MapPin, 
  Phone, 
  Clock,
  Send,
  MessageSquare,
  HelpCircle,
  Users
} from 'lucide-react';

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help via email within 24 hours",
      contact: "support@letslearn.com",
      availability: "24/7"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our support team",
      contact: "+1 (555) 123-4567",
      availability: "Mon-Fri, 9AM-6PM EST"
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Chat with our support team in real-time",
      contact: "Available on website",
      availability: "Mon-Fri, 9AM-6PM EST"
    },
    {
      icon: MapPin,
      title: "Office Location",
      description: "Visit our headquarters",
      contact: "123 Learning Street, Education City, EC 12345",
      availability: "Mon-Fri, 9AM-5PM EST"
    }
  ];

  const departments = [
    {
      name: "General Support",
      description: "Account issues, course questions, and general inquiries"
    },
    {
      name: "Technical Support",
      description: "Platform issues, bugs, and technical difficulties"
    },
    {
      name: "Billing & Payments",
      description: "Payment issues, refunds, and subscription management"
    },
    {
      name: "Course Content",
      description: "Questions about course materials and curriculum"
    },
    {
      name: "Partnership",
      description: "Business partnerships and collaboration opportunities"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We&apos;re here to help! Reach out to us with any questions, concerns, or feedback.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Send className="h-5 w-5 text-primary" />
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="department">Department</Label>
                <select 
                  id="department"
                  className="w-full p-2 border border-input rounded-md bg-background"
                >
                  <option value="">Select a department</option>
                  {departments.map((dept, index) => (
                    <option key={index} value={dept.name.toLowerCase()}>
                      {dept.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="How can we help you?" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Please describe your question or issue in detail..."
                  rows={6}
                />
              </div>
              <Button className="w-full">
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HelpCircle className="h-5 w-5 text-primary" />
                  Get in Touch
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted">
                      <method.icon className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-semibold">{method.title}</h4>
                        <p className="text-sm text-muted-foreground mb-1">
                          {method.description}
                        </p>
                        <p className="text-sm font-medium">{method.contact}</p>
                        <p className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {method.availability}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Departments
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {departments.map((dept, index) => (
                    <div key={index} className="border-b pb-3 last:border-b-0">
                      <h4 className="font-semibold text-sm">{dept.name}</h4>
                      <p className="text-xs text-muted-foreground">
                        {dept.description}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Help */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Need Quick Help?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 rounded-lg bg-muted">
                <HelpCircle className="h-8 w-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold mb-1">Check our FAQ</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Find answers to common questions
                </p>
                <Button size="sm" variant="outline">
                  View FAQ
                </Button>
              </div>
              <div className="text-center p-4 rounded-lg bg-muted">
                <MessageSquare className="h-8 w-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold mb-1">Start Live Chat</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Chat with our support team now
                </p>
                <Button size="sm" variant="outline">
                  Start Chat
                </Button>
              </div>
              <div className="text-center p-4 rounded-lg bg-muted">
                <Mail className="h-8 w-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold mb-1">Email Us</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Send us an email for detailed help
                </p>
                <Button size="sm" variant="outline">
                  Send Email
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Response Time */}
        <div className="text-center mt-8 p-6 bg-muted rounded-lg">
          <h3 className="font-semibold mb-2">Response Times</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <strong>Email:</strong> Within 24 hours
            </div>
            <div>
              <strong>Live Chat:</strong> Immediate during business hours
            </div>
            <div>
              <strong>Phone:</strong> Immediate during business hours
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
