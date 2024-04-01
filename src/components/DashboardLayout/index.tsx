import { Box, CircularProgress, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { DashboardNavbar } from "./DashboardNavbar";
import LayoutFooter from "./LayoutFooter";

const DashboardLayoutRoot: any = styled("div")(({ theme }) => {
  return {
    display: "flex",
    flex: "1 1 auto",
    maxWidth: "100%",
    paddingTop: 5,

    [theme.breakpoints.up("lg")]: {
      paddingLeft: "100px",
    },
  };
});

function DashboardLayout(props: any) {
  const { children, isLoading } = props;
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <>
      <DashboardNavbar
        onSidebarOpen={() => {
          return setSidebarOpen(true);
        }}
      />
      <DashboardLayoutRoot>
        {isLoading ? (
          <Container>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
              }}
            >
              <CircularProgress color="info" size={20} />
            </Box>
          </Container>
        ) : (
          <Box
            component="main"
            sx={{
              display: "flex",
              flex: "1 1 auto",
              flexDirection: "column",
              width: "100%",
              paddingTop: 2,
              flexGrow: 1,
              // py: 8,
              px: { md: "59px", xs: "10px" },
            }}
          >
            {children}
          </Box>
        )}
      </DashboardLayoutRoot>

      <LayoutFooter isLoading={isLoading} />
    </>
  );
}

export default DashboardLayout;
