import { FormControl, InputLabel, Select, MenuItem } from "@mui/material"
import UseNews from "../hooks/UseNews"

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
  const { category, handleChangeCategory} = UseNews()

  return (
    <form>
      <FormControl fullWidth>
        <InputLabel>Categoría</InputLabel>
        <Select
          label="Categoría"
          onChange={handleChangeCategory}
          value={category}
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

      </FormControl>
    </form>
  )
}

export default NewsForm