import {Nullable} from "./Nullable";

import {expectTypeOf} from 'expect-type';

describe('Nullable', () => {
  it('tests typing', () => {
    expectTypeOf<string>().toMatchTypeOf<Nullable<string>>()
    expectTypeOf<undefined>().toMatchTypeOf<Nullable<string>>()
    expectTypeOf<null>().not.toMatchTypeOf<Nullable<string>>()
  })
})
