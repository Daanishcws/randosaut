// Collection of possible website titles
const siteTitles = [
    "Whispers of Imagination",
    "Tales Untold",
    "The Random Chronicles",
    "Narrative Roulette",
    "Story Spinner",
    "The Fable Factory",
    "Moment of Wonder",
    "Serendipity Pages",
    "Unexpected Tales",
    "The Story Vault",
    "Narrative Nexus",
    "Wonder Words",
    "Fable Fusion",
    "The Tale Tapestry",
    "Random Reflections",
    "Memory Mosaic",
    "Story Spectrum",
    "Imagination Station",
    "The Narrative Loom",
    "Kaleidoscope Stories"
];

// Collection of background colors (vibrant but not too harsh)
const backgroundColors = [
    "#3498db", // Blue
    "#e74c3c", // Red
    "#2ecc71", // Green
    "#f39c12", // Orange
    "#9b59b6", // Purple
    "#1abc9c", // Turquoise
    "#d35400", // Pumpkin
    "#16a085", // Green Sea
    "#8e44ad", // Wisteria
    "#2980b9", // Belize Hole
    "#c0392b", // Pomegranate
    "#27ae60", // Nephritis
    "#f1c40f", // Sunflower
    "#7f8c8d", // Asbestos
    "#34495e", // Wet Asphalt
    "#e67e22"  // Carrot
];

// Collection of background colors for the welcome box
const welcomeBoxColors = [
    { bg: "#e3f2fd", border: "#2196f3" }, // Blue
    { bg: "#ffebee", border: "#f44336" }, // Red
    { bg: "#e8f5e9", border: "#4caf50" }, // Green
    { bg: "#fff3e0", border: "#ff9800" }, // Orange
    { bg: "#f3e5f5", border: "#9c27b0" }, // Purple
    { bg: "#e0f2f1", border: "#009688" }, // Teal
    { bg: "#fbe9e7", border: "#ff5722" }, // Deep Orange
    { bg: "#efebe9", border: "#795548" }, // Brown
    { bg: "#e8eaf6", border: "#3f51b5" }  // Indigo
];

// Collection of short stories with their titles
const stories = [
    {
        title: "New Horizons: Alex's Overseas Adventure",
        content: `<p>Alex stared at his laptop screen, still unable to believe the email he'd just received. A gaming studio in Tokyo had accepted his application for a game design internship. In just three weeks, he'd be living in Japan—a dream he'd had since he was twelve.</p>
        <p>The reality of his new life hit him the moment he unlocked the door to his shared apartment in Shinjuku. His roommate, Kenji, a local game developer who worked at the same studio, greeted him with enthusiasm and a fridge full of strange but fascinating foods.</p>
        <p>"Settling in might be tough at first," Kenji warned on that first night as they sat on the small balcony overlooking the neon-lit streets below. "But the good days make the hard ones worth it."</p>
        <p>The first month proved Kenji right. Alex struggled with the language barrier, getting lost on the subway, and working in a creative environment where cultural references often flew over his head. His game concepts, which had seemed so innovative back home, were met with polite but confused looks from his Japanese colleagues.</p>
        <p>But there were unexpected joys too. Kenji introduced him to a local gaming café where they spent weekend evenings competing in fighting game tournaments. Alex discovered his love for ramen at a tiny shop hidden in an alley near their apartment, where the chef eventually recognized him and would start preparing his usual order the moment he walked in.</p>
        <p>Their apartment became a sanctuary. After long workdays, Alex and Kenji would play through indie game collections, offering each other critiques and suggestions that improved both their professional work. Late-night gaming sessions often turned into impromptu design meetings, with ideas scribbled on napkins that would later make their way into pitches at the studio.</p>
        <p>"You've changed the way I approach level design," Kenji told him one night, six months into Alex's stay. It was the professional compliment Alex had been waiting for, validation that his perspective had value in this new environment.</p>
        <p>When Alex's birthday arrived, Kenji took him to an upscale sushi restaurant where they splurged on otoro tuna and sake. The meal cost nearly a week's worth of grocery money, but as Alex savored each perfectly crafted bite, he realized these were the moments he'd remember—the highs that made the homesickness and confusion worthwhile.</p>
        <p>Not everything was perfect. Sometimes Kenji's late-night gaming sessions kept Alex awake when he needed sleep. Occasionally they disagreed over household chores or kitchen space. But they developed a rhythm to their shared life, a comfortable routine built on mutual respect and a shared passion for games.</p>
        <p>A year later, when Alex was offered a permanent position at the studio, he looked around at the life he'd built: a small but comfortable apartment filled with gaming memorabilia, a refrigerator stocked with foods he now craved rather than feared, and a friendship that had shaped both his professional skills and his worldview.</p>
        <p>"I'll need to find my own place eventually," he told Kenji as they celebrated with convenience store champagne and high-end takeout.</p>
        <p>"Eventually," Kenji agreed. "But not right away."</p>
        <p>As they returned to their controllers and loaded up the indie game they'd been playtesting, Alex realized that home wasn't just a place—it was the combination of good food, good games, and people who understood both your strengths and struggles.</p>`
    },
    {
        title: "Finding Her Fight: Mei's Martial Arts Journey",
        content: `<p>Mei Li closed the door to her apartment, dropped her gym bag on the floor, and flopped onto her couch with a groan. Her two cats—Ghost, a sleek white Siamese, and Shadow, a plump black domestic shorthair—immediately converged on her, purring and demanding attention despite her exhaustion.</p>
        <p>"Some support system you are," she murmured affectionately, scratching Ghost behind the ears. "I just got my butt kicked for two hours straight, and all you care about is dinner."</p>
        <p>For the past three months, Mei had been sampling different martial arts disciplines, searching for one that resonated with her on a deeper level. Today's Brazilian Jiu-Jitsu class had left her with sore muscles and a bruised ego. Last week's Muay Thai session had been similarly humbling. Before that, she'd tried traditional Karate, Wing Chun, and even a Krav Maga workshop.</p>
        <p>Her passion for martial arts had been ignited during college, where she'd taken a women's self-defense course that awakened something within her—a combination of discipline, physical challenge, and philosophical depth that spoke to her analytical mind. Since then, she'd been searching for her martial arts home, a practice she could commit to for the long term.</p>
        <p>Mei's journey wasn't making her professional life any easier. As a junior architect at a competitive firm, she was constantly fighting to prove herself worthy of more significant projects. Her boss had recently commented on the bruise on her forearm during a client presentation, raising an eyebrow that suggested perhaps she should focus more on blueprints than fighting techniques.</p>
        <p>Shadow jumped onto her lap, kneading her sore thighs and purring loudly. "At least someone appreciates my sacrifices," Mei said, wincing as the cat's paws pressed into a particularly tender spot.</p>
        <p>The next morning, Mei awoke to an email notification about a newly opened Wushu academy just ten minutes from her apartment. The website showed flowing movements that combined hard and soft elements, strength and grace. Something about it called to her, despite her growing collection of disappointments.</p>
        <p>"One more try," she promised the cats as she prepared their breakfast. "If this doesn't click, maybe I'll take up knitting instead."</p>
        <p>The Wushu academy was smaller than she expected, tucked between a bookstore and a café. The sifu, Master Chen, was a woman in her sixties who moved with the fluid precision of someone half her age. Mei watched from the doorway as Master Chen led a small class through a sword form, their movements creating invisible patterns in the air.</p>
        <p>"Are you joining us or just watching?" Master Chen asked without breaking her flow or looking directly at Mei.</p>
        <p>Something about the woman's calm confidence drew Mei into the room. By the end of the session, her arms ached from holding unfamiliar positions, but her mind felt clear for the first time in months.</p>
        <p>"You have good foundation," Master Chen told her afterward. "Strong but too rigid. You think too much."</p>
        <p>Mei laughed. "My boss says the same thing."</p>
        <p>"Bring him here. I'll teach him too," Master Chen replied with a wink.</p>
        <p>In the weeks that followed, Mei adjusted her work schedule to accommodate regular Wushu training. She set up a small practice area in her living room, much to the delight of her cats, who treated her flowing movements as an elaborate game designed for their entertainment.</p>
        <p>Six months later, Mei completed her first public demonstration alongside other students from the academy. Her parents attended, her father filming everything while her mother alternated between proud smiles and worried gasps. After the demonstration, her boss approached her with unexpected approval.</p>
        <p>"Now I understand why you've been so focused lately," he said. "The precision you've developed—it shows in your latest designs."</p>
        <p>That night, as Mei performed her evening routine of gentle stretches while Ghost and Shadow weaved between her legs, she realized that finding her martial art hadn't been about discovering a perfect discipline. It had been about finding the practice that helped her integrate all parts of herself—the architect's precision, the cat lover's patience, and the warrior's spirit that had always been within her, waiting for the right moment to emerge.</p>`
    },
    {
        title: "Controlled Chaos: Lily's Clean Freak Chronicles",
        content: `<p>Lily Chen stood in the doorway of her apartment, keys still in hand, frozen in horror at the scene before her. What had been an immaculately clean living room just hours ago now resembled the aftermath of a small tornado. Chip bags and soda cans littered her coffee table, someone's jacket was thrown over her carefully arranged decorative pillows, and was that—yes, that was definitely a pizza grease stain on her white area rug.</p>
        <p>"Sorry about the mess!" called Jamie from the kitchen, where the sound of clattering dishes suggested even more chaos out of sight. "Game night got a little competitive."</p>
        <p>Lily took a deep breath, counting to ten as her therapist had suggested for moments exactly like this. Game night. Right. She'd agreed to host her friends' weekly gathering, forgetting that her definition of "having a few people over" differed dramatically from her friends' understanding of the same concept.</p>
        <p>"We saved you some pizza," said Morgan, emerging from the bathroom with wet hands that she was currently drying on her jeans rather than the carefully selected hand towels that Lily had placed there specifically for guests. "And we're about to start another round of Mario Kart if you want in."</p>
        <p>Lily loved her friends. She really did. But as someone who color-coded her closet and alphabetized her spice rack, their casual approach to her living space triggered her anxiety like nothing else.</p>
        <p>"Give me five minutes to change," she managed, stepping carefully around a small puddle of what she hoped was just spilled soda.</p>
        <p>In her bedroom—the one space still untouched by the friendly invasion—Lily changed into comfortable clothes while mentally calculating how long it would take to restore order once everyone left. Three hours, minimum. Four if the kitchen was as bad as she suspected.</p>
        <p>When she returned to the living room, her friends had cleared just enough space on the couch for her to squeeze in. A controller was thrust into her hands despite her protests.</p>
        <p>"You know I'm terrible at this," she reminded them, selecting Princess Peach out of habit.</p>
        <p>"That's what makes it fun," teased Chris, who had somehow managed to prop his feet on her coffee table without anyone stopping him. "You get so flustered when you're losing."</p>
        <p>Three races later, Lily found herself in last place as usual, having driven off Rainbow Road more times than she'd actually completed a lap. Her friends' good-natured teasing only highlighted her gaming inadequacies. For someone with her meticulous attention to detail, her inability to master video games was particularly frustrating.</p>
        <p>"I don't understand," she complained after another spectacular failure. "I practice. I watch tutorials. Why am I still so bad at this?"</p>
        <p>"Because you overthink it," Jamie said, reaching for another slice of pizza. "You're trying to plan the perfect race, but sometimes you just have to go with the flow."</p>
        <p>Going with the flow had never been Lily's strong suit. Her apartment, her job as a website designer, even her workout routine—everything in her life was structured and organized. Everything except game night.</p>
        <p>As the evening wore on and her friends showed no signs of leaving, Lily surprised herself by gradually relaxing. When Morgan spilled soda on the couch, Lily found herself laughing instead of panicking. When a heated debate about the best strategy for Settlers of Catan led to game pieces being scattered across the floor, she simply joined in the argument rather than immediately gathering the stray pieces.</p>
        <p>By the time her front door finally closed behind the last departing friend at nearly 1 AM, Lily stood amid the wreckage of her normally pristine apartment with an unexpected sense of calm. Yes, there were dirty dishes in her sink. Yes, her living room looked like a small bomb had detonated. And yes, she had finished dead last in every game they'd played.</p>
        <p>But as she began the familiar routine of cleaning and restoring order, she found herself smiling at the evidence of an evening well spent. Her friends kept coming back despite her competitive failures and cleanliness neuroses. They invaded her space and disrupted her order, but they also brought something she couldn't organize or control—genuine connection.</p>
        <p>Two hours later, with her apartment restored to its usual immaculate condition, Lily crawled into bed and set her alarm for her Saturday morning cleaning routine. Just before drifting off to sleep, she made a note in her meticulously maintained planner: "Host game night next month?"</p>
        <p>Maybe some messes were worth making after all.</p>`
    },
    {
        title: "Midnight Gamer: Zoe's Late Night Adventures",
        content: `<p>The soft glow of Zoe's monitor illuminated her face as her fingers danced across the keyboard. A quick glance at the corner of her screen confirmed it was well past midnight, but the raid wasn't going to complete itself. Her guild was counting on her, and she wasn't about to let them down just because it was a school night.</p>
        <p>A sudden weight landed on her desk, followed by the unmistakable sound of items being knocked to the floor. "Pixel! Not now," Zoe hissed, gently moving her tortoiseshell cat away from the keyboard. Pixel responded by flopping directly in front of the monitor, her tail swishing dangerously close to Zoe's mouse.</p>
        <p>"Move, you little monster," Zoe whispered affectionately, relocating the cat to her lap where she could do less damage. Through her headphones, she could hear her teammates laughing.</p>
        <p>"Cat attack again?" asked her friend Darius, his voice clear through the voice chat.</p>
        <p>"As always," Zoe confirmed, returning her attention to the game. "She thinks my monitor is her personal sunset to block."</p>
        <p>A soft knock on her bedroom door made Zoe freeze. She quickly muted her microphone as her mother poked her head into the room, squinting against the monitor's glow in the otherwise dark space.</p>
        <p>"It's almost one in the morning, Zoe," her mother said, the familiar note of disappointment evident in her voice. "We talked about this. School nights, lights out by eleven."</p>
        <p>"I know, Mom, but this is an important raid. I can't just bail on my team," Zoe explained, knowing her mother wouldn't understand the social obligation she felt to her online friends.</p>
        <p>"Important enough to be exhausted for your chemistry test tomorrow?" her mother countered.</p>
        <p>Pixel, sensing the tension, jumped from Zoe's lap and rubbed against her mother's legs, the ultimate betrayal.</p>
        <p>"Twenty more minutes, I promise," Zoe negotiated. "We're almost done."</p>
        <p>Her mother sighed, that particular sigh that Zoe had categorized as "I disapprove but am too tired to argue." "Twenty minutes, then bed. I mean it this time."</p>
        <p>As the door closed, Zoe unmuted her microphone. "Sorry, guys. Parental interruption. We need to finish this fast."</p>
        <p>They completed the raid in eighteen minutes, a new record for their guild. Zoe logged off with a sense of accomplishment, even as exhaustion began to creep in. Tomorrow—or rather, today—would be rough, but the triumph of their digital victory made it worthwhile.</p>
        <p>True to her word, Zoe shut down her computer and crawled into bed, where Pixel was already sprawled across her pillow. As she gently moved the cat aside to make room for her head, her phone lit up with a text from her dad, who was away on a business trip: "Heard you crushed that raid tonight. Don't tell your mom I said this, but nicely done. Sleep well, kiddo."</p>
        <p>Zoe smiled in the darkness. Her father, a former gamer himself, understood her digital life in ways her mother never would. He'd been the one to introduce her to gaming, though he claimed she'd long surpassed his skills. Their shared interest had become especially important since he'd started traveling more for work, giving them something to discuss during their brief phone calls that felt meaningful to both of them.</p>
        <p>The next morning arrived too quickly. Zoe dragged herself through her chemistry test with the aid of an extra-large coffee smuggled into class, then nearly fell asleep during history. By lunchtime, she was regretting her late night, especially when her friend Tara pointed out the dark circles under her eyes.</p>
        <p>"Worth it though, right?" Tara asked, familiar with Zoe's gaming schedule.</p>
        <p>"Always," Zoe confirmed, stifling a yawn.</p>
        <p>That evening, Zoe returned home to find a small package on her bed with a note in her mother's handwriting: "If you're going to ignore my rules anyway, at least use these so I don't have to worry about you straining your eyes." Inside was a pair of blue-light blocking glasses.</p>
        <p>It wasn't exactly permission to keep gaming late, but it was an acknowledgment of reality—and from her mother, that was almost the same thing.</p>
        <p>As Zoe settled in for another evening of gaming, Pixel once again claiming territory on her desk, she reflected on the balancing act of her life: school and gaming, parents and friends, real world and digital adventures. She might not always get it right, but with a supportive guild online, understanding friends offline, a cat who loved her despite regularly sabotaging her gaming setup, and parents who were trying their best to understand her world, she was figuring it out one level at a time.</p>`
    }
];

