import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import Man from '../src/assets/man-one.png'
import Men from '../src/assets/men-three.png'
import SideStepBar from '../src/components/home/SideStepBar'
import Cards from '../src/components/home/Cards'
import styled from '@emotion/styled'
import Image from 'next/image'


const ImageWrap = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
})

const BannerText = styled('p')({
  fontWeight: 700,
  fontSize: '24px',
  textAlign: 'center',
  '@media (min-width: 768px)': {
    fontSize: '32px',
  },
  '@media (min-width: 1200px)': {
    fontSize: '36px',
  }
})

const Title = styled(Typography)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontWeight: 500,
  marginBottom: '16px',
  fontSize: '20px',
  '@media (min-width: 768px)': {
    fontSize: '24px',
  },
  '@media (min-width: 1200px)': {
    fontSize: '28px',
  }
})



export default function Home() {
  return (
    <div>
      <Container maxWidth="md" sx={{ mb: 8 }} >
        <BannerText>
          讓你快速通關  不再等候
        </BannerText>
        <ImageWrap>
          <Image src={Man} width={142} height={318} alt="banner圖片" />
          <Image src={Men} width={212} height={318} alt="banner圖片" />
        </ImageWrap>
      </Container>
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Grid item xs={10} sm={7} md={5} >
          <Title component="h2" variant="h4"  >
            <InsertEmoticonIcon fontSize="large" />
            如何使用
          </Title>
          <SideStepBar />
        </Grid>
      </Container>
      <Container maxWidth="md" xs={{ mb: 8 }}>
        <Title component="h2" variant="h4"  >
          <InsertEmoticonIcon fontSize="large" />
          為什麼要使用 Qer
        </Title>
        <Grid container justifyContent='center' wrap="wrap" gap={2}>
          <Cards />
        </Grid>
      </Container>
    </div>

  )
}