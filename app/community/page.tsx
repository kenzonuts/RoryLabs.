import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { MessageCircle, Users, Heart, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Community | Sui Community Hub',
  description: 'Join the Sui community. Connect with builders, developers, and ecosystem members on Discord, Telegram, and X.',
};

export default function CommunityPage() {
  const communityChannels = [
    {
      name: 'Discord',
      description: 'The main hub for Sui community discussions, support, and networking.',
      members: '50K+',
      icon: MessageCircle,
      color: 'from-blue-500 to-indigo-600',
      cta: 'Join Discord',
      link: '#',
    },
    {
      name: 'Telegram',
      description: 'Real-time updates and discussions about Sui ecosystem developments.',
      members: '35K+',
      icon: Users,
      color: 'from-cyan-500 to-blue-500',
      cta: 'Join Telegram',
      link: '#',
    },
    {
      name: 'X (Twitter)',
      description: 'Latest news, announcements, and community highlights from Sui.',
      members: '100K+',
      icon: Heart,
      color: 'from-gray-700 to-gray-900',
      cta: 'Follow on X',
      link: '#',
    },
  ];

  const initiatives = [
    {
      title: 'Developer Grants',
      description: 'Funding for builders creating innovative projects on Sui',
      icon: '💰',
    },
    {
      title: 'Ambassador Program',
      description: 'Join our team and help grow the Sui community globally',
      icon: '🌍',
    },
    {
      title: 'Hackathons',
      description: 'Regular hackathons with prizes and ecosystem support',
      icon: '🏆',
    },
    {
      title: 'Mentorship',
      description: 'Connect with experienced builders for guidance and support',
      icon: '🎓',
    },
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        {/* Header */}
        <section className="border-b border-border px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground">Join the Community</h1>
            <p className="mt-4 text-lg text-foreground/60 max-w-2xl">
              Connect with thousands of developers, builders, and community members. Be part of
              the Sui ecosystem and help shape the future of Web3.
            </p>
          </div>
        </section>

        {/* Community Channels */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {communityChannels.map((channel) => {
                const Icon = channel.icon;
                return (
                  <div
                    key={channel.name}
                    className="rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 overflow-hidden"
                  >
                    {/* Header */}
                    <div
                      className={`bg-gradient-to-br ${channel.color} p-8 text-white space-y-4`}
                    >
                      <Icon className="w-10 h-10" />
                      <h3 className="text-2xl font-bold">{channel.name}</h3>
                    </div>

                    {/* Content */}
                    <div className="p-8 space-y-6">
                      <p className="text-foreground/70">{channel.description}</p>

                      <div className="border-t border-border pt-4">
                        <p className="text-sm text-foreground/60 mb-2">Active Members</p>
                        <p className="text-2xl font-bold text-accent">{channel.members}</p>
                      </div>

                      <a href={channel.link}>
                        <Button className="w-full gap-2">
                          {channel.cta}
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Community Initiatives */}
        <section className="px-4 py-20 sm:px-6 lg:px-8 bg-card border-y border-border">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">Community Initiatives</h2>
              <p className="text-lg text-foreground/60">
                Ways to get involved and contribute to the Sui ecosystem
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {initiatives.map((initiative, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-border bg-background hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 p-8 space-y-4"
                >
                  <div className="text-4xl">{initiative.icon}</div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {initiative.title}
                  </h3>
                  <p className="text-foreground/70">{initiative.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold text-foreground mb-12">Community Values</h2>

            <div className="space-y-8">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">Collaboration</h3>
                <p className="text-foreground/70">
                  We believe in building together. Our community thrives through shared knowledge
                  and collaborative projects.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">Inclusivity</h3>
                <p className="text-foreground/70">
                  Everyone is welcome. We support developers of all skill levels and backgrounds
                  in joining the Sui ecosystem.
                </p>
              </div>

              <div className="border-l-4 border-secondary pl-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">Innovation</h3>
                <p className="text-foreground/70">
                  We encourage experimentation and creative solutions. Push the boundaries of
                  what's possible on Sui.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">Learning</h3>
                <p className="text-foreground/70">
                  Knowledge sharing is core to our community. Learn from others, contribute your
                  expertise, and grow together.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Code of Conduct */}
        <section className="px-4 py-20 sm:px-6 lg:px-8 bg-card border-y border-border">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold text-foreground mb-6">Code of Conduct</h2>
            <p className="text-lg text-foreground/70 mb-6">
              We are committed to creating a welcoming, inclusive, and respectful community.
              Everyone participating in the Sui community is expected to:
            </p>

            <ul className="space-y-3">
              {[
                'Be respectful of different opinions and experiences',
                'Communicate constructively and professionally',
                'Report any inappropriate behavior to community moderators',
                'Respect intellectual property and community guidelines',
                'Help create a safe space for all community members',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center space-y-6">
            <h2 className="text-3xl font-bold text-foreground">
              Ready to join our community?
            </h2>
            <p className="text-lg text-foreground/60">
              Choose your platform and start connecting with Sui builders today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#" className="inline-block">
                <Button size="lg">Join Discord</Button>
              </a>
              <Link href="/events" className="inline-block">
                <Button variant="outline" size="lg">
                  Attend Events
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
