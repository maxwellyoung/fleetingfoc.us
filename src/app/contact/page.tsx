import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Fleeting Focus",
  description: "Get in touch with the Fleeting Focus team.",
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-indigo-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        <div className="prose prose-indigo">
          <p>
            We&apos;d love to hear from you! If you have any questions,
            feedback, or need support, please don&apos;t hesitate to reach out.
          </p>
          <h2>General Inquiries</h2>
          <p>Email: info@fleetingfocus.com</p>
          <h2>Customer Support</h2>
          <p>Email: support@fleetingfocus.com</p>
          <h2>Business Development</h2>
          <p>Email: partnerships@fleetingfocus.com</p>
          <h2>Office Address</h2>
          <p>
            Fleeting Focus Inc.
            <br />
            123 Productivity Lane
            <br />
            Focus City, FC 12345
            <br />
            United States
          </p>
          <h2>Social Media</h2>
          <p>
            Follow us on social media for updates, tips, and community
            discussions:
          </p>
          <ul>
            <li>Twitter: @FleetingFocus</li>
            <li>Instagram: @FleetingFocusApp</li>
            <li>LinkedIn: Fleeting Focus</li>
          </ul>
          <p>
            We aim to respond to all inquiries within 24-48 hours during
            business days. Thank you for your interest in Fleeting Focus!
          </p>
        </div>
      </div>
    </div>
  );
}
