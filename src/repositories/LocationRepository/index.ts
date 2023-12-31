import Api from "@/services/api";
import { ILocation } from "@/types/Location";

export const LocationRepository = {
  getCountry: async (): Promise<ILocation> => {
    const res = await Api.get(
      `https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_IP_API_KEY}`,
      {
        next: { revalidate: 10000 },
      }
    );
    const data = await res?.json();
    return data;
  },
};
