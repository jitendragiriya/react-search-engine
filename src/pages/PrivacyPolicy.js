import React from "react";
const privacyPolicy = [
  {
    heading: "Personal Information we collect about you ",
    subHeading: "",
    points: [
      "The Personal Information we process about you depends on how you interact with our Services (as defined below) but can include (1) information you provide to us directly, and (2) information we collect through automated data collection or tracking technologies.",
      "Additionally, third parties may use automated data collection or tracking technologies within our Services to collect information about you.",
    ],
  },
  {
    heading: "How and why we use your Personal Information",
    subHeading: " ",
    points: [
      "We use your Personal Information to understand how you use our Services, to provide our Services to you, maintain records of our interactions with you, to respond to your enquiries, to notify you of changes to our Services, to serve advertisements to you on our Services or for marketing purposes, and to allow you to participate in any interactive features of our Services. We may also use your Personal Information to enforce our legal rights and inform our business strategy. More detailed information can be found here",
    ],
  },
  {
    heading: "Do Not Track",
    subHeading: "",
    points: [
      "Your browser settings may allow you to automatically transmit a “Do Not Track” signal to online services you visit, including our Services. Note, however, there is no industry consensus as to what site and app operators should do with regard to these signals. Accordingly, unless and until the law is interpreted to require us to do so, we do not monitor or take action with respect to “Do Not Track” signals. For more information on “Do Not Track.",
    ],
  },
  {
    heading: "Who we share your Personal Information with",
    subHeading: " ",
    points: [
      "We may share your Personal Information within the System1 Group (as defined below), with our third-party service providers and professional partners, with parties with whom we enter into a corporate transaction, law enforcement agencies, courts or regulatory bodies (to comply with legal obligations) or otherwise with your consent. More information can be found here.",
    ],
  },
  {
    heading: "How long your Personal Information will be kept",
    subHeading: "",
    points: [
      "We retain your Personal Information for as long as is necessary to achieve the purposes for which it was collected. More information can be found here.",
    ],
  },
  {
    heading: "International transfers",
    points: [
      "In the event that we transfer your Personal Information internationally, we take steps to ensure that such Personal Information is subject to safeguards in compliance with applicable data protection laws. More information can be found here.",
    ],
  },
  {
    heading: "Links to third party sites and content",
    subHeading: "",
    points: [
      "Where you access third party sites or content via our Services, it is important that you check the applicable third party’s privacy policy to understand how such third parties will handle your information. More information can be found here.",
    ],
  },
  {
    heading: "Supplemental U.S. privacy rights and disclosures",
    subHeading: "",
    points: [
      "If you are a consumer located in the United States, you may be entitled to additional information about our use of your Personal Information and you may have certain rights in connection with your Personal Information. More information can be found here.",
    ],
  },
  {
    heading: "Supplemental Information for persons in the EEA and UK",
    points: [
      "If you are a consumer located in the European Economic Area (EEA) or the United Kingdom (UK), you may be entitled to additional information about our use of your Personal Information and you may have certain rights in connection with our processing of your Personal Information. Details of these rights and how to exercise them are set out here.",
    ],
  },
  {
    heading: "Keeping your Personal Information secure",
    points: [
      "We have put in place appropriate security measures to keep your Personal Information safe. More information can be found here.",
    ],
  },
  {
    heading: "Children Under the Age of 16",
    points: [
      "Use of our Services is not intended for and not directed at children under 16 years of age. More information can be found here.",
    ],
  },
  {
    heading: "Changes to this Privacy Policy",
    points: [
      "This Privacy Policy is updated from time to time. More information can be found here.",
    ],
  },
  {
    heading: "How to contact us",
    points: [
      "You can contact us online, by post, or email. More information, including our contact details, can be found here.",
    ],
  },
];

const PrivacyPolicy = () => {
  return (
    <div className="w-full max-w-5xl mx-auto py-8 px-4">
      <h1 className="text-2xl font-semibold mb-4">Privacy Policy</h1>
      <p className="mb-6">
        Effective Date: {new Date().toJSON().substring(0, 10)}
      </p>
      <p className="mb-6">
        System1 takes your privacy very seriously. In connection with the
        websites, applications and services that we operate, and with respect to
        our communications and relationship with you, we are committed to data
        protection, including through compliance with this Privacy Policy.
        Please read this Privacy Policy carefully, as it contains important
        information about how and why we collect, store, use, share and
        otherwise “process” your “Personal Information” (as defined below). It
        also explains your rights in relation to your Personal Information and
        information on how to contact us in the event you have questions, or
        concerns.
      </p>
      <p className="mb-6">
        For information about the terms upon which we do business, you should
        also read our Terms of Use.
      </p>

      {/* Add more sections here */}
      <h2 className="text-2xl font-semibold mb-5">
        Table of contents and summary
      </h2>
      <p className="text-xl">Key Terms</p>

      <ul className="list-disc ml-6">
        <li>
          Relevant definitions used throughout this Privacy Policy can be found
          here.
        </li>
      </ul>
      {/* Section 1: Information We Collect */}
      {privacyPolicy?.map((data) => (
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

export default PrivacyPolicy;
