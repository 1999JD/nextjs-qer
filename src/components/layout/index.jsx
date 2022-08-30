import Header from './Header'
import Footer from './Footer'
import Box from '@mui/material/Box';

export default function Layout({ children }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Header>
        {children}
      </Header>
      <Footer />
    </Box>
  )
}