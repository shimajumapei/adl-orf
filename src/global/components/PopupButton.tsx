import React from 'react';
import { Button, Text } from '@chakra-ui/react';

interface PopupButtonProps {
    id: number;
    position: { x: number; y: number };
    label: string;
    caption?: string;
    setCurrentModal: React.Dispatch<React.SetStateAction<number>>;
}

// 親要素（position: relative）に対して % で配置する
const PopupButton: React.FC<PopupButtonProps> = ({ id, position, label, caption, setCurrentModal }) => {
    const buttonStyle = {
        position: 'absolute',
        top: `${position.y}%`,
        left: `${position.x}%`,
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '36px',
        height: '36px',
        minWidth: 0,
        borderRadius: '50%',
        backgroundColor: 'white',
        border: '1.5px solid',
        borderColor: 'gray.800',
        boxShadow: '0 1px 3px rgba(0,0,0,0.15)',
        zIndex: 2,
        '&::before': {
            content: '""',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            border: '2px solid',
            borderColor: 'gray.600',
            animation: 'pulse-ring 2s ease-out infinite',
            pointerEvents: 'none'
        },
        '@keyframes pulse-ring': {
            '0%': { transform: 'translate(-50%, -50%) scale(1)', opacity: 0.8 },
            '100%': { transform: 'translate(-50%, -50%) scale(1.5)', opacity: 0 }
        }
    } as const;

    return (
        <Button onClick={() => setCurrentModal(id)} sx={buttonStyle} variant='unstyled' aria-label={`${label} ${caption ?? ''}`}>
            <Text fontWeight={700} fontSize="13px" lineHeight="1" color="gray.900">{label}</Text>
            {caption && <Text fontSize="10px" lineHeight="1" whiteSpace="nowrap" backgroundColor="whiteAlpha.800">{caption}</Text>}
        </Button>
    );
};

export default PopupButton;
