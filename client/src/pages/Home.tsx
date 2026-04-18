import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/_core/hooks/useAuth";
import { getLoginUrl } from "@/const";
import { CheckCircle2, Mail, Zap, BarChart3, ArrowRight } from "lucide-react";
import { useLocation } from "wouter";

export default function Home() {
  const { isAuthenticated } = useAuth();
  const [, setLocation] = useLocation();

  if (isAuthenticated) {
    setLocation("/dashboard");
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="w-6 h-6 text-blue-600" />
            <span className="text-xl font-bold text-slate-900">LateEscalate</span>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" onClick={() => setLocation("/login")}>
              Sign In
            </Button>
            <Button onClick={() => setLocation("/signup")} className="bg-blue-600 hover:bg-blue-700">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-20 md:py-32">
        <div className="text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
            Stop writing awkward payment chase emails
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Set up your invoice once. We send polite reminders — escalating to formal legal notice — until you get paid.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white" onClick={() => setLocation("/signup")}>
              Start Free Trial <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button size="lg" variant="outline">
              View Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Powerful features for modern businesses
          </h2>
          <p className="text-lg text-slate-600">
            Everything you need to collect payments faster
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <Card className="border-slate-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <Mail className="w-8 h-8 text-blue-600 mb-2" />
              <CardTitle>AI-Powered Emails</CardTitle>
              <CardDescription>
                Claude generates personalized escalation sequences tailored to each invoice
              </CardDescription>
            </CardHeader>
          </Card>

          {/* Feature 2 */}
          <Card className="border-slate-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <Zap className="w-8 h-8 text-blue-600 mb-2" />
              <CardTitle>Automated Sending</CardTitle>
              <CardDescription>
                Set it and forget it. Emails send automatically on a schedule you control
              </CardDescription>
            </CardHeader>
          </Card>

          {/* Feature 3 */}
          <Card className="border-slate-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <BarChart3 className="w-8 h-8 text-blue-600 mb-2" />
              <CardTitle>Full Control</CardTitle>
              <CardDescription>
                Review and edit emails before sending. Track delivery status in real-time
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            How it works
          </h2>
        </div>

        <div className="space-y-8">
          {[
            { step: 1, title: "Create Invoice", desc: "Add client details, amount, and due date" },
            { step: 2, title: "Generate Sequence", desc: "AI creates 4 escalating emails (polite → legal)" },
            { step: 3, title: "Review & Activate", desc: "Edit emails if needed, then activate" },
            { step: 4, title: "Get Paid", desc: "Emails send automatically until payment received" },
          ].map((item) => (
            <div key={item.step} className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-600 text-white font-bold text-lg">
                  {item.step}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="text-slate-600 mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-slate-600">
            Start free. Upgrade when you need more
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Tier */}
          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle>Free</CardTitle>
              <CardDescription>Perfect for getting started</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-3xl font-bold text-slate-900">$0</div>
              <ul className="space-y-3">
                {[
                  "1 active invoice",
                  "Basic email templates",
                  "Manual sending only",
                  "Email support",
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full" onClick={() => setLocation("/signup")}>
                Get Started
              </Button>
            </CardContent>
          </Card>

          {/* Pro Tier */}
          <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-slate-50 ring-2 ring-blue-200">
            <CardHeader>
              <CardTitle>Pro</CardTitle>
              <CardDescription>For growing businesses</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-3xl font-bold text-slate-900">
                $29<span className="text-lg text-slate-600">/month</span>
              </div>
              <ul className="space-y-3">
                {[
                  "Unlimited invoices",
                  "AI-generated personalized emails",
                  "Automatic daily scheduling",
                  "Priority support",
                  "Custom email tone selection",
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={() => setLocation("/signup")}>
                Upgrade to Pro
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to get paid faster?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses using LateEscalate to collect overdue payments
          </p>
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-slate-100"
            onClick={() => setLocation("/signup")}
          >
            Start Your Free Trial
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-blue-600" />
              <span className="font-semibold text-slate-900">LateEscalate</span>
            </div>
            <p className="text-slate-600">© 2026 LateEscalate. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
