export let globalCategories = {
  history: {
    description: {
      name: "History",
      icon: "fa-solid fa-book-open",
      color: "#067ba5",
      hoverColor: "#015979",
      backgroundBody: "#003346",
      backgroundContent: "#006284",
      leaderboard: "#0db3ee",
    },
    easy: [
      {
        question: "Who was the first President of the United States?",
        answers: {
          "George Washington": true,
          "Thomas Jefferson": false,
          "Abraham Lincoln": false,
          "John Adams": false,
        },
        explanation:
          "George Washington was the first President of the United States.",
      },
      {
        question: "What year did Columbus first sail to America?",
        answers: {
          1492: true,
          1500: false,
          1600: false,
          1400: false,
        },
        explanation: "Christopher Columbus first sailed to America in 1492.",
      },
      {
        question: "Who was the first man to walk on the moon?",
        answers: {
          "Neil Armstrong": true,
          "Buzz Aldrin": false,
          "John Glenn": false,
          "Yuri Gagarin": false,
        },
        explanation:
          "Neil Armstrong was the first man to walk on the moon in 1969.",
      },
      {
        question:
          "Which war was fought between the North and South in the United States?",
        answers: {
          "The Civil War": true,
          "World War I": false,
          "World War II": false,
          "The War of 1812": false,
        },
        explanation:
          "The American Civil War was fought between the Northern states (Union) and Southern states (Confederacy) from 1861 to 1865.",
      },
      {
        question: "Who wrote the Declaration of Independence?",
        answers: {
          "Thomas Jefferson": true,
          "Benjamin Franklin": false,
          "John Adams": false,
          "James Madison": false,
        },
        explanation:
          "Thomas Jefferson was the principal author of the Declaration of Independence, adopted on July 4, 1776.",
      },
      {
        question: "Where and when was gunpowder invented?",
        answers: {
          "China - 9th century": true,
          "United States - 19th century": false,
          "France - 17th century": false,
          "India - 13th century": false,
        },
        explanation:
          "Gunpowder was invented in China during the 9th century. Chinese alchemists discovered the mixture of potassium nitrate, charcoal, and sulfur, which was later used in firearms and fireworks.",
      },
      {
        question: "According to ancient legends, who founded Rome?",
        answers: {
          "Romulus and Remus": true,
          "Achilles and Odysseus": false,
          "Alexander the Great and Ptolemy": false,
          "Hercules and Perseus": false,
        },
        explanation:
          "According to Roman legend, Rome was founded by the twins Romulus and Remus in 753 BC.",
      },
      {
        question: "What was the main cause of World War I?",
        answers: {
          "The assassination of Archduke Franz Ferdinand": true,
          "The Great Depression": false,
          "The invention of the airplane": false,
          "The moon landing": false,
        },
        explanation:
          "The assassination of Archduke Franz Ferdinand of Austria in 1914 was a key event that triggered World War I.",
      },
      {
        question:
          "Which country was the first to grant women the right to vote?",
        answers: {
          "New Zealand": true,
          Canada: false,
          France: false,
          "United States": false,
        },
        explanation:
          "New Zealand was the first country to grant women the right to vote in 1893.",
      },
      {
        question:
          "What was the name of the wall that divided Berlin from 1961 to 1989?",
        answers: {
          "The Berlin Wall": true,
          "The Great Wall": false,
          "The Iron Curtain": false,
          "The Wall of China": false,
        },
        explanation:
          "The Berlin Wall was erected by East Germany to separate East Berlin from West Berlin and became a symbol of the Cold War.",
      },
    ],
    medium: [
      {
        question: "In which year did the Titanic sink?",
        answers: {
          1912: true,
          1905: false,
          1920: false,
          1915: false,
        },
        explanation:
          "The Titanic sank in 1912 after hitting an iceberg during its maiden voyage.",
      },
      {
        question:
          "Which country was the first to launch a satellite into space?",
        answers: {
          "Soviet Union": true,
          "United States": false,
          China: false,
          Germany: false,
        },
        explanation:
          "The Soviet Union was the first country to launch a satellite, Sputnik 1, into space in 1957.",
      },
      {
        question: "Who was the leader of the Soviet Union during World War II?",
        answers: {
          "Joseph Stalin": true,
          "Vladimir Lenin": false,
          "Nikita Khrushchev": false,
          "Leonid Brezhnev": false,
        },
        explanation:
          "Joseph Stalin was the leader of the Soviet Union during World War II.",
      },
      {
        question:
          "Which war was fought between the North and South regions in the United States?",
        answers: {
          "Civil War": true,
          "Revolutionary War": false,
          "World War I": false,
          "War of 1812": false,
        },
        explanation:
          "The Civil War was fought between the Northern and Southern states in the United States from 1861 to 1865.",
      },
      {
        question: "Who discovered penicillin?",
        answers: {
          "Alexander Fleming": true,
          "Marie Curie": false,
          "Louis Pasteur": false,
          "Isaac Newton": false,
        },
        explanation:
          "Alexander Fleming discovered penicillin in 1928, which became the world's first widely used antibiotic.",
      },
      {
        question: "Which empire was ruled by Julius Caesar?",
        answers: {
          "Roman Empire": true,
          "Greek Empire": false,
          "Ottoman Empire": false,
          "British Empire": false,
        },
        explanation:
          "Julius Caesar was a key figure in the Roman Empire, though he was never an emperor.",
      },
      {
        question:
          "Which document was signed in 1215 limiting the powers of the English king?",
        answers: {
          "Magna Carta": true,
          "Bill of Rights": false,
          Constitution: false,
          "Treaty of Versailles": false,
        },
        explanation:
          "The Magna Carta was signed in 1215 and is often cited as an early step in the development of constitutional law.",
      },
      {
        question:
          "Which battle is considered the turning point of World War II in the Pacific?",
        answers: {
          "Battle of Midway": true,
          "Battle of Pearl Harbor": false,
          "Battle of the Bulge": false,
          "Battle of Stalingrad": false,
        },
        explanation:
          "The Battle of Midway, fought in 1942, is considered the turning point of World War II in the Pacific.",
      },
      {
        question:
          "Who was the first woman to fly solo across the Atlantic Ocean?",
        answers: {
          "Amelia Earhart": true,
          "Harriet Quimby": false,
          "Bessie Coleman": false,
          "Sally Ride": false,
        },
        explanation:
          "Amelia Earhart became the first woman to fly solo across the Atlantic Ocean in 1932.",
      },
      {
        question: "Which civilization built Machu Picchu?",
        answers: {
          Inca: true,
          Maya: false,
          Aztec: false,
          Olmec: false,
        },
        explanation:
          "Machu Picchu was built by the Inca civilization in the 15th century in what is now Peru.",
      },
    ],
    hard: [
      {
        question: "Which treaty ended the Thirty Years' War in 1648?",
        answers: {
          "Treaty of Westphalia": true,
          "Treaty of Utrecht": false,
          "Treaty of Versailles": false,
          "Treaty of Paris": false,
        },
        explanation:
          "The Treaty of Westphalia ended the Thirty Years' War in 1648, marking the end of large-scale religious conflict in Europe.",
      },
      {
        question: "Who was the last Emperor of the Roman Empire?",
        answers: {
          "Romulus Augustulus": true,
          "Julius Caesar": false,
          Augustus: false,
          "Constantine the Great": false,
        },
        explanation:
          "Romulus Augustulus was the last Emperor of the Western Roman Empire, deposed in 476 AD.",
      },
      {
        question:
          "In which battle did the Byzantine Empire defeat the Sassanian Empire in 627 AD?",
        answers: {
          "Battle of Niniveh": true,
          "Battle of Hastings": false,
          "Battle of Lepanto": false,
          "Battle of Tours": false,
        },
        explanation:
          "The Battle of Niniveh in 627 AD resulted in a decisive Byzantine victory over the Sassanian Empire.",
      },
      {
        question: "Who was the founder of the Mongol Empire?",
        answers: {
          "Genghis Khan": true,
          "Kublai Khan": false,
          Tamerlane: false,
          "Attila the Hun": false,
        },
        explanation:
          "Genghis Khan founded the Mongol Empire in the early 13th century, which became the largest contiguous empire in history.",
      },
      {
        question:
          "What was the primary language of administration in the Ottoman Empire?",
        answers: {
          "Ottoman Turkish": true,
          Arabic: false,
          Persian: false,
          Greek: false,
        },
        explanation:
          "Ottoman Turkish was the primary language of administration in the Ottoman Empire.",
      },
      {
        question: "Which philosopher wrote 'Critique of Pure Reason'?",

        answers: {
          "Immanuel Kant": true,
          "Georg Wilhelm Friedrich Hegel": false,
          "Friedrich Nietzsche": false,
          "John Locke": false,
        },
        explanation:
          "'Critique of Pure Reason' was written by Immanuel Kant and is a fundamental text in modern philosophy.",
      },
      {
        question: "In which year did the French Revolution begin?",
        answers: {
          1789: true,
          1776: false,
          1799: false,
          1804: false,
        },
        explanation:
          "The French Revolution began in 1789, leading to the end of the monarchy and the rise of Napoleon Bonaparte.",
      },
      {
        question:
          "What was the name of the ship on which Charles Darwin sailed to the Galápagos Islands?",
        answers: {
          "HMS Beagle": true,
          "HMS Victory": false,
          "HMS Endeavour": false,
          "HMS Discovery": false,
        },
        explanation:
          "Charles Darwin sailed on the HMS Beagle during his voyage to the Galápagos Islands, where he made significant observations for his theory of evolution.",
      },
      {
        question:
          "Which empire was known for the construction of the Terracotta Army?",
        answers: {
          "Qin Dynasty": true,
          "Han Dynasty": false,
          "Ming Dynasty": false,
          "Tang Dynasty": false,
        },
        explanation:
          "The Terracotta Army was constructed during the Qin Dynasty, buried with the first Emperor of China, Qin Shi Huang.",
      },
      {
        question:
          "Who was the leader of the Soviet Union during the Cuban Missile Crisis?",
        answers: {
          "Nikita Khrushchev": true,
          "Leonid Brezhnev": false,
          "Joseph Stalin": false,
          "Mikhail Gorbachev": false,
        },
        explanation:
          "Nikita Khrushchev was the leader of the Soviet Union during the Cuban Missile Crisis in 1962.",
      },
    ],
  },
  science: {
    description: {
      name: "Science",
      icon: "fa-solid fa-flask",
      color: "#28a506",
      hoverColor: "#1d8500",
      backgroundBody: "#0c3700",
      backgroundContent: "#2B6B1A",
      leaderboard: "#3eee0e",
    },
    easy: [
      {
        question: "What is the chemical symbol for water?",
        answers: {
          H2O: true,
          CO2: false,
          O2: false,
          NaCl: false,
        },
        explanation:
          "The chemical symbol for water is H2O, representing two hydrogen atoms and one oxygen atom.",
      },
      {
        question: "What planet is known as the Red Planet?",
        answers: {
          Mars: true,
          Venus: false,
          Jupiter: false,
          Saturn: false,
        },
        explanation:
          "Mars is known as the Red Planet due to its reddish appearance caused by iron oxide on its surface.",
      },
      {
        question: "What gas do plants need to perform photosynthesis?",
        answers: {
          "Carbon Dioxide": true,
          Oxygen: false,
          Nitrogen: false,
          Hydrogen: false,
        },
        explanation:
          "Plants need carbon dioxide to perform photosynthesis, a process that converts light energy into chemical energy.",
      },
      {
        question: "What is the hardest natural substance on Earth?",
        answers: {
          Diamond: true,
          Gold: false,
          Iron: false,
          Platinum: false,
        },
        explanation:
          "Diamond is the hardest natural substance on Earth, known for its exceptional hardness and brilliance.",
      },
      {
        question:
          "Which organ in the human body is primarily responsible for pumping blood?",
        answers: {
          Heart: true,
          Liver: false,
          Lung: false,
          Kidney: false,
        },
        explanation:
          "The heart is responsible for pumping blood throughout the body, supplying oxygen and nutrients.",
      },
      {
        question: "What is the basic unit of life?",
        answers: {
          Cell: true,
          Atom: false,
          Molecule: false,
          Tissue: false,
        },
        explanation:
          "The cell is the basic unit of life, forming the structural and functional foundation of all living organisms.",
      },
      {
        question: "What is the boiling point of water at sea level in Celsius?",
        answers: {
          "100°C": true,
          "90°C": false,
          "80°C": false,
          "110°C": false,
        },
        explanation:
          "The boiling point of water at sea level is 100°C (212°F).",
      },
      {
        question: "Which planet is closest to the Sun?",
        answers: {
          Mercury: true,
          Venus: false,
          Earth: false,
          Mars: false,
        },
        explanation:
          "Mercury is the closest planet to the Sun in our solar system.",
      },
      {
        question: "What is the chemical symbol for gold?",
        answers: {
          Au: true,
          Ag: false,
          Fe: false,
          Pb: false,
        },
        explanation:
          "The chemical symbol for gold is Au, derived from the Latin word 'aurum'.",
      },
      {
        question:
          "What part of the plant absorbs water and nutrients from the soil?",
        answers: {
          Roots: true,
          Leaves: false,
          Stem: false,
          Flower: false,
        },
        explanation:
          "The roots of a plant absorb water and nutrients from the soil, essential for its growth.",
      },
    ],
    medium: [
      {
        question: "What is the most abundant gas in Earth's atmosphere?",
        answers: {
          Nitrogen: true,
          Oxygen: false,
          "Carbon Dioxide": false,
          Argon: false,
        },
        explanation:
          "Nitrogen makes up about 78% of Earth's atmosphere, making it the most abundant gas.",
      },
      {
        question: "What is the primary function of mitochondria in a cell?",
        answers: {
          "Energy Production": true,
          "Protein Synthesis": false,
          "Genetic Material Storage": false,
          Detoxification: false,
        },
        explanation:
          "Mitochondria are often called the 'powerhouses' of the cell because they produce energy through cellular respiration.",
      },
      {
        question:
          "Which planet in our solar system is known for its prominent ring system?",
        answers: {
          Saturn: true,
          Jupiter: false,
          Uranus: false,
          Neptune: false,
        },
        explanation:
          "Saturn is famous for its extensive and bright ring system, made up of ice and rock particles.",
      },
      {
        question:
          "What type of bond involves the sharing of electron pairs between atoms?",
        answers: {
          "Covalent Bond": true,
          "Ionic Bond": false,
          "Hydrogen Bond": false,
          "Metallic Bond": false,
        },
        explanation:
          "A covalent bond is formed when two atoms share one or more pairs of electrons.",
      },
      {
        question:
          "What is the name of the process by which plants convert light energy into chemical energy?",
        answers: {
          Photosynthesis: true,
          Respiration: false,
          Fermentation: false,
          Digestion: false,
        },
        explanation:
          "Photosynthesis is the process by which plants convert light energy into chemical energy stored in glucose.",
      },
      {
        question:
          "Which element is represented by the symbol 'Na' on the periodic table?",
        answers: {
          Sodium: true,
          Neon: false,
          Nitrogen: false,
          Nickel: false,
        },
        explanation:
          "The symbol 'Na' represents Sodium on the periodic table, derived from its Latin name 'Natrium'.",
      },
      {
        question:
          "What is the term for an organism that makes its own food through photosynthesis?",
        answers: {
          Producer: true,
          Consumer: false,
          Decomposer: false,
          Herbivore: false,
        },
        explanation:
          "A producer is an organism that creates its own food through photosynthesis, such as plants and algae.",
      },
      {
        question: "In what part of the cell does DNA replication occur?",
        answers: {
          Nucleus: true,
          Cytoplasm: false,
          Mitochondria: false,
          Ribosome: false,
        },
        explanation:
          "DNA replication occurs in the nucleus of eukaryotic cells, where the genetic material is stored.",
      },
      {
        question: "What is the speed of light in a vacuum approximately?",
        answers: {
          "299,792 kilometers per second": true,
          "150,000 kilometers per second": false,
          "300,000 kilometers per second": false,
          "150,000 miles per second": false,
        },
        explanation:
          "The speed of light in a vacuum is approximately 299,792 kilometers per second.",
      },
      {
        question:
          "Which organ is primarily responsible for regulating blood sugar levels?",
        answers: {
          Pancreas: true,
          Liver: false,
          Heart: false,
          Kidney: false,
        },
        explanation:
          "The pancreas regulates blood sugar levels by producing insulin and glucagon.",
      },
    ],
    hard: [
      {
        question:
          "What is the name of the process by which a cell divides to produce two identical daughter cells?",
        answers: {
          Mitosis: true,
          Meiosis: false,
          Cytokinesis: false,
          "Binary Fission": false,
        },
        explanation:
          "Mitosis is the process by which a cell divides to produce two genetically identical daughter cells.",
      },
      {
        question:
          "What is the name of the theory that explains the origin of the universe as a rapid expansion from a singular point?",
        answers: {
          "Big Bang Theory": true,
          "Steady State Theory": false,
          "String Theory": false,
          "Quantum Theory": false,
        },
        explanation:
          "The Big Bang Theory explains the origin of the universe as a rapid expansion from a singular point.",
      },
      {
        question:
          "What is the term for the process by which plants absorb water from the soil and release oxygen into the air?",
        answers: {
          Transpiration: true,
          Respiration: false,
          Photosynthesis: false,
          Digestion: false,
        },
        explanation:
          "Transpiration is the process by which plants absorb water from the soil and release oxygen into the air.",
      },
      {
        question: "Which subatomic particle has a positive charge?",
        answers: {
          Proton: true,
          Neutron: false,
          Electron: false,
          Photon: false,
        },
        explanation:
          "The proton is a subatomic particle with a positive charge, found in the nucleus of an atom.",
      },
      {
        question:
          "What is the name of the first manned mission to land on the Moon?",
        answers: {
          "Apollo 11": true,
          "Apollo 12": false,
          "Apollo 13": false,
          "Apollo 14": false,
        },
        explanation:
          "Apollo 11 was the first manned mission to land on the Moon, with astronauts Neil Armstrong and Buzz Aldrin making history in 1969.",
      },
      {
        question:
          "Which type of bond is formed when atoms share electrons unevenly, creating a partial charge?",
        answers: {
          "Polar Covalent Bond": true,
          "Nonpolar Covalent Bond": false,
          "Ionic Bond": false,
          "Metallic Bond": false,
        },
        explanation:
          "A polar covalent bond forms when atoms share electrons unevenly, creating partial charges at the ends of the molecule.",
      },
      {
        question:
          "What is the name of the process by which water vapor turns into liquid water?",
        answers: {
          Condensation: true,
          Evaporation: false,
          Sublimation: false,
          Freezing: false,
        },
        explanation:
          "Condensation is the process by which water vapor turns into liquid water, often forming clouds.",
      },
      {
        question: "What is the second most abundant element in Earth's crust?",
        answers: {
          Silicon: true,
          Aluminum: false,
          Iron: false,
          Calcium: false,
        },
        explanation:
          "Silicon is the second most abundant element in Earth's crust, after oxygen.",
      },
      {
        question:
          "What is the term for a change in an organism's genetic material that can be inherited?",
        answers: {
          Mutation: true,
          Variation: false,
          Evolution: false,
          Adaptation: false,
        },
        explanation:
          "A mutation is a change in an organism's genetic material that can be inherited by future generations.",
      },
      {
        question:
          "Which chemical element is essential for thyroid hormone production?",
        answers: {
          Iodine: true,
          Iron: false,
          Calcium: false,
          Magnesium: false,
        },
        explanation:
          "Iodine is essential for the production of thyroid hormones, which regulate metabolism.",
      },
    ],
  },
  geography: {
    description: {
      name: "Geography",
      icon: "fa-solid fa-earth-americas",
      color: "#2006a5",
      hoverColor: "#160371",
      backgroundBody: "#000229",
      backgroundContent: "#0B1184",
      leaderboard: "#1c49ed",
    },
    easy: [
      {
        question: "Which continent is the largest by land area?",
        answers: {
          Asia: true,
          Africa: false,
          Europe: false,
          "North America": false,
        },
        explanation:
          "Asia is the largest continent by land area, covering approximately 44.58 million square kilometers.",
      },
      {
        question: "What is the longest river in the world?",
        answers: {
          "Nile River": true,
          "Amazon River": false,
          "Yangtze River": false,
          "Mississippi River": false,
        },
        explanation:
          "The Nile River is considered the longest river in the world, flowing about 6,650 kilometers through northeastern Africa.",
      },
      {
        question: "Which ocean is the largest by surface area?",
        answers: {
          "Pacific Ocean": true,
          "Atlantic Ocean": false,
          "Indian Ocean": false,
          "Arctic Ocean": false,
        },
        explanation:
          "The Pacific Ocean is the largest ocean by surface area, covering more than 63 million square miles.",
      },
      {
        question: "What is the capital city of France?",
        answers: {
          Paris: true,
          London: false,
          Rome: false,
          Berlin: false,
        },
        explanation:
          "Paris is the capital city of France, known for its rich history and cultural landmarks.",
      },
      {
        question: "Which country is known as the Land of the Rising Sun?",
        answers: {
          Japan: true,
          China: false,
          "South Korea": false,
          Thailand: false,
        },
        explanation:
          "Japan is known as the Land of the Rising Sun due to its location to the east of the Asian continent.",
      },
      {
        question: "What is the largest desert in the world?",
        answers: {
          "Sahara Desert": true,
          "Gobi Desert": false,
          "Kalahari Desert": false,
          "Arctic Desert": false,
        },
        explanation:
          "The Sahara Desert is the largest hot desert in the world, covering over 9 million square kilometers in northern Africa.",
      },
      {
        question: "Which country is the largest by land area?",
        answers: {
          Russia: true,
          Canada: false,
          "United States": false,
          China: false,
        },
        explanation:
          "Russia is the largest country by land area, covering approximately 17.1 million square kilometers.",
      },
      {
        question: "What is the smallest country in the world by land area?",
        answers: {
          "Vatican City": true,
          Monaco: false,
          "San Marino": false,
          Liechtenstein: false,
        },
        explanation:
          "Vatican City is the smallest country in the world by land area, covering about 44 hectares.",
      },
      {
        question: "Which river flows through Egypt?",
        answers: {
          "Nile River": true,
          "Amazon River": false,
          "Yangtze River": false,
          "Danube River": false,
        },
        explanation:
          "The Nile River flows through Egypt and is essential to the country's agriculture and civilization.",
      },
      {
        question:
          "What is the name of the imaginary line that divides the Earth into the Northern and Southern Hemispheres?",
        answers: {
          Equator: true,
          "Prime Meridian": false,
          "Tropic of Cancer": false,
          "Tropic of Capricorn": false,
        },
        explanation:
          "The Equator is the imaginary line that divides the Earth into the Northern and Southern Hemispheres.",
      },
    ],
    medium: [
      {
        question: "Which country is known as the Land of the Midnight Sun?",
        answers: {
          Norway: true,
          Sweden: false,
          Finland: false,
          Iceland: false,
        },
        explanation:
          "Norway is known as the Land of the Midnight Sun due to its location within the Arctic Circle, where the sun does not set for extended periods in summer.",
      },
      {
        question: "What is the capital city of Australia?",
        answers: {
          Canberra: true,
          Sydney: false,
          Melbourne: false,
          Brisbane: false,
        },
        explanation:
          "Canberra is the capital city of Australia, located in the Australian Capital Territory.",
      },
      {
        question: "Which mountain range separates Europe and Asia?",
        answers: {
          "Ural Mountains": true,
          Himalayas: false,
          Andes: false,
          "Rocky Mountains": false,
        },
        explanation:
          "The Ural Mountains are the natural boundary that separates Europe from Asia.",
      },
      {
        question:
          "What is the name of the island nation located southeast of India in the Indian Ocean?",
        answers: {
          "Sri Lanka": true,
          Maldives: false,
          Mauritius: false,
          Madagascar: false,
        },
        explanation:
          "Sri Lanka is an island nation located southeast of India in the Indian Ocean.",
      },
      {
        question: "Which country has the longest coastline in the world?",
        answers: {
          Canada: true,
          Australia: false,
          Russia: false,
          "United States": false,
        },
        explanation:
          "Canada has the longest coastline in the world, stretching over 202,080 kilometers along the Pacific, Atlantic, and Arctic Oceans.",
      },
      {
        question:
          "Which desert is located in northern China and southern Mongolia?",
        answers: {
          "Gobi Desert": true,
          "Karakum Desert": false,
          "Kalahari Desert": false,
          "Atacama Desert": false,
        },
        explanation:
          "The Gobi Desert is located in northern China and southern Mongolia, known for its cold desert climate.",
      },
      {
        question: "What is the highest mountain in Africa?",
        answers: {
          "Mount Kilimanjaro": true,
          "Mount Kenya": false,
          "Mount Elgon ": false,
          "Ras Dashen": false,
        },
        explanation:
          "Mount Kilimanjaro is the highest mountain in Africa, with its peak reaching approximately 5,895 meters above sea level.",
      },
      {
        question: "Which river is the longest in South America?",
        answers: {
          "Amazon River": true,
          "Orinoco River": false,
          "Paraná River": false,
          "São Francisco River": false,
        },
        explanation:
          "The Amazon River is the longest river in South America, flowing through several countries and extending over 7,000 kilometers.",
      },
      {
        question:
          "What is the name of the sea bordered by Europe to the north and Africa to the south?",
        answers: {
          "Mediterranean Sea": true,
          "Red Sea": false,
          "Black Sea": false,
          "Aegean Sea": false,
        },
        explanation:
          "The Mediterranean Sea is bordered by Europe to the north and Africa to the south, connecting to the Atlantic Ocean.",
      },
      {
        question: "Which country is known as the Land of the Midnight Sun?",
        answers: {
          Norway: true,
          Sweden: false,
          Finland: false,
          Iceland: false,
        },
        explanation:
          "Norway is known as the Land of the Midnight Sun due to its location within the Arctic Circle, where the sun does not set for extended periods in summer.",
      },
    ],
    hard: [
      {
        question:
          "What is the name of the current geological epoch we are in, characterized by significant human impact on the Earth?",
        answers: {
          Anthropocene: true,
          Holocene: false,
          Pleistocene: false,
          Eocene: false,
        },
        explanation:
          "The Anthropocene is the proposed geological epoch characterized by significant human impact on the Earth's geology and ecosystems.",
      },
      {
        question:
          "Which mountain range extends from the Mediterranean Sea to the Black Sea and is known for its biodiversity?",
        answers: {
          "Caucasus Mountains": true,
          "Carpathian Mountains": false,
          "Atlas Mountains": false,
          Pyrenees: false,
        },
        explanation:
          "The Caucasus Mountains extend from the Mediterranean Sea to the Black Sea and are known for their rich biodiversity and cultural history.",
      },
      {
        question:
          "What is the name of the largest river delta in the world, located in Bangladesh and India?",
        answers: {
          "Sundarbans Delta": true,
          "Mekong Delta": false,
          "Amazon Delta": false,
          "Niger Delta": false,
        },
        explanation:
          "The Sundarbans Delta, formed by the confluence of the Ganges, Brahmaputra, and Meghna rivers, is the largest river delta in the world.",
      },
      {
        question:
          "Which island group in the Indian Ocean is known for its unique biodiversity and is part of the French overseas territories?",
        answers: {
          Réunion: true,
          Madagascar: false,
          Mauritius: false,
          Seychelles: false,
        },
        explanation:
          "Réunion is a French overseas territory in the Indian Ocean, known for its unique biodiversity and volcanic landscapes.",
      },
      {
        question:
          "What is the name of the high-altitude desert located in northern Chile, considered one of the driest places on Earth?",
        answers: {
          "Atacama Desert": true,
          "Gobi Desert": false,
          "Karakum Desert": false,
          "Kalahari Desert": false,
        },
        explanation:
          "The Atacama Desert in northern Chile is one of the driest places on Earth, with some areas receiving less than 1 millimeter of rain per year.",
      },
      {
        question:
          "Which river flows through the city of Istanbul, serving as the boundary between Europe and Asia?",
        answers: {
          "Bosphorus Strait": true,
          "Danube River": false,
          "Thames River": false,
          "Rhine River": false,
        },
        explanation:
          "The Bosphorus Strait flows through Istanbul and serves as the natural boundary between Europe and Asia.",
      },
      {
        question:
          "What is the name of the tectonic plate boundary where the Pacific Plate meets the North American Plate, known for its seismic activity?",
        answers: {
          "San Andreas Fault": true,
          "Mid-Atlantic Ridge": false,
          "East African Rift": false,
          "Great Rift Valley": false,
        },
        explanation:
          "The San Andreas Fault is the tectonic plate boundary where the Pacific Plate meets the North American Plate, known for its seismic activity.",
      },
      {
        question:
          "Which archipelago, located in the South Pacific Ocean, is known for its unique Polynesian culture and Easter Island statues?",
        answers: {
          "Easter Island": true,
          Hawaii: false,
          Fiji: false,
          Samoa: false,
        },
        explanation:
          "Easter Island, located in the South Pacific Ocean, is known for its unique Polynesian culture and the iconic Moai statues.",
      },
      {
        question:
          "What is the name of the large desert located in the southwestern United States, famous for its red sandstone formations?",
        answers: {
          "Mojave Desert": true,
          "Sonoran Desert": false,
          "Chihuahuan Desert": false,
          "Great Basin Desert": false,
        },
        explanation:
          "The Mojave Desert is located in the southwestern United States and is famous for its red sandstone formations, including the iconic Joshua trees.",
      },
      {
        question:
          "Which large inland body of water, located between Kazakhstan and Uzbekistan, has been shrinking significantly due to irrigation and climate change?",
        answers: {
          "Aral Sea": true,
          "Caspian Sea": false,
          "Lake Baikal": false,
          "Lake Urmia": false,
        },
        explanation:
          "The Aral Sea, located between Kazakhstan and Uzbekistan, has been shrinking significantly due to irrigation practices and climate change.",
      },
    ],
  },
  entretainment: {
    description: {
      name: "Entretainment",
      icon: "fa-solid fa-gamepad",
      color: "#a605af",
      hoverColor: "#700176",
      backgroundBody: "#580041",
      backgroundContent: "#A20679",
      leaderboard: "#e212ee",
    },
    easy: [
      {
        question:
          "Which movie features the characters Woody and Buzz Lightyear?",
        answers: {
          "Toy Story": true,
          "Finding Nemo": false,
          Shrek: false,
          Frozen: false,
        },
        explanation:
          "Toy Story is an animated film featuring the characters Woody and Buzz Lightyear, created by Pixar Animation Studios.",
      },
      {
        question:
          "What is the name of the popular TV show about a group of friends living in New York City?",
        answers: {
          Friends: true,
          "The Office": false,
          "How I Met Your Mother": false,
          Seinfeld: false,
        },
        explanation:
          "Friends is a popular TV show about a group of friends living in New York City, which aired from 1994 to 2004.",
      },
      {
        question:
          "Which superhero has a shield with a star and red, white, and blue colors?",
        answers: {
          "Captain America": true,
          "Iron Man": false,
          Thor: false,
          Hulk: false,
        },
        explanation:
          "Captain America is known for his shield, which features a star and red, white, and blue colors.",
      },
      {
        question: "What is the title of the first Harry Potter book?",
        answers: {
          "Harry Potter and the Philosopher's Stone": true,
          "Harry Potter and the Chamber of Secrets": false,
          "Harry Potter and the Prisoner of Azkaban": false,
          "Harry Potter and the Goblet of Fire": false,
        },
        explanation:
          "The first book in the Harry Potter series is titled 'Harry Potter and the Philosopher's Stone,' published in 1997.",
      },
      {
        question:
          "Which animated film features a princess named Elsa who has ice powers?",
        answers: {
          Frozen: true,
          Moana: false,
          Tangled: false,
          "The Little Mermaid": false,
        },
        explanation:
          "Frozen is an animated film featuring Princess Elsa, who has ice powers and sings the popular song 'Let It Go.'",
      },
      {
        question:
          "What is the name of the fictional continent where the Game of Thrones series is set?",
        answers: {
          Westeros: true,
          "Middle-earth": false,
          Narnia: false,
          Hogwarts: false,
        },
        explanation:
          "The fictional continent where the Game of Thrones series is set is called Westeros.",
      },
      {
        question: "Which famous singer is known as the 'Queen of Pop'?",
        answers: {
          Madonna: true,
          Beyoncé: false,
          "Lady Gaga": false,
          Adele: false,
        },
        explanation:
          "Madonna is famously known as the 'Queen of Pop' for her influence and success in the music industry.",
      },
      {
        question:
          "What is the name of the wizarding school Harry Potter attends?",
        answers: {
          Hogwarts: true,
          Beauxbatons: false,
          Durmstrang: false,
          Ilvermorny: false,
        },
        explanation:
          "Harry Potter attends Hogwarts School of Witchcraft and Wizardry in J.K. Rowling's Harry Potter series.",
      },
      {
        question:
          "Which popular video game features characters like Mario, Luigi, and Bowser?",
        answers: {
          "Super Mario": true,
          "The Legend of Zelda": false,
          Pokémon: false,
          "Donkey Kong": false,
        },
        explanation:
          "Super Mario is a popular video game series featuring characters such as Mario, Luigi, and Bowser.",
      },
      {
        question:
          "What is the name of the famous fictional British spy created by Ian Fleming?",
        answers: {
          "James Bond": true,
          "Sherlock Holmes": false,
          "Hercule Poirot": false,
          "John Wick": false,
        },
        explanation:
          "James Bond is the famous fictional British spy created by Ian Fleming, known for his espionage adventures.",
      },
    ],
    medium: [
      {
        question: "In which movie does the character Jack Sparrow appear?",
        answers: {
          "Pirates of the Caribbean": true,
          "The Lord of the Rings": false,
          "Indiana Jones": false,
          "Jurassic Park": false,
        },
        explanation:
          "Jack Sparrow is a character in the Pirates of the Caribbean film series, portrayed by Johnny Depp.",
      },
      {
        question:
          "Which actor played the role of Tony Stark in the Marvel Cinematic Universe?",
        answers: {
          "Robert Downey Jr.": true,
          "Chris Evans": false,
          "Mark Ruffalo": false,
          "Jeremy Renner": false,
        },
        explanation:
          "Robert Downey Jr. is known for playing Tony Stark (Iron Man) in the Marvel Cinematic Universe.",
      },
      {
        question:
          "What is the name of the fictional city where Batman resides?",
        answers: {
          "Gotham City": true,
          Metropolis: false,
          "Star City": false,
          "Central City": false,
        },
        explanation:
          "Batman resides in Gotham City, a fictional city in the DC Comics universe.",
      },
      {
        question:
          "Which film series features a character named Neo, who discovers he is living in a simulated reality?",
        answers: {
          "The Matrix": true,
          Inception: false,
          "Blade Runner": false,
          "Minority Report": false,
        },
        explanation:
          "Neo is a character in The Matrix film series, where he learns that he is living in a simulated reality.",
      },
      {
        question:
          "Which TV show features a character named Sheldon Cooper who is a theoretical physicist?",
        answers: {
          "The Big Bang Theory": true,
          "How I Met Your Mother": false,
          "Brooklyn Nine-Nine": false,
          "Parks and Recreation": false,
        },
        explanation:
          "Sheldon Cooper is a character in The Big Bang Theory, known for his work as a theoretical physicist.",
      },
      {
        question:
          "What is the name of the 2014 film directed by Christopher Nolan that explores the concept of black holes?",
        answers: {
          Interstellar: true,
          Inception: false,
          Dunkirk: false,
          "The Prestige": false,
        },
        explanation:
          "Interstellar, directed by Christopher Nolan, explores the concept of black holes and space travel.",
      },
      {
        question:
          "In which TV series does the character Walter White become a drug lord?",
        answers: {
          "Breaking Bad": true,
          Narcos: false,
          Ozark: false,
          "The Sopranos": false,
        },
        explanation:
          "Walter White is the main character in Breaking Bad, a series about his transformation into a drug lord.",
      },
      {
        question:
          "Which video game series features a character named Link who battles to save the kingdom of Hyrule?",
        answers: {
          "The Legend of Zelda": true,
          "Final Fantasy": false,
          "Dark Souls": false,
          "Kingdom Hearts": false,
        },
        explanation:
          "Link is the protagonist in The Legend of Zelda video game series, where he battles to save the kingdom of Hyrule.",
      },
      {
        question:
          "What is the name of the 2003 film that depicts the life of the famous painter Vincent van Gogh?",
        answers: {
          "Loving Vincent": true,
          "The Agony and the Ecstasy": false,
          Frida: false,
          Pollock: false,
        },
        explanation:
          "Loving Vincent is a 2003 film that depicts the life and works of the painter Vincent van Gogh.",
      },
      {
        question:
          "Which movie series is known for the famous line 'May the Force be with you'?",
        answers: {
          "Star Wars": true,
          "Star Trek": false,
          "Battlestar Galactica": false,
          "The Hitchhiker's Guide to the Galaxy": false,
        },
        explanation:
          "The line 'May the Force be with you' is famous from the Star Wars movie series.",
      },
    ],
    hard: [
      {
        question:
          "Which film director is known for the 'Cornetto Trilogy' that includes 'Shaun of the Dead', 'Hot Fuzz', and 'The World's End'?",
        answers: {
          "Edgar Wright": true,
          "Quentin Tarantino": false,
          "Martin Scorsese": false,
          "Wes Anderson": false,
        },
        explanation:
          "Edgar Wright directed the 'Cornetto Trilogy', consisting of 'Shaun of the Dead', 'Hot Fuzz', and 'The World's End'.",
      },
      {
        question:
          "In which 1979 film did the character Ripley, played by Sigourney Weaver, first appear?",
        answers: {
          Alien: true,
          "Blade Runner": false,
          "The Terminator": false,
          "The Thing": false,
        },
        explanation:
          "Ripley, played by Sigourney Weaver, first appeared in the 1979 film 'Alien'.",
      },
      {
        question:
          "Which author wrote the 1962 novel 'One Flew Over the Cuckoo's Nest'?",
        answers: {
          "Ken Kesey": true,
          "Joseph Heller": false,
          "Kurt Vonnegut": false,
          "John Steinbeck": false,
        },
        explanation:
          "Ken Kesey is the author of the novel 'One Flew Over the Cuckoo's Nest', published in 1962.",
      },
      {
        question:
          "Which film won the Academy Award for Best Picture in 1994 and is known for the quote 'Life is like a box of chocolates'?",
        answers: {
          "Forrest Gump": true,
          "Pulp Fiction": false,
          "The Shawshank Redemption": false,
          "The Silence of the Lambs": false,
        },
        explanation:
          "Forrest Gump won the Academy Award for Best Picture in 1994 and is known for the famous quote 'Life is like a box of chocolates'.",
      },
      {
        question:
          "What is the name of the 2010 film directed by Darren Aronofsky that stars Natalie Portman as a troubled ballet dancer?",
        answers: {
          "Black Swan": true,
          "Requiem for a Dream": false,
          "The Wrestler": false,
          Pi: false,
        },
        explanation:
          "Natalie Portman stars as a troubled ballet dancer in the 2010 film 'Black Swan', directed by Darren Aronofsky.",
      },
      {
        question:
          "Which 1985 film by Robert Zemeckis involves time travel using a DeLorean car?",
        answers: {
          "Back to the Future": true,
          "The Goonies": false,
          "E.T. the Extra-Terrestrial": false,
          Ghostbusters: false,
        },
        explanation:
          "The 1985 film 'Back to the Future', directed by Robert Zemeckis, involves time travel using a DeLorean car.",
      },
      {
        question:
          "Who won the Nobel Prize in Literature in 2006, known for works such as 'The Road'?",
        answers: {
          "Cormac McCarthy": true,
          "J.M. Coetzee": false,
          "Orhan Pamuk": false,
          "Gabriel García Márquez": false,
        },
        explanation:
          "Cormac McCarthy won the Nobel Prize in Literature in 2006, known for his novel 'The Road'.",
      },
      {
        question:
          "Which 2011 film directed by Michel Hazanavicius is a black-and-white silent film about a silent movie star?",
        answers: {
          "The Artist": true,
          Hugo: false,
          "The Help": false,
          "Midnight in Paris": false,
        },
        explanation:
          "The Artist, directed by Michel Hazanavicius, is a black-and-white silent film about a silent movie star.",
      },
      {
        question:
          "What is the name of the TV series created by David Lynch that premiered in 1990 and is known for its surreal mystery and quirky characters?",
        answers: {
          "Twin Peaks": true,
          "The X-Files": false,
          Lost: false,
          "True Detective": false,
        },
        explanation:
          "Twin Peaks, created by David Lynch, premiered in 1990 and is known for its surreal mystery and quirky characters.",
      },
      {
        question:
          "Which 2004 film by Michael Moore critiques the American healthcare system and gun culture?",
        answers: {
          "Fahrenheit 9/11": false,
          "Bowling for Columbine": true,
          Sicko: false,
          "The Big Short": false,
        },
        explanation:
          "Bowling for Columbine, directed by Michael Moore in 2004, critiques the American gun culture and healthcare system.",
      },
    ],
  },
  culture: {
    description: {
      name: "Culture",
      icon: "fa-solid fa-paintbrush",
      color: "#d3080b",
      hoverColor: "#9a0508",
      backgroundBody: "#4D0102",
      backgroundContent: "#961315",
      leaderboard: "#e90c10",
    },
    easy: [
      {
        question: "What is the capital city of France?",
        answers: {
          Paris: true,
          London: false,
          Berlin: false,
          Madrid: false,
        },
        explanation:
          "Paris is the capital city of France, known for its landmarks such as the Eiffel Tower and the Louvre Museum.",
      },
      {
        question: "Who wrote the play 'Romeo and Juliet'?",
        answers: {
          "William Shakespeare": true,
          "Charles Dickens": false,
          "Jane Austen": false,
          "Mark Twain": false,
        },
        explanation:
          "William Shakespeare is the author of the play 'Romeo and Juliet', a classic of English literature.",
      },
      {
        question: "Which country is famous for sushi?",
        answers: {
          Japan: true,
          China: false,
          Thailand: false,
          Korea: false,
        },
        explanation:
          "Sushi is a traditional dish from Japan, known for its rice and fish combination.",
      },
      {
        question: "What is the name of the famous clock tower in London?",
        answers: {
          "Big Ben": true,
          "Eiffel Tower": false,
          Colosseum: false,
          "Leaning Tower of Pisa": false,
        },
        explanation:
          "Big Ben is the nickname for the Great Bell of the clock at the north end of the Palace of Westminster in London.",
      },
      {
        question: "Which artist painted the 'Mona Lisa'?",
        answers: {
          "Leonardo da Vinci": true,
          "Vincent van Gogh": false,
          "Pablo Picasso": false,
          "Claude Monet": false,
        },
        explanation:
          "Leonardo da Vinci painted the 'Mona Lisa', one of the most famous paintings in the world.",
      },
      {
        question: "In which continent is the Sahara Desert located?",
        answers: {
          Africa: true,
          Asia: false,
          "South America": false,
          Australia: false,
        },
        explanation:
          "The Sahara Desert is located in Africa and is the largest hot desert in the world.",
      },
      {
        question: "What language is primarily spoken in Brazil?",
        answers: {
          Portuguese: true,
          Spanish: false,
          French: false,
          English: false,
        },
        explanation: "Portuguese is the official language of Brazil.",
      },
      {
        question: "Which holiday is celebrated on December 25th?",
        answers: {
          Christmas: true,
          Easter: false,
          Thanksgiving: false,
          Halloween: false,
        },
        explanation:
          "Christmas is celebrated on December 25th, commemorating the birth of Jesus Christ.",
      },
      {
        question: "What is the national flower of Japan?",
        answers: {
          "Cherry Blossom": true,
          Rose: false,
          Tulip: false,
          Sunflower: false,
        },
        explanation:
          "The Cherry Blossom is the national flower of Japan and is celebrated annually during the Hanami festival.",
      },
      {
        question: "What is the name of the famous Egyptian river?",
        answers: {
          Nile: true,
          Amazon: false,
          Mississippi: false,
          Yangtze: false,
        },
        explanation:
          "The Nile River is the longest river in Egypt and one of the longest in the world.",
      },
    ],
    medium: [
      {
        question: "Which Italian city is famous for its canals and gondolas?",
        answers: {
          Venice: true,
          Rome: false,
          Milan: false,
          Florence: false,
        },
        explanation:
          "Venice is renowned for its canals and gondolas, making it a unique city in Italy.",
      },
      {
        question: "Who was the first woman to win a Nobel Prize?",
        answers: {
          "Marie Curie": true,
          "Rosalind Franklin": false,
          "Ada Lovelace": false,
          "Barbara McClintock": false,
        },
        explanation:
          "Marie Curie was the first woman to win a Nobel Prize, awarded for her work in physics and chemistry.",
      },
      {
        question:
          "What is the name of the ancient Greek philosopher who taught Alexander the Great?",
        answers: {
          Aristotle: true,
          Socrates: false,
          Plato: false,
          Pythagoras: false,
        },
        explanation:
          "Aristotle was the ancient Greek philosopher who tutored Alexander the Great.",
      },
      {
        question:
          "Which famous American landmark was dedicated on October 28, 1886?",
        answers: {
          "Statue of Liberty": true,
          "Mount Rushmore": false,
          "Golden Gate Bridge": false,
          "Empire State Building": false,
        },
        explanation:
          "The Statue of Liberty was dedicated on October 28, 1886, and is a symbol of freedom and democracy.",
      },
      {
        question: "What is the largest island in the Mediterranean Sea?",
        answers: {
          Sicily: true,
          Corsica: false,
          Crete: false,
          Cyprus: false,
        },
        explanation: "Sicily is the largest island in the Mediterranean Sea.",
      },
      {
        question:
          "Which famous novel by George Orwell is set in a dystopian future?",
        answers: {
          1984: true,
          "Brave New World": false,
          "Fahrenheit 451": false,
          "The Handmaid's Tale": false,
        },
        explanation:
          "George Orwell's novel '1984' is set in a dystopian future and explores themes of totalitarianism and surveillance.",
      },
      {
        question:
          "What is the name of the famous pyramid structure located in the center of Mexico City?",
        answers: {
          Teotihuacan: true,
          "Chichen Itza": false,
          Palenque: false,
          Uxmal: false,
        },
        explanation:
          "The Teotihuacan pyramids, including the Pyramid of the Sun and the Pyramid of the Moon, are located near Mexico City.",
      },
      {
        question: "Which Russian composer wrote the ballet 'Swan Lake'?",
        answers: {
          "Pyotr Ilyich Tchaikovsky": true,
          "Igor Stravinsky": false,
          "Sergei Prokofiev": false,
          "Dmitri Shostakovich": false,
        },
        explanation:
          "Pyotr Ilyich Tchaikovsky composed the ballet 'Swan Lake', one of his most famous works.",
      },
      {
        question:
          "In which country would you find the historical region of Transylvania?",
        answers: {
          Romania: true,
          Hungary: false,
          Bulgaria: false,
          Serbia: false,
        },
        explanation:
          "Transylvania is a historical region located in Romania, known for its castles and folklore.",
      },
      {
        question: "Which famous scientist developed the theory of relativity?",
        answers: {
          "Albert Einstein": true,
          "Isaac Newton": false,
          "Galileo Galilei": false,
          "Niels Bohr": false,
        },
        explanation:
          "Albert Einstein developed the theory of relativity, which revolutionized our understanding of space and time.",
      },
    ],
    hard: [
      {
        question:
          "Which Spanish painter is known for his surrealist works, including 'The Persistence of Memory'?",
        answers: {
          "Salvador Dalí": true,
          "Pablo Picasso": false,
          "Francisco Goya": false,
          "Joan Miró": false,
        },
        explanation:
          "Salvador Dalí is famous for his surrealist paintings, including the iconic 'The Persistence of Memory'.",
      },
      {
        question:
          "Which ancient civilization is credited with the creation of the first known form of writing called cuneiform?",
        answers: {
          Sumerians: true,
          Babylonians: false,
          Assyrians: false,
          Hittites: false,
        },
        explanation:
          "The Sumerians are credited with developing cuneiform writing, one of the earliest known writing systems.",
      },
      {
        question:
          "What is the name of the artistic and cultural movement that began in the 1920s and is associated with writers like James Joyce and Virginia Woolf?",
        answers: {
          Modernism: true,
          Romanticism: false,
          Realism: false,
          Postmodernism: false,
        },
        explanation:
          "Modernism was a cultural movement that began in the early 20th century, with key figures including James Joyce and Virginia Woolf.",
      },
      {
        question:
          "Which Greek historian is known for his work 'Histories', considered one of the first works of history in Western literature?",
        answers: {
          Herodotus: true,
          Thucydides: false,
          Plutarch: false,
          Xenophon: false,
        },
        explanation:
          "Herodotus is known for his work 'Histories', which is one of the earliest examples of historical writing in Western literature.",
      },
      {
        question:
          "Which French philosopher wrote 'The Second Sex', a foundational text in feminist philosophy?",
        answers: {
          "Simone de Beauvoir": true,
          "Jean-Paul Sartre": false,
          "Michel Foucault": false,
          "Albert Camus": false,
        },
        explanation:
          "Simone de Beauvoir wrote 'The Second Sex', a seminal work in feminist philosophy.",
      },
      {
        question:
          "In which year did the fall of Constantinople occur, marking the end of the Byzantine Empire?",
        answers: {
          1453: true,
          1492: false,
          1066: false,
          1215: false,
        },
        explanation:
          "The fall of Constantinople occurred in 1453, leading to the end of the Byzantine Empire.",
      },
      {
        question:
          "What was the primary focus of the artistic movement known as the Bauhaus, founded in 1919?",
        answers: {
          "Design and architecture": true,
          "Literature and poetry": false,
          "Music and theater": false,
          "Philosophy and politics": false,
        },
        explanation:
          "The Bauhaus movement focused on design and architecture, emphasizing functional and aesthetic integration.",
      },
      {
        question:
          "Which Russian writer is known for his novel 'The Brothers Karamazov', a significant work in world literature?",
        answers: {
          "Fyodor Dostoevsky": true,
          "Leo Tolstoy": false,
          "Anton Chekhov": false,
          "Ivan Turgenev": false,
        },
        explanation:
          "Fyodor Dostoevsky wrote 'The Brothers Karamazov', a major novel in world literature.",
      },
      {
        question:
          "Which ancient wonder was located in the city of Babylon and was one of the Seven Wonders of the Ancient World?",
        answers: {
          "Hanging Gardens": true,
          "Great Pyramid of Giza": false,
          "Colossus of Rhodes": false,
          "Statue of Zeus": false,
        },
        explanation:
          "The Hanging Gardens of Babylon were one of the Seven Wonders of the Ancient World, known for their impressive design and beauty.",
      },
      {
        question:
          "Which 20th-century poet wrote 'The Waste Land', a landmark poem in modernist literature?",
        answers: {
          "T.S. Eliot": true,
          "W.H. Auden": false,
          "William Carlos Williams": false,
          "Ezra Pound": false,
        },
        explanation:
          "T.S. Eliot wrote 'The Waste Land', a key work in modernist poetry.",
      },
    ],
  },
};

export const difficultySettings = {
  easy: {
    name: "Easy",
    backgroundBtn: "#01b66e",
    backgroundBtnHover: "#068653",
    quizDifficultyTextColor: "#01B66E",
    basePoints: 10,
  },
  medium: {
    name: "Medium",
    backgroundBtn: "#ba8b00",
    backgroundBtnHover: "#836303",
    quizDifficultyTextColor: "#BA8B00",
    basePoints: 15,
  },
  hard: {
    name: "Hard",
    backgroundBtn: "#d91b1e",
    backgroundBtnHover: "#a40003",
    quizDifficultyTextColor: "#FD0105",
    basePoints: 20,
  },
};
