import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 pb-16 pt-32">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-4xl font-bold md:text-5xl">
            Privacy <span className="text-gradient">Policy</span>
          </h1>
          <p className="mb-8 text-muted-foreground">Last updated: December 2024</p>

          <div className="space-y-8 text-foreground">
            <section>
              <h2 className="mb-4 text-2xl font-semibold">1. Introduction</h2>
              <p className="text-muted-foreground">
                RenderByte ("we," "our," or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your 
                information when you use our game server hosting services.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">2. Information We Collect</h2>
              <p className="mb-4 text-muted-foreground">We may collect the following types of information:</p>
              <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                <li>Personal identification information (name, email address, phone number)</li>
                <li>Billing information (payment card details, billing address)</li>
                <li>Account credentials (username, password)</li>
                <li>Service usage data (server logs, IP addresses)</li>
                <li>Communication records (support tickets, emails)</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">3. How We Use Your Information</h2>
              <p className="mb-4 text-muted-foreground">We use collected information for:</p>
              <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                <li>Providing and maintaining our services</li>
                <li>Processing payments and transactions</li>
                <li>Communicating with you about your account</li>
                <li>Providing customer support</li>
                <li>Improving our services and user experience</li>
                <li>Preventing fraud and ensuring security</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">4. Data Security</h2>
              <p className="text-muted-foreground">
                We implement appropriate technical and organizational security measures to protect 
                your personal information against unauthorized access, alteration, disclosure, or 
                destruction. This includes encryption, secure servers, and regular security audits.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">5. Data Retention</h2>
              <p className="text-muted-foreground">
                We retain your personal information only for as long as necessary to fulfill the 
                purposes outlined in this policy, unless a longer retention period is required by 
                law. Service data may be retained for up to 30 days after account termination.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">6. Third-Party Services</h2>
              <p className="text-muted-foreground">
                We may use third-party services for payment processing, analytics, and 
                infrastructure. These providers have access only to information necessary 
                to perform their functions and are obligated to maintain confidentiality.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">7. Your Rights</h2>
              <p className="mb-4 text-muted-foreground">You have the right to:</p>
              <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to data processing</li>
                <li>Data portability</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">8. Cookies</h2>
              <p className="text-muted-foreground">
                We use cookies and similar tracking technologies to enhance your experience, 
                analyze usage patterns, and remember your preferences. You can control cookie 
                settings through your browser preferences.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">9. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have questions about this Privacy Policy or our data practices, 
                please contact us through our{" "}
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

export default Privacy;
