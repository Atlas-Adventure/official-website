import { Mountain, ArrowLeft, Shield, AlertTriangle, Calendar, FileText } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TermsPage() {
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
            <h1 className="text-xl sm:text-2xl font-bold">Terms of Service</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Card className="border-orange-200 shadow-lg">
          <CardHeader className="bg-gradient-to-br from-orange-50 to-amber-50">
            <CardTitle className="text-2xl sm:text-3xl text-orange-900 flex items-center space-x-3">
              <FileText className="h-8 w-8 text-orange-600" />
              <span>Terms and Conditions</span>
            </CardTitle>
            <p className="text-orange-700 mt-2">Last updated: January 2024</p>
          </CardHeader>
          <CardContent className="prose prose-orange max-w-none mt-6 space-y-6">
            <section>
              <h2 className="text-xl font-bold text-orange-900 flex items-center space-x-2 mb-3">
                <Shield className="h-6 w-6 text-orange-600" />
                <span>1. Acceptance of Terms</span>
              </h2>
              <p className="text-orange-800 leading-relaxed">
                By booking a trek or adventure with Atlas Adventures, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. These terms apply to all services offered, including mountain trekking, hiking, biking tours, and desert expeditions in Morocco.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-orange-900 flex items-center space-x-2 mb-3">
                <AlertTriangle className="h-6 w-6 text-orange-600" />
                <span>2. Health and Safety Requirements</span>
              </h2>
              <p className="text-orange-800 leading-relaxed mb-3">
                Mountain trekking is a physically demanding activity. By booking with us, you confirm that:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-orange-800">
                <li>You are in good physical health and fitness appropriate for the chosen activity level (beginner, intermediate, or advanced).</li>
                <li>You do not have any medical conditions that could be aggravated by high-altitude trekking or strenuous physical activity.</li>
                <li>You will inform the guide immediately if you experience any health issues during the trek.</li>
                <li>You will follow all safety instructions provided by your certified mountain guide.</li>
                <li>You understand that altitude sickness is a risk above 2,500 meters and that proper acclimatization is essential.</li>
              </ul>
              <p className="text-orange-800 leading-relaxed mt-3">
                Clients with pre-existing medical conditions must consult their doctor before booking and inform Atlas Adventures of any relevant health information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-orange-900 flex items-center space-x-2 mb-3">
                <Calendar className="h-6 w-6 text-orange-600" />
                <span>3. Booking and Payment</span>
              </h2>
              <p className="text-orange-800 leading-relaxed mb-3">
                All bookings are confirmed upon receipt of payment. Payment methods and terms will be communicated during the booking process via WhatsApp or email.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-orange-800">
                <li>Prices are displayed per person and vary based on group size.</li>
                <li>Solo travelers are subject to a supplement of $50 (applicable only to tours with group pricing).</li>
                <li>Final pricing confirmation will be provided before payment.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-orange-900 mb-3">4. Cancellation and Refund Policy</h2>
              <p className="text-orange-800 leading-relaxed mb-3">
                We understand that plans can change. Our cancellation policy is as follows:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-orange-800">
                <li><strong>More than 14 days before departure:</strong> Full refund minus 10% administrative fee.</li>
                <li><strong>7-14 days before departure:</strong> 50% refund.</li>
                <li><strong>Less than 7 days before departure:</strong> No refund.</li>
              </ul>
              <p className="text-orange-800 leading-relaxed mt-3 font-semibold">
                Force Majeure: In the event of extreme weather conditions, natural disasters, or other circumstances beyond our control that make the trek unsafe, Atlas Adventures reserves the right to cancel or modify the itinerary. In such cases, we will offer a full refund or the option to reschedule at no additional cost.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-orange-900 mb-3">5. Limitation of Liability</h2>
              <p className="text-orange-800 leading-relaxed mb-3">
                Atlas Adventures takes every reasonable precaution to ensure the safety and well-being of our clients. However, mountain trekking involves inherent risks. By booking with us, you acknowledge that:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-orange-800">
                <li>Atlas Adventures, its guides, and partners are not liable for injuries, accidents, illness, or loss of property that occur during the trek.</li>
                <li>You participate at your own risk and are responsible for your own travel insurance, including coverage for high-altitude trekking and medical evacuation.</li>
                <li>The guide's decisions regarding safety and itinerary changes are final and must be respected.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-orange-900 mb-3">6. Insurance Requirement</h2>
              <p className="text-orange-800 leading-relaxed">
                We strongly recommend that all participants obtain comprehensive travel insurance that covers:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-orange-800 mt-3">
                <li>High-altitude trekking (up to 4,167m for Mount Toubkal)</li>
                <li>Medical expenses and emergency evacuation</li>
                <li>Trip cancellation and interruption</li>
                <li>Personal liability</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-orange-900 mb-3">7. Conduct and Behavior</h2>
              <p className="text-orange-800 leading-relaxed">
                All participants are expected to behave respectfully towards guides, fellow trekkers, local communities, and the natural environment. Atlas Adventures reserves the right to remove any participant whose behavior is deemed dangerous, disruptive, or disrespectful, without refund.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-orange-900 mb-3">8. Environmental Responsibility</h2>
              <p className="text-orange-800 leading-relaxed">
                We are committed to sustainable tourism. All participants must follow Leave No Trace principles, respect local wildlife, and minimize their environmental impact.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-orange-900 mb-3">9. Changes to Terms</h2>
              <p className="text-orange-800 leading-relaxed">
                Atlas Adventures reserves the right to modify these Terms of Service at any time. Updated terms will be posted on this page with a revised "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-orange-900 mb-3">10. Contact</h2>
              <p className="text-orange-800 leading-relaxed">
                If you have any questions regarding these Terms of Service, please contact us via WhatsApp at +212 653 534 590 or through our website booking form.
              </p>
            </section>

            <div className="bg-orange-100 border-l-4 border-orange-600 p-4 mt-8">
              <p className="text-orange-900 font-semibold">
                By proceeding with your booking, you confirm that you have read and accept these Terms of Service in full.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
