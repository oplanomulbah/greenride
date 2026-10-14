import type { Product } from "@/types/types";

const carImage = "/contact_nbanner.jpeg";
const chargerImage = "/products/pocket-1.jpeg";

export const productsData: Product[] = [
  {
    id: 1,
    slug: "vehicle-sales",
    category: "vehicles",
    nameKey: "service.vehicles",
    summaryKey: "product.vehicles.summary",
    imageUrl: ["/kenya-charge-1.jpeg"],
  },
  {
    id: 2,
    slug: "ev-import-export-parts",
    category: "vehicles",
    nameKey: "service.import",
    summaryKey: "product.import.summary",
    imageUrl: ["/kenya-charge-2.jpeg"],
  },
  {
    id: 3,
    slug: "fleet-sales-leasing",
    category: "fleet",
    nameKey: "service.fleet",
    summaryKey: "product.fleet.summary",
    imageUrl: ["/car-charging.jpeg"],
  },
  {
    id: 4,
    slug: "ntsa-registration-assistance",
    category: "vehicles",
    nameKey: "service.registration",
    summaryKey: "product.registration.summary",
    imageUrl: ["/scenario-gird/icj1.jpg"],
  },
  {
    id: 5,
    slug: "charging-equipment-batteries",
    category: "charging",
    nameKey: "service.charging",
    summaryKey: "product.charging.summary",
    imageUrl: ["/scenario-gird/icj6.jpeg"],
  },
  {
    id: 6,
    slug: "charging-station-development-operation",
    category: "infrastructure",
    nameKey: "service.stations",
    summaryKey: "product.stations.summary",
    imageUrl: ["/scenario-gird/icj4.jpg"],
  },
  {
    id: 7,
    slug: "electric-mobility-consultancy",
    category: "consultancy",
    nameKey: "service.consultancy",
    summaryKey: "product.consultancy.summary",
    imageUrl: ["/cn_fbg.png"],
  },
];
