import { isEmailProper } from '../utils'

describe('Utils', () => {
  it('isEmailProper', () => {
    expect(isEmailProper('johndoe@example.com')).toBeTruthy()

    expect(isEmailProper('joeexample.com')).toBeFalsy()

    expect(isEmailProper('joey@tribbiani')).toBeFalsy()

    expect(isEmailProper('rachel.green@v.c')).toBeFalsy()

    expect(isEmailProper('monicageller@gmail.com')).toBeTruthy()

    expect(isEmailProper(33)).toBeFalsy()

    expect(isEmailProper(true)).toBeFalsy()

    expect(isEmailProper(null)).toBeFalsy()

    expect(isEmailProper(undefined)).toBeFalsy()

    expect(isEmailProper([])).toBeFalsy()

    expect(isEmailProper({})).toBeFalsy()
  })
})
