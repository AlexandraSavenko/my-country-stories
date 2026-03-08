import Header from '../header/Header';
import css from './Layout.module.css'

const Layout = ({children}) => {
  return (
    <div className={`${css.layout} container`}>
      <Header/>
      {children}
    </div>
  )
}

export default Layout;
