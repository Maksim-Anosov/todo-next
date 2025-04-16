import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function getCurrentPositionAsync(): Promise<GeolocationPosition> {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

export async function getLocation() {
  try {
    const position = await getCurrentPositionAsync();
    const { latitude, longitude } = position.coords;
    const data = await getTempAndCityname(
      String(latitude),
      String(longitude)
    );
    return data;
  } catch (error) {
    console.error("Ошибка получения местоположения:", error);
  }
}

export type IWeather = {
  temp: number
  city: string
};

function getTempAndCityname(latitude: string, longitude: string): Promise<IWeather> {
  const url = `https://api.weatherapi.com/v1/current.json?key=566ce730aaf349ad82a95230252401&q=${latitude},${longitude}`;

  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return {
        temp: data.current.temp_c,
        city: data.location.name,
      };
    })
    .catch((error) => {
      throw new Error(`Ошибка при получении температуры и названия города: ${error.message}`);
    });
}