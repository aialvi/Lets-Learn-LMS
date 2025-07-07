import { MainNav } from '@/components/layout/main-nav';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Search, 
  BookOpen, 
  Users, 
  Settings, 
  CreditCard,
  HelpCircle,
  ChevronRight,
  Mail,
  MessageSquare
} from 'lucide-react';
import Link from 'next/link';

export default function HelpPage() {
  const faqs = [
    {
      question: "How do I enroll in a course?",
      answer: "Browse our courses page, select a course that interests you, and click the 'Enroll Now' button. You'll need to create an account if you haven't already."
    },
    {
      question: "Can I access courses offline?",
      answer: "Currently, our courses require an internet connection to access. We're working on offline capabilities for future updates."
    },
    {
      question: "How do I track my progress?",
      answer: "Your progress is automatically tracked as you complete lessons. You can view your progress on your dashboard or course page."
    },
    {
      question: "Do I get a certificate upon completion?",
      answer: "Yes! Upon completing a course, you'll receive a digital certificate that you can share on your professional profiles."
    },
    {
      question: "How can I contact an instructor?",
      answer: "You can reach out to instructors through the course discussion forums or send them a direct message through the course page."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept major credit cards, PayPal, and other secure payment methods. All transactions are encrypted and secure."
    }
  ];

  const helpCategories = [
    {
      title: "Getting Started",
      icon: BookOpen,
      description: "Learn the basics of using our platform",
      articles: [
        "Creating your account",
        "Navigating the dashboard",
        "Finding the right courses",
        "Setting up your profile"
      ]
    },
    {
      title: "Courses & Learning",
      icon: Users,
      description: "Everything about taking courses",
      articles: [
        "How to enroll in courses",
        "Understanding course structure",
        "Submitting assignments",
        "Participating in discussions"
      ]
    },
    {
      title: "Account & Settings",
      icon: Settings,
      description: "Manage your account preferences",
      articles: [
        "Updating your profile",
        "Notification settings",
        "Privacy controls",
        "Password management"
      ]
    },
    {
      title: "Billing & Payments",
      icon: CreditCard,
      description: "Payment and subscription help",
      articles: [
        "Payment methods",
        "Billing cycles",
        "Refund policy",
        "Subscription management"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Help Center
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Find answers to common questions and get the support you need
          </p>
          
          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search for help..."
              className="pl-10 pr-4 py-2"
            />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <Mail className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Email Support</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Get help via email within 24 hours
              </p>
              <Button asChild size="sm">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <MessageSquare className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Live Chat</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Chat with our support team in real-time
              </p>
              <Button size="sm" variant="outline">
                Start Chat
              </Button>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <HelpCircle className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Browse FAQ</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Find quick answers to common questions
              </p>
              <Button size="sm" variant="outline">
                View FAQ
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Help Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Browse Help Topics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {helpCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <category.icon className="h-5 w-5 text-primary" />
                    {category.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {category.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {category.articles.map((article, articleIndex) => (
                      <div 
                        key={articleIndex}
                        className="flex items-center justify-between p-2 rounded-lg hover:bg-muted cursor-pointer"
                      >
                        <span className="text-sm">{article}</span>
                        <ChevronRight className="h-4 w-4 text-muted-foreground" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <Card>
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b pb-4 last:border-b-0">
                  <h3 className="font-semibold text-foreground mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Still Need Help */}
        <div className="text-center mt-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Still Need Help?
          </h2>
          <p className="text-muted-foreground mb-6">
            Our support team is here to help you succeed
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
