import { globalCss, styled } from "./styles/stitches.config";
import bg from "./assets/images/pattern-bg.png";
import Search from "./components/search";
import MapEl from "./components/map";

const Container = styled("main", {
  display: "block",
});

const Header = styled("header", {
  px: "1.5rem",
  backgroundImage: `url('${bg}')`,
  backgroundPosition: "top",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "$header",
  zIndex: 1000,
  "@tabletUp": {
    height: "calc($sizes$header - 1rem)",
  },
});

const Title = styled("h1", {
  fontSize: "x-large",
  textAlign: "center",
  color: "White",
  fontWeight: 500,
  pt: "2rem",
  "@tabletUp": {
    fontSize: "xx-large",
  },
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
