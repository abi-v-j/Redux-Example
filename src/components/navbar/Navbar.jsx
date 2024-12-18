import React from 'react'
import { changeTheme } from '../../redux/counterSlice'
import { useDispatch, useSelector } from 'react-redux'
import Styles from './navbar.module.css'

const Navbar = () => {
  const theme = useSelector((state) => state.themeChanger.value)


  const dispatch = useDispatch()

  return (
    <div className={`${Styles.Container} ${theme ? Styles.ContainerDark : Styles.ContainerLight} `}>
      <button className={`${theme ? Styles.ContainerDark : Styles.ContainerLight}`} onClick={() => dispatch(changeTheme())}>Click Here</button>
    </div>
  )
}

export default Navbar