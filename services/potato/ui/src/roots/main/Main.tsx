import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { trpc } from "~utils/trpc";

export const Main: FC = () => {
  const profile = trpc.proxy.user.profile.useQuery({ id: "fake" });

  if (profile.isLoading) {
    return null;
  }

  return (
    <Container>
      <Paper elevation={3}>
        <Box sx={{ p: 2 }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={12} md={3}>
              <Avatar sx={{ width: 150, height: 150, marginInline: "auto" }} />
            </Grid>
            <Grid item xs={12} md={9}>
              <Stack spacing={2}>
                <Stack alignItems={{ xs: "center", md: "flex-start" }}>
                  <Typography align="center" variant="h6" component="h2">
                    {profile.data?.fullName}
                  </Typography>
                  <Typography align="center" variant="overline">
                    {profile.data?.tagLine}
                  </Typography>
                  <Typography align="center">
                    {profile.data?.introduction}
                  </Typography>
                  <div>
                    <Stack direction="row" spacing={2} marginTop={2}>
                      <Button variant="contained">Follow</Button>
                      <Button variant="outlined">Message</Button>
                    </Stack>
                  </div>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
};
