import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { signIn, signOut, useSession } from 'next-auth/client';

import styles from './styles.module.scss';

export function SignInButton() {
  const [session] = useSession();
  
  return session ? (
    <button 
      type="button"
      className={styles.signInButton}>
      <FaGithub color='#04d301'/>
      {session.user.name}
      <FiX color='#737300' 
      className={styles.closeIcon}
      onClick={() => signOut()}
      />
    </button>
  ) : (
    <button 
      type="button"
      className={styles.signInButton}
      onClick={() => signIn('github')}
      >
      <FaGithub color='#eba417'/>
      Sign In with GitHub
    </button>
  )
}