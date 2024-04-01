import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import {
  Avatar,
  Badge,
  Button,
  Card,
  CardContent,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import Rating from "@mui/material/Rating";
import firstVirus from "assets/Images/firstVirus.png";
import DashboardLayout from "components/DashboardLayout";
import { useState } from "react";

export default function ProductDetail() {
  const [value, setValue] = useState("4");
  return (
    <DashboardLayout>
      <div
        sx={{
          backgroundColor: "white",
          maxWidth: "2xl",
          mx: "auto",
          py: 10,
          px: 6,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "48px",
            maxWidth: "calc(100% - 20px)", // Adjust based on your layout and gap
            // mx: "auto",
          }}
        >
          <div style={{ flex: "0 0 632px" }}>
            <img
              alt="McAfee Antivirus"
              src={firstVirus}
              width="632px"
              height="632px"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 6,
              flex: "1",
            }}
          >
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "32px",
                fontFamily: "Assistant",
              }}
            >
              McAfee Antivirus 1-year plan
            </Typography>
            <Typography
              sx={{
                fontWeight: "regular",
                fontSize: "20px",
                fontFamily: "Assistant",
              }}
            >
              Description about the product
            </Typography>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 2,
                marginTop: "24px",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "regular",
                  fontSize: "20px",
                  fontFamily: "Assistant",
                }}
              >
                4.8
              </Typography>
              <Rating
                name="read-only"
                value={value}
                readOnly
                sx={{ ml: "0.5", mr: "8px" }}
              />
              <Typography
                sx={{
                  fontWeight: "regular",
                  fontSize: "20px",
                  fontFamily: "Assistant",
                }}
              >
                87 reviews
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: 2,
                marginTop: "40px",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  color: "blue.600",
                  fontSize: "32px",
                  fontFamily: "Assistant",
                }}
              >
                ₹1300.00
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  ml: "10px",
                  fontWeight: "semi-bold",

                  fontSize: "18px",
                  fontFamily: "Assistant",
                  color: "gray.500",
                  textDecoration: "line-through",
                }}
              >
                ₹1199.00
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  ml: "10px",
                  fontWeight: "regular",
                  color: "#F94C10",
                  fontSize: "24px",
                  fontFamily: "Assistant",
                }}
              >
                -40% OFF
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: 2,
                marginTop: "40px",
              }}
            >
              <Button
                sx={{
                  minWidth: "120px",
                  borderRadius: "24px",
                  backgroundColor: "#EBF1FF",
                }}
                variant="outlined"
                startIcon={<AddIcon sx={{ height: "24px", width: "24px" }} />}
                endIcon={<RemoveIcon sx={{ height: "24px", width: "24px" }} />}
              >
                1
              </Button>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <Button variant="contained">Buy now</Button>
                <Button variant="outlined">Add to cart</Button>
              </div>
            </div>
            <div sx={{ display: "flex", alignItems: "center", gap: 4 }}>
              <Badge variant="secondary">Bestseller</Badge>
              <Badge>3 Devices</Badge>
              <Badge>1 Year</Badge>
            </div>
            <Typography variant="body1" sx={{ color: "gray.700" }}>
              McAfee Antivirus is a software utility that helps protect your
              computer against malware and other cyber threats. This 1-year
              subscription plan covers up to 3 devices and provides real-time
              defense against viruses and ransomware.
            </Typography>
            <div sx={{ display: "flex", gap: 4 }}>
              <Button variant="contained">Buy Now</Button>
              <Button variant="outlined">Add to Cart</Button>
            </div>
            <div sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <HeartIcon sx={{ width: 6, height: 6, color: "gray.400" }} />
              <Typography sx={{ color: "gray.500" }}>
                Add to Wishlist
              </Typography>
            </div>
          </div>
        </div>
        <div sx={{ mt: 10 }}>
          <Tabs>
            <Tab label="Overview" />
            <Tab label="Specs" />
            <Tab label="Support" />
          </Tabs>
          <div sx={{ mt: 4 }}>
            <Typography variant="body1" sx={{ color: "gray.700" }}>
              McAfee Antivirus provides advanced security solutions to
              consumers, small and large businesses, enterprises, and
              governments. Security technologies from McAfee use a unique,
              predictive capability that is powered by McAfee Global Threat
              Intelligence, which enables home users and businesses to stay one
              step ahead of the next wave of fileless attacks, viruses, malware,
              and other online threats.
            </Typography>
          </div>
        </div>
        <div sx={{ mt: 10 }}>
          <Typography variant="h2" sx={{ fontWeight: "bold", mb: 4 }}>
            Customer Reviews
          </Typography>
          <div sx={{ display: "grid", gap: 4 }}>
            <ReviewItem
              name="Shad Chnevski"
              date="2 days ago"
              text="Really satisfied with the protection I'm getting. Easy to install and runs quietly in the background without slowing down my PC."
            />
            <ReviewItem
              name="Jane Doe"
              date="1 week ago"
              text="Had some issues with installation, but customer support was helpful and resolved it quickly."
            />
          </div>
        </div>
        <div sx={{ mt: 10 }}>
          <Typography variant="h2" sx={{ fontWeight: "bold", mb: 4 }}>
            Related products
          </Typography>
          <div
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                lg: "repeat(4, 1fr)",
              },
              gap: 6,
            }}
          >
            <ProductCard
              name="Norton 360 Deluxe"
              description="Multi-layered, advanced security that protects against existing and emerging malware threats to your devices, and helps protect your private and financial information when you go online."
            />
            <ProductCard
              name="Kaspersky Total Security"
              description="Offers protection for you and your family from ransomware and more. It secures your identity, photos, files, and other digital assets."
            />
            <ProductCard
              name="Bitdefender Antivirus Plus"
              description="Protects Windows PCs against all types of online threats, and includes privacy tools such as Bitdefender VPN and Bitdefender Safepay."
            />
            <ProductCard
              name="Avast Premium Security"
              description="Complete online protection for all of your computers, phones, and tablets."
            />
          </div>
        </div>
        <div sx={{ mt: 10 }}>
          <Typography variant="h2" sx={{ fontWeight: "bold", mb: 4 }}>
            FAQ
          </Typography>
          <div sx={{ display: "grid", gap: 4 }}>
            <FAQItem
              question="What kind of protection will I get with this antivirus?"
              answer="This antivirus offers comprehensive protection against all types of malware, including viruses, spyware, and ransomware."
            />
            <FAQItem
              question="Can I use this on multiple devices?"
              answer="Yes, this plan covers up to 3 devices, which can include Windows, macOS, and Android devices."
            />
            <FAQItem
              question="How do I install the antivirus?"
              answer="After purchasing, you will receive an email with instructions on how to download and install the software on your devices."
            />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

function HeartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function ReviewItem({ name, date, text }) {
  return (
    <div sx={{ display: "flex", alignItems: "start", gap: 4 }}>
      <Avatar sx={{ width: 40, height: 40 }}>
        <Avatar src="https://github.com/shadcn.png" alt={name} />
      </Avatar>
      <div>
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          {name}
        </Typography>
        <Typography variant="body2" sx={{ color: "gray.500" }}>
          {date}
        </Typography>
        <Typography variant="body1" sx={{ color: "gray.700", mt: 1 }}>
          {text}
        </Typography>
      </div>
    </div>
  );
}

function ProductCard({ name, description }) {
  return (
    <Card sx={{ width: "100%" }}>
      <img alt={name} src="/placeholder.svg" width="150" height="200" />
      <CardContent>
        <Typography variant="h3" sx={{ fontWeight: "bold" }}>
          {name}
        </Typography>
        <Typography variant="body2" sx={{ color: "gray.500" }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

function FAQItem({ question, answer }) {
  return (
    <details sx={{ cursor: "pointer" }} className="group">
      <summary sx={{ fontSize: "lg", fontWeight: "bold", color: "gray.900" }}>
        {question}
      </summary>
      <Typography variant="body1" sx={{ color: "gray.700", mt: 2 }}>
        {answer}
      </Typography>
    </details>
  );
}
