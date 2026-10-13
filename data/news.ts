export type NewsCategory = "sustainable-news" | "events" | "success-stories"

export interface NewsArticle {
  id: number
  slug: string
  category: NewsCategory
  title: string
  date: string // formatted string e.g. "2025.06.25"
  excerpt: string
  imageUrl: string
  isFeatured?: boolean
  content?: string // Full article content for details page
}

export const newsData: NewsArticle[] = [
  // ─── Success Stories ────────────────────────────────────────────────────────
  {
    id: 1,
    slug: "donar-charging-station-kenya",
    category: "success-stories",
    title: "Donar charging station in Kenya",
    date: "2025.06.25",
    excerpt:
      "In addition to conventional DC charging stations, the charging stations built by Donar in Kenya also have distributed solar energy storage charging stations...",
    imageUrl: "/story-1.jpeg",
    isFeatured: true,
    content: `In addition to conventional DC charging stations, the charging stations built by Donar in Kenya also have distributed solar energy storage charging stations installed, bringing more economically valuable green energy to the local market.

The project represents a significant milestone in Kenya's transition to sustainable transportation infrastructure. By integrating solar energy storage systems with traditional charging stations, Donar has created a hybrid solution that addresses both energy reliability and environmental concerns.

Key features of the Kenya charging station project include:

• **Solar Integration**: Each station is equipped with high-efficiency solar panels that capture and store energy during daylight hours
• **Energy Storage**: Advanced battery systems ensure consistent power availability even during grid outages
• **Smart Grid Connectivity**: Stations are connected to a smart grid that optimizes energy distribution based on demand
• **Local Economic Impact**: The project has created numerous jobs and supports local businesses through reduced energy costs

The success of this project has positioned Kenya as a leader in sustainable EV infrastructure development in East Africa. Donar continues to expand its presence across the region, with plans to deploy additional stations in major cities and along key transportation routes.

This initiative aligns with Kenya's commitment to reducing carbon emissions and promoting renewable energy adoption as outlined in the country's Vision 2030 development strategy.`,
  },
  {
    id: 2,
    slug: "donar-charging-station-vietnam",
    category: "success-stories",
    title: "Donar charging station in Vietnam",
    date: "2025.06.25",
    excerpt:
      "Donar's charging stations in Vietnam have both DC charging stations and AC charging stations, providing local users with the ultimate charging...",
    imageUrl: "/story-2.jpeg",
  },
  {
    id: 3,
    slug: "donar-charging-station-china",
    category: "success-stories",
    title: "Donar charging station in China",
    date: "2025.04.27",
    excerpt:
      "Donar's charging stations in China are installed on highways, residential areas, tourist attractions, etc., making it convenient for electric vehicle...",
    imageUrl: "/story-3.jpeg",
  },

  // ─── Sustainable News ────────────────────────────────────────────────────────
  {
    id: 4,
    slug: "donar-green-energy-initiative",
    category: "sustainable-news",
    title: "Donar Green Energy Initiative 2025",
    date: "2025.05.10",
    excerpt:
      "Donar accelerates its commitment to renewable energy integration across all EV charging infrastructure deployments in Sub-Saharan Africa...",
    imageUrl: "/scenario-gird/icj1.jpeg",
    isFeatured: true,
    content: `Donar accelerates its commitment to renewable energy integration across all EV charging infrastructure deployments in Sub-Saharan Africa with the launch of its ambitious Green Energy Initiative 2025.

This comprehensive initiative represents a $50 million investment in sustainable charging infrastructure across the continent. The program aims to deploy 500 solar-powered charging stations by 2027, significantly reducing reliance on grid electricity and promoting clean energy adoption.

The initiative focuses on three core pillars:

**Renewable Integration**
- Solar panel installation at all new charging stations
- Wind energy integration where feasible
- Advanced energy storage systems for 24/7 operation
- Smart energy management to optimize renewable usage

**Community Impact**
- Local workforce development and training programs
- Partnerships with local businesses and suppliers
- Educational initiatives on sustainable technology
- Job creation in renewable energy sector

**Environmental Goals**
- Reduction of carbon emissions by 40% across operations
- Zero-emission charging solutions
- Sustainable materials and construction practices
- Wildlife and environmental protection measures

"The Green Energy Initiative 2025 represents our strongest commitment yet to sustainable development in Africa," says Donar's CEO. "We're not just building charging stations; we're building a sustainable future for communities across the continent."

The initiative has already received support from various government agencies and international organizations, recognizing its potential to drive meaningful change in Africa's energy landscape.`,
  },
  {
    id: 5,
    slug: "solar-powered-charging-expansion",
    category: "sustainable-news",
    title: "Solar-Powered Charging Expansion",
    date: "2025.04.15",
    excerpt:
      "Expanding solar-integrated EV charging stations across East Africa to deliver clean, reliable energy to local communities and fleet operators...",
    imageUrl: "/scenario-gird/icj2.jpeg",
  },
  {
    id: 6,
    slug: "carbon-neutral-charging-network",
    category: "sustainable-news",
    title: "Building a Carbon-Neutral Charging Network",
    date: "2025.03.22",
    excerpt:
      "Our latest carbon-neutral initiative targets zero-emission charging solutions by 2030, leveraging grid-scale energy storage and renewable sources...",
    imageUrl: "/scenario-gird/icj3.jpeg",
  },

  // ─── Events ─────────────────────────────────────────────────────────────────
  {
    id: 7,
    slug: "africa-ev-summit-2025",
    category: "events",
    title: "Africa EV Summit 2025",
    date: "2025.06.01",
    excerpt:
      "Donar participated in the Africa EV Summit 2025 in Nairobi, showcasing its latest fast-charging technology and microgrid energy solutions...",
    imageUrl: "/scenario-gird/icj4.jpeg",
    isFeatured: true,
    content: `Donar participated in the Africa EV Summit 2025 in Nairobi, showcasing its latest fast-charging technology and microgrid energy solutions to industry leaders and policymakers from across the continent.

The summit, held at the Kenyatta International Convention Centre, brought together over 500 delegates from 35 African countries to discuss the future of electric mobility in Africa. Donar's presence at the event highlighted the company's commitment to driving the EV revolution across the continent.

**Key Highlights from Donar's Exhibition:**

• **Ultra-Fast Charging Technology**: Demonstration of Donar's latest 350kW DC fast chargers capable of delivering 80% charge in under 15 minutes
• **Microgrid Solutions**: showcase of integrated solar-powered charging stations designed for off-grid applications
• **Smart Management Platform**: Live demonstration of Donar's cloud-based charging station management system
• **Partnership Announcements**: Strategic partnerships with local energy companies and government agencies

"Participating in the Africa EV Summit 2025 was an incredible opportunity to connect with key stakeholders and showcase our commitment to Africa's sustainable future," said Donar's Regional Director for Africa. "The enthusiasm and support we received validates our vision for electrified mobility across the continent."

During the summit, Donar also participated in panel discussions on infrastructure development, renewable energy integration, and policy frameworks for EV adoption. The company's experts shared insights on overcoming challenges unique to the African market, including grid reliability, infrastructure gaps, and affordability concerns.

The event concluded with Donar announcing plans to invest an additional $20 million in African markets over the next three years, focusing on Kenya, Nigeria, South Africa, and Ethiopia as priority markets.`,
  },
  {
    id: 8,
    slug: "donar-partner-conference",
    category: "events",
    title: "Donar Global Partner Conference",
    date: "2025.05.20",
    excerpt:
      "Our annual global partner conference brought together distributors and partners from over 30 countries to align on Donar's 2025–2030 expansion roadmap...",
    imageUrl: "/scenario-gird/icj5.jpeg",
  },
  {
    id: 9,
    slug: "smart-charging-expo-guangzhou",
    category: "events",
    title: "Smart Charging Expo – Guangzhou",
    date: "2025.03.14",
    excerpt:
      "Donar showcased its full product lineup at the Smart Charging Expo in Guangzhou, highlighting its distributed ESS and AC/DC charging product portfolio...",
    imageUrl: "/scenario-gird/icj6.jpeg",
  },
]
