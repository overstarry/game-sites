'use client';

export default function TermsPage() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>

            <div className="space-y-6 text-gray-600">
                <section>
                    <h2 className="text-xl font-semibold mb-4">Acceptance of Terms</h2>
                    <p>
                        By accessing and using our website, you agree to comply with these Terms of Service. If you do not agree with any part of these terms, please do not use our services.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-4">User Responsibilities</h2>
                    <p>
                        As a user, you agree to:
                        - Comply with all applicable laws and regulations
                        - Not distribute harmful or illegal content
                        - Not interfere with other users' use of the service
                        - Protect your account security
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-4">Intellectual Property</h2>
                    <p>
                        All content on the website, including but not limited to text, images, code, and games, is protected by copyright law. Copying, distributing, or modifying this content without explicit permission is prohibited.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-4">Disclaimer</h2>
                    <p>
                        Our services are provided "as is" without any express or implied warranties. We are not liable for any service interruptions or losses.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-4">Service Changes</h2>
                    <p>
                        We reserve the right to modify or terminate the service at any time without notice. We are not liable for any modifications, suspensions, or terminations of the service.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-4">Governing Law</h2>
                    <p>
                        These terms are governed by the laws of the People's Republic of China. Any disputes should be resolved through friendly negotiation.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
                    <p>
                        If you have any questions about these terms, please contact us at:
                        contact@jasminides.com
                    </p>
                </section>
            </div>
        </div>
    );
}