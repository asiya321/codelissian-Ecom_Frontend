import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import fifthVirus from "assets/Images/fifthVirus.png";
import firstVirus from "assets/Images/firstVirus.png";
import forthVirus from "assets/Images/forthVirus.png";
import secondVirus from "assets/Images/secondVirus.png";
import thirdVirus from "assets/Images/thirdVirus.png";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const dataImage = [
  {
    id: "0a3c55fe-1870-467f-b652-61c11877b7a6",
    image: firstVirus,
  },
  {
    id: "b0506a87-d25c-4f94-9351-8e6d64fa3f37",
    image: secondVirus,
  },
  {
    id: "d87521ac-dfec-4595-a569-ef442cdcbe6a",
    image: thirdVirus,
  },
  {
    id: "942e6f7d-3aff-4d59-aae1-a559ab20b585",
    image: forthVirus,
  },
  {
    id: "68884696-9bfe-42c2-864c-2eca54d173b4",
    image: fifthVirus,
  },
];

const DP_URL = "https://ecom-server-v1.vercel.app";

export default function PriceCard() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const isXs = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isMobile = useMediaQuery("(max-width:600px)");
  const isTablet = useMediaQuery("(min-width:601px) and (max-width:960px)");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${DP_URL}/products?categoryId&brandId&page&limit`,
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleGoToProduct = () => {
    navigate("/product-detail");
  };

  return (
    <div style={{ marginTop: "45px", padding: "52px 0px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: { md: "1.75rem", xs: "16px" },
            fontWeight: "bold",
            textAlign: "start",
            marginBottom: 3,
          }}
        >
          Today's best deals
        </Typography>
        <Button
          sx={{
            fontSize: { md: "18px", xs: "12px" },
            fontWeight: 700,
            textAlign: "start",
            textTransform: "capitalize",
            marginBottom: 4,
            color: "#F94C10",
            textDecoration: "underline",
          }}
        >
          View All
        </Button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: 4,
          overflowX: "auto",
          alignItems: "center",
          marginLeft: isXs ? "0px" : "-50px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <ChevronLeftIcon
            sx={{ color: "gray", display: { md: "block", xs: "none" } }}
          />
        </div>
        {products?.rows?.slice(0, isXs ? 2 : 5).map((product) => (
          <Card
            key={product.id}
            onClick={handleGoToProduct}
            sx={{
              display: "flex",
              flexDirection: "column",
              borderRadius: "8px",
              width: "300px",
              height: { md: "370px", xs: "330px" },
              padding: "8px",
            }}
          >
            <CardHeader
              title="Sale"
              titleTypographyProps={{
                sx: {
                  fontSize: "14px",
                  fontFamily: "Assistant",
                  fontWeight: "bold",
                  color: "white",
                  textAlign: "center",
                  mt: "20px",
                  lineHeight: "24px",
                  paddingX: "8px",
                },
              }}
              sx={{
                backgroundColor: "#F94C10",
                color: "white",
                height: "20px",
                width: "fit-content",
                fontSize: "14px",
                fontFamily: "Assistant",
                fontWeight: "bold",
                padding: { md: "8px", xs: "4px" },
                textAlign: "center",
                borderRadius: "4px",
              }}
              subheader={<Badge variant="dot" />}
            />

            <CardMedia
              component="img"
              sx={{
                height: { md: "200px", xs: "121px" },
                objectFit: "cover",
                mt: "20px",
                weight: { md: "200px", xs: "121px" },
              }}
              image={
                dataImage.find((item) => item.id === product.productId)
                  ?.image || ""
              }
              alt="Product Image"
            />
            <CardContent sx={{ height: "100px", overflow: "hidden" }}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: "bold",
                  fontSize: { md: "16px", xs: "12px" },
                  width: "100%",
                  height: "42px",
                  marginBottom: "16px",
                }}
              >
                {product.name}
              </Typography>
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: { md: "0px", xs: "35px" },
                }}
              >
                <Stack
                  sx={{
                    display: "flex",
                    flexDirection: { md: "row", xs: "column" },
                    justifyContent: {
                      md: "space-between",
                      xs: "space-between",
                    },
                  }}
                >
                  <div>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: "bold",
                        fontSize: { md: "16px", xs: "12px" },
                        fontFamily: "Assistant",
                        display: "flex",
                        marginRight: { md: "0px", xs: "10px" },
                        flexDirection: { md: "row", xs: "column" },
                        justifyContent: {
                          md: "space-between",
                          xs: "flex-start",
                        },
                        alignItems: "flex-start",
                      }}
                    >
                      ₹{product.marketPrice}
                      <span
                        style={{
                          fontWeight: "bold",
                          textDecoration: "line-through",
                          color: "#EF0425",

                          fontSize: { md: "14px", xs: "12px" },
                          fontFamily: "Assistant",
                        }}
                      >
                        ₹{product.actualPrice}
                      </span>
                    </Typography>
                  </div>
                </Stack>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    minWidth: { md: "93px", xs: "72px" },
                    height: { md: "32px", xs: "34px" },
                    borderRadius: "4px",
                    fontSize: { md: "16px", xs: "12px" },
                    fontFamily: "Assistant",
                    fontWeight: "bold",
                  }}
                >
                  {isMobile
                    ? "Add"
                    : isTablet
                    ? "Add to the cart"
                    : "Add to cart"}
                </Button>
              </Stack>
            </CardContent>
          </Card>
        ))}
        <div style={{ display: "flex", alignItems: "center" }}>
          <ChevronRightIcon
            sx={{ color: "gray", display: { md: "block", xs: "none" } }}
          />
        </div>
      </div>
    </div>
  );
}
