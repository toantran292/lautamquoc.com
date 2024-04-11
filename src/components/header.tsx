import { GitHub } from "@mui/icons-material";
import { Button, Link, Stack } from "@mui/material";

import logo from "../assets/imgs/logo.webp";

const Header = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      px="24px"
      py="6px"
      bgcolor="#d8e9ee"
      borderBottom="1px solid #e0e0e0"
      alignItems="center"
      fontWeight="700"
    >
      <Stack direction="row" alignItems="center" gap="10">
        <img src={logo} alt="logo" width="48px" /> Lautamquoc
      </Stack>
      <Link
        href="https://github.com/toantran292/lautamquoc.com"
        underline="none"
      >
        <Button startIcon={<GitHub />}> Github</Button>
      </Link>
    </Stack>
  );
};

export default Header;
