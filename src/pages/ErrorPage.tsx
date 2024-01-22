import { Box, Heading, Text } from "@chakra-ui/react";
import { Outlet, isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div>
      <NavBar />
      <Box padding={5}>
          <Outlet />
          <Heading>Oops</Heading>
          <Text>
            {isRouteErrorResponse(error)
              ? "This page does not exist"
              : "An unexpected error occured"}
          </Text>
      </Box>
    </div>
  );
};

export default ErrorPage;
