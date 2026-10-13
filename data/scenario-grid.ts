import { ScenarioItem } from "@/types/types"

const images = [
  "/scenario-gird/icj1.jpeg",
  "/scenario-gird/icj2.jpeg",
  "/scenario-gird/icj3.jpeg",
  "/scenario-gird/icj4.jpeg",
  "/scenario-gird/icj5.jpeg",
  "/scenario-gird/icj6.jpeg",
]

export const englishScenarios: ScenarioItem[] = [
  { id: "vehicles", title: "Electric vehicles", description: "Explore new and pre-owned EVs for personal, commercial and dealer needs.", imageUrl: images[0] },
  { id: "boda-tuk-tuk", title: "Boda boda & tuk-tuks", description: "Consider electric two- and three-wheel transport for everyday work.", imageUrl: images[1] },
  { id: "commercial", title: "Light commercial vehicles", description: "Find electric vehicle options for business and delivery operations.", imageUrl: images[2] },
  { id: "fleet", title: "Fleet transition", description: "Plan vehicle selection and a phased transition to electric mobility.", imageUrl: images[3] },
  { id: "charging", title: "Charging infrastructure", description: "Plan AC or DC charging for homes, workplaces, businesses and public sites.", imageUrl: images[4] },
  { id: "technical-support", title: "Technical support", description: "Get guidance on vehicle selection, charging and EV strategy.", imageUrl: images[5] },
]

export const swahiliScenarios: ScenarioItem[] = [
  { id: "vehicles", title: "Magari ya umeme", description: "Chunguza magari mapya na yaliyotumika kwa matumizi binafsi, biashara na wauzaji.", imageUrl: images[0] },
  { id: "boda-tuk-tuk", title: "Boda boda na tuk-tuk", description: "Fikiria usafiri wa umeme wa magurudumu mawili na matatu kwa kazi za kila siku.", imageUrl: images[1] },
  { id: "commercial", title: "Magari mepesi ya biashara", description: "Pata magari ya umeme yanayofaa biashara na shughuli za usafirishaji.", imageUrl: images[2] },
  { id: "fleet", title: "Mpito wa magari ya biashara", description: "Panga uchaguzi wa magari na mpito wa hatua kwa hatua kuelekea umeme.", imageUrl: images[3] },
  { id: "charging", title: "Miundombinu ya kuchaji", description: "Panga chaji ya AC au DC kwa nyumba, maeneo ya kazi, biashara na maeneo ya umma.", imageUrl: images[4] },
  { id: "technical-support", title: "Usaidizi wa kiufundi", description: "Pata mwongozo kuhusu magari, kuchaji na mikakati ya uhamaji wa umeme.", imageUrl: images[5] },
]

export const chineseScenarios: ScenarioItem[] = [
  { id: "vehicles", title: "电动汽车", description: "为个人、商业用途和经销商探索全新及二手电动汽车。", imageUrl: images[0] },
  { id: "boda-tuk-tuk", title: "电动摩托车与三轮车", description: "了解适合日常运营的电动两轮和三轮交通方案。", imageUrl: images[1] },
  { id: "commercial", title: "轻型商用车", description: "为企业和配送业务寻找合适的电动汽车。", imageUrl: images[2] },
  { id: "fleet", title: "车队电动化", description: "规划车辆选型和分阶段的电动化转型。", imageUrl: images[3] },
  { id: "charging", title: "充电基础设施", description: "为住宅、工作场所、企业和公共场所规划交流或直流充电。", imageUrl: images[4] },
  { id: "technical-support", title: "技术支持", description: "获取车辆选型、充电设施和电动出行战略方面的建议。", imageUrl: images[5] },
]