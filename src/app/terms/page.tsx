import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Fleeting Focus",
  description: "Terms of service for Fleeting Focus app users.",
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-indigo-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <div className="prose prose-indigo">
          <p>Last updated: [Current Date]</p>
          <p>
            Please read these Terms of Service carefully before using the
            Fleeting Focus mobile application.
          </p>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using Fleeting Focus, you agree to be bound by these
            Terms of Service and all applicable laws and regulations.
          </p>
          <h2>2. Use of the App</h2>
          <p>
            You agree to use Fleeting Focus only for lawful purposes and in a
            way that does not infringe the rights of, restrict or inhibit anyone
            else&apos;s use and enjoyment of the app.
          </p>
          <h2>3. User Accounts</h2>
          <p>
            You are responsible for maintaining the confidentiality of your
            account and password. You agree to accept responsibility for all
            activities that occur under your account.
          </p>
          <h2>4. Intellectual Property</h2>
          <p>
            The content, organization, graphics, design, and other matters
            related to Fleeting Focus are protected under applicable copyrights
            and other proprietary laws. Copying, redistribution, use or
            publication of any such matters or any part of the app is prohibited
            without our express permission.
          </p>
          <h2>5. Limitation of Liability</h2>
          <p>
            Fleeting Focus shall not be liable for any indirect, incidental,
            special, consequential or punitive damages, or any loss of profits
            or revenues, whether incurred directly or indirectly, or any loss of
            data, use, goodwill, or other intangible losses.
          </p>
          <h2>6. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms of Service at any time.
            We will notify users of any changes by posting the new Terms of
            Service on this page.
          </p>
          <h2>7. Contact Us</h2>
          <p>
            If you have any questions about these Terms of Service, please
            contact us at terms@fleetingfocus.com.
          </p>
        </div>
      </div>
    </div>
  );
}
