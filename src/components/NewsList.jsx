import { Grid, Typography, Pagination, Stack } from '@mui/material'
import UseNews from '../hooks/UseNews'
import News from './News'

const NewsList = () => {
  const { news: newsList, totalNews, handleChangePage, page } = UseNews()
  const totalPages = Math.ceil(totalNews / 20)

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

      <Stack
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{
          marginY: 5
        }}
      >
        <Pagination
          count={totalPages}
          color="primary"
          onChange={handleChangePage}
          page={page}
        />
      </Stack>

    </>
  )
}

export default NewsList