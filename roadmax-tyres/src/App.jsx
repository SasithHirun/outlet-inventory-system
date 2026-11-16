import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorksSection from './components/HowItWorksSection';
import ServicesSection from './components/ServicesSection';
import CallNowSection from './components/CallNowSection';
import AboutSection from './components/AboutSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingCallButton from './components/FloatingCallButton';
import QuoteModal from './components/QuoteModal';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedQuoteData, setSelectedQuoteData] = useState(null);

  const handleOpenQuote = (data = null) => {
    setSelectedQuoteData(data);
    setQuoteModalOpen(true);
  };

  const handleCloseQuote = () => {
    setQuoteModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-red-600 selection:text-white">
      {/* Navigation Bar */}
      <Navbar onOpenQuote={() => handleOpenQuote()} />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section with Quick Tyre Matcher */}
        <Hero onOpenQuote={handleOpenQuote} />

        {/* 3-Step "How It Works" Process */}
        <HowItWorksSection onOpenQuote={handleOpenQuote} />

        {/* Comprehensive Services Grid */}
        <ServicesSection onOpenQuote={handleOpenQuote} />

        {/* High-Impact Call Now / Roadside Hotline */}
        <CallNowSection />

        {/* About RoadMAX Story & Pillars */}
        <AboutSection onOpenQuote={handleOpenQuote} />

        {/* Frequently Asked Questions */}
        <FAQSection onOpenQuote={handleOpenQuote} />

        {/* Contact Us, Facebook Marketplace & Service Booking Form */}
        <ContactSection initialQuoteData={selectedQuoteData} />
      </main>

      {/* Clean Corporate Footer */}
      <Footer />

      {/* Sticky Floating Action Call Button */}
      <FloatingCallButton />

      {/* Instant Quote Modal */}
      <QuoteModal 
        isOpen={quoteModalOpen} 
        onClose={handleCloseQuote} 
        initialData={selectedQuoteData}
      />
    </div>
  );
}
