import gql from 'graphql-tag';

const checkphone = gql`
      mutation checkphone($verify: String!, $phone: String!) {
            checkphone(verify: $verify , phone: $phone) {
                  status
                  code
                  token
            }
      }
`

const signup = gql`
      mutation signup($verify: String!, $firstname: String!, $lastname: String!, $phone: String!) {
            signup(verify: $verify, firstname: $firstname, lastname: $lastname, phone: $phone) {
                  status
                  code
                  token
            }
      }
`

const login = gql`
      mutation login($verify: String!, $phone: String!, $otp: String!, $hash: String!) {
            login(verify: $verify, phone: $phone, otp: $otp, hash: $hash) {
                  status
                  code
                  token
            }
      }
`

export { checkphone, signup, login }