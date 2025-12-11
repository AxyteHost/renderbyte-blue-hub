import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Refund = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 pb-16 pt-32">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-4xl font-bold md:text-5xl">
            Refund <span className="text-gradient">Policy</span>
          </h1>
          <p className="mb-8 text-muted-foreground">Last updated: December 2024</p>

          <div className="space-y-8 text-foreground">
            <section>
              <h2 className="mb-4 text-2xl font-semibold">1. Money-Back Guarantee</h2>
              <p className="text-muted-foreground">
                RenderByte offers a 48-hour money-back guarantee for new customers on 
                their first purchase. If you are not satisfied with our services, you may 
                request a full refund within 48 hours of your initial order.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">2. Eligibility Requirements</h2>
              <p className="mb-4 text-muted-foreground">To be eligible for a refund:</p>
              <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                <li>The refund request must be made within 48 hours of purchase</li>
                <li>This must be your first order with RenderByte</li>
                <li>The account must not have violated our Terms of Service</li>
                <li>The service must not have been used for abusive purposes</li>
                <li>Refunds are limited to one per customer/household</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">3. Non-Refundable Items</h2>
              <p className="mb-4 text-muted-foreground">The following are NOT eligible for refunds:</p>
              <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                <li>Domain registrations and Renewals</li>
                <li>Special Offer's</li>
                <li>Other Payment Methods Than Upi</li>
                <li>Add-on services and upgrades after initial purchase</li>
                <li>Services suspended or terminated for policy violations</li>
                <li>Renewal payments for existing services</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">4. How to Request a Refund</h2>
              <p className="mb-4 text-muted-foreground">To request a refund:</p>
              <ol className="list-inside list-decimal space-y-2 text-muted-foreground">
                <li>Log in to your account at our Client Area</li>
                <li>Open a support ticket in the Billing department</li>
                <li>Include your order number and reason for the refund request</li>
                <li>Our team will review and respond within 24 hours</li>
              </ol>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">5. Refund Processing</h2>
              <p className="text-muted-foreground">
                Approved refunds will be processed within 5-10 business days. Refunds are 
                issued to the original payment method. Please note that your bank or 
                payment provider may take additional time to process the refund to your account.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">6. Chargebacks</h2>
              <p className="text-muted-foreground">
                We encourage customers to contact us before initiating a chargeback with 
                their payment provider. Chargebacks filed without first contacting our 
                support team may result in account suspension and will be disputed with 
                evidence of service delivery.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">7. Service Credits</h2>
              <p className="text-muted-foreground">
                In some cases, we may offer service credits instead of monetary refunds 
                for service issues or downtime. Service credits can be applied to future 
                invoices and do not expire.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">8. Cancellation</h2>
              <p className="text-muted-foreground">
                You may cancel your service at any time through the Client Area. 
                Cancellation requests must be submitted before the renewal date. 
                We do not provide prorated refunds for unused portions of the billing 
                period after the 48-hour money-back guarantee period.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">9. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have questions about our refund policy or need assistance, 
                please contact our billing team through the{" "}
                <a 
                  href="https://billing.renderbyte.site" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Client Area
                </a>.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Refund;