// Time-based greetings
const timeGreetings = {
    morning: "Good morning",
    afternoon: "Good afternoon",
    evening: "Good evening",
    night: "Hello night owl"
};

// Weather descriptions (we'll simulate these)
const weatherTypes = [
    "sunny and clear",
    "partly cloudy",
    "overcast",
    "rainy",
    "stormy",
    "snowy",
    "foggy",
    "windy",
    "hot and humid",
    "cold and crisp"
];

const temperatures = {
    celsius: {
        cold: "0°C",
        cool: "10°C",
        mild: "18°C",
        warm: "25°C",
        hot: "32°C"
    },
    fahrenheit: {
        cold: "32°F",
        cool: "50°F",
        mild: "64°F",
        warm: "77°F",
        hot: "90°F"
    }
};

// Device types for display
const deviceTypes = {
    desktop: [
        "desktop computer",
        "laptop",
        "workstation",
        "home computer"
    ],
    mobile: [
        "smartphone",
        "mobile device",
        "iPhone",
        "Android phone"
    ],
    tablet: [
        "tablet",
        "iPad",
        "Android tablet"
    ]
};

// Cities (for simulation)
const cities = [
    "New York", "London", "Tokyo", "Paris", "Sydney", 
    "Berlin", "Toronto", "Singapore", "Mumbai", "Cape Town",
    "Los Angeles", "Chicago", "Mexico City", "Rio de Janeiro", "Dubai",
    "Bangkok", "Amsterdam", "Seoul", "Istanbul", "Cairo",
    "San Francisco", "Vancouver", "Madrid", "Rome", "Stockholm",
    "Moscow", "Beijing", "Dublin", "Vienna", "Prague"
];
