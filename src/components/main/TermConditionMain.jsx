import React from "react";
import BreadcrumbSection from "../breadcrumb/BreadcrumbSection";
import { Link } from "react-router-dom";

const TermConditionMain = () => {
  return (
    <>
      <BreadcrumbSection
        title={"Terms & Conditions"}
        currentPage={"Terms & Conditions"}
      />

      <section className="fz-terms-conditions-section">
        <div className="col-lg-12">
          <div className="fz-terms-content">
            <div className="fz-terms-header">
              <h1 className="fz-terms-title">Terms and Conditions</h1>
              <p className="fz-terms-date">Last Updated: July 29, 2025</p>
            </div>

            <div className="fz-terms-sections">
              <div className="fz-terms-section">
                <h2 className="fz-section-title">1. General Information</h2>
                <p>
                  This website is owned and operated by{" "}
                  <strong>Farjaa Eyewear Store</strong>. Throughout the site,
                  the terms "we", "us", and "our" refer to the company. Our
                  services are offered to you conditioned upon your acceptance
                  of all terms, conditions, and notices stated here.
                </p>
              </div>

              <div className="fz-terms-section">
                <h2 className="fz-section-title">2. Products and Services</h2>
                <ul className="fz-terms-list">
                  <li>
                    We strive to ensure all product information, pricing, and
                    availability are accurate. However, errors may occur, and we
                    reserve the right to correct them without prior notice.
                  </li>
                  <li>
                    All eyewear products (glasses, sunglasses, lenses,
                    accessories) are subject to availability.
                  </li>
                  <li>
                    Product images are for illustrative purposes only and may
                    vary from actual products.
                  </li>
                </ul>
              </div>

              <div className="fz-terms-section">
                <h2 className="fz-section-title">3. Orders and Payments</h2>
                <ul className="fz-terms-list">
                  <li>
                    By placing an order, you agree that all information provided
                    is accurate and complete.
                  </li>
                  <li>
                    We reserve the right to refuse or cancel any order for any
                    reason.
                  </li>
                  <li>
                    Payments are securely processed via credit/debit card or
                    other accepted methods.
                  </li>
                  <li>All prices are subject to change without notice.</li>
                </ul>
              </div>

              <div className="fz-terms-section">
                <h2 className="fz-section-title">4. Shipping and Delivery</h2>
                <ul className="fz-terms-list">
                  <li>
                    We offer local and international shipping. Delivery times
                    may vary based on location and logistics.
                  </li>
                  <li>
                    Shipping fees, if applicable, will be shown at checkout.
                  </li>
                  <li>
                    We are not responsible for delays caused by couriers or
                    customs.
                  </li>
                  <li>
                    Risk of loss and title for items purchased pass to you upon
                    delivery.
                  </li>
                </ul>
              </div>

              <div className="fz-terms-section">
                <h2 className="fz-section-title">5. Returns and Exchanges</h2>
                <ul className="fz-terms-list">
                  <li>
                    Returns are accepted within <strong>14 days</strong> of
                    receiving the item, provided the item is unused and in
                    original packaging.
                  </li>
                  <li>
                    Prescription lenses and custom-made products are not
                    refundable.
                  </li>
                  <li>
                    For return instructions, please contact our support team.
                  </li>
                  <li>
                    Return shipping costs are the responsibility of the customer
                    unless the item is defective.
                  </li>
                </ul>
              </div>

              <div className="fz-terms-section">
                <h2 className="fz-section-title">6. Warranty</h2>
                <p>
                  All eyewear is covered by a <strong>6-month</strong> warranty
                  against manufacturing defects. This does not cover accidental
                  damage or misuse. Warranty claims must be submitted within the
                  warranty period with proof of purchase.
                </p>
              </div>

              <div className="fz-terms-section">
                <h2 className="fz-section-title">7. Intellectual Property</h2>
                <p>
                  All content on this website (including text, images, logos,
                  and design) is the property of{" "}
                  <strong>Farjaa Eyewear Store</strong> and may not be used or
                  reproduced without permission. Unauthorized use may result in
                  legal action.
                </p>
              </div>

              <div className="fz-terms-section">
                <h2 className="fz-section-title">8. Privacy Policy</h2>
                <p>
                  Your privacy is important to us. Please refer to our{" "}
                  <Link to="/privacy-policy" className="fz-terms-link">
                    Privacy Policy
                  </Link>{" "}
                  to understand how we collect, use, and protect your personal
                  information.
                </p>
              </div>

              <div className="fz-terms-section">
                <h2 className="fz-section-title">9. Limitation of Liability</h2>
                <p>
                  We shall not be liable for any indirect, incidental, special,
                  consequential, or punitive damages arising from your use of
                  our website or services. Our total liability shall not exceed
                  the amount paid for the specific product or service.
                </p>
              </div>

              <div className="fz-terms-section">
                <h2 className="fz-section-title">10. Changes to Terms</h2>
                <p>
                  We reserve the right to update or modify these Terms and
                  Conditions at any time. Any changes will be posted on this
                  page with the updated date. Continued use of our website after
                  changes constitutes acceptance of the new terms.
                </p>
              </div>

              <div className="fz-terms-section">
                <h2 className="fz-section-title">11. Governing Law</h2>
                <p>
                  These terms shall be governed by and construed in accordance
                  with the laws of [Your Country/State]. Any disputes shall be
                  resolved in the courts of [Your Jurisdiction].
                </p>
              </div>
            </div>

            <div className="fz-terms-footer">
              <p className="fz-terms-note">
                <strong>Note:</strong> These terms and conditions are subject to
                change. Please review them periodically for updates.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermConditionMain;
