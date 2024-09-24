import styles from './Alert.module.css'
import { IPropsAlert } from "./alert.types"

const Alert = ({children}: IPropsAlert) => {
  return (
    <div className={styles.alert}>{children}</div>
  )
}

export default Alert