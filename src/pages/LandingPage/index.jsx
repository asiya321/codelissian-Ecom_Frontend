import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  Box,
  Button,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import carImage from "assets/Images/carImage.png";
import FirstImage from "assets/Images/firstImage.png";
import lightIcon from "assets/Images/moonLightIcon.png";
import onlinePay from "assets/Images/onlinePayIcon.png";
import guardIcon from "assets/Images/saveGuard.png";
import supportIcon from "assets/Images/supportIcon.png";
import DashboardLayout from "components/DashboardLayout";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CatagoriesCard from "./component/catagoriesCard/index";
import DiscountCard from "./component/discountCard";
import PriceCard from "./component/priceCard";
import SponsoredCard from "./component/sponsoredCard";

export default function LandingPage() {
  const isXs = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <DashboardLayout>
      <Grid container spacing={1}>
        <Grid item sx={{ display: { md: "block", xs: "none" } }}>
          <Carousel
            autoPlay
            interval={2000}
            showThumbs={false}
            stopOnHover={false}
            infiniteLoop
          >
            <div>
              <img
                alt="user"
                src={carImage}
                style={{ width: "100%", height: "573px" }}
              />
            </div>
            <div
              style={{
                display: "flex",
                padding: "59px 0px",
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            >
              <Grid
                item
                md={7}
                xs={12}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Assistant",
                    fontSize: "48px",
                    fontWeight: 600,
                    color: "transparent",
                    backgroundImage:
                      "linear-gradient(to right, #4281D2, #EF0425)", // Apply linear gradient as background image
                    WebkitBackgroundClip: "text", // Clip text to the background area
                    backgroundClip: "text", // Clip text to the background area
                    display: "flex",
                    justifyContent: "flex-start", // Ensure text displays inline
                  }}
                >
                  CyberGuard KeyHub
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Assistant",
                    fontSize: "48px",
                    fontWeight: 700,
                    lineHeight: "72px",
                    display: "flex",
                    justifyContent: "flex-start",
                  }}
                >
                  Your Ultimate Source for Antivirus
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Assistant",
                    fontSize: "48px",
                    fontWeight: 700,
                    lineHeight: "72px",
                    display: "flex",
                    justifyContent: "flex-start",
                  }}
                >
                  Protection
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Assistant",
                    fontSize: "16px",
                    fontWeight: 500,
                    lineHeight: "24px",
                    display: "flex",
                    justifyContent: "flex-start",
                  }}
                >
                  Viruses are just digital party crashers, and we've got the
                  bouncers! Imagine antivirus product keys as the velvet ropes
                  of your device's
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Assistant",
                    fontSize: "16px",
                    fontWeight: 500,
                    lineHeight: "24px",
                    display: "flex",
                    justifyContent: "flex-start",
                  }}
                >
                  nightclub – only the cool and safe ones get in. Get ready to
                  party on with your devices, minus the malware mayhem!
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "primary",
                    width: "168px",
                    padding: "12px 16px",
                    display: "flex",
                    justifyContent: "space-between",
                    color: "white",
                    borderRadius: "8px",
                    marginTop: "50px",
                    fontSize: "16px",
                    fontFamily: "Assistant",
                    fontWeight: "Bold",
                  }}
                  endIcon={<ArrowForwardIcon />}
                >
                  Shop now
                </Button>
              </Grid>
              <Grid item md={4} xs={12}>
                <img
                  alt="user"
                  src={FirstImage}
                  style={{ width: "500px", height: "354px" }}
                />
              </Grid>
            </div>
          </Carousel>
        </Grid>
        <Grid item sx={{ display: { md: "none", xs: "block" } }}>
          <div style={{ width: "360px", height: "161px" }}>
            <img
              alt="user"
              src={carImage}
              style={{ width: "98%", height: "100%" }}
            />
          </div>
        </Grid>
        <Grid item md={12} xs={12} sx={{ mt: "59px" }}>
          <Box
            sx={{
              backgroundColor: "#EEEEEE",
              width: "100%",

              display: "flex",
              justifyContent: { md: "space-between", xs: "space-evenly" },
              padding: { md: "29px 20px", xs: "8.5px 0px" },
            }}
          >
            <Stack sx={{ display: "flex", flexDirection: "row" }}>
              <img
                alt="user"
                src={lightIcon}
                style={{
                  width: isXs ? "20px" : "40px",
                  height: isXs ? "20px" : "40px",
                }}
              />
              <Typography
                sx={{
                  mt: { md: 1, xs: "0px" },
                  ml: 1,
                  fontSize: { md: "24px", xs: "12px" },
                }}
              >
                Instant Delivery
              </Typography>
            </Stack>
            <Stack sx={{ display: "flex", flexDirection: "row" }}>
              <img
                alt="user"
                src={guardIcon}
                style={{
                  width: isXs ? "20px" : "40px",
                  height: isXs ? "20px" : "40px",
                }}
              />
              <Typography
                sx={{
                  mt: { md: 1, xs: "0px" },
                  ml: 1,
                  fontSize: { md: "24px", xs: "12px" },
                }}
              >
                100% Safe
              </Typography>
            </Stack>
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                fontSize: { md: "24px", xs: "12px" },
              }}
            >
              <img
                alt="user"
                src={supportIcon}
                style={{
                  width: isXs ? "20px" : "40px",
                  height: isXs ? "20px" : "40px",
                }}
              />
              <Typography
                sx={{
                  mt: { md: 1, xs: "0px" },
                  ml: 1,
                  fontSize: { md: "24px", xs: "12px" },
                }}
              >
                24/7 Support
              </Typography>
            </Stack>
            <Stack
              sx={{ display: { md: "flex", xs: "none" }, flexDirection: "row" }}
            >
              <img
                alt="user"
                src={onlinePay}
                style={{
                  width: isXs ? "20px" : "40px",
                  height: isXs ? "20px" : "40px",
                }}
              />
              <Typography
                sx={{
                  mt: { md: 1, xs: "0px" },
                  ml: 1,

                  fontSize: { md: "24px", xs: "12px" },
                }}
              >
                Online Payment
              </Typography>
            </Stack>
          </Box>
        </Grid>
        <Grid item md={12} xs={12}>
          <CatagoriesCard />
        </Grid>
        <Grid item md={12} xs={12}>
          <PriceCard />
        </Grid>
        <Grid item md={12} xs={12}>
          <SponsoredCard />
        </Grid>
        <Grid item md={12} xs={12}>
          <PriceCard />
        </Grid>
        <Grid item md={12} sx={{ display: { md: "block", xs: "none" } }}>
          <DiscountCard />
        </Grid>
      </Grid>
    </DashboardLayout>
  );
}
