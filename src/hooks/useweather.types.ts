import { number, object, string } from 'valibot';
import { z } from "zod";

export interface IMainWeather {
    temp: number;
    temp_max: number;
    temp_min: number;
}

export interface IWeather {
    name: string;
    main : IMainWeather
}

// ZOD 

export const Weather = z.object({
    name: z.string(),
    main: z.object({
        temp: z.number(),
        temp_max: z.number(),
        temp_min: z.number()

    })

})

export type Weather = z.infer<typeof Weather>

// VALIBOT

export const WeatherSchema = object({
    name: string(),
    main: object({
        temp: number(),
        temp_max: number(),
        temp_min: number()
    })

})

// export type TypeWeatherSchema = Output<typeof WeatherSchema> 