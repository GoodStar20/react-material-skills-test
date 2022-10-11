import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Box } from "@mui/material";
import AccountMenu from "../../components/AccountMenu";

export default function Home() {
  let navigate = useNavigate();
  const handleOnClick = (page) => {
    navigate("/todo");
  };

  return (
    <Container maxWidth="md">
      <Box
        padding={2}
        marginTop={2}
        borderRadius={2}
        sx={{
          boxShadow: "0 0.2rem 1rem rgba(0, 0, 0, 0.3)",
        }}
      >
        <AccountMenu onClick={handleOnClick} />
      </Box>
    </Container>
  );
}
