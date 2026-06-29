// src/data/hunters.js
/**
 * Comprehensive Solo Leveling Hunters Database
 * Includes name, rank, level, image URL, description
 */

const HUNTERS = [
  // S-Rank Hunters
  {
    id: 'sung-jin-woo',
    name: 'Sung Jin-Woo',
    rank: 'S',
    level: 200,
    nation: 'South Korea',
    image: 'https://static.wikia.nocookie.net/solo-leveling/images/a/a5/Sung_Jinwoo.png',
    description: 'The Shadow Monarch. Protagonist. Can summon shadows and has incredible growth potential.'
  },
  {
    id: 'sung-suho',
    name: 'Sung Suho',
    rank: 'S',
    level: 180,
    nation: 'South Korea',
    image: 'https://static.wikia.nocookie.net/solo-leveling/images/c/c8/Sung_Suho.png',
    description: 'Sung Jin-Woo\'s younger brother. Awakened during the series.'
  },
  {
    id: 'cha-hae-in',
    name: 'Cha Hae-In',
    rank: 'S',
    level: 160,
    nation: 'South Korea',
    image: 'https://static.wikia.nocookie.net/solo-leveling/images/1/15/Cha_Hae-In.png',
    description: 'Combat specialist. Can see auras. Becomes close with Sung Jin-Woo.'
  },
  {
    id: 'baek-yoonho',
    name: 'Baek Yoonho',
    rank: 'S',
    level: 155,
    nation: 'South Korea',
    image: 'https://static.wikia.nocookie.net/solo-leveling/images/8/8f/Baek_Yoonho.png',
    description: 'Guild master. Fire-type awakened. Leader of White Tiger Guild.'
  },
  {
    id: 'thomas-andre',
    name: 'Thomas Andre',
    rank: 'S',
    level: 165,
    nation: 'United States',
    image: 'https://static.wikia.nocookie.net/solo-leveling/images/2/27/Thomas_Andre.png',
    description: 'American S-Rank hunter. Powerful combat abilities.'
  },
  {
    id: 'goh-gunhee',
    name: 'Go Gunhee',
    rank: 'S',
    level: 170,
    nation: 'South Korea',
    image: 'https://static.wikia.nocookie.net/solo-leveling/images/9/9c/Go_Gunhee.png',
    description: 'Former chairman of Korean Hunters Association. Legendary S-Rank.'
  },
  {
    id: 'christopher-reid',
    name: 'Christopher Reid',
    rank: 'S',
    level: 160,
    nation: 'United States',
    image: 'https://static.wikia.nocookie.net/solo-leveling/images/f/ff/Christopher_Reid.png',
    description: 'American S-Rank. Master of lightning abilities.'
  },
  {
    id: 'hwang-dongsoo',
    name: 'Hwang Dongsoo',
    rank: 'S',
    level: 158,
    nation: 'South Korea',
    image: 'https://static.wikia.nocookie.net/solo-leveling/images/0/0d/Hwang_Dongsoo.png',
    description: 'Nationalist hunter. Wields powerful weapons and abilities.'
  },

  // A-Rank Hunters
  {
    id: 'min-byunggu',
    name: 'Min Byunggu',
    rank: 'A',
    level: 120,
    nation: 'South Korea',
    image: 'https://static.wikia.nocookie.net/solo-leveling/images/3/3f/Min_Byunggu.png',
    description: 'Leader of Cartenon Guild. Spear user.'
  },
  {
    id: 'park-jong-soo',
    name: 'Park Jong-Soo',
    rank: 'A',
    level: 115,
    nation: 'South Korea',
    image: 'https://static.wikia.nocookie.net/solo-leveling/images/7/79/Park_Jong-Soo.png',
    description: 'Member of White Tiger Guild. Ice ability user.'
  },
  {
    id: 'min-hye-jin',
    name: 'Min Hye-Jin',
    rank: 'A',
    level: 125,
    nation: 'South Korea',
    image: 'https://static.wikia.nocookie.net/solo-leveling/images/d/d8/Min_Hye-Jin.png',
    description: 'Awakened hunter. Can use ice magic. Close associate of Sung Jin-Woo.'
  },
  {
    id: 'choi-jong-woo',
    name: 'Choi Jong-Woo',
    rank: 'A',
    level: 118,
    nation: 'South Korea',
    image: 'https://static.wikia.nocookie.net/solo-leveling/images/8/8a/Choi_Jong-Woo.png',
    description: 'Healer. Support-type awakened.'
  },

  // B-Rank Hunters
  {
    id: 'kang-taesheng',
    name: 'Kang Taesheng',
    rank: 'B',
    level: 80,
    nation: 'South Korea',
    image: 'https://static.wikia.nocookie.net/solo-leveling/images/e/e3/Kang_Taesheng.png',
    description: 'Early encounter. Learns about gates and dungeons.'
  },
  {
    id: 'oh-junbum',
    name: 'Oh Junbum',
    rank: 'B',
    level: 85,
    nation: 'South Korea',
    image: 'https://static.wikia.nocookie.net/solo-leveling/images/5/54/Oh_Junbum.png',
    description: 'Guild member. Spear fighter.'
  },

  // C-Rank Hunters
  {
    id: 'sung-jinwoo-c-rank',
    name: 'Sung Jin-Woo (Early)',
    rank: 'C',
    level: 10,
    nation: 'South Korea',
    image: 'https://static.wikia.nocookie.net/solo-leveling/images/4/4e/Young_Jinwoo.png',
    description: 'Sung Jin-Woo before his powers awakened. Weakest of all hunters.'
  },
  {
    id: 'park-hoon',
    name: 'Park Hoon',
    rank: 'C',
    level: 45,
    nation: 'South Korea',
    image: 'https://static.wikia.nocookie.net/solo-leveling/images/1/1f/Park_Hoon.png',
    description: 'C-Rank hunter. Guild member.'
  },
  {
    id: 'seo-jiwoo',
    name: 'Seo Jiwoo',
    rank: 'C',
    level: 50,
    nation: 'South Korea',
    image: 'https://static.wikia.nocookie.net/solo-leveling/images/3/3c/Seo_Jiwoo.png',
    description: 'C-Rank hunter. Works at a guild.'
  },

  // E-Rank Hunters (Weakest)
  {
    id: 'common-e-rank',
    name: 'Common E-Rank',
    rank: 'E',
    level: 1,
    nation: 'Various',
    image: 'https://static.wikia.nocookie.net/solo-leveling/images/f/f8/E_Rank_Hunter.png',
    description: 'Weakest tier of hunters. Often form parties for dungeons.'
  }
];

module.exports = HUNTERS;
