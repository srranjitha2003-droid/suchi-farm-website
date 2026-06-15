// Single source of truth for site content. Edit these fields anytime.
const A = "https://customer-assets.emergentagent.com/job_family-store-hub-1/artifacts";

// Verified asset mapping (based on visual inspection):
const ASSETS = {
  mulberryField:    `${A}/wsyz8kwd_62d68a61-4714-4d8d-b3e9-a695e582ad00.JPG`,
  mulberryClose:    `${A}/s1cxgsyo_282c86da-51c9-4c82-b80e-f756da8be3bf.JPG`,
  farmBuilding:     `${A}/vv1xv8ba_b5c2207d-c486-42e8-a7e8-ad815c947ad3.JPG`,
  cocoonsPile:      `${A}/4x48nhrd_c6d9b91f-e14f-4733-9a86-2e53eab9b511.JPG`,
  cocoonsNetWide:   `${A}/7wndfjsq_87a35f11-49ed-4d41-a98b-735df3a3bbe7.JPG`,
  cocoonsNetClose:  `${A}/m8qkkmy4_da5058a8-a598-4b52-b05f-54bdcb67c5a3.JPG`,
  silkwormsOnStems: `${A}/m8dyqi6w_8955d5ef-21b2-4e3f-b423-099951297ea6.JPG`,
  silkwormsTray:    `${A}/0honqi1m_17034899-ab9a-4bab-82e1-bc04bacae899.JPG`,
  fisheryStock:     "/fishery.jpg",
  video1:           `${A}/b93v5ixx_622452ff-979a-4c7c-9bfb-3d2465e15090.MP4`,
  video2:           `${A}/06eiexh7_cd631f24-0b2b-43cb-8537-93820e32fd40.MP4`,
};

export const site = {
  business: {
    name: "Suchi Farm",
    nameKannada: "ಸುಚಿ ಫಾರಂ",
    tagline: "Rooted in Tradition, Grown with Care",
    description:
      "Suchi Farm is a family-owned agricultural venture nestled in the heart of B. Seehalli, Karnataka. Dedicated to sustainable sericulture and freshwater fish farming, we blend generations of expertise with responsible farming practices to deliver quality, purity, and trust. Every cocoon we nurture and every harvest we produce reflects our unwavering commitment to nature, heritage, and excellence. At Suchi Farm, we believe that true success grows from respecting the land, preserving tradition, and embracing sustainable practices for future generations.",
    establishedYear: "A Family Legacy",
  },
  contact: {
    phones: ["+91 96402 14052", "+91 70134 43123"],
    whatsapp: "919640214052",
    email: "scravikumar1968@gmail.com",
    address: "Suchi Farm, Silk Rearing House, B. Seehalli, Karnataka 571101",
    hours: "7:00 AM – 7:00 PM · All days of the week",
    mapsLink: "https://maps.app.goo.gl/81Z4HTzcm4U78QpP6?g_st=ic",
    embedSrc:
      "https://www.google.com/maps?q=SUCHI+FARM+Productions,+B.+Seehalli,+Karnataka+571101&output=embed&z=15",
  },
  media: ASSETS,
  nav: [
    { label: "Home", href: "#home", id: "home" },
    { label: "About", href: "#about", id: "about" },
    { label: "Services", href: "#services", id: "services" },
    { label: "Gallery", href: "#gallery", id: "gallery" },
    { label: "Contact", href: "#contact", id: "contact" },
  ],
  services: [
    {
      title: "Silk Cocoon Production",
      tag: "Sericulture",
      description:
        "Premium mulberry-fed silkworms reared in our dedicated rearing house, yielding lustrous, even-fibre cocoons graded entirely by hand — ready for serious bulk buyers.",
      image: ASSETS.cocoonsPile,
      icon: "Award",
    },
    {
      title: "Mulberry Cultivation",
      tag: "Plantation",
      description:
        "Carefully tended mulberry rows feed our silkworms — the foundation of every fine cocoon, grown on our own land without shortcuts.",
      image: ASSETS.mulberryField,
      icon: "Sprout",
    },
    {
      title: "Fishery",
      tag: "Freshwater",
      description:
        "Healthy, ethically raised freshwater fish from clean, oxygen-rich ponds on the farm — supplying local markets and discerning kitchens.",
      image: ASSETS.fisheryStock,
      icon: "Fish",
    },
  ],
  gallery: [
    {
      type: "image",
      src: ASSETS.cocoonsNetWide,
      alt: "Premium silk cocoons in rearing nets",
      span: "md:col-span-7 md:row-span-2",
    },
    {
      type: "image",
      src: ASSETS.cocoonsPile,
      alt: "Hand-graded white silk cocoons",
      span: "md:col-span-5",
    },
    {
      type: "image",
      src: ASSETS.mulberryClose,
      alt: "Mulberry plants on the farm",
      span: "md:col-span-5",
    },
    {
      type: "image",
      src: ASSETS.silkwormsTray,
      alt: "Silkworms inside the rearing house",
      span: "md:col-span-4",
    },
    {
      type: "image",
      src: ASSETS.silkwormsOnStems,
      alt: "Silkworms feeding on fresh mulberry",
      span: "md:col-span-4",
    },
    {
      type: "video",
      src: ASSETS.video2,
      poster: ASSETS.silkwormsOnStems,
      alt: "Silkworms feeding live",
      span: "md:col-span-4",
    },
  ],
  about: {
    overline: "Our Story",
    title: "A family farm, a quiet promise.",
    paragraphs: [
      "Suchi Farm began as a single mulberry grove and a handful of cocoons — a way for our family to live close to the land and pass something meaningful to the next generation.",
      "Today, we tend our own mulberry plantation, rear silkworms in a dedicated facility, hand-grade every cocoon, and raise freshwater fish in clean ponds — all with the same patience that started it all.",
    ],
    image: ASSETS.farmBuilding,
    stats: [
      { value: "2", label: "Crafts" },
      { value: "365", label: "Days a Year" },
      { value: "100%", label: "Hand-tended" },
    ],
  },
  hero: {
    image: ASSETS.mulberryField,
  },
  liveFromFarm: {
    overline: "Live from the Farm",
    title: "See it in motion.",
    description:
      "A glimpse inside the fish pond and the silkworm rearing house — the everyday rhythm of Suchi Farm.",
    videos: [ASSETS.video1, ASSETS.video2],
    posters: ["/fishery.jpg", ASSETS.silkwormsOnStems],
    captions: ["Our fish pond", "Inside the rearing house"],
  },
};
