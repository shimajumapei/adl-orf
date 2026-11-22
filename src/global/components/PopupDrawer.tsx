import React from 'react';
import {
    Drawer,
    DrawerOverlay,
    DrawerContent,
    Button,
    Box,
    Image,
    Heading,
    Text,
    Link,
} from '@chakra-ui/react';
import { NavigationLeft } from './NavigationLeft';
import { PopupContent } from '../../notion/types';
import { GUTTER } from '../layout';

interface PopupDrawerProps {
    currentModal: number;
    setCurrentModal: React.Dispatch<React.SetStateAction<number>>;
    popupContents: PopupContent[];
    onNextModal: () => void;
    onPrevModal: () => void;
}

const BAR_HEIGHT = 56;
const FOOT_HEIGHT = 56;

// 見出しの列（左に小さな見出し、右に中身）
const Row: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => (
    <Box display="grid" gridTemplateColumns="48px 1fr" columnGap="12px" borderTop="1px solid" borderColor="gray.100" paddingTop="12px">
        <Text fontSize="10px" color="gray.500" letterSpacing="0.15em" paddingTop="4px">{label}</Text>
        <Box minWidth={0}>{children}</Box>
    </Box>
);

const PopupDrawer: React.FC<PopupDrawerProps> = ({
    currentModal,
    setCurrentModal,
    popupContents,
    onNextModal,
    onPrevModal,
}) => {
    const isOpen = currentModal > 0;
    const c = popupContents.find(content => content.id === currentModal);
    const handleOnClose = () => setCurrentModal(0);

    if (!c) return null;
    const floorLabel = c.floor === 'A1' ? 'Atelier 1' : c.floor;

    return (
        <Drawer isOpen={isOpen} onClose={handleOnClose} placement="bottom" size="full">
            <DrawerOverlay />
            <DrawerContent height="100dvh" position="relative" padding={0}>
                {/* 戻る */}
                <Box position="absolute" top={0} left={0} right={0} height={`${BAR_HEIGHT}px`} display="flex" alignItems="center" paddingX="8px" borderBottom="1px solid" borderColor="gray.100" backgroundColor="white" zIndex={2}>
                    <Button onClick={handleOnClose} variant="ghost" height="40px" paddingX="8px" leftIcon={<NavigationLeft />} fontSize="15px" fontWeight="600" color="gray.700">
                        {floorLabel}の平面図に戻る
                    </Button>
                </Box>

                {/* 本文（スクロール） */}
                <Box position="absolute" top={`${BAR_HEIGHT}px`} bottom={`${FOOT_HEIGHT}px`} left={0} right={0} overflowY="auto">
                    <Box maxWidth="640px" marginX="auto" paddingBottom="32px">
                        {/* 06: 画像を端から端まで大きく */}
                        {c.modalImage && (
                            <Box backgroundColor="#f4f4f1" borderBottom="1px solid" borderColor="gray.100" height="min(52vh, 480px)" display="flex" alignItems="center" justifyContent="center">
                                <Image src={c.modalImage} alt={c.modalTitle} maxWidth="100%" maxHeight="100%" objectFit="contain" />
                            </Box>
                        )}

                        {/* 07: 見出しの列 */}
                        <Box paddingX={`${GUTTER + 8}px`} paddingTop="24px" display="grid" rowGap="14px">
                            <Row label="作品">
                                <Heading as="h2" fontSize="20px" fontWeight="700" lineHeight="1.4" whiteSpace="pre-line" sx={{ textWrap: 'balance' }}>
                                    {c.modalTitle}
                                </Heading>
                            </Row>
                            <Row label="氏名">
                                <Text fontSize="14px" fontWeight="600" letterSpacing="0.04em">
                                    {c.name}{c.grade && <Text as="span" fontWeight="400" color="gray.600">　{c.grade}</Text>}
                                </Text>
                            </Row>
                            <Row label="番号">
                                <Text fontSize="14px">{c.booth}　<Text as="span" color="gray.600">{floorLabel}</Text></Text>
                            </Row>
                            {c.modalContent && (
                                <Row label="概要">
                                    <Text fontSize="13px" lineHeight="1.9" color="gray.700" letterSpacing="0.02em" whiteSpace="pre-wrap">{c.modalContent}</Text>
                                </Row>
                            )}
                            {c.contentUrl && (
                                <Row label="リンク">
                                    <Link href={c.contentUrl} isExternal fontSize="12px" color="gray.800" textDecoration="underline" sx={{ wordBreak: 'break-all' }}>
                                        {c.contentUrl}
                                    </Link>
                                </Row>
                            )}
                        </Box>
                    </Box>
                </Box>

                {/* 前後の作品 */}
                <Box position="absolute" bottom={0} left={0} right={0} height={`${FOOT_HEIGHT}px`} display="flex" justifyContent="space-between" alignItems="center" paddingX="8px" borderTop="1px solid" borderColor="gray.100" backgroundColor="white" sx={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}>
                    <Button onClick={onPrevModal} variant="ghost" height="40px" fontSize="13px" fontWeight="600" color="gray.700">‹ 前の作品</Button>
                    <Button onClick={onNextModal} variant="ghost" height="40px" fontSize="13px" fontWeight="600" color="gray.700">次の作品 ›</Button>
                </Box>
            </DrawerContent>
        </Drawer>
    );
};

export default PopupDrawer;
