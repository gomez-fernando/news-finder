import { FormControl, InputLabel, Select, MenuItem, Button, Box } from "@mui/material"

const CATEGORIES = [
  { value: 'general', label: 'General' },
  { value: 'business', label: 'Negocios' },
  { value: 'entertainment', label: 'Entretenimiento' },
  { value: 'health', label: 'Salud' },
  { value: 'science', label: 'Ciencia' },
  { value: 'sports', label: 'Deportes' },
  { value: 'technology', label: 'Tecnología' },
]

const NewsForm = () => {
  return (
    <form>
      <FormControl fullWidth>
        <InputLabel>Categoría</InputLabel>
        <Select
          label="Categoría"
        >
          {CATEGORIES.map(category => (
            <MenuItem
              key={category.value}
              value={category.value}
            >
              {category.label}
            </MenuItem>
          ))}
        </Select>

        <Box sx={{marginTop: 2}}>
          <Button
            fullWidth
            variant='contained'
            color="primary"
          >
            Buscar Noticias
          </Button>
        </Box>
      </FormControl>
    </form>
  )
}

export default NewsForm