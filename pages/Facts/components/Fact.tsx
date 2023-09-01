import { Box, Card, CardActionArea, CardActionAreaProps, Typography, alpha } from '@mui/material';

import theme from '@/theme';

export interface FactItemProps extends CardActionAreaProps {}

const FactItem = (props: FactItemProps) => {
  return (
    <Card
      sx={{
        position: 'relative',
        height: 320,
        width: '100%',
        borderRadius: 1,
        overflow: 'hidden',
      }}
    >
      <Header date={new Date()} />

      <CardActionArea sx={{ display: 'flex' }} {...props}>
        <Box sx={{ position: 'absolute', inset: 0, backgroundColor: alpha(theme.palette.secondary.main, 0.2) }} />

        <Box
          sx={{ maxWidth: '100%', width: '100%' }}
          component="img"
          src={`https://picsum.photos/320/320?random=`}
          alt="image"
          loading="lazy"
        />
      </CardActionArea>
    </Card>
  );
};

interface HeaderProps {
  date: Date;
}

const Header = ({ date }: HeaderProps) => (
  <Box
    sx={{
      position: 'absolute',
      top: 12,
      left: 12,
      backgroundColor: '#F0F4F852',
      width: 64,
      height: 64,
      borderRadius: 1,
      display: 'grid',
      placeItems: 'center',
      zIndex: 1,
    }}
  >
    <Typography variant="body2" color="white">
      <b>{String(new Intl.DateTimeFormat('ru-RU', { day: '2-digit', month: 'long' }).format(date))}</b>
    </Typography>
  </Box>
);

export default FactItem;
