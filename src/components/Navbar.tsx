const Navbar = () => {
  return (
    <div className="grid grid-cols-home h-14 items-center mb-4 p-2 gap-2">
      <div className="text-4xl font-thin">Twitter+</div>
      <div className="font-bold text-2xl">Home</div>
      <div>
        <input
          type="text"
          placeholder="search Twitter+"
          className="px-2 py-1 rounded-md border-2 border-gray-200"
        />
      </div>
    </div>
  );
};

export default Navbar;
