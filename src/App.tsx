import { globalCss, styled } from "./styles/stitches.config";
import bg from "./assets/images/pattern-bg.png";
import Search from "./components/search";
import MapEl from "./components/map";

const Container = styled("main", {
  display: "block",
});

const Header = styled("header", {
  p: "2rem 1.5rem",
  backgroundImage: `url('${bg}')`,
  backgroundPosition: "top",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "$header",
  zIndex: 1000,
});

const Title = styled("h1", {
  fontSize: "x-large",
  textAlign: "center",
  color: "White",
  fontWeight: 500,
});

const globalStyles = globalCss({
  "*": { m: 0, p: 0 },
  body: { fontFamily: "$body" },
});

function App() {
  globalStyles();

  return (
    <Container>
      <Header>
        <Title>IP Address Tracker</Title>
        <Search />
      </Header>
      <MapEl />
    </Container>
  );
}

export default App;
