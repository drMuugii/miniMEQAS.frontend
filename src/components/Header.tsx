import { AppBar, Stack, Toolbar, Typography } from "@mui/material";
import HeaderBadge from "./HeaderBadge";
import HeaderUser from "./HeaderUser";

export default function Header() {
  return (
    <AppBar
      position="absolute"
      enableColorOnDark
      sx={{ width: "84%", height: "80px" }}
    >
      <Toolbar>
        {/* //! энэ Typography ийн устгахаар HeaderBadge, users урд талдаа байрлаад байна
         //! энийг шийдэх */}
        <Typography
          variant="h4"
          component={"div"}
          sx={{ flexGrow: 1, fontWeight: "medium" }}
        >
          miniMEQAS
        </Typography>
        <Stack direction={"row"} spacing={12}>
          {/* //! Шинэ зурвас, Хөтөлбөр т өөрчлөлт орход badge өөрчлөгддөг болгох.
          //! badge button дээр дарах үед ямар ямар шинэ өөрчлөлт орсонг жижиг 
           */}
          <HeaderBadge />
          {/* //! logout хийдэг болгох */}
          <HeaderUser />
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
