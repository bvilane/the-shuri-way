import { createFileRoute } from '@tanstack/react-router';
import { Link } from '@tanstack/react-router';
import Footer from '@/components/home/footer';

export const Route = createFileRoute('/refund-policy')({
  component: RefundPolicyPage,
});

function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-[#1b4332] py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <img src="/logo.png" alt="The Shuri Way" className="h-10 w-10 object-contain" />
              <span className="font-bold text-white text-xl" style={{ fontFamily: 'var(--font-athelas, Georgia)' }}>
                The Shuri Way
              </span>
            </Link>
            <Link to="/" className="text-sm text-[#a7ffd9] hover:text-white transition-colors">
              &larr; Back to Home
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-3xl font-bold text-[#1b4332] lg:text-4xl mb-2">Cancellation &amp; Refund Policy</h1>
          <p className="text-gray-500 mb-10">Last updated: July 2026</p>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-[#1b4332] mb-3">1. Overview</h2>
              <p>
                This Cancellation and Refund Policy outlines the terms under which bookings made through The Shuri Way platform may be cancelled, modified, or refunded. This policy forms part of our <Link to="/terms" className="text-[#1b4332] underline font-medium hover:text-[#daa520]">Terms &amp; Conditions</Link>.
              </p>
              <p>
                We understand that plans can change. Our policy aims to be fair to both our guests and our Service Provider partners (lodges, tour operators, and experience hosts) who allocate resources and hold availability for confirmed bookings.
              </p>
              <p>
                Payments for bookings are securely processed by PayGenius on behalf of The Shuri Way via the Activitar booking system. All refunds are processed through the same payment channel.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1b4332] mb-3">2. Cancellation by Guest</h2>
              <p>
                All cancellation requests must be submitted in writing via email to <a href="mailto:hello@theshuriway.com" className="text-[#1b4332] underline hover:text-[#daa520]">hello@theshuriway.com</a> or through your account on the Platform. The cancellation date is the date we receive and acknowledge your written request.
              </p>

              <h3 className="text-lg font-medium text-[#1b4332] mb-2 mt-4">2.1 Standard Cancellation Schedule</h3>
              <div className="overflow-x-auto mt-4">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-[#1b4332] text-white">
                      <th className="px-4 py-3 text-left font-semibold">Notice Period</th>
                      <th className="px-4 py-3 text-left font-semibold">Refund Amount</th>
                      <th className="px-4 py-3 text-left font-semibold">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="px-4 py-3 font-medium">60+ days before Travel Date</td>
                      <td className="px-4 py-3 text-green-700 font-semibold">95% refund</td>
                      <td className="px-4 py-3">Full refund less 5% administration fee</td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <td className="px-4 py-3 font-medium">30–59 days before Travel Date</td>
                      <td className="px-4 py-3 text-yellow-700 font-semibold">50% refund</td>
                      <td className="px-4 py-3">50% of total booking value returned</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="px-4 py-3 font-medium">14–29 days before Travel Date</td>
                      <td className="px-4 py-3 text-orange-700 font-semibold">25% refund</td>
                      <td className="px-4 py-3">25% of total booking value returned</td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <td className="px-4 py-3 font-medium">Less than 14 days</td>
                      <td className="px-4 py-3 text-red-700 font-semibold">No refund</td>
                      <td className="px-4 py-3">Full amount forfeited</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="px-4 py-3 font-medium">No-show</td>
                      <td className="px-4 py-3 text-red-700 font-semibold">No refund</td>
                      <td className="px-4 py-3">Full amount forfeited</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-lg font-medium text-[#1b4332] mb-2 mt-6">2.2 Peak Season and Special Event Bookings</h3>
              <p>
                For bookings during peak season (December–January, Easter, and school holidays) or for special events, the following adjusted schedule applies:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>90+ days before Travel Date:</strong> 90% refund (10% administration fee)</li>
                <li><strong>60–89 days before Travel Date:</strong> 50% refund</li>
                <li><strong>30–59 days before Travel Date:</strong> 25% refund</li>
                <li><strong>Less than 30 days:</strong> No refund</li>
              </ul>

              <h3 className="text-lg font-medium text-[#1b4332] mb-2 mt-6">2.3 Group Bookings (6+ guests)</h3>
              <p>
                Group bookings of 6 or more guests are subject to specific cancellation terms provided at the time of Confirmation. Generally, group cancellations require 90 days' notice for a full refund less administration fees.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1b4332] mb-3">3. Cancellation by The Shuri Way or Service Provider</h2>
              <p>
                In the unlikely event that The Shuri Way or a Service Provider needs to cancel a confirmed Booking:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Full refund:</strong> You will receive a 100% refund of all amounts paid, processed within 10 business days.</li>
                <li><strong>Alternative offered:</strong> Where possible, we will offer a comparable alternative at no additional cost. You are free to accept the alternative or request a full refund.</li>
                <li><strong>Compensation:</strong> If cancellation occurs within 30 days of the Travel Date through no fault of the Guest, we will offer a 10% credit toward a future booking in addition to the full refund.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1b4332] mb-3">4. Force Majeure</h2>
              <p>
                If a booking cannot proceed due to circumstances beyond anyone's reasonable control — including natural disasters, pandemics, government-imposed travel restrictions, political unrest, severe weather events, or airline strikes — the following applies:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Credit note:</strong> A full credit note valid for 12 months from the original Travel Date, redeemable against any future booking.</li>
                <li><strong>Rescheduling:</strong> Free rescheduling to alternative dates subject to availability.</li>
                <li><strong>Partial refund:</strong> If neither credit nor rescheduling is suitable, a refund of up to 75% may be offered at our discretion, accounting for costs already incurred with Service Providers.</li>
              </ul>
              <p>
                We will communicate proactively and work with you to find the best resolution in any force majeure situation.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1b4332] mb-3">5. Amendments and Date Changes</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>One free date change is permitted if requested 60+ days before the original Travel Date (subject to availability).</li>
                <li>Date changes requested 30–59 days before travel incur a R500 / $30 amendment fee per booking.</li>
                <li>Date changes requested less than 30 days before travel are treated as a cancellation and rebooking, subject to the standard cancellation schedule above.</li>
                <li>Name changes (transferring a booking to another guest) are permitted free of charge up to 14 days before the Travel Date.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1b4332] mb-3">6. Refund Processing</h2>
              <h3 className="text-lg font-medium text-[#1b4332] mb-2">6.1 Timeframes</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Refund requests are acknowledged within 2 business days.</li>
                <li>Approved refunds are processed within 10 business days of approval.</li>
                <li>Credit card refunds may take an additional 5–10 business days to reflect on your statement, depending on your bank.</li>
                <li>EFT refunds are processed to the original payment account unless otherwise agreed in writing.</li>
              </ul>

              <h3 className="text-lg font-medium text-[#1b4332] mb-2 mt-4">6.2 Payment Method</h3>
              <p>
                Refunds are processed via PayGenius back to the original payment method used at the time of booking. If the original payment method is no longer available, alternative arrangements will be made on a case-by-case basis.
              </p>

              <h3 className="text-lg font-medium text-[#1b4332] mb-2 mt-4">6.3 Currency</h3>
              <p>
                Refunds are issued in the same currency as the original payment. Exchange rate fluctuations between the booking date and refund date are the responsibility of the Guest; we refund the exact amount in the original currency per the applicable refund percentage.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1b4332] mb-3">7. Non-Refundable Items</h2>
              <p>The following are non-refundable regardless of cancellation timing:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Travel insurance premiums arranged through the Platform</li>
                <li>Visa application fees or facilitation charges</li>
                <li>Services already rendered or partially consumed</li>
                <li>Items explicitly marked as "non-refundable" at the time of booking</li>
                <li>Third-party fees (park entrance fees, conservation levies) already paid to authorities on your behalf</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1b4332] mb-3">8. Travel Insurance Recommendation</h2>
              <p>
                We strongly recommend all guests purchase comprehensive travel insurance at the time of booking. A good policy should cover:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Trip cancellation and interruption (for any reason)</li>
                <li>Medical emergencies and evacuation</li>
                <li>Travel delays and missed connections</li>
                <li>Lost or damaged luggage</li>
                <li>Personal liability</li>
              </ul>
              <p>
                Travel insurance can protect you from financial loss in circumstances where our refund policy may not provide a full refund, particularly for cancellations made close to the Travel Date or due to personal reasons.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1b4332] mb-3">9. Complaints and Disputes</h2>
              <p>
                If you are dissatisfied with a refund decision or any aspect of your booking experience:
              </p>
              <ol className="list-decimal pl-6 space-y-2">
                <li><strong>Contact us first:</strong> Email <a href="mailto:hello@theshuriway.com" className="text-[#1b4332] underline hover:text-[#daa520]">hello@theshuriway.com</a> with your booking reference and details of your concern.</li>
                <li><strong>Review period:</strong> We will investigate and respond within 10 business days.</li>
                <li><strong>Escalation:</strong> If not resolved to your satisfaction, you may escalate to the Tourism Business Council of South Africa (TBCSA) or pursue dispute resolution as outlined in our Terms &amp; Conditions.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1b4332] mb-3">10. Contact Us</h2>
              <p>For cancellation requests or refund enquiries:</p>
              <ul className="list-none pl-0 space-y-1 mt-3">
                <li><strong>Email:</strong> <a href="mailto:hello@theshuriway.com" className="text-[#1b4332] underline hover:text-[#daa520]">hello@theshuriway.com</a></li>
                <li><strong>Subject line:</strong> "Cancellation Request — [Your Booking Reference]"</li>
                <li><strong>Response time:</strong> Within 2 business days</li>
              </ul>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
