import React, { useEffect, useState } from "react";
import { Box, Container, Typography } from "@mui/material";

// react-router-dom
import { useNavigate, useSearchParams } from "react-router-dom";
import { getUserProfle } from "../../services/userService";

const HomePage = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [accessToken, setAccessToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  const [userDetail, setUserDetail] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    setAccessToken(token);
    getLoginUserDetail();
  }, []);

  useEffect(() => {
    const token = searchParams.get("token");
    setAccessToken(token);
    getLoginUserDetail();
  }, [searchParams]);

  useEffect(() => {
    if (accessToken) {
      localStorage.setItem("token", accessToken);
      navigate("/home");
    }
  }, [accessToken]);

  // useEffect(() => {
  //   getLoginUserDetail();
  // }, []);

  const getLoginUserDetail = async () => {
    if (localStorage.getItem("token")) {
      const response = await getUserProfle(localStorage.getItem("token"));
      setUserDetail(response);
    }
  };

  console.log(userDetail, "userDetails");
  return (
    <Container>
      <Box>
        <Typography
          level="h2"
          textAlign={"center"}
        >{`Welcome ${userDetail?.firstName}`}</Typography>

        <div>
          <img src={userDetail?.profile?.avatar} />
        </div>
        <div>
          <span className="text-primary">UserName: {userDetail?.username}</span>
        </div>
        <div>
          <span className="text-primary">
            FirstName: {userDetail?.firstName}
          </span>
        </div>
        <div>
          <span className="text-primary">
            Followers: {userDetail?.followers?.length}
          </span>
        </div>
        <div>
          <span className="text-primary">
            Followings: {userDetail?.followings?.length}
          </span>
        </div>
        <div>
          <span className="text-primary">
            Balance: {userDetail?.account?.balance}
          </span>
        </div>
      </Box>
    </Container>
  );
};

export default HomePage;
