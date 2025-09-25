export const Projects = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
          My Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Add your project cards here */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-800">
            <h3 className="text-xl font-semibold text-white mb-4">Project 1</h3>
            <p className="text-gray-300">Project description...</p>
          </div>
          {/* Add more project cards */}
        </div>
      </div>
    </div>
  );
};