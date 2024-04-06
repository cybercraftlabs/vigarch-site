import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        description="Have questions or feedbacks? Reach out to us today! Whether you're a cybersecurity expert, an enthusiastic hacker, or simply curious about Vigilante Arch, we're here to listen and assist. Join us in shaping the future of digital security and empowerment. Your input matters."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
