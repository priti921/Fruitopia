import React, { FC, ReactNode } from 'react'

type PropType = {
  children: ReactNode | ReactNode[]
}

const Container: FC<PropType> = ({ children }) => {
  return <div className="xl:px-6 xl:mx-auto xl:max-w-8x1">{children}</div>
}

export default Container;
