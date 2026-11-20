import React from "react";
import { Box, Image } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import PopupButton from "../../global/components/PopupButton";
import PopupDrawer from "../../global/components/PopupDrawer";
import Overlay from "../../global/components/Overlay";
import OpenFade from "../../global/components/OpenFade";
import PageTabs from "../../global/components/PageTabs";
import { Floor, PopupContent } from "../../notion/types";
import Floor1Detail from "image/1f_detail.png";
import Floor2Detail from "image/2f_detail.png";

interface Props {
  floor: Floor;
  currentModal: number;
  setCurrentModal: React.Dispatch<React.SetStateAction<number>>;
  handleNextModal: () => void;
  handlePrevModal: () => void;
  headerHeight: number;
  data: PopupContent[];
}

const FloorPage: React.FC<Props> = ({
  floor,
  currentModal,
  setCurrentModal,
  handleNextModal,
  handlePrevModal,
  headerHeight,
  data,
}) => {
  const { state } = useLocation();
  const contents = data.filter((c) => c.floor === floor);
  const image = floor === "1F" ? Floor1Detail : Floor2Detail;

  return (
    <>
      <OpenFade shouldFade={state}>
        <Box
          sx={{
            width: "100vw",
            minHeight: "100vh",
            paddingTop: `${headerHeight + 60}px`,
            paddingBottom: "90px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Overlay isOpen={currentModal > 0} />
          <Box position="relative" width="100%" maxWidth="1000px">
            <Image src={image} width="100%" opacity={0.7} alt={`${floor} 平面図`} />
            {contents.map((c) => (
              <PopupButton
                key={c.id}
                id={c.id}
                position={c.position}
                label={c.booth}
                caption={c.name}
                setCurrentModal={setCurrentModal}
              />
            ))}
          </Box>
        </Box>
      </OpenFade>
      <PopupDrawer
        currentModal={currentModal}
        setCurrentModal={setCurrentModal}
        popupContents={data}
        onNextModal={handleNextModal}
        onPrevModal={handlePrevModal}
      />
      <PageTabs />
    </>
  );
};

export default FloorPage;
