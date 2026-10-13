import type { Product } from "@/types/types"

const carImage = "/contact_nbanner.jpeg"
const chargerImage = "/products/pocket-1.jpeg"

export const productsData: Product[] = [
  {
    id: 1,
    slug: "vehicle-sales",
    category: "vehicles",
    nameKey: "service.vehicles",
    summaryKey: "product.vehicles.summary",
    imageUrl: [carImage],
  },
  {
    id: 2,
    slug: "ev-import-export-parts",
    category: "vehicles",
    nameKey: "service.import",
    summaryKey: "product.import.summary",
    imageUrl: [carImage],
  },
  {
    id: 3,
    slug: "fleet-sales-leasing",
    category: "fleet",
    nameKey: "service.fleet",
    summaryKey: "product.fleet.summary",
    imageUrl: [carImage],
  },
  {
    id: 4,
    slug: "ntsa-registration-assistance",
    category: "vehicles",
    nameKey: "service.registration",
    summaryKey: "product.registration.summary",
    imageUrl: [carImage],
  },
  {
    id: 5,
    slug: "charging-equipment-batteries",
    category: "charging",
    nameKey: "service.charging",
    summaryKey: "product.charging.summary",
    imageUrl: [chargerImage],
  },
  {
    id: 6,
    slug: "charging-station-development-operation",
    category: "infrastructure",
    nameKey: "service.stations",
    summaryKey: "product.stations.summary",
    imageUrl: [chargerImage],
  },
  {
    id: 7,
    slug: "electric-mobility-consultancy",
    category: "consultancy",
    nameKey: "service.consultancy",
    summaryKey: "product.consultancy.summary",
    imageUrl: [carImage],
  },
]