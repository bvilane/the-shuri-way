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
  Sparkles,
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
      <section id="cta" className="relative overflow-hidden py-16 lg:py-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/form-bg.png"
            alt="Background"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-white/85"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-[#A7FFD9]/10 to-[#DAB785]/10"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white/90 shadow-xl backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-[#A7FFD9]/5 via-white to-[#DAB785]/5"></div>

              <div className="relative p-8 text-center lg:p-12">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-[#1B4332] to-[#1B4332]/80 shadow-lg">
                  <CheckCircle size={28} className="text-white" />
                </div>

                <h2 className="mb-4 text-2xl font-bold text-[#1B4332] lg:text-3xl">
                  You're in! Welcome to the revolution.
                </h2>

                <p className="mb-8 text-lg leading-relaxed text-gray-600">
                  Thanks for joining the waitlist,{' '}
                  <span className="font-semibold text-[#1B4332]">
                    {formData.name}
                  </span>
                  ! You'll be among the first to experience Shuri Way when we
                  launch.
                </p>

                <div className="mx-auto max-w-md space-y-4">
                  <div className="flex items-center justify-center gap-3 rounded-xl bg-gray-50 p-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#A7FFD9]/20">
                      <Sparkles className="h-4 w-4 text-[#1B4332]" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                      Exclusive updates on our progress
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-3 rounded-xl bg-gray-50 p-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#DAB785]/20">
                      <ArrowRight className="h-4 w-4 text-[#1B4332]" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                      Early access to beta features
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="cta" className="relative overflow-hidden py-16 lg:py-20">
      <div className="absolute inset-0 z-0">
        <img
          src="/form-bg.png"
          alt="Background"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#A7FFD9]/20 via-white/30 to-[#DAB785]/20 blur-2xl"></div>

            <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/85 shadow-2xl backdrop-blur-md">
              <div className="border-b border-gray-100 bg-gradient-to-r from-gray-50/80 to-white/80 p-6 text-center backdrop-blur-sm lg:p-8">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-[#A7FFD9] to-[#DAB785]">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#1B4332] lg:text-xl">
                  Join the Waitlist
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Get early access to Shuri Way
                </p>
              </div>

              <form onSubmit={handleSubmit} className="p-6 lg:p-8">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="group">
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
                      <Input
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange('name', e.target.value)
                        }
                        disabled={isSubmitting}
                        className="h-12 rounded-xl border border-gray-200 bg-white/90 pr-4 pl-10 text-sm transition-all duration-300 placeholder:text-gray-400 hover:border-[#A7FFD9]/60 focus:border-[#1B4332] focus:ring-2 focus:ring-[#1B4332]/20 disabled:cursor-not-allowed disabled:opacity-50"
                        required
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange('email', e.target.value)
                        }
                        disabled={isSubmitting}
                        className="h-12 rounded-xl border border-gray-200 bg-white/90 pr-4 pl-10 text-sm transition-all duration-300 placeholder:text-gray-400 hover:border-[#A7FFD9]/60 focus:border-[#1B4332] focus:ring-2 focus:ring-[#1B4332]/20 disabled:cursor-not-allowed disabled:opacity-50"
                        required
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Your Role *
                    </label>
                    <div className="relative">
                      <UserCircle className="absolute top-1/2 left-3 z-10 h-4 w-4 -translate-y-1/2 text-gray-400" />
                      <Select
                        onValueChange={(value) =>
                          handleInputChange('role', value)
                        }
                        disabled={isSubmitting}
                        required
                      >
                        <SelectTrigger className="h-12 w-full rounded-xl border border-gray-200 bg-white/90 pr-4 pl-10 text-sm backdrop-blur-sm transition-all duration-300 hover:border-[#A7FFD9]/60 focus:border-[#1B4332] focus:ring-2 focus:ring-[#1B4332]/20 disabled:cursor-not-allowed disabled:opacity-50 data-[placeholder]:text-gray-400">
                          <SelectValue placeholder="Select your role" />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl border border-gray-200 bg-white/95 shadow-xl backdrop-blur-sm">
                          <SelectItem
                            value="lodge"
                            className="rounded-lg text-sm hover:bg-[#1B4332]/5 focus:bg-[#1B4332]/10"
                          >
                            🏨 Lodge Owner/Manager
                          </SelectItem>
                          <SelectItem
                            value="operator"
                            className="rounded-lg text-sm hover:bg-[#A7FFD9]/5 focus:bg-[#A7FFD9]/10"
                          >
                            🚐 Tour Operator
                          </SelectItem>
                          <SelectItem
                            value="traveler"
                            className="rounded-lg text-sm hover:bg-[#DAB785]/5 focus:bg-[#DAB785]/10"
                          >
                            ✈️ Traveler
                          </SelectItem>
                          <SelectItem
                            value="provider"
                            className="rounded-lg text-sm hover:bg-[#1B4332]/5 focus:bg-[#1B4332]/10"
                          >
                            🛠️ Service Provider
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="group">
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Company Name{' '}
                      <span className="font-normal text-gray-400">
                        (Optional)
                      </span>
                    </label>
                    <div className="relative">
                      <Building className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
                      <Input
                        type="text"
                        placeholder="Enter company name"
                        value={formData.company}
                        onChange={(e) =>
                          handleInputChange('company', e.target.value)
                        }
                        disabled={isSubmitting}
                        className="h-12 rounded-xl border border-gray-200 bg-white/90 pr-4 pl-10 text-sm transition-all duration-300 placeholder:text-gray-400 hover:border-[#A7FFD9]/60 focus:border-[#1B4332] focus:ring-2 focus:ring-[#1B4332]/20 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative h-14 w-full overflow-hidden rounded-xl bg-gradient-to-r from-[#1B4332] to-[#1B4332]/90 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:from-[#1B4332]/90 hover:to-[#1B4332] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100"
                  >
                    <div className="absolute inset-0 -translate-x-full -skew-x-12 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transition-transform duration-700 group-hover:translate-x-full"></div>
                    <span className="relative flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-5 w-5 animate-spin" />
                          Joining Waitlist...
                        </>
                      ) : (
                        <>
                          Join the Waitlist
                          <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </>
                      )}
                    </span>
                  </Button>
                </div>

                <div className="mt-6 rounded-xl bg-white/60 p-4 backdrop-blur-sm">
                  <div className="flex items-start gap-3 text-xs leading-relaxed text-gray-600">
                    <div className="mt-1 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-[#A7FFD9]/20">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#A7FFD9]"></div>
                    </div>
                    <p>
                      By joining, you'll receive exclusive updates about Shuri
                      Way's launch and early access opportunities. We respect
                      your privacy and will never share your information.
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(WaitlistSection);
