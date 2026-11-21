import React, { useEffect, useState, useRef } from'react';
import {Box, Image, Fade, Heading } from '@chakra-ui/react'
import Floor1 from 'image/1f.png'
import Floor2 from 'image/2f.png'
import NavigationButton from '../../global/components/NavigationButton';
import ScrollDownButton from '../../global/components/ScrollDownButton';
import { useNavigate } from 'react-router-dom';
import { floorPath } from '../../global/Routes';
import ADLLogo from 'image/ADLLogo.png'


interface homeProp {
    headerHeight: number
}
const Home: React.FC<homeProp> = ({headerHeight}) => {
    const navigate = useNavigate();

    const viewportSize = {
        width: window.innerWidth,
        height: window.innerHeight,
    }
    const [image1Size, setImage1Size] = useState({
        width: 0,
        height: 0
    })
    const [image1Position, setImage1Position] = useState({
        top: 0,
        left: 0
    })
    const [image2Size, setImage2Size] = useState({
        width: 0,
        height: 0
    })
    const [image2Position, setImage2Position] = useState({
        top: 0,
        left: 0
    })
    const floor1Ref = useRef<HTMLDivElement>(null)
    const floor2Ref = useRef<HTMLDivElement>(null)
    const contentHeight = viewportSize.height - headerHeight
    const contentBox = {
        position: 'absolute',
        top: `${headerHeight}px`,
        width: '100%',
        height: contentHeight * 2,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column'
    }
    const floorBox = {
        width: '100%',
        height: contentHeight,
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }
    const imageStyle = {
        width: '100%',
        height: contentHeight,
        transform: 'scale(1)',
        opacity: 0.7,
    }
    useEffect(() => {
        if (floor1Ref.current) {
          const rect = floor1Ref.current.getBoundingClientRect();
          setImage1Position({ top: rect.top, left: rect.left });
          setImage1Size({ width: rect.width, height: rect.height })
        }
        
    }, [headerHeight]);
    useEffect(() => {
        if (floor2Ref.current) {
          const rect = floor2Ref.current.getBoundingClientRect();
          setImage2Position({ top: rect.top, left: rect.left });
          setImage2Size({ width: rect.width, height: rect.height });
        }
    }, [headerHeight]);

    const handleOnClick1F = () => navigate(floorPath('1F'));
    const handleOnClick2F = () => navigate(floorPath('2F'));

    const handleScrollTo2F = () => {
        if (floor2Ref.current) {
            floor2Ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return(
        <Fade in={true} transition={{enter: {duration: 0.3}, exit: {duration: 0.3}}}>
            <Box sx={contentBox}>
                <Box sx={{ ...floorBox, position: 'relative'}} ref={floor1Ref}>
                    <Heading fontSize="xl" fontWeight="600" position="absolute" top="10px" left="15px">1F</Heading>
                    <Image
                        src={Floor1}
                        style={imageStyle}
                        objectFit={'contain'}
                    />
                    {/* 展示エリアの位置（平面図 350x550 換算） */}
                    <NavigationButton imagePosition={image1Position} imageSize={image1Size} buttonPosition={{width: 206.2, height: 399.9 }} headerHeight={headerHeight} handleOnClick={handleOnClick1F} logo={ADLLogo}/>
                    <Box position="absolute" bottom="20px" left="50%" transform="translateX(-50%)" zIndex={5}>
                        <ScrollDownButton onClick={handleScrollTo2F} />
                    </Box>
                </Box>
                <Box sx={{ ...floorBox, position: 'relative'}} ref={floor2Ref}>
                    <Heading fontSize="xl" fontWeight="600" position="absolute" top="10px" left="15px">2F</Heading>
                    <Image
                        src={Floor2}
                        style={imageStyle}
                        objectFit={'contain'}
                    />
                </Box>
                <NavigationButton imagePosition={image2Position} imageSize={image2Size} buttonPosition={{width: 116.9, height: 358.1 }} headerHeight={headerHeight} handleOnClick={handleOnClick2F} logo={ADLLogo} />
            </Box>
        </Fade>

    )
}

export default Home
