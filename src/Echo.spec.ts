import { Echo } from './Echo'

describe('Echo class', () => {
  it('should return the string', () => {
    const echo = new Echo()
    expect(echo.repeat('a sound')).toBe('a sound')
  })

  it('should return the string in all caps', () => {
    const echo = new Echo()
    expect(echo.loudly('a loud sound')).toBe('A LOUD SOUND')
  })
})
