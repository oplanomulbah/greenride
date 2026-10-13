import { Product } from "@/types/types"

export const productsData: Product[] = [
  {
    id: 1,
    name: "Pocket",
    slug: "pocket",
    category: "AC Charging",
    subtitle: "AC Charging, 3.5kw, 7kw",
    description:
      "Portable charging station, convenient for home use, can still operate at high performance for long periods of time under extreme temperatures, high compatibility, making it the optimal choice for customers at home and abroad",
    imageUrl: [
      "/products/pocket-1.jpeg",
      "/products/pocket-3.png",
      "/products/pocket-4.png",
    ],
    maxPower: "3.5kw,7kw",
    bulletPoints: [
      "Very easy to use, no need to do anything except insert the connector",
      "Supports current adjustment and timing function.",
      'The 4.3" LCD screen indicates running status, as well as warning',
    ],
    detailedFeatures: [
      {
        icon: "network",
        title: "High compatibility",
        description:
          "supports charging of various models of electric vehicles to meet the charging needs of different car owners.",
      },
      {
        icon: "atom",
        title: "Intelligent identification",
        description:
          "can adjust the current and charging status according to the model, automatically cut off the power when full, convenient for user operation.",
      },
      {
        icon: "monitor-smartphone",
        title: "Remote control",
        description:
          "can remotely control the charging pile through the mobile phone APP, and check the charging status and power information in real time.",
      },
      {
        icon: "shield-check",
        title: "Safety protection",
        description:
          "with over-current, over-voltage, over-temperature and other protection functions to ensure charging safety.",
      },
    ],
    parametersImage: "/pocket-parameters.png",
  },
  {
    id: 2,
    name: "Enerbox",
    slug: "enerbox",
    category: "AC Charging",
    subtitle: "AC Charging, 7kw",
    description:
      "Enerbox is compact that is easy to operate and allows for quick installation and effortless maintenance. it is ideal for residential charging, destination charging, and car parks. Compatible with 99% of mainstream electric vehicles in the market",
    imageUrl: [
      "/products/enerbox-1.png",
      "/products/enerbox-2.png",
      "/products/enerbox-4.png",
    ],
    maxPower: "7kw",
    bulletPoints: [
      "Very easy to use, no need to do anything except insert the connector.",
      "The smart chip can automatically repair common charging errors and ensure the stable operation of the charger.",
      "The light bar indicates running status, as well as warning.",
    ],
    detailedFeatures: [
      {
        icon: "network",
        title: "Easy to use",
        description:
          "Very easy to use, no need to do anything except insert the connector.",
      },
      {
        icon: "atom",
        title: "Smart Chip",
        description:
          "automatically repair common charging errors and ensure the stable operation of the charger.",
      },
      {
        icon: "monitor-smartphone",
        title: "Compact Design",
        description:
          "only 4.2kg after packing, Takes up very little space, easy to install and maintain.",
      },
      {
        icon: "shield-check",
        title: "Safe and reliable",
        description:
          "upports over temperature protection, overvoltage protection, undervoltage protection, overcurrent protection, leakage protection, etc.",
      },
    ],
    parametersImage: "/pocket-parameters.png",
  },
  {
    id: 3,
    name: "Thaifast",
    slug: "thaifast",
    category: "AC Charging",
    subtitle: "AC Charging, 7/11/22kW",
    imageUrl: ["/products/thaifast.png", "/products/thaifast.png"],
    maxPower: "7/11/22kW",
    bulletPoints: [
      "Equipped with 4.3 inch screen, real-time displays charging state.",
      "Supporting RFID,users can start/stop charging easily by swiping card.",
      "Supporting APP,users can monitor the state of the charger via app,also start/stop charging.",
    ],
    parametersImage: "/pocket-parameters.png",
  },
  // DC Products
  {
    id: 4,
    name: "Group-20",
    slug: "group-20",
    category: "DC Charging",
    subtitle: "DC Charging, Up to 80kw per group",
    imageUrl: [
      "/scenario-gird/icj4.jpeg",
      "/scenario-gird/icj5.jpeg",
      "/scenario-gird/icj6.jpeg",
    ],
    maxPower: "Up to 80kw per group",
    bulletPoints: [
      "The power of multiple DC chargers can be pooled into one charger to output, taking into account the number of services and charging power.",
      "When charging multiple vehicles, the chargers can negotiate independently and dynamically and adjust the group charging combination. It is possible to serve as many vehicles as possible while ensuring the most efficient use of grid power.",
      "The failure of a single charger will not affect other chargers to make the group.",
    ],
    parametersImage: "/pocket-parameters.png",
  },

  {
    id: 5,
    name: "Natural Cooling DC Fast Charger",
    slug: "natural-cooling-dc-fast-charger",
    category: "DC Charging",
    subtitle: "Natural Cooling DC Fast Charger, 40-160kw",
    imageUrl: [
      "/scenario-gird/icj4.jpeg",
      "/scenario-gird/icj5.jpeg",
      "/scenario-gird/icj6.jpeg",
    ],
    maxPower: "40-160kw",
    bulletPoints: [
      "Ultra Cooling & Ultra Quiet",
      "Easy Installation & Easy Expansion",
      "Ultra-Long Lifespan Design",
      "Easy Maintenance",
      "High-Efficiency Design",
    ],
    parametersImage: "/pocket-parameters.png",
  },

  // ESS  Products
  {
    id: 6,
    name: "Distributed Energy Storage System",
    slug: "distributed-energy-storage-system",
    category: "ESS",
    subtitle: "Distributed Energy Storage System, Max power",
    imageUrl: [
      "/scenario-gird/icj4.jpeg",
      "/scenario-gird/icj5.jpeg",
      "/scenario-gird/icj6.jpeg",
    ],
    maxPower: "Max power",
    bulletPoints: [
      "All-in-one home energy system",
      "High power",
      "IP65 protection level",
      "Supports multiple protocol",
    ],
    parametersImage: "/pocket-parameters.png",
  },

  {
    id: 7,
    name: "Mobile Energy Storage Charging System",
    slug: "mobile-energy-storage-charging-system",
    category: "ESS",
    subtitle: "Mobile Energy Storage Charging System, Max power",
    imageUrl: [
      "/scenario-gird/icj4.jpeg",
      "/scenario-gird/icj5.jpeg",
      "/scenario-gird/icj6.jpeg",
    ],
    maxPower: "Max power",
    bulletPoints: [
      "High efficiency",
      "Compatible with multiple startup mode",
      "Smart monitor",
      "Supports both AC and DC recharging modes",
    ],
    parametersImage: "/pocket-parameters.png",
  },

  //Platform Products
  {
    id: 8,
    name: "Charging Station Operation Platform",
    slug: "charging-station-operation-platform",
    category: "Platform",
    subtitle: "Charging Station Operation Platform, Max power",
    imageUrl: [
      "/scenario-gird/icj4.jpeg",
      "/scenario-gird/icj5.jpeg",
      "/scenario-gird/icj6.jpeg",
    ],
    maxPower: "Max power",
    bulletPoints: [
      "Station Management",
      "OTA",
      "Time-based Tariffs",
      "Smart Charging",
    ],
    parametersImage: "/pocket-parameters.png",
  },
]
