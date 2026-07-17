import { createFileRoute } from '@tanstack/react-router';
import { Link } from '@tanstack/react-router';
import Footer from '@/components/home/footer';

export const Route = createFileRoute('/terms')({
  component: TermsPage,
});

function TermsPage() {
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
          <h1 className="text-3xl font-bold text-[#1b4332] lg:text-4xl mb-2">Terms &amp; Conditions</h1>
          <p className="text-gray-500 mb-10">Last updated: July 2026</p>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-[#1b4332] mb-3">1. Introduction</h2>
              <p>
                These Terms and Conditions ("Terms") govern your use of The Shuri Way platform and services ("Platform"), operated by Shuri Management Group (Pty) Ltd ("we", "us", "our"), a company registered in South Africa. By accessing or using our Platform, making a booking, or engaging with our services, you agree to be bound by these Terms.
              </p>
              <p>
                The Shuri Way is a safari booking and travel technology platform that connects travellers with lodges, tour operators, and experience providers across Africa. We facilitate bookings and provide curated travel experiences through our marketplace.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1b4332] mb-3">2. Definitions</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>"Booking"</strong> means any reservation for accommodation, experience, itinerary, or service made through the Platform.</li>
                <li><strong>"Guest" or "Traveller"</strong> means any person who makes or is included in a Booking.</li>
                <li><strong>"Service Provider"</strong> means any lodge, tour operator, guide, or experience host listed on the Platform.</li>
                <li><strong>"Confirmation"</strong> means written acknowledgement (email or in-platform notification) that a Booking has been accepted and payment processed.</li>
                <li><strong>"Travel Date"</strong> means the first date of the booked service or experience.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1b4332] mb-3">3. Booking and Payments</h2>
              <h3 className="text-lg font-medium text-[#1b4332] mb-2">3.1 Making a Booking</h3>
              <p>
                All Bookings made through the Platform are subject to availability and Confirmation. A Booking is not confirmed until you receive a written Confirmation from us. We reserve the right to decline any Booking at our discretion.
              </p>

              <h3 className="text-lg font-medium text-[#1b4332] mb-2 mt-4">3.2 Pricing</h3>
              <p>
                All prices displayed on the Platform are in the currency indicated at the time of booking. Prices are subject to change without notice until a Booking is confirmed. Once confirmed, the price is guaranteed for that Booking unless otherwise agreed in writing.
              </p>
              <p>
                Prices include or exclude VAT and applicable taxes as indicated on the Booking summary. Additional levies such as tourism levies, conservation fees, or park entrance fees may apply and will be clearly indicated.
              </p>

              <h3 className="text-lg font-medium text-[#1b4332] mb-2 mt-4">3.3 Payment Terms</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>A deposit of 30% of the total booking value is required at the time of Confirmation to secure your reservation.</li>
                <li>The remaining balance (70%) is due no later than 60 days before the Travel Date.</li>
                <li>Bookings made within 60 days of the Travel Date require full payment at the time of Confirmation.</li>
                <li>Payment may be made via credit card, electronic funds transfer (EFT), or other methods available on the Platform.</li>
                <li>Failure to pay the balance by the due date may result in automatic cancellation of the Booking.</li>
              </ul>

              <h3 className="text-lg font-medium text-[#1b4332] mb-2 mt-4">3.4 Payment Security</h3>
              <p>
                All payment transactions are processed through PCI-DSS compliant payment processors. We do not store your full credit card details on our servers. By making a payment, you warrant that you are authorised to use the payment method provided.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1b4332] mb-3">4. Cancellation and Refund Policy</h2>
              <p>
                Our full cancellation and refund policy is available at <Link to="/refund-policy" className="text-[#1b4332] underline font-medium hover:text-[#daa520]">/refund-policy</Link>. The following is a summary:
              </p>

              <h3 className="text-lg font-medium text-[#1b4332] mb-2 mt-4">4.1 Cancellation by Guest</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>More than 60 days before Travel Date:</strong> Full refund less a 5% administration fee.</li>
                <li><strong>30–60 days before Travel Date:</strong> 50% refund of the total booking value.</li>
                <li><strong>14–29 days before Travel Date:</strong> 25% refund of the total booking value.</li>
                <li><strong>Less than 14 days before Travel Date:</strong> No refund.</li>
                <li><strong>No-show:</strong> No refund.</li>
              </ul>

              <h3 className="text-lg font-medium text-[#1b4332] mb-2 mt-4">4.2 Cancellation by The Shuri Way or Service Provider</h3>
              <p>
                If we or a Service Provider cancel a confirmed Booking for any reason other than Guest misconduct or force majeure, the Guest will receive a full refund or the option to rebook an alternative of equal or greater value at no additional cost.
              </p>

              <h3 className="text-lg font-medium text-[#1b4332] mb-2 mt-4">4.3 Force Majeure</h3>
              <p>
                Neither party shall be liable for cancellation or failure to perform due to circumstances beyond reasonable control, including but not limited to: natural disasters, pandemics, government travel restrictions, civil unrest, or severe weather. In such cases, we will work with you to reschedule or provide a credit note valid for 12 months.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1b4332] mb-3">5. Guest Responsibilities</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Ensure all personal and travel information provided is accurate and complete.</li>
                <li>Obtain all necessary travel documents, visas, vaccinations, and travel insurance before departure.</li>
                <li>Comply with the rules and regulations of Service Providers, national parks, and local authorities.</li>
                <li>Behave responsibly and respectfully towards wildlife, the environment, staff, and other guests.</li>
                <li>Ensure you are medically fit to participate in booked activities and disclose relevant health conditions.</li>
                <li>Arrive at the designated meeting point or check-in location at the scheduled time.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1b4332] mb-3">6. Travel Insurance</h2>
              <p>
                We strongly recommend that all Guests obtain comprehensive travel insurance covering trip cancellation, medical emergencies, evacuation, baggage loss, and personal liability. Safari and adventure activities carry inherent risks; adequate insurance is essential. The Shuri Way shall not be liable for losses that would have been covered by appropriate travel insurance.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1b4332] mb-3">7. Liability and Disclaimers</h2>
              <h3 className="text-lg font-medium text-[#1b4332] mb-2">7.1 Platform Role</h3>
              <p>
                The Shuri Way acts as a technology platform and booking facilitator. We connect Guests with independent Service Providers. While we vet our partners and maintain quality standards, the delivery of on-the-ground services is the responsibility of the respective Service Provider.
              </p>

              <h3 className="text-lg font-medium text-[#1b4332] mb-2 mt-4">7.2 Limitation of Liability</h3>
              <p>
                To the maximum extent permitted by law, The Shuri Way's total liability for any claim arising from or in connection with a Booking shall not exceed the total amount paid by the Guest for that Booking. We shall not be liable for indirect, incidental, special, or consequential damages.
              </p>

              <h3 className="text-lg font-medium text-[#1b4332] mb-2 mt-4">7.3 Assumption of Risk</h3>
              <p>
                Safari and wildlife experiences involve inherent risks including close proximity to wild animals, rough terrain, remote locations, and variable weather. By booking, you acknowledge and accept these risks. Service Providers may require you to sign additional waivers before participation.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1b4332] mb-3">8. Amendments and Changes</h2>
              <p>
                Requests to amend a confirmed Booking (date changes, name changes, room upgrades, etc.) are subject to availability and may incur additional fees. Amendment requests must be made in writing via email to <a href="mailto:hello@theshuriway.com" className="text-[#1b4332] underline hover:text-[#daa520]">hello@theshuriway.com</a> or through the Platform.
              </p>
              <p>
                If an amendment is not possible, the original Booking terms apply. If the amendment results in a higher price, the difference is payable immediately. If it results in a lower price, a refund or credit will be issued for the difference.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1b4332] mb-3">9. Intellectual Property</h2>
              <p>
                All content on the Platform including but not limited to text, images, logos, design, software, and trademarks are the property of Shuri Management Group (Pty) Ltd or its licensors. You may not reproduce, distribute, or create derivative works without prior written consent.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1b4332] mb-3">10. Privacy and Data Protection</h2>
              <p>
                We process personal data in accordance with the Protection of Personal Information Act (POPIA) and applicable data protection laws. Your data is used to facilitate Bookings, communicate with you, and improve our services. We do not sell your personal information to third parties. For full details, please refer to our Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1b4332] mb-3">11. Dispute Resolution</h2>
              <p>
                Any disputes arising from or in connection with these Terms shall first be addressed through good-faith negotiation. If a resolution cannot be reached within 30 days, the matter may be referred to mediation under the rules of the Arbitration Foundation of Southern Africa (AFSA). These Terms are governed by the laws of the Republic of South Africa, and the courts of South Africa shall have jurisdiction.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1b4332] mb-3">12. Modifications to Terms</h2>
              <p>
                We reserve the right to update these Terms at any time. Changes will be posted on this page with an updated "Last updated" date. Continued use of the Platform after changes are posted constitutes acceptance of the revised Terms. Material changes will be communicated via email to registered users.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1b4332] mb-3">13. Contact Information</h2>
              <p>For any queries regarding these Terms, please contact us:</p>
              <ul className="list-none pl-0 space-y-1 mt-3">
                <li><strong>Email:</strong> <a href="mailto:hello@theshuriway.com" className="text-[#1b4332] underline hover:text-[#daa520]">hello@theshuriway.com</a></li>
                <li><strong>Instagram:</strong> <a href="https://www.instagram.com/theshuriway" target="_blank" rel="noopener noreferrer" className="text-[#1b4332] underline hover:text-[#daa520]">@theshuriway</a></li>
                <li><strong>Website:</strong> <a href="https://theshuriway.com" className="text-[#1b4332] underline hover:text-[#daa520]">theshuriway.com</a></li>
              </ul>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
