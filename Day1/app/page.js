export default function Home() {
  return (
    <div className="p-8 bg-[#cfe8c9] min-h-screen flex items-center justify-center">

      {/* Outer Flexbox */}
      <div className="flex flex-row items-center gap-8">
        
        {/* Left Section - Image */}
        <div className="flex-1">
          
          <img 
            src="https://enrollacademy.com/wp-content/uploads/2020/03/A-view-of-the-Sahyadri-campus.jpg" 
            alt="Sahyadri College" 
             className="w-80 h-56 object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="flex-1">
          <img 
            src="https://daijiworld.ap-south-1.linodeobjects.com/iWeb/daijiworld/images3/asha_3721_sahyadrirnk1.jpg" 
            alt="Sahyadri College" 
            className="w-80 h-56 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Right Section - Text & Button */}
        <div className="flex-1 flex flex-col">
          
          {/* Title */}
          <div className="font-bold text-xl">
            About Sahyadri
          </div>
          
          <br />

          {/* Description */}
          <div className="text-gray-700 text-sm">
            Experience a campus like no other in the country. Sahyadri College of Engineering & Management is a thriving institution with a rich legacy of industry partnerships and academic excellence. Our campus is a melting pot of cultures, ideas, and opportunities, where students are encouraged to think, question, and innovate.
          </div>
          
          <br />

          {/* View More Button */}
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
            View More
          </button>

        </div>

      </div>
    </div>
  );
}

