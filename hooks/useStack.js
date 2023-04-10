/*===================================*/
// useStack
// ステートをプッシュ・ポップするhooks
/*===================================*/

import { useReducer } from "react";
export default function useStack() {
  const stackReducer = (state, action) => {
    switch (action.type) {
      case "push":
        return [...state, action.item];
      case "pop":
        return state.slice(0, -1);
      case "remove":
        return (state = []);
      default:
        return state;
    }
  };
  return useReducer(stackReducer, []);
}
