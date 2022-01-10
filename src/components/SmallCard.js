const SmallCard = ({ lUrl, sUrl }) => {
  return (
    <div
      className="flex items-center m-2 mt-5 space-x-4 rounded-xl 
      cursor-pointer hover:bg-gray-600 hover:scale-105 
      transition transform duration-200 ease-out"
    >
      {/* left */}
      <div className="relative h-16 w-16"></div>
      {/* Right */}
      <div>
        <h2>{lUrl}</h2>
        <h3 className="text-gray-500">{sUrl}</h3>
      </div>
    </div>
  );
};

export default SmallCard;
