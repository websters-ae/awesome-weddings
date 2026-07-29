export interface WhyChooseItem {
  title: string;
  body: string;
}

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface ServiceDecor {
  eyebrow?: string;
  heading: string;
  intro: string;
  listHeading: string;
  items: string[];
  outro?: string;
  ctaLabel?: string;
  image?: string;
  imageAlt?: string;
}

export interface ServiceDetail {
  introHeading?: string;
  intro: string[];
  idealFor?: string[];
  whyChooseTitle: string;
  whyChoose: WhyChooseItem[];
  decor?: ServiceDecor;
  faqs: ServiceFaq[];
}

const commonWhyChoose = (kind: string, kindLower: string): WhyChooseItem[] => [
  {
    title: "Experienced Wedding Planning Team",
    body: `With years of experience curating luxury celebrations across the UAE, our specialists design and deliver ${kindLower} with precision, artistry, and total peace of mind for every couple.`,
  },
  {
    title: `Customised ${kind} Concepts`,
    body: `Every wedding is uniquely designed around your preferred theme, traditions, guest count, décor style, and personal vision — so your ${kindLower} feels unmistakably yours.`,
  },
  {
    title: `Handpicked ${kind} Venues`,
    body: `We help couples select the perfect venue for a ${kindLower}, from exclusive private locations to iconic UAE landmarks, ensuring the setting matches the mood you dreamed of.`,
  },
  {
    title: "Complete Wedding Management",
    body: "From venue booking and styling to logistics, entertainment, catering, and on-the-day coordination, our team manages every detail so you can be fully present with the people you love.",
  },
];

const commonFaqs = (kind: string, kindLower: string): ServiceFaq[] => [
  {
    q: `How much does a ${kindLower} in the UAE cost?`,
    a: `${kind} pricing depends on the venue, guest count, décor, catering, and entertainment. We build a customised plan around your budget and share transparent estimates once we understand your vision.`,
  },
  {
    q: "How far in advance should we book?",
    a: "We recommend reaching out at least 3–6 months in advance to secure preferred venues and vendors, though we regularly plan beautiful weddings on shorter timelines as well.",
  },
  {
    q: "Do you handle décor, styling, and vendors?",
    a: "Yes — from floral design and stage setups to lighting, entertainment, photography, and catering, our team coordinates every trusted vendor under one seamless plan.",
  },
  {
    q: "Can you plan for international guests?",
    a: "Absolutely. We assist with travel logistics, accommodation blocks, welcome experiences, and destination-style itineraries for guests flying in from around the world.",
  },
  {
    q: "Do you offer full-service planning as well as partial planning?",
    a: "Yes. Whether you need end-to-end planning, month-of coordination, or help with specific elements only, we tailor our involvement to what you need most.",
  },
];

