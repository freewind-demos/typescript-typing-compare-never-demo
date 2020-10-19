import {expectTypeOf} from 'expect-type';

describe('Nullable', () => {
  it('compares never equality', () => {
    expectTypeOf<string>().toEqualTypeOf<string>()
    expectTypeOf<string>().toEqualTypeOf<string | never>()
    expectTypeOf<string[]>().toEqualTypeOf<string[]>()
    expectTypeOf<string[]>().toEqualTypeOf<string[] | never>()
    expectTypeOf<string[]>().toEqualTypeOf<string[] | never | never[]>()
    expectTypeOf<string[]>().toEqualTypeOf<string[] | never[]>()
    expectTypeOf<string[]>().toEqualTypeOf<string[] | never | never[]>()
  })
  it('not equal', () => {
    expectTypeOf<string>().not.toEqualTypeOf<string | undefined>()
    expectTypeOf<string>().not.toEqualTypeOf<string | null>()
    expectTypeOf<string>().not.toEqualTypeOf<string | never | never[]>()
  })
})
