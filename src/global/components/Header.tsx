import { Box, Image } from '@chakra-ui/react';
import Title from 'image/Title.png';
import { SetStateAction, useEffect, useRef } from 'react';
import { GUTTER } from '../layout';

interface HeaderProps {
  setHeaderHeight: React.Dispatch<SetStateAction<number>>;
}

const Header: React.FC<HeaderProps> = ({ setHeaderHeight }) => {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      if (headerRef.current) setHeaderHeight(headerRef.current.offsetHeight);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [setHeaderHeight]);

  const handleOnLoad = () => {
    if (headerRef.current) setHeaderHeight(headerRef.current.offsetHeight);
  };

  return (
    <Box
      ref={headerRef}
      position="fixed"
      top={0}
      left={0}
      width="100%"
      zIndex={1000}
      backgroundColor="white"
      borderBottom="1px solid"
      borderColor="gray.200"
      paddingX={`${GUTTER}px`}
      paddingY="12px"
      display="flex"
      justifyContent="center"
    >
      <Image src={Title} width="100%" maxWidth="420px" onLoad={handleOnLoad} alt="CULTIVATING ARCHITECTURES" />
    </Box>
  );
};

export default Header;
