import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Fleeting Focus",
  description: "Privacy policy for Fleeting Focus app users.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-indigo-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose prose-indigo">
          <p>Last updated: [Current Date]</p>
          <p>
            At Fleeting Focus, we take your privacy seriously. This Privacy
            Policy explains how we collect, use, disclose, and safeguard your
            information when you use our mobile application.
          </p>
          <h2>Information We Collect</h2>
          <p>
            We collect information that you provide directly to us when you use
            the app, including:
          </p>
          <ul>
            <li>Your name and email address when you create an account</li>
            <li>The tasks and priorities you set within the app</li>
            <li>Usage data and app preferences</li>
          </ul>
          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide, maintain, and improve our services</li>
            <li>Personalize your experience within the app</li>
            <li>Communicate with you about updates and new features</li>
          </ul>
          <h2>Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to
            protect your personal information against unauthorized or unlawful
            processing, accidental loss, destruction, or damage.
          </p>
          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page.
          </p>
          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at privacy@fleetingfocus.com.
          </p>
        </div>
      </div>
    </div>
  );
}
