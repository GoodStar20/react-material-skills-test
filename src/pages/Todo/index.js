import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container, Typography, Box, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import BasicForm from "../../components/BasicForm";
import ListTable from "../../components/ListTable";
import { addList, deleteList } from "../../redux/todo/action";

export default function Home() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const { lists } = useSelector((state) => state.todoList);

  const addItem = (item) => {
    dispatch(addList(item));
  };

  const deleteItem = (itemId) => {
    const removedLists = [...lists];
    removedLists.splice(itemId, 1);
    dispatch(deleteList(removedLists));
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
        <IconButton
          color="primary"
          aria-label="back"
          onClick={() => navigate("/")}
          size="small"
        >
          <ArrowBackIosNewIcon />
          Back
        </IconButton>
        <BasicForm addItem={addItem} />
        <Box sx={{ my: 4 }} textAlign="center">
          <Typography variant="h4" component="h1" gutterBottom>
            React Skills Test
          </Typography>
        </Box>
        <ListTable lists={lists} deleteItem={deleteItem} />
      </Box>
    </Container>
  );
}
