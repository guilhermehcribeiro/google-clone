"use client";

import { LocationRepository } from "@/repositories/LocationRepository";
import { useEffect, useState } from "react";

export default function CountryLookUp() {
  const [country, setCountry] = useState("Loading country...");

  const getCountry = async () => {
    const res = await LocationRepository.getCountry();

    if (!res?.country) {
      setCountry("Error to fetch country");
      return;
    }
    setCountry(res?.country);
  };

  useEffect(() => {
    getCountry();
  }, []);

  return <div>{country}</div>;
}
