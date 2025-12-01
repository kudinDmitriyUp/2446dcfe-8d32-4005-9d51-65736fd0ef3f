"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="reveal-blur"
      borderRadius="sharp"
      contentWidth="small"
      sizing="large"
      background="dotGrid"
      cardStyle="glass-flat"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="radial-glow"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple 
          brandName="AI Solutions"
          navItems={[
            { name: "Services", id: "services" },
            { name: "About", id: "about" },
            { name: "FAQ", id: "faq" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroCarouselLogo
          logoText="AI SOLUTIONS"
          description="Empower your small business with intelligent voice agents, AI automations, and smart chatbots that work 24/7"
          buttons={[
            { text: "Get Started", href: "contact" },
            { text: "Learn More", href: "about" }
          ]}
          slides={[
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764622877300-rgmml0fz.jpg", imageAlt: "AI Technology" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764622878053-ifl49f2q.jpg", imageAlt: "Business Automation" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764622878998-mpoxgcb9.jpg", imageAlt: "Voice Technology" }
          ]}
          autoplayDelay={4000}
          showDimOverlay={true}
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          tag="Why Choose Us"
          title="Transform Your Business with AI"
          description="We help small businesses implement cutting-edge AI solutions that streamline operations, reduce costs, and improve customer experience. Our platform integrates seamlessly with your existing systems."
          textboxLayout="default"
          bulletPoints={[
            {
              title: "Voice Agents",
              description: "Intelligent voice assistants that handle customer calls, answer questions, and schedule appointments automatically"
            },
            {
              title: "AI Automations",
              description: "Streamline repetitive tasks and workflows, freeing up your team to focus on strategic work"
            },
            {
              title: "Smart Chatbots",
              description: "24/7 customer support via chat that learns and improves with every interaction"
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764622879674-4m1ms6uh.jpg"
          imageAlt="Business Process Automation"
          imagePosition="right"
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardSeven
          title="Our Core Services"
          description="Discover how each AI solution can revolutionize your business operations and customer interactions"
          textboxLayout="default"
          animationType="slide-up"
          features={[
            {
              id: 1,
              title: "Voice Agents",
              description: "Deploy intelligent voice assistants that answer calls, handle inquiries, book appointments, and provide customer support in natural human-like conversations.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764622880777-dw3b9fe0.jpg",
              imageAlt: "Voice Agent Technology"
            },
            {
              id: 2,
              title: "AI Automations",
              description: "Automate complex business processes from data entry to invoice processing, email management, and lead qualification without manual intervention.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764622881619-r7jkxmrw.jpg",
              imageAlt: "Process Automation"
            },
            {
              id: 3,
              title: "Smart Chatbots",
              description: "Intelligent chatbots that provide instant customer support, answer FAQs, qualify leads, and create seamless conversational experiences across messaging platforms.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764622882125-vcg5iz1n.jpg",
              imageAlt: "Chatbot Interface"
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardTwo
          title="Our Impact"
          description="See how businesses benefit from our AI solutions"
          textboxLayout="default"
          animationType="scale-rotate"
          gridVariant="four-items-2x2-equal-grid"
          metrics={[
            {
              id: "1",
              value: "80%",
              description: "Cost Reduction in Operations"
            },
            {
              id: "2",
              value: "24/7",
              description: "Continuous Customer Support"
            },
            {
              id: "3",
              value: "99%",
              description: "Response Accuracy"
            },
            {
              id: "4",
              value: "500+",
              description: "Active Business Clients"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What Our Clients Say"
          description="Real feedback from small business owners who transformed their operations with our AI solutions"
          textboxLayout="default"
          animationType="opacity"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "CEO",
              testimonial: "Implementing AI voice agents cut our customer service costs by 70% while improving response times. Game changer for our growing business.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764622882936-nk8sl4qh.jpg",
              imageAlt: "Sarah Johnson"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Operations Manager",
              testimonial: "The AI automation platform eliminated countless hours of manual data entry. Our team is now focused on strategic initiatives instead of repetitive tasks.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764622883670-r86xjgbc.jpg",
              imageAlt: "Michael Chen"
            },
            {
              id: "3",
              name: "Emma Rodriguez",
              role: "Customer Success Lead",
              testimonial: "Our chatbot handles 85% of customer inquiries now. The quality of support improved while we scaled without hiring more staff.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764622884523-vtwbkmt8.jpg",
              imageAlt: "Emma Rodriguez"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Founder",
              testimonial: "From skeptical to believer. The AI solutions integrated seamlessly and ROI was visible within the first month. Highly recommend.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764622885609-uvsp3pkw.jpg",
              imageAlt: "David Kim"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Find answers to common questions about our AI solutions and implementation process"
          textPosition="left"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "How quickly can we implement AI solutions?",
              content: "Most implementations take 2-4 weeks depending on complexity. We provide setup support and training to ensure smooth deployment across your team."
            },
            {
              id: "2",
              title: "Do you integrate with our existing systems?",
              content: "Yes, our AI platform integrates with popular CRM, ERP, and communication tools. Custom integrations are also available for enterprise solutions."
            },
            {
              id: "3",
              title: "What training is provided?",
              content: "We offer comprehensive onboarding, documentation, video tutorials, and ongoing support to ensure your team gets maximum value from the platform."
            },
            {
              id: "4",
              title: "Is my customer data secure?",
              content: "Security is our top priority. We use enterprise-grade encryption, comply with GDPR and CCPA, and conduct regular security audits."
            },
            {
              id: "5",
              title: "Can we customize the AI behavior?",
              content: "Absolutely. You can train the AI with your business rules, response patterns, and specific workflows to match your brand voice and processes."
            },
            {
              id: "6",
              title: "What's the pricing model?",
              content: "We offer flexible pricing based on usage and features. Most small businesses start with our starter plan and scale as they grow."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Ready to Transform Your Business?"
          description="Get in touch with our team to schedule a consultation and see how AI can revolutionize your operations"
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "company",
              type: "text",
              placeholder: "Company Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: false
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your business and which solutions interest you most",
            rows: 5,
            required: true
          }}
          buttonText="Schedule Consultation"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Product",
              items: [
                { label: "Voice Agents", href: "#services" },
                { label: "AI Automations", href: "#services" },
                { label: "Chatbots", href: "#services" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "#about" },
                { label: "Blog", href: "#" },
                { label: "Careers", href: "#" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "FAQ", href: "#faq" },
                { label: "Contact Us", href: "#contact" },
                { label: "Documentation", href: "#" }
              ]
            }
          ]}
          copyrightText="© 2025 AI Solutions. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}