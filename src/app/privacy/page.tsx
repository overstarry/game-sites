'use client';

export default function PrivacyPage() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

            <div className="space-y-6 text-gray-600">
                <section>
                    <h2 className="text-xl font-semibold mb-4">Information Collection</h2>
                    <p>
                        We only collect information that you actively provide while using our services. This may include:
                        - Your basic account information
                        - Game progress and preferences
                        - System log information
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-4">Information Usage</h2>
                    <p>
                        We use the collected information to:
                        - Provide and improve our services
                        - Personalize your gaming experience
                        - Send service-related notifications
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-4">Information Security</h2>
                    <p>
                        We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-4">Cookie Usage</h2>
                    <p>
                        We use cookies to improve your browsing experience. You can control the use of cookies through your browser settings.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-4">Privacy Policy Updates</h2>
                    <p>
                        We may update this privacy policy from time to time. Any significant changes will be notified through our website or email.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
                    <p>
                        If you have any questions about our privacy policy, please contact us at:
                        contact@jasminides.com
                    </p>
                </section>
            </div>
        </div>
    );
}