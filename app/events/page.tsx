import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Events | Sui Community Hub',
  description: 'Discover all upcoming Sui community events, workshops, and ecosystem initiatives.',
};

export default function EventsPage() {
  const events = [
    {
      id: 1,
      title: 'Sui Foundation Workshop',
      date: 'February 15, 2025',
      time: '2:00 PM - 5:00 PM UTC',
      location: 'San Francisco, CA',
      type: 'Workshop',
      image: 'linear-gradient(135deg, #6366f1 0%, #0ea5e9 100%)',
      description: 'Deep dive into Sui Move programming and smart contract development.',
    },
    {
      id: 2,
      title: 'Web3 Developer Bootcamp',
      date: 'February 22, 2025',
      time: '10:00 AM - 6:00 PM UTC',
      location: 'Virtual',
      type: 'Bootcamp',
      image: 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)',
      description: 'Intensive 8-hour bootcamp covering Sui fundamentals and DeFi protocols.',
    },
    {
      id: 3,
      title: 'Community Meetup Asia',
      date: 'March 5, 2025',
      time: '1:00 PM - 8:00 PM JST',
      location: 'Tokyo, Japan',
      type: 'Meetup',
      image: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
      description: 'Regional community gathering featuring ecosystem updates and networking.',
    },
    {
      id: 4,
      title: 'Ecosystem Summit 2025',
      date: 'March 20, 2025',
      time: '9:00 AM - 6:00 PM EST',
      location: 'New York, NY',
      type: 'Conference',
      image: 'linear-gradient(135deg, #3b82f6 0%, #0ea5e9 100%)',
      description: 'Major conference with keynotes, panel discussions, and building sessions.',
    },
    {
      id: 5,
      title: 'NFT & Gaming on Sui',
      date: 'March 28, 2025',
      time: '3:00 PM - 7:00 PM UTC',
      location: 'Virtual',
      type: 'Workshop',
      image: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
      description: 'Exploring NFT and gaming opportunities within the Sui ecosystem.',
    },
    {
      id: 6,
      title: 'DeFi Protocol Showcase',
      date: 'April 10, 2025',
      time: '2:00 PM - 5:00 PM UTC',
      location: 'Virtual',
      type: 'Panel',
      image: 'linear-gradient(135deg, #06b6d4 0%, #0ea5e9 100%)',
      description: 'Leading protocols share their developments and future roadmaps.',
    },
  ];

  const getTypeBadgeColor = (type: string) => {
    switch (type) {
      case 'Workshop':
        return 'bg-primary/20 text-primary border border-primary/40';
      case 'Bootcamp':
        return 'bg-accent/20 text-accent border border-accent/40';
      case 'Meetup':
        return 'bg-secondary/20 text-secondary border border-secondary/40';
      case 'Conference':
        return 'bg-purple-500/20 text-purple-400 border border-purple-500/40';
      default:
        return 'bg-muted text-foreground/60 border border-border';
    }
  };

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        {/* Header */}
        <section className="border-b border-border px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground">Events</h1>
            <p className="mt-4 text-lg text-foreground/60 max-w-2xl">
              Explore our upcoming events, workshops, and community initiatives. Connect with builders,
              developers, and community members from around the world.
            </p>
          </div>
        </section>

        {/* Events Grid */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event) => (
                <Link key={event.id} href={`/events/${event.id}`}>
                  <div className="group h-full rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 cursor-pointer">
                    {/* Image */}
                    <div className="relative overflow-hidden aspect-video bg-muted">
                      <div
                        className="w-full h-full transition-transform duration-300 group-hover:scale-105"
                        style={{ background: event.image }}
                      />
                      <div className="absolute top-4 right-4">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getTypeBadgeColor(event.type)}`}>
                          {event.type}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-4">
                      <h3 className="font-semibold text-lg text-foreground group-hover:text-accent transition-colors line-clamp-2">
                        {event.title}
                      </h3>

                      <p className="text-sm text-foreground/60 line-clamp-2">
                        {event.description}
                      </p>

                      <div className="space-y-2 pt-4 border-t border-border">
                        <div className="flex items-center gap-2 text-sm text-foreground/70">
                          <Calendar className="w-4 h-4" />
                          <span>{event.date}</span>
                        </div>
                        <div className="text-xs text-foreground/50">{event.time}</div>
                        <div className="flex items-center gap-2 text-sm text-foreground/70">
                          <MapPin className="w-4 h-4" />
                          <span>{event.location}</span>
                        </div>
                      </div>

                      <Button variant="outline" className="w-full gap-2 group-hover:border-primary/50 group-hover:text-primary bg-transparent">
                        View Event
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 py-20 sm:px-6 lg:px-8 bg-card border-t border-border">
          <div className="mx-auto max-w-4xl text-center space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Don't miss any events</h2>
            <p className="text-lg text-foreground/60">
              Subscribe to our newsletter or join our Discord to get notified about upcoming events.
            </p>
            <Link href="/community">
              <Button size="lg">Join Community</Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
