import { tweetsType } from "../types/types";

type TweetsPreviewProps = {
  tweets: tweetsType[];
};

const TweetsPreview = ({ tweets }: TweetsPreviewProps) => {
  return (
    <div className="mt-3">
      {tweets &&
        tweets.map((item) => {
          return (
            <div
              key={item.id}
              className="my-8 p-2 border-b-2 border-gray-200 font-light hover:shadow-lg cursor-pointer"
            >
              {item.data}
            </div>
          );
        })}
    </div>
  );
};

export default TweetsPreview;
