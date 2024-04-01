import { Button, Grid, Typography, useMediaQuery } from "@mui/material";
import B10Image from "assets/Images/B10Image.png";
import B1Image from "assets/Images/B1Image.png";
import B2Image from "assets/Images/B2Image.png";
import B3Image from "assets/Images/B3Image.png";
import B4Image from "assets/Images/B4Image.png";
import B5Image from "assets/Images/B5Image.png";
import B6Image from "assets/Images/B6Image.png";
import B7Image from "assets/Images/B7Image.png";
import B8Image from "assets/Images/B8Image.png";
import B9Image from "assets/Images/B9Image.png";
import axios from "axios";
import { useEffect, useState } from "react";

const data = [
  {
    id: "d6f87fd9-636d-4f6b-ae16-9d1833feb6a8",
    image: B1Image,
  },
  {
    id: "42baaee0-cdb3-4752-94f0-508a1cb33495",
    image: B2Image,
    label: "Nikon",
  },
  {
    id: "271d2bab-4317-4845-b7c4-c8404b0955fd",
    image: B3Image,
    label: "Panasonic",
  },
  {
    id: "271d2bab-4317-4845-b7c4-c8404b0955fd",
    image: B4Image,
    label: "Sony",
  },
  {
    id: "f54c8610-b0fc-4589-9be7-b8a3e4c8cccd",
    image: B5Image,
    label: "Fujifilm",
  },
  {
    id: "75f2f386-f9cc-432b-b607-e1848fec435c",
    image: B6Image,
    label: "Sony",
  },
  {
    id: "658fcbb8-1698-47d4-b75f-80f2f88f4b31",
    image: B7Image,
    label: "Sony",
  },
  {
    id: "6c33e3c2-76e7-425c-8bed-8e35e29a4ba7",
    image: B8Image,
    label: "Sony",
  },
  {
    id: "c5ee1e70-06bd-440e-8b79-cbd710da5b02",
    image: B9Image,
    label: "Sony",
  },
  {
    id: "c2235254-67ed-4633-8885-0fe174337d9a",
    image: B10Image,
    label: "Sony",
  },
];

const DP_URL = "https://ecom-server-v1.vercel.app";

export default function SponsoredCard() {
  const [brands, setBrands] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const isXs = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${DP_URL}/brands?page=1&limit=10`);
        setBrands(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [page, limit]);

  console.log("brands", brands);

  return (
    <div
      style={{ marginTop: "45px", padding: { md: "52px 0px", xs: "32px 0px" } }}
    >
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
          Choose by brands
        </Typography>
        <Button
          sx={{
            fontSize: { md: "18px", xs: "12px" },
            fontWeight: 700,
            color: "#F94C10",
            textDecoration: "underline",
            display: { md: "none", xs: "flex" },
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
      <Grid container spacing={2}>
        {brands?.rows?.map((brand, index) => {
          const matchedData = data.find((item) => item.id === brand.brandId);
          return (
            <Grid item xs={6} sm={4} md={2.4} key={index}>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  width: { md: "192px", xs: "156px" },
                  padding: "16px",
                  backgroundColor: "#EEEEEE",
                  color: "black",
                  boxShadow: "none",
                  fontFamily: "Assitant",
                  fontWeight: { md: "bold", xs: "semi-bold" },
                  fontSize: { md: "16px", xs: "14px" },
                }}
                startIcon={
                  <img
                    alt="user"
                    src={matchedData ? matchedData.image : ""}
                    style={{
                      width: isXs ? "33px" : "56px",
                      height: isXs ? "21px" : "56px",
                    }}
                  />
                }
              >
                {brand.name}
              </Button>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
