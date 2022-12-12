import React from "react";
import "./footer.css";
import {
  Toolbar,
  Tab,
  Link,
  Container,
  AppBar,
  Box,
  Grid,
} from "@mui/material";

export const Footer = () => {
  return (
    <Box className="parent">
      <Container maxWidth="lg">
        <Grid className="child" container spacing={5}>
          <Grid item xs={12} sm={4}>
            {" "}
            {/* Setting Grid as item xs indicate normal scree it take 12 grid and on small it will take 4 grid */}
            <Box borderBottom={1}>Help</Box>
            <Box>
              <Link href="/" color="inherit">
                Contact
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit">
                Help
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit">
                Support
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} sm={4}>
            {" "}
            {/* Setting Grid as item xs indicate normal scree it take 12 grid and on small it will take 4 grid */}
            <Box borderBottom={1}>Links</Box>
            <Box>
              <Link href="/" color="inherit">
                Privacy and Policy
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit">
                Location
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit">
                Support
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} sm={4}>
            {" "}
            {/* Setting Grid as item xs indicate normal scree it take 12 grid and on small it will take 4 grid */}
            <Box borderBottom={1}>Links</Box>
            <Box>
              <Link href="/" color="inherit">
                Privacy and Policy
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit">
                Location
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit">
                Support
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
