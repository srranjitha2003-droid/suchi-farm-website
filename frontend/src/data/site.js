// Single source of truth for site content. Edit these fields anytime.
const A = "https://customer-assets.emergentagent.com/job_family-store-hub-1/artifacts";

// Verified asset mapping (based on visual inspection):
const ASSETS = {
  mulberryField:    `${A}/wsyz8kwd_62d68a61-4714-4d8d-b3e9-a695e582ad00.JPG`, // green mulberry plantation rows
  farmBuilding:     `${A}/vv1xv8ba_b5c2207d-c486-42e8-a7e8-ad815c947ad3.JPG`, // farm entrance w/ Kannada signboard
  cocoonsPile:      `${A}/4x48nhrd_c6d9b91f-e14f-4733-9a86-2e53eab9b511.JPG`, // pile of white silk cocoons
  cocoonsNetWide:   `${A}/7wndfjsq_87a35f11-49ed-4d41-a98b-735df3a3bbe7.JPG`, // cocoons in orange netting (wide)
  cocoonsNetClose:  `${A}/m8qkkmy4_da5058a8-a598-4b52-b05f-54bdcb67c5a3.JPG`, // cocoons in orange netting (close)
  silkwormsOnStems: `${A}/m8dyqi6w_8955d5ef-21b2-4e3f-b423-099951297ea6.JPG`, // silkworms feeding on mulberry stems
  silkwormsTray:    `${A}/0honqi1m_17034899-ab9a-4bab-82e1-bc04bacae899.JPG`, // silkworms in tray, sunlit
  video1:           `${A}/b93v5ixx_622452ff-979a-4c7c-9bfb-3d2465e15090.MP4`,
  video2:           `${A}/06eiexh7_cd631f24-0b2b-43cb-8537-93820e32fd40.MP4`,
};

export const site = {
  business: {
    name: "Suchi Farm",
    nameKannada: "ಸುಚಿ ಫಾರಂ",
    tagline: "Nurturing Heritage, Cultivating Purity",
    description:
      "A family legacy crafting premium silk cocoons from our own mulberry plantation in B. Seehalli, Karnataka — rooted in tradition, refined for today.",
    establishedYear: "A Family Legacy",
  },
  contact: {
    phones: ["+91 96402 14052", "+91 70134 43123"],
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
    { label: "Testimonials", href: "#testimonials", id: "testimonials" },
    { label: "Contact", href: "#contact", id: "contact" },
  ],
  services: [
    {
      title: "Silk Cocoon Production",
      tag: "Sericulture",
      description:
        "Premium mulberry-fed silkworms reared in our dedicated rearing house, yielding lustrous, even-fibre cocoons graded entirely by hand.",
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
      title: "Cocoon Grading",
      tag: "Hand-graded",
      description:
        "Every cocoon is sorted by hand on traditional racks and netting — only the finest are passed on to buyers and weavers.",
      image: ASSETS.cocoonsNetWide,
      icon: "Leaf",
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
      src: ASSETS.mulberryField,
      alt: "Our mulberry plantation",
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
      src: ASSETS.video1,
      poster: ASSETS.cocoonsNetClose,
      alt: "Inside the rearing house",
      span: "md:col-span-4",
    },
  ],
  testimonials: [
    {
      quote:
        "The finest silk cocoons we've ever sourced. Suchi Farm's dedication to quality and tradition is genuinely unmatched.",
      author: "R. Venkatesh",
      role: "Silk Weaver, Kanchipuram",
    },
    {
      quote:
        "Consistent grade, lustrous fibre, and a family you can actually trust. Hard to find these days.",
      author: "Anita Reddy",
      role: "Textile Buyer, Bengaluru",
    },
    {
      quote:
        "A rare blend of warmth, integrity, and craft. Working with the Suchi family feels like working with friends.",
      author: "Kiran Rao",
      role: "Wholesale Buyer",
    },
  ],
  about: {
    overline: "Our Story",
    title: "A family farm, a quiet promise.",
    paragraphs: [
      "Suchi Farm began as a single mulberry grove and a handful of cocoons — a way for our family to live close to the land and pass something meaningful to the next generation.",
      "Today, we tend our own mulberry plantation, rear silkworms in a dedicated facility, and hand-grade every cocoon with the same patience that started it all. Nothing here is rushed.",
    ],
    image: ASSETS.farmBuilding,
    stats: [
      { value: "3", label: "Crafts" },
      { value: "365", label: "Days a Year" },
      { value: "100%", label: "Hand-tended" },
    ],
  },
  hero: {
    image: ASSETS.mulberryField,
  },
};
