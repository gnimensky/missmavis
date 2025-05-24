import { Button } from "@/components/ui/button";

const Index = () => {
  const handleChatClick = () => {
    window.open('https://character.ai/chat/KWcE1ddvQ3hW58l2Ep5-rDsGz65x1kkaAn2dZiYGrdM', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Header with Logo */}
      <header className="w-full py-6 px-4">
        <div className="max-w-6xl mx-auto flex justify-center">
          <div className="flex items-center space-x-4">
            <img 
              src="/lovable-uploads/1f71c1f7-6e22-4f16-9ad0-7d406eb965fd.png" 
              alt="Miss Famous Mavis Logo" 
              className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover shadow-lg border-4 border-amber-200"
            />
            <div className="text-center">
              <h1 className="text-2xl md:text-4xl font-bold text-amber-900">It's Miss Famous Mavis</h1>
              <p className="text-amber-700 text-sm md:text-base">
                ...the Digital Twin of{' '}
                <a 
                  href="https://www.instagram.com/missfamousmavis/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-900 font-semibold hover:text-orange-700 underline"
                >
                  @missfamousmavis
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <p className="text-2xl md:text-3xl text-amber-800 max-w-2xl mx-auto">
            Chat with the digital twin of Instagram's most famous and beloved Australian Shepherd, Miss Famous Mavis!
          </p>
        </div>

        {/* Video Section */}
        <div className="mb-12">
          <div className="bg-white rounded-xl shadow-xl p-6 md:p-8">
            <div className="aspect-video w-full max-w-3xl mx-auto">
              <iframe
                src="https://drive.google.com/file/d/1nl54lu3eb1oc2B_TrMdQSoIuZbA6JRpE/preview"
                width="100%"
                height="100%"
                className="rounded-lg"
                allow="autoplay"
                title="Miss Famous Mavis Video"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Chat Section */}
        <div className="text-center">
          <div className="bg-white rounded-xl shadow-xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-amber-900 mb-6">
              Ready to Chat?
            </h3>
            <p className="text-amber-800 mb-8 text-lg">
              Experience the personality and charm of Miss Famous Mavis through AI conversation!
            </p>
            
            {/* Royal Image as Chat Button */}
            <div className="mb-8">
              <img 
                src="/lovable-uploads/53195ae1-25d3-41f5-802f-32398e944004.png" 
                alt="Miss Famous Mavis on her throne" 
                className="w-full max-w-md mx-auto rounded-lg shadow-lg"
              />
            </div>

            <Button 
              onClick={handleChatClick}
              className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white text-xl px-12 py-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              🐕 CHAT WITH MISS MAVIS 🐕
            </Button>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center">
          <div className="bg-white/50 rounded-lg p-6">
            <p className="text-amber-800">
              Follow the real Miss Famous Mavis on Instagram: 
              <a 
                href="https://instagram.com/missfamousmavis" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-amber-900 font-semibold hover:text-orange-700 ml-2 underline"
              >
                @missfamousmavis
              </a>
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
