import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import { Box, Link, Stack, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { styled } from "@mui/material/styles";
import debit from "assets/Images/footDebit.png";
import Gpay from "assets/Images/footGpay.png";
import pay from "assets/Images/footPay.png";
import visa from "assets/Images/footvisa.png";

const FooterRoot = styled("footer")(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? theme.palette.grey[900]
      : theme.palette.grey[100],
  padding: "40px 0", // Default padding for xs screen
  "@media (min-width: 768px)": {
    // Medium screen (md) and above
    padding: "40px 100px",
  },
}));

const FooterContent = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  padding: "40px 0px",
}));

const FooterLinks = styled("nav")(({ theme }) => ({
  display: "grid",
  gap: theme.spacing(4),
  gridAutoFlow: "row",
  justifyContent: "center",
  flex: "1",
  maxWidth: "3xl",
  width: "100%",
}));

const FooterIcon = styled("div")(({ theme }) => ({
  display: "grid",
  gap: theme.spacing(4),
  gridAutoFlow: "row",
  justifyContent: "center",
  flex: "1",
  maxWidth: "3xl",
  width: "100%",
}));

export default function LayoutFooter(props) {
  const { isLoading } = props;
  return (
    <FooterRoot>
      {/* <Container> */}
      {isLoading ? (
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
      ) : (
        <>
          <FooterContent>
            <Box sx={{ width: "342px", display: { md: "block", xs: "none" } }}>
              <Typography
                sx={{
                  fontFamily: "Audiowide",
                  fontSize: "18px",
                  fontWeight: 400,
                  color: "#337CCF",
                }}
              >
                CyberGuard KeyHub
              </Typography>
              <Typography
                sx={{
                  mt: "24px",
                  fontFamily: "Assistant",
                  fontSize: "16px",
                  fontWeight: 400,
                  color: "#222222",
                }}
              >
                little description about the website little description about
                the website little description about the website little
                description about the website little description about the
                website
              </Typography>
            </Box>
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: { md: "950px", xs: "360px" },
              }}
            >
              <FooterLinks>
                <Typography
                  sx={{
                    fontFamily: "Assistant",
                    fontSize: { md: "20px", xs: "14px" },
                    fontWeight: "Bold",
                    color: "#337CCF",
                  }}
                >
                  Policy
                </Typography>
                <Link
                  href="#"
                  color="inherit"
                  sx={{
                    fontSize: { md: "16px", xs: "12px" },
                    fontFamily: "Assistant",
                    fontWeight: "regular",
                  }}
                >
                  Home
                </Link>
                <Link
                  href="#"
                  color="inherit"
                  sx={{
                    fontSize: { md: "16px", xs: "12px" },
                    fontFamily: "Assistant",
                    fontWeight: "regular",
                  }}
                >
                  About
                </Link>
                <Link
                  href="#"
                  color="inherit"
                  sx={{
                    fontSize: { md: "16px", xs: "12px" },
                    fontFamily: "Assistant",
                    fontWeight: "regular",
                  }}
                >
                  Services
                </Link>
                <Link
                  href="#"
                  color="inherit"
                  sx={{
                    fontSize: { md: "16px", xs: "12px" },
                    fontFamily: "Assistant",
                    fontWeight: "regular",
                  }}
                >
                  Contact
                </Link>
              </FooterLinks>
              <FooterLinks>
                <Typography
                  sx={{
                    fontFamily: "Assistant",
                    fontSize: { md: "20px", xs: "14px" },
                    fontWeight: "Bold",
                    color: "#337CCF",
                  }}
                >
                  Support
                </Typography>

                <Link
                  href="#"
                  color="inherit"
                  sx={{
                    fontSize: { md: "16px", xs: "12px" },
                    fontFamily: "Assistant",
                    fontWeight: "regular",
                    mt: { md: "0px", xs: "-20px" },
                  }}
                >
                  FAQs
                </Link>
                <Link
                  href="#"
                  color="inherit"
                  sx={{
                    fontSize: { md: "16px", xs: "12px" },
                    fontFamily: "Assistant",
                    fontWeight: "regular",
                    mt: { md: "0px", xs: "-25px" },
                  }}
                >
                  About us
                </Link>
                <Link
                  href="#"
                  color="inherit"
                  sx={{
                    fontSize: { md: "16px", xs: "12px" },
                    fontFamily: "Assistant",
                    fontWeight: "regular",
                    mt: { md: "0px", xs: "-35px" },
                  }}
                >
                  Other
                </Link>
              </FooterLinks>

              <FooterIcon>
                <Typography
                  sx={{
                    fontFamily: "Assistant",
                    fontSize: { md: "20px", xs: "14px" },
                    fontWeight: "Bold",
                    color: "#337CCF",
                  }}
                >
                  Contact Us
                </Typography>
                <Link
                  href="#"
                  color="inherit"
                  sx={{
                    fontSize: { md: "16px", xs: "12px" },
                    fontFamily: "Assistant",
                    fontWeight: "regular",
                  }}
                >
                  <PhoneIcon sx={{ fontSize: "24px" }} />
                  <span className="sr-only">+91-778456134</span>
                </Link>
                <Link
                  href="#"
                  color="inherit"
                  sx={{
                    fontSize: { md: "16px", xs: "12px" },
                    fontFamily: "Assistant",
                    fontWeight: "regular",
                  }}
                >
                  <EmailIcon />
                  <span className="sr-only">Support@cyberguardkeyhub.in</span>
                </Link>
              </FooterIcon>
            </Stack>
            <Stack sx={{ display: { md: "block", xs: "none" } }}>
              <FooterLinks>
                <Typography
                  sx={{
                    fontFamily: "Assistant",
                    fontSize: "20px",
                    fontWeight: 700,
                    color: "#337CCF",
                  }}
                >
                  Payment method
                </Typography>
                <Stack
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    // mt: "-60px",
                  }}
                >
                  <img
                    alt="user"
                    src={visa}
                    style={{ width: "32px", height: "18px", ml: 1 }}
                  />
                  <img
                    alt="user"
                    src={debit}
                    style={{ width: "32px", height: "18px", ml: 1 }}
                  />
                  <img
                    alt="user"
                    src={pay}
                    style={{ width: "32px", height: "18px", ml: 1 }}
                  />
                  <img
                    alt="user"
                    src={Gpay}
                    style={{ width: "32px", height: "18px", ml: 1 }}
                  />
                </Stack>
              </FooterLinks>
            </Stack>
          </FooterContent>
          <Stack sx={{ display: { md: "none", xs: "block" } }}>
            <FooterLinks>
              <Typography
                sx={{
                  fontFamily: "Assistant",
                  fontSize: { md: "20px", xs: "14px" },
                  fontWeight: "Bold",
                  color: "Black",
                }}
              >
                Payment method
              </Typography>
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  mt: "-20px",
                  mb: "30px",
                }}
              >
                <img
                  alt="user"
                  src={visa}
                  style={{ width: "32px", height: "18px", ml: 1 }}
                />
                <img
                  alt="user"
                  src={debit}
                  style={{ width: "32px", height: "18px", ml: 1 }}
                />
                <img
                  alt="user"
                  src={pay}
                  style={{ width: "32px", height: "18px", ml: 1 }}
                />
                <img
                  alt="user"
                  src={Gpay}
                  style={{ width: "32px", height: "18px", ml: 1 }}
                />
              </Stack>
            </FooterLinks>
          </Stack>
          <Typography
            sx={{
              textAlign: "center",
              mt: "4",
              fontFamily: "Assistant",
              fontSize: "14px",
              color: "#787878",
            }}
          >
            © 2023 Your Website Name. All Rights Reserved.
          </Typography>
        </>
      )}
      {/* </Container> */}
    </FooterRoot>
  );
}
