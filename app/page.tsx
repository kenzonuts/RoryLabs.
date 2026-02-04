import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Zap } from 'lucide-react';

export default function Home() {
  const featuredEvents = [
    {
      id: 1,
      title: 'Sui Foundation Workshop',
      date: 'Feb 15, 2025',
      location: 'San Francisco, CA',
      image: 'linear-gradient(135deg, #6366f1 0%, #0ea5e9 100%)',
    },
    {
      id: 2,
      title: 'Web3 Developer Bootcamp',
      date: 'Feb 22, 2025',
      location: 'Virtual',
      image: 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)',
    },
    {
      id: 3,
      title: 'Community Meetup Asia',
      date: 'Mar 5, 2025',
      location: 'Tokyo, Japan',
      image: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
    },
    {
      id: 4,
      title: 'Ecosystem Summit 2025',
      date: 'Mar 20, 2025',
      location: 'New York, NY',
      image: 'linear-gradient(135deg, #3b82f6 0%, #0ea5e9 100%)',
    },
  ];

  const stats = [
    { label: 'Events Organized', value: '24' },
    { label: 'Community Members', value: '5.2K' },
    { label: 'Builders Supported', value: '156' },
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
          {/* Gradient Background */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
          </div>

          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-pretty leading-tight text-foreground">
              Empowering the Sui Community Through Events
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-foreground/70 text-balance">
              Join us for exclusive event coverage, ecosystem education, and community building initiatives.
              Connect with developers, builders, and Web3 enthusiasts.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/events">
                <Button size="lg" className="w-full sm:w-auto gap-2">
                  View Events
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/community">
                <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
                  Join Community
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Events */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">Upcoming Events</h2>
              <p className="text-lg text-foreground/60">
                Discover our latest events and community initiatives
              </p>
            </div>

            {/* Events Carousel */}
            <div className="relative overflow-hidden">
              <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-background to-transparent z-10" />
              <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-background to-transparent z-10" />
              
              <div className="flex overflow-x-hidden">
                <div
                  className="flex gap-3 sm:gap-6 animate-scroll-left"
                  style={{
                    animation: 'slide-left 50s linear infinite',
                  }}
                >
                  {[...featuredEvents, ...featuredEvents].map((event, index) => (
                    <div key={`${event.id}-${index}`} className="flex-shrink-0 w-40 sm:w-80">
                      <Link href={`/events/${event.id}`}>
                        <div className="group cursor-pointer h-full">
                          <div className="relative overflow-hidden rounded-xl mb-4 aspect-video bg-muted">
                            <div
                              className="w-full h-full transition-transform duration-300 group-hover:scale-105"
                              style={{ background: event.image }}
                            />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                              <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                                <div className="w-0 h-0 border-l-6 sm:border-l-8 border-t-4 sm:border-t-5 border-b-4 sm:border-b-5 border-l-white border-t-transparent border-b-transparent ml-1" />
                              </div>
                            </div>
                          </div>
                          <div className="space-y-1 sm:space-y-2">
                            <h3 className="text-sm sm:text-base font-semibold text-foreground group-hover:text-accent transition-colors line-clamp-2">
                              {event.title}
                            </h3>
                            <p className="text-xs sm:text-sm text-foreground/60">{event.date}</p>
                            <p className="text-xs sm:text-sm text-foreground/50">{event.location}</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link href="/events">
                <Button variant="outline" size="lg">
                  View All Events
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Community Proof / Stats */}
        <section className="px-4 py-12 sm:py-20 sm:px-6 lg:px-8 bg-card border-y border-border">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-8 sm:mb-16">
              <h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-2 sm:mb-4">Community Impact</h2>
              <p className="text-sm sm:text-lg text-foreground/60">
                Building the Sui ecosystem together
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="rounded-xl bg-background border border-border p-4 sm:p-8 text-center"
                >
                  <div className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <p className="mt-1 sm:mt-2 text-xs sm:text-base text-foreground/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-2xl bg-gradient-to-br from-primary/20 via-card to-accent/20 border border-border p-12 text-center space-y-6">
              <h2 className="text-3xl font-bold text-foreground">
                Ready to Join the Community?
              </h2>
              <p className="text-lg text-foreground/70">
                Connect with us on Discord, Telegram, or X to stay updated on all events and initiatives.
              </p>
              <Link href="/community">
                <Button size="lg" className="gap-2">
                  Join Community
                  <ArrowRight className="w-4 h-4" />
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
