import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Grid,
  Typography,
} from "@mui/material";

import { Fragment } from "react/jsx-runtime";
import giacatluong from "./assets/imgs/giacatluong.png";
import hoangtrung from "./assets/imgs/hoangtrung.png";
import luubi from "./assets/imgs/luubi.png";
import masieu from "./assets/imgs/masieu.png";
import quanvu from "./assets/imgs/quanvu.png";
import trieuvan from "./assets/imgs/trieuvan.png";
import truongphi from "./assets/imgs/truongphi.png";
import Footer from "./components/footer";
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
        detail:
          'Người sáng lập ra Vương quốc Hán. Ông được biết đến với tính trung thành và lòng dũng cảm, là một trong "Ba Nguyên Tướng" cùng với Gia Cát Lượng và Quan Vũ.',
      },
      {
        id: 2,
        name: "Gia Cát Lượng",
        avatar: giacatluong,
        role: "Phó giám đốc",
        detail:
          "Chính trị gia thông thái, tài năng. Ông là người giúp Lưu Bị lập nên Vương quốc Hán và sau này đặt Quan Vũ vào vị trí quan trọng trong triều đình.",
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
        detail:
          'Tướng lĩnh huyền thoại, được mệnh danh là "Thần mã" với tài năng chỉ huy và sức mạnh vũ trang vượt trội. Quan Vũ trở thành biểu tượng của lòng dũng cảm và trung thành.',
      },
      {
        id: 4,
        name: "Trương Phi",
        avatar: truongphi,
        role: "Nhân viên",
        detail:
          "Tướng tài của Lưu Bị, nổi tiếng với trí thông minh và tài năng chiến đấu. Ông có đóng góp lớn trong việc bảo vệ Vương quốc Hán.",
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
        detail:
          'Nhà tư tưởng chiến lược, Triệu Vân là một trong những nhà lý luận quân sự lỗi lạc nhất trong lịch sử Trung Quốc. Ông là một trong "Tam Tài Tướng" cùng với Lưu Bị và Quan Vũ.',
      },
      {
        id: 6,
        name: "Mã Siêu",
        avatar: masieu,
        role: "Nhân viên",
        detail:
          "Tướng lĩnh nổi tiếng của thời kỳ Tam Quốc, được biết đến với sự mạnh mẽ và kiên định. Ông là một trong những tướng lĩnh hàng đầu trong quân đội của Lưu Bị.",
      },
      {
        id: 7,
        name: "Hoàng Trung",
        avatar: hoangtrung,
        role: "Nhân viên",
        detail:
          "Tướng lĩnh nổi tiếng của thời kỳ Tam Quốc, tham gia vào cuộc kháng chiến chống lại thế lực của nhà Thục Hán. Ông được người dân tôn vinh là một anh hùng.",
      },
    ],
  },
];

function App() {
  return (
    <Box>
      <Header />

      <Container>
        <Typography
          component="h2"
          fontWeight={700}
          fontSize={24}
          margin="10px 0"
        >
          Giới thiệu công ty
        </Typography>

        {groups.map((group) => (
          <Fragment key={group.id}>
            <Typography
              component="h3"
              fontWeight={700}
              fontSize={20}
              margin="10px 0"
            >
              {group.name}
            </Typography>
            <Grid container spacing={2}>
              {group.users.map((user) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={user.id}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      sx={{
                        aspectRatio: 1,
                      }}
                      image={user.avatar}
                    />
                    <CardContent>
                      <Typography
                        fontWeight={700}
                        fontSize={16}
                        component="div"
                        display="flex"
                        gap={1}
                        alignItems="center"
                      >
                        <Chip
                          label={user.role}
                          variant="outlined"
                          color="primary"
                          size="small"
                        />
                        {user.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {user.detail}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Tìm hiểu thêm</Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Fragment>
        ))}
      </Container>

      <Footer />
    </Box>
  );
}

export default App;
