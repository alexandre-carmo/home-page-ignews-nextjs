import { FiX } from 'react-icons/fi'
import { FaGithub } from 'react-icons/fa'

import styled from './styles.module.scss'

export function SignInButton() {
  return (
    <button
      type='button'
      className={styled.signInButton}
    >
      <FaGithub color='#04d361' />
      Alexandre Moraes

      <FiX color='#737380' className={styled.closeIcon} />
    </button>
  )
}
