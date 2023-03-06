import { missionBackground } from 'assets/images';
import React from 'react';
import { Link } from 'react-router-dom';

export default function MissionSection() {
  return (
    <section className="relative overflow-hidden my-16 bg-neutral-600">
      <img
        role="presentation"
        loading="lazy"
        src={missionBackground}
        className="absolute w-full aspect-video object-cover  mix-blend-luminosity"
      />
      <div className="max-w-xl mx-auto px-6 py-10">
        <div className="card bg-neutral text-neutral-content mx-auto lg:mx-0 lg:ml-auto max-w-sm">
          <div className="card-body">
            <h2>Our Mission</h2>
            <h3 className="text-3xl font-bold">Concern About Our Mission</h3>
          </div>

          <div className="card-action">
            <Link to={''}></Link>
          </div>
        </div>
      </div>
    </section>
  );
}
