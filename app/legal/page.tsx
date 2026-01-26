import { Mountain, ArrowLeft, Building2, Mail, Phone, MapPin, Scale, User } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function LegalPage() {
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
            <h1 className="text-xl sm:text-2xl font-bold">Legal Notice</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Card className="border-orange-200 shadow-lg">
          <CardHeader className="bg-gradient-to-br from-orange-50 to-amber-50">
            <CardTitle className="text-2xl sm:text-3xl text-orange-900 flex items-center space-x-3">
              <Scale className="h-8 w-8 text-orange-600" />
              <span>Legal Notice</span>
            </CardTitle>
            <p className="text-orange-700 mt-2">Mentions Légales / Legal Information</p>
          </CardHeader>
          <CardContent className="prose prose-orange max-w-none mt-6 space-y-6">
            <section>
              <h2 className="text-xl font-bold text-orange-900 flex items-center space-x-2 mb-3">
                <Building2 className="h-6 w-6 text-orange-600" />
                <span>1. Company Information</span>
              </h2>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 space-y-3">
                <div className="flex items-start space-x-3">
                  <Mountain className="h-5 w-5 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-orange-900">Company Name:</p>
                    <p className="text-orange-800">Atlas Adventures</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-orange-900">Headquarters:</p>
                    <p className="text-orange-800">Imlil Village</p>
                    <p className="text-orange-800">Atlas Mountains, Al Haouz Province</p>
                    <p className="text-orange-800">Marrakech-Safi Region, Morocco</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <User className="h-5 w-5 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-orange-900">Business Type:</p>
                    <p className="text-orange-800">Licensed Mountain Guiding and Trekking Services</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-orange-900 flex items-center space-x-2 mb-3">
                <Mail className="h-6 w-6 text-orange-600" />
                <span>2. Contact Information</span>
              </h2>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 space-y-3">
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-orange-900">WhatsApp / Phone:</p>
                    <p className="text-orange-800">+212 653 534 590</p>
                    <p className="text-orange-700 text-sm mt-1">Available 7 days a week for booking inquiries</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-orange-900">Contact Method:</p>
                    <p className="text-orange-800">Via website booking form or WhatsApp</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-orange-900">Office Location:</p>
                    <p className="text-orange-800">Center of Imlil Village, adjacent to the main square</p>
                    <p className="text-orange-700 text-sm mt-1">Open daily for in-person consultations</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-orange-900 mb-3">3. Professional Certifications</h2>
              <p className="text-orange-800 leading-relaxed mb-3">
                Atlas Adventures operates with full compliance with Moroccan tourism and mountain guiding regulations:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-orange-800">
                <li>All guides are certified by the Moroccan Ministry of Tourism and hold official mountain guide licenses.</li>
                <li>Our team members have completed specialized high-altitude training and wilderness first aid certification.</li>
                <li>We maintain comprehensive professional liability insurance for all trekking operations.</li>
                <li>Our business is registered with the Moroccan tourism authorities and operates in full legal compliance.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-orange-900 mb-3">4. Website Hosting and Technical Information</h2>
              <p className="text-orange-800 leading-relaxed mb-3">
                This website is built using modern web technologies to ensure security, speed, and accessibility:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-orange-800">
                <li><strong>Framework:</strong> Next.js (React-based web framework)</li>
                <li><strong>Hosting:</strong> Professional web hosting with SSL encryption (HTTPS)</li>
                <li><strong>Domain:</strong> Registered and maintained according to international standards</li>
                <li><strong>Security:</strong> Regular updates and security patches applied</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-orange-900 mb-3">5. Intellectual Property</h2>
              <p className="text-orange-800 leading-relaxed mb-3">
                All content on this website, including but not limited to text, images, logos, graphics, and design elements, is the property of Atlas Adventures or used with permission.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-orange-800">
                <li>The Atlas Adventures name and logo are trademarks of our company.</li>
                <li>All photographs of treks, mountains, and landscapes are either taken by our team or used under appropriate licenses.</li>
                <li>Unauthorized reproduction, distribution, or commercial use of website content is strictly prohibited.</li>
                <li>Clients are welcome to share their personal trek photos on social media with proper attribution.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-orange-900 mb-3">6. Website Content and Accuracy</h2>
              <p className="text-orange-800 leading-relaxed">
                We strive to maintain accurate and up-to-date information on this website regarding our trekking services, prices, and itineraries. However:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-orange-800 mt-3">
                <li>Prices are subject to change based on group size, season, and currency fluctuations.</li>
                <li>Trek itineraries may be modified due to weather conditions, safety concerns, or other factors beyond our control.</li>
                <li>Final booking details and pricing will be confirmed in writing before payment.</li>
                <li>We reserve the right to update website content without prior notice.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-orange-900 mb-3">7. External Links and Third-Party Content</h2>
              <p className="text-orange-800 leading-relaxed">
                Our website may contain links to external websites (such as TripAdvisor for reviews, WhatsApp for communication, or social media platforms). Atlas Adventures is not responsible for the content, privacy practices, or availability of third-party websites. We recommend reviewing the terms and privacy policies of any external sites you visit.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-orange-900 mb-3">8. Limitation of Liability</h2>
              <p className="text-orange-800 leading-relaxed">
                While we take every reasonable measure to ensure the accuracy and functionality of this website, Atlas Adventures cannot guarantee uninterrupted access or complete freedom from errors. We are not liable for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-orange-800 mt-3">
                <li>Technical issues, server downtime, or internet connectivity problems</li>
                <li>Any damages resulting from the use or inability to use this website</li>
                <li>Inaccuracies or outdated information (always confirm details directly with us before booking)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-orange-900 mb-3">9. Governing Law and Jurisdiction</h2>
              <p className="text-orange-800 leading-relaxed">
                This website and all services offered by Atlas Adventures are governed by the laws of the Kingdom of Morocco. Any disputes arising from the use of this website or our services shall be subject to the exclusive jurisdiction of Moroccan courts.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-orange-900 mb-3">10. Dispute Resolution</h2>
              <p className="text-orange-800 leading-relaxed">
                In the unlikely event of a dispute, we encourage open communication and will make every effort to resolve issues amicably. Clients are invited to contact us directly via WhatsApp or email to discuss any concerns before pursuing formal legal action.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-orange-900 mb-3">11. Accessibility Commitment</h2>
              <p className="text-orange-800 leading-relaxed">
                We are committed to making our website accessible to all users, including those with disabilities. Our site is designed to be responsive and mobile-friendly. If you encounter any accessibility barriers, please contact us so we can assist you.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-orange-900 mb-3">12. Updates to Legal Notice</h2>
              <p className="text-orange-800 leading-relaxed">
                Atlas Adventures reserves the right to modify this Legal Notice at any time. Material changes will be reflected with an updated "Last Modified" date. Your continued use of the website after changes constitutes acceptance of the updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-orange-900 mb-3">13. Contact for Legal Inquiries</h2>
              <p className="text-orange-800 leading-relaxed">
                For any legal questions, concerns, or requests regarding this notice or our business operations, please contact us:
              </p>
              <ul className="list-none space-y-2 text-orange-800 mt-3 bg-orange-50 border border-orange-200 rounded-lg p-4">
                <li><strong>Atlas Adventures</strong></li>
                <li>Imlil Village, Atlas Mountains</li>
                <li>Marrakech-Safi Region, Morocco</li>
                <li><strong>WhatsApp:</strong> +212 653 534 590</li>
              </ul>
            </section>

            <div className="bg-orange-100 border-l-4 border-orange-600 p-4 mt-8">
              <p className="text-orange-900 font-semibold mb-2">
                Transparency and Trust
              </p>
              <p className="text-orange-800">
                At Atlas Adventures, we believe in operating with complete transparency and integrity. Our commitment to legal compliance and ethical business practices ensures that your mountain experience is not only unforgettable but also fully protected under Moroccan law.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
