import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/StatCard";
import { ProcessCard } from "@/components/ProcessCard";
import { FeatureCard } from "@/components/FeatureCard";
import { 
  Star, 
  Users, 
  Calendar, 
  Download, 
  FileText,
  TrendingUp,
  Shield,
  DollarSign,
  BarChart3,
  CheckCircle2,
  Briefcase,
  GraduationCap
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 animate-fade-in-up">
              <GraduationCap className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">Professional Healthcare Training</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up animation-delay-200">
              <span className="text-gradient">Medical Billing</span> Course
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
              Master healthcare revenue cycle management with advanced training in Medical Billing, Coding, and Insurance Claim Processing.
            </p>
            
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in-up animation-delay-600">
              Gain hands-on experience with real-world billing software and claim handling to build a rewarding career in the healthcare industry.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 max-w-3xl mx-auto">
              <StatCard icon={Star} value="4.9/5" label="Rating" delay="animation-delay-200" />
              <StatCard icon={Users} value="3,000+" label="Students" delay="animation-delay-400" />
              <StatCard icon={Calendar} value="5 Months" label="Duration" delay="animation-delay-600" />
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in-up animation-delay-800">
              <Button variant="hero" size="xl">
                Book Free Demo Class
              </Button>
              <Button variant="outline" size="xl">
                <Download className="w-5 h-5 mr-2" />
                Download Syllabus
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What is RCM Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                What is <span className="text-gradient">RCM</span>?
              </h2>
              <p className="text-lg text-muted-foreground">Revenue Cycle Management in Healthcare</p>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12 border border-border shadow-lg animate-fade-in-up animation-delay-200">
              <p className="text-lg text-foreground leading-relaxed mb-6">
                <strong className="text-primary">Revenue Cycle Management (RCM)</strong> is the end-to-end process of managing the financial aspects of patient services, ensuring that healthcare providers get paid for the care they deliver. It combines clinical services, administrative tasks, and financial processes.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-card rounded-xl border border-border">
                  <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-primary" />
                    The Process
                  </h3>
                  <p className="text-muted-foreground">
                    RCM tracks patient care episodes from registration and appointment scheduling to the final payment of a balance, ensuring smooth financial operations.
                  </p>
                </div>
                
                <div className="p-6 bg-card rounded-xl border border-border">
                  <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    The Impact
                  </h3>
                  <p className="text-muted-foreground">
                    RCM is the backbone of healthcare finance—it's how hospitals, clinics, and doctors get paid for the care they give patients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Steps Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Key Steps in <span className="text-gradient">Medical Billing RCM</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Master the complete revenue cycle with 100% hands-on training and real-time projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            <ProcessCard 
              number="1" 
              title="Patient Registration & Verification" 
              description="Record patient information and verify insurance eligibility before service delivery."
              delay="animation-delay-200"
            />
            <ProcessCard 
              number="2" 
              title="Pre-Authorization" 
              description="Obtain approval from insurance providers for certain medical procedures."
              delay="animation-delay-400"
            />
            <ProcessCard 
              number="3" 
              title="Charge Capture" 
              description="Record all services provided by healthcare professionals accurately."
              delay="animation-delay-600"
            />
            <ProcessCard 
              number="4" 
              title="Medical Coding" 
              description="Convert diagnoses and procedures into standard codes (ICD, CPT, HCPCS)."
            />
            <ProcessCard 
              number="5" 
              title="Claim Submission" 
              description="Prepare and submit insurance claims electronically or via paper."
              delay="animation-delay-200"
            />
            <ProcessCard 
              number="6" 
              title="Claim Processing & Adjudication" 
              description="Insurance company reviews, approves, denies, or requests additional information."
              delay="animation-delay-400"
            />
            <ProcessCard 
              number="7" 
              title="Payment Posting" 
              description="Apply payments received from insurance companies and patients to accounts."
              delay="animation-delay-600"
            />
            <ProcessCard 
              number="8" 
              title="Denial Management & Follow-up" 
              description="Handle denied or rejected claims and appeal when necessary."
            />
            <ProcessCard 
              number="9" 
              title="Patient Billing & Collections" 
              description="Send statements to patients for co-pays, deductibles, and balances."
              delay="animation-delay-200"
            />
            <ProcessCard 
              number="10" 
              title="Reporting & Analytics" 
              description="Track KPIs like Days in A/R, denial rates, and collection efficiency."
              delay="animation-delay-400"
            />
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl border border-primary/20 animate-fade-in-up">
              <BarChart3 className="w-5 h-5 text-primary" />
              <span className="text-foreground font-medium">Learn Python, SQL, Excel, Tableau, Power BI</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why RCM Important Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why is <span className="text-gradient">RCM Important</span>?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <FeatureCard 
              icon={TrendingUp}
              title="Faster Reimbursement"
              description="Streamlined processes ensure healthcare providers receive payments quickly and efficiently."
              delay="animation-delay-200"
            />
            <FeatureCard 
              icon={Shield}
              title="Reduced Denials"
              description="Proper coding and verification minimize claim rejections and denials."
              delay="animation-delay-400"
            />
            <FeatureCard 
              icon={DollarSign}
              title="Improved Cash Flow"
              description="Consistent revenue collection maintains healthy financial operations for providers."
              delay="animation-delay-600"
            />
            <FeatureCard 
              icon={FileText}
              title="Billing Transparency"
              description="Clear documentation and reporting provide full visibility into financial processes."
            />
            <FeatureCard 
              icon={CheckCircle2}
              title="Patient Satisfaction"
              description="Transparent billing and clear communication enhance patient experience and trust."
              delay="animation-delay-200"
            />
            <FeatureCard 
              icon={BarChart3}
              title="Performance Analytics"
              description="Data-driven insights help optimize operations and identify improvement areas."
              delay="animation-delay-400"
            />
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Applications</span> of Medical Billing
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Medical Billing connects patients, providers, and payers across the healthcare ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            <div className="p-8 bg-card rounded-2xl border border-border shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up">
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Healthcare Provider Revenue Cycle</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Helps hospitals, clinics, and doctors get reimbursed for services</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Ensures accurate claim submission to insurance companies</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Reduces claim denials and payment delays</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-card rounded-2xl border border-border shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up animation-delay-200">
              <div className="w-14 h-14 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Insurance Claim Processing</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span>Automates claim creation, submission, and tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span>Ensures compliance with insurance rules and regulations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span>Verifies patient eligibility and coverage before service</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-card rounded-2xl border border-border shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up animation-delay-400">
              <div className="w-14 h-14 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center mb-6">
                <DollarSign className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Patient Financial Management</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Generates bills and patient statements</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Provides cost transparency (out-of-pocket, deductibles, co-pays)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Enables payment tracking and installment plans</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-card rounded-2xl border border-border shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up animation-delay-600">
              <div className="w-14 h-14 bg-gradient-to-br from-primary-glow to-secondary rounded-xl flex items-center justify-center mb-6">
                <BarChart3 className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Business & Analytics</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Provides revenue cycle data for financial planning</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Identifies high-performing services and procedures</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Helps in cost control and budgeting for healthcare providers</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Job Opportunities Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/5 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-6 animate-fade-in-up">
              <Briefcase className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium text-accent">Career Opportunities</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up animation-delay-200">
              Your Future in <span className="text-gradient-accent">US Healthcare</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 animate-fade-in-up animation-delay-400">
              There are many job opportunities currently available in the US Healthcare Industry (Medical Billing) market in India.
            </p>

            <div className="p-8 bg-card rounded-2xl border border-border shadow-xl animate-fade-in-up animation-delay-600">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Bridge the Gap Between Education and Industry
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Our comprehensive Medical Billing course is designed to bridge the gap between traditional education and industry requirements, preparing you for a successful career in healthcare revenue cycle management.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button variant="gradient" size="xl">
                  Enroll Now
                </Button>
                <Button variant="outline" size="xl">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-2">IAT Technologies</h3>
            <p className="text-muted-foreground mb-6">
              Professional Healthcare Training & Education
            </p>
            <div className="flex items-center justify-center gap-4">
              <Button variant="default">
                Book Free Demo
              </Button>
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Download Syllabus
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-8">
              © 2024 IAT Technologies. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
