import React from 'react'
import Styles from './homepage.module.css'
import { useSelector } from 'react-redux'

const HomePage = () => {
  const theme = useSelector((state) => state.themeChanger.value)

  return (
    <div className={`${theme ? Styles.ContainerDark : Styles.ContainerLight}`}>HomePage</div>
  )
}

export default HomePage