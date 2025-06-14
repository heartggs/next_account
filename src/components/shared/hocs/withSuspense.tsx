'use client'
import React, { Suspense, ComponentType, ReactNode, ReactElement } from 'react'

function withSuspense<P extends object>(
  WrappedComponent: ComponentType<P>,
  options: { fallback: ReactNode },
): (props: P) => ReactElement {
  const SuspendedComponent = (props: P): ReactElement => {
    return (
      <Suspense fallback={options.fallback}>
        {React.createElement(WrappedComponent as ComponentType<P>, props)}
      </Suspense>
    )
  }

  SuspendedComponent.displayName = `withSuspense(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`

  return SuspendedComponent
}

export default withSuspense
