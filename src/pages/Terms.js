import React from "react";
const terms = [
  {
    heading: "1. Acceptance of Terms",
    subHeading:
      "By accessing , you agree to abide by these Terms of Service and any additional guidelines or rules that may be posted.",
  },
  {
    heading: "2. User Accounts",
    points: [
      "You may need to create an account to access certain features of the website.",
      "You are responsible for maintaining the confidentiality of your account information.",
      "You are responsible for all activities that occur under your account.",
    ],
  },
  {
    heading: "3. User Content",
    points: [
      "You are solely responsible for the content you post, upload, or submit on the website.",
      "You grant a non-exclusive, worldwide, royalty-free license to use, modify, reproduce, distribute, and display your content.",
    ],
  },
  {
    heading: "4. Prohibited Activities",
    subHeading: "You agree not to engage in any of the following activities:",
    points: [
      "Violating any applicable laws or regulations.",
      "Infringing upon the intellectual property rights of others.",
      "Uploading or sharing harmful or malicious content.",
      "Impersonating others or providing false information.",
      "Engaging in spam, phishing, or other fraudulent activities.",
      "Attempting to access unauthorized areas of the website.",
    ],
  },
  {
    heading: "5. Intellectual Property",
    subHeading:
      "All content on, including text, graphics, images, logos, and software, is protected by intellectual property laws",
  },
  {
    heading: "6. Disclaimers and Limitations of Liability",
    points: [
      "Does not guarantee the accuracy, completeness, or reliability of the content on the website.",
      "You use the website at your own risk.",
      "website is not liable for any damages resulting from the use of the website",
    ],
  },
  {
    heading: "7. Indemnification",
    subHeading:
      "You agree to indemnify and hold [Your Company] harmless from any claims, damages, losses, or liabilities arising from your use of the website.",
  },
  {
    heading: "8. Modifications to the Terms",
    subHeading:
      "Reserves the right to modify these terms at any time. Changes will be effective upon posting.",
  },
  {
    heading: "9. Termination",
    subHeading:
      "We may terminate or suspend your account and access to the website at its discretion, without notice.",
  },
];

const Terms = () => {
  return (
    <div className="w-full max-w-5xl mx-auto py-8 px-4">
      <h1 className="text-2xl font-semibold mb-4">Terms</h1>
   
      {terms?.map((data) => (
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4">{data.heading}</h2>
          <p>{data.subHeading}</p>
          <ul className="list-disc ml-6">
            {data?.points?.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
};

export default Terms;
