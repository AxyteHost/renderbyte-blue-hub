import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 pb-16 pt-32">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-4xl font-bold md:text-5xl">
            Terms & <span className="text-gradient">Conditions</span>
          </h1>
          <p className="mb-8 text-muted-foreground">Last updated: December 2024</p>

          <div className="space-y-8 text-foreground">
            <section>
              <h2 className="mb-4 text-2xl font-semibold">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing and using RenderByte's services, you agree to be bound by these 
                Terms and Conditions. If you do not agree to these terms, please do not use 
                our services.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">2. Service Description</h2>
              <p className="text-muted-foreground">
                RenderByte provides game server hosting services, including but not limited to 
                dedicated game servers, virtual private servers, and related technical support. 
                We reserve the right to modify, suspend, or discontinue any aspect of our 
                services at any time.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">3. Account Responsibilities</h2>
              <p className="mb-4 text-muted-foreground">You are responsible for:</p>
              <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Ensuring your account information is accurate and up-to-date</li>
                <li>Notifying us immediately of any unauthorized access</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">4. Acceptable Use Policy</h2>
              <p className="mb-4 text-muted-foreground">You agree NOT to use our services for:</p>
              <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                <li>Illegal activities or promoting illegal content</li>
                <li>Distributing malware, viruses, or harmful code</li>
                <li>Launching DDoS attacks or engaging in network abuse</li>
                <li>Hosting content that infringes intellectual property rights</li>
                <li>Harassment, threats, or abusive behavior toward others</li>
                <li>Any activity that disrupts our network or other customers</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">5. Payment Terms</h2>
              <p className="mb-4 text-muted-foreground">
                All services are billed according to the pricing displayed at the time of 
                purchase. Payment is due upon ordering for new services and on the renewal 
                date for recurring services.
              </p>
              <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                <li>Prices are subject to change with 30 days notice</li>
                <li>Failed payments may result in service suspension</li>
                <li>All prices are in USD unless otherwise specified</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">6. Service Level Agreement</h2>
              <p className="text-muted-foreground">
                We strive to maintain 99.9% uptime for all services. In the event of 
                unscheduled downtime exceeding this threshold, customers may be eligible 
                for service credits as outlined in our SLA documentation.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">7. Data Backup</h2>
              <p className="text-muted-foreground">
                While we perform regular backups of server data, customers are ultimately 
                responsible for maintaining their own backups. We are not liable for data 
                loss due to hardware failure, user error, or other circumstances.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">8. Termination</h2>
              <p className="text-muted-foreground">
                We reserve the right to suspend or terminate your account at any time for 
                violations of these terms. Upon termination, your access to our services 
                will cease immediately, and we may delete your data after a 7-day grace period.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">9. Limitation of Liability</h2>
              <p className="text-muted-foreground">
                RenderByte shall not be liable for any indirect, incidental, special, 
                consequential, or punitive damages arising from your use of our services. 
                Our total liability shall not exceed the amount paid by you in the 
                preceding 12 months.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">10. Changes to Terms</h2>
              <p className="text-muted-foreground">
                We may update these Terms and Conditions from time to time. Continued use 
                of our services after such changes constitutes acceptance of the new terms. 
                We will notify users of significant changes via email or service announcements.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">11. Contact</h2>
              <p className="text-muted-foreground">
                For questions regarding these Terms and Conditions, please contact us 
                through our{" "}
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

export default Terms;
