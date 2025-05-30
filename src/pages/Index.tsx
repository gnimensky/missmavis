import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Index = () => {
  const handleChatClick = () => {
    window.open('https://character.ai/chat/KWcE1ddvQ3hW58l2Ep5-rDsGz65x1kkaAn2dZiYGrdM', '_blank');
  };

  const images = [
    "/lovable-uploads/f1f1e57c-695b-4dcb-868f-784ca23e7c78.png",
    "/lovable-uploads/6bc31d71-48bf-41b9-b3a8-250e7159190f.png",
    "/lovable-uploads/2af7c8e6-61de-4dad-9103-c9e7dca6645a.png"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 font-poppins">
      <header className="w-full py-6 px-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img 
              src="/lovable-uploads/1f71c1f7-6e22-4f16-9ad0-7d406eb965fd.png" 
              alt="Miss Famous Mavis Logo" 
              className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover shadow-lg border-4 border-yellow-300 bg-white"
            />
            <div className="text-left">
              <h1 className="text-2xl md:text-4xl font-semibold text-yellow-900">It's.. Miss Famous Mavis</h1>
              <p className="text-yellow-700 text-lg md:text-xl">
                ..the Digital Twin of{' '}
                <a 
                  href="https://www.instagram.com/missfamousmavis/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-600 font-medium hover:text-amber-800 underline"
                >
                  @missfamousmavis
                </a>
              </p>
            </div>
          </div>
          
          <Button 
            onClick={handleChatClick}
            className="bg-gradient-to-r from-yellow-200 to-amber-300 hover:from-yellow-300 hover:to-amber-400 text-yellow-900 font-medium px-6 py-3 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            CHAT NOW
          </Button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-yellow-200 via-amber-200 to-yellow-200 px-12 py-6 rounded-full shadow-lg border-2 border-yellow-300 max-w-3xl mx-auto">
            <div className="text-xl md:text-2xl font-medium text-yellow-900 leading-tight">
              <div>Chat with the digital twin of Instagram's</div>
              <div>most beloved Australian Shepherd,</div>
              <div><strong>Miss Famous Mavis!</strong></div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <div className="bg-gradient-to-r from-yellow-200 via-amber-200 to-yellow-200 rounded-xl shadow-xl p-6 md:p-8 border-2 border-yellow-300">
            <div className="w-full max-w-md mx-auto" style={{ aspectRatio: '16/9', maxHeight: '300px' }}>
              <iframe
                src="https://drive.google.com/file/d/1nl54lu3eb1oc2B_TrMdQSoIuZbA6JRpE/preview"
                width="100%"
                height="100%"
                className="rounded-lg"
                allow="autoplay"
                title="Miss Famous Mavis Video"
              ></iframe>
            </div>
            <div className="text-center mt-4">
              <p className="text-yellow-900 text-lg md:text-xl font-bold">Miss Mavis Says Hello!</p>
            </div>
          </div>
        </div>

        <div className="mb-8 text-center">
          <div className="bg-gradient-to-r from-yellow-200 via-amber-200 to-yellow-200 rounded-xl shadow-xl p-6 border-2 border-yellow-300">
            <h3 className="text-xl font-medium text-yellow-900 mb-4">
              Miss Mavis Favicon
            </h3>
            <img 
              src="https://wwhomnnlzhyikezpulyc.supabase.co/storage/v1/object/public/mavis//favicon.ico"
              alt="Miss Mavis Favicon" 
              className="w-16 h-16 mx-auto rounded-lg shadow-lg bg-white p-2"
            />
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-yellow-200 via-amber-200 to-yellow-200 rounded-xl shadow-xl p-8 md:p-12 border-2 border-yellow-300">
            <h3 className="text-2xl md:text-3xl font-medium text-yellow-900 mb-6">
              Ready to Chat?
            </h3>
            <div className="text-yellow-700 mb-8 text-lg">
              <div>Experience the personality and charm of Miss Famous Mavis</div>
              <div>through AI conversation!</div>
            </div>
            
            <div className="mb-8 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6">
              <img 
                src={images[0]}
                alt="Miss Famous Mavis" 
                className="w-40 h-48 md:w-48 md:h-58 rounded-2xl shadow-lg object-cover object-top transform rotate-[-5deg] hover:rotate-0 transition-transform duration-300"
              />
              <img 
                src={images[2]}
                alt="Miss Famous Mavis" 
                className="w-44 h-52 md:w-52 md:h-62 rounded-2xl shadow-xl object-cover object-top z-10 hover:scale-105 transition-transform duration-300"
              />
              <img 
                src={images[1]}
                alt="Miss Famous Mavis" 
                className="w-40 h-48 md:w-48 md:h-58 rounded-2xl shadow-lg object-cover object-top transform rotate-[5deg] hover:rotate-0 transition-transform duration-300"
              />
            </div>

            <Button 
              onClick={handleChatClick}
              className="bg-gradient-to-r from-yellow-200 to-amber-300 hover:from-yellow-300 hover:to-amber-400 text-yellow-900 text-xl font-medium px-12 py-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              🐕 CHAT WITH MISS MAVIS 🐕
            </Button>
          </div>
        </div>

        <footer className="mt-16 text-center">
          <div className="bg-white/60 rounded-lg p-6 border border-yellow-200">
            <div className="flex flex-col items-center justify-center space-y-2">
              <div className="flex items-center space-x-3">
                <img 
                  src="/lovable-uploads/1f71c1f7-6e22-4f16-9ad0-7d406eb965fd.png" 
                  alt="Miss Famous Mavis Logo" 
                  className="w-12 h-12 rounded-full object-cover shadow-sm border-2 border-yellow-300 bg-white"
                />
                <p className="text-yellow-700 font-medium">
                  © 2025 Miss Famous Mavis | The Digital Twin Experience
                </p>
              </div>
              <p className="text-yellow-700">
                aimavis.com All rights reserved
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
