import { Task } from './Dodo'

describe('Task class', () => {
  it('should return the string', () => {
    const dodo = new Dodo("New Task")
    expect(dodo.output.toBe("New Task")
  })

  it('should return the string in all caps', () => {
    const dodo = new Dodo()
    expect(dodo.loudly('a loud sound')).toBe('A LOUD SOUND')
  })
})