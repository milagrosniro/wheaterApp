export interface IFormProps{
    fetchWeather: (search: ISearchState) => Promise<unknown>
}

export interface ISearchState{
    country: string;
    city: string;
}