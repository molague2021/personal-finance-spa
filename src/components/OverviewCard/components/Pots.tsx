import data from '../../../../data.json';
import { Box, Grid2, Stack, Typography, useTheme } from '@mui/material';
import potIcon from '../../../../assets/images/icon-pot.svg';

export const Pots = () => {
  const theme = useTheme();
  console.log({ data });
  const potsData = data.pots.slice(0, 4);
  console.log({ potsData });

  const total = data.pots.reduce((acc, pot) => acc + pot.total, 0);

  return (
    <Grid2 display="flex" sx={{ gap: '20px' }}>
      <Box
        minWidth={247}
        minHeight={110}
        sx={{
          backgroundColor: theme.palette.beige.A100,
          padding: '16px',
          display: 'flex',
          gap: '16px',
          borderRadius: '12px',
          alignItems: 'center',
        }}
      >
        <img src={potIcon} style={{ width: '40px', height: '40px' }} />
        <Stack width="86px" height="70px" gap="11px">
          <Typography variant="subtitle3" color={theme.palette.grey[500]}>
            Total saved
          </Typography>
          <Typography variant="h1" color={theme.palette.grey[900]}>
            ${total}
          </Typography>
        </Stack>
      </Box>
      <Grid2
        container
        alignContent="space-between"
        justifyContent="space-between"
        sx={{
          display: 'flex',
          minWidth: 277,
          minHeight: 102,
        }}
      >
        {potsData.map((pot, index) => {
          const { name, total, target, theme: potColor } = pot;
          const evenNumber = index % 2 === 0;

          return (
            <Grid2
              key={name}
              display="flex"
              alignItems="center"
              gap="16px"
              sx={{ minWidth: '131px', height: '43px' }}
            >
              <Box width={4} height={43} sx={{ backgroundColor: potColor }} />
              <Stack width="86px" gap="11px">
                <Typography variant="caption" color={theme.palette.grey[500]}>
                  {name}
                </Typography>
                <Typography
                  variant="body2"
                  fontWeight={800}
                  color={theme.palette.grey[900]}
                >
                  ${total}
                </Typography>
              </Stack>
            </Grid2>
          );
        })}
      </Grid2>
    </Grid2>
  );
};
