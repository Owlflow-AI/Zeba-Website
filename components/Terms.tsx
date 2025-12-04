import React from 'react';
import { X } from 'lucide-react';

interface TermsProps {
  isOpen: boolean;
  onClose: () => void;
}

const Terms: React.FC<TermsProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl max-h-[90vh] m-4 bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden">
        <div className="sticky top-0 z-10 flex items-center justify-between p-6 border-b border-white/10 bg-[#0a0a0a]">
          <h2 className="text-2xl font-semibold text-white">Terms of Service</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
            aria-label="Close"
          >
            <X size={24} className="text-white" />
          </button>
        </div>

        <div className="overflow-y-auto max-h-[calc(90vh-88px)] p-6 sm:p-8 text-gray-300">
          <div className="space-y-6">
            <section>
              <p className="text-sm text-gray-400 mb-6">Last Updated: December 4, 2025</p>
              <p className="mb-4">
                Welcome to Zeba AI. By accessing or using our AI calling agent services, you agree to be bound by these Terms of Service.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">1. Service Description</h3>
              <p className="mb-3">
                Zeba AI provides enterprise-grade AI voice agents that make and receive phone calls on behalf of businesses. Our services include but are not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Outbound lead qualification and appointment setting</li>
                <li>Inbound customer support and query handling</li>
                <li>CRM integration and data management</li>
                <li>Call analytics and reporting</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">2. User Obligations</h3>
              <p className="mb-3">You agree to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide accurate and complete information during registration</li>
                <li>Maintain the security of your account credentials</li>
                <li>Use the service in compliance with all applicable laws and regulations</li>
                <li>Not use the service for fraudulent, abusive, or illegal purposes</li>
                <li>Comply with all telemarketing and calling regulations in your jurisdiction</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">3. Privacy and Data Protection</h3>
              <p className="mb-3">
                We are committed to protecting your privacy and the privacy of your customers. Our service complies with GDPR, TCPA, and other relevant data protection regulations. We implement industry-standard security measures including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>End-to-end encryption for all call data</li>
                <li>Secure data storage and transmission</li>
                <li>Regular security audits and assessments</li>
                <li>Automatic redaction of sensitive information</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">4. Billing and Payment</h3>
              <p className="mb-3">
                Our pricing is based on usage or monthly subscription plans. You agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Pay all fees associated with your account in a timely manner</li>
                <li>Provide valid payment information</li>
                <li>Accept that fees are non-refundable except as required by law</li>
                <li>Notify us of any billing disputes within 30 days</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">5. Service Level and Availability</h3>
              <p className="mb-3">
                While we strive for 24/7 availability, we do not guarantee uninterrupted service. We reserve the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Perform scheduled maintenance with advance notice</li>
                <li>Make emergency updates to maintain service quality</li>
                <li>Temporarily suspend service for security or compliance reasons</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">6. Intellectual Property</h3>
              <p className="mb-3">
                All intellectual property rights in the Zeba AI platform, including AI models, software, and documentation, remain the property of Zeba AI. You are granted a limited, non-exclusive license to use the service in accordance with these terms.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">7. Limitation of Liability</h3>
              <p className="mb-3">
                To the maximum extent permitted by law, Zeba AI shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the service.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">8. Termination</h3>
              <p className="mb-3">
                Either party may terminate this agreement with 30 days written notice. We reserve the right to immediately suspend or terminate your account if you violate these terms.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">9. Changes to Terms</h3>
              <p className="mb-3">
                We may update these terms from time to time. We will notify you of material changes via email or through the platform. Continued use of the service after changes constitutes acceptance of the updated terms.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">10. Contact Information</h3>
              <p className="mb-3">
                For questions about these terms, please contact us at:
              </p>
              <p className="ml-4">
                Email: legal@zeba.ai<br />
                Address: Zeba AI, Inc.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
