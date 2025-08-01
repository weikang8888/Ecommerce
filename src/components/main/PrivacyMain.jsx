import React from "react";
import BreadcrumbSection from "../breadcrumb/BreadcrumbSection";

const PrivacyMain = () => {
  return (
    <>
      <BreadcrumbSection
        title={"Privacy Policy"}
        currentPage={"Privacy Policy"}
      />

      <section className="fz-privacy-policy-section">
        <div className="col-lg-12">
          <div className="fz-privacy-content">
            <div className="fz-privacy-header">
              <h1 className="fz-privacy-title">Privacy Policy</h1>
              <p className="fz-privacy-date">Effective Date: July 29, 2025</p>
            </div>

            <div className="fz-privacy-sections">
              <div className="fz-privacy-section">
                <h2 className="fz-section-title">1. Information We Collect</h2>
                <p>
                  When you visit our website, we may collect the following
                  information:
                </p>
                <ul className="fz-privacy-list">
                  <li>
                    <strong>Personal Information:</strong> Your name, email
                    address, shipping address, billing address, phone number,
                    and payment details when you place an order.
                  </li>
                  <li>
                    <strong>Technical Data:</strong> IP address, browser type,
                    time zone, cookies, and usage data for analytics and
                    security.
                  </li>
                  <li>
                    <strong>Prescription Data (if applicable):</strong> When
                    ordering prescription lenses, we may collect your
                    prescription details.
                  </li>
                </ul>
              </div>

              <div className="fz-privacy-section">
                <h2 className="fz-section-title">
                  2. How We Use Your Information
                </h2>
                <p>We use your data for the following purposes:</p>
                <ul className="fz-privacy-list">
                  <li>To process and ship your orders</li>
                  <li>To communicate with you about your purchase</li>
                  <li>
                    To improve our website, services, and customer experience
                  </li>
                  <li>For customer support and order updates</li>
                  <li>To detect and prevent fraud or abuse</li>
                  <li>To send promotional emails (only if you opt in)</li>
                </ul>
              </div>

              <div className="fz-privacy-section">
                <h2 className="fz-section-title">
                  3. Sharing Your Information
                </h2>
                <p>
                  We do not sell your personal information. We may share your
                  data with:
                </p>
                <ul className="fz-privacy-list">
                  <li>
                    <strong>Third-party payment processors</strong> (e.g.,
                    Stripe, PayPal) for secure transactions
                  </li>
                  <li>
                    <strong>Shipping and fulfillment partners</strong> to
                    deliver your orders
                  </li>
                  <li>
                    <strong>Analytics services</strong> like Google Analytics
                    for improving our services
                  </li>
                  <li>
                    <strong>Legal authorities</strong> if required by law
                  </li>
                </ul>
              </div>

              <div className="fz-privacy-section">
                <h2 className="fz-section-title">4. Data Security</h2>
                <p>
                  We use appropriate security measures (such as SSL encryption)
                  to protect your data. However, no online transmission is 100%
                  secure. We implement industry-standard security practices to
                  safeguard your personal information.
                </p>
              </div>

              <div className="fz-privacy-section">
                <h2 className="fz-section-title">5. Cookies</h2>
                <p>
                  Our website uses cookies to enhance your browsing experience.
                  You can disable cookies in your browser settings, but this may
                  affect site functionality. We use cookies for:
                </p>
                <ul className="fz-privacy-list">
                  <li>Remembering your preferences and settings</li>
                  <li>Analyzing website traffic and usage patterns</li>
                  <li>Providing personalized content and recommendations</li>
                  <li>Ensuring secure shopping cart functionality</li>
                </ul>
              </div>

              <div className="fz-privacy-section">
                <h2 className="fz-section-title">6. Your Rights</h2>
                <p>You may:</p>
                <ul className="fz-privacy-list">
                  <li>Request access to the personal data we hold about you</li>
                  <li>Request correction or deletion of your data</li>
                  <li>Opt-out of marketing emails at any time</li>
                  <li>Withdraw consent for data processing</li>
                  <li>Request data portability</li>
                </ul>
                <p>
                  To exercise these rights, contact us at:{" "}
                  <a
                    href="mailto:weikang8805@hotmail.com"
                    className="fz-privacy-link"
                  >
                    weikang8805@hotmail.com
                  </a>
                </p>
              </div>

              <div className="fz-privacy-section">
                <h2 className="fz-section-title">7. Children's Privacy</h2>
                <p>
                  We do not knowingly collect information from individuals under
                  the age of 13. If you are a parent or guardian and believe
                  your child has provided us with personal information, please
                  contact us immediately.
                </p>
              </div>

              <div className="fz-privacy-section">
                <h2 className="fz-section-title">
                  8. International Data Transfers
                </h2>
                <p>
                  Your information may be transferred to and processed in
                  countries other than your own. We ensure that such transfers
                  comply with applicable data protection laws and implement
                  appropriate safeguards.
                </p>
              </div>

              <div className="fz-privacy-section">
                <h2 className="fz-section-title">9. Data Retention</h2>
                <p>
                  We retain your personal information only for as long as
                  necessary to fulfill the purposes outlined in this policy,
                  unless a longer retention period is required by law.
                </p>
              </div>

              <div className="fz-privacy-section">
                <h2 className="fz-section-title">10. Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy occasionally. Changes will
                  be posted on this page with a revised date. We encourage you
                  to review this policy periodically.
                </p>
              </div>
            </div>

            <div className="fz-privacy-footer">
              <p className="fz-privacy-note">
                <strong>Note:</strong> This privacy policy is subject to change.
                Please review it periodically for updates.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyMain;
