export interface ServiceArea {
  name: string;
  path: string;
  summary: string;
}

export const serviceAreas: ServiceArea[] = [
  {
    name: 'Elizabeth, NJ',
    path: '/water-damage-restoration-elizabeth-nj',
    summary: 'Our main service area, with dedicated pages for each water damage service.',
  },
  {
    name: 'Elizabethport, NJ',
    path: '/water-damage-restoration-elizabethport-nj',
    summary: 'The neighborhood where our office is based, at 505 Elizabeth Ave.',
  },
  {
    name: 'Linden, NJ',
    path: '/water-damage-restoration-linden-nj',
    summary: 'Water damage restoration for homes and businesses in Linden, with coverage confirmed by phone.',
  },
  {
    name: 'Roselle, NJ',
    path: '/water-damage-restoration-roselle-nj',
    summary: 'Water damage restoration for properties in Roselle, with coverage confirmed by phone.',
  },
  {
    name: 'Roselle Park, NJ',
    path: '/water-damage-restoration-roselle-park-nj',
    summary: 'Water damage restoration for properties in Roselle Park, with coverage confirmed by phone.',
  },
  {
    name: 'Hillside, NJ',
    path: '/water-damage-restoration-hillside-nj',
    summary: 'Water damage restoration for properties in Hillside, with coverage confirmed by phone.',
  },
  {
    name: 'Union, NJ',
    path: '/water-damage-restoration-union-nj',
    summary: 'Water damage restoration for properties in Union, with coverage confirmed by phone.',
  },
  {
    name: 'Rahway, NJ',
    path: '/water-damage-restoration-rahway-nj',
    summary: 'Water damage restoration for properties in Rahway, with coverage confirmed by phone.',
  },
  {
    name: 'Cranford, NJ',
    path: '/water-damage-restoration-cranford-nj',
    summary: 'Water damage restoration for properties in Cranford, with coverage confirmed by phone.',
  },
  {
    name: 'Newark, NJ',
    path: '/water-damage-restoration-newark-nj',
    summary: 'Water damage restoration for properties in Newark, with coverage confirmed by phone.',
  },
];

export interface ServiceAreaPage {
  slug: string;
  areaName: string;
  title: string;
  description: string;
  h1: string;
  intro: string[];
  considerations: string[];
  faqs: { question: string; answer: string }[];
}

const coverageFaq = (areaName: string) => ({
  question: `Do you serve ${areaName}?`,
  answer: `Coverage in ${areaName} is confirmed by phone. Call 908-677-5006 with your address and the team will tell you whether they can help.`,
});

export const serviceAreaPages: ServiceAreaPage[] = [
  {
    slug: 'water-damage-restoration-elizabethport-nj',
    areaName: 'Elizabethport',
    title: 'Water Damage Restoration in Elizabethport, NJ | G&OwaterDamage',
    description:
      'Water damage restoration in Elizabethport, NJ, from our office at 505 Elizabeth Ave. Call G&OwaterDamage at 908-677-5006.',
    h1: 'Water Damage Restoration in Elizabethport, NJ',
    intro: [
      'G&OwaterDamage is based at 505 Elizabeth Ave in Elizabethport, so this neighborhood is where our office sits. Properties here can face the same problems as the rest of the city, from basement flooding to leaks inside older walls.',
      'If you are in Elizabethport and dealing with water, call and describe the building type, the rooms affected, and where the water came from. The team will explain what can be done and how soon it can be started.',
    ],
    considerations: [
      'Basements and ground-level rooms are the first places water tends to collect after heavy rain.',
      'Storm water can reach lower levels quickly, so note how high the water rose before you call.',
      'Shared walls in multi-unit buildings can carry moisture from one unit into another.',
    ],
    faqs: [
      {
        question: 'Where is your office in Elizabethport?',
        answer: 'Our address is 505 Elizabeth Ave, Elizabethport, NJ 07206. Visits are arranged by phone.',
      },
    ],
  },
  {
    slug: 'water-damage-restoration-linden-nj',
    areaName: 'Linden',
    title: 'Water Damage Restoration in Linden, NJ | G&OwaterDamage',
    description:
      'Water damage restoration in Linden, NJ. Call G&OwaterDamage at 908-677-5006 to check coverage and discuss flooding or leaks.',
    h1: 'Water Damage Restoration in Linden, NJ',
    intro: [
      'Water damage in Linden often starts with a leak or a storm that overwhelms a basement or lower level. Restoration begins with finding the source, removing standing water, and getting moisture out of the structure.',
      'Call G&OwaterDamage to talk through your situation in Linden. Coverage is confirmed by phone, so the team can tell you what it can do for your property.',
    ],
    considerations: [
      'Lower levels and finished basements hold moisture longer than other rooms.',
      'Water that reaches flooring or subfloors can cause warping that appears days after the event.',
      'Photograph damage before moving furniture or removing materials.',
    ],
    faqs: [coverageFaq('Linden')],
  },
  {
    slug: 'water-damage-restoration-roselle-nj',
    areaName: 'Roselle',
    title: 'Water Damage Restoration in Roselle, NJ | G&OwaterDamage',
    description:
      'Water damage restoration in Roselle, NJ. Call G&OwaterDamage at 908-677-5006 to discuss leaks, flooding, and drying your property.',
    h1: 'Water Damage Restoration in Roselle, NJ',
    intro: [
      'Roselle homes and businesses can face water damage from leaking plumbing, appliance failures, and heavy storms. The first priority is usually shutting off the source and removing water before it spreads into walls and floors.',
      'Call G&OwaterDamage about water in your Roselle property. Describe what happened and the team will explain what can be done and whether service is available.',
    ],
    considerations: [
      'Appliance leaks, such as washing machine hoses, often go unnoticed behind walls and cabinets.',
      'Materials that stay damp can develop odors, so drying matters even after the surface looks dry.',
      'Note which rooms are affected and whether the water is still active before you call.',
    ],
    faqs: [coverageFaq('Roselle')],
  },
  {
    slug: 'water-damage-restoration-roselle-park-nj',
    areaName: 'Roselle Park',
    title: 'Water Damage Restoration in Roselle Park, NJ | G&OwaterDamage',
    description:
      'Water damage restoration in Roselle Park, NJ. Call G&OwaterDamage at 908-677-5006 to check coverage and talk through your water damage.',
    h1: 'Water Damage Restoration in Roselle Park, NJ',
    intro: [
      'Roselle Park properties can be affected by roof leaks, plumbing failures, and water that enters through basements during heavy rain. Early action helps limit how far moisture travels into walls and floors.',
      'Call G&OwaterDamage to discuss water damage in Roselle Park. Coverage is confirmed by phone so you know what to expect before any work is scheduled.',
    ],
    considerations: [
      'Roof and attic leaks can soak ceilings and insulation before they show on the living space below.',
      'Water in basements can wick into stored materials and wall bottoms.',
      'Ask about drying and moisture checks so you know when repairs can start.',
    ],
    faqs: [coverageFaq('Roselle Park')],
  },
  {
    slug: 'water-damage-restoration-hillside-nj',
    areaName: 'Hillside',
    title: 'Water Damage Restoration in Hillside, NJ | G&OwaterDamage',
    description:
      'Water damage restoration in Hillside, NJ. Call G&OwaterDamage at 908-677-5006 to discuss flooding, burst pipes, and property drying.',
    h1: 'Water Damage Restoration in Hillside, NJ',
    intro: [
      'Hillside homeowners and property managers often deal with water from burst pipes, leaking fixtures, and storm runoff. Knowing the source helps decide whether water extraction, drying, or an inspection comes first.',
      'Call G&OwaterDamage to describe the water in your Hillside property. The team will explain what they can help with and whether service is available for your address.',
    ],
    considerations: [
      'Water inside walls may not be visible, so watch for stains, soft drywall, or odors.',
      'Bathroom and kitchen leaks can affect floors and adjoining rooms.',
      'Keep records and photos for any insurance claim.',
    ],
    faqs: [coverageFaq('Hillside')],
  },
  {
    slug: 'water-damage-restoration-union-nj',
    areaName: 'Union',
    title: 'Water Damage Restoration in Union, NJ | G&OwaterDamage',
    description:
      'Water damage restoration in Union, NJ. Call G&OwaterDamage at 908-677-5006 to check coverage for leaks, flooding, and drying.',
    h1: 'Water Damage Restoration in Union, NJ',
    intro: [
      'Union properties range from older homes to multi-unit buildings, and water can travel between floors and units in ways that are hard to see. A leak in an upper unit can soak a lower ceiling before anyone notices.',
      'Call G&OwaterDamage about water damage in Union. Describe where the water is coming from and which spaces are affected, and the team will explain the next steps.',
    ],
    considerations: [
      'In multi-unit buildings, water may affect shared walls and ceilings.',
      'Older plaster can hold moisture for longer than modern drywall.',
      'Shut off the water source if you can do so safely.',
    ],
    faqs: [coverageFaq('Union')],
  },
  {
    slug: 'water-damage-restoration-rahway-nj',
    areaName: 'Rahway',
    title: 'Water Damage Restoration in Rahway, NJ | G&OwaterDamage',
    description:
      'Water damage restoration in Rahway, NJ. Call G&OwaterDamage at 908-677-5006 to discuss flooding, leaks, and structural drying.',
    h1: 'Water Damage Restoration in Rahway, NJ',
    intro: [
      'Rahway homes and businesses can face water damage from storm flooding, leaking supply lines, and drain backups. The sooner standing water is removed, the less likely it is to soak into subfloors and wall bottoms.',
      'Call G&OwaterDamage about water damage in Rahway. Coverage is confirmed by phone, and the team can explain what the work would involve for your property.',
    ],
    considerations: [
      'Storm flooding can leave a line of water damage on walls and baseboards.',
      'Commercial spaces may need water removed quickly to resume operations.',
      'Ground-level flooring such as carpet can hold water for a long time.',
    ],
    faqs: [coverageFaq('Rahway')],
  },
  {
    slug: 'water-damage-restoration-cranford-nj',
    areaName: 'Cranford',
    title: 'Water Damage Restoration in Cranford, NJ | G&OwaterDamage',
    description:
      'Water damage restoration in Cranford, NJ. Call G&OwaterDamage at 908-677-5006 to check coverage and discuss water in your home.',
    h1: 'Water Damage Restoration in Cranford, NJ',
    intro: [
      'Cranford homes often include basements, attics, and finished lower levels, and each can hold water from a different source. A leak in a second-floor bathroom can reach the kitchen ceiling, while a basement issue can affect stored belongings.',
      'Call G&OwaterDamage to talk about water damage in Cranford. Describe the affected spaces and the team will explain whether service is available and what it would involve.',
    ],
    considerations: [
      'Water from upper floors can run down through ceilings and into lower rooms.',
      'Finished basements often have carpet and drywall that need drying checks.',
      'Note any stains or odors that appear after the initial cleanup.',
    ],
    faqs: [coverageFaq('Cranford')],
  },
  {
    slug: 'water-damage-restoration-newark-nj',
    areaName: 'Newark',
    title: 'Water Damage Restoration in Newark, NJ | G&OwaterDamage',
    description:
      'Water damage restoration in Newark, NJ. Call G&OwaterDamage at 908-677-5006 to check coverage for flooding, leaks, and drying.',
    h1: 'Water Damage Restoration in Newark, NJ',
    intro: [
      'Newark has many buildings with basements, shared plumbing, and multi-unit layouts, which can make water harder to trace. Water from one unit can affect neighbors, and storm runoff can reach ground-level spaces.',
      'Call G&OwaterDamage about water damage in Newark. Coverage is confirmed by phone, so describe the building and the affected spaces and the team will explain what can be done.',
    ],
    considerations: [
      'In multi-unit buildings, tell the team which neighboring spaces may be affected.',
      'Basements and ground-floor units can take on water during heavy rain.',
      'Keep photos of damage and any building notices for your records.',
    ],
    faqs: [coverageFaq('Newark')],
  },
];

export function getServiceAreaPage(slug: string): ServiceAreaPage | undefined {
  return serviceAreaPages.find((page) => page.slug === slug);
}
