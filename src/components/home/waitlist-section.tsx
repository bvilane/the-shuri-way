import { memo, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

const WaitlistSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    company: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.role) {
      toast.error('Please fill in all required fields');
      return;
    }

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      toast.success('Welcome to the waitlist! 🎉', {
        description: "We'll be in touch soon with exclusive updates.",
      });
    }, 1000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <section
        id="cta"
        className="from-primary/10 to-accent/10 bg-gradient-to-b py-16 lg:py-24"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="border-primary/20 from-primary/5 to-accent/5 rounded-2xl border bg-gradient-to-br p-8 lg:p-12">
              {/* Success Icon */}
              <div className="from-primary to-accent mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r">
                <CheckCircle size={32} className="text-white" />
              </div>

              {/* Success Message */}
              <h2 className="font-safari text-foreground mb-6 text-2xl font-bold lg:text-3xl">
                You're in! Welcome to the revolution.
              </h2>

              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                Thanks for joining the waitlist,{' '}
                <span className="text-primary font-semibold">
                  {formData.name}
                </span>
                ! You'll be among the first to experience Shuri Way when we
                launch.
              </p>

              {/* Benefits */}
              <div className="text-muted-foreground space-y-3">
                <div className="flex items-center justify-center">
                  <span className="mr-3">📧</span>
                  <span>Check your email for a welcome message</span>
                </div>
                <div className="flex items-center justify-center">
                  <span className="mr-3">🚀</span>
                  <span>Get exclusive updates on our progress</span>
                </div>
                <div className="flex items-center justify-center">
                  <span className="mr-3">⭐</span>
                  <span>Early access to beta features</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="cta"
      className="from-primary/10 to-accent/10 bg-gradient-to-b py-16 lg:py-24"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          {/* Header */}
          <h2 className="font-safari text-foreground mb-6 text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl">
            Get early access.
            <br />
            <span className="text-primary">Be part of the revolution.</span>
          </h2>

          <p className="text-muted-foreground mb-12 text-lg leading-relaxed md:text-xl">
            Join thousands of safari professionals, travelers, and industry
            leaders who are shaping the future of African safari together.
          </p>

          {/* Form Container */}
          <div className="border-primary/20 from-primary/5 to-accent/5 rounded-2xl border bg-gradient-to-br p-6 lg:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <Input
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="border-primary/20 focus:border-primary focus:ring-primary/20 h-12 bg-white"
                    required
                  />
                </div>

                <div>
                  <Input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="border-primary/20 focus:border-primary focus:ring-primary/20 h-12 bg-white"
                    required
                  />
                </div>
              </div>

              {/* Role and Company Row */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <Select
                    onValueChange={(value) => handleInputChange('role', value)}
                    required
                  >
                    <SelectTrigger className="border-primary/20 focus:border-primary focus:ring-primary/20 h-12 bg-white">
                      <SelectValue placeholder="Select Your Role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="lodge">Lodge</SelectItem>
                      <SelectItem value="operator">Tour Operator</SelectItem>
                      <SelectItem value="traveler">Traveler</SelectItem>
                      <SelectItem value="provider">Service Provider</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Input
                    type="text"
                    placeholder="Company Name (Optional)"
                    value={formData.company}
                    onChange={(e) =>
                      handleInputChange('company', e.target.value)
                    }
                    className="border-primary/20 focus:border-primary focus:ring-primary/20 h-12 bg-white"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="default"
                size="lg"
                className="from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground shadow-primary/25 hover:shadow-primary/30 group w-full rounded-xl bg-gradient-to-r px-8 py-3 text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <span className="flex items-center justify-center gap-2">
                  Join the Waitlist
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Button>
            </form>

            {/* Privacy Note */}
            <div className="border-primary/10 mt-6 border-t pt-6">
              <p className="text-muted-foreground text-sm">
                By joining, you'll receive exclusive updates about Shuri Way's
                launch and early access opportunities. We respect your privacy.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { number: '2,500+', label: 'Already on waitlist' },
              { number: 'Q2 2024', label: 'Expected launch' },
              { number: 'Free', label: 'Early access' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-safari text-primary mb-2 text-2xl font-bold lg:text-3xl">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(WaitlistSection);
