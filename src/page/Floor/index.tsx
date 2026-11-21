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
import Atelier1Detail from "image/atelier1_detail.png";

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
  // 詳細図と、その縦横比（幅 / 高さ）
  const { image, ratio } = {
    "1F": { image: Floor1Detail, ratio: 1730 / 2400 },
    "2F": { image: Floor2Detail, ratio: 1320 / 2400 },
    A1: { image: Atelier1Detail, ratio: 1938 / 2400 },
  }[floor];

  return (
    <>
      <OpenFade shouldFade={state}>
        <Box
          sx={{
            width: "100vw",
            height: "100vh",
            paddingTop: `${headerHeight + 60}px`,
            paddingBottom: "80px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <Overlay isOpen={currentModal > 0} />
          {/* 図面の比率を保ったまま画面いっぱいに置く。ボタンは図面に対する % */}
          <Box
            position="relative"
            sx={{
              aspectRatio: `${ratio}`,
              height: `min(100%, calc(100vw / ${ratio}))`,
            }}
          >
            <Image src={image} width="100%" height="100%" objectFit="contain" opacity={0.8} alt={`${floor} 平面図`} />
            {contents.map((c) => (
              <PopupButton
                key={c.id}
                id={c.id}
                position={c.position}
                label={c.booth}
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
