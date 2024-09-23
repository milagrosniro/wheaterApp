import { useState } from "react"
import { countries } from "../../data/countries"
import styles from './form.module.css'
import { ISearchState } from "./form.types"

const Form = () => {
    const [search, setSearch] = useState<ISearchState>({
        country:'',
        city:''
    })

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        setSearch({...search, [e.target.name]: e.target.value})

    }
  return (
    <form className={styles.form}>
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