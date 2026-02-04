import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'About | Sui Community Hub',
  description: 'Learn about the Sui Community Hub Brand Ambassador initiative and our mission.',
};

export default function AboutPage() {
  const stats = [
    {
      number: '24',
      label: 'Events Organized',
    },
    {
      number: '12',
      label: 'Regions Covered',
    },
    {
      number: '5.2K+',
      label: 'Community Growth',
    },
    {
      number: '156',
      label: 'Builders Supported',
    },
  ];

  const milestones = [
    {
      period: 'Q1 2024',
      title: 'Launch',
      description: 'Launched the Brand Ambassador program with first regional events',
    },
    {
      period: 'Q2 2024',
      title: 'Expansion',
      description: 'Expanded to 6 regions with specialized workshops and bootcamps',
    },
    {
      period: 'Q3 2024',
      title: 'Growth',
      description: 'Crossed 5K community members and organized first major ecosystem summit',
    },
    {
      period: 'Q4 2024',
      title: 'Scale',
      description: 'Extended reach to 12 regions with emerging market focus',
    },
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="border-b border-border px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground">About Us</h1>
            <p className="mt-4 text-lg text-foreground/60 max-w-2xl">
              The Sui Community Hub is a community-led initiative to foster ecosystem growth,
              education, and collaboration across the Sui blockchain network.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Mission */}
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  To empower developers, builders, and communities worldwide by providing access
                  to quality education, networking opportunities, and ecosystem support. We believe
                  in building a transparent, inclusive, and thriving Sui ecosystem.
                </p>
              </div>

              {/* Vision */}
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">Our Vision</h2>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  To become the primary community hub for Sui learning and collaboration globally.
                  We envision a future where anyone can easily access resources, connect with peers,
                  and contribute meaningfully to the Sui ecosystem.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="px-4 py-20 sm:px-6 lg:px-8 bg-card border-y border-border">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-4xl font-bold text-foreground text-center mb-16">Our Impact</h2>

            <div className="grid grid-cols-4 gap-2 sm:gap-4 lg:gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="rounded-lg border border-border bg-background p-3 sm:p-6 text-center space-y-2">
                  <div className="text-xl sm:text-3xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <p className="text-[10px] sm:text-sm text-foreground/70 leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Journey Timeline */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-4xl font-bold text-foreground text-center mb-16">Our Journey</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300 p-8 space-y-3"
                >
                  <div className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-semibold">
                    {milestone.period}
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{milestone.title}</h3>
                  <p className="text-foreground/70">{milestone.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="px-4 py-20 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-card to-accent/10 border-y border-border">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-4xl font-bold text-foreground text-center mb-16">Our Values</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Community First',
                  description:
                    'We prioritize community needs and feedback in all our initiatives and decisions.',
                },
                {
                  title: 'Transparency',
                  description:
                    'We operate openly and communicate clearly with all stakeholders about our goals and progress.',
                },
                {
                  title: 'Education',
                  description:
                    'We believe quality education is the foundation for a thriving ecosystem.',
                },
                {
                  title: 'Collaboration',
                  description:
                    'We work together with projects, developers, and community members to drive growth.',
                },
                {
                  title: 'Innovation',
                  description:
                    'We encourage experimentation and creative solutions to build the future of Web3.',
                },
                {
                  title: 'Inclusivity',
                  description:
                    'We welcome everyone and are committed to building a diverse and inclusive community.',
                },
              ].map((value, index) => (
                <div key={index} className="space-y-3">
                  <h3 className="text-xl font-bold text-foreground">{value.title}</h3>
                  <p className="text-foreground/70">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Brand Ambassador Program */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold text-foreground mb-6">Brand Ambassador Program</h2>

            <div className="space-y-6">
              <p className="text-lg text-foreground/70 leading-relaxed">
                The Sui Community Hub Brand Ambassador program is dedicated to fostering ecosystem
                growth and education through community-led initiatives. Our ambassadors organize
                events, support builders, and help grow the Sui community in their regions.
              </p>

              <div className="rounded-xl border border-border bg-card p-8 space-y-4">
                <h3 className="text-xl font-semibold text-foreground">What We Do</h3>
                <ul className="space-y-2">
                  {[
                    'Organize regional events, workshops, and meetups',
                    'Provide education and resources to new builders',
                    'Support ecosystem projects and initiatives',
                    'Build bridges between Sui and local communities',
                    'Create content and share knowledge',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span className="text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="px-4 py-16 sm:px-6 lg:px-8 bg-card border-y border-border">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-lg border-l-4 border-accent bg-accent/10 p-6">
              <p className="text-sm text-foreground/80">
                <span className="font-semibold">Community-led Initiative:</span> The Sui Community
                Hub is a community-led initiative and is not officially affiliated with or endorsed
                by Sui Network or the Sui Foundation. This is an independent effort to support the
                Sui ecosystem and community members.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Ready to get involved?</h2>
            <p className="text-lg text-foreground/60">
              Join our community and help us build the future of Sui
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/events">
                <Button size="lg" className="gap-2">
                  Explore Events
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/community">
                <Button variant="outline" size="lg">
                  Join Community
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
