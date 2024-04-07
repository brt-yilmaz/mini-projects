/**
 *! if you want to force user to use optional parameter for some cases
 */

type AuthEvent = 
  | {
  type : 'login'
  payload: {
    username: string
    password: string
  }
} | {
  type: 'logout'
}

const sendEvent = <Type extends AuthEvent['type']>( ...args: Extract< AuthEvent, { type: Type } > extends {payload: infer TPayload} ? [type: Type, payload: TPayload] : [type: Type]) =>  {
  // do something
}

sendEvent('logout')