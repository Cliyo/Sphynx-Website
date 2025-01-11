import { SignInDecodedDTO } from 'dtos/SignInDTO'
import { jwtDecode } from 'jwt-decode'

export const JWTdecoder = (token: string) => {
  try {
    return jwtDecode(token) as SignInDecodedDTO
  } catch (error) {
    console.log(error)
  }
}
