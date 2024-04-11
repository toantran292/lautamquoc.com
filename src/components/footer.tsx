import { Box, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box py="50px" textAlign="center" width="full">
      &copy; {new Date().getFullYear()} Develop by{" "}
      <Link href="https://github.com/toantran292" target="_blank">
        Thái Toàn
      </Link>
    </Box>
  );
};

export default Footer;
