export const site = {
  name: "里山学校やまびと",
  shortName: "やまびと",
  tagline: "里山で、遊ぶ。自然から、学ぶ。",
  description:
    "福岡県筑紫野市の里山で、親子アウトドア、野草ハイキング＋クッキング、キッズキャンプ、登山教室、里山ホームステイを行う里山学校やまびと。",
  phone: {
    display: "090-1166-5034",
    href: "tel:+819011665034",
  },
  address: "福岡県筑紫野市平等寺705-1",
  access: "JR二日市駅から車で20分",
  hours: "土日祝 10:00〜17:00",
  closed: "月曜日〜木曜日",
  seats: "12席",
  socials: [
    {
      name: "公式サイト",
      handle: "yamabito.club",
      href: "https://yamabito.club/",
      icon: "website",
    },
    {
      name: "Instagram",
      handle: "@satoyamagakko",
      href: "https://www.instagram.com/satoyamagakko?igsh=dWt5ZmNpeDI1N2Fy&utm_source=qr",
      icon: "instagram",
    },
    {
      name: "LINE公式",
      handle: "LINEで問い合わせる",
      href: "https://lin.ee/tKKA110",
      icon: "line",
    },
  ],
  navigation: [
    { label: "やまびとについて", href: "#about" },
    { label: "体験メニュー", href: "#programs" },
    { label: "里山の時間", href: "#scenes" },
    { label: "基本情報", href: "#information" },
  ],
} as const;

export const programs = [
  {
    number: "01",
    title: "親子アウトドア",
    description: "親子で里山へ。自然の中で過ごす時間を、一緒に楽しむプログラムです。",
    image: "parent-child-outdoor",
  },
  {
    number: "02",
    title: "野草ハイキング＋クッキング",
    description: "野草を探しながら歩き、自然の恵みをクッキングへつなげます。",
    image: "outdoor-cooking",
  },
  {
    number: "03",
    title: "キッズキャンプ",
    description: "子どもたちが自然の中で過ごす、里山のキャンププログラムです。",
    image: "forest-camp",
  },
  {
    number: "04",
    title: "登山教室",
    description: "森や沢の自然にふれながら、山歩きを楽しむための登山教室です。",
    image: "stream-learning",
  },
  {
    number: "05",
    title: "里山リトリート",
    description: "里山の風景や暮らしにふれる、滞在型のプログラムです。",
    image: "school-house-portrait",
  },
] as const;
