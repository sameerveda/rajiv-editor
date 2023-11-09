import ReactDOM from "react-dom/client"
import Provider from "./Provider"
import Router from "./Router"
import Container from "./Container"
import "./styles/styles.css"
import { Auth } from "./Auth"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider>
    <Container>
      <Auth>
        <Router />
      </Auth>
    </Container>
  </Provider>
)
