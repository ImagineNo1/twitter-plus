import { useState } from "react";

const AddTweet = () => {
  const [msg, setMsg] = useState<string>();
  const handleClick = async () => {
    if (msg) {
      await fetch("/api/tweets/new", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ msg }),
      });
    }
  };

  return (
    <div className="h-56 border-b-2 border-gray-600 px-2 relative">
      <div>
        <p className="pt-2 pl-2 text-xl font-bold">What&apos;s happening ?</p>
        <textarea
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          className="block my-3 border-2 border-gray-400 w-full p-2 h-28 rounded-lg"
        ></textarea>
      </div>
      <div
        onClick={handleClick}
        className="absolute bottom-0 right-0 border-2 border-blue-400 rounded-lg px-5 cursor-pointer hover:bg-blue-300 hover:text-white py-1 text-lg mb-2"
      >
        Tweet
      </div>
    </div>
  );
};

export default AddTweet;
