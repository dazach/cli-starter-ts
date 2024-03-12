import { describe, expect, it } from 'vitest'
import { greetPerson } from '../src'

describe('greetings', () => {
  it('greets a person', () => {
    expect(greetPerson('World')).toBe('Hello, World!')
  })
})
