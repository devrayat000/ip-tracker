import { Suspense } from "react";
import useSWR from "swr";
import { ErrorBoundary } from "react-error-boundary";

import { getLocation } from "~/services/ip";
import { styled } from "~/styles/stitches.config";

type Props = {};

const InfoContainer = styled("article", {
  position: "absolute",
  left: 0,
  bottom: "-2rem",
  transform: "translateY($sizes$full)",
  width: "$full",
  zIndex: 1,
  "@tabletUp": {
    bottom: "-3rem",
  },
});

const Info = (props: Props) => {
  return (
    <InfoContainer>
      <ErrorBoundary fallback={<h2>Could not fetch posts.</h2>}>
        <Suspense fallback="Loading...">
          <InfoDetails />
        </Suspense>
      </ErrorBoundary>
    </InfoContainer>
  );
};

export default Info;

const InfoCard = styled("ul", {
  backgroundColor: "White",
  round: "1.25rem",
  //   mx: "1.5rem",
  p: "1.75rem",
  listStyleType: "none",
  display: "grid",
  alignItems: "center",
  rowGap: "1.5rem",
  $$cgap: 0,
  "@tabletUp": {
    p: "2rem",
    gridTemplateColumns: "repeat(4, 1fr)",
    alignItems: "start",
    justifyItems: "start",
    $$cgap: "3rem",
    columnGap: "$$cgap",
  },
});

export const InfoDetails = () => {
  const { data } = useSWR("location", () => getLocation());

  return (
    <InfoCard>
      <InfoItem title="Ip Address" content={data?.ip!} />
      <InfoItem
        title="Location"
        content={`${data?.location?.city}, ${data?.location?.region}`}
      />
      <InfoItem title="Timezone" content={`UTC ${data?.location.timezone!}`} />
      <InfoItem title="ISP" content={data?.isp!} />
    </InfoCard>
  );
};

const InfoTitle = styled("h5", {
  color: "$dark-gray",
  textTransform: "uppercase",
  fontWeight: "bold",
  letterSpacing: "0.125rem",
});

const InfoContent = styled("p", {
  color: "$very-dark-gray",
  fontSize: "1.5rem",
  fontWeight: "bold",
  mt: "0.5rem",
});

interface InfoItemProps {
  title: string;
  content: string;
}
export const InfoItem: React.FC<InfoItemProps> = ({ title, content }) => {
  return (
    <li>
      <InfoTitle>{title}</InfoTitle>
      <InfoContent>{content}</InfoContent>
    </li>
  );
};
