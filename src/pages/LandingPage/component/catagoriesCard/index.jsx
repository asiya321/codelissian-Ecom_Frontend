import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Box, Button, Stack, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const DP_URL = "https://ecom-server-v1.vercel.app";

function CatagoriesCard() {
  const [products, setProducts] = useState([]);
  //   const [page, setPage] = useState(1);
  //   const [limit, setLimit] = useState([]);

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${DP_URL}/categories?page=${page}&limit=${limit}`,
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [page, limit]);

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  console.log("product--->", products);
  return (
    <Box>
      <Typography
        sx={{
          fontFamily: "Assistant ",
          fontSize: { md: "24px", xs: "16px" },
          fontWeight: "Bold",
        }}
      >
        Categories
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          mt: "48px",
          ml: "-20px",
        }}
      >
        <ChevronLeftIcon
          sx={{ color: "gray", display: { md: "block", xs: "none" } }}
        />

        <Stack
          display={{ md: "flex", xs: "none" }}
          flexDirection={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          spacing={{ md: 0, xs: 1 }}
          gap={{ md: "80px", xs: "8px" }}
          sx={{ ml: "10px", mr: "10px" }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#064388",
              color: "white",
              mr: "40px",
              // marginTop: "8px",

              marginBottom: { md: 0, xs: "8px" },
              minWidth: { md: "194px", xs: "156" },
              height: { md: "127px", xs: "100px" },
              padding: {
                md: "71px 52px 71px 52px",
                xs: "41px 15px 41px 15px",
              },
              fontSize: { md: "16px", xs: "14px" },
              fontFamily: "Assistant",
              fontWeight: "bold",
              lineHeight: "32px",
            }}
          >
            Antivirus
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#CF3C33",
              color: "white",
              mr: "40px",
              minWidth: { md: "194px", xs: "156" },
              height: { md: "127px", xs: "100px" },
              padding: {
                md: "71px 52px 71px 52px",
                xs: "41px 15px 41px 15px",
              },
              fontSize: { md: "16px", xs: "14px" },
              fontFamily: "Assistant",
              fontWeight: "bold",
              lineHeight: "32px",
            }}
          >
            Internet Security
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#100E6A",
              color: "white",
              mr: "40px",
              minWidth: { md: "194px", xs: "156" },
              height: { md: "127px", xs: "100px" },
              padding: {
                md: "71px 52px 71px 52px",
                xs: "41px 15px 41px 15px",
              },
              fontSize: { md: "16px", xs: "14px" },
              fontFamily: "Assistant",
              fontWeight: "bold",
            }}
          >
            Mobile Security
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#690971",
              color: "white",
              mr: "40px",
              minWidth: { md: "194px", xs: "156" },
              height: { md: "127px", xs: "100px" },
              padding: {
                md: "71px 52px 71px 52px",
                xs: "41px 15px 41px 15px",
              },
              fontSize: { md: "16px", xs: "14px" },
              fontFamily: "Assistant",
              fontWeight: "bold",
              lineHeight: "32px",
            }}
          >
            Total Security
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#0E4205",
              color: "white",
              mr: "40px",
              minWidth: { md: "194px", xs: "156" },
              height: { md: "127px", xs: "100px" },
              padding: {
                md: "71px 52px 71px 52px",
                xs: "41px 15px 41px 15px",
              },
              fontSize: { md: "16px", xs: "14px" },
              fontFamily: "Assistant",
              fontWeight: "bold",
              lineHeight: "32px",
            }}
          >
            Renewal
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#5C2507",
              color: "white",
              mr: "40px",
              minWidth: { md: "194px", xs: "156" },
              height: { md: "127px", xs: "100px" },
              padding: {
                md: "71px 52px 71px 52px",
                xs: "41px 15px 41px 15px",
              },
              fontSize: { md: "16px", xs: "14px" },
              fontFamily: "Assistant",
              fontWeight: "bold",
              lineHeight: "32px",
            }}
          >
            Windows
          </Button>
        </Stack>

        <Stack
          display={{ md: "none", xs: "flex" }}
          flexDirection={{ xs: "column", md: "row" }}
          justifyContent="center"
          spacing={{ md: 0, xs: 0 }}
          gap={{ md: "80px", xs: "8px" }}
          sx={{ ml: "20px", mr: "10px" }}
        >
          <div style={{ display: "flex", flexDirection: "row", gap: "8px" }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#064388",
                color: "white",
                // mr: "40px",
                flex: 1,
                // marginTop: "8px",

                marginBottom: { md: 0, xs: "8px" },
                minWidth: { md: "194px", xs: "180px" },
                height: { md: "127px", xs: "100px" },
                padding: {
                  md: "71px 52px 71px 52px",
                  xs: "41px 20px 41px 15px",
                },
                fontSize: { md: "16px", xs: "14px" },
                fontFamily: "Assistant",
                fontWeight: "bold",
                lineHeight: "32px",
              }}
            >
              Antivirus
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#CF3C33",
                color: "white",
                flex: 1,

                minWidth: { md: "194px", xs: "180px" },
                height: { md: "127px", xs: "100px" },
                padding: {
                  md: "71px 52px 71px 52px",
                  xs: "41px 15px 41px 15px",
                },
                fontSize: { md: "16px", xs: "14px" },
                fontFamily: "Assistant",
                fontWeight: "bold",
                lineHeight: "32px",
              }}
            >
              Internet Security
            </Button>
          </div>
          <div style={{ display: "flex", flexDirection: "row", gap: "8px" }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#100E6A",
                color: "white",
                flex: 1,
                minWidth: { md: "194px", xs: "156" },
                height: { md: "127px", xs: "100px" },
                padding: {
                  md: "71px 52px 71px 52px",
                  xs: "41px 15px 41px 15px",
                },
                fontSize: { md: "16px", xs: "14px" },
                fontFamily: "Assistant",
                fontWeight: "bold",
              }}
            >
              Mobile Security
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#690971",
                color: "white",
                flex: 1,
                minWidth: { md: "194px", xs: "156" },
                height: { md: "127px", xs: "100px" },
                padding: {
                  md: "71px 52px 71px 52px",
                  xs: "41px 15px 41px 15px",
                },
                fontSize: { md: "16px", xs: "14px" },
                fontFamily: "Assistant",
                fontWeight: "bold",
                lineHeight: "32px",
              }}
            >
              Total Security
            </Button>
          </div>
          <div style={{ display: "flex", flexDirection: "row", gap: "8px" }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#0E4205",
                color: "white",
                flex: 1,
                minWidth: { md: "194px", xs: "156" },
                height: { md: "127px", xs: "100px" },
                padding: {
                  md: "71px 52px 71px 52px",
                  xs: "41px 15px 41px 15px",
                },
                fontSize: { md: "16px", xs: "14px" },
                fontFamily: "Assistant",
                fontWeight: "bold",
                lineHeight: "32px",
              }}
            >
              Renewal
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#5C2507",
                color: "white",
                flex: 1,
                minWidth: { md: "194px", xs: "156" },
                height: { md: "127px", xs: "100px" },
                padding: {
                  md: "71px 52px 71px 52px",
                  xs: "41px 15px 41px 15px",
                },
                fontSize: { md: "16px", xs: "14px" },
                fontFamily: "Assistant",
                fontWeight: "bold",
                lineHeight: "32px",
              }}
            >
              Windows
            </Button>
          </div>
        </Stack>

        <ChevronRightIcon
          sx={{ color: "gray", display: { md: "block", xs: "none" } }}
        />
      </Box>
    </Box>
  );
}

export default CatagoriesCard;
