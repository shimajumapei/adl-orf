import React from 'react';
import { Box, Image, Fade, Heading, Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
import Floor1 from 'image/1f.png'
import Floor2 from 'image/2f.png'
import { Floor, PopupContent } from '../../notion/types';
import { floorPath } from '../../global/Routes';

interface homeProp {
    headerHeight: number
    data: PopupContent[]
}

// 各階の全体図（src/image/1f.png / 2f.png）上で、展示エリアのある位置（%）
const EXHIBIT_AREA: Record<Floor, { x: number; y: number }> = {
    '1F': { x: 23.5, y: 62.5 },
    '2F': { x: 30.0, y: 26.5 },
}

const FloorOverview: React.FC<{ floor: Floor; image: string; count: number }> = ({ floor, image, count }) => {
    const navigate = useNavigate();
    const area = EXHIBIT_AREA[floor];
    return (
        <Box width="100%" maxWidth="1000px" paddingX={2} paddingY={4}>
            <Heading fontSize="xl" fontWeight="600" marginBottom={2}>{floor}</Heading>
            <Box position="relative" width="100%">
                <Image src={image} width="100%" opacity={0.7} alt={`${floor} 平面図`} />
                <Button
                    onClick={() => navigate(floorPath(floor), { state: { shouldFade: true } })}
                    position="absolute"
                    top={`${area.y}%`}
                    left={`${area.x}%`}
                    transform="translate(-50%, -50%)"
                    size="sm"
                    colorScheme="blackAlpha"
                    backgroundColor="blackAlpha.800"
                    color="white"
                    borderRadius="full"
                    boxShadow="md"
                >
                    {floor}の展示を見る（{count}）
                </Button>
            </Box>
        </Box>
    )
}

const Home: React.FC<homeProp> = ({ headerHeight, data }) => {
    const count = (floor: Floor) => data.filter(c => c.floor === floor).length;
    return(
        <Fade in={true} transition={{enter: {duration: 0.3}, exit: {duration: 0.3}}}>
            <Box
                paddingTop={`${headerHeight}px`}
                paddingBottom="40px"
                display="flex"
                flexDirection="column"
                alignItems="center"
            >
                <FloorOverview floor="1F" image={Floor1} count={count('1F')} />
                <FloorOverview floor="2F" image={Floor2} count={count('2F')} />
            </Box>
        </Fade>
    )
}

export default Home
