import { Mountain, ArrowLeft, Lock, Shield, Eye, Database, Cookie } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50">
      <header className="sticky top-0 z-50 bg-gradient-to-r from-orange-900/90 to-red-900/90 text-white shadow-lg w-full backdrop-blur-md">
        <div className="container mx-auto px-4 py-3 sm:py-4">
          <Link href="/" className="inline-flex items-center space-x-2 text-orange-300 hover:text-white mb-2 sm:mb-4">
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm sm:text-base">Back to Home</span>
          </Link>
          <div className="flex items-center space-x-2">
            <Mountain className="h-6 w-6 sm:h-8 sm:w-8 text-orange-300" />
            <h1 className="text-xl sm:text-2xl font-bold">Privacy Policy</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Card className="border-orange-200 shadow-lg">
          <CardHeader className="bg-gradient-to-br from-orange-50 to-amber-50">
            <CardTitle className="text-2xl sm:text-3xl text-orange-900 flex items-center space-x-3">
              <Lock className="h-8 w-8 text-orange-600" />
              <span>Privacy Policy</span>
            </CardTitle>
            <p className="text-orange-700 mt-2">Last updated: January 2024</p>
          </CardHeader>
          <CardContent className="prose prose-orange max-w-none mt-6 space-y-6">
            <section>
              <h2 className="text-xl font-bold text-orange-900 flex items-center space-x-2 mb-3">
                <Shield className="h-6 w-6 text-orange-600" />
                <span>1. Our Commitment to Your Privacy</span>
              </h2>
              <p className="text-orange-800 leading-relaxed">
                At Atlas Adventures, we are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, and safeguard your data when you use our website and book our trekking services.
              </p>
              <p className="text-orange-800 leading-relaxed mt-3">
                We operate with complete transparency and will never sell, rent, or share your personal information with third parties for marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-orange-900 flex items-center space-x-2 mb-3">
                <Database className="h-6 w-6 text-orange-600" />
                <span>2. Information We Collect</span>
              </h2>
              <p className="text-orange-800 leading-relaxed mb-3">
                When you book a trek with Atlas Adventures, we collect the following information to organize and deliver your mountain experience:
              </p>
              
              <h3 className="text-lg font-semibold text-orange-900 mt-4 mb-2">Personal Information</h3>
              <ul className="list-disc pl-6 space-y-2 text-orange-800">
                <li>Full name</li>
                <li>Contact information (phone number for WhatsApp communication)</li>
                <li>Preferred trek date and number of participants</li>
                <li>Fitness level assessment</li>
                <li>Dietary restrictions and special requests</li>
              </ul>

              <h3 className="text-lg font-semibold text-orange-900 mt-4 mb-2">Automatically Collected Information</h3>
              <ul className="list-disc pl-6 space-y-2 text-orange-800">
                <li>Browser type and version</li>
                <li>Device information</li>
                <li>IP address (for security purposes only)</li>
                <li>Pages visited and time spent on our website</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-orange-900 flex items-center space-x-2 mb-3">
                <Eye className="h-6 w-6 text-orange-600" />
                <span>3. How We Use Your Information</span>
              </h2>
              <p className="text-orange-800 leading-relaxed mb-3">
                We use the information we collect exclusively for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-orange-800">
                <li><strong>Trek Organization:</strong> To plan and coordinate your mountain adventure, including guide assignment, accommodation booking, and meal preparation according to your dietary needs.</li>
                <li><strong>Communication:</strong> To send you booking confirmations, trek details, weather updates, and safety information via WhatsApp or email.</li>
                <li><strong>Safety:</strong> To ensure appropriate trek difficulty matching your fitness level and to prepare for any special requirements.</li>
                <li><strong>Customer Service:</strong> To respond to your inquiries and provide support before, during, and after your trek.</li>
                <li><strong>Service Improvement:</strong> To analyze website usage patterns and improve our booking experience (anonymized data only).</li>
              </ul>
              <p className="text-orange-800 leading-relaxed mt-3 font-semibold">
                We will never use your personal information for unsolicited marketing, advertising, or promotional purposes without your explicit consent.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-orange-900 mb-3">4. Data Sharing and Third Parties</h2>
              <p className="text-orange-800 leading-relaxed mb-3">
                Atlas Adventures does not sell, trade, or rent your personal information to third parties. We may share limited information only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-orange-800">
                <li><strong>Service Providers:</strong> We work with trusted local partners (mountain guides, guesthouse owners, mule handlers) who require minimal information to deliver your trek experience. These partners are bound by confidentiality agreements.</li>
                <li><strong>WhatsApp Communication:</strong> When you contact us via WhatsApp (+212 653 534 590), your messages are subject to WhatsApp's own privacy policy. We use this platform for its convenience and security features.</li>
                <li><strong>Legal Requirements:</strong> We may disclose information if required by Moroccan law or to protect the safety of our clients and staff.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-orange-900 flex items-center space-x-2 mb-3">
                <Cookie className="h-6 w-6 text-orange-600" />
                <span>5. Cookies and Tracking Technologies</span>
              </h2>
              <p className="text-orange-800 leading-relaxed mb-3">
                Our website uses minimal cookies to ensure a smooth browsing experience:
              </p>
              
              <h3 className="text-lg font-semibold text-orange-900 mt-4 mb-2">Essential Cookies</h3>
              <p className="text-orange-800 leading-relaxed">
                We use essential cookies provided by Next.js (our web framework) to maintain session state and ensure the website functions properly. These cookies do not track your personal information.
              </p>

              <h3 className="text-lg font-semibold text-orange-900 mt-4 mb-2">No Third-Party Advertising Cookies</h3>
              <p className="text-orange-800 leading-relaxed">
                We do not use cookies from advertising networks or social media platforms to track your browsing behavior across websites.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-orange-900 mb-3">6. Data Security</h2>
              <p className="text-orange-800 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, please note that no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-orange-800 mt-3">
                <li>Secure HTTPS protocol for all website communications</li>
                <li>Encrypted WhatsApp messaging for booking communications</li>
                <li>Limited access to personal data (only authorized staff)</li>
                <li>Regular security audits and updates</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-orange-900 mb-3">7. Data Retention</h2>
              <p className="text-orange-800 leading-relaxed">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-orange-800 mt-3">
                <li>Booking and trek organization data: Retained for the duration of your trek and up to 1 year after completion for customer service purposes.</li>
                <li>Communication records: Retained for up to 2 years for reference and dispute resolution.</li>
                <li>After the retention period, your data is securely deleted or anonymized.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-orange-900 mb-3">8. Your Rights</h2>
              <p className="text-orange-800 leading-relaxed mb-3">
                You have the following rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-orange-800">
                <li><strong>Right to Access:</strong> Request a copy of the personal data we hold about you.</li>
                <li><strong>Right to Correction:</strong> Request correction of inaccurate or incomplete information.</li>
                <li><strong>Right to Deletion:</strong> Request deletion of your personal data (subject to legal retention requirements).</li>
                <li><strong>Right to Object:</strong> Object to the processing of your data for specific purposes.</li>
                <li><strong>Right to Withdraw Consent:</strong> Withdraw your consent at any time (though this may affect our ability to provide services).</li>
              </ul>
              <p className="text-orange-800 leading-relaxed mt-3">
                To exercise any of these rights, please contact us via WhatsApp at +212 653 534 590 or through our website contact form.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-orange-900 mb-3">9. Children's Privacy</h2>
              <p className="text-orange-800 leading-relaxed">
                Our services are not directed to children under the age of 13. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-orange-900 mb-3">10. International Data Transfers</h2>
              <p className="text-orange-800 leading-relaxed">
                Atlas Adventures operates from Morocco. If you are accessing our website from outside Morocco, please be aware that your information may be transferred to, stored, and processed in Morocco, where data protection laws may differ from those in your country.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-orange-900 mb-3">11. Changes to This Privacy Policy</h2>
              <p className="text-orange-800 leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by updating the "Last updated" date at the top of this page.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-orange-900 mb-3">12. Contact Us</h2>
              <p className="text-orange-800 leading-relaxed">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>
              <ul className="list-none space-y-2 text-orange-800 mt-3">
                <li><strong>WhatsApp:</strong> +212 653 534 590</li>
                <li><strong>Location:</strong> Imlil, Atlas Mountains, Morocco</li>
                <li><strong>Website:</strong> Via our booking form</li>
              </ul>
            </section>

            <div className="bg-orange-100 border-l-4 border-orange-600 p-4 mt-8">
              <p className="text-orange-900 font-semibold">
                By using our website and services, you acknowledge that you have read and understood this Privacy Policy.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
