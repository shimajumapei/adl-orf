import React, { useRef } from 'react';
import { Box, Image, Fade, Heading, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import Floor1 from 'image/1f.png';
import Floor2 from 'image/2f.png';
import ADLLogo from 'image/ADLLogo.png';
import ErikaLabLogo from 'image/ErikaLabLogo.png';
import ScrollDownButton from '../../global/components/ScrollDownButton';
import { floorPath } from '../../global/Routes';
import { GUTTER } from '../../global/layout';

interface homeProp {
    headerHeight: number;
}

// 全体図（994 x 1560）の縦横比
const PLAN_RATIO = 994 / 1560;
const LABEL_HEIGHT = 56; // 「1F」見出しの行
const CUE_HEIGHT = 64; // 下の「2F ∨」

interface Spot {
    x: number; // 全体図に対する %（左から）
    y: number; // 全体図に対する %（上から）
    logo: string;
    label: string;
    to: string;
    wide?: boolean;
}

const SpotButton: React.FC<Spot> = ({ x, y, logo, label, to, wide }) => {
    const navigate = useNavigate();
    return (
        <Box
            as="button"
            onClick={() => navigate(to)}
            aria-label={`${label}へ`}
            position="absolute"
            left={`${x}%`}
            top={`${y}%`}
            transform="translate(-50%, -50%)"
            width="56px"
            height="56px"
            borderRadius="50%"
            backgroundColor="white"
            border="1px solid"
            borderColor="gray.300"
            boxShadow="0 1px 4px rgba(0,0,0,0.12)"
            display="flex"
            alignItems="center"
            justifyContent="center"
            transition="transform 0.15s ease"
            _hover={{ transform: 'translate(-50%, -50%) scale(1.06)' }}
            sx={{
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    inset: '-1px',
                    borderRadius: '50%',
                    border: '2px solid',
                    borderColor: 'gray.400',
                    animation: 'spot-pulse 2s ease-out infinite',
                    pointerEvents: 'none',
                },
                '@keyframes spot-pulse': {
                    '0%': { transform: 'scale(1)', opacity: 0.7 },
                    '100%': { transform: 'scale(1.45)', opacity: 0 },
                },
            }}
        >
            <Image src={logo} alt="" width={wide ? '44px' : '40px'} height="auto" filter="invert(1)" />
        </Box>
    );
};

interface FloorSectionProps {
    floor: string;
    caption: string;
    plan: string;
    spots: Spot[];
    height: number;
    sectionRef?: React.Ref<HTMLDivElement>;
    children?: React.ReactNode;
}

const FloorSection: React.FC<FloorSectionProps> = ({ floor, caption, plan, spots, height, sectionRef, children }) => {
    // 見出しと下の案内を除いた高さに、図面がちょうど収まる大きさ
    const planHeight = Math.max(240, height - LABEL_HEIGHT - CUE_HEIGHT);
    return (
        <Box ref={sectionRef} height={`${height}px`} display="flex" flexDirection="column" alignItems="center" justifyContent="center" paddingX={`${GUTTER}px`} sx={{ scrollSnapAlign: 'start' }}>
            {/* 見出しと図面を同じ幅の列にそろえる */}
            <Box width={`min(${Math.round(planHeight * PLAN_RATIO)}px, 100%)`} display="flex" flexDirection="column">
                <Box height={`${LABEL_HEIGHT}px`} display="flex" alignItems="center" gap="10px">
                    <Heading as="h2" fontSize="20px" fontWeight="700" lineHeight="1">{floor}</Heading>
                    <Text fontSize="12px" color="gray.500">{caption}</Text>
                </Box>
                <Box position="relative" width="100%" sx={{ aspectRatio: `${PLAN_RATIO}` }}>
                    <Image src={plan} width="100%" height="100%" opacity={0.75} alt={`${floor} 平面図`} />
                    {spots.map(s => <SpotButton key={s.label} {...s} />)}
                </Box>
            </Box>
            <Box height={`${CUE_HEIGHT}px`} display="flex" justifyContent="center" alignItems="center">
                {children}
            </Box>
        </Box>
    );
};

const Home: React.FC<homeProp> = ({ headerHeight }) => {
    const floor2Ref = useRef<HTMLDivElement>(null);
    const sectionHeight = window.innerHeight - headerHeight;

    return (
        <Fade in={true} transition={{ enter: { duration: 0.3 }, exit: { duration: 0.3 } }}>
            <Box paddingTop={`${headerHeight}px`}>
                <FloorSection
                    floor="1F"
                    caption="ロゴをタップすると各展示へ"
                    plan={Floor1}
                    height={sectionHeight}
                    spots={[
                        { x: 58.9, y: 72.7, logo: ADLLogo, label: '1F ADL 展示エリア', to: floorPath('1F') },
                        { x: 40.1, y: 21.5, logo: ErikaLabLogo, label: 'Atelier 1 エリカラボ', to: floorPath('A1'), wide: true },
                    ]}
                >
                    <ScrollDownButton onClick={() => floor2Ref.current?.scrollIntoView({ behavior: 'smooth' })} />
                </FloorSection>
                <FloorSection
                    floor="2F"
                    caption="ロゴをタップすると展示へ"
                    plan={Floor2}
                    height={sectionHeight}
                    sectionRef={floor2Ref}
                    spots={[{ x: 33.4, y: 65.1, logo: ADLLogo, label: '2F ADL 展示エリア', to: floorPath('2F') }]}
                />
            </Box>
        </Fade>
    );
};

export default Home;
