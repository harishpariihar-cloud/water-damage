export interface ServiceLocationPage {
  slug: string;
  serviceSlug: string;
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  intro: string[];
  causesHeading: string;
  causes: { title: string; text: string }[];
  considerationsHeading: string;
  considerations: string[];
  workHeading: string;
  workIncludes: string[];
  faqs: { question: string; answer: string }[];
  relatedSlugs: string[];
}

export const serviceLocationPages: ServiceLocationPage[] = [
  {
    slug: 'water-damage-restoration-elizabeth-nj',
    serviceSlug: 'water-damage-restoration',
    title: 'Water Damage Restoration in Elizabeth, NJ | G&OwaterDamage',
    description:
      'Water damage restoration in Elizabeth and Elizabethport, NJ. Call G&OwaterDamage at 908-677-5006 to discuss flooding, leaks, and property restoration.',
    h1: 'Water Damage Restoration in Elizabeth, NJ',
    eyebrow: 'Water Damage Restoration',
    intro: [
      'Water damage often starts small: a failed supply line behind a wall, a sump that stops during a storm, or a leak that spreads under flooring before anyone notices. G&OwaterDamage serves homes and businesses in Elizabeth, including Elizabethport, and starts every job with a phone conversation about where the water came from, which rooms are affected, and what the property needs next.',
      'Restoration is more than cleaning up the visible wet spots. Drywall, subflooring, insulation, and carpet can hold moisture long after the surface feels dry. That is why restoration work typically covers removing standing water, drying the structure, and cleaning the affected areas before anyone decides what needs to be rebuilt.',
    ],
    causesHeading: 'Common causes of water damage in Elizabeth homes and businesses',
    causes: [
      {
        title: 'Flooded basements',
        text: 'Heavy rain, a backed-up floor drain, or rising groundwater can fill a lower level faster than a sump system can clear it.',
      },
      {
        title: 'Burst or leaking pipes',
        text: 'A cracked fitting or failed supply line inside a wall or ceiling can release a large volume of water before it shows up on the surface.',
      },
      {
        title: 'Appliance leaks',
        text: 'Washing machine hoses, dishwashers, water heaters, and refrigerator water lines are frequent sources of slow leaks that go unnoticed for days.',
      },
      {
        title: 'Roof and storm intrusion',
        text: 'Damaged shingles, flashing, or gutters can send water down through ceilings and into wall cavities during a storm.',
      },
    ],
    considerationsHeading: 'What affects a water damage restoration job',
    considerations: [
      'Identify the source first. A clean supply-line leak and water that came in from outside are handled differently, so tell the team what you know when you call.',
      'Stay out of standing water near outlets, appliances, and electrical panels. If it is safe to do so, shut off power to the affected area at the breaker.',
      'Moisture left in building materials can lead to odor, warped flooring, and mold growth. Faster drying generally means less material has to be replaced.',
      'Photograph the damage before anything is moved or thrown away. Those photos are useful for your own records and any insurance paperwork.',
    ],
    workHeading: 'Restoration work included in a typical job',
    workIncludes: [
      'Phone assessment of the water source and the extent of the damage',
      'Removal of standing water from affected floors and basements',
      'Drying of walls, floors, and other building materials',
      'Cleaning of affected areas before repairs are discussed',
      'Guidance on which damaged materials may need to be replaced',
    ],
    faqs: [
      {
        question: 'How quickly can you respond?',
        answer:
          'Scheduling depends on your location and the team’s current workload. Call 908-677-5006 and the team will tell you what they can offer for your property.',
      },
      {
        question: 'Should I wait to call until the damage is cleaned up?',
        answer:
          'No. Call as soon as you notice water. Early action limits how far moisture spreads into walls and flooring.',
      },
      {
        question: 'Do you handle mold?',
        answer:
          'Mold remediation is not listed among the services on this website. Call to describe what you are seeing and ask whether it is something the team can help with.',
      },
      {
        question: 'Will my insurance cover this?',
        answer:
          'Coverage depends on your policy and the cause of the damage. Keep your photos and receipts, check with your insurer, and mention any claim when you call so the team can explain the work involved.',
      },
    ],
    relatedSlugs: ['water-extraction-elizabeth-nj', 'structural-drying-elizabeth-nj'],
  },
  {
    slug: 'water-extraction-elizabeth-nj',
    serviceSlug: 'water-extraction',
    title: 'Water Extraction in Elizabeth, NJ | G&OwaterDamage',
    description:
      'Water extraction and standing water removal in Elizabeth and Elizabethport, NJ. Call G&OwaterDamage at 908-677-5006 to describe your flooding.',
    h1: 'Water Extraction in Elizabeth, NJ',
    eyebrow: 'Water Extraction and Removal',
    intro: [
      'When water sits on a floor, it begins soaking into subflooring, baseboards, and the bottom of drywall within hours. Water extraction is the step that removes that standing water before it spreads, which makes it the first priority in most cleanups in Elizabeth.',
      'G&OwaterDamage performs water extraction for residential and commercial properties in Elizabeth and Elizabethport. Call and describe the water, the rooms involved, and how deep it is. The team will explain what to expect and what you can safely do while you wait.',
    ],
    causesHeading: 'What typically leaves standing water behind',
    causes: [
      {
        title: 'Basement flooding',
        text: 'Water pushing through foundation cracks, wall joints, or floor drains can leave several inches across a basement floor.',
      },
      {
        title: 'Sump pump failure',
        text: 'A pump that stops during a storm lets groundwater rise faster than it can be drained, especially when the power is out.',
      },
      {
        title: 'Ruptured supply lines',
        text: 'A pipe that bursts inside a wall or ceiling can discharge water into a room continuously until the supply is shut off.',
      },
      {
        title: 'Overflows and clogs',
        text: 'Tubs, toilets, and laundry hookups that overflow can flood bathrooms and utility rooms within minutes.',
      },
    ],
    considerationsHeading: 'Safety and timing for water extraction',
    considerations: [
      'Standing water can hide electrical hazards and contaminants. Wear closed shoes and do not wade barefoot.',
      'Do not operate outlets, plugged-in appliances, or electronics while standing in water.',
      'Carpet and padding wick water like a sponge. Removing water early keeps it from reaching the subfloor.',
      'Move furniture, rugs, and valuables to dry, raised spots as soon as it is safe to do so.',
    ],
    workHeading: 'What the extraction step covers',
    workIncludes: [
      'Removal of standing water from floors and basement areas',
      'Water removal from carpet and padding where access allows',
      'Transition from extraction into drying once the standing water is cleared',
      'Phone guidance on temporary steps to take before the team arrives',
    ],
    faqs: [
      {
        question: 'How much water can be removed?',
        answer:
          'The work depends on the depth of the water and the area affected. Describe the situation when you call and the team will tell you what to expect.',
      },
      {
        question: 'Is it safe to walk through standing water?',
        answer:
          'Not always. Standing water can hide electrical hazards and contaminated material. If water is near outlets or an electrical panel, stay out of it and call your utility provider and G&OwaterDamage.',
      },
      {
        question: 'Do I need to pull up carpet before extraction?',
        answer:
          'Not always. Whether carpet or padding must come out depends on how long it has been wet and what sits beneath it. Call to talk through your floors.',
      },
      {
        question: 'What if the water came from a sewage backup?',
        answer:
          'Sewage cleanup is not listed as a service on this website. Call before you handle the water yourself so the team can tell you whether it can help with your situation.',
      },
    ],
    relatedSlugs: ['water-damage-restoration-elizabeth-nj', 'structural-drying-elizabeth-nj'],
  },
  {
    slug: 'structural-drying-elizabeth-nj',
    serviceSlug: 'structural-drying',
    title: 'Structural Drying in Elizabeth, NJ | G&OwaterDamage',
    description:
      'Structural drying and dehumidification for water-affected homes and businesses in Elizabeth and Elizabethport, NJ. Call 908-677-5006.',
    h1: 'Structural Drying in Elizabeth, NJ',
    eyebrow: 'Structural Drying',
    intro: [
      'A room can look dry while water is still trapped inside the wall cavity, under the floor, or in the framing. Structural drying targets those hidden materials with dehumidification, pulling moisture out of the building before it causes rot, warping, or lingering odor.',
      'G&OwaterDamage provides structural drying for homes and businesses in Elizabeth and Elizabethport. Call to talk through the affected rooms and the source of the moisture, and to learn how the drying work would be set up for your property.',
    ],
    causesHeading: 'Why moisture stays inside a building',
    causes: [
      {
        title: 'Water inside wall cavities',
        text: 'Moisture from a leak can travel up inside a wall, where it is hard to see and slow to evaporate.',
      },
      {
        title: 'Saturated subfloors',
        text: 'Water that reaches a subfloor can stay trapped beneath finished flooring long after the surface has dried.',
      },
      {
        title: 'Humid conditions after a flood',
        text: 'Humid air slows evaporation, which is why dehumidification is often needed even after standing water is gone.',
      },
      {
        title: 'Damp basements',
        text: 'Lower levels in wet weather can stay damp for a long time without equipment running to pull moisture out.',
      },
    ],
    considerationsHeading: 'Signs drying is still needed',
    considerations: [
      'Warped baseboards, cupped hardwood, and soft or bubbling drywall are signs moisture has reached structural materials.',
      'Drying is confirmed with moisture readings, not by how the surface feels. Materials should be dry before walls are closed or new flooring is installed.',
      'Repairs placed over damp materials can trap moisture and cause problems later.',
      'Keep the affected space closed while equipment runs, so moisture is removed rather than replaced by humid outside air.',
    ],
    workHeading: 'What structural drying includes',
    workIncludes: [
      'Dehumidification of the affected rooms and building materials',
      'Drying of walls, floors, and subfloors where moisture has reached them',
      'Checks on drying progress while the work continues',
      'Guidance on when the area should be ready for repairs',
    ],
    faqs: [
      {
        question: 'How long does structural drying take?',
        answer:
          'It depends on how deep the moisture went, the materials involved, and the humidity in the building. Call to discuss your property and get a sense of the work involved.',
      },
      {
        question: 'How do I know when things are dry?',
        answer:
          'Drying is confirmed with moisture readings rather than by looking at the surface. Repairs should wait until the materials test dry.',
      },
      {
        question: 'Can I run my own dehumidifier instead?',
        answer:
          'A household unit may help a small, lightly affected room. It does not replace structural drying in a flooded building. Call to discuss which approach fits your situation.',
      },
      {
        question: 'Do you handle repairs after drying?',
        answer:
          'Work after drying depends on what was damaged. Talk through the scope of the job with the team by phone at 908-677-5006.',
      },
    ],
    relatedSlugs: ['water-damage-restoration-elizabeth-nj', 'water-extraction-elizabeth-nj'],
  },
  {
    slug: 'flood-damage-cleanup-elizabeth-nj',
    serviceSlug: 'flood-damage-cleanup',
    title: 'Flood Damage Cleanup in Elizabeth, NJ | G&OwaterDamage',
    description:
      'Flood damage cleanup in Elizabeth and Elizabethport, NJ. Call G&OwaterDamage at 908-677-5006 to discuss flood water in your home or business.',
    h1: 'Flood Damage Cleanup in Elizabeth, NJ',
    eyebrow: 'Flood Damage Cleanup',
    intro: [
      'Flood water is different from a leak. It rises from outside, can carry mud and debris, and can soak into floors, walls, and stored belongings at the same time. Cleanup starts with getting the water out, then deciding which materials can be dried and which cannot be saved.',
      'G&OwaterDamage can talk through flood damage in Elizabeth and Elizabethport by phone, including how high the water reached and which rooms are affected. Call before you start pulling out materials so the work can be planned.',
    ],
    causesHeading: 'How flooding happens in Elizabeth',
    causes: [
      {
        title: 'Storm runoff',
        text: 'Heavy rain can fill streets and enter ground-level rooms through doors, windows, and vents.',
      },
      {
        title: 'Saturated ground',
        text: 'When soil is waterlogged, water can seep through foundation walls and floors.',
      },
      {
        title: 'Blocked drains',
        text: 'Drains that cannot carry storm water away can push it back into lower levels.',
      },
    ],
    considerationsHeading: 'What to think about after a flood',
    considerations: [
      'Floodwater can contain contaminants. Wear waterproof boots and gloves, and wash your hands after any contact.',
      'Do not turn on electrical equipment in flooded areas. Have an electrician check outlets and panels before power is restored.',
      'Items soaked in floodwater may need to be discarded. Photograph them first for your records.',
    ],
    workHeading: 'Flood cleanup work included in a typical job',
    workIncludes: [
      'Phone assessment of how the flood entered and how far it reached',
      'Removal of standing water from floors and lower levels',
      'Removal of materials that cannot be dried, confirmed with you first',
      'Drying and moisture checks on the structure before repairs',
    ],
    faqs: [
      {
        question: 'Is flood damage covered by homeowners insurance?',
        answer:
          'Many standard policies exclude flood damage, so check your policy or ask your insurer about flood coverage. Keep photos and receipts for any claim.',
      },
      {
        question: 'How long until a flooded room is dry?',
        answer:
          'It depends on the depth of the water, the materials involved, and the humidity in the building. Drying is confirmed with moisture readings, not appearance.',
      },
    ],
    relatedSlugs: ['water-extraction-elizabeth-nj', 'storm-damage-restoration-elizabeth-nj'],
  },
  {
    slug: 'basement-water-cleanup-elizabeth-nj',
    serviceSlug: 'basement-water-cleanup',
    title: 'Basement Water Cleanup in Elizabeth, NJ | G&OwaterDamage',
    description:
      'Basement water cleanup in Elizabeth and Elizabethport, NJ. Call 908-677-5006 about water in your basement, sump pump failures, and drain backups.',
    h1: 'Basement Water Cleanup in Elizabeth, NJ',
    eyebrow: 'Basement Water Cleanup',
    intro: [
      'Basements collect water because they sit below ground level. Rain, groundwater, and drain problems can all push water into the lowest part of a home, where it can reach stored items, the furnace, and finished rooms before anyone notices.',
      'Cleaning up a basement means more than emptying the floor. Walls, the bottom of drywall, and stored materials can hold moisture, so the work usually includes drying the lower level and checking whether moisture has spread.',
    ],
    causesHeading: 'Why basements take on water in Elizabeth',
    causes: [
      {
        title: 'Sump pump failure',
        text: 'A pump that stops, loses power, or cannot keep up during heavy rain lets water rise.',
      },
      {
        title: 'Foundation cracks and seepage',
        text: 'Water can enter through cracks and joints when the surrounding soil is saturated.',
      },
      {
        title: 'Floor drain backups',
        text: 'When drains cannot carry water away, it can come back up into the lower level.',
      },
    ],
    considerationsHeading: 'Basement-specific considerations',
    considerations: [
      'Items on the floor soak up water quickly. Move what is safe to move to higher shelves or other rooms.',
      'Check the furnace, water heater, and electrical panel before entering. Water near these units can be hazardous.',
      'Basements can take longer to dry than other rooms because of humidity and thick building materials.',
    ],
    workHeading: 'Basement cleanup work included',
    workIncludes: [
      'Removal of water from the basement floor and low areas',
      'Drying of walls, floors, and stored building materials',
      'Moisture checks to see whether damp materials are drying',
      'Guidance on items that may need removal or replacement',
    ],
    faqs: [
      {
        question: 'Can you help if my sump pump failed?',
        answer:
          'Describe what happened by phone and the team will explain what they can help with. Pump repair is a separate plumbing job, so ask about the scope when you call.',
      },
      {
        question: 'Why does my basement smell musty after a flood?',
        answer:
          'Moisture trapped in materials often causes odor. Drying the materials and checking for hidden moisture usually addresses the source.',
      },
    ],
    relatedSlugs: ['water-extraction-elizabeth-nj', 'structural-drying-elizabeth-nj'],
  },
  {
    slug: 'water-damage-inspection-elizabeth-nj',
    serviceSlug: 'water-damage-inspection',
    title: 'Water Damage Inspection in Elizabeth, NJ | G&OwaterDamage',
    description:
      'Water damage inspection in Elizabeth and Elizabethport, NJ. Call 908-677-5006 to have hidden moisture and water sources assessed.',
    h1: 'Water Damage Inspection in Elizabeth, NJ',
    eyebrow: 'Water Damage Inspection',
    intro: [
      'Sometimes the water is gone but the damage is not. A stain on a ceiling, a soft floor, or a musty smell can mean water has moved into walls, subfloors, or cabinets. An inspection looks at where the moisture is and whether it is still active.',
      'G&OwaterDamage can talk through what you are seeing in a home or business in Elizabeth and explain whether an inspection makes sense before any work begins. Call to describe the symptoms and where they appear.',
    ],
    causesHeading: 'Signs that point to hidden water damage',
    causes: [
      {
        title: 'Stains and bubbling paint',
        text: 'Discoloration on walls or ceilings can mean moisture is moving through the materials.',
      },
      {
        title: 'Soft or warped floors',
        text: 'Floors that give underfoot or buckle may have water in the subfloor.',
      },
      {
        title: 'Persistent musty odors',
        text: 'Smells that return often come from moisture in materials that cannot be seen.',
      },
    ],
    considerationsHeading: 'What an inspection can help answer',
    considerations: [
      'Where the water came from, and whether the source is still active.',
      'Which areas are holding moisture, including spaces behind walls and under flooring.',
      'Whether damage can be dried in place or whether materials need to be removed.',
    ],
    workHeading: 'What the inspection covers',
    workIncludes: [
      'Phone review of the symptoms and history of the water',
      'On-site review of affected rooms and visible materials',
      'Moisture readings where appropriate',
      'Explanation of findings and next steps, discussed with you',
    ],
    faqs: [
      {
        question: 'Is an inspection the same as restoration?',
        answer:
          'No. An inspection finds out what is wrong. Restoration is the work that follows, if you decide to go ahead.',
      },
      {
        question: 'Will you tell me what caused the damage?',
        answer:
          'The team will share what they find. Confirming the cause may require a plumber or other trade, so ask on the phone what is involved.',
      },
    ],
    relatedSlugs: ['water-damage-restoration-elizabeth-nj', 'burst-pipe-water-damage-elizabeth-nj'],
  },
  {
    slug: 'burst-pipe-water-damage-elizabeth-nj',
    serviceSlug: 'burst-pipe-water-damage',
    title: 'Burst Pipe Water Damage Cleanup in Elizabeth, NJ | G&OwaterDamage',
    description:
      'Burst pipe water damage cleanup in Elizabeth and Elizabethport, NJ. Call 908-677-5006 after a pipe bursts or a supply line leaks.',
    h1: 'Burst Pipe Water Damage Cleanup in Elizabeth, NJ',
    eyebrow: 'Burst Pipe Water Damage',
    intro: [
      'A burst pipe can release a lot of water in a short time, often inside a wall or ceiling where it is hard to reach. Shutting off the water supply comes first, followed by removing standing water and drying the structure.',
      'G&OwaterDamage handles cleanup after burst pipe water damage in Elizabeth and Elizabethport. Call to explain where the water came from, which rooms are involved, and whether the water has been shut off.',
    ],
    causesHeading: 'Common reasons pipes burst or leak',
    causes: [
      {
        title: 'Freezing temperatures',
        text: 'Water in pipes expands when it freezes, which can crack or split them.',
      },
      {
        title: 'Aging supply lines',
        text: 'Older pipes and fittings can weaken over time and fail under pressure.',
      },
      {
        title: 'Pressure changes',
        text: 'Sudden surges in water pressure can stress connections and joints.',
      },
    ],
    considerationsHeading: 'Burst pipe considerations',
    considerations: [
      'If you can do so safely, shut off the water supply to the affected area at a valve or fixture shutoff.',
      'Turn off electricity to flooded areas if it is safe, and stay away from electrical devices in standing water.',
      'Water inside walls can keep moving for hours. Tell the team if you suspect water is trapped in a wall or ceiling.',
    ],
    workHeading: 'Burst pipe cleanup work included',
    workIncludes: [
      'Removal of water from floors and affected rooms',
      'Drying of wall cavities, subfloors, and other affected materials',
      'Moisture checks to confirm the area is drying',
      'Discussion of damaged materials that may need repair',
    ],
    faqs: [
      {
        question: 'Should I fix the pipe myself?',
        answer:
          'Repairing the pipe is a plumbing job. Shut off the water if you can, then call a plumber. Call G&OwaterDamage about the water cleanup.',
      },
      {
        question: 'Will the drywall need to be removed?',
        answer:
          'Sometimes, depending on how long water sat in the wall. Call to discuss what the team finds.',
      },
    ],
    relatedSlugs: ['water-extraction-elizabeth-nj', 'structural-drying-elizabeth-nj'],
  },
  {
    slug: 'sewage-cleanup-elizabeth-nj',
    serviceSlug: 'sewage-cleanup',
    title: 'Sewage Backup Cleanup in Elizabeth, NJ | G&OwaterDamage',
    description:
      'Sewage backup cleanup in Elizabeth and Elizabethport, NJ. Call G&OwaterDamage at 908-677-5006 to confirm availability before handling sewage water.',
    h1: 'Sewage Backup Cleanup in Elizabeth, NJ',
    eyebrow: 'Sewage Backup Cleanup',
    intro: [
      'Sewage backups are different from clean water leaks. The water can carry bacteria and other contaminants, so it needs careful handling and should not be treated like an ordinary spill.',
      'Availability of sewage cleanup must be confirmed by phone for your property. Call 908-677-5006 before you begin any cleanup yourself so the team can tell you what it can help with.',
    ],
    causesHeading: 'What causes sewage backups',
    causes: [
      {
        title: 'Blocked sewer lines',
        text: 'Roots, grease, or debris can block the line and push sewage back into the home.',
      },
      {
        title: 'Heavy storms',
        text: 'Heavy rain can overwhelm sewer lines and drains, causing water to back up.',
      },
      {
        title: 'Failed drain connections',
        text: 'Cracked or disconnected pipes can let sewage leak into lower levels.',
      },
    ],
    considerationsHeading: 'Safety first with sewage',
    considerations: [
      'Keep children and pets out of affected areas and avoid contact with the water.',
      'If you must enter the area, wear gloves, eye protection, and a mask, and wash thoroughly afterward.',
      'Do not run fans or appliances in wet areas until electrical safety has been checked.',
    ],
    workHeading: 'What to ask about sewage work',
    workIncludes: [
      'Phone review of the backup source and affected rooms',
      'Confirmation of whether sewage cleanup is available for your property',
      'Guidance on the next safe steps while you wait',
    ],
    faqs: [
      {
        question: 'Can I clean up a sewage backup myself?',
        answer:
          'It is not recommended, because sewage water carries health risks. Call to confirm whether the team can help with your property.',
      },
      {
        question: 'Who fixes the sewer line?',
        answer:
          'A licensed plumber diagnoses and repairs sewer lines. Ask the plumber about the cause of the backup.',
      },
    ],
    relatedSlugs: ['water-damage-restoration-elizabeth-nj', 'storm-damage-restoration-elizabeth-nj'],
  },
  {
    slug: 'storm-damage-restoration-elizabeth-nj',
    serviceSlug: 'storm-damage-restoration',
    title: 'Storm Water Damage Restoration in Elizabeth, NJ | G&OwaterDamage',
    description:
      'Storm water damage restoration in Elizabeth and Elizabethport, NJ. Call G&OwaterDamage at 908-677-5006 after storm water enters your property.',
    h1: 'Storm Water Damage Restoration in Elizabeth, NJ',
    eyebrow: 'Storm Water Damage Restoration',
    intro: [
      'Storms can damage a property from above and below. Wind can open a roof or break a window, and heavy rain can push water through those openings into the ceilings, walls, and floors below.',
      'After a storm, G&OwaterDamage can help with storm-related water damage inside properties in Elizabeth and Elizabethport. Call to describe where the water entered and which rooms are affected.',
    ],
    causesHeading: 'How storms bring water inside',
    causes: [
      {
        title: 'Roof and flashing damage',
        text: 'Missing shingles or damaged flashing can let rain reach the attic and ceilings.',
      },
      {
        title: 'Broken windows and doors',
        text: 'Wind-driven rain can enter through openings damaged during the storm.',
      },
      {
        title: 'Overwhelmed gutters',
        text: 'Blocked or overflowing gutters can direct water against the foundation or into basements.',
      },
    ],
    considerationsHeading: 'Storm-specific considerations',
    considerations: [
      'Storm water can mix with outdoor debris. Wear protective footwear and gloves when handling affected materials.',
      'If it is safe, cover openings to limit additional water while repairs are arranged.',
      'Photograph the damage before cleanup begins, for insurance records.',
    ],
    workHeading: 'Storm restoration work included',
    workIncludes: [
      'Removal of standing water from affected interior areas',
      'Drying of walls, ceilings, and floors that took on water',
      'Moisture checks as drying progresses',
      'Discussion of roof, window, or other repairs that may be needed',
    ],
    faqs: [
      {
        question: 'Do you repair the roof?',
        answer:
          'Roof repair is usually handled by a roofing contractor. Call to ask what G&OwaterDamage can help with inside the property.',
      },
      {
        question: 'Should I wait for the storm to pass?',
        answer:
          'Stay safe first. Once it is safe to do so, call to describe the water.',
      },
    ],
    relatedSlugs: ['flood-damage-cleanup-elizabeth-nj', 'water-extraction-elizabeth-nj'],
  },
  {
    slug: 'commercial-water-damage-restoration-elizabeth-nj',
    serviceSlug: 'commercial-water-damage-restoration',
    title: 'Commercial Water Damage Restoration in Elizabeth, NJ | G&OwaterDamage',
    description:
      'Commercial water damage restoration in Elizabeth and Elizabethport, NJ. Call G&OwaterDamage at 908-677-5006 for offices, shops, and business properties.',
    h1: 'Commercial Water Damage Restoration in Elizabeth, NJ',
    eyebrow: 'Commercial Water Damage Restoration',
    intro: [
      'Water damage at a business can disrupt operations, inventory, and customers. Shops, offices, and other commercial properties often need water removed and drying started quickly so the space can be used again sooner.',
      'G&OwaterDamage works with residential and commercial properties in Elizabeth. Call to describe your business, the affected areas, and the water source, and to confirm availability for your property.',
    ],
    causesHeading: 'Common sources of commercial water damage',
    causes: [
      {
        title: 'Roof and plumbing failures',
        text: 'Leaks from roofs, restroom plumbing, or kitchen lines can affect several rooms at once.',
      },
      {
        title: 'Storm and flood water',
        text: 'Ground-level commercial spaces can take on water during heavy rain.',
      },
      {
        title: 'Equipment leaks',
        text: 'Ice machines, water heaters, and condensate lines can release water unnoticed.',
      },
    ],
    considerationsHeading: 'Business considerations',
    considerations: [
      'Move inventory, records, and equipment out of the affected area when it is safe to do so.',
      'Ask about the timing of the work so it can be planned around your operations.',
      'Keep records of the damage and any lost inventory for your insurer.',
    ],
    workHeading: 'Commercial work included',
    workIncludes: [
      'Phone review of the damage and the water source',
      'Removal of standing water from floors and affected areas',
      'Drying of walls, floors, and building materials',
      'Discussion of scheduling and what the space needs before reopening',
    ],
    faqs: [
      {
        question: 'Can you work outside business hours?',
        answer:
          'Scheduling is discussed by phone. Call to ask whether your preferred timing is possible.',
      },
      {
        question: 'Do you handle commercial insurance claims?',
        answer:
          'Call to discuss your claim. Keep records of the damage and your insurer’s contact details.',
      },
    ],
    relatedSlugs: ['water-damage-restoration-elizabeth-nj', 'structural-drying-elizabeth-nj'],
  },
];

export function getServiceLocationPage(slug: string): ServiceLocationPage | undefined {
  return serviceLocationPages.find((page) => page.slug === slug);
}
