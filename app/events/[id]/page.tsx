'use client';

import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar, Clock, ArrowLeft, ExternalLink, Users } from 'lucide-react';

export default function EventDetailPage({ params }: { params: { id: string } }) {
  // Mock event data - In a real app, this would come from a database
  const events: Record<string, any> = {
    '1': {
      id: 1,
      title: 'Sui Foundation Workshop',
      subtitle: 'Event Coverage',
      date: 'February 15, 2025',
      time: '2:00 PM - 5:00 PM UTC',
      location: 'San Francisco, CA',
      type: 'Workshop',
      image: 'linear-gradient(135deg, #6366f1 0%, #0ea5e9 100%)',
      attendees: 250,
      description: 'Join us for an in-depth workshop on Sui Move programming and smart contract development. Learn directly from the Sui Foundation team about best practices, recent updates, and how to build on the Sui blockchain.',
      highlights: [
        'Introduction to Sui Move Language',
        'Smart Contract Development Patterns',
        'Testing & Deployment Best Practices',
        'Q&A with Sui Engineers',
        'Networking Session',
      ],
      keyTakeaways: [
        'Master Sui Move syntax and core concepts',
        'Understand gas optimization techniques',
        'Learn about recent protocol upgrades',
        'Connect with developers and builders',
        'Get feedback on your projects',
      ],
      videoUrl: 'https://twitter.com/SuiNetwork',
    },
    '2': {
      id: 2,
      title: 'Web3 Developer Bootcamp',
      subtitle: 'Event Coverage',
      date: 'February 22, 2025',
      time: '10:00 AM - 6:00 PM UTC',
      location: 'Virtual',
      type: 'Bootcamp',
      image: 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)',
      attendees: 500,
      description: 'An intensive 8-hour bootcamp covering Sui fundamentals, DeFi protocols, and hands-on project building. Perfect for developers looking to accelerate their Web3 journey.',
      highlights: [
        'Sui Blockchain Fundamentals',
        'DeFi Protocol Architecture',
        'Building Your First dApp',
        'Smart Contract Security',
        'Testnet Deployment',
      ],
      keyTakeaways: [
        'Build a complete DeFi application',
        'Understand transaction model differences',
        'Master async consensus mechanisms',
        'Deploy on Sui testnet',
        'Join exclusive builder community',
      ],
      videoUrl: 'https://twitter.com/SuiNetwork',
    },
    '3': {
      id: 3,
      title: 'Community Meetup Asia',
      subtitle: 'Event Coverage',
      date: 'March 5, 2025',
      time: '1:00 PM - 8:00 PM JST',
      location: 'Tokyo, Japan',
      type: 'Meetup',
      image: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
      attendees: 150,
      description: 'A regional community gathering featuring ecosystem updates, project showcases, and networking opportunities for builders in Asia.',
      highlights: [
        'Ecosystem State of the Union',
        'Project Showcases from Regional Teams',
        'Panel: Building in Asia',
        'Casual Networking & Dinner',
        'Surprise Announcements',
      ],
      keyTakeaways: [
        'Meet ecosystem leaders and builders',
        'Discover emerging projects in Asia',
        'Learn about regional opportunities',
        'Network with local developers',
        'Exclusive community benefits',
      ],
      videoUrl: 'https://twitter.com/SuiNetwork',
    },
    '4': {
      id: 4,
      title: 'Ecosystem Summit 2025',
      subtitle: 'Event Coverage',
      date: 'March 20, 2025',
      time: '9:00 AM - 6:00 PM EST',
      location: 'New York, NY',
      type: 'Conference',
      image: 'linear-gradient(135deg, #3b82f6 0%, #0ea5e9 100%)',
      attendees: 1200,
      description: 'The major annual Sui conference featuring keynote speakers, panel discussions, hackathon, and community celebrations.',
      highlights: [
        'Keynote: Future of Sui Ecosystem',
        'Protocol Innovation Panel',
        'Hackathon Showcase & Awards',
        'DeFi & Gaming Track',
        'Community Awards Ceremony',
      ],
      keyTakeaways: [
        'Hear from founders and core team',
        'Meet leading projects and protocols',
        'Participate in hands-on workshops',
        'Network with 1000+ community members',
        'Exclusive swag and rewards',
      ],
      videoUrl: 'https://twitter.com/SuiNetwork',
    },
  };

  const event = events[params.id] || events['1'];

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
          {/* Background */}
          <div className="absolute inset-0 -z-10">
            <div
              className="w-full h-full"
              style={{ background: event.image }}
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>

          <div className="mx-auto max-w-7xl">
            <Link href="/events" className="inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-foreground mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Events
            </Link>

            <div className="space-y-6">
              <div>
                <p className="text-sm font-semibold text-foreground/80 uppercase tracking-wide">
                  {event.subtitle}
                </p>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mt-4 text-balance">
                  {event.title}
                </h1>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 text-foreground">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-foreground/70">Date</p>
                    <p className="font-semibold">{event.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-foreground/70">Time</p>
                    <p className="font-semibold">{event.time}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-foreground/70">Location</p>
                    <p className="font-semibold">{event.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="px-4 py-20 sm:px-6 lg:px-8 bg-background">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-12">
                {/* About */}
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">About This Event</h2>
                  <p className="text-lg text-foreground/70 leading-relaxed">
                    {event.description}
                  </p>
                </div>

                {/* Video Section */}
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">Event Highlights</h2>
                  <div className="rounded-xl overflow-hidden border border-border bg-muted aspect-video flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                        <div className="w-0 h-0 border-l-8 border-t-5 border-b-5 border-l-primary border-t-transparent border-b-transparent ml-1" />
                      </div>
                      <p className="text-foreground/60">Event highlights coming soon</p>
                    </div>
                  </div>
                  <p className="text-sm text-foreground/50 mt-4">
                    Embedded video placeholder. Real event coverage will be displayed here.
                  </p>
                </div>

                {/* What We Covered */}
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6">What We Covered</h2>
                  <ul className="space-y-3">
                    {event.highlights.map((highlight: string, index: number) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <span className="text-foreground/80">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Takeaways */}
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6">Key Takeaways</h2>
                  <ul className="space-y-3">
                    {event.keyTakeaways.map((takeaway: string, index: number) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-foreground/80">{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="border-t border-border pt-8 space-y-4">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href={event.videoUrl} target="_blank" rel="noopener noreferrer">
                      <Button size="lg" className="gap-2">
                        View on X / Twitter
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </a>
                    <Link href="/events">
                      <Button variant="outline" size="lg">
                        Back to Events
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Quick Info Card */}
                <div className="rounded-xl border border-border bg-card p-6 space-y-6">
                  <div>
                    <p className="text-sm text-foreground/60 mb-2">Event Type</p>
                    <p className="font-semibold text-foreground">{event.type}</p>
                  </div>
                  <div className="border-t border-border pt-4">
                    <p className="text-sm text-foreground/60 mb-2">Expected Attendees</p>
                    <div className="flex items-center gap-2 text-foreground">
                      <Users className="w-5 h-5 text-accent" />
                      <span className="font-semibold">{event.attendees}</span>
                    </div>
                  </div>
                </div>

                {/* Share Section */}
                <div className="rounded-xl border border-border bg-card p-6 space-y-4">
                  <h3 className="font-semibold text-foreground">Share Event</h3>
                  <div className="flex gap-3">
                    <button className="flex-1 py-2 px-4 rounded-lg bg-primary/20 hover:bg-primary/30 text-primary transition-colors text-sm font-medium">
                      Share
                    </button>
                    <button className="flex-1 py-2 px-4 rounded-lg bg-primary/20 hover:bg-primary/30 text-primary transition-colors text-sm font-medium">
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
