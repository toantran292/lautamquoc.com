import { Box, Container, Stack, Typography } from "@mui/material";

import giacatluong from "./assets/imgs/giacatluong.png";
import hoangtrung from "./assets/imgs/hoangtrung.png";
import luubi from "./assets/imgs/luubi.png";
import masieu from "./assets/imgs/masieu.png";
import quanvu from "./assets/imgs/quanvu.png";
import trieuvan from "./assets/imgs/trieuvan.png";
import truongphi from "./assets/imgs/truongphi.png";
import Header from "./components/header";

const groups = [
  {
    id: 1,
    name: "Ban giám đốc",
    users: [
      {
        id: 1,
        name: "Lưu Bị",
        avatar: luubi,
        role: "Giám đốc",
      },
      {
        id: 2,
        name: "Gia Cát Lượng",
        avatar: giacatluong,
        role: "Phó giám đốc",
      },
    ],
  },
  {
    id: 2,
    name: "Hành chính",
    users: [
      {
        id: 3,
        name: "Quan Vũ",
        avatar: quanvu,
        role: "Trưởng phòng",
      },
      {
        id: 4,
        name: "Trương Phi",
        avatar: truongphi,
        role: "Nhân viên",
      },
    ],
  },
  {
    id: 3,
    name: "Bán hàng",
    users: [
      {
        id: 5,
        name: "Triệu Vân",
        avatar: trieuvan,
        role: "Trưởng phòng",
      },
      {
        id: 6,
        name: "Mã Siêu",
        avatar: masieu,
        role: "Nhân viên",
      },
      {
        id: 7,
        name: "Hoàng Trung",
        avatar: hoangtrung,
        role: "Nhân viên",
      },
    ],
  },
];

function App() {
  return (
    <Box>
      <Header />

      <Container maxWidth="sm">
        <Typography
          component="h2"
          fontWeight={700}
          fontSize={24}
          margin="10px 0"
        >
          Giới thiệu công ty
        </Typography>

        <Stack></Stack>
      </Container>
    </Box>
  );
}

export default App;
