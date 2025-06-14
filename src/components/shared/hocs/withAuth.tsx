'use client'
import React, { ComponentType, ReactElement } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

function withAuth<P extends object>(
  WrappedComponent: ComponentType<P>,
): (props: P) => ReactElement | null {
  const AuthenticatedComponent = (props: P): ReactElement | null => {
    const { data, status } = useSession()
    const router = useRouter()

    if (status !== 'loading' && data == null) {
      router.replace('/auth/signin')

      return null
    }

    return React.createElement(WrappedComponent, props)
  }

  AuthenticatedComponent.displayName = `withAuth(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`

  return AuthenticatedComponent
}

export default withAuth
