// Single source of truth for site content. Edit these fields anytime.
export const site = {
  business: {
    name: "Suchi Farm",
    tagline: "Nurturing Heritage, Cultivating Purity",
    description:
      "A family legacy crafting premium silk cocoons, raising responsible fishery, and pioneering sustainable aquaculture — rooted in tradition, refined for today.",
    establishedYear: "Est. Two Generations",
  },
  contact: {
    phone: "+91 00000 00000",
    email: "hello@suchifarm.in",
    address: "SUCHI Farm Productions, B. Seehalli, Karnataka 571101",
    hours: "Mon – Sat · 8:00 AM – 6:00 PM",
    mapsLink: "https://maps.app.goo.gl/81Z4HTzcm4U78QpP6?g_st=ic",
    embedSrc:
      "https://www.google.com/maps?q=SUCHI+FARM+Productions,+B.+Seehalli,+Karnataka+571101&output=embed&z=15",
  },
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
        "Premium mulberry-fed silkworms yielding lustrous, even-fibre cocoons. Every batch is hand-graded to honour the craft passed down through our family.",
      image:
        "https://images.unsplash.com/photo-1677142707414-e6ce16085a9a?w=1200&q=80",
      icon: "Leaf",
    },
    {
      title: "Fishery",
      tag: "Freshwater",
      description:
        "Healthy, ethically raised fish from clean, oxygen-rich ponds — supplying local markets and discerning kitchens with truly fresh produce.",
      image:
        "https://images.unsplash.com/photo-1541441056316-443fff347c40?w=1200&q=80",
      icon: "Fish",
    },
    {
      title: "Aquaculture",
      tag: "Sustainable",
      description:
        "Modern aquatic farming integrated with natural ecosystems — balancing yield with the health of water, soil, and the families that depend on them.",
      image:
        "https://images.unsplash.com/photo-1766744489655-328ec3d4f417?w=1200&q=80",
      icon: "Droplets",
    },
  ],
  gallery: [
    {
      src: "https://images.unsplash.com/photo-1580133750060-05e667fe0318?w=1200&q=80",
      alt: "Silk cocoons close-up",
      span: "md:col-span-7 md:row-span-2",
    },
    {
      src: "https://images.unsplash.com/photo-1727696726111-b20cfcb027bb?w=900&q=80",
      alt: "Mulberry leaves",
      span: "md:col-span-5",
    },
    {
      src: "https://images.unsplash.com/photo-1528164604878-28ea0fb4f462?w=900&q=80",
      alt: "Fishery pond",
      span: "md:col-span-5",
    },
    {
      src: "https://images.unsplash.com/photo-1654526645468-9ae1cde48fe2?w=900&q=80",
      alt: "Aquaculture tanks",
      span: "md:col-span-6",
    },
    {
      src: "https://images.unsplash.com/photo-1533757879476-8f4a3cb1ae4b?w=900&q=80",
      alt: "Farm landscape",
      span: "md:col-span-6",
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
        "Their aquaculture practices are a model for sustainability. Every order arrives fresh, every time.",
      author: "Anita Reddy",
      role: "Restaurateur, Hyderabad",
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
      "Today, we tend silkworms, ponds and aquaculture beds across our farm with the same patience that started it all. Nothing here is rushed. Nothing is ever ordinary.",
    ],
    image:
      "https://images.unsplash.com/photo-1617490439585-b855defbe904?w=1200&q=80",
    stats: [
      { value: "2", label: "Generations" },
      { value: "3", label: "Disciplines" },
      { value: "100%", label: "Family-run" },
    ],
  },
};
