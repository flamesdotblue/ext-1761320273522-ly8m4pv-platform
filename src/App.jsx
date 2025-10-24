import React from 'react';
import HeroCover from './components/HeroCover';
import FeatureGrid from './components/FeatureGrid';
import ShowcaseCards from './components/ShowcaseCards';
import SiteFooter from './components/SiteFooter';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white antialiased">
      <HeroCover />
      <main className="relative mx-auto w-full max-w-7xl px-6 sm:px-8">
        <FeatureGrid />
        <ShowcaseCards />
      </main>
      <SiteFooter />
    </div>
  );
}
