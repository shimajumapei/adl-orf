import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';

interface ScrollDownButtonProps {
    onClick: () => void;
}

const MotionBox = motion(Box);

const ScrollDownButton: React.FC<ScrollDownButtonProps> = ({ onClick }) => {
    const buttonStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        opacity: 0.7,
        transition: 'opacity 0.3s ease',
        _hover: {
            opacity: 1,
        }
    };

    return (
        <MotionBox
            sx={buttonStyle}
            onClick={onClick}
            animate={{
                y: [0, 6, 0],
            }}
            transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
            }}
        >
            <Text fontSize="12px" fontWeight="600" color="gray.600" letterSpacing="0.08em">
                2F
            </Text>
            <ChevronDownIcon boxSize={6} color="gray.600" />
        </MotionBox>
    );
};

export default ScrollDownButton;