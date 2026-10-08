// Rich curriculum and dynamic topic content engine for StoryBuddy
// Generates stories, mental analogies, dialogues, adaptive quizzes, reteach modules, and flashcards for ANY topic.

export const TOPIC_CURRICULUM = {
  // 1. Evaporation
  'Evaporation': {
    title: "Bella the Vapor & The Great Warm Lift",
    subject: "Science",
    topic: "Evaporation",
    heroCharacter: "Bella the Droplet",
    mentorCharacter: "Sunny Ray",
    themeColor: "from-amber-400 via-orange-300 to-sky-300",
    concepts: [
      { id: 'ev1', name: 'Thermal Energy', description: 'Heat from the Sun energizing liquid water molecules' },
      { id: 'ev2', name: 'Molecular Excitement', description: 'Water molecules moving faster and spreading apart' },
      { id: 'ev3', name: 'State Transformation', description: 'Liquid water turning into invisible gas (water vapor)' },
      { id: 'ev4', name: 'Evaporative Cooling', description: 'Heat carried away into the sky, leaving surfaces cooler' }
    ],
    pages: [
      {
        pageNumber: 1,
        title: "Bella Lounges in the Sunshine",
        content: "Bella was a happy little water droplet resting in a sunlit puddle after a morning shower. As midday arrived, brilliant golden rays beamed down from Mr. Sun, warming the water all around her. 'Ooh, it feels like a cozy warm bath!' Bella giggled.",
        conceptIds: ['ev1'],
        conceptName: "Thermal Energy",
        dialogue: { character: "Sunny Ray", speech: "Warm up, little Bella! I am sending pure solar energy straight into your puddle!" },
        analogy: "Like charging up a toy car battery until its little motor is buzzing with energy!",
        visualType: "evap_thermal_energy",
        illustrationBadge: "☀️ Solar Thermal Energy Warming Water!",
        illustrationCaption: "Sunlight transfers thermal kinetic energy into the water puddle.",
        illustrationIcon: "☀️"
      },
      {
        pageNumber: 2,
        title: "The Molecule Dance Party",
        content: "As the thermal energy soaked in, Bella and her droplet friends could not sit still! Their molecules started buzzing, bouncing, and dancing faster and faster. The bonds holding them together began to loosen up as they wiggled with excitement.",
        conceptIds: ['ev2'],
        conceptName: "Molecular Excitement",
        dialogue: { character: "Bella", speech: "I can't stop wiggling! We are bouncing off each other like popcorn!" },
        analogy: "Think of excited kids at recess—the louder the bell rings, the faster they scatter across the playground!",
        visualType: "evap_molecular_speed",
        illustrationBadge: "⚡ Fast-Bouncing Excited Molecules!",
        illustrationCaption: "Heated water molecules bounce faster and break intermolecular bonds.",
        illustrationIcon: "🔬"
      },
      {
        pageNumber: 3,
        title: "Turning into Invisible Mist!",
        content: "Pop! Suddenly, Bella broke free from the puddle surface! She wasn't heavy liquid anymore—she had transformed into invisible water vapor. Lighter than air itself, Bella began floating effortlessly toward the wide blue sky.",
        conceptIds: ['ev3'],
        conceptName: "State Transformation",
        dialogue: { character: "Milo", speech: "You broke free, Bella! Liquid has become invisible gas—that is Evaporation!" },
        analogy: "Like the ghost-like steam drifting from a hot mug of cocoa, vanishing into the room.",
        visualType: "evap_state_change",
        illustrationBadge: "✨ Rising into the Sky as Invisible Vapor!",
        illustrationCaption: "Liquid water transforms into invisible, lightweight water vapor.",
        illustrationIcon: "♨️"
      },
      {
        pageNumber: 4,
        title: "Earth's Secret Air Conditioner",
        content: "As Bella soared into the breeze, she looked back down at the puddle. The ground underneath felt pleasantly cool! 'By taking the heat with me into the sky, I cooled down the sidewalk below!' Bella marveled as she drifted toward the clouds.",
        conceptIds: ['ev4'],
        conceptName: "Evaporative Cooling",
        dialogue: { character: "Bella", speech: "Goodbye, ground! Thanks for the launchpad—I left you nice and cool!" },
        analogy: "Just like stepping out of a pool on a windy day: when droplets leave your skin, you get instant cool goosebumps!",
        visualType: "evap_cooling_effect",
        illustrationBadge: "❄️ Evaporative Surface Cooling in Action!",
        illustrationCaption: "Escaping vapor carries heat away, leaving surfaces refreshingly cool.",
        illustrationIcon: "🧊"
      }
    ],
    flashcards: [
      {
        id: 'fc-ev-1',
        term: "What is Evaporation?",
        category: "Core Definition",
        definition: "The physical process where liquid water absorbs heat energy and transforms into an invisible gas called water vapor.",
        analogy: "Imagine water putting on an invisible cape and floating up into the sky!",
        keyTakeaway: "Liquid turns into gas when heated.",
        icon: "☀️"
      },
      {
        id: 'fc-ev-2',
        term: "What Role Does Heat Play?",
        category: "Energy Mechanism",
        definition: "Heat (thermal energy) from the Sun or environment increases the kinetic energy of water molecules, causing them to move rapidly.",
        analogy: "Think of popcorn kernels in a hot pan—more heat makes them pop and bounce apart!",
        keyTakeaway: "Higher temperature means faster evaporation.",
        icon: "🔥"
      },
      {
        id: 'fc-ev-3',
        term: "What is Water Vapor?",
        category: "State of Matter",
        definition: "Water in its gaseous state. It is completely invisible, transparent, and lighter than dense liquid water.",
        analogy: "Like invisible air ninjas—water droplets are floating all around your room right now, you just can't see them!",
        keyTakeaway: "Water vapor is an invisible gas, not tiny droplets.",
        icon: "💨"
      },
      {
        id: 'fc-ev-4',
        term: "Why Does Evaporation Cool Things Down?",
        category: "Real-World Application",
        definition: "The fastest, hottest molecules are the ones that escape first, taking heat energy away with them and leaving cooler molecules behind.",
        analogy: "When you sweat on a hot sports day, your skin cools down as the sweat drops evaporate away into the breeze.",
        keyTakeaway: "Evaporation acts as Nature's natural cooling system.",
        icon: "❄️"
      }
    ],
    questions: [
      {
        id: 'q-ev-1',
        conceptId: 'ev1',
        conceptName: 'Thermal Energy',
        question: "Where do puddle droplets get the energy needed to evaporate into the sky?",
        options: [
          { text: "From moonlight at night", isCorrect: false },
          { text: "From thermal heat energy provided by the Sun", isCorrect: true },
          { text: "From underground magnetic rocks", isCorrect: false },
          { text: "From cold ocean currents", isCorrect: false }
        ],
        correctAnswer: 1,
        explanation: "The Sun's warm rays transfer thermal energy to water molecules, giving them enough speed to break free."
      },
      {
        id: 'q-ev-2',
        conceptId: 'ev2',
        conceptName: 'Molecular Excitement',
        question: "What happens to water molecules inside a drop when temperature rises?",
        options: [
          { text: "They freeze completely and stop moving", isCorrect: false },
          { text: "They move faster, bounce apart, and spread out", isCorrect: true },
          { text: "They shrink and disappear forever", isCorrect: false },
          { text: "They turn into heavy iron balls", isCorrect: false }
        ],
        correctAnswer: 1,
        explanation: "As heat energy increases, molecules gain kinetic energy and dance apart rapidly."
      },
      {
        id: 'q-ev-3',
        conceptId: 'ev3',
        conceptName: 'State Transformation',
        question: "When liquid water evaporates, what state of matter does it change into?",
        options: [
          { text: "A solid ice crystal", isCorrect: false },
          { text: "An invisible gas called water vapor", isCorrect: true },
          { text: "Molten rock", isCorrect: false },
          { text: "Liquid mercury", isCorrect: false }
        ],
        correctAnswer: 1,
        explanation: "Evaporation is the phase transition from liquid water to gaseous water vapor."
      },
      {
        id: 'q-ev-4',
        conceptId: 'ev4',
        conceptName: 'Evaporative Cooling',
        question: "Why do you feel a chill when a cool breeze blows over wet skin?",
        options: [
          { text: "Because wind creates ice needles", isCorrect: false },
          { text: "Because evaporating water carries heat energy away from your skin", isCorrect: true },
          { text: "Because water traps cold shadows", isCorrect: false },
          { text: "Because your skin absorbs cold air particles", isCorrect: false }
        ],
        correctAnswer: 1,
        explanation: "Evaporation absorbs heat from the surface it leaves behind—this is the principle of evaporative cooling!"
      }
    ],
    reteach: {
      title: "Bella's Quick Heat Jump",
      subtitle: "Mastering Evaporation in 2 Easy Steps!",
      weakConcept: { id: 'ev3', name: 'Evaporation' },
      content: [
        {
          panel: 1,
          title: "Heat = Freedom!",
          description: "Water droplets love staying together until the Sun warms them up. Warmth gives molecules extra turbo speed, allowing them to leap into the sky as invisible gas.",
          analogy: "Like popcorn popping right out of the popper when it gets warm enough!",
          dialogue: "Milo: 'Remember: Heat turns quiet liquid droplets into high-flying vapor!'"
        },
        {
          panel: 2,
          title: "Invisible But Everywhere!",
          description: "Even when you can't see steam, water vapor is all around us. Wet clothes dry on a laundry line because evaporation turns water drops into invisible air travelers.",
          analogy: "Think of clothes on a clothesline: the water didn't vanish by magic, it evaporated into the air!",
          dialogue: "Bella: 'I am still water, just wearing my invisible vapor wings!'"
        }
      ],
      questions: [
        {
          id: 'rq-ev-1',
          conceptId: 'ev3',
          conceptName: 'Evaporation',
          question: "Why do wet clothes hanging outside in the sun eventually become dry?",
          options: [
            { text: "Water evaporates into the air as invisible water vapor", isCorrect: true },
            { text: "The fabric eats the water droplets", isCorrect: false },
            { text: "Gravity pulls all the water into deep space", isCorrect: false }
          ],
          correctAnswer: 0,
          explanation: "Sunlight and breeze evaporate the water droplets into water vapor."
        }
      ]
    }
  },

  // 2. Condensation
  'Condensation': {
    title: "Kiki the Vapor & The Cloud Castle Party",
    subject: "Science",
    topic: "Condensation",
    heroCharacter: "Kiki the Vapor",
    mentorCharacter: "Chill the Mountain Breeze",
    themeColor: "from-sky-300 via-indigo-300 to-purple-300",
    concepts: [
      { id: 'cd1', name: 'Cooling at High Altitude', description: 'Warm vapor cooling down as it rises into the chilled upper atmosphere' },
      { id: 'cd2', name: 'Gas to Liquid Shift', description: 'Slowing molecules clustering back into tiny liquid droplets' },
      { id: 'cd3', name: 'Cloud & Fog Genesis', description: 'Billions of condensed droplets clinging to dust particles to form clouds' },
      { id: 'cd4', name: 'Surface Dew & Sweat', description: 'Warm room vapor condensing against cold surfaces like soda glasses' }
    ],
    pages: [
      {
        pageNumber: 1,
        title: "Kiki Reaches the High Chilly Sky",
        content: "Kiki the water vapor was flying higher and higher above the mountains. Up in the high altitude, the air was brisk and frosty. 'Brrr!' shivered Kiki, feeling her speedy molecules slow down from the chill.",
        conceptIds: ['cd1'],
        conceptName: "Cooling at High Altitude",
        dialogue: { character: "Kiki", speech: "It's frosty up here! My molecules are running out of turbo speed!" },
        analogy: "Like stepping straight out of a hot desert into a walk-in freezer!",
        visualType: "cond_high_altitude_chill",
        illustrationBadge: "❄️ Chilly Altitude Slowing Molecules!",
        illustrationCaption: "Ascending water vapor cools down rapidly in the frosty upper atmosphere.",
        illustrationIcon: "🏔️"
      },
      {
        pageNumber: 2,
        title: "The Great Sky Huddle",
        content: "Chill the mountain breeze swept past. As Kiki cooled, she couldn't stay as invisible gas anymore. She bumped into millions of other vapor droplets, and they held hands tightly, turning back into tiny liquid drops.",
        conceptIds: ['cd2'],
        conceptName: "Gas to Liquid Shift",
        dialogue: { character: "Chill the Breeze", speech: "Slow down and huddle close, friends! When gas cools, liquid hugs return!" },
        analogy: "Like cold penguins in Antarctica huddling together tightly in a circle to stay cozy!",
        visualType: "cond_molecules_clustering",
        illustrationBadge: "💧 Vapor Clumping into Liquid Droplets!",
        illustrationCaption: "Cooling molecules lose kinetic energy and hug together as liquid.",
        illustrationIcon: "💧"
      },
      {
        pageNumber: 3,
        title: "Building the Fluffy Cloud Castle",
        content: "Together with tiny specks of natural sky dust, billions of these newly formed drops gathered into giant white puffs. Pop! A magnificent fluffy cloud castle was born, floating gracefully across the bright blue sky.",
        conceptIds: ['cd3'],
        conceptName: "Cloud & Fog Genesis",
        dialogue: { character: "Milo", speech: "Look up, adventurers! Clouds aren't smoke—they are giant clusters of condensed water drops!" },
        analogy: "Like cotton candy spinning on a paper stick, growing bigger as more sweet strands wrap together.",
        visualType: "cond_cloud_castle",
        illustrationBadge: "☁️ Fluffy Cloud Castles Forming!",
        illustrationCaption: "Billions of condensed droplets coalesce around atmospheric dust particles.",
        illustrationIcon: "☁️"
      },
      {
        pageNumber: 4,
        title: "Condensation Down on Earth",
        content: "Kiki looked down and noticed condensation happening on Earth too! Morning dew glistening on emerald grass blades and water drops beads on cold glass tumblers were all proof of condensation at work.",
        conceptIds: ['cd4'],
        conceptName: "Surface Dew & Sweat",
        dialogue: { character: "Kiki", speech: "Whether in high sky clouds or on a cold glass of lemonade, cooling vapor always creates droplets!" },
        analogy: "When you breathe out on a cold window pane, your warm breath creates a misty fog you can draw smileys on!",
        visualType: "cond_surface_dew",
        illustrationBadge: "🌱 Sparkling Dew & Surface Condensation!",
        illustrationCaption: "Warm moist air contacting cold surfaces forms glistening beads of dew.",
        illustrationIcon: "🥤"
      }
    ],
    flashcards: [
      {
        id: 'fc-cd-1',
        term: "What is Condensation?",
        category: "Core Definition",
        definition: "The process where gaseous water vapor cools down and turns back into liquid water droplets.",
        analogy: "Like water taking off its invisible cape and returning to its cozy liquid form!",
        keyTakeaway: "Condensation is the exact opposite of Evaporation.",
        icon: "☁️"
      },
      {
        id: 'fc-cd-2',
        term: "How Do Clouds Form?",
        category: "Atmospheric Science",
        definition: "When warm vapor rises and cools high in the sky, it condenses onto microscopic dust particles, forming billions of droplets that look like fluffy clouds.",
        analogy: "Like millions of tiny cotton puffs gathering together in the sky.",
        keyTakeaway: "Clouds are made of condensed water droplets, not smoke or gas.",
        icon: "⛅"
      },
      {
        id: 'fc-cd-3',
        term: "Why Do Cold Drinks 'Sweat'?",
        category: "Everyday Example",
        definition: "Warm water vapor floating in room air touches the cold glass, loses heat instantly, and condenses into water drops on the outside.",
        analogy: "The glass isn't leaking—air vapor just took a cold nap on the outside wall!",
        keyTakeaway: "Water drops on cold cans come from the surrounding air.",
        icon: "🥤"
      },
      {
        id: 'fc-cd-4',
        term: "What is Dew?",
        category: "Nature Phenomenon",
        definition: "Water droplets that condense overnight on grass, leaves, and car windshields when ground temperatures drop.",
        analogy: "Nature's morning glitter, left behind when the chilly night air hugs the grass.",
        keyTakeaway: "Dew forms directly on cold surfaces overnight without raining.",
        icon: "🌱"
      }
    ],
    questions: [
      {
        id: 'q-cd-1',
        conceptId: 'cd1',
        conceptName: 'Cooling at High Altitude',
        question: "What primary condition triggers water vapor to condense?",
        options: [
          { text: "Getting hotter and hotter", isCorrect: false },
          { text: "Cooling down and losing thermal energy", isCorrect: true },
          { text: "Entering total darkness", isCorrect: false },
          { text: "Passing through magnetic rocks", isCorrect: false }
        ],
        correctAnswer: 1,
        explanation: "When water vapor cools, its molecules slow down, bringing them close enough to form liquid droplets."
      },
      {
        id: 'q-cd-2',
        conceptId: 'cd2',
        conceptName: 'Gas to Liquid Shift',
        question: "Condensation is the phase change from which state to which state?",
        options: [
          { text: "Solid to liquid", isCorrect: false },
          { text: "Gas (vapor) to liquid", isCorrect: true },
          { text: "Liquid to gas", isCorrect: false },
          { text: "Solid directly to gas", isCorrect: false }
        ],
        correctAnswer: 1,
        explanation: "Condensation transforms gas (vapor) back into liquid droplets."
      },
      {
        id: 'q-cd-3',
        conceptId: 'cd3',
        conceptName: 'Cloud & Fog Genesis',
        question: "What are clouds in the sky primarily composed of?",
        options: [
          { text: "Billions of microscopic liquid water droplets and ice crystals", isCorrect: true },
          { text: "Fluffy clumps of cotton fabric", isCorrect: false },
          { text: "White smoke from airplanes", isCorrect: false },
          { text: "Solid sheets of thick glass", isCorrect: false }
        ],
        correctAnswer: 0,
        explanation: "Clouds are massive clusters of condensed liquid droplets and ice crystals floating together."
      },
      {
        id: 'q-cd-4',
        conceptId: 'cd4',
        conceptName: 'Surface Dew & Sweat',
        question: "Where do the water droplets on the outside of an iced lemonade cup come from?",
        options: [
          { text: "They leaked through invisible holes in the cup", isCorrect: false },
          { text: "Water vapor in the warm surrounding air condensed on the icy surface", isCorrect: true },
          { text: "The ice melted and jumped outside", isCorrect: false },
          { text: "Someone sprayed water onto the cup", isCorrect: false }
        ],
        correctAnswer: 1,
        explanation: "The cold temperature of the cup cools the surrounding room air, causing airborne vapor to condense on its exterior."
      }
    ],
    reteach: {
      title: "Kiki's Cozy Cloud Huddle",
      subtitle: "Remembering Condensation with Cold & Hugs!",
      weakConcept: { id: 'cd2', name: 'Condensation' },
      content: [
        {
          panel: 1,
          title: "Cold Brings Vapor Together",
          description: "When gas gets cold, it loses its bounce. It slows down and hugs tight. That friendly hug is called Condensation!",
          analogy: "Like when you breathe onto a cold car window on a winter morning and watch the foggy mist appear!",
          dialogue: "Milo: 'Cold turns floating vapor into shiny water drops!'"
        },
        {
          panel: 2,
          title: "Clouds = Sky Condensation",
          description: "Clouds are not smoke—they are giant gathering parties of condensed drops floating high where it is cold.",
          analogy: "Think of an icy glass of water sweating on a hot table—the exact same thing happens in the sky to make clouds!",
          dialogue: "Kiki: 'When vapor gets chilled, clouds are born!'"
        }
      ],
      questions: [
        {
          id: 'rq-cd-1',
          conceptId: 'cd2',
          conceptName: 'Condensation',
          question: "When warm air touches a cold mirror after a hot shower, what creates the foggy drops?",
          options: [
            { text: "Condensation of water vapor turning into tiny drops on the cold glass", isCorrect: true },
            { text: "The mirror melted", isCorrect: false },
            { text: "Soap bubbles traveling through the wall", isCorrect: false }
          ],
          correctAnswer: 0,
          explanation: "Warm vapor from the shower touches the cooler mirror surface and condenses into drops."
        }
      ]
    }
  },

  // 3. Precipitation
  'Precipitation': {
    title: "Pip the Raindrop's Skydiving Adventure",
    subject: "Science",
    topic: "Precipitation",
    heroCharacter: "Pip the Droplet",
    mentorCharacter: "Grumble the Storm Cloud",
    themeColor: "from-blue-400 via-sky-500 to-indigo-600",
    concepts: [
      { id: 'pr1', name: 'Cloud Saturation & Weight', description: 'Clouds collecting too many droplets until updrafts can no longer hold them' },
      { id: 'pr2', name: 'Gravity at Work', description: 'Earth gravitational attraction pulling heavy drops downward' },
      { id: 'pr3', name: 'Forms of Precipitation', description: 'Rain, snow, sleet, and hail dictated by temperature layers' },
      { id: 'pr4', name: 'Earth Hydration', description: 'Returning fresh water to forests, farms, reservoirs, and soil' }
    ],
    pages: [
      {
        pageNumber: 1,
        title: "Too Heavy to Float!",
        content: "Inside the dark storm cloud, Pip and his friends kept bumping into more and more droplets. With every bump, they merged into bigger, heavier drops. 'Whoa, Grumble the cloud is getting stuffed!' Pip called out.",
        conceptIds: ['pr1'],
        conceptName: "Cloud Saturation & Weight",
        dialogue: { character: "Grumble the Cloud", speech: "Oof! I can't hold all this water any longer! My pockets are overflowing!" },
        analogy: "Like a sponge soaked with so much water that it can't hold another single drop without dripping!",
        visualType: "precip_heavy_clouds",
        illustrationBadge: "☁️ Heavy Overcast Storm Clouds!",
        illustrationCaption: "Clouds collect water until upward drafts can no longer support the weight.",
        illustrationIcon: "⛈️"
      },
      {
        pageNumber: 2,
        title: "Gravity Calls Us Home!",
        content: "The upward wind could no longer balance the heavy weight of the water drops. Gravity took charge, gently tugging Pip and trillions of droplets toward the Earth below. 'Here we go! Wheeeee!' Pip shouted happily.",
        conceptIds: ['pr2'],
        conceptName: "Gravity at Work",
        dialogue: { character: "Pip", speech: "Gravity is pulling us back home to Earth! Time for the ultimate sky ride!" },
        analogy: "Like reaching the very top of a roller coaster drop and zooming down with the wind!",
        visualType: "precip_rain_fall",
        illustrationBadge: "🌧️ Gravity's Splashdown!",
        illustrationCaption: "Earth's gravity pulls water droplets downward in refreshing showers.",
        illustrationIcon: "🌧️"
      },
      {
        pageNumber: 3,
        title: "Rain, Snow, Sleet or Hail?",
        content: "As Pip fell, he noticed that temperature changed the drop's costume! If the sky was freezing, drops turned into delicate snowflakes or crunchy hail. But today it was warm, so Pip fell as refreshing, splashing rain.",
        conceptIds: ['pr3'],
        conceptName: "Forms of Precipitation",
        dialogue: { character: "Milo", speech: "Precipitation isn't just rain—snowflakes and hailstones are all part of the precipitation family!" },
        analogy: "Like dressing up in different coats: warm weather wears a raincoat, freezing weather wears a snowy parka!",
        visualType: "precip_snow_ice",
        illustrationBadge: "❄️ Crystalline Snowflakes & Hailstones!",
        illustrationCaption: "Sub-zero temperatures freeze falling water into crystalline geometric snow.",
        illustrationIcon: "❄️"
      },
      {
        pageNumber: 4,
        title: "Splashing Life onto Earth!",
        content: "Splash! Pip landed right on the petal of a bright yellow sunflower. The sunflower perked up joyfully, and the dry garden soil drank in the fresh water greedily. Precipitation brought life back to the whole valley!",
        conceptIds: ['pr4'],
        conceptName: "Earth Hydration",
        dialogue: { character: "Sunflower", speech: "Thank you, raindrops! We were so thirsty, now we can grow tall and green!" },
        analogy: "Like giving a big, cool glass of water to an athlete after a marathon run!",
        visualType: "precip_earth_hydration",
        illustrationBadge: "🌱 Hydrating Earth's Ecosystems!",
        illustrationCaption: "Fallen precipitation nourishes crops, forests, and replenishes streams.",
        illustrationIcon: "🌻"
      }
    ],
    flashcards: [
      {
        id: 'fc-pr-1',
        term: "What is Precipitation?",
        category: "Core Definition",
        definition: "Any liquid or frozen water that forms in the atmosphere and falls back down to Earth under the pull of gravity.",
        analogy: "Skydiving water droplets returning home from the clouds!",
        keyTakeaway: "Precipitation brings atmospheric water back to Earth.",
        icon: "🌧️"
      },
      {
        id: 'fc-pr-2',
        term: "Why Does it Start Falling?",
        category: "Physical Trigger",
        definition: "Droplets in a cloud keep colliding and growing bigger. When they become too heavy for rising air updrafts to support, gravity pulls them down.",
        analogy: "Like holding so many marbles in your hands that they spill right over!",
        keyTakeaway: "Heavier drops overcome air resistance and fall.",
        icon: "⚖️"
      },
      {
        id: 'fc-pr-3',
        term: "What are the 4 Main Types?",
        category: "Varieties",
        definition: "Rain (liquid), Snow (ice crystals in cold air), Sleet (frozen raindrops), and Hail (layers of ice formed in strong storm updrafts).",
        analogy: "The four costumes water wears depending on how chilly the sky is!",
        keyTakeaway: "Temperature determines whether precipitation is liquid or frozen.",
        icon: "❄️"
      },
      {
        id: 'fc-pr-4',
        term: "Why is Precipitation Crucial?",
        category: "Ecosystem Impact",
        definition: "It delivers fresh water to land, replenishing drinking water, watering agricultural crops, filling lakes, and nourishing forests.",
        analogy: "Earth's grand shower that keeps every plant and creature alive and hydrated.",
        keyTakeaway: "Without precipitation, land ecosystems would turn into barren deserts.",
        icon: "🌻"
      }
    ],
    questions: [
      {
        id: 'q-pr-1',
        conceptId: 'pr1',
        conceptName: 'Cloud Saturation & Weight',
        question: "Why do clouds eventually release rain instead of floating forever?",
        options: [
          { text: "Droplets merge, become too heavy, and air currents can no longer hold them up", isCorrect: true },
          { text: "The Sun pops the clouds with laser beams", isCorrect: false },
          { text: "Airplanes shake the water out of the clouds", isCorrect: false },
          { text: "Clouds get scared by thunder and drop water", isCorrect: false }
        ],
        correctAnswer: 0,
        explanation: "When condensed droplets grow too large and heavy for air updrafts, gravity causes precipitation."
      },
      {
        id: 'q-pr-2',
        conceptId: 'pr2',
        conceptName: 'Gravity at Work',
        question: "What invisible physical force pulls falling raindrops down toward Earth's surface?",
        options: [
          { text: "Magnetism", isCorrect: false },
          { text: "Gravity", isCorrect: true },
          { text: "Electricity", isCorrect: false },
          { text: "Friction", isCorrect: false }
        ],
        correctAnswer: 1,
        explanation: "Earth's gravitational force attracts all matter downward, including rain and snow."
      },
      {
        id: 'q-pr-3',
        conceptId: 'pr3',
        conceptName: 'Forms of Precipitation',
        question: "Which of the following is NOT a form of precipitation?",
        options: [
          { text: "Rain", isCorrect: false },
          { text: "Snow", isCorrect: false },
          { text: "Hail", isCorrect: false },
          { text: "Evaporation", isCorrect: true }
        ],
        correctAnswer: 3,
        explanation: "Evaporation is the rising of gas into the sky, while precipitation is water falling back down."
      },
      {
        id: 'q-pr-4',
        conceptId: 'pr4',
        conceptName: 'Earth Hydration',
        question: "How does precipitation benefit forests and farming fields?",
        options: [
          { text: "It provides essential fresh water that plant roots absorb for survival and growth", isCorrect: true },
          { text: "It makes rocks turn into diamonds", isCorrect: false },
          { text: "It stops trees from growing taller", isCorrect: false },
          { text: "It removes all the oxygen from the air", isCorrect: false }
        ],
        correctAnswer: 0,
        explanation: "Precipitation delivers vital hydration that replenishes ground water and feeds plant roots."
      }
    ],
    reteach: {
      title: "Pip's Joyful Rain Splatter",
      subtitle: "Making Precipitation Super Clear!",
      weakConcept: { id: 'pr1', name: 'Precipitation' },
      content: [
        {
          panel: 1,
          title: "Too Heavy = Down It Goes!",
          description: "When too many water droplets squeeze into one cloud, they become too heavy for the wind to keep up. That's when rain falls!",
          analogy: "Like loading too many books into a backpack until the bottom touches the floor!",
          dialogue: "Pip: 'Gravity gave us the green light to slide down!'"
        },
        {
          panel: 2,
          title: "All Kinds of Weather Gifts",
          description: "Rain in the summer, fluffy snowflakes in the winter, and bouncy hail in storms are all precipitation sisters!",
          analogy: "Think of an ice cube tray vs a water bottle—same water, just dressed for different temperatures!",
          dialogue: "Milo: 'Precipitation = Water falling from sky to Earth!'"
        }
      ],
      questions: [
        {
          id: 'rq-pr-1',
          conceptId: 'pr1',
          conceptName: 'Precipitation',
          question: "When snow falls softly over mountain pine trees in winter, what process is occurring?",
          options: [
            { text: "Precipitation (frozen water falling from clouds)", isCorrect: true },
            { text: "Evaporation", isCorrect: false },
            { text: "Soil digestion", isCorrect: false }
          ],
          correctAnswer: 0,
          explanation: "Snow is a frozen form of precipitation falling from clouds."
        }
      ]
    }
  },

  // 4. Collection
  'Collection': {
    title: "Coco & The Secret Basin: The Grand Gathering",
    subject: "Science",
    topic: "Collection",
    heroCharacter: "Coco the Droplet",
    mentorCharacter: "Marina the Great Ocean",
    themeColor: "from-teal-300 via-emerald-300 to-cyan-500",
    concepts: [
      { id: 'cl1', name: 'Surface Runoff & Streams', description: 'Fallen water flowing downhill along slopes, streams, and rivers' },
      { id: 'cl2', name: 'Ground Infiltration & Aquifers', description: 'Water soaking deep into soil and porous underground rock layers' },
      { id: 'cl3', name: 'Natural Basins & Reservoirs', description: 'Lakes, seas, and oceans gathering massive volumes of fresh and salt water' },
      { id: 'cl4', name: 'The Cycle Reset', description: 'Collected water sitting under the Sun, ready to evaporate and begin anew' }
    ],
    pages: [
      {
        pageNumber: 1,
        title: "The Mountain Stream Slide!",
        content: "After raining down on high mountain ridges, Coco the droplet splashed into a bubbling mountain brook. Gravity guided the water down curvy slopes, over smooth river stones, and around tall cedar trees. 'Wheee, what a natural waterslide!' cheered Coco.",
        conceptIds: ['cl1'],
        conceptName: "Surface Runoff & Streams",
        dialogue: { character: "Coco", speech: "Hold on to the current! Water always seeks the lowest path downhill!" },
        analogy: "Think of a playground slide—gravity pulls you right down to the bottom every single time!",
        visualType: "collect_runoff_streams",
        illustrationBadge: "🏞️ Mountain Runoff & Cascading Brooks!",
        illustrationCaption: "Gravity pulls runoff downhill along winding streams and rapids.",
        illustrationIcon: "🏞️"
      },
      {
        pageNumber: 2,
        title: "Underground Secrets: The Aquifer",
        content: "Along the riverbank, some of Coco's droplet friends soaked deep into the soft soil. They filtered down through layers of sand and pebbles, joining underground aquifers that store crystal-clear drinking water for miles.",
        conceptIds: ['cl2'],
        conceptName: "Ground Infiltration & Aquifers",
        dialogue: { character: "Pebble Pal", speech: "Welcome underground! We clean the water as it seeps through natural rock filters!" },
        analogy: "Like pouring water through a coffee filter: clean, pure water trickles into the pot below.",
        visualType: "collect_aquifers",
        illustrationBadge: "🪨 Underground Infiltration & Aquifers!",
        illustrationCaption: "Porous soil and rock layers filter and store crystal-clear groundwater.",
        illustrationIcon: "🪨"
      },
      {
        pageNumber: 3,
        title: "The Grand Reunion in the Ocean",
        content: "The river widened into a majestic bay and emptied into Marina the Great Ocean. Coco spotted millions of reunited droplets singing and splashing with dolphins and coral reefs. Nature's gathering party was complete!",
        conceptIds: ['cl3'],
        conceptName: "Natural Basins & Reservoirs",
        dialogue: { character: "Marina the Ocean", speech: "Welcome back, travelers! Oceans and lakes hold 97% of Earth's water right here in one cozy home!" },
        analogy: "Just like putting all your scattered toy blocks back into the big toy chest at the end of playtime.",
        visualType: "collect_ocean_basin",
        illustrationBadge: "🌊 The Great Ocean Reservoir!",
        illustrationCaption: "Oceans store 97% of Earth's water in vast shimmering blue basins.",
        illustrationIcon: "🌊"
      },
      {
        pageNumber: 4,
        title: "Ready for the Next Big Adventure!",
        content: "As Coco bobbed gently in the ocean waves, the warm morning Sun appeared on the horizon. The rays began to tickle her water molecules once again. 'The cycle never ends!' smiled Coco. 'We are ready to soar again!'",
        conceptIds: ['cl4'],
        conceptName: "The Cycle Reset",
        dialogue: { character: "Milo", speech: "Collection completes the loop! Once gathered in oceans and lakes, the Sun will warm the water to evaporate all over again." },
        analogy: "Like a giant carousel that keeps spinning around: every finish line is the start of the next ride!",
        visualType: "collect_cycle_loop",
        illustrationBadge: "🔄 Perpetual Cycle Reset!",
        illustrationCaption: "Collected water gathers under the warm sun, ready to repeat the loop.",
        illustrationIcon: "🔄"
      }
    ],
    flashcards: [
      {
        id: 'fc-cl-1',
        term: "What is Collection?",
        category: "Core Definition",
        definition: "The stage of the water cycle where precipitation pools and gathers together in bodies of water like oceans, lakes, rivers, and underground aquifers.",
        analogy: "Nature's giant gathering party where all the raindrops meet back up!",
        keyTakeaway: "Collection gathers water so the cycle can restart.",
        icon: "🌊"
      },
      {
        id: 'fc-cl-2',
        term: "What is Runoff?",
        category: "Water Movement",
        definition: "Water from rain or melted snow that flows over the surface of the land downhill into streams, rivers, and drains.",
        analogy: "Like water running down a tilted driveway during a car wash.",
        keyTakeaway: "Gravity always directs runoff toward the lowest basin.",
        icon: "🏞️"
      },
      {
        id: 'fc-cl-3',
        term: "What is Groundwater & Infiltration?",
        category: "Underground Storage",
        definition: "Water that soaks into the ground through soil and rock layers to be stored in underground reservoirs called aquifers.",
        analogy: "A giant natural underground water sponge that holds well-water for towns.",
        keyTakeaway: "Not all water stays on top—much of it lives under our feet!",
        icon: "🪨"
      },
      {
        id: 'fc-cl-4',
        term: "Where is Most Water Collected?",
        category: "Earth Statistics",
        definition: "Over 96.5% of all Earth's water is collected in the vast global oceans, with the rest in glaciers, lakes, rivers, and groundwater.",
        analogy: "If Earth's water filled 100 buckets, 97 of them would be the ocean!",
        keyTakeaway: "Oceans are the primary reservoir for the global water cycle.",
        icon: "🌍"
      }
    ],
    questions: [
      {
        id: 'q-cl-1',
        conceptId: 'cl1',
        conceptName: 'Surface Runoff & Streams',
        question: "When rain hits a steep mountainside, where does the runoff naturally travel?",
        options: [
          { text: "It flows straight up into space", isCorrect: false },
          { text: "It flows downhill along slopes into streams and rivers", isCorrect: true },
          { text: "It stops instantly and turns into stone", isCorrect: false },
          { text: "It boils into volcanic ash", isCorrect: false }
        ],
        correctAnswer: 1,
        explanation: "Gravity always pulls water downward, creating runoff that channels into streams and rivers."
      },
      {
        id: 'q-cl-2',
        conceptId: 'cl2',
        conceptName: 'Ground Infiltration & Aquifers',
        question: "What is the underground rock layer called that holds soaked-in groundwater?",
        options: [
          { text: "An aquifer", isCorrect: true },
          { text: "A volcano core", isCorrect: false },
          { text: "An ozone pocket", isCorrect: false },
          { text: "A cloud nursery", isCorrect: false }
        ],
        correctAnswer: 0,
        explanation: "An aquifer is an underground layer of permeable rock or sediment that stores water."
      },
      {
        id: 'q-cl-3',
        conceptId: 'cl3',
        conceptName: 'Natural Basins & Reservoirs',
        question: "Where is the vast majority (over 96%) of Earth's collected water stored?",
        options: [
          { text: "In mountain snow caps", isCorrect: false },
          { text: "In the oceans", isCorrect: true },
          { text: "In swimming pools", isCorrect: false },
          { text: "Inside tree bark", isCorrect: false }
        ],
        correctAnswer: 1,
        explanation: "Oceans are the largest natural reservoirs on the planet, containing over 96.5% of Earth's water."
      },
      {
        id: 'q-cl-4',
        conceptId: 'cl4',
        conceptName: 'The Cycle Reset',
        question: "Why is the Collection stage essential for keeping the water cycle going?",
        options: [
          { text: "It stores liquid water where the Sun can heat it again to trigger evaporation", isCorrect: true },
          { text: "It turns water into solid gold", isCorrect: false },
          { text: "It deletes the water so Earth is lighter", isCorrect: false },
          { text: "It stops clouds from ever appearing again", isCorrect: false }
        ],
        correctAnswer: 0,
        explanation: "Collection pools water into broad surfaces where solar energy can warm it again to restart evaporation."
      }
    ],
    reteach: {
      title: "Coco's Basin Gathering Party",
      subtitle: "Collection Made Crystal Clear!",
      weakConcept: { id: 'cl3', name: 'Collection' },
      content: [
        {
          panel: 1,
          title: "All Drops Gather Back Home",
          description: "After rain falls, it doesn't vanish into thin air. Streams, rivers, lakes, and oceans collect it together.",
          analogy: "Like collecting stickers into an album, or collecting marbles in a bowl!",
          dialogue: "Coco: 'Collection = Gathering! Liquid water comes together in one big place.'"
        },
        {
          panel: 2,
          title: "The Launchpad for Tomorrow",
          description: "Once collected in the ocean or lake, the water is ready for the Sun to warm it up again tomorrow.",
          analogy: "Think of returning to home base in a game of tag, ready for the next round!",
          dialogue: "Milo: 'Collection completes the loop so the adventure never ends!'"
        }
      ],
      questions: [
        {
          id: 'rq-cl-1',
          conceptId: 'cl3',
          conceptName: 'Collection',
          question: "When rain slides down mountains into calm blue lakes, what stage of the water cycle is this?",
          options: [
            { text: "Collection (water gathers in bodies of water)", isCorrect: true },
            { text: "Freezing into snowballs", isCorrect: false },
            { text: "Disappearing into space", isCorrect: false }
          ],
          correctAnswer: 0,
          explanation: "Water gathering in lakes, rivers, and oceans is called Collection."
        }
      ]
    }
  },

  // 5. Water Cycle (The Full Loop)
  'Water Cycle': {
    title: "Leo & The Infinite Journey: The Complete Water Cycle",
    subject: "Science",
    topic: "Water Cycle",
    heroCharacter: "Leo the Droplet",
    mentorCharacter: "Milo the Guide",
    themeColor: "from-sky-400 via-amber-300 to-emerald-400",
    concepts: [
      { id: 'c1', name: 'Evaporation', description: 'Sun heating surface liquid water into invisible vapor that rises' },
      { id: 'c2', name: 'Condensation', description: 'Chilling high-altitude air causing vapor to cluster into clouds' },
      { id: 'c3', name: 'Precipitation', description: 'Heavy moisture falling as rain, snow, or hail under gravity' },
      { id: 'c4', name: 'Collection', description: 'Water gathering back into streams, lakes, and oceans to repeat the loop' }
    ],
    pages: [
      {
        pageNumber: 1,
        title: "Meet Leo the Water Droplet!",
        content: "Deep in the shimmering sapphire ocean lived Leo, a curious little water droplet. Leo spent his days splashing with sea turtles and whispering secrets to playful dolphins. But Leo had a big, wild dream: 'One day, I want to soar high into the boundless sky!'",
        conceptIds: ['c1'],
        conceptName: "Evaporation",
        dialogue: { character: "Leo", speech: "Look at the great sky! I wonder what it feels like to fly among the birds!" },
        analogy: "A curious traveler ready to set off on a round-the-world expedition!",
        visualType: "ocean_intro",
        illustrationBadge: "🌊 Shimmering Ocean Origin!",
        illustrationCaption: "Every droplet begins its grand circular odyssey in the open sea.",
        illustrationIcon: "🌊"
      },
      {
        pageNumber: 2,
        title: "The Warm Hug from Mr. Sun (Evaporation)",
        content: "The next morning, Mr. Sun beamed brightly with warm golden rays. Leo felt warm, lighter, and ticklish! Before he knew it, he turned into an invisible mist called water vapor and began floating upward, leaving the ocean waves behind.",
        conceptIds: ['c1'],
        conceptName: "Evaporation",
        dialogue: { character: "Mr. Sun", speech: "Warm up, little Leo! Turn into light vapor and let the wind lift you up!" },
        analogy: "Like steam floating out of a warm teacup and drifting towards the ceiling.",
        visualType: "evap_state_change",
        illustrationBadge: "✨ Rising into the Sky as Warm Vapor!",
        illustrationCaption: "Solar heat lifts water vapor high into the boundless atmosphere.",
        illustrationIcon: "☀️"
      },
      {
        pageNumber: 3,
        title: "Cloud Castle Party (Condensation)",
        content: "High up in the cool sky, Leo shivered happily. The chilly air caused him and billions of fellow water droplets to hug together tightly. Pop! They transformed into fluffy white clouds floating like giant cotton candies across the blue sky.",
        conceptIds: ['c2'],
        conceptName: "Condensation",
        dialogue: { character: "Cloud Pals", speech: "Hold hands tightly! When we cool down, we make a big puffy cloud!" },
        analogy: "Like penguins huddling in cold weather to stay close together.",
        visualType: "cond_cloud_castle",
        illustrationBadge: "☁️ Floating in Fluffy Cloud Castles!",
        illustrationCaption: "Cold winds cluster vapor droplets into magnificent puffy clouds.",
        illustrationIcon: "☁️"
      },
      {
        pageNumber: 4,
        title: "The Great Sky Drop Ride (Precipitation)",
        content: "As more droplets joined, the cloud grew dark, heavy, and full of giggles. 'Wheee!' cried Leo as gravity gently called him home. He whooshed through the air as refreshing raindrops, watering sunflower fields and mountain hills below.",
        conceptIds: ['c3'],
        conceptName: "Precipitation",
        dialogue: { character: "Leo", speech: "We're too heavy to float now! Hold on tight, here comes the splash!" },
        analogy: "A thrilling skydiving jump where drops return to hydrate the world below.",
        visualType: "precip_rain_fall",
        illustrationBadge: "🌧️ Gravity's Splashdown to Earth!",
        illustrationCaption: "Heavy drops fall back to Earth as refreshing rainfall.",
        illustrationIcon: "🌧️"
      },
      {
        pageNumber: 5,
        title: "The Grand Journey Home (Collection)",
        content: "Leo splashed into a babbling brook! The stream raced over smooth pebbles into a calm blue river, which carried Leo all the way back to the vast ocean where his grand adventure began, ready for another day.",
        conceptIds: ['c4'],
        conceptName: "Collection",
        dialogue: { character: "River Stream", speech: "Follow the current, friend! Every droplet gathers back in rivers and oceans!" },
        analogy: "Like a giant circular train track that brings travelers back to the main station.",
        visualType: "collect_runoff_streams",
        illustrationBadge: "🏞️ River Slides Back to the Sea!",
        illustrationCaption: "Rivers collect rainwater and return it home to the ocean.",
        illustrationIcon: "🌊"
      }
    ],
    flashcards: [
      {
        id: 'fc-wc-1',
        term: "The Four Water Cycle Stages",
        category: "Complete Cycle",
        definition: "Evaporation (liquid to gas) → Condensation (gas to cloud droplets) → Precipitation (falling as rain/snow) → Collection (gathering in oceans/lakes).",
        analogy: "A perpetual 4-station loop where water travels from sea to sky to land and back!",
        keyTakeaway: "Water is never created or destroyed; it recycles continuously.",
        icon: "🔄"
      },
      {
        id: 'fc-wc-2',
        term: "Stage 1: Evaporation",
        category: "Ascending Phase",
        definition: "Liquid water absorbs solar heat and turns into invisible vapor that rises high into the atmosphere.",
        analogy: "Water packing light and taking the heat escalator up into the sky.",
        keyTakeaway: "Powered by solar energy from the Sun.",
        icon: "☀️"
      },
      {
        id: 'fc-wc-3',
        term: "Stage 2: Condensation",
        category: "Cloud Formation",
        definition: "Chilled vapor clumps together around atmospheric particles to create fluffy clouds and fog.",
        analogy: "Droplets huddling together in a chilly sky castle.",
        keyTakeaway: "Requires cool high-altitude temperatures.",
        icon: "☁️"
      },
      {
        id: 'fc-wc-4',
        term: "Stage 3 & 4: Rain & Collection",
        category: "Return & Storage",
        definition: "Precipitation brings water down under gravity, and surface runoff collects it back into oceans, rivers, and aquifers.",
        analogy: "The big splash down and the river slide back home to base camp.",
        keyTakeaway: "Replenishes Earth's water supplies continuously.",
        icon: "🌊"
      }
    ],
    questions: [
      {
        id: 'q-wc-1',
        conceptId: 'c1',
        conceptName: 'Evaporation',
        question: "What happens when the Sun warms up ocean water?",
        options: [
          { text: "It freezes into giant icebergs", isCorrect: false },
          { text: "It turns into water vapor and rises up", isCorrect: true },
          { text: "It sinks straight to the ocean floor", isCorrect: false },
          { text: "It turns into red lava", isCorrect: false }
        ],
        correctAnswer: 1,
        explanation: "Evaporation happens when warmth turns liquid water into invisible gas (vapor) that floats up!"
      },
      {
        id: 'q-wc-2',
        conceptId: 'c2',
        conceptName: 'Condensation',
        question: "How do water droplets in the cold high sky form fluffy clouds?",
        options: [
          { text: "They cook like pancakes", isCorrect: false },
          { text: "They cool down and cluster together", isCorrect: true },
          { text: "They get painted by rainbows", isCorrect: false },
          { text: "They vanish forever", isCorrect: false }
        ],
        correctAnswer: 1,
        explanation: "Condensation occurs when cool air brings vapor droplets together to form clouds!"
      },
      {
        id: 'q-wc-3',
        conceptId: 'c3',
        conceptName: 'Precipitation',
        question: "When clouds become too heavy with water, what occurs?",
        options: [
          { text: "The clouds turn into gold coins", isCorrect: false },
          { text: "They fall as rain, snow, or hail (Precipitation)", isCorrect: true },
          { text: "They float to outer space", isCorrect: false },
          { text: "Nothing happens", isCorrect: false }
        ],
        correctAnswer: 1,
        explanation: "Precipitation is when condensed water drops fall back to Earth as rain, sleet, or snow."
      },
      {
        id: 'q-wc-4',
        conceptId: 'c4',
        conceptName: 'Collection',
        question: "Where does rainwater gather after falling back onto mountains and plains?",
        options: [
          { text: "It disappears from Earth completely", isCorrect: false },
          { text: "It turns into solid rocks", isCorrect: false },
          { text: "It collects in streams, lakes, and oceans (Collection)", isCorrect: true },
          { text: "It stays floating mid-air forever", isCorrect: false }
        ],
        correctAnswer: 2,
        explanation: "Collection is when water gathers back into puddles, streams, rivers, and oceans to repeat the cycle."
      }
    ],
    reteach: {
      title: "Leo's Bonus Secret Basin!",
      subtitle: "Let's make Collection super easy!",
      weakConcept: { id: 'c4', name: 'Collection' },
      content: [
        {
          panel: 1,
          title: "Where Do Drops Go Next?",
          description: "After falling from storm clouds, drops don't just disappear! They flow downhill into puddles, streams, and lakes.",
          analogy: "Think of a playground slide ending right in a big ball pit! All balls end up together at the bottom.",
          dialogue: "Coco: 'Follow me! Gravity slides us all into our cozy ocean home!'"
        },
        {
          panel: 2,
          title: "Nature's Giant Gathering Party",
          description: "Collection is simply nature's gathering party. Oceans, rivers, underground aquifers, and quiet ponds hold the water so the cycle can start again.",
          analogy: "Just like collecting your favorite stickers together in one special sticker book!",
          dialogue: "Milo: 'Collection = Gathering! Liquid water comes together in one big place.'"
        }
      ],
      questions: [
        {
          id: 'rq-wc-1',
          conceptId: 'c4',
          conceptName: 'Collection',
          question: "When rain slides down mountains into calm blue lakes, what stage of the water cycle is this?",
          options: [
            { text: "Collection (water gathers in bodies of water)", isCorrect: true },
            { text: "Freezing into snowballs", isCorrect: false },
            { text: "Disappearing into space", isCorrect: false }
          ],
          correctAnswer: 0,
          explanation: "Bingo! Water gathering into lakes, oceans, and rivers is called Collection."
        }
      ]
    }
  },

  // 6. Plant Photosynthesis
  'Plant Photosynthesis': {
    title: "Sunny the Leaf's Solar Kitchen: The Magic of Photosynthesis",
    subject: "Science",
    topic: "Plant Photosynthesis",
    heroCharacter: "Sunny the Chloroplast",
    mentorCharacter: "Ray the Photon",
    themeColor: "from-emerald-400 via-green-300 to-amber-300",
    concepts: [
      { id: 'ps1', name: 'Sunlight & Chlorophyll', description: 'Green chlorophyll pigments capturing solar light energy' },
      { id: 'ps2', name: 'Water & Carbon Dioxide', description: 'Roots drinking H2O and leaf stomata inhaling CO2 from the air' },
      { id: 'ps3', name: 'Cooking Glucose Sugar', description: 'Plants synthesizing sweet glucose food for growth and energy' },
      { id: 'ps4', name: 'Oxygen Gift to Earth', description: 'Releasing clean oxygen gas back into the atmosphere for all breathing life' }
    ],
    pages: [
      {
        pageNumber: 1,
        title: "The Green Factory in the Leaf",
        content: "Deep inside an emerald green oak leaf lived Sunny the Chloroplast. Sunny wore bright green overalls made of chlorophyll. 'Good morning world!' beamed Sunny. 'Our leaf solar panels are wide open, ready to catch sunbeams!'",
        conceptIds: ['ps1'],
        conceptName: "Sunlight & Chlorophyll",
        dialogue: { character: "Sunny", speech: "Chlorophyll gives leaves their green color and traps the Sun's light like a solar battery!" },
        analogy: "Like roof solar panels capturing sunshine to power a cozy home kitchen!",
        visualType: "photo_chloroplast",
        illustrationBadge: "🌿 Chloroplasts Trapping Solar Light!",
        illustrationCaption: "Green chlorophyll inside leaf cells absorbs sunbeam photon energy.",
        illustrationIcon: "🍃"
      },
      {
        pageNumber: 2,
        title: "The Two Secret Ingredients",
        content: "To cook delicious food, Sunny needed two ingredients: fresh water from the deep tree roots, and carbon dioxide inhaled through microscopic leaf pores called stomata. 'Ingredients delivered and ready for the recipe!' chimed the Root Pipeline.",
        conceptIds: ['ps2'],
        conceptName: "Water & Carbon Dioxide",
        dialogue: { character: "Root Pipeline", speech: "Sending up cool mountain water from subterranean soil right to your kitchen!" },
        analogy: "Like flour and milk arriving at a baker's mixing bowl before baking a cake.",
        visualType: "photo_stomata_roots",
        illustrationBadge: "💧 Roots Drinking H2O & Stomata Inhaling CO2!",
        illustrationCaption: "Water rises through xylem tubes while leaf stomata inhale carbon dioxide.",
        illustrationIcon: "🌱"
      },
      {
        pageNumber: 3,
        title: "Cooking Sweet Glucose!",
        content: "With sunlight providing the cooking power, Sunny mixed the water and carbon dioxide together. Zap! A chemical marvel took place: sweet, energy-rich glucose sugar was created to help branches and blossoms grow big and strong.",
        conceptIds: ['ps3'],
        conceptName: "Cooking Glucose Sugar",
        dialogue: { character: "Sunny", speech: "Taste this! Pure plant food cooked with light, water, and air!" },
        analogy: "A magic solar oven turning air and water into sweet treats that give trees superpower strength!",
        visualType: "photo_glucose_kitchen",
        illustrationBadge: "🍯 Cooking Sweet Glucose Sugar Fuel!",
        illustrationCaption: "Solar energy binds water and carbon into sweet glucose food to nourish the plant.",
        illustrationIcon: "⚡"
      },
      {
        pageNumber: 4,
        title: "The Oxygen Gift to the World",
        content: "As the meal finished cooking, Sunny noticed a wonderful byproduct: clean, refreshing oxygen! The leaf exhaled the oxygen through its stomata into the breeze, providing fresh air for puppies, birds, and humans everywhere.",
        conceptIds: ['ps4'],
        conceptName: "Oxygen Gift to Earth",
        dialogue: { character: "Milo", speech: "Every deep breath you take was cooked with love by plant photosynthesis!" },
        analogy: "Like baking cookies where the sweet aroma fills the whole neighborhood with fresh happiness!",
        visualType: "photo_oxygen_release",
        illustrationBadge: "💨 Clean Oxygen Released for Earth!",
        illustrationCaption: "Plants release vital oxygen into the atmosphere for every living creature.",
        illustrationIcon: "🌍"
      }
    ],
    flashcards: [
      {
        id: 'fc-ps-1',
        term: "What is Photosynthesis?",
        category: "Core Process",
        definition: "The process by which green plants use sunlight, water, and carbon dioxide to create glucose sugar for food and release oxygen into the air.",
        analogy: "A natural solar-powered kitchen inside every green leaf on Earth!",
        keyTakeaway: "Photo = Light, Synthesis = Putting together.",
        icon: "🍃"
      },
      {
        id: 'fc-ps-2',
        term: "What is Chlorophyll?",
        category: "Plant Anatomy",
        definition: "The green pigment found inside chloroplasts that absorbs sunlight energy needed for the chemical reaction.",
        analogy: "The plant's green solar panels that absorb light beams.",
        keyTakeaway: "Chlorophyll makes leaves green and traps solar energy.",
        icon: "🌱"
      },
      {
        id: 'fc-ps-3',
        term: "What are the Ingredients vs Outputs?",
        category: "Chemical Formula",
        definition: "Inputs: Sunlight + Water (H2O) + Carbon Dioxide (CO2). Outputs: Glucose Sugar (C6H12O6) + Oxygen (O2).",
        analogy: "Sunlight + Water + Air = Plant Food + Breathable Air!",
        keyTakeaway: "Plants take in carbon dioxide and give us life-giving oxygen.",
        icon: "🧪"
      },
      {
        id: 'fc-ps-4',
        term: "What are Stomata?",
        category: "Plant Organs",
        definition: "Microscopic mouth-like pores on the underside of leaves that open and close to exchange gases (taking in CO2, releasing O2).",
        analogy: "Millions of tiny leaf mouths that breathe with the wind.",
        keyTakeaway: "Stomata regulate gas exchange and moisture in plants.",
        icon: "🔬"
      }
    ],
    questions: [
      {
        id: 'q-ps-1',
        conceptId: 'ps1',
        conceptName: 'Sunlight & Chlorophyll',
        question: "What pigment gives leaves their green color and traps sunlight for photosynthesis?",
        options: [
          { text: "Chlorophyll", isCorrect: true },
          { text: "Caramel", isCorrect: false },
          { text: "Iron oxide", isCorrect: false },
          { text: "Diamond dust", isCorrect: false }
        ],
        correctAnswer: 0,
        explanation: "Chlorophyll is the green chemical pigment inside plant cells that absorbs light energy."
      },
      {
        id: 'q-ps-2',
        conceptId: 'ps2',
        conceptName: 'Water & Carbon Dioxide',
        question: "Which gas do plant leaves absorb from the air during photosynthesis?",
        options: [
          { text: "Carbon Dioxide (CO2)", isCorrect: true },
          { text: "Pure Helium", isCorrect: false },
          { text: "Methane gas", isCorrect: false },
          { text: "Neon", isCorrect: false }
        ],
        correctAnswer: 0,
        explanation: "Plants absorb carbon dioxide from the atmosphere through small pores called stomata."
      },
      {
        id: 'q-ps-3',
        conceptId: 'ps3',
        conceptName: 'Cooking Glucose Sugar',
        question: "What sugar molecule do plants create as food for energy and growth?",
        options: [
          { text: "Glucose", isCorrect: true },
          { text: "Plastic", isCorrect: false },
          { text: "Salt", isCorrect: false },
          { text: "Vinegar", isCorrect: false }
        ],
        correctAnswer: 0,
        explanation: "Plants produce glucose (sugar) which fuels their biological growth and cellular energy."
      },
      {
        id: 'q-ps-4',
        conceptId: 'ps4',
        conceptName: 'Oxygen Gift to Earth',
        question: "What vital gas is released into the atmosphere as a gift of photosynthesis for animals to breathe?",
        options: [
          { text: "Oxygen (O2)", isCorrect: true },
          { text: "Carbon Monoxide", isCorrect: false },
          { text: "Argon", isCorrect: false },
          { text: "Smoke", isCorrect: false }
        ],
        correctAnswer: 0,
        explanation: "Photosynthesis releases clean oxygen into our atmosphere, sustaining animal and human respiration."
      }
    ],
    reteach: {
      title: "Sunny's Green Kitchen Recipe",
      subtitle: "Photosynthesis Made Super Simple!",
      weakConcept: { id: 'ps1', name: 'Photosynthesis' },
      content: [
        {
          panel: 1,
          title: "Light + Water + Air = Plant Food!",
          description: "Plants don't eat sandwiches—they cook their own food using green chlorophyll, sunlight, water from roots, and carbon dioxide from the breeze.",
          analogy: "Like a solar microwave turning sunshine into sweet plant snacks!",
          dialogue: "Sunny: 'Chlorophyll catches the light, roots sip the water, leaves breathe the air!'"
        },
        {
          panel: 2,
          title: "Fresh Oxygen For Everyone!",
          description: "When the plant finishes cooking sweet glucose sugar, it releases fresh oxygen into the air so people and animals can breathe happily.",
          analogy: "Trees are our planet's green lungs!",
          dialogue: "Milo: 'Take a deep breath and thank a leafy plant!'"
        }
      ],
      questions: [
        {
          id: 'rq-ps-1',
          conceptId: 'ps1',
          conceptName: 'Photosynthesis',
          question: "What two things does a plant produce during photosynthesis?",
          options: [
            { text: "Glucose sugar (food) and oxygen gas", isCorrect: true },
            { text: "Sand and rocks", isCorrect: false },
            { text: "Ice and fire", isCorrect: false }
          ],
          correctAnswer: 0,
          explanation: "Plants produce glucose for nutrition and oxygen as a byproduct."
        }
      ]
    }
  },

  // 7. Solar System & Planets
  'Solar System & Planets': {
    title: "Cosmo & The Grand Planetary Voyage",
    subject: "Astronomy",
    topic: "Solar System & Planets",
    heroCharacter: "Cosmo the Orbit Explorer",
    mentorCharacter: "Stella the Starlight Guide",
    themeColor: "from-indigo-900 via-purple-900 to-slate-900",
    concepts: [
      { id: 'ss1', name: 'The Sun & Gravitational Orbit', description: 'The massive glowing star at the center holding eight worlds in cosmic orbit' },
      { id: 'ss2', name: 'Inner Rocky Planets', description: 'Mercury, Venus, Earth, and Mars: solid terrestrial worlds with mineral crusts' },
      { id: 'ss3', name: 'Outer Gas Giants & Asteroid Belt', description: 'The rocky asteroid belt and giant hydrogen worlds: Jupiter, Saturn, Uranus, Neptune' },
      { id: 'ss4', name: 'Moons, Comets & Cosmic Deep Space', description: 'Hundreds of orbiting moons, icy tails of comets, and the Kuiper belt frontier' }
    ],
    pages: [
      {
        pageNumber: 1,
        title: "The Sun: Master of Cosmic Gravity",
        content: "High above the Earth in a shimmering silver spaceship, Cosmo the Orbit Explorer gazed through the telescope observatory. At the very center of everything blazed the magnificent Sun—a colossal ball of glowing plasma over a million times the size of Earth! 'The Sun is our cosmic gravitational anchor,' whispered Stella the Starlight Guide. Its invisible gravitational pull holds all eight planets in steady, elliptical orbits.",
        conceptIds: ['ss1'],
        conceptName: "The Sun & Gravitational Orbit",
        dialogue: { character: "Stella", speech: "Without the Sun's immense gravity, planets would drift randomly into dark, freezing outer space!" },
        analogy: "Like swinging a tetherball around a central pole: the rope of gravity keeps every world flying safely in its own circular track!",
        visualType: "solar_sun_orbit",
        illustrationBadge: "☀️ The Sun & Cosmic Gravitational Orbits!",
        illustrationCaption: "The Sun's colossal mass and gravity lock eight planets into elegant orbital paths.",
        illustrationIcon: "☀️"
      },
      {
        pageNumber: 2,
        title: "The Four Inner Rocky Worlds",
        content: "Cosmo steered the ship inward toward the four planets nearest to the Sun: Mercury, Venus, Earth, and Mars. Unlike the outer giants, these four are compact, dense 'terrestrial planets' with solid rocky surfaces. Mercury was covered in craters, Venus was shrouded in thick golden clouds, our beloved blue Earth had sparkling oceans and green continents, and Mars showed off its rusty red canyons and polar ice caps.",
        conceptIds: ['ss2'],
        conceptName: "Inner Rocky Planets",
        dialogue: { character: "Cosmo", speech: "Touchdown on solid ground! These four inner worlds have rocky crusts you can actually walk on!" },
        analogy: "Like four warm rocky stepping stones placed close to a roaring campfire.",
        visualType: "solar_rocky_planets",
        illustrationBadge: "🪨 Inner Rocky Terrestrial Worlds (Mercury, Venus, Earth, Mars)!",
        illustrationCaption: "Dense mineral crusts, mountains, and atmospheres closest to the Sun's warmth.",
        illustrationIcon: "🌍"
      },
      {
        pageNumber: 3,
        title: "The Asteroid Belt & Massive Gas Giants",
        content: "Passing through the tumbling rocks of the Asteroid Belt, Cosmo gasped in sheer amazement. Ahead stood the colossal Gas Giants! Mighty Jupiter, largest of all, spun with its ferocious Great Red Spot hurricane. Next came Saturn, crowned with magnificent shimmering rings of ice and cosmic dust. Further out floated ice giants Uranus and Neptune, gleaming like turquoise gemstones in the deep freeze.",
        conceptIds: ['ss3'],
        conceptName: "Outer Gas Giants & Asteroid Belt",
        dialogue: { character: "Cosmo", speech: "Jupiter is so huge that over 1,300 Earths could fit inside it! And look at Saturn's ice rings shine!" },
        analogy: "Like giant colorful hot-air balloons soaring high above tiny pebbles on the ground below.",
        visualType: "solar_gas_giants",
        illustrationBadge: "🪐 Gas Giants: Jupiter, Saturn, Uranus & Neptune!",
        illustrationCaption: "Massive swirling hydrogen-helium atmospheres and magnificent icy ring systems.",
        illustrationIcon: "🪐"
      },
      {
        pageNumber: 4,
        title: "Moons, Icy Comets & The Great Frontier",
        content: "As the spaceship reached the outer rim, Cosmo looked back in awe. Over 200 diverse moons orbited the planets—some with icy oceans and erupting ice geysers! Far in the distance, icy comets from the Kuiper Belt swung toward the Sun, vaporizing into brilliant glowing tails that lit up the cosmic night. 'Our solar system is a boundless wonderland!' Cosmo cheered, saluting the stars.",
        conceptIds: ['ss4'],
        conceptName: "Moons, Comets & Cosmic Deep Space",
        dialogue: { character: "Milo", speech: "You've traveled from the fiery Sun to the edge of the Kuiper Belt! You are an official Cosmic Explorer!" },
        analogy: "Like fireflies darting through a midnight forest, illuminating secrets across infinite space.",
        visualType: "solar_deep_space",
        illustrationBadge: "🚀 Moons, Glowing Comets & Deep Space Frontiers!",
        illustrationCaption: "Hundreds of orbiting moons, icy comets with dust tails, and the infinite cosmic frontier.",
        illustrationIcon: "☄️"
      }
    ],
    flashcards: [
      {
        id: 'fc-ss-1',
        term: "What is the Solar System?",
        category: "Astronomy Core",
        definition: "A gravitationally bound system consisting of the Sun and the objects that orbit it, including eight major planets, their moons, dwarf planets, asteroids, and comets.",
        analogy: "A giant cosmic carousel where the Sun is the center engine and planets are the spinning riders!",
        keyTakeaway: "The Sun's gravity holds eight planets in elliptical orbits.",
        icon: "🌌"
      },
      {
        id: 'fc-ss-2',
        term: "Inner vs. Outer Planets",
        category: "Planetary Classification",
        definition: "Inner planets (Mercury, Venus, Earth, Mars) are small, rocky, and dense. Outer planets (Jupiter, Saturn, Uranus, Neptune) are colossal gas and ice giants without solid surfaces.",
        analogy: "Inner planets are like solid pebbles; outer planets are like giant swirling gas balloons!",
        keyTakeaway: "Separated by the asteroid belt into rocky terrestrial and giant gas worlds.",
        icon: "🪐"
      },
      {
        id: 'fc-ss-3',
        term: "Why Doesn't Earth Fly Away into Space?",
        category: "Gravitational Physics",
        definition: "The Sun's immense mass generates powerful gravitational attraction that constantly pulls planets inward, curving their forward velocity into a stable orbit.",
        analogy: "Like a tetherball rope that prevents the ball from flying into the trees when struck.",
        keyTakeaway: "Gravity acts as the invisible cosmic tether of the solar system.",
        icon: "☀️"
      },
      {
        id: 'fc-ss-4',
        term: "What Are Comets & Asteroids?",
        category: "Celestial Objects",
        definition: "Asteroids are rocky, metallic bodies mostly found in the belt between Mars and Jupiter. Comets are dirty snowballs of ice and dust from the outer solar system that grow glowing tails near the Sun.",
        analogy: "Asteroids are space rocks; comets are cosmic snowballs with glowing hair!",
        keyTakeaway: "Remnants left over from the formation of our solar system 4.6 billion years ago.",
        icon: "☄️"
      }
    ],
    questions: [
      {
        id: 'q-ss-1',
        conceptId: 'ss1',
        conceptName: 'The Sun & Gravitational Orbit',
        question: "What invisible cosmic force keeps the planets revolving around the Sun instead of drifting away?",
        options: [
          { text: "Strong cosmic winds", isCorrect: false },
          { text: "The Sun's immense gravitational pull", isCorrect: true },
          { text: "Giant ropes made of star dust", isCorrect: false },
          { text: "Magnetic ocean waves", isCorrect: false }
        ],
        correctAnswer: 1,
        explanation: "The Sun's colossal mass exerts strong gravity that keeps all eight planets locked in stable orbits."
      },
      {
        id: 'q-ss-2',
        conceptId: 'ss2',
        conceptName: 'Inner Rocky Planets',
        question: "Which group of planets are called 'terrestrial' because they have solid, rocky surfaces?",
        options: [
          { text: "Jupiter, Saturn, Uranus, Neptune", isCorrect: false },
          { text: "Mercury, Venus, Earth, Mars", isCorrect: true },
          { text: "Only Pluto and the Moon", isCorrect: false },
          { text: "The rings of Saturn", isCorrect: false }
        ],
        correctAnswer: 1,
        explanation: "Mercury, Venus, Earth, and Mars are the four inner rocky terrestrial planets closest to the Sun."
      },
      {
        id: 'q-ss-3',
        conceptId: 'ss3',
        conceptName: 'Outer Gas Giants & Asteroid Belt',
        question: "What is the largest planet in our solar system, famous for its giant swirling red storm?",
        options: [
          { text: "Jupiter", isCorrect: true },
          { text: "Mars", isCorrect: false },
          { text: "Venus", isCorrect: false },
          { text: "Mercury", isCorrect: false }
        ],
        correctAnswer: 0,
        explanation: "Jupiter is the largest planet in our solar system, with a mass greater than all other planets combined!"
      },
      {
        id: 'q-ss-4',
        conceptId: 'ss4',
        conceptName: 'Moons, Comets & Cosmic Deep Space',
        question: "What causes a comet to develop a glowing tail when it approaches the Sun?",
        options: [
          { text: "It catches on fire like firewood", isCorrect: false },
          { text: "Solar heat vaporizes its ice into glowing gas and dust streams", isCorrect: true },
          { text: "It turns into an electric lamp", isCorrect: false },
          { text: "Alien spacecraft shine lasers on it", isCorrect: false }
        ],
        correctAnswer: 1,
        explanation: "Solar heat sublimates the comet's icy core, creating a glowing coma and luminous dust/gas tail that points away from the Sun."
      }
    ],
    reteach: {
      title: "Cosmo's Cosmic Solar System Map",
      subtitle: "Planets & Gravity Made Crystal Clear!",
      weakConcept: { id: 'ss1', name: 'Solar System & Planets' },
      content: [
        {
          panel: 1,
          title: "The Sun is the Center Anchor",
          description: "Think of our solar system as a giant cosmic playground: the Sun sits in the center holding all the swings with the invisible rope of gravity.",
          analogy: "Like a bicycle wheel: the Sun is the center hub, and the planet orbits are the turning wheel rim!",
          dialogue: "Cosmo: 'The Sun gives us warmth, daylight, and keeps our orbit steady!'"
        },
        {
          panel: 2,
          title: "Rocky Neighbors vs. Giant Gas Worlds",
          description: "Close to the Sun, we have four rocky worlds (Mercury, Venus, Earth, Mars). Beyond the asteroid belt, we have four giant gas worlds (Jupiter, Saturn, Uranus, Neptune).",
          analogy: "Rocky inner planets are solid marbles; outer gas giants are huge swirling beach balls!",
          dialogue: "Milo: 'Inner = Rock you can step on. Outer = Huge gas clouds with rings!'"
        }
      ],
      questions: [
        {
          id: 'rq-ss-1',
          conceptId: 'ss1',
          conceptName: 'Solar System & Planets',
          question: "What separates the inner rocky planets from the outer gas giants?",
          options: [
            { text: "The Asteroid Belt", isCorrect: true },
            { text: "A wall of liquid gold", isCorrect: false },
            { text: "Nothing at all", isCorrect: false }
          ],
          correctAnswer: 0,
          explanation: "The Asteroid Belt is a ring of rocky debris orbiting between Mars and Jupiter."
        }
      ]
    }
  }
};

