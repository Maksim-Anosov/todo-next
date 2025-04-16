"use client";

import { getLocation, IWeather } from "@/shared/lib/utils";
import { useEffect, useState } from "react";

export const Weather = () => {
  const [data, setData] = useState<IWeather | undefined>(undefined);
  useEffect(() => {
    getLocation().then((res) => setData(res));
  }, []);

  return (
    <div>
      <p>{data && `${data.city} now ${data.temp}°C`}</p>
    </div>
  );
};
