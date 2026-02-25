import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Mail, ArrowRight } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen font-sans bg-surface text-text-main">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-surface/80 backdrop-blur-md border-b border-border-light">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="text-2xl font-serif font-semibold tracking-tight text-brand">
            Life and Color
          </a>
          <nav className="hidden md:flex space-x-8 text-sm font-medium">
            <a href="#about" className="hover:text-brand transition-colors">About</a>
            <a href="#contact" className="hover:text-brand transition-colors">Contact</a>
            <a href="#gallery" className="hover:text-brand transition-colors">Gallery</a>
            <a href="#featured" className="hover:text-brand transition-colors">Featured Pieces</a>
          </nav>
          <a 
            href="https://wa.me/NUMBER" 
            className="hidden md:inline-flex items-center justify-center px-4 py-2 bg-brand text-white text-sm font-medium rounded-full hover:bg-brand-hover transition-colors"
          >
            Say Hello
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-6 py-20 md:py-32 flex flex-col md:flex-row items-center gap-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-6"
        >
          <h1 className="text-5xl md:text-7xl font-serif font-medium leading-tight text-text-main">
            Welcome to <br/><span className="text-brand italic">Life and Color</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-text-muted">
            Hi, I'm King Ife, the hands behind Life and Color.
          </h2>
          <p className="text-lg text-text-muted leading-relaxed max-w-xl">
            I make handmade accessories that complement your everyday wear and let you express your true style, starting with crochet earrings and expanding into other creative pieces. Looking for something custom or in bulk? I've got you.
          </p>
          <p className="text-lg font-serif italic text-brand">
            Let's add some color to your life, one stitch at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a 
              href="https://wa.me/NUMBER"
              className="inline-flex items-center justify-center px-8 py-3 bg-brand text-white rounded-full font-medium hover:bg-brand-hover transition-colors"
            >
              Message me on WhatsApp
            </a>
            <a 
              href="#about"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-text-main border border-border-light rounded-full font-medium hover:bg-gray-50 transition-colors"
            >
              Read more about Life and Color
            </a>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 w-full"
        >
          <div className="aspect-[4/5] max-w-sm rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="/hero-img.jpg" 
              alt="Crochet craft" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-serif font-medium mb-12">About</h2>
            <div className="space-y-6 text-lg text-text-muted leading-relaxed text-left">
              <p>
                Life and Color is a handmade accessories brand founded by KingIfe, where creativity meets craftsmanship. We believe accessories are more than just add-ons, they're expressions of identity, color, and confidence.
              </p>
              <p>
                Our journey begins with crochet earrings, bold, lightweight, and beautifully handcrafted. Each pair is made with care, designed to help you stand out and express your style effortlessly. Whether you're dressing up or keeping it simple, our earrings add the perfect touch of personality.
              </p>
              <p>
                But earrings are just the beginning. At Life and Color, our core focus is accessories. As we grow, we plan to explore even more handmade pieces that allow our customers to express themselves with color, comfort, and originality.
              </p>
              <p>
                We also take custom orders and are open to mass production for events, resellers, or anyone who wants unique handmade accessories in bulk, all while maintaining the quality and creativity we're known for.
              </p>
              <p>
                This brand is not only about yarn, it's about telling stories, sparking joy, and helping you wear your uniqueness with pride.
              </p>
            </div>
            <div className="mt-12 pt-12 border-t border-border-light">
              <p className="text-xl font-serif italic text-text-main mb-8">
                Welcome to Life and Color. Handmade by KingIfe. Inspired by you.
              </p>
              <a 
                href="https://wa.me/NUMBER"
                className="inline-flex items-center justify-center px-8 py-3 bg-text-main text-white rounded-full font-medium hover:bg-black transition-colors"
              >
                Birth your inspiration here <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 md:py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-serif font-medium">Our Gallery</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Handmade Piece 1", desc: "Handmade crochet accessory.", price: "₦5000", img: "/products/piece-1.jpg" },
              { name: "Handmade Piece 2", desc: "Handmade crochet accessory.", price: "₦5000", img: "/products/piece-2.jpg" },
              { name: "Handmade Piece 3", desc: "Handmade crochet accessory.", price: "₦5000", img: "/products/piece-3.jpg" },
              { name: "Handmade Piece 4", desc: "Handmade crochet accessory.", price: "₦5000", img: "/products/piece-4.jpg" },
              { name: "Handmade Piece 5", desc: "Handmade crochet accessory.", price: "₦5000", img: "/products/piece-5.jpg" },
              { name: "Handmade Piece 6", desc: "Handmade crochet accessory.", price: "₦5000", img: "/products/piece-6.jpg" },
              { name: "Handmade Piece 7", desc: "Handmade crochet accessory.", price: "₦5000", img: "/products/piece-7.jpg" },
              { name: "Handmade Piece 8", desc: "Handmade crochet accessory.", price: "₦5000", img: "/products/piece-8.jpg" },
              { name: "Handmade Piece 9", desc: "Handmade crochet accessory.", price: "₦5000", img: "/products/piece-9.jpg" },
              { name: "Handmade Piece 10", desc: "Handmade crochet accessory.", price: "₦5000", img: "/products/piece-10.jpg" }
            ].map((product, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-square rounded-2xl overflow-hidden mb-4 bg-white shadow-sm">
                  <img 
                    src={product.img} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-serif font-medium text-text-main">{product.name}</h3>
                <p className="text-text-muted text-sm mt-1 mb-2">{product.desc}</p>
                <p className="text-brand font-medium">{product.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Footer Section */}
      <footer id="contact" className="bg-brand text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-serif font-medium mb-6">Let's Connect</h2>
            <p className="text-lg text-white/90 leading-relaxed max-w-2xl mx-auto mb-10">
              Whether you've got a question, an idea for a custom piece, or you're thinking of ordering in bulk, I'd love to hear from you.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://wa.me/NUMBER"
                className="w-full sm:w-auto flex items-center justify-center px-8 py-4 bg-text-main text-white rounded-full font-medium hover:bg-black transition-colors shadow-sm"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Message me on WhatsApp
              </a>
              <a 
                href="mailto:hello@lifeandcolor.com"
                className="w-full sm:w-auto flex items-center justify-center px-8 py-4 bg-white/20 text-white rounded-full font-medium hover:bg-white/30 transition-colors shadow-sm"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email me
              </a>
              <a 
                href="https://tiktok.com"
                className="w-full sm:w-auto flex items-center justify-center px-8 py-4 bg-white/20 text-white rounded-full font-medium hover:bg-white/30 transition-colors shadow-sm"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
                Find me on TikTok
              </a>
            </div>
          </motion.div>

          <div className="pt-12 border-t border-white/10 text-gray-400 text-sm">
            <p>Handmade by KingIfe © 2025</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
