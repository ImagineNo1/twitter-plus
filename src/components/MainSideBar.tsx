import { tweetsType } from "../types/types";
import AddTweet from "./AddTweet";
import TweetsPreview from "./TweetsPreview";

type templateProps = {
  tweets: tweetsType[];
};

const MainTemplate = ({ tweets }: templateProps) => {
  return (
    <div className="p-2 border-2 border-gray-200 rounded-lg">
      {/* <NewTweet tweets={tweets} /> */}
      <AddTweet />
      <TweetsPreview tweets={tweets} />
    </div>
  );
};

export default MainTemplate;
