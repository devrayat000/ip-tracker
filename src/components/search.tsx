import useSWR from "swr";

import { styled } from "~/styles/stitches.config";
import { ReactComponent as ArrowIcon } from "~/assets/images/icon-arrow.svg";
import { getLocation } from "~/services/ip";
import Info from "./info";

const Wrapper = styled("form", {
  position: "relative",
  mt: "2rem",
  zIndex: 1000,
  "@tabletUp": {
    display: "grid",
    placeItems: "center",
  },
});

const SearchBar = styled("fieldset", {
  round: "1rem",
  overflow: "hidden",
  display: "flex",
  alignItems: "stretch",
  appearance: "none",
  border: "none",
  "@tabletUp": {
    width: "$half",
  },
});

const Input = styled("input", {
  flex: "1 1 0%",
  p: "1.25rem 1.5rem",
  fontSize: "large",
  border: "none",
  fontFamily: "$body",
  "&:focus": {
    outline: "none",
  },
  "&::placeholder": {
    color: "$dark-gray",
    fontWeight: 500,
  },
});

const SearchButton = styled("button", {
  appearance: "none",
  backgroundColor: "Black",
  flex: "0 0 4rem",
  display: "grid",
  placeItems: "center",
  border: "none",
  "&:focus": {
    outline: "none",
  },
});

function Search() {
  const { data, mutate, isValidating } = useSWR("location", () =>
    getLocation()
  );

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const ip = formData.get("ip");

    if (ip) {
      const data = getLocation(ip.toString());
      mutate(data, false);
    }
  };

  return (
    <Wrapper method="post" onSubmit={handleSubmit}>
      <SearchBar disabled={isValidating}>
        <Input
          type="text"
          name="ip"
          placeholder="Search for any IP address or domain"
          defaultValue={data?.ip}
        />
        <SearchButton type="submit">
          <ArrowIcon />
        </SearchButton>
      </SearchBar>

      <Info />
    </Wrapper>
  );
}

export default Search;
