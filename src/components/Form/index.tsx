import { useState } from "react"
import { countries } from "../../data/countries"
import Alert from "../Alert"
import styles from './form.module.css'
import { IFormProps, ISearchState } from "./form.types"

const Form = ({fetchWeather}: IFormProps) => {

    const [search, setSearch] = useState<ISearchState>({
        country:'',
        city:''
    })

    const [alert, setAlert] = useState('')

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        setSearch({...search, [e.target.name]: e.target.value})

    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        if(Object.values(search).includes('') || Object.values(search).includes(' ')){
           return setAlert('All fields are required')

        }else{
           return fetchWeather(search)
        }

           
    }
  return (
    <form className={styles.form}
    onSubmit={ handleSubmit}>
        {alert && <Alert><div>{alert}</div></Alert>}
        <div className={styles.field}>
            <label htmlFor="city">City:</label>
            <input
            id="city"
            type="text"
            name="city"
            placeholder="City"
            value={search.city}
            onChange={handleOnChange}
            />
        </div>

        <div>
            <label htmlFor="country">Country: </label>
            <select id="country"
            name="country"
            value={search.country}
            onChange={handleOnChange}
            >
                <option value={""} disabled >--Select country--</option>
                {countries.map(country => <option key={country.code} value={country.name}>{country.name}</option>)}
            </select>
        </div>
        <input
        className={styles.submit}
        type="submit"
        value="Check the weather"/>
    </form>
  )
}

export default Form