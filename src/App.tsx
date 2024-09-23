import styles from './app.module.css'
import Form from './components/Form'

const App = () => {
  return (
    <>
    <h1 className={styles.title}>Wheater App</h1>
    <div className={styles.container}>
      <Form/>
      <p>2</p>

    </div>
    </> 
  )
}

export default App
