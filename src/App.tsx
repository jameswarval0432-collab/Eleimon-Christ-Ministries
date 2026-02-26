/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReactNode } from "react";
import { motion } from "motion/react";
import { 
  Heart, 
  Users, 
  BookOpen, 
  Sun, 
  ShieldCheck, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight,
  GraduationCap,
  Sprout,
  HandHeart,
  Quote
} from "lucide-react";

const SectionHeading = ({ children, subtitle }: { children: ReactNode; subtitle?: string }) => (
  <div className="mb-12 text-center">
    {subtitle && (
      <motion.span 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-emerald-400 font-medium tracking-widest uppercase text-xs mb-2 block"
      >
        {subtitle}
      </motion.span>
    )}
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-4xl md:text-5xl serif font-bold text-stone-100"
    >
      {children}
    </motion.h2>
    <div className="w-20 h-1 bg-emerald-500 mx-auto mt-6 rounded-full" />
  </div>
);

const ProgramCard = ({ icon: Icon, title, items }: { icon: any, title: string, items: string[] }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-emerald-900/40 border border-emerald-800/50 p-8 rounded-2xl backdrop-blur-sm"
  >
    <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6">
      <Icon className="text-emerald-400 w-6 h-6" />
    </div>
    <h3 className="text-xl font-bold mb-4 serif text-emerald-100">{title}</h3>
    <ul className="space-y-3">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-3 text-stone-300 text-sm">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-emerald-500 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-emerald-950/80 backdrop-blur-md border-bottom border-emerald-900/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl serif">E</span>
            </div>
            <span className="font-bold text-lg tracking-tight serif hidden sm:block">Eleimon Christ Ministries</span>
          </div>
          <div className="flex items-center gap-8">
            <a href="#about" className="text-sm font-medium text-stone-300 hover:text-emerald-400 transition-colors">About</a>
            <a href="#programs" className="text-sm font-medium text-stone-300 hover:text-emerald-400 transition-colors">Programs</a>
            <a href="#contact" className="bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg shadow-emerald-900/20">
              Donate
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/ministry/1920/1080?blur=8" 
            className="w-full h-full object-cover opacity-20"
            alt="Background"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/50 via-emerald-950 to-emerald-950" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6">
                Faith-Based Charitable Organization
              </span>
              <h1 className="text-5xl md:text-7xl serif font-bold leading-[1.1] mb-8 text-balance">
                Establishing <span className="text-emerald-400 italic">Spiritually Strong</span> & Socially Empowered Communities
              </h1>
              <p className="text-lg md:text-xl text-stone-400 mb-10 leading-relaxed max-w-2xl">
                Committed to spiritual growth and holistic community development among marginalized groups in Punjab, India.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-full font-bold transition-all flex items-center gap-2 group shadow-xl shadow-emerald-900/40">
                  Our Mission <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border border-emerald-800 hover:bg-emerald-900/50 text-white px-8 py-4 rounded-full font-bold transition-all">
                  Learn More
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Scripture Quote */}
      <section className="py-12 bg-emerald-900/20 border-y border-emerald-900/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Quote className="w-10 h-10 text-emerald-500/30 mx-auto mb-6" />
          <p className="text-2xl md:text-3xl serif italic text-emerald-100 mb-4">
            "Blessed are the merciful, for they shall obtain mercy."
          </p>
          <span className="text-emerald-500 font-bold tracking-widest uppercase text-sm">— Matthew 5:7</span>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/community/800/1000" 
                  className="w-full h-full object-cover"
                  alt="Community work"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-emerald-600 p-8 rounded-3xl shadow-2xl hidden lg:block">
                <div className="text-4xl font-bold mb-1 serif">300+</div>
                <div className="text-emerald-100 text-sm font-medium">Families Supported</div>
              </div>
            </motion.div>

            <div>
              <SectionHeading subtitle="About the Organization">Our Heart & Vision</SectionHeading>
              <div className="space-y-6 text-stone-400 leading-relaxed">
                <p>
                  Eleimon Christ Ministries is a faith-driven charitable organization committed to spiritual growth and holistic community development. We work among marginalized communities, including economically weaker sections, socially excluded groups, and underprivileged children.
                </p>
                <p>
                  Our vision is to establish spiritually strong and socially empowered communities through the love, mercy, and teachings of Jesus Christ. We integrate spiritual guidance with social welfare to ensure sustainable transformation.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8">
                  <div className="flex gap-4">
                    <div className="shrink-0 w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                      <ShieldCheck className="text-emerald-400 w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-stone-100 mb-1">Transparency</h4>
                      <p className="text-xs">Ethical governance and proper activity documentation.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="shrink-0 w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                      <Heart className="text-emerald-400 w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-stone-100 mb-1">Compassion</h4>
                      <p className="text-xs">Driven by the love and mercy of Jesus Christ.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-24 bg-emerald-900/10">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading subtitle="What We Do">Core Program Areas</SectionHeading>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProgramCard 
              icon={BookOpen}
              title="Spiritual Development"
              items={[
                "Bible teaching programs",
                "Leadership training seminars",
                "House fellowship gatherings",
                "Youth spiritual mentoring"
              ]}
            />
            <ProgramCard 
              icon={Users}
              title="Youth Development"
              items={[
                "Drug awareness campaigns",
                "Career counseling sessions",
                "Personality workshops",
                "Leadership training"
              ]}
            />
            <ProgramCard 
              icon={Sun}
              title="Women Empowerment"
              items={[
                "Skill training initiatives",
                "Self-help group formation",
                "Financial literacy workshops",
                "Confidence-building programs"
              ]}
            />
            <ProgramCard 
              icon={GraduationCap}
              title="Child Development"
              items={[
                "Educational support",
                "Moral value education",
                "Child dedication & counseling",
                "Seasonal camps & workshops"
              ]}
            />
            <ProgramCard 
              icon={HandHeart}
              title="Social Welfare"
              items={[
                "Food distribution drives",
                "Clothing distribution",
                "Medical awareness camps",
                "Educational assistance"
              ]}
            />
            <ProgramCard 
              icon={Sprout}
              title="Rural Support"
              items={[
                "Agricultural awareness",
                "Rural livelihood support",
                "Slum community outreach",
                "Relief for weaker families"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <img 
            src="https://picsum.photos/seed/impact/1920/1080" 
            className="w-full h-full object-cover"
            alt="Impact background"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
              <div className="text-5xl md:text-6xl font-bold text-emerald-400 mb-2 serif">250+</div>
              <div className="text-stone-400 uppercase tracking-widest text-xs font-bold">Youth Engaged</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <div className="text-5xl md:text-6xl font-bold text-emerald-400 mb-2 serif">90+</div>
              <div className="text-stone-400 uppercase tracking-widest text-xs font-bold">Women Trained</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <div className="text-5xl md:text-6xl font-bold text-emerald-400 mb-2 serif">300+</div>
              <div className="text-stone-400 uppercase tracking-widest text-xs font-bold">Families Supported</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <div className="text-5xl md:text-6xl font-bold text-emerald-400 mb-2 serif">10+</div>
              <div className="text-stone-400 uppercase tracking-widest text-xs font-bold">House Fellowships</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact & Support */}
      <section id="contact" className="py-24 bg-emerald-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <SectionHeading subtitle="Get In Touch">Contact Information</SectionHeading>
              <p className="text-stone-400 mb-10 leading-relaxed">
                We welcome collaboration with government departments, CSR initiatives, philanthropic organizations, and community leaders.
              </p>
              
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="text-emerald-400 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-100 mb-1">Our Location</h4>
                    <p className="text-stone-400 text-sm">Arniwala Sheikh Sunhan, Fazilka, Punjab, India - 152124</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="text-emerald-400 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-100 mb-1">Phone Number</h4>
                    <p className="text-stone-400 text-sm">+91 98885 56659</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="text-emerald-400 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-100 mb-1">Email Address</h4>
                    <p className="text-stone-400 text-sm">jameswarval0432@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-emerald-900/40 border border-emerald-800/50 p-10 rounded-3xl backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 serif text-emerald-100">Support Our Mission</h3>
              <p className="text-stone-400 text-sm mb-8">
                Your voluntary donations help us sustain youth programs, women empowerment, and community welfare projects.
              </p>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="First Name" className="bg-emerald-950/50 border border-emerald-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-emerald-500 transition-colors" />
                  <input type="text" placeholder="Last Name" className="bg-emerald-950/50 border border-emerald-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-emerald-500 transition-colors" />
                </div>
                <input type="email" placeholder="Email Address" className="w-full bg-emerald-950/50 border border-emerald-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-emerald-500 transition-colors" />
                <textarea placeholder="Your Message" rows={4} className="w-full bg-emerald-950/50 border border-emerald-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-emerald-500 transition-colors"></textarea>
                <button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-emerald-900/40">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-emerald-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-emerald-500 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm serif">E</span>
              </div>
              <span className="font-bold text-sm tracking-tight serif">Eleimon Christ Ministries</span>
            </div>
            <div className="text-stone-500 text-xs">
              © {new Date().getFullYear()} Eleimon Christ Ministries. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-stone-500 hover:text-emerald-400 transition-colors text-xs uppercase tracking-widest font-bold">Privacy</a>
              <a href="#" className="text-stone-500 hover:text-emerald-400 transition-colors text-xs uppercase tracking-widest font-bold">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
