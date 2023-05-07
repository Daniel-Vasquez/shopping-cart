import styleLoader from './LoadingScreen.module.css'

export const LoadingScreen = () => {
  return (
    <div className={styleLoader.wrapper}>
      <div className={styleLoader.circle}></div>
      <div className={styleLoader.circle}></div>
      <div className={styleLoader.circle}></div>
      <div className={styleLoader.shadow}></div>
      <div className={styleLoader.shadow}></div>
      <div className={styleLoader.shadow}></div>
      <h1 className={styleLoader.text}>Loading</h1>
    </div>
  )
}