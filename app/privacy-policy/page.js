import Link from "next/link";
import { AtSign, Phone } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen pt-24">
      <section className="px-5 md:px-10 py-16 md:py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/"
            className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 hover:text-white transition-colors"
          >
            - Archive
          </Link>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 mt-6 mb-4">
            Legal
          </p>
          <h1 className="font-heading text-6xl md:text-[10vw] font-black uppercase tracking-[-0.04em] leading-[0.85]">
            Privacy
            <br />
            Policy
          </h1>
          <p className="font-mono text-xs text-white/40 mt-6">
            Last updated: August 2026
          </p>
        </div>
      </section>

      <section className="px-5 md:px-10 py-20 md:py-32">
        <div className="max-w-3xl mx-auto space-y-16">
          <div>
            <p className="font-mono text-sm text-white/60 leading-relaxed">
              This Privacy Policy outlines the types of personal information collected and
              received by Thrifted by Shaheer ("we," "us," or "our") and how we use, disclose,
              and protect that information. By using or accessing our website, you consent to
              the terms and practices described in this policy.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-black uppercase tracking-tight mb-6">
              Information We Collect
            </h2>
            <div className="space-y-6">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40 mb-3">
                  a) Personal Information
                </p>
                <p className="font-mono text-sm text-white/60 leading-relaxed">
                  We may collect personal information from you when you voluntarily provide it
                  to us, such as when you place an order via WhatsApp, subscribe to our
                  newsletter, opt for receiving marketing messages, or interact with our
                  website's features. This may include your name, email address, shipping
                  address, phone number, and other details necessary to provide our services
                  to you. Payment is handled directly via WhatsApp - we do not store card
                  details on our website.
                </p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40 mb-3">
                  b) Non-Personal Information
                </p>
                <p className="font-mono text-sm text-white/60 leading-relaxed">
                  We may also collect non-personal information about your interactions with our
                  website. This may include your IP address, browser type, device information,
                  and browsing behavior. Such information is collected through the use of
                  cookies, log files, and similar technologies.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-black uppercase tracking-tight mb-6">
              Use of Information
            </h2>
            <div className="space-y-6">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40 mb-3">
                  a) Personal Information
                </p>
                <p className="font-mono text-sm text-white/60 leading-relaxed">
                  We may use your personal information to: process and fulfill your orders,
                  provide customer support and respond to inquiries, customize and improve our
                  website and services, send you promotional offers, updates, and newsletters
                  (you can opt out at any time), and conduct market research and analyze trends.
                </p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40 mb-3">
                  b) Non-Personal Information
                </p>
                <p className="font-mono text-sm text-white/60 leading-relaxed">
                  Non-personal information is primarily used to analyze and improve the
                  functionality and performance of our website. This data helps us understand
                  how users interact with our website and enables us to enhance user experience.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-black uppercase tracking-tight mb-6">
              Disclosure of Information
            </h2>
            <div className="space-y-6">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40 mb-3">
                  a) Service Providers
                </p>
                <p className="font-mono text-sm text-white/60 leading-relaxed">
                  We may engage trusted third-party service providers to assist us in operating
                  our website and providing our services. These service providers may have
                  access to your personal information but are obligated to keep it confidential
                  and use it solely for the purposes specified by us.
                </p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40 mb-3">
                  b) Legal Requirements
                </p>
                <p className="font-mono text-sm text-white/60 leading-relaxed">
                  We may disclose your personal information if required to do so by law or in
                  response to valid legal requests, such as subpoenas, court orders, or
                  government regulations.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-black uppercase tracking-tight mb-6">
              Data Security
            </h2>
            <p className="font-mono text-sm text-white/60 leading-relaxed">
              We implement appropriate technical and organizational measures to safeguard your
              personal information from unauthorized access, disclosure, alteration, or
              destruction. However, please note that no method of transmission over the
              internet or electronic storage is 100% secure. While we strive to protect your
              personal information, we cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-black uppercase tracking-tight mb-6">
              Cookies
            </h2>
            <p className="font-mono text-sm text-white/60 leading-relaxed">
              Like many websites, we use cookies to power and improve our site and services,
              including to remember your actions and preferences, to run analytics, and to
              better understand user interaction. Most browsers automatically accept cookies by
              default, but you can set your browser to remove or reject cookies through your
              browser controls. Please keep in mind that blocking cookies may negatively impact
              your user experience.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-black uppercase tracking-tight mb-6">
              Your Rights
            </h2>
            <p className="font-mono text-sm text-white/60 leading-relaxed">
              You have the right to access, update, or delete your personal information. You may
              also opt out of marketing communications at any time. To exercise these rights or
              if you have any questions about your personal information, please contact us
              through the channels listed below.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-black uppercase tracking-tight mb-6">
              Changes to This Privacy Policy
            </h2>
            <p className="font-mono text-sm text-white/60 leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes to our
              practices or for other operational, legal, or regulatory reasons. We will post the
              revised Privacy Policy on our website and update the "Last updated" date. We
              encourage you to review this Privacy Policy periodically.
            </p>
          </div>

          <div className="border-t border-white/10 pt-12">
            <h2 className="font-heading text-2xl md:text-3xl font-black uppercase tracking-tight mb-6">
              Contact Us
            </h2>
            <p className="font-mono text-sm text-white/60 leading-relaxed mb-6">
              If you have any questions about this Privacy Policy or our data practices, please
              reach out:
            </p>
            <div className="space-y-4">
              <Link
                href="https://www.instagram.com/thriftedbyshaheer"
                className="flex items-center gap-3 font-mono text-sm uppercase tracking-[0.15em] text-white/70 hover:text-white transition-colors"
              >
                <AtSign size={18} /> @thriftedbyshaheer
              </Link>
              <Link
                href="tel:+923184690194"
                className="flex items-center gap-3 font-mono text-sm uppercase tracking-[0.15em] text-white/70 hover:text-white transition-colors"
              >
                <Phone size={18} /> +92 318 4690194
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="px-5 md:px-10 py-16 border-t border-white/10 bg-black">
        <div className="max-w-7xl mx-auto text-center">
          <Link
            href="/"
            className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/60 hover:text-white underline underline-offset-4"
          >
            - Back to Archive
          </Link>
        </div>
      </footer>
    </div>
  );
}