import css from './Layout.module.css'

const Layout = ({children}) => {
  return (
    <div className={`${css.layout} container`}>
      {children}
    </div>
  )
}

export default Layout;
