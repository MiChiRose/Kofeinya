import {Navigation} from "./src/navigation/navigation";
import {LogBox} from "react-native";

export default function App() {
  LogBox.ignoreLogs(ignoreWarnings);
  return <Navigation/>
}

const ignoreWarnings = [
    'VirtualizedLists should never be nested'
]
