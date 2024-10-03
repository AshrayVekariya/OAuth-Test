import React, { useEffect, useState } from "react";

// mui
import { Container, Box, Grid, Button, Typography } from "@mui/material";

// react-router-dom
import { useNavigate, useSearchParams } from "react-router-dom";

import Toast from "../../components/tostify/index";

const clientId = process.env.REACT_APP_CLIENT_ID;
// const clientSecret = process.env.REACT_APP_CLIENT_SECRET;

const SignInPage = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [accessToken, setAccessToken] = useState("");

  const handleSubmit = () => {
    if (clientId && clientId !== "") {
      window.location = `http://localhost:3000/oauth/login?clientId=${clientId}`;
    } else {
      Toast("Invalid Client ID or secret is provided ", "error");
    }
  };

  useEffect(() => {
    const token = searchParams.get("token");
    setAccessToken(token);
  }, [searchParams]);

  useEffect(() => {
    if (accessToken) {
      localStorage.setItem("token", accessToken);
      navigate("/home");
    }
  }, [accessToken]);

  return (
    <div>
      <Container>
        <Box sx={{ height: "100vh" }} display={"flex"} alignItems={"center"}>
          <Box width={"100%"} borderRadius={1}>
            <Grid container spacing={2} alignItems={"center"}>
              <Grid item xs={12}>
                <Box pl={{ md: 5 }}>
                  <Box mb={5}>
                    <Typography
                      textAlign={"center"}
                      variant="h4"
                      fontWeight={600}
                      color="primary"
                    >
                      Welcome
                    </Typography>
                  </Box>
                  <Box mt={5} display={"flex"} justifyContent={"center"}>
                    <Button
                      variant="contained"
                      sx={{ padding: "8px 60px" }}
                      onClick={handleSubmit}
                    >
                      Connect to Villages.io
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default SignInPage;
