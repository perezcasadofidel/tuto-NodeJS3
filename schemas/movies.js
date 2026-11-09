const z = require('zod')

const movieSchema = z.object({
  title: z.string({
    required_error: 'title is required',
    invalid_type_error: 'title must be a string'
  }),
  year: z.number().int().min(1900).max(new Date().getFullYear()),
  director: z.string(),
  duration: z.number().int().min(1),
  poster: z.string().url(),
  genre: z.array(z.string()),
  rate: z.number().min(0).max(10).optional()
})

function validateMovie (object) {
  return movieSchema.safeParse(object)
}

function validatePartialMovie (object) {
  return movieSchema.partial().safeParse(object)
}

module.exports = {
  validateMovie,
  validatePartialMovie
}
