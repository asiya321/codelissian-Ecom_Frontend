import { Box, Button, Typography } from "@mui/material";
import Discount1 from "assets/Images/Discount1.png";
import Discount3 from "assets/Images/Discount11.png";
import Discount2 from "assets/Images/Discount21.png";

export default function DiscountCard() {
  return (
    <Box
      sx={{
        backgroundColor: "#E5F4FF",
        p: 6,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        position: "relative",
        width: "60%",
        ml: "-120px",
      }}
    >
      <img
        alt="GirlImage"
        src={Discount3}
        style={{
          position: "absolute",
          width: "150px",
          height: "200px",
          top: "0%",
          left: "0%", // Adjust the left position
          zIndex: 1,
        }}
      />
      <div style={{ marginLeft: "40px" }}>
        <Typography variant="h2" sx={{ fontWeight: "bold", color: "#333333" }}>
          Get 40% discount
        </Typography>
        <Typography variant="body1" sx={{ color: "#666666", mt: 1 }}>
          Use HUB40 coupon code at checkout
        </Typography>
        <Button
          variant="contained"
          sx={{ mt: 4, backgroundColor: "#0061DF", color: "white" }}
        >
          Shop now
        </Button>
      </div>
      <div
        style={{
          marginLeft: "80px",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <img
          alt="Discount illustration"
          src={Discount2}
          style={{
            height: "200px",
            width: "400px",
            top: "0px",
            // transform: "rotate(90deg)",
            position: "relative",
          }}
        />
        <img
          alt="Discount illustration"
          src={Discount1}
          style={{
            height: "200px",
            width: "400px",
            left: "600px",
            position: "absolute",
          }}
        />
      </div>
    </Box>
  );
}
