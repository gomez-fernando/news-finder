import {Grid, Typography} from '@mui/material'
import UseNews from '../hooks/UseNews'
import News from './News'

const NewsList = () => {
  const {news: newsList} = UseNews()
  console.log(newsList)

  return (
    <>
      <Typography
        textAlign={'center'}
        marginY={5}
        variant='h3'
        component={'h1'}
      >
        Últimas Noticias
      </Typography>

      <Grid container spacing={2}>
        {newsList.map(elem => (
          <News 
            key={elem.url}
            news={elem}
          />
        ))}
      </Grid>
    </>
  )
}

export default NewsList