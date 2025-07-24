import { toast } from 'sonner';
import { memo, useCallback, useState } from 'react';
import {
  ArrowRight,
  CheckCircle,
  Mail,
  User,
  Building,
  UserCircle,
  Loader2,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  submitWaitlistForm,
  type WaitlistFormData,
} from '@/functions/waitlist';

function WaitlistSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    company: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.role) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await submitWaitlistForm({
        data: {
          name: formData.name,
          email: formData.email,
          role: formData.role,
          company: formData.company || undefined,
        } as WaitlistFormData,
      });

      if (result.success) {
        setIsSubmitted(true);
        toast.success('Welcome to the waitlist! 🎉', {
          description: result.message,
        });
      } else {
        toast.error('Something went wrong', {
          description: result.error || 'Please try again later',
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Network error', {
        description: 'Please check your connection and try again',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = useCallback(
    (field: string, value: string) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
    },
    [setFormData],
  );

  if (isSubmitted) {
    return (
      <section
        id="cta"
        className="from-sand-beige/15 to-sand-beige/30 bg-gradient-to-b py-16 lg:py-24"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="border-savanna-green/30 from-savanna-green/10 to-earth-gold/10 rounded-2xl border-2 bg-gradient-to-br p-8 shadow-xl backdrop-blur-sm lg:p-12">
              {/* Success Icon */}
              <div className="from-savanna-green to-earth-gold mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r">
                <CheckCircle size={32} className="text-white" />
              </div>

              {/* Success Message */}
              <h2 className="font-safari text-deep-charcoal mb-6 text-2xl font-bold lg:text-3xl">
                You're in! Welcome to the revolution.
              </h2>

              <p className="text-dusk-brown mb-8 text-lg leading-relaxed">
                Thanks for joining the waitlist,{' '}
                <span className="text-savanna-green font-semibold">
                  {formData.name}
                </span>
                ! You'll be among the first to experience Shuri Way when we
                launch.
              </p>

              <div className="text-dusk-brown space-y-3">
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
      className="from-sand-beige/20 to-sand-beige/35 bg-gradient-to-b py-16 lg:py-24"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Header */}
          <h2 className="font-safari text-deep-charcoal mb-6 text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl">
            The future of safari runs on intelligence.
          </h2>

          <p className="text-dusk-brown mb-12 text-lg leading-relaxed md:text-xl">
            Be the first to use Shuri AI — our integrated assistant that helps
            travelers, operators, and lodges make smarter decisions, faster.
          </p>

          {/* Form Container */}
          <div className="relative">
            {/* Background with enhanced visual appeal */}
            <div className="from-savanna-green/10 via-earth-gold/5 to-sunset-orange/10 absolute inset-0 rounded-3xl bg-gradient-to-br blur-3xl"></div>

            <div className="border-earth-gold/30 relative rounded-3xl border-2 bg-white/90 p-8 shadow-2xl backdrop-blur-xl lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Form Fields */}
                <div className="space-y-6">
                  {/* Name Field */}
                  <div className="group">
                    <label className="text-dusk-brown mb-2 block text-left text-sm font-medium">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="text-dusk-brown/60 absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 transform" />
                      <Input
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange('name', e.target.value)
                        }
                        disabled={isSubmitting}
                        className="border-sand-beige/60 placeholder:text-dusk-brown/50 hover:border-earth-gold/60 focus:border-savanna-green focus:ring-savanna-green/20 h-14 rounded-xl border-2 bg-white pr-4 pl-12 text-base transition-all duration-300 focus:ring-4 disabled:cursor-not-allowed disabled:opacity-50"
                        required
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="group">
                    <label className="text-dusk-brown mb-2 block text-left text-sm font-medium">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="text-dusk-brown/60 absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 transform" />
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange('email', e.target.value)
                        }
                        disabled={isSubmitting}
                        className="border-sand-beige/60 placeholder:text-dusk-brown/50 hover:border-earth-gold/60 focus:border-savanna-green focus:ring-savanna-green/20 h-14 rounded-xl border-2 bg-white pr-4 pl-12 text-base transition-all duration-300 focus:ring-4 disabled:cursor-not-allowed disabled:opacity-50"
                        required
                      />
                    </div>
                  </div>

                  {/* Role Field */}
                  <div className="group">
                    <label className="text-dusk-brown mb-2 block text-left text-sm font-medium">
                      Your Role *
                    </label>
                    <div className="relative">
                      <UserCircle className="text-dusk-brown/60 absolute top-1/2 left-4 z-10 h-5 w-5 -translate-y-1/2 transform" />
                      <Select
                        onValueChange={(value) =>
                          handleInputChange('role', value)
                        }
                        disabled={isSubmitting}
                        required
                      >
                        <SelectTrigger className="border-sand-beige/60 hover:border-earth-gold/60 focus:border-savanna-green focus:ring-savanna-green/20 data-[placeholder]:text-dusk-brown/50 h-14 w-full rounded-xl border-2 bg-white pr-4 pl-12 text-base transition-all duration-300 focus:ring-4 disabled:cursor-not-allowed disabled:opacity-50">
                          <SelectValue placeholder="Select your role" />
                        </SelectTrigger>
                        <SelectContent className="border-earth-gold/30 rounded-xl border-2 bg-white shadow-xl">
                          <SelectItem
                            value="lodge"
                            className="hover:bg-savanna-green/10 focus:bg-savanna-green/15 h-12 rounded-lg text-base"
                          >
                            🏨 Lodge Owner/Manager
                          </SelectItem>
                          <SelectItem
                            value="operator"
                            className="hover:bg-earth-gold/10 focus:bg-earth-gold/15 h-12 rounded-lg text-base"
                          >
                            🚐 Tour Operator
                          </SelectItem>
                          <SelectItem
                            value="traveler"
                            className="hover:bg-sunset-orange/10 focus:bg-sunset-orange/15 h-12 rounded-lg text-base"
                          >
                            ✈️ Traveler
                          </SelectItem>
                          <SelectItem
                            value="provider"
                            className="hover:bg-dusk-brown/10 focus:bg-dusk-brown/15 h-12 rounded-lg text-base"
                          >
                            🛠️ Service Provider
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Company Field */}
                  <div className="group">
                    <label className="text-dusk-brown mb-2 block text-left text-sm font-medium">
                      Company Name{' '}
                      <span className="text-dusk-brown/60">(Optional)</span>
                    </label>
                    <div className="relative">
                      <Building className="text-dusk-brown/60 absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 transform" />
                      <Input
                        type="text"
                        placeholder="Enter your company name"
                        value={formData.company}
                        onChange={(e) =>
                          handleInputChange('company', e.target.value)
                        }
                        disabled={isSubmitting}
                        className="border-sand-beige/60 placeholder:text-dusk-brown/50 hover:border-earth-gold/60 focus:border-savanna-green focus:ring-savanna-green/20 h-14 rounded-xl border-2 bg-white pr-4 pl-12 text-base transition-all duration-300 focus:ring-4 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="group from-savanna-green via-savanna-green to-savanna-green/90 hover:from-savanna-green/90 hover:via-savanna-green hover:to-savanna-green border-savanna-green/30 relative h-16 w-full overflow-hidden rounded-xl border bg-gradient-to-r text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100"
                  >
                    <div className="absolute inset-0 -translate-x-full -skew-x-12 transform bg-gradient-to-r from-white/0 via-white/20 to-white/0 transition-transform duration-700 group-hover:translate-x-full"></div>
                    <span className="relative flex items-center justify-center gap-3">
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-6 w-6 animate-spin" />
                          Joining Waitlist...
                        </>
                      ) : (
                        <>
                          Join the Waitlist
                          <ArrowRight className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" />
                        </>
                      )}
                    </span>
                  </Button>
                </div>
              </form>

              {/* Privacy Note */}
              <div className="border-sand-beige/60 mt-8 border-t pt-6">
                <div className="text-dusk-brown flex items-start gap-3 text-sm leading-relaxed">
                  <div className="bg-earth-gold/20 mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full">
                    <div className="bg-earth-gold h-2 w-2 rounded-full"></div>
                  </div>
                  <p>
                    By joining, you'll receive exclusive updates about Shuri
                    Way's launch and early access opportunities. We respect your
                    privacy and will never share your information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(WaitlistSection);
