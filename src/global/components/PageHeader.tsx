import React, { useState, useEffect } from "react";
import { Box, IconButton, Heading, Image } from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router-dom";
import { NavigationLeft } from "./NavigationLeft";
import ADLLogo from 'image/ADLLogo.png';

interface PageHeaderProps {
  headerHeight: number;
}

const PageHeader: React.FC<PageHeaderProps> = ({ headerHeight }) => {
  const navigate = useNavigate();
  const location = useLocation();
  // サーバーによっては /adl-orf/1f/ のように末尾に / が付く
  const pathname = location.pathname.replace(/\/+$/, '');
  const [logo, setLogo] = useState<string>(ADLLogo);
  const [pageTitle, setPageTitle] = useState<string>("");

  useEffect(() => {
    // Set logo and title based on route
    if (pathname === '/adl-orf/1f') {
      setLogo(ADLLogo);
      setPageTitle("1F");
    } else if (pathname === '/adl-orf/2f') {
      setLogo(ADLLogo);
      setPageTitle("2F");
    } else {
      setLogo(ADLLogo);
      setPageTitle("");
    }
  }, [pathname]);

  const handleBackClick = () => {
    navigate('/adl-orf');
  };

  // Don't render on home page
  if (pathname === '/adl-orf') {
    return null;
  }

  return (
    <Box
      position="fixed"
      top={headerHeight}
      left={0}
      width="100%"
      backgroundColor="white"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      padding="10px 15px"
      zIndex={999}
    >
      {/* Left side: Back button + Title */}
      <Box display="flex" alignItems="center" gap={4}>
        <IconButton
          onClick={handleBackClick}
          variant="unstyled"
          aria-label="Back"
          icon={<NavigationLeft />}
          display="flex"
          alignItems="center"
          justifyContent="center"
          minWidth="auto"
        />
        <Heading fontSize="xl" fontWeight="600">
          {pageTitle}
        </Heading>
      </Box>

      {/* Right side: Logo */}
      <Image
        src={logo}
        boxSize="40px"
        alt="Logo"
        objectFit="contain"
        filter="invert(1)"
      />
    </Box>
  );
};

export default PageHeader;