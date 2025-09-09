"use client"

import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingInline from '@/components/navigation/NavbarLayoutFloatingInline';
import TokenBillboardHero from '@/components/sections/layouts/hero/TokenBillboardHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import BentoFAQ from '@/components/sections/layouts/faq/BentoFAQ';
import YearRoadmapTimeline from '@/components/sections/layouts/roadmap/YearRoadmapTimeline';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import BigNumberTokenomics from '@/components/sections/layouts/tokenomics/BigNumberTokenomics';
import FooterLogoEmphasis from '@/components/footer/FooterLogoEmphasis';

const navLinks = [
  { name: "Hero", id: "hero" },
  { name: "About", id: "about" },
  { name: "FAQ", id: "faq" },
  { name: "Roadmap", id: "roadmap" },
  { name: "How To Buy", id: "how-to-buy" },
  { name: "Tokenomics", id: "tokenomics" },
  { name: "Footer", id: "footer" }
];

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "funAndTrendy", colorTemplate: 1, textAnimation: "slide" }}>
      <NavbarLayoutFloatingInline
        logoSrc="/images/logo.svg"
        logoAlt="PupCoin Logo"
        navItems={navLinks}
        buttonText="Join the Pack"
        onButtonClick={() => { console.log('Button clicked!'); }}
        className="sticky top-0 z-10"         
      />
      <div id="hero" data-section="hero">
        <TokenBillboardHero
          title="Welcome to PupCoin"
          subtitle="The Fun and Trendy Way to Buy Tokens"
          contractAddress="0xPUPCOIN"
          copyButtonText="Copy Address"
          copiedText="Address Copied!"
        />
      </div>
      <div id="about" data-section="about">
        <SplitAbout
          description="PupCoin is a community-driven cryptocurrency project that aims to integrate fun into the investment world. Join our pack and invest with a purpose."
        />
      </div>
      <div id="faq" data-section="faq">
        <BentoFAQ
          items={[
            { title: "What is PupCoin?", content: "PupCoin is a fun cryptocurrency focused on community engagement and ease of access." },
            { title: "How to buy PupCoin?", content: "You can buy PupCoin from various exchanges. Check our 'How to buy' section for detailed steps." },
            { title: "Is investments secure?", content: "We work to provide the safest environment for our users through a decentralized approach." }
          ]}
        />
      </div>
      <div id="roadmap" data-section="roadmap">
        <YearRoadmapTimeline
          items={[
            { year: "2023", title: "Launch", description: "PupCoin goes live with community engagement programs." },
            { year: "2024", title: "Partnerships", description: "Form strategic partnerships with other crypto projects." },
            { year: "2025", title: "Expanding Utility", description: "Build more use cases and platforms integrating PupCoin." }
          ]}
          className="my-10"
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy">
        <HowToBuy2D
          variant="reveal"
        />
      </div>
      <div id="tokenomics" data-section="tokenomics">
        <BigNumberTokenomics
          title="PupCoin Tokenomics"
          description="Understanding the distribution and use of PupCoin is vital for our investors." 
          kpiItems={[
            { value: "60%", description: "Allocated for Community Rewards", longDescription: "To incentivize participation in the ecosystem.", icon: "LucideStar" },
            { value: "20%", description: "Marketing & Development", longDescription: "Ensuring steady growth and maintenance of the project.", icon: "LucideUsers" },
            { value: "20%", description: "Reserve Fund", longDescription: "To manage liquidity across exchanges.", icon: "LucideShield" }
          ]}
        />
      </div>
      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoSrc="/images/logo.svg"
          logoAlt="PupCoin Logo"
          logoText="PupCoin"
          columns={[
            { items: [{ label: "Privacy Policy", onClick: () => { console.log('Privacy clicked!'); } }, { label: "Terms of Service", onClick: () => { console.log('Terms clicked!'); } }] },
            { items: [{ label: "Join the Pack", onClick: () => { console.log('Join clicked!'); } }, { label: "Community", onClick: () => { console.log('Community clicked!'); } }] },
            { items: [{ label: "FAQs", onClick: () => { console.log('FAQs clicked!'); } }, { label: "Contact Us", onClick: () => { console.log('Contact clicked!'); } }] }
          ]}
          className="bg-white"
        />
      </div>
    </SiteThemeProvider>
  );
}