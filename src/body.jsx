import React from 'react';
import './assets/body.css';
import YouTubeVideo from './YouTubeVideo';


  export default function AboutSection() {
    return (
        <div className="relative isolate overflow-hidden bg-blue-700 py-24 sm:py-32">
        <div className="mx-auto px-6 lg:px-8 flex flex-col sm:flex-row">
          <div className="mx-auto sm:mr-10">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Kaya Mo.</h2>
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">I-GCash mo.</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              From a bartender laid off — to a business owner! Yan ang istorya ni Cocoy Rubio. Find inspiration from one of the 70 million real-life #GCashStories . Ikaw, anong GCash Story mo?
            </p>
            <div className="mt-10 flex sm:flex-row">
            <button className="button flex-grow mb-4 sm:mr-4 sm:mb-0">Learn More</button>
            <button className="button flex-grow">Register</button>
            </div>


          </div>
          <div className="flex-grow">
            <div>
              <YouTubeVideo />
            </div>
          </div>
        </div>
      </div>
    )
  }
  
