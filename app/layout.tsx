import { ReactNode, FC } from 'react'

const Layout: FC<{children: ReactNode}> = ({ children }) => {
    return <>{children}</>
}

export default Layout