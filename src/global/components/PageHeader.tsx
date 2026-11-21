import React from "react";
import { Box, IconButton, Heading, Image, Text } from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router-dom";
import { NavigationLeft } from "./NavigationLeft";
import ADLLogo from 'image/ADLLogo.png';
import ErikaLabLogo from 'image/ErikaLabLogo.png';
import { GUTTER, SUBBAR_HEIGHT } from "../layout";

interface PageHeaderProps {
  headerHeight: number;
}

const PAGES: Record<string, { title: string; sub: string; logo: string; logoAlt: string }> = {
  '/adl-orf/1f': { title: '1F', sub: 'ADL 展示エリア', logo: ADLLogo, logoAlt: 'ADL' },
  '/adl-orf/2f': { title: '2F', sub: 'ADL 展示エリア', logo: ADLLogo, logoAlt: 'ADL' },
  '/adl-orf/atelier1': { title: 'Atelier 1', sub: 'エリカラボ', logo: ErikaLabLogo, logoAlt: 'エリカラボ' },
};

const PageHeader: React.FC<PageHeaderProps> = ({ headerHeight }) => {
  const navigate = useNavigate();
  const location = useLocation();
  // サーバーによっては /adl-orf/1f/ のように末尾に / が付く
  const pathname = location.pathname.replace(/\/+$/, '');
  const page = PAGES[pathname];
  if (!page) return null;

  return (
    <Box
      position="fixed"
      top={`${headerHeight}px`}
      left={0}
      width="100%"
      height={`${SUBBAR_HEIGHT}px`}
      backgroundColor="white"
      borderBottom="1px solid"
      borderColor="gray.100"
      display="flex"
      alignItems="center"
      paddingLeft="4px"
      paddingRight={`${GUTTER}px`}
      zIndex={999}
    >
      <IconButton
        onClick={() => navigate('/adl-orf')}
        variant="ghost"
        aria-label="会場マップに戻る"
        icon={<NavigationLeft />}
        width="40px"
        height="40px"
        minWidth="40px"
        display="flex"
        alignItems="center"
        justifyContent="center"
      />
      <Box display="flex" alignItems="baseline" gap="8px" flex="1" minWidth={0} marginLeft="4px">
        <Heading as="h1" fontSize="18px" fontWeight="700" lineHeight="1">
          {page.title}
        </Heading>
        <Text fontSize="12px" color="gray.500" noOfLines={1}>{page.sub}</Text>
      </Box>
      <Image src={page.logo} alt={page.logoAlt} height="20px" width="auto" maxWidth="72px" objectFit="contain" filter="invert(1)" />
    </Box>
  );
};

export default PageHeader;
