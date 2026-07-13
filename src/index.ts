import { Echo } from './Echo'

const echo = new Echo()

for (let i = 0; i < 5; i++) {
  console.log(echo.repeat('Hello, World!'))
}
