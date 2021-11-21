import { Router } from "./router/Router";
import "./styles.css";

const user = {
  image: "https://source.unsplash.com/NE0XGVKTmcA",
  name: "aaaa",
  email: "nnnn@human.com",
  phone: "1234-567-789",
  factory: {
    name: "DDDDDDdDD!"
  },
  webSite: "https://google.com"
};

export default function App() {
  return <Router />;
}