// Universal Dynamic Content Generator for ANY custom or selected topic
export const generateDynamicTopicContent = (rawTopic, studentName = 'Aarav') => {
  const normalized = (rawTopic || 'Water Cycle').trim();

  // 1. Direct curriculum match
  if (TOPIC_CURRICULUM[normalized]) {
    return customizeStudentInTopic(TOPIC_CURRICULUM[normalized], studentName);
  }

  // 2. Case-insensitive / partial match check
  const lower = normalized.toLowerCase();

  // Special domain routing:
  if (lower.includes('solar') || lower.includes('planet') || lower.includes('orbit') || lower.includes('astro') || lower.includes('space')) {
    return customizeStudentInTopic(TOPIC_CURRICULUM['Solar System & Planets'], studentName);
  }
  if (lower.includes('photo') || lower.includes('plant') || lower.includes('leaf') || lower.includes('chlorophyll')) {
    return customizeStudentInTopic(TOPIC_CURRICULUM['Plant Photosynthesis'], studentName);
  }
  if (lower.includes('evaporat')) {
    return customizeStudentInTopic(TOPIC_CURRICULUM['Evaporation'], studentName);
  }
  if (lower.includes('condens')) {
    return customizeStudentInTopic(TOPIC_CURRICULUM['Condensation'], studentName);
  }
  if (lower.includes('precipitat') || lower.includes('rain')) {
    return customizeStudentInTopic(TOPIC_CURRICULUM['Precipitation'], studentName);
  }
  if (lower.includes('collect') || lower.includes('river') || lower.includes('basin')) {
    return customizeStudentInTopic(TOPIC_CURRICULUM['Collection'], studentName);
  }
  if (lower.includes('water') || lower.includes('cycle')) {
    return customizeStudentInTopic(TOPIC_CURRICULUM['Water Cycle'], studentName);
  }

  for (const [key, data] of Object.entries(TOPIC_CURRICULUM)) {
    if (key.toLowerCase() === lower || lower.includes(key.toLowerCase()) || key.toLowerCase().includes(lower)) {
      return customizeStudentInTopic(data, studentName);
    }
  }

  // 3. Procedural Smart Generator for ANY arbitrary topic (e.g. "Dinosaurs", "Gravity", "Electricity")
  const capitalizedTopic = normalized.charAt(0).toUpperCase() + normalized.slice(1);
  const heroName = `${capitalizedTopic.split(' ')[0]} Explorer`;

  const customConcepts = [
    { id: 'dyn1', name: `${capitalizedTopic} Basics`, description: `Fundamental building blocks and core principles of ${capitalizedTopic}` },
    { id: 'dyn2', name: 'How It Works', description: `Key operational mechanisms and interactions behind ${capitalizedTopic}` },
    { id: 'dyn3', name: 'Real-World Examples', description: `Observing ${capitalizedTopic} in daily nature and modern applications` },
    { id: 'dyn4', name: 'Why It Matters', description: `The profound impact of ${capitalizedTopic} on science and life on Earth` }
  ];

  return {
    title: `${studentName}'s Big Adventure into ${capitalizedTopic}!`,
    subject: "Science Discovery",
    topic: capitalizedTopic,
    heroCharacter: heroName,
    mentorCharacter: "Milo the Guide",
    themeColor: "from-amber-400 via-sky-300 to-indigo-300",
    concepts: customConcepts,
    pages: [
      {
        pageNumber: 1,
        title: `Entering the World of ${capitalizedTopic}`,
        content: `${studentName} and Milo opened the magical science portal and stepped into the fascinating universe of ${capitalizedTopic}! Everywhere they looked, brilliant concepts and secrets were waiting to be explored. 'Are you ready to unlock how ${capitalizedTopic} works?' Milo asked with a wide grin.`,
        conceptIds: ['dyn1'],
        conceptName: `${capitalizedTopic} Basics`,
        dialogue: { character: "Milo", speech: `Welcome, ${studentName}! Today we are discovering the wonder of ${capitalizedTopic}!` },
        analogy: `Think of ${capitalizedTopic} like a magical puzzle: once you fit the core pieces together, the whole picture comes alive!`,
        visualType: "dyn_topic_anchor",
        illustrationBadge: `🔍 Exploring ${capitalizedTopic} Fundamentals!`,
        illustrationCaption: `Uncovering the foundational scientific rules behind ${capitalizedTopic}.`,
        illustrationIcon: "💡"
      },
      {
        pageNumber: 2,
        title: `The Engine Behind ${capitalizedTopic}`,
        content: `As they journeyed deeper, ${studentName} discovered the main engine that makes ${capitalizedTopic} work. Every rule, force, and detail interacted harmoniously like instruments in an orchestra, keeping everything balanced and energized.`,
        conceptIds: ['dyn2'],
        conceptName: "How It Works",
        dialogue: { character: heroName, speech: `Watch closely! When energy and structure meet, ${capitalizedTopic} springs into action!` },
        analogy: `Like the moving gears inside a Swiss clock: each tiny gear turns the next one perfectly.`,
        visualType: "dyn_topic_mechanism",
        illustrationBadge: `⚙️ The Engine Behind ${capitalizedTopic}!`,
        illustrationCaption: `How energy, forces, and matter interact to drive ${capitalizedTopic}.`,
        illustrationIcon: "⚙️"
      },
      {
        pageNumber: 3,
        title: `${capitalizedTopic} in the World Around Us`,
        content: `'Look over there!' pointed ${studentName}. ${capitalizedTopic} wasn't just a textbook idea—it was happening right in nature and technology every day! From the air we breathe to the stars at night, its footprint was all around.`,
        conceptIds: ['dyn3'],
        conceptName: "Real-World Examples",
        dialogue: { character: "Milo", speech: `Science isn't trapped in classrooms—${capitalizedTopic} shapes our daily everyday lives!` },
        analogy: `Like spotting your favorite character's logo hidden in real-world signs everywhere you walk.`,
        visualType: "dyn_topic_realworld",
        illustrationBadge: `🌍 ${capitalizedTopic} in Everyday Nature!`,
        illustrationCaption: `Observing practical examples across daily life and nature.`,
        illustrationIcon: "🔍"
      },
      {
        pageNumber: 4,
        title: `Becoming a Master of ${capitalizedTopic}!`,
        content: `With all the clues gathered and the mysteries solved, ${studentName} completed the grand exploration of ${capitalizedTopic}! 'You've unlocked this concept with flying colors,' cheered Milo, handing ${studentName} the Golden Curiosity Trophy.`,
        conceptIds: ['dyn4'],
        conceptName: "Why It Matters",
        dialogue: { character: heroName, speech: `High five, ${studentName}! You have officially mastered ${capitalizedTopic}!` },
        analogy: `Like reaching the top of a mountain summit and seeing the clear blue view in every direction!`,
        visualType: "dyn_topic_mastery",
        illustrationBadge: `🏆 Full Mastery of ${capitalizedTopic}!`,
        illustrationCaption: `Connecting the big picture to become a true science master.`,
        illustrationIcon: "⭐"
      }
    ],
    flashcards: [
      {
        id: 'fc-dyn-1',
        term: `What is ${capitalizedTopic}?`,
        category: "Core Definition",
        definition: `The fundamental scientific topic exploring the nature, rules, and impact of ${capitalizedTopic} in the universe.`,
        analogy: `A key that unlocks one of nature's greatest secret powers!`,
        keyTakeaway: `Understanding ${capitalizedTopic} helps us explain how our world operates.`,
        icon: "💡"
      },
      {
        id: 'fc-dyn-2',
        term: `How Does ${capitalizedTopic} Work?`,
        category: "Key Mechanism",
        definition: `It operates through interconnected forces, energy transfers, and natural laws working together in harmony.`,
        analogy: `Like a well-rehearsed dance where every step connects smoothly to the next.`,
        keyTakeaway: `Every effect in ${capitalizedTopic} has a clear underlying cause.`,
        icon: "⚙️"
      },
      {
        id: 'fc-dyn-3',
        term: `Where Do We See It in Daily Life?`,
        category: "Application",
        definition: `It can be observed in natural ecosystems, atmospheric weather, human innovation, and modern everyday tools.`,
        analogy: `A secret helper that is always working behind the scenes.`,
        keyTakeaway: `Look around closely and you will notice examples of ${capitalizedTopic} everywhere!`,
        icon: "🔍"
      },
      {
        id: 'fc-dyn-4',
        term: `Why is Studying ${capitalizedTopic} Important?`,
        category: "Big Picture",
        definition: `It allows scientists, engineers, and students like you to invent solutions, protect the environment, and understand our world.`,
        analogy: `Like reading the instruction manual for planet Earth!`,
        keyTakeaway: `Curiosity and learning turn big concepts into exciting discoveries.`,
        icon: "🏆"
      }
    ],
    questions: [
      {
        id: 'q-dyn-1',
        conceptId: 'dyn1',
        conceptName: `${capitalizedTopic} Basics`,
        question: `What is the core focus when learning about ${capitalizedTopic}?`,
        options: [
          { text: `Understanding its fundamental rules, forces, and natural principles`, isCorrect: true },
          { text: `Ignoring all observations and facts`, isCorrect: false },
          { text: `Pretending that nature cannot be studied`, isCorrect: false },
          { text: `Memorizing unrelated numbers without meaning`, isCorrect: false }
        ],
        correctAnswer: 0,
        explanation: `Learning ${capitalizedTopic} centers on discovering the natural principles and laws that drive it.`
      },
      {
        id: 'q-dyn-2',
        conceptId: 'dyn2',
        conceptName: 'How It Works',
        question: `What powers the processes and interactions observed in ${capitalizedTopic}?`,
        options: [
          { text: `Energy transfer and physical or biological laws`, isCorrect: true },
          { text: `Pure coincidence with no scientific cause`, isCorrect: false },
          { text: `Static stillness where nothing moves`, isCorrect: false },
          { text: `Random fairy tales`, isCorrect: false }
        ],
        correctAnswer: 0,
        explanation: `Natural laws and energy transfers are the driving force behind ${capitalizedTopic}.`
      },
      {
        id: 'q-dyn-3',
        conceptId: 'dyn3',
        conceptName: 'Real-World Examples',
        question: `Where can students witness the impact of ${capitalizedTopic}?`,
        options: [
          { text: `In the surrounding environment and everyday occurrences`, isCorrect: true },
          { text: `Only in deep space lightyears away`, isCorrect: false },
          { text: `Nowhere on Earth`, isCorrect: false },
          { text: `Exclusively inside closed vaults`, isCorrect: false }
        ],
        correctAnswer: 0,
        explanation: `${capitalizedTopic} is reflected across natural occurrences and practical applications all around us.`
      },
      {
        id: 'q-dyn-4',
        conceptId: 'dyn4',
        conceptName: 'Why It Matters',
        question: `Why is having a solid grasp of ${capitalizedTopic} valuable for young adventurers?`,
        options: [
          { text: `It builds scientific thinking, curiosity, and problem-solving skills`, isCorrect: true },
          { text: `It makes the brain forget other ideas`, isCorrect: false },
          { text: `It stops people from asking questions`, isCorrect: false },
          { text: `It has zero real-world value`, isCorrect: false }
        ],
        correctAnswer: 0,
        explanation: `Mastering concepts fosters curiosity and empowers students to understand and improve their world.`
      }
    ],
    reteach: {
      title: `${studentName}'s Quick Mastery Boost: ${capitalizedTopic}`,
      subtitle: `Making ${capitalizedTopic} Simple & Fun!`,
      weakConcept: { id: 'dyn1', name: capitalizedTopic },
      content: [
        {
          panel: 1,
          title: `Step 1: The Core Idea`,
          description: `Remember, ${capitalizedTopic} is all about how energy, matter, and rules fit together in harmony.`,
          analogy: `Like building blocks: each small step supports the next one!`,
          dialogue: `Milo: 'Take it one step at a time, ${studentName}!'`
        },
        {
          panel: 2,
          title: `Step 2: Connecting to Life`,
          description: `When you connect ${capitalizedTopic} to things you can see and touch, the puzzle pieces snap right into place.`,
          analogy: `Like recognizing a favorite song the moment the melody plays!`,
          dialogue: `Milo: 'You've got this! Practice makes curiosity shine!'`
        }
      ],
      questions: [
        {
          id: 'rq-dyn-1',
          conceptId: 'dyn1',
          conceptName: capitalizedTopic,
          question: `What is the best way to understand ${capitalizedTopic}?`,
          options: [
            { text: `Breaking it down into simple concepts and relatable analogies`, isCorrect: true },
            { text: `Giving up before trying`, isCorrect: false },
            { text: `Guessing randomly`, isCorrect: false }
          ],
          correctAnswer: 0,
          explanation: `Relatable analogies and broken-down steps make any scientific concept intuitive.`
        }
      ]
    }
  };
};

const customizeStudentInTopic = (topicObj, studentName = 'Aarav') => {
  // Clone object
  const cloned = JSON.parse(JSON.stringify(topicObj));
  cloned.title = cloned.title.replace(/Leo|Aarav|Explorer/g, studentName);
  return cloned;
};
