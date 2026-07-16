import HeroSection       from '../sections/HeroSection';
import ServicesSection   from '../sections/ServicesSection';
import PackagesSection   from '../sections/PackagesSection';
import ProcessSection    from '../sections/ProcessSection';
import PortfolioSection  from '../sections/PortfolioSection';
import TeamSection       from '../sections/TeamSection';
import TestimonialsSection from '../sections/TestimonialsSection';
import CTASection        from '../sections/CTASection';

export default function Home() {
  return <>
    <HeroSection/>
    <ServicesSection/>
    <PackagesSection/>
    <ProcessSection/>
    <PortfolioSection preview/>
    <TeamSection preview/>
    <TestimonialsSection/>
    <CTASection/>
  </>;
}
