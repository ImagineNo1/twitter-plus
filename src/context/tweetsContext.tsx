import { createContext, useReducer } from "react";
import { tweetsType } from "../types/types";

type TweetscontextProps = {
  children: React.ReactNode;
};
type TweetReducerProps = {
  action: "SET" | "DELETE";
  payload: tweetsType[];
};

// const TweetReducer = (
//   action: TweetReducerProps,
//   payload: TweetReducerProps
// ) => {
//   switch (action.type) {
//     case "SET_TWEETS":
//       return { tweets: payload };
//   }
// };

// const [state, dispatch] = useReducer();

const TweetContext = createContext([]);

export const TweetContextProvider = ({ children }: TweetscontextProps) => {
  return <TweetContext.Provider value={[]}>{children}</TweetContext.Provider>;
};
