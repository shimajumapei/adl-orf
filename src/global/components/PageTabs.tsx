import React from "react";
import { Tabs, TabList, Tab } from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router-dom";

const PageTabs: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    { label: "1F", path: "/adl-orf/1f" },
    { label: "2F", path: "/adl-orf/2f" },
    { label: "Atelier 1", path: "/adl-orf/atelier1" },
  ];

  // Determine active tab index based on current path
  const getActiveIndex = () => {
    const currentPath = location.pathname.replace(/\/+$/, '');
    const index = tabs.findIndex((tab) => tab.path === currentPath);
    return index !== -1 ? index : 0;
  };

  const handleTabChange = (index: number) => {
    navigate(tabs[index].path, { state: { shouldFade: true } });
  };

  const tabsContainerStyle = {
    position: "fixed",
    bottom: "max(16px, env(safe-area-inset-bottom))",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 100,
    backgroundColor: "gray.100",
    border: "1px solid",
    borderColor: "gray.200",
    borderRadius: "10px",
    padding: "3px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
  };

  return (
    <Tabs
      index={getActiveIndex()}
      onChange={handleTabChange}
      variant="enclosed"
      sx={tabsContainerStyle}
    >
      <TabList justifyContent="center" border="none">
        {tabs.map((tab, index) => (
          <Tab
            key={tab.path}
            fontSize="13px"
            height="34px"
            fontWeight="semibold"
            borderRadius="7px"
            whiteSpace="nowrap"
            color="gray.600"
            paddingX="16px"
            _selected={{
              color: "gray.800",
              backgroundColor: "white",
              borderColor: "transparent",
              boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
            }}
            margin="0"
          >
            {tab.label}
          </Tab>
        ))}
      </TabList>
    </Tabs>
  );
};

export default PageTabs;