export const serviceDetails: Record<string, ServiceDetail> = {
  "beach-wedding-dubai": {
    introHeading: "Luxury Beach Weddings",
    intro: [
      'Say "I Do" by the Sea with a Celebration Designed Just for You.',
      "Celebrate your love with a breathtaking Luxury Beach Wedding planned by Awesome Events Weddings. As a trusted Wedding Planner Dubai and Wedding Organizer UAE, we create elegant beachfront celebrations across Dubai, Abu Dhabi, Ras Al Khaimah, and the UAE's most exclusive coastal venues. Whether you envision an intimate sunset ceremony or a grand Destination Wedding, our bespoke Wedding Planning Services ensure every detail is beautifully curated.",
      "Every celebration is thoughtfully designed to reflect your love story while creating unforgettable memories by the sea.",
      "No two love stories are the same, and neither are our weddings. Our bespoke wedding planning services are tailored to your style, traditions, and vision, creating unforgettable luxury weddings in Dubai & UAE that feel uniquely yours.",
    ],
    idealFor: [
      "Couples dreaming of romantic seaside ceremonies with beautiful sunset views",
      "International couples planning a destination wedding in Dubai or the UAE",
      "Couples seeking elegant beach wedding décor and luxury styling",
      "Intimate gatherings, grand beachfront receptions, and family celebrations",
      "Couples needing complete wedding planning services and coordination",
      "Anyone wanting a relaxed yet sophisticated Arabian Gulf wedding experience",
    ],
    whyChooseTitle: "What Sets Our Luxury Beach Weddings Apart",
    whyChoose: [
      {
        title: "Seamless Hotel Wedding Coordination",
        body: "We work closely with leading five-star hotels in Dubai to manage ballroom access, banquet requirements, menus, accommodation, and venue coordination.",
      },
      {
        title: "Elegant Ballroom Wedding Transformations",
        body: "Our team transforms hotel ballrooms through bespoke wedding décor, floral design, luxury lighting, staging, and personalised styling.",
      },
      {
        title: "Refined Wedding Guest Hospitality & RSVP",
        body: "From room bookings and airport transfers to welcome experiences and family assistance, we ensure every guest feels comfortable and cared for.",
      },
      {
        title: "Complete Hotel Wedding Management",
        body: "We coordinate ceremonies, receptions, rehearsals, entertainment, catering, technical production, seating, schedules, and seamless wedding-day operations.",
      },
    ],
    faqs: [
      {
        q: "Which are the best beaches in Dubai for a luxury wedding?",
        a: "We help couples choose from Dubai's most exclusive beach wedding venues, including private beachfront resorts and luxury hotels that offer stunning sea views and exceptional hospitality.",
      },
      {
        q: "Can a beach wedding be customised to our culture and traditions?",
        a: "Absolutely. Whether you're planning a Western ceremony, South Asian celebration, Emirati wedding, or a multicultural event, Awesome Events Weddings creates personalised beach weddings that honour your traditions.",
      },
      {
        q: "What happens if the weather changes on our wedding day?",
        a: "Our experienced team always prepares a backup plan, including indoor or covered venue options where available, ensuring your Luxury Beach Wedding runs smoothly regardless of the weather.",
      },
      {
        q: "Are Palm Jumeirah weddings suitable for destination couples?",
        a: "Absolutely. Palm Jumeirah is one of the most popular locations for destination weddings in Dubai, offering luxury accommodation, world-class hospitality, and stunning beachfront settings for both ceremonies and receptions.",
      },
      {
        q: "Can you arrange a private beachfront wedding reception?",
        a: "Yes. We can organise exclusive beachfront receptions with bespoke décor, gourmet catering, live entertainment, and luxury seating for an unforgettable celebration by the sea.",
      },
      {
        q: "Do you decorate the ceremony and reception areas?",
        a: "Yes. Our team provides bespoke Wedding Decoration Dubai, including floral arches, aisle styling, elegant reception décor, ambient lighting, and customised beach-inspired designs.",
      },
      {
        q: "Can you help with guest accommodation and transportation?",
        a: "Yes. For Destination Weddings, we assist with hotel bookings, airport transfers, guest transportation, and logistics to ensure a seamless experience for everyone attending.",
      },
      {
        q: "Can we include fireworks or a drone show at our beach wedding?",
        a: "Yes. Subject to venue approvals and local regulations, we can arrange spectacular fireworks, synchronized drone shows, and other luxury entertainment to make your celebration truly unforgettable.",
      },
    ],
    decor: {
      heading: "Luxury Beach Wedding Décor in Dubai & UAE",
      intro:
        "Transform your Luxury Beach Wedding into an unforgettable seaside celebration with bespoke Wedding Decoration Dubai designed to complement the natural beauty of the coastline. From romantic sunset ceremonies to elegant beachfront receptions, our expert designers create sophisticated décor that blends luxury, romance, and the charm of the Arabian Gulf.",
      listHeading: "Our Beach Wedding Décor Highlights:",
      items: [
        "Elegant beachfront ceremony arches",
        "Fresh floral installations and aisle styling",
        "Luxury reception tablescapes and seating",
        "Ambient lighting for sunset and evening celebrations",
        "Custom stage and dance floor styling",
        "Coastal-inspired décor and colour palettes",
        "Premium lounge setups and wedding backdrops",
      ],
      outro:
        "Every detail is thoughtfully curated to create a seamless Luxury Beach Wedding experience, ensuring your celebration is as breathtaking as the ocean views surrounding it.",
      image: "/decor/lbw1.webp",
    },
  },

  "desert-wedding-dubai": {
    introHeading: "Plan an Unforgettable Desert Wedding in Dubai",
    intro: [
      "Celebrate your love amidst the golden dunes with a breathtaking Desert Wedding in Dubai. At Awesome Events Weddings, we create extraordinary desert celebrations that combine Arabian charm, luxury, and unforgettable experiences. Whether you envision an intimate sunset ceremony, a romantic candlelit reception beneath the stars, or a lavish multi-day celebration, our experienced Wedding Planner Dubai team brings your dream wedding to life with creativity and flawless execution.",
      "From exclusive desert wedding venues and bespoke Wedding Decoration Dubai to gourmet catering, live entertainment, photography, luxury seating, traditional Majlis setups, fireworks, synchronized drone shows, and complete Wedding Planning Services, we take care of every detail. Whether you're planning a Destination Wedding or a private celebration in the UAE, we create personalised Desert Weddings that reflect your style, traditions, and vision, ensuring an unforgettable experience for you and your guests.",
    ],
    idealFor: [
      "Couples dreaming of romantic ceremonies among golden dunes and Arabian landscapes",
      "Destination couples planning a desert wedding in Dubai or the UAE",
      "Couples seeking elegant desert wedding décor and personalised styling",
      "Intimate ceremonies, sunset vows, and starlit wedding receptions",
      "Couples needing complete wedding planning services and coordination",
      "Anyone wanting a private celebration with luxury, nature, and authentic Arabian charm",
    ],
    whyChooseTitle: "Why Choose Us for a Desert Wedding in Dubai",
    whyChoose: [
      {
        title: "Experienced Desert Wedding Planners",
        body: "With over a decade of experience, we create luxury desert weddings across Dubai and the UAE, combining creative design, cultural understanding, and seamless execution.",
      },
      {
        title: "Bespoke Desert Wedding Concepts",
        body: "Every celebration is personalized around your story, traditions, style, and guest experience, creating unforgettable weddings inspired by the beauty of the Arabian desert.",
      },
      {
        title: "Exclusive Desert Wedding Venues",
        body: "We help couples discover exceptional desert wedding venues in Dubai and the UAE, including luxury resorts, private camps, dune settings, and outdoor ceremony locations.",
      },
      {
        title: "Complete Desert Wedding Planning",
        body: "We manage end-to-end planning, including décor, catering, entertainment, transportation, permits, logistics, technical production, guest hospitality, timelines, and on-site coordination.",
      },
    ],
    decor: {
      heading: "Luxury Desert Wedding Décor & Styling",
      intro:
        "Transform the beauty of the Arabian desert into a refined wedding setting with customized décor, elegant styling, and thoughtfully curated details. From romantic ceremonies to luxury receptions, every element is designed to complement the natural landscape while reflecting your personal vision.",
      listHeading: "Our desert wedding décor services highlight:",
      items: [
        "Floral stages inspired by the Arabian landscape",
        "Elegant wedding arches and aisle styling",
        "Luxury table settings and centerpieces",
        "Romantic lighting, lanterns, and candle décor",
        "Premium desert reception setups",
        "Customized wedding themes and colour palettes",
      ],
      outro:
        "We create luxury desert wedding setups in Dubai that blend natural beauty, refined styling, cultural details, and timeless elegance.",
      image: "/decor/dw-d.webp",
    },
    faqs: [
      {
        q: "What makes a desert wedding in Dubai unique?",
        a: "A desert wedding in Dubai offers breathtaking dunes, sunset views, Arabian-inspired hospitality, and a private setting for an unforgettable luxury celebration.",
      },
      {
        q: "How do guests reach a desert wedding venue?",
        a: "We plan clear arrival routes, designated parking, luxury transfers, and coordinated desert access for guests, vendors, and wedding suppliers.",
      },
      {
        q: "How do you keep guests comfortable during a desert wedding?",
        a: "We provide shaded areas, cooling solutions, elegant lounges, refreshments, suitable flooring, and carefully planned ceremony timings for maximum comfort.",
      },
      {
        q: "What is the best time of day for a desert wedding ceremony?",
        a: "Sunset is ideal for a luxury desert wedding, offering cooler temperatures, golden lighting, and beautiful wedding photography.",
      },
      {
        q: "Can you install proper flooring and seating on the sand?",
        a: "Yes. We create stable flooring, raised platforms, elegant aisles, stages, dining areas, and comfortable seating suitable for desert terrain.",
      },
      {
        q: "Can a desert wedding include an Arabian-inspired experience?",
        a: "Yes. We can incorporate traditional welcomes, Arabic entertainment, majlis seating, lantern décor, regional cuisine, and cultural hospitality experiences.",
      },
      {
        q: "How is food and catering managed at a desert wedding?",
        a: "We coordinate approved caterers, mobile kitchens, service areas, power requirements, food safety, dining setups, and professional hospitality teams.",
      },
      {
        q: "Do desert weddings require special permits and approvals?",
        a: "Yes. Requirements depend on the location and activities. We manage venue permissions, supplier access, production approvals, and event logistics.",
      },
    ],
  },

  "intimate-elopements": {
    introHeading: "Beautiful Intimate Elopements & Micro Weddings Across the UAE",
    intro: [
      "At Awesome Events Weddings, we believe a smaller celebration can still feel truly grand. As a trusted Wedding Planner Dubai, we create intimate elopements and micro weddings that are personal, refined, and unforgettable. Every celebration is thoughtfully designed with premium styling, elegant wedding décor, beautiful floral details, carefully curated catering, and seamless complete event coordination.",
      "Whether you are planning a private ceremony for two or a close gathering with family and friends, we transform intimate spaces into meaningful wedding settings filled with warmth, elegance, and character. From venue styling and guest experience to entertainment, dining, photography, and on-the-day management, every detail is handled with care.",
      "Our goal is to make your wedding feel micro but grand, creating a celebration that feels special, luxurious, and remembered by everyone who attends. With personalised planning and a strong focus on your story, we ensure your intimate wedding in Dubai or anywhere across the UAE feels effortless, heartfelt, and beautifully yours.",
    ],
    idealFor: [
      "Couples planning a romantic and private elopement",
      "Small wedding celebrations with close family and friends",
      "Intimate destination weddings in Dubai and the UAE",
      "Outdoor ceremonies in gardens, beaches, deserts, or private venues",
      "Couples seeking elegant décor, personalised details, and complete coordination",
      "Anyone wanting a small wedding that still feels meaningful, stylish, and memorable",
    ],
    whyChooseTitle: "What Makes Our Intimate Elopements & Micro Weddings Special",
    whyChoose: [
      {
        title: "Thoughtfully Curated Intimate Celebrations",
        body: "We design micro weddings in Dubai around meaningful moments, close connections, and a relaxed atmosphere that feels personal from beginning to end.",
      },
      {
        title: "Beautiful Venues for Smaller Weddings",
        body: "From private villas and boutique hotels to rooftops, gardens, yachts, and desert settings, we source charming venues suited to intimate weddings in the UAE.",
      },
      {
        title: "Elevated Details with a Grand Feel",
        body: "Smaller guest lists allow us to focus on premium florals, elegant décor, personalised dining, refined styling, and memorable details that make every celebration feel beautifully grand.",
      },
      {
        title: "Personal Support from Start to Finish",
        body: "Our dedicated team provides complete elopement and micro wedding planning, managing suppliers, catering, schedules, guest care, and wedding-day coordination with warmth and attention.",
      },
    ],
    decor: {
      heading: "Luxury Styling for Intimate Weddings in Dubai",
      intro:
        "Create a beautifully personal setting with Luxury Wedding Decoration for Intimate Elopements & Micro Weddings across Dubai, Abu Dhabi, Ras Al Khaimah, and the UAE. At Awesome Events Weddings, we design elegant spaces that celebrate love through personal touches, smaller settings, cosy styling, candlelight, private dining, and personalised décor. Whether you're planning a romantic Beach Wedding, an intimate Luxury Hotel Wedding, or a private Destination Wedding, our bespoke Wedding Decoration Dubai services are thoughtfully tailored to your vision.",
      listHeading: "Our Intimate Wedding Décor Services Highlight:",
      items: [
        "Personalised décor and bespoke floral styling",
        "Romantic ceremony backdrops and elegant wedding arches",
        "Cosy styling with candlelight and ambient lighting",
        "Luxury tablescapes and private dining setups",
        "Beautiful aisle décor and intimate seating arrangements",
        "Custom colour palettes and decorative accents",
        "Elegant photo corners and personalised celebration details",
      ],
      outro:
        "Every Intimate Elopement and Micro Wedding is thoughtfully designed to create a warm, meaningful atmosphere where every detail reflects your story. Our customised Wedding Decoration transforms intimate celebrations into timeless memories for you and your closest loved ones.",
      image: "/decor/ie1.webp",
    },
    faqs: [
      {
        q: "What is the difference between an elopement and a micro wedding?",
        a: "An elopement in Dubai usually involves only the couple, while a micro wedding includes close loved ones.",
      },
      {
        q: "How many guests are suitable for a micro wedding?",
        a: "Most micro weddings in Dubai welcome between 10 and 50 guests, creating a personal atmosphere.",
      },
      {
        q: "Can a small wedding still feel luxurious and grand?",
        a: "Absolutely. Premium décor, curated dining, entertainment, and personalised details make intimate celebrations feel beautifully elevated.",
      },
      {
        q: "What venues are suitable for intimate weddings in the UAE?",
        a: "Private villas, boutique resorts, gardens, yachts, terraces, and secluded settings are ideal for intimate weddings in the UAE.",
      },
      {
        q: "Can we personalise every detail of our micro wedding?",
        a: "Yes. We customise the ceremony, styling, menu, music, stationery, entertainment, and guest experience around your story.",
      },
      {
        q: "How quickly can an intimate elopement be planned?",
        a: "Depending on availability, an intimate elopement in Dubai can often be arranged within a few weeks.",
      },
      {
        q: "Can distant family and friends join our intimate wedding virtually?",
        a: "Yes. We can arrange professional live streaming, digital guest messages, and virtual participation for loved ones worldwide.",
      },
      {
        q: "Do you provide complete micro wedding planning and coordination?",
        a: "Yes. We manage venue sourcing, décor, catering, suppliers, photography, timelines, and complete wedding-day coordination.",
      },
    ],
  },

  "civil-weddings-uae": {
    introHeading: "Elegant Civil Weddings in Dubai & Across the UAE",
    intro: [
      "At Awesome Events Weddings, we create civil weddings in Dubai that feel meaningful, elegant, and deeply personal. As an experienced Wedding Planner Dubai, we help couples turn a simple legal ceremony into a beautifully styled celebration filled with warmth, thoughtful details, and unforgettable moments.",
      "Whether you are planning an intimate courthouse ceremony, a private hotel celebration, or a refined gathering with family and friends, our team manages every element with care. From venue sourcing and ceremony styling to elegant wedding décor, florals, catering, photography, guest hospitality, and complete event coordination, we ensure your celebration feels effortless from beginning to end.",
      "We also support couples with civil ceremony planning, timelines, documentation guidance, and venue arrangements, helping the entire process feel clear and well organised. Every civil wedding in the UAE is designed around your story, personal style, traditions, and preferred guest experience.",
      "Our aim is to create a celebration that feels relaxed yet special, intimate yet beautifully elevated, allowing you to focus on the joy of beginning your new journey together.",
    ],
    idealFor: [
      "UAE residents planning a legally recognised civil marriage",
      "International couples getting married in Dubai or the UAE",
      "Couples seeking a simple, elegant, and personalised civil ceremony",
      "Newlyweds planning a reception or celebration after their legal ceremony",
      "Couples needing civil wedding planning and coordination",
      "Anyone wanting a warm, stylish, and stress-free civil wedding in the UAE",
    ],
    whyChooseTitle: "Creating Meaningful Civil Weddings Across the UAE",
    whyChoose: [
      {
        title: "Personalised Civil Ceremony Styling",
        body: "We create elegant civil wedding setups in Dubai with refined décor, floral details, thoughtful seating, and a setting that feels truly personal.",
      },
      {
        title: "Guidance Through Every Step",
        body: "Our team supports couples with ceremony planning, timelines, documentation guidance, and coordination, helping the process feel clear, calm, and well organised.",
      },
      {
        title: "Intimate Celebrations with Beautiful Details",
        body: "From a private signing ceremony to a stylish family reception, we add meaningful touches that make your civil wedding in the UAE feel warm and memorable.",
      },
      {
        title: "Complete End-to-End Civil Wedding Support",
        body: "We manage venue arrangements, décor, catering, photography & videography, guest experience, and on-the-day coordination, allowing you to enjoy every moment with ease.",
      },
    ],
    decor: {
      heading: "Elegant Styling for Civil Weddings in Dubai",
      intro:
        "Celebrate your day with civil wedding decoration in Dubai designed to feel intimate, elegant, and personal. Awesome Events Weddings creates bespoke décor across Dubai, Abu Dhabi, Ras Al Khaimah, and the UAE, transforming ceremony and reception spaces into warm, welcoming settings.",
      listHeading: "Our Civil Wedding Décor Services Include:",
      items: [
        "Elegant ceremony backdrops and floral installations",
        "Personalised wedding styling and décor concepts",
        "Contemporary arches and beautifully styled aisles",
        "Luxury tablescapes and intimate seating",
        "Romantic lighting, candles, and decorative details",
        "Custom colour palettes, signage, and photo backdrops",
        "Stylish reception décor and personalised finishing touches",
      ],
      outro:
        "Our civil wedding décor services in Dubai and the UAE bring together thoughtful styling, timeless details, and a setting that feels beautifully yours.",
      image: "/decor/civil-d.webp",
    },
    faqs: [
      {
        q: "What is a civil wedding in the UAE?",
        a: "A civil wedding in the UAE is a legally recognised, non-religious marriage ceremony conducted through the relevant authority.",
      },
      {
        q: "Who can apply for a civil marriage in the UAE?",
        a: "Eligibility depends on the emirate, nationality, residency status, religion, and chosen civil marriage process.",
      },
      {
        q: "Can we celebrate after our civil marriage ceremony?",
        a: "Absolutely. We can create an intimate lunch, elegant reception, or joyful celebration following your legal ceremony.",
      },
      {
        q: "Can a civil wedding be personalised?",
        a: "Yes. Your civil wedding in Dubai can include personal vows, music, florals, décor, and meaningful details.",
      },
      {
        q: "Can we include cultural traditions in a civil wedding?",
        a: "Yes. Cultural rituals, traditional attire, music, cuisine, and family customs can complement your civil ceremony beautifully.",
      },
      {
        q: "How long does planning a civil wedding take?",
        a: "Timelines vary, but intimate civil weddings in the UAE can often be planned within a shorter timeframe.",
      },
      {
        q: "Do you help with civil marriage documents and requirements?",
        a: "We provide planning guidance and help couples understand the documentation required by the relevant UAE authorities.",
      },
      {
        q: "Do you provide complete civil wedding planning?",
        a: "Yes. We manage venue sourcing, styling, catering, photography, guest hospitality, schedules, and wedding-day coordination.",
      },
    ],
  },

  "luxury-hotel-weddings": {
    introHeading: "Celebrate Your Love in Dubai’s Most Luxurious Hotels",
    intro: [
      "Enjoy an elegant and effortless luxury hotel wedding in Dubai with Awesome Events Weddings. As a trusted Wedding Planner in Dubai and Wedding Organizer UAE, we create warm, memorable celebrations across Dubai, Abu Dhabi, Ras Al Khaimah, and the UAE’s finest five-star hotels.",
      "Whether you are planning an intimate ceremony, a glamorous ballroom reception, or a grand hotel celebration, our bespoke wedding planning services cover venue sourcing, complete coordination, luxury wedding décor, floral styling, staging, lighting, entertainment, photography, guest accommodation, transportation, catering, seating plans, and wedding logistics.",
      "Every luxury hotel wedding in the UAE is thoughtfully designed around your story, creating a celebration that feels personal, elegant, and unforgettable for you and your guests.",
    ],
    idealFor: [
      "Couples planning a luxury hotel wedding in Dubai or the UAE",
      "Brides and grooms dreaming of a grand ballroom ceremony and elegant reception",
      "Families hosting multi-day wedding celebrations within one five-star hotel",
      "Couples seeking premium hospitality, catering, décor, and guest accommodation",
      "Those wanting complete hotel wedding planning and seamless coordination",
      "Anyone looking for a warm, elegant, and unforgettable celebration in a luxury venue",
    ],
    whyChooseTitle: "Why Choose Us for a Luxury Hotel Wedding",
    whyChoose: [
      {
        title: "Seamless Hotel Wedding Coordination",
        body: "We work closely with leading five-star hotels in Dubai to manage ballroom access, banquet requirements, menus, accommodation, and venue coordination.",
      },
      {
        title: "Elegant Ballroom Wedding Transformations",
        body: "Our team transforms hotel ballrooms through bespoke wedding décor, floral design, luxury lighting, staging, and personalised styling.",
      },
      {
        title: "Refined Wedding Guest Hospitality & RSVP",
        body: "From room bookings and airport transfers to welcome experiences and family assistance, we ensure every guest feels comfortable and cared for.",
      },
      {
        title: "Complete Hotel Wedding Management",
        body: "We coordinate ceremonies, receptions, rehearsals, entertainment, catering, technical production, seating, schedules, and seamless wedding-day operations.",
      },
    ],
    decor: {
      heading: "Luxury Hotel Wedding Decoration in Dubai",
      intro:
        "Step into a beautifully designed celebration where every detail feels personal, elegant, and truly yours. Our luxury hotel wedding decoration services in Dubai & UAE are thoughtfully created to transform stunning hotel ballrooms and reception spaces into warm, memorable settings filled with beauty and charm.",
      listHeading: "Our hotel wedding décor services highlight:",
      items: [
        "Bespoke floral stages and ceremony backdrops",
        "Elegant ballroom entrances and aisle décor",
        "Luxury table styling and statement centerpieces",
        "Romantic wedding lighting and ambience concepts",
        "Beautiful reception and stage setups",
        "Custom wedding themes and colour palettes & much more",
      ],
      outro:
        "From the first welcome to the final celebration, we create luxury hotel wedding setups in Dubai & UAE that reflect your love story and make every guest feel part of something truly special.",
      image: "/decor/lhw-d.webp",
    },
    faqs: [
      {
        q: "How do we choose the right luxury hotel wedding venue in Dubai?",
        a: "We consider your guest count, wedding style, ballroom capacity, location, hospitality standards, and celebration requirements.",
      },
      {
        q: "What is included in a luxury hotel wedding package?",
        a: "Packages may include the ballroom, catering, tables, seating, service staff, bridal suites, and selected amenities.",
      },
      {
        q: "Can we host all our wedding functions at one hotel?",
        a: "Yes. Many luxury hotels in Dubai offer multiple spaces for ceremonies, receptions, and pre-wedding celebrations.",
      },
      {
        q: "Can you transform a hotel ballroom to match our wedding vision?",
        a: "Absolutely. We personalise the ballroom with bespoke décor, floral installations, lighting, staging, and thoughtful styling.",
      },
      {
        q: "Can we customise the hotel wedding menu?",
        a: "Yes. We coordinate menu tastings and personalised dining experiences with the hotel's culinary and banquet teams.",
      },
      {
        q: "Do hotels allow external wedding vendors?",
        a: "Policies vary. We coordinate with the hotel regarding external decorators, entertainers, photographers, production teams, and applicable charges.",
      },
      {
        q: "Can you manage several wedding events across different hotel spaces?",
        a: "Yes. We coordinate every function, venue transition, supplier schedule, and guest movement for a seamless celebration.",
      },
      {
        q: "How do you manage a luxury hotel wedding on the day?",
        a: "Our Dubai wedding coordinators oversee timelines, hotel teams, vendors, production, ceremonies, reception details, logistics each and every step of the way.",
      },
    ],
  },

  "yacht-marina-weddings": {
    introHeading: "Luxury Yacht & Marina Weddings in Dubai",
    intro: [
      "At Awesome Events Weddings, we create unforgettable luxury yacht weddings in Dubai for couples who dream of celebrating against sparkling waters, iconic skylines, and breathtaking sunset views. As a trusted Wedding Planner Dubai, we help you explore the best Dubai Marina wedding locations, Dubai Harbour wedding party venues, and exclusive waterfront settings across the UAE.",
      "Whether you are planning a Palm Jumeirah yacht ceremony, a Burj Al Arab yacht wedding, an intimate engagement, or a stylish marina reception, we offer personalised Dubai Marina wedding packages designed around your guest count, style, and budget. Our team also assists with wedding yacht rental Dubai, small wedding yacht rental Dubai Marina, and suitable options for an affordable wedding yacht Dubai celebration.",
      "From yacht sourcing and marina wedding venue UAE selection to elegant deck décor, floral styling, entertainment, photography, guest transfers, and on-board catering for yacht weddings, every detail is thoughtfully coordinated. We can also create an all-inclusive yacht wedding Dubai experience or a memorable yacht engagement party Dubai, ensuring your celebration feels warm, refined, effortless, and beautifully yours.",
    ],
    idealFor: [
      "Couples planning yacht weddings in Dubai and the UAE",
      "Brides and grooms seeking private ceremonies with sea and skyline views",
      "Families hosting intimate celebrations, marina receptions, or luxury onboard events",
      "Couples looking for Dubai Marina wedding packages and private yacht rentals",
      "Those wanting bespoke décor, onboard catering, entertainment, and guest coordination",
      "Anyone dreaming of an elegant, exclusive, and unforgettable waterfront wedding experience",
    ],
    whyChooseTitle: "Luxury Yacht & Marina Weddings, Beautifully Curated",
    whyChoose: [
      {
        title: "Waterfront Celebrations with a Personal Touch",
        body: "We create yacht weddings in Dubai that feel intimate, elegant, and beautifully connected to the sea, skyline, and your love story.",
      },
      {
        title: "Carefully Selected Yachts and Marina Venues",
        body: "Our team helps source private yachts, luxury vessels, and exclusive marina wedding venues in Dubai suited to your guest count and celebration style.",
      },
      {
        title: "Stylish Deck and Waterfront Design",
        body: "We enhance every setting with refined floral styling, ambient lighting, elegant seating, personalised details, and décor designed for open-water surroundings.",
      },
      {
        title: "Smooth Onboard Wedding Coordination",
        body: "From boarding schedules and vendor access to catering, entertainment, guest movement, and ceremony timing, we manage each and every detail with care.",
      },
    ],
    decor: {
      heading: "Luxury Yacht & Marina Wedding Decoration in Dubai & UAE",
      intro:
        "Our yacht and marina wedding décor services in Dubai create elegant waterfront celebrations inspired by the sea, skyline views, and refined modern luxury.",
      listHeading: "Our yacht & marina wedding décor services highlight:",
      items: [
        "Stylish deck décor and floral installations",
        "Elegant gangway entrances and welcome signage",
        "Luxury lounge seating and waterfront reception styling",
        "Refined tablescapes and onboard dining setups",
        "Ambient lighting, lanterns, and sunset-inspired details",
        "Bespoke themes, colour palettes, and personalised yacht styling",
      ],
      outro:
        "Every luxury yacht wedding setup in Dubai is thoughtfully designed to feel intimate, sophisticated, and beautifully connected to the waterfront.",
      image: "/decor/yacht-d.webp",
    },
    faqs: [
      {
        q: "How many guests can attend a yacht wedding in Dubai?",
        a: "Guest capacity depends on the yacht’s size, layout, dining setup, and onboard safety regulations.",
      },
      {
        q: "Can the yacht sail during our wedding celebration?",
        a: "Yes. Your luxury yacht wedding in Dubai can cruise along a pre-approved scenic route.",
      },
      {
        q: "Which views can we enjoy during a Dubai yacht wedding?",
        a: "Routes may feature Dubai Marina, Palm Jumeirah, Atlantis, Bluewaters Island, and Burj Al Arab views.",
      },
      {
        q: "Can we have both the ceremony and reception onboard?",
        a: "Absolutely. We create separate onboard spaces for your ceremony, dining, entertainment, and relaxed celebrations.",
      },
      {
        q: "What happens if the sea conditions are unsuitable?",
        a: "We prepare flexible sailing schedules, sheltered marina options, and alternative plans with the yacht operator.",
      },
      {
        q: "Can a yacht be decorated without affecting its interiors?",
        a: "Yes. We use secure, yacht-friendly décor designed specifically for decks, cabins, and marina settings.",
      },
      {
        q: "Can you arrange live entertainment onboard the yacht?",
        a: "Yes. We coordinate DJs, musicians, performers, and sound systems suitable for yacht weddings in Dubai.",
      },
      {
        q: "How are food and beverages served during a yacht wedding?",
        a: "We arrange onboard wedding catering, customised menus, professional service teams, and elegant dining setups.",
      },
    ],
  },

  "garden-weddings": {
    introHeading: "Luxury Garden Weddings in Dubai & Across the UAE",
    intro: [
      "At Awesome Events Weddings, we create romantic garden weddings in Dubai surrounded by greenery, open skies, and elegant natural settings. As an experienced Garden Wedding Planner Dubai, we help couples find the perfect outdoor wedding venues Dubai, including wedding venues in Al Barari, Jumeirah garden wedding venues, Palm Jumeirah outdoor wedding locations, and beautiful resort garden wedding venues in the UAE.",
      "From intimate garden wedding spaces Dubai and micro wedding venues Dubai to luxury outdoor wedding venues Dubai and affordable garden wedding venues in Dubai, we source spaces that suit your vision and guest count.",
      "Our outdoor wedding event management UAE covers venue styling, floral décor, lighting, seating, staging, weather planning, and seamless coordination. As bespoke wedding decorators Dubai, we create warm, personal celebrations across outdoor wedding reception venues Abu Dhabi, outdoor wedding spaces Downtown Dubai, and green and eco-friendly wedding venues UAE.",
    ],
    whyChooseTitle: "Romantic Garden Weddings Inspired by Nature",
    whyChoose: [
      {
        title: "Nature-Led Wedding Experiences",
        body: "We create luxury garden weddings in Dubai that feel romantic, refreshing, and naturally elegant, with every detail shaped around the surrounding landscape.",
      },
      {
        title: "Curated Outdoor Garden Settings",
        body: "Our team helps select private estates, resort gardens, landscaped lawns, and exclusive garden wedding venues across the UAE that suit your celebration beautifully.",
      },
      {
        title: "Floral Design That Feels Effortless",
        body: "From blooming ceremony spaces to layered tablescapes, we use florals, greenery, textures, and lighting to create a warm and harmonious atmosphere.",
      },
      {
        title: "Comfortable Celebrations Under the Open Sky",
        body: "We carefully plan seating, shade, flooring, lighting, dining areas, and guest flow to ensure your outdoor garden wedding feels relaxed, welcoming, and seamless.",
      },
    ],
    decor: {
      heading: "Garden Wedding Decoration in Dubai & the UAE",
      intro:
        "Our garden wedding décor services in Dubai and the UAE create romantic outdoor celebrations inspired by lush greenery, natural beauty, and timeless elegance.",
      listHeading: "Our garden wedding décor services highlight:",
      items: [
        "Floral ceremony arches and garden backdrops",
        "Elegant aisles, pathways, and welcome installations",
        "Luxury tablescapes and outdoor dining arrangements",
        "Romantic lighting, chandeliers, lanterns, and candles",
        "Garden lounges, shaded seating, and reception styling",
        "Bespoke themes, colour palettes, and botanical details",
      ],
      outro:
        "Every garden wedding setup in Dubai is thoughtfully designed to complement the landscape and create a warm, elegant, and unforgettable celebration.",
      image: "/decor/gard-d.webp",
    },
    faqs: [
      {
        q: "What should we consider when choosing a garden wedding venue?",
        a: "Consider privacy, landscape quality, capacity, accessibility, facilities, lighting options, and permitted celebration timings.",
      },
      {
        q: "Can existing gardens be incorporated into the wedding design?",
        a: "Yes. We enhance natural greenery with florals, pathways, installations, lighting, and complementary décor.",
      },
      {
        q: "Which footwear is best for a garden wedding?",
        a: "Comfortable shoes, wedges, or heel protectors help guests move easily across lawns and pathways.",
      },
      {
        q: "How do you create privacy at an outdoor garden venue?",
        a: "We use greenery walls, elegant screens, draping, floral partitions, and carefully planned layouts.",
      },
      {
        q: "Can we hold both the ceremony and reception in the garden?",
        a: "Yes. We create distinct ceremony, dining, entertainment, and lounge areas within the garden setting.",
      },
      {
        q: "How do you light a garden wedding after sunset?",
        a: "We combine illuminated trees, chandeliers, festoon lights, candles, lanterns, and discreet pathway lighting.",
      },
      {
        q: "Can seasonal flowers be used for garden wedding décor?",
        a: "Absolutely. Seasonal blooms create fresher, more natural, and beautifully coordinated garden wedding decoration.",
      },
      {
        q: "How do you manage insects during a garden wedding?",
        a: "We coordinate discreet pest control, citronella décor, air movement, and venue-approved preventive measures.",
      },
    ],
  },

  "outdoor-weddings": {
    introHeading: "Luxury Outdoor Weddings in Dubai & the UAE",
    intro: [
      "At Awesome Events Weddings, we create elegant outdoor weddings in Dubai and the UAE surrounded by open skies, breathtaking scenery, and thoughtfully styled spaces. As experienced Dubai outdoor wedding planners, we help couples discover beautiful beach, desert, garden, terrace, waterfront, and private outdoor wedding venues across the UAE.",
      "Whether you are planning an intimate ceremony or a grand celebration, our team brings together bespoke décor, floral styling, elegant seating, ambient lighting, staging, guest comfort, and seamless event coordination. We also support couples in finding the right luxury outdoor wedding venues in Dubai, Abu Dhabi, and Ras Al Khaimah.",
      "From sunset beach ceremonies to desert receptions and stylish terrace weddings, every celebration is designed to feel warm, personal, and unforgettable. Our goal is to create a refined outdoor wedding experience that reflects your story while making every guest feel comfortable and beautifully welcomed.",
    ],
    idealFor: [
      "Couples dreaming of a luxury outdoor wedding in Dubai or the UAE",
      "Brides and grooms who love beaches, deserts, gardens, terraces, waterfronts, or their own backyard",
      "Couples wanting to enjoy the UAE’s cool winter breeze during an open-air celebration",
      "Intimate ceremonies, grand receptions, and relaxed family gatherings",
      "Couples seeking bespoke décor, scenic surroundings, and personalised styling",
      "Those wanting complete planning, guest comfort, and weather-ready coordination",
    ],
    whyChooseTitle: "Outdoor Weddings Designed Around Your Setting",
    whyChoose: [
      {
        title: "Tailored Open-Air Wedding Concepts",
        body: "We create luxury outdoor weddings in Dubai that reflect your style, surroundings, and celebration vision with thoughtful, personalised design.",
      },
      {
        title: "Diverse Outdoor Wedding Venues",
        body: "From beaches and deserts to terraces, waterfronts, courtyards, and private estates, we source exceptional outdoor wedding venues across the UAE.",
      },
      {
        title: "Elegant Outdoor Décor & Styling",
        body: "Our team combines floral design, statement structures, lighting, seating, and refined styling to transform every open-air space beautifully.",
      },
      {
        title: "Seamless Outdoor Wedding Coordination",
        body: "We manage weather planning, flooring, power, sound, guest comfort, catering, timelines, and on-site coordination for a smooth celebration.",
      },
    ],
    decor: {
      heading: "Outdoor Wedding Decoration in Dubai & the UAE",
      intro:
        "Our outdoor wedding décor services in Dubai and the UAE create elegant open-air celebrations shaped around beautiful surroundings, seasonal weather, and your personal wedding style.",
      listHeading: "Our outdoor wedding décor services highlight:",
      items: [
        "Statement ceremony arches, stages, and scenic backdrops",
        "Elegant aisles, entrances, and personalised welcome installations",
        "Luxury outdoor seating, lounges, and dining arrangements",
        "Romantic lighting, chandeliers, lanterns, and illuminated pathways",
        "Flooring, shaded areas, weather-ready structures, and guest comfort features",
        "Bespoke themes, floral styling, colour palettes, and decorative details",
      ],
      outro:
        "Every outdoor wedding setup in Dubai is thoughtfully designed to suit beaches, deserts, gardens, terraces, waterfront venues, or the backyard of your own home, creating a warm and memorable celebration under the open sky.",
      image: "/decor/ow-d.webp",
    },
    faqs: [
      {
        q: "Which locations are suitable for outdoor weddings in Dubai?",
        a: "Beaches, deserts, terraces, courtyards, private estates, resort lawns, and waterfront venues offer beautiful open-air settings.",
      },
      {
        q: "How do you design the layout for an outdoor wedding?",
        a: "We create dedicated ceremony, dining, entertainment, lounge, and photography zones with comfortable guest flow.",
      },
      {
        q: "Can temporary structures be installed at an outdoor wedding venue?",
        a: "Yes. We can arrange pergolas, canopies, stages, raised platforms, marquees, and decorative overhead installations.",
      },
      {
        q: "How are lighting and power managed for outdoor weddings?",
        a: "We coordinate generators, safe cabling, backup power, ambient lighting, stage lighting, and illuminated pathways.",
      },
      {
        q: "How do you manage sound at an open-air wedding?",
        a: "Our production team plans speaker placement and sound levels for clear coverage without disturbing nearby areas.",
      },
      {
        q: "Can outdoor wedding spaces be made accessible for every guest?",
        a: "Yes. We plan stable walkways, ramps, suitable flooring, accessible seating, and convenient drop-off points.",
      },
      {
        q: "How do you keep an outdoor celebration comfortable from day to night?",
        a: "We arrange shade, cooling, heaters, refreshments, soft lighting, and comfortable lounges according to the season.",
      },
      {
        q: "Can the ceremony and reception have different outdoor designs?",
        a: "Absolutely. We create distinctive yet connected settings for each part of your outdoor wedding in Dubai.",
      },
    ],
  },

  "emirati-gcc-weddings": {
    introHeading: "Emirati & GCC Weddings Dubai",
    intro: [
      "Experience elegant Emirati weddings in Dubai with luxury wedding planning services designed to honour local traditions and Gulf customs.",
      "Our expert wedding coordinator team delivers sophisticated celebrations featuring traditional Zaffa processions, elegant Majlis settings, exceptional hospitality, and bespoke wedding decoration Dubai. As a trusted wedding organizer in UAE, we ensure every ceremony is planned with precision and cultural authenticity.",
      "From intimate family gatherings to grand multi-day celebrations, every detail is thoughtfully coordinated to reflect your heritage, family traditions, and personal vision.",
    ],
    idealFor: [
      "Couples planning Emirati weddings in Dubai and the UAE",
      "Families hosting traditional Arabic and GCC weddings",
      "Saudi, Kuwaiti, Qatari, Bahraini, and Omani celebrations",
      "Couples seeking Majlis styling, Zaffa entrances, and cultural hospitality",
      "Multi-day family weddings with premium décor and coordination",
      "Anyone wanting a refined, traditional, and memorable GCC wedding experience",
    ],
    whyChooseTitle: "Why Choose Us for Emirati & GCC Weddings in Dubai",
    whyChoose: [
      {
        title: "Experienced Emirati & GCC Wedding Planners",
        body: "Our team understands the scale, privacy, hospitality, and cultural details required for Emirati, Arabic, and GCC family weddings across Dubai and the UAE.",
      },
      {
        title: "Culturally Authentic Wedding Experiences",
        body: "We thoughtfully coordinate traditional customs, family requirements, Zaffa processions, Majlis settings, Arabic entertainment, and meaningful ceremonial details with care and respect.",
      },
      {
        title: "Luxury Majlis, Stage & Wedding Decoration",
        body: "From elegant Majlis lounges and grand stages to floral installations, lighting, entrances, and bespoke wedding decoration Dubai, every space is designed around your preferred style.",
      },
      {
        title: "Complete Privacy & Guest Management",
        body: "We coordinate separate celebration areas, controlled access, guest reception, hospitality teams, family requirements, supplier schedules, and discreet on-the-day management.",
      },
    ],
    decor: {
      heading: "Emirati & GCC Wedding Decoration in Dubai & the UAE",
      intro:
        "Our Emirati and GCC wedding décor services in Dubai and the UAE create elegant celebrations inspired by cultural traditions, refined luxury, and warm Arabian hospitality.",
      listHeading: "Our Emirati & GCC Wedding Décor Services Highlight:",
      items: [
        "Majlis-inspired seating and lounge styling",
        "Grand floral stages and statement backdrops",
        "Elegant Zaffa entrances and ceremonial pathways",
        "Luxury tablescapes and family seating arrangements",
        "Arabic lighting, lanterns, and decorative details",
        "Custom themes, colours, and cultural styling",
      ],
      outro:
        "Every Emirati and GCC wedding setup in Dubai is thoughtfully designed to honour your traditions and welcome every guest beautifully.",
      image: "/decor/em-d.webp",
    },
    faqs: [
      {
        q: "Do you organise traditional Emirati weddings in Dubai?",
        a: "Yes. We plan elegant Emirati weddings across Dubai and the UAE while carefully respecting local traditions, family preferences, privacy requirements, and cultural customs.",
      },
      {
        q: "Can you arrange a traditional Zaffa procession?",
        a: "Yes. We can coordinate traditional Arabic Zaffa processions with drummers, performers, music, entrances, choreography, and production tailored to the couple and venue.",
      },
      {
        q: "Can you design separate celebrations for men and women?",
        a: "Yes. We can plan separate halls, entrances, hospitality areas, entertainment, dining, and production while maintaining one coordinated wedding experience.",
      },
      {
        q: "Do you create luxury Majlis settings?",
        a: "Yes. We design elegant Majlis seating areas with customised furniture, florals, lighting, carpets, tables, privacy screens, and hospitality layouts.",
      },
      {
        q: "Can you arrange Arabic entertainment and performers?",
        a: "Yes. We can source Arabic singers, musicians, drummers, traditional performers, DJs, and other entertainment according to the family's preferences and venue regulations.",
      },
      {
        q: "Can you coordinate Arabic and Gulf catering?",
        a: "Yes. We work with experienced catering teams to arrange Emirati, Arabic, and Gulf menus, live stations, traditional sweets, coffee service, and premium guest hospitality.",
      },
      {
        q: "Can you manage a large GCC family wedding?",
        a: "Absolutely. We coordinate large guest lists, seating plans, invitations, RSVP management, family requirements, supplier access, transport, hospitality, and complete event operations.",
      },
      {
        q: "Do you provide private and discreet wedding coordination?",
        a: "Yes. Privacy is treated as a priority. We can coordinate controlled access, private supplier protocols, photography restrictions, separate entrances, security, and discreet guest management.",
      },
    ],
  },

  "south-asian-weddings": {
    introHeading: "South Asian Weddings Dubai",
    intro: [
      "Celebrate vibrant South Asian weddings in Dubai with bespoke wedding planning services tailored to your traditions, customs, and celebrations.",
      "As an experienced wedding organizer UAE and dedicated wedding coordinator, we specialise in luxurious multi-day celebrations including Mehndi, Sangeet, Pheras, Walima, and grand receptions. From elegant wedding decoration Dubai to seamless event coordination, we create unforgettable weddings that beautifully reflect your heritage.",
      "Whether you are planning a Pakistani, North Indian, South Indian, Tamil, Sikh, Gujarati, or multicultural wedding, every event is designed to feel connected, personal, and beautifully executed.",
    ],
    idealFor: [
      "Couples planning South Asian weddings in Dubai and the UAE",
      "Families hosting Indian, Pakistani, Bangladeshi, Sri Lankan, Nepali, or multicultural celebrations",
      "Multi-day weddings featuring Mehndi, Sangeet, Nikah, Pheras, Walima, and receptions",
      "Families seeking full hotel buyouts for private celebrations and guest accommodation",
      "Couples wanting cultural décor, traditional entertainment, premium catering, and personalised hospitality",
      "Anyone dreaming of a vibrant, elegant, and unforgettable South Asian wedding experience",
    ],
    whyChooseTitle: "Why Choose Us for South Asian Weddings in Dubai",
    whyChoose: [
      {
        title: "Specialists in Multi-Day Wedding Celebrations",
        body: "We coordinate complete South Asian wedding journeys, including engagement events, Mehndi, Haldi, Sangeet, Pheras, Nikah, Baraat, Walima, receptions, and farewell celebrations.",
      },
      {
        title: "Bespoke Cultural Wedding Design",
        body: "Every event is designed around your heritage, family traditions, preferred colours, rituals, attire, entertainment, and personal wedding vision.",
      },
      {
        title: "Luxury Décor, Staging & Production",
        body: "From vibrant Mehndi styling and grand reception stages to mandaps, floral installations, lighting, sound, LED screens, entrances, and wedding decoration Dubai, we transform every venue.",
      },
      {
        title: "Complete Family, Guest & Event Coordination",
        body: "Our wedding coordinator team manages suppliers, timelines, ceremonies, family requirements, guest hospitality, venue transitions, transport, and every detail across all wedding functions.",
      },
    ],
    decor: {
      heading: "South Asian Wedding Decoration in Dubai & the UAE",
      intro:
        "Our South Asian wedding décor services in Dubai and the UAE create vibrant, elegant celebrations inspired by cultural traditions, family moments, and refined luxury.",
      listHeading: "Our South Asian wedding décor services highlight:",
      items: [
        "Bespoke Mehndi, Sangeet, Nikah, Pheras, and Walima setups",
        "Grand floral stages, mandaps, and statement backdrops",
        "Elegant entrances, ceremonial aisles, and welcome décor",
        "Luxury tablescapes and family seating arrangements",
        "Colourful lighting, draping, lanterns, and decorative details",
        "Custom themes, colour palettes, and cultural styling",
      ],
      outro:
        "Every South Asian wedding setup in Dubai is thoughtfully designed to honour your traditions and create a warm, memorable experience for every guest.",
      image: "/decor/saw-d.webp",
    },
    faqs: [
      {
        q: "Do you organise Pakistani and Indian weddings in Dubai?",
        a: "Yes. We plan Pakistani, North Indian, South Indian, Tamil, Sikh, Gujarati, and multicultural weddings across Dubai and the UAE.",
      },
      {
        q: "Can you plan several South Asian wedding events?",
        a: "Absolutely. We can coordinate Mehndi, Haldi, Sangeet, Nikah, Pheras, Baraat, Walima, receptions, and other family celebrations as one seamless wedding experience.",
      },
      {
        q: "Can each wedding function have a different design?",
        a: "Yes. Each event can have its own colour palette, décor concept, entertainment, stage, lighting, menu, and atmosphere while remaining connected to the overall wedding story.",
      },
      {
        q: "Can you arrange a traditional mandap or Nikah stage?",
        a: "Yes. We design customised mandaps, Nikah stages, reception stages, floral backdrops, aisle settings, seating layouts, and ceremonial spaces according to your traditions.",
      },
      {
        q: "Do you arrange South Asian entertainment?",
        a: "Yes. We can coordinate DJs, dhol players, live singers, dancers, Bollywood performers, choreography, family performances, and customised bride and groom entrances.",
      },
      {
        q: "Can you coordinate culturally appropriate catering?",
        a: "Yes. We work with experienced caterers to arrange Pakistani, Indian, vegetarian, regional, and international menus, including live stations and customised dining experiences.",
      },
      {
        q: "Can you manage large guest lists and international guests?",
        a: "Yes. We assist with invitations, RSVP tracking, accommodation, airport transfers, transportation, welcome desks, seating plans, itineraries, and guest hospitality.",
      },
      {
        q: "Can you plan a multicultural South Asian wedding?",
        a: "Absolutely. We thoughtfully combine different cultures, ceremonies, cuisines, music, and family traditions into one respectful and beautifully coordinated celebration.",
      },
    ],
  },

  "destination-weddings": {
    introHeading: "Luxury Destination Weddings in Dubai & the UAE",
    intro: [
      "Wherever you are in the world, Awesome Events Weddings makes it easy to get married in Dubai and celebrate your love in one of the UAE’s most unforgettable settings. As an experienced Dubai wedding planner, we create warm, elegant, and beautifully personalised destination weddings in the UAE.",
      "From a romantic beach wedding in Dubai or celebration at Palm Jumeirah wedding venues to desert wedding venues Dubai, an Al Maha desert resort wedding, or a glamorous rooftop wedding Dubai, we help you find a location that feels perfect for your story. We also plan sophisticated 5-star hotel weddings in Dubai, Burj Khalifa view wedding venues, and grand Emirates Palace Abu Dhabi weddings.",
      "Whether you are planning an Indian destination wedding in Dubai, an Arabic celebration, or a multicultural event, our Arabic wedding planners Dubai team brings every detail together with care. From luxury bespoke weddings UAE, venue sourcing, guest hospitality, and entertainment to UAE wedding decoration and styling and a trusted destination wedding photographer Dubai, we create a seamless celebration that feels personal, joyful, and truly unforgettable.",
    ],
    idealFor: [
      "Couples planning a destination wedding in Dubai or the UAE",
      "International couples seeking luxury venues, exceptional hospitality, and iconic settings",
      "Families hosting multi-day celebrations with guests travelling from different countries",
      "Couples wanting beach, desert, hotel, garden, yacht, or city-view wedding venues",
      "Those looking for complete travel, accommodation, guest, décor, and event coordination",
      "Couples drawn to the UAE’s growing reputation as a leading global wedding destination",
      "Anyone dreaming of a warm, elegant, and unforgettable luxury destination wedding experience",
    ],
    whyChooseTitle: "Bringing Your Dream Destination Wedding to the UAE",
    whyChoose: [
      {
        title: "Planning Made Easy from Anywhere",
        body: "Wherever you are in the world, we make planning your destination wedding in Dubai feel simple, personal, and beautifully organised.",
      },
      {
        title: "Curated Multi-Day Wedding Experiences",
        body: "From welcome dinners and pre-wedding celebrations to the ceremony and farewell brunch, we create a seamless journey for every guest.",
      },
      {
        title: "Celebrations Rooted in Your Culture",
        body: "We thoughtfully bring together your traditions, rituals, cuisine, music, and styling to create meaningful multicultural weddings in the UAE.",
      },
      {
        title: "Complete Destination Wedding Coordination",
        body: "Our team manages travel schedules, accommodation, guest communication, suppliers, production, and event flow, ensuring a joyful and stress-free celebration.",
      },
    ],
    decor: {
      heading: "Luxury Styling for Destination Weddings in Dubai",
      intro:
        "Wherever you are in the world, our team can design and create your dream destination wedding décor in Dubai or anywhere across the UAE. Every setting is thoughtfully styled to feel personal, elegant, and beautifully connected to your love story.",
      listHeading: "Our Destination Wedding Decoration Services Highlight:",
      items: [
        "Bespoke wedding décor concepts inspired by your culture, style, and celebration",
        "Grand stages, mandaps, floral arches, ceremony backdrops, and aisle styling",
        "Statement entrances, welcome installations, signage, and personalised photo areas",
        "Luxury tablescapes, centrepieces, lounge styling, and reception décor",
        "Romantic lighting, chandeliers, candles, draping, and immersive ambience",
        "Custom décor for hotels, beaches, deserts, gardens, yachts, and outdoor venues",
        "Coordinated themes, colour palettes, floral design, staging, and finishing details",
      ],
      outro:
        "From intimate celebrations to grand multicultural and multi-day weddings, we create luxury destination wedding decoration in Dubai and the UAE that feels warm, unforgettable, and uniquely yours.",
      image: "/decor/destw-d.webp",
    },
    faqs: [
      {
        q: "Can we plan our destination wedding in Dubai from overseas?",
        a: "Yes. Virtual consultations and regular updates make planning your destination wedding in Dubai simple and personal.",
      },
      {
        q: "Which UAE destination is best for our wedding style?",
        a: "We recommend Dubai, Abu Dhabi, or Ras Al Khaimah based on your vision and guest experience.",
      },
      {
        q: "Can our destination wedding include several days of celebrations?",
        a: "Absolutely. We curate welcome events, pre-wedding functions, ceremonies, receptions, and farewell gatherings.",
      },
      {
        q: "Do you create personalised wedding itineraries for guests?",
        a: "Yes. We design clear schedules covering every celebration, dress code, timing, and important guest information.",
      },
      {
        q: "Can we include traditions from our home country?",
        a: "Yes. We thoughtfully incorporate your rituals, cuisine, music, attire, and meaningful family customs.",
      },
      {
        q: "Do you source trusted local vendors for destination weddings?",
        a: "Yes. We connect couples with experienced UAE florists, caterers, entertainers, photographers, and production specialists.",
      },
      {
        q: "Can you arrange experiences around the wedding celebrations?",
        a: "Yes. We curate desert dinners, yacht gatherings, city experiences, welcome parties, and farewell brunches.",
      },
      {
        q: "How do you maintain one design theme across multiple events?",
        a: "We coordinate colours, florals, stationery, signage, styling, and production throughout your UAE destination wedding.",
      },
    ],
  },
};

export function getServiceDetail(slug: string): ServiceDetail | undefined {
  return serviceDetails[slug];
}
