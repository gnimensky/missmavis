
import { Button } from "@/components/ui/button";

const Index = () => {
  const handleChatClick = () => {
    window.open('https://character.ai/chat/KWcE1ddvQ3hW58l2Ep5-rDsGz65x1kkaAn2dZiYGrdM', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-50 to-yellow-100">
      
      <header className="w-full py-6 px-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img 
              src="/lovable-uploads/1f71c1f7-6e22-4f16-9ad0-7d406eb965fd.png" 
              alt="Miss Famous Mavis Logo" 
              className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover shadow-lg border-4 border-blue-300"
            />
            <div className="text-left">
              <h1 className="text-2xl md:text-4xl font-bold text-yellow-900">It's Miss Famous Mavis</h1>
              <p className="text-yellow-700 text-sm md:text-base">
                ...the Digital Twin of{' '}
                <a 
                  href="https://www.instagram.com/missfamousmavis/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-semibold hover:text-blue-800 underline"
                >
                  @missfamousmavis
                </a>
              </p>
            </div>
          </div>
          
          <Button 
            onClick={handleChatClick}
            className="bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-yellow-900 font-bold px-6 py-3 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            CHAT NOW
          </Button>
        </div>
      </header>

      
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <p className="text-2xl md:text-3xl font-bold text-yellow-800 max-w-2xl mx-auto">
            Chat with the digital twin of Instagram's most famous and beloved Australian Shepherd, Miss Famous Mavis!
          </p>
        </div>

        <div className="mb-12">
          <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 border border-blue-200">
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
          </div>
        </div>

        <div className="text-center">
          <div className="bg-white rounded-xl shadow-xl p-8 md:p-12 border border-blue-200">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-900 mb-6">
              Ready to Chat?
            </h3>
            <p className="text-yellow-700 mb-8 text-lg">
              Experience the personality and charm of Miss Famous Mavis through AI conversation!
            </p>
            
            <div className="mb-8">
              <img 
                src="/lovable-uploads/87d4c2e1-2325-4e6e-9dad-756572cdaa28.png" 
                alt="Miss Famous Mavis on her throne" 
                className="w-full max-w-md mx-auto rounded-2xl shadow-lg"
              />
            </div>

            <Button 
              onClick={handleChatClick}
              className="bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-yellow-900 text-xl px-12 py-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              🐕 CHAT WITH MISS MAVIS 🐕
            </Button>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center">
          <div className="bg-white/60 rounded-lg p-6 border border-blue-200">
            <div className="flex items-center justify-center space-x-3">
              <img 
                src="/lovable-uploads/1f71c1f7-6e22-4f16-9ad0-7d406eb965fd.png" 
                alt="Miss Famous Mavis Logo" 
                className="w-8 h-8 rounded-full object-cover shadow-sm border-2 border-blue-300"
              />
              <p className="text-yellow-700">
                Follow the real Miss Famous Mavis on Instagram: 
                <a 
                  href="https://instagram.com/missfamousmavis" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 font-semibold hover:text-blue-800 ml-2 underline"
                >
                  @missfamousmavis
                </a>
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
