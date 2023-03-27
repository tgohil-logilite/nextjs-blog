import Link from 'next/link'
import { useSession, signIn, signOut } from 'next-auth/react'

export default function Header () {
  const { data: session } = useSession();

  const handleSignin = (e) => {
    e.preventDefault()
    signIn()
  }

  const handleSignout = (e) => {
    e.preventDefault()
    signOut()
  }

  return (
    <div className='header' >
      
      {session && <a href="#" onClick={handleSignout} className="btn-signin" style={{float: 'right', paddingRight : '25px'}}>Sign out</a>  }
      {!session && <a href="#" onClick={handleSignin}  className="btn-signin" style={{float: 'right', paddingRight : '25px'}}>Sign in</a>  }
    </div>
  )
}