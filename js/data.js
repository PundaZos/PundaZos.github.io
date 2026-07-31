// Where character art lives. Both folders hold a same-named file per
// character (matched by `imageKey`, not the display `name`, since names
// can contain spaces/punctuation that aren't great for filenames).
const CHARACTER_IMAGE_CONFIG = {
  halfBodyArtDir: 'db/characters/HalfBodyArt/',
  closedUpIconDir: 'db/characters/ClosedUpIcon/',
  extension: '.png'
};

// ============================================================
// ROSTER DATA — this is the "backend". Add, edit, or remove
// characters here directly.
//   imageKey        : filename (no extension) shared by both art folders —
//                     matches `name` exactly, spaces included
//   starterGame / calculation / bossMaxxing : 'S' | 'A' | 'B' | 'C' | 'D'
//   investmentCost : { tier: 'Low' | 'Medium' | 'High', requirement: string | null }
//   awakenValue     : 'Must' | 'High' | 'Average' | 'Low' | 'Very Low'
//   overallGrade    : 'S' | 'A' | 'B' | 'C' | 'D' — the final Gacha Value
//                     verdict. Set this directly; it is NOT calculated
//                     from the four factors above.
//   investmentCostNote / awakenValueNote / briefReview : shown when a
//   character's row is expanded on the Characters tab.
// The website only reads this list; it has no editing UI at all.
// ============================================================
const CHARACTER_ROSTER = [
  {
    name: 'Nicola',
    imageKey: 'Nicola',
    starterGame: 'C', calculation: 'A', bossMaxxing: 'S',
    investmentCost: { tier: 'High', requirement: null },
    awakenValue: 'Low',
    overallGrade: 'D',
    investmentCostNote: 'requires specific gear/affixes and resonance level',
    awakenValueNote: "She needs A2 to really become handy, and she isn't a versatile pick outside of Electric DPS.",
    briefReview: 'Her stats are strong and her kit is solid once built, but the sheer cost required to get her there is steep.'
  },
  {
    name: 'Caroline',
    imageKey: 'Caroline',
    starterGame: 'D', calculation: 'S', bossMaxxing: 'S',
    investmentCost: { tier: 'Low', requirement: null },
    awakenValue: 'High',
    overallGrade: 'A',
    investmentCostNote: 'pure support role',
    awakenValueNote: 'Her A1 makes her versatile, can be a great support for many teams.',
    briefReview: 'Cost Regen support for Electric teams in any awaken. Strong versatile draw support unit at A1.'
  },
  {
    name: 'Tennie',
    imageKey: 'Tennie',
    starterGame: 'B', calculation: 'A', bossMaxxing: 'B',
    investmentCost: { tier: 'Low', requirement: null },
    awakenValue: 'Medium',
    overallGrade: 'B',
    investmentCostNote: 'pure support role',
    awakenValueNote: 'outside of being a teammate for Connor, she is easily replaceable.',
    briefReview: "For Connor, she's practically an indispensable teammate. She's an excellent freezer in the Nayuta-Aoba Shuffle Team. However, under high pressure, the investment in her is very costly. Results her return on investment is low, making it difficult to develop her into a truly outstanding character."
  },
  {
    name: 'Stella',
    imageKey: 'Stella',
    starterGame: 'S', calculation: 'S', bossMaxxing: 'B',
    investmentCost: { tier: 'High', requirement: null },
    awakenValue: 'High',
    overallGrade: 'S',
    investmentCostNote: 'Requires investment in survivability',
    awakenValueNote: 'it is profitable even if you lose the 50/50 before her A5.',
    briefReview: 'A versatile deck rotation unit. While her performance has declined somewhat in the current meta due to unique damage buffs to each support unit, she remains an excellent choice for relieving early-game pressure and balancing the rotation.'
  },
  {
    name: 'Anfiya',
    imageKey: 'Anfiya',
    starterGame: 'B', calculation: 'S', bossMaxxing: 'A',
    investmentCost: { tier: 'Low', requirement: null },
    awakenValue: 'High',
    overallGrade: 'A',
    investmentCostNote: 'pure support role',
    awakenValueNote: 'a strong, versatile control unit; worth pulling to A5 for Basic-Attack teams.',
    briefReview: "Very strong CC (Crowd Control) support, can play Perma-Coffin when she's the leader."
  },
  {
    name: 'Pelota',
    imageKey: 'Pelota',
    starterGame: 'D', calculation: 'A', bossMaxxing: 'S',
    investmentCost: { tier: 'High', requirement: null },
    awakenValue: 'Low',
    overallGrade: 'D',
    investmentCostNote: 'used as a sub-carry',
    awakenValueNote: "pure Electric Team Support; if subbed into other teams it's only for fun, A1 provides Final DMG reduction, but not a must-pull.",
    briefReview: 'Pelota can give Nicola a huge survival advantage, and right now Nicola is pretty much the only one who can proc her kit properly.'
  },
  {
    name: 'Hayabusa',
    imageKey: 'Hayabusa',
    starterGame: 'A', calculation: 'S', bossMaxxing: 'S',
    investmentCost: { tier: 'High', requirement: null },
    awakenValue: 'Medium',
    overallGrade: 'A',
    investmentCostNote: 'requires gear affix and more skill level',
    awakenValueNote: 'usable from A2. A4 makes him insanely broken, versatile support.',
    briefReview: 'Broken Support at A4 — 40% Final DMG Boost makes him extremely broken for Boss Maxxing. True versatile pick, though he only fully comes handy at A2 and full strength at A4.'
  },
  {
    name: 'Arina',
    imageKey: 'Arina',
    starterGame: 'B', calculation: 'A', bossMaxxing: 'C',
    investmentCost: { tier: 'Average', requirement: null },
    awakenValue: 'Low',
    overallGrade: 'D',
    investmentCostNote: 'healing is tied to damage dealt',
    awakenValueNote: 'stats are lacking, becomes usable at second awakening, fifth awakening improves versatility.',
    briefReview: 'She was introduced as a support character in the early stages of the game, designed to relieve stress, but has gradually faded from meta — no meta team can effectively utilize her.'
  },
  {
    name: 'Margiela',
    imageKey: 'Margiela',
    starterGame: 'B', calculation: 'B', bossMaxxing: 'C',
    investmentCost: { tier: 'Average', requirement: null },
    awakenValue: 'Low',
    overallGrade: 'D',
    investmentCostNote: 'standard gear is sufficient',
    awakenValueNote: 'low awaken is just bad, tied to the Shadowcraft system at A2.',
    briefReview: 'She shone brightly in the purple card team, You could just directly get her SP version. Unless you particularly like Margiela, you can add her to the Margiela The Stargazer team.'
  },
  {
    name: 'Wensheng',
    imageKey: 'Wensheng',
    starterGame: 'B', calculation: 'B', bossMaxxing: 'D',
    investmentCost: { tier: 'Average', requirement: null },
    awakenValue: 'Low',
    overallGrade: 'D',
    investmentCostNote: 'standard gear is sufficient',
    awakenValueNote: 'not much use.',
    briefReview: 'No record found, E Tier guy.'
  },
  {
    name: 'Ren',
    imageKey: 'Ren',
    starterGame: 'D', calculation: 'B', bossMaxxing: 'S',
    investmentCost: { tier: 'High', requirement: null },
    awakenValue: 'Low',
    overallGrade: 'D',
    investmentCostNote: 'requires specific gear affix and skill level',
    awakenValueNote: 'a pure Boss Maxxing unit with no versatility. Only recommend A0 or A5.',
    briefReview: 'If you want to reduce fatigue by 1 per ram hit, then pulling for A0 Ren is enough. If you want a beast that maximizes Boss Maxxing, then pull for A5 Ren. Otherwise, pulling for Ren is not recommended.'
  },
  {
    name: 'Margiela The Stargazer',
    imageKey: 'Margiela The Stargazer',
    starterGame: 'S', calculation: 'S', bossMaxxing: 'S',
    investmentCost: { tier: 'Average', requirement: null },
    awakenValue: 'Very High',
    overallGrade: 'S',
    investmentCostNote: 'big gap between floor and ceiling',
    awakenValueNote: 'fully functions at A0, extremely versatile, hard to replace as a Revenrengy-Nova damage dealer.',
    briefReview: 'The perfect finale to the Revenrengy-Nova system. As a support or sub-DPS, she is versatile and powerful. As a main DPS, her wave change handling ability is equally impressive. From Calculation to Boss Maxxing, she is virtually omnipotent.'
  },
  {
    name: 'Masaki',
    imageKey: 'Masaki',
    starterGame: 'B', calculation: 'A', bossMaxxing: 'S',
    investmentCost: { tier: 'High', requirement: null },
    awakenValue: 'High',
    overallGrade: 'A',
    investmentCostNote: 'needs dedicated DEF-affix boost',
    awakenValueNote: 'decent versatility, can form a small Familiar team alongside Olivien.',
    briefReview: 'Masaki has a well-designed skill set. Her Boss Maxxing potential is very high, but also highly variable. In addition, she can provide a solid boost to any unit that relies on leader skills or card effects.'
  },
  {
    name: 'Dorothy',
    imageKey: 'Dorothy',
    starterGame: 'A', calculation: 'A', bossMaxxing: 'B',
    investmentCost: { tier: 'High', requirement: null },
    awakenValue: 'Medium',
    overallGrade: 'C',
    investmentCostNote: 'requires specific gear/affixes and resonance',
    awakenValueNote: "has very flexible teammate choice, F2P have their own way to run her, but one of her teamate Lycagia doesn't really pop off until A4, which is expensive to reach.",
    briefReview: 'A discard-bomb DPS. Frequently catches friendly fire from mechanics that target Nayuta.'
  },
  {
    name: 'Ilona',
    imageKey: 'Ilona',
    starterGame: 'D', calculation: 'C', bossMaxxing: 'A',
    investmentCost: { tier: 'Average', requirement: null },
    awakenValue: 'Low',
    overallGrade: 'D',
    investmentCostNote: 'standard gear is sufficient',
    awakenValueNote: 'She has a certain versatility, but her skill set has flaws and cannot be optimally configured. Moreover, she needs a high awakening level to unleash her full potential.',
    briefReview: "She benefits from a lot of buffs and synergies but has always been underwhelming. If you're not a fan you basically won't play her. VA is Yui Ogura, for what it's worth."
  },
  {
    name: 'Shizuru The Summer Chaser',
    imageKey: 'Shizuru The Summer Chaser',
    starterGame: 'B', calculation: 'S', bossMaxxing: 'S',
    investmentCost: { tier: 'Average', requirement: null },
    awakenValue: 'Very High',
    overallGrade: 'S',
    investmentCostNote: 'big gap between floor and ceiling',
    awakenValueNote: 'Shizuru The Summer Chaser possesses powerful card-drawing capabilities and can also deal considerable damage. However, it essentially requires A2 to be effective.',
    briefReview: "She can heal, draw cards, boost ATK, inflict freeze result control effects, and deal considerable personal damage — you won't regret drawing her, but her abilities are limited."
  },
  /* HIDDEN (uncomment this block to bring Komugi back)
  {
    name: 'Komugi',
    imageKey: 'Komugi',
    starterGame: 'C', calculation: 'C', bossMaxxing: 'A',
    investmentCost: { tier: 'Average', requirement: null },
    awakenValue: 'Low',
    overallGrade: 'D',
    investmentCostNote: 'standard gear is sufficient',
    awakenValueNote: "Currently, aside from serving as Dorothy's exclusive support, no suitable playstyle for her has been found.",
    briefReview: "A max-level Wheat can push Dorothy's Boss Maxxing to over 20 billion damage—but basically nobody uses this lineup (it's too expensive (゜皿。))."
  },
  */
  {
    name: 'Paladi',
    imageKey: 'Paladi',
    starterGame: 'A', calculation: 'A', bossMaxxing: 'S',
    investmentCost: { tier: 'Average', requirement: null },
    awakenValue: 'Medium',
    overallGrade: 'C',
    investmentCostNote: 'standard gear is sufficient',
    awakenValueNote: 'At low awakening levels, she is merely a damage reduction support. The discard bomb synergy effect only takes effect at A2, and her A5 (50% Final Damage boost) is expensive.',
    briefReview: 'Paladi can also provide enhanced attack damage reduction support. Although somewhat controversial—"It’s okay with her or without her."—her support skills do significantly increase the difficulty of the prison level. She can serve as the Leader of all A5 character Wildfire team.'
  },
  {
    name: 'Lycagia',
    imageKey: 'Lycagia',
    starterGame: 'C', calculation: 'S', bossMaxxing: 'S',
    investmentCost: { tier: 'Average', requirement: null },
    awakenValue: 'Medium',
    overallGrade: 'C',
    investmentCostNote: 'standard gear is sufficient',
    awakenValueNote: "Usable from A2 onwards, and A4 is the key for unlocking damage reduction. It's not very cost-effective, but if you're playing a discard bomb build, you absolutely need to draw it.",
    briefReview: "This rank assumes A4 by default — at A0 he's worse than an SR."
  },
  {
    name: 'Shire',
    imageKey: 'Shire',
    starterGame: 'S', calculation: 'S', bossMaxxing: 'B',
    investmentCost: { tier: 'High', requirement: null },
    awakenValue: 'High',
    overallGrade: 'B',
    investmentCostNote: 'requires specific gear/affixes and resonance',
    awakenValueNote: 'usable at A0, flexible team comps.',
    briefReview: "She is a very powerful character with a wide range of teammates, but her stats are starting to look somewhat outdated. Generally, when she teams up with Shizuru The Summer Chaser, Shizuru's damage will be higher than Shire's."
  },
  {
    name: 'Connor',
    imageKey: 'Connor',
    starterGame: 'A', calculation: 'A', bossMaxxing: 'C',
    investmentCost: { tier: 'Average', requirement: null },
    awakenValue: 'Medium',
    overallGrade: 'C',
    investmentCostNote: 'standard gear is sufficient',
    awakenValueNote: 'usable at A0, but her stats fall short.',
    briefReview: 'Almost entirely on Tennie. Her strengths lie in her flexible team composition and low-cost damage reduction, and her blue cards are highly efficient—her weakness is that her stats are outdated. Frankly, her current stats are too weak.'
  },
  {
    name: 'Charlotte',
    imageKey: 'Charlotte',
    starterGame: 'A', calculation: 'A', bossMaxxing: 'A',
    investmentCost: { tier: 'High', requirement: null },
    awakenValue: 'Low',
    overallGrade: 'D',
    investmentCostNote: 'requires specific gear/affixes and resonance',
    awakenValueNote: 'technically she can be used at A2 and above, but below A5 are relatively difficult to use in the meta.',
    briefReview: "Her A5 strength is roughly equivalent to A0 Ushana. Thanks to the powerful Mecha Armor, her damage reduction has slightly caught up with the meta, making her viable to play. But she's still not recommended for use. Currently, only her die-hard fans are quietly using her, and no one is complaining. With future-sight, I say wait for her SP-version."
  },
  {
    name: 'Verlaine',
    imageKey: 'Verlaine',
    starterGame: 'B', calculation: 'C', bossMaxxing: 'D',
    investmentCost: { tier: 'Average', requirement: null },
    awakenValue: 'Low',
    overallGrade: 'D',
    investmentCostNote: 'standard gear is sufficient',
    awakenValueNote: 'basically no place in the current meta, can form familiar team with Masaki or Reeva but its not recommended.',
    briefReview: "This is a character with an unclear role and relatively low stats. Unless she's reworked, she's unlikely to be in any meta teams. Currently, her only role is to provide extra familiar for Reeva."
  },
  {
    name: 'Olivien',
    imageKey: 'Olivien',
    starterGame: 'A', calculation: 'A', bossMaxxing: 'S',
    investmentCost: { tier: 'Low', requirement: null },
    awakenValue: 'High',
    overallGrade: 'B',
    investmentCostNote: 'pure support role',
    awakenValueNote: 'kit is complete at A0, great card quality on her own, and strong versatility.',
    briefReview: "Mainly a Final DMG Boost support with an independent multiplier that's hard to dilute. Her DMG reduction is more of a bonus. Must-pull if you're prepping a Familiar team."
  },
  /* HIDDEN (uncomment this block to bring Reeva back)
  {
    name: 'Reeva',
    imageKey: 'Reeva',
    starterGame: 'C', calculation: 'C', bossMaxxing: 'A',
    investmentCost: { tier: 'Average', requirement: null },
    awakenValue: 'Low',
    overallGrade: 'D',
    investmentCostNote: 'standard gear is sufficient',
    awakenValueNote: "a Boss Maxxing-focused unit for cycle-heavy content, and her stats still aren't strong enough.",
    briefReview: "Leans on kit synergy over raw numbers; skip her unless you're a big fan (not worth pulling for waifu points). Her discard-deck mechanic looks promising though — worth watching for future support."
  },
  */
  /* HIDDEN (uncomment this block to bring Ikara back)
  {
    name: 'Ikara',
    imageKey: 'Ikara',
    starterGame: 'A', calculation: 'A', bossMaxxing: 'A',
    investmentCost: { tier: 'High', requirement: null },
    awakenValue: 'Medium',
    overallGrade: 'A',
    investmentCostNote: 'requires specific gear/affixes and resonance',
    awakenValueNote: "several important awaken breakpoints, but since her real value is 'future potential' (current strength is lacking), value for money isn't great right now. Her Life Skill is excellent though.",
    briefReview: 'The first Dragon-system character, with some genuinely fresh design ideas — the Mundus Empire update will likely build new units around this system, but for now her stats are just middling. Her art is gorgeous though.'
  },
  */
  {
    name: 'Katas',
    imageKey: 'Katas',
    starterGame: 'C', calculation: 'C', bossMaxxing: 'C',
    investmentCost: { tier: 'Average', requirement: null },
    awakenValue: 'Medium',
    overallGrade: 'D',
    investmentCostNote: 'standard gear is sufficient',
    awakenValueNote: 'usable as a Energy Bubblegum cost support unit at A0.',
    briefReview: 'Can be Follow-Up ATK Team Leader. Compared to Paladi, her advantage lies in her better performance in low-awakening state, but as a main DPS character, she is outdated. Looking forward to the SP character.'
  },
  {
    name: 'Joshua',
    imageKey: 'Joshua',
    starterGame: 'A', calculation: 'A', bossMaxxing: 'C',
    investmentCost: { tier: 'High', requirement: null },
    awakenValue: 'High',
    overallGrade: 'C',
    investmentCostNote: 'requires specific gear/affixes and resonance',
    awakenValueNote: 'usable right from A0.',
    briefReview: "Joshua is a viable Cost Regen pick for a secondary Revenrengy Card team, though Joshua's kit does not have high priority with Chloe nor Gears for Reverengy. Both his Shadowcraft and Demon-God builds have been phased out."
  },
  {
    name: 'Dustin',
    imageKey: 'Dustin',
    starterGame: 'B', calculation: 'B', bossMaxxing: 'C',
    investmentCost: { tier: 'Average', requirement: null },
    awakenValue: 'Medium',
    overallGrade: 'B',
    investmentCostNote: 'standard gear is sufficient',
    awakenValueNote: 'part of his kit is locked behind awakens.',
    briefReview: "A very strong red-card discard Sub-Carry thanks to the 'Retraction Bomb MK 3' mechanic. Now his stats fall short, and his lack of draw support is an increasingly glaring weakness."
  },
  {
    name: 'Nayuta',
    imageKey: 'Nayuta',
    starterGame: 'A', calculation: 'S', bossMaxxing: 'S',
    investmentCost: { tier: 'Average', requirement: null },
    awakenValue: 'Very High',
    overallGrade: 'S',
    investmentCostNote: 'big gap between floor and ceiling',
    awakenValueNote: 'kit is complete at A0.',
    briefReview: 'Is Nayuta a design failure? The Standard God!?'
  },
  {
    name: 'Sommer',
    imageKey: 'Sommer',
    starterGame: 'A', calculation: 'A', bossMaxxing: 'C',
    investmentCost: { tier: 'Average', requirement: null },
    awakenValue: 'High',
    overallGrade: 'B',
    investmentCostNote: 'standard gear is sufficient',
    awakenValueNote: 'kit is complete at A0, performs great in the early game, flexible team-building, but easily replaceable.',
    briefReview: 'Stat Monster. Her only real advantage right now is her strong early-game adaptability.'
  },
  {
    name: 'Lissandra',
    imageKey: 'Lissandra',
    starterGame: 'A', calculation: 'A', bossMaxxing: 'C',
    investmentCost: { tier: 'Average', requirement: null },
    awakenValue: 'High',
    overallGrade: 'C',
    investmentCostNote: 'standard gear is sufficient',
    awakenValueNote: 'kit is complete at A0, an excellent Shadowcraft generator, and her yellow-card experience is solid too.',
    briefReview: 'An early-game powerhouse whose ult is easy to charge and comes with self-heal and crowd control stun. Her cards are refined and efficient — one card can clear Purple Card objectives 5 times over. Quite versatile.'
  },
  {
    name: 'Suen',
    imageKey: 'Suen',
    starterGame: 'B', calculation: 'C', bossMaxxing: 'D',
    investmentCost: { tier: 'High', requirement: null },
    awakenValue: 'Low',
    overallGrade: 'D',
    investmentCostNote: 'requires specific gear/affixes and resonance',
    awakenValueNote: 'A high-pressure survival character that can be used from A2 onwards, but only becomes fully effective in A5, and her actual performance is already behind the current Meta.',
    briefReview: "At A5 she used to be a piece of the 'Infinite Demon God' combo. Now, falling behind across the board on kit and numbers, she has no place in the meta and only shows up in gimmick teams."
  },
  {
    name: 'Jalhay',
    imageKey: 'Jalhay',
    starterGame: 'B', calculation: 'S', bossMaxxing: 'A',
    investmentCost: { tier: 'Average', requirement: null },
    awakenValue: 'High',
    overallGrade: 'A',
    investmentCostNote: 'standard gear is sufficient',
    awakenValueNote: 'Although she can only become a qualified main DPS at A2, she is already very strong at A0.',
    briefReview: "An ATK-down unit for the Purple Card system. The legendary 'Perception' allow you draw a full hand with 3 cost, and her own three cards are basically god-tier hand-compression, and her shuffle refunds cost too. Very high-quality, versatile unit. Her weakness is relatively weak DMG Boost utility. After the change, her kits stays the same until we gets more Psychic Characters."
  },
  {
    name: 'Ithos',
    imageKey: 'Ithos',
    starterGame: 'S', calculation: 'S', bossMaxxing: 'D',
    investmentCost: { tier: 'Low', requirement: null },
    awakenValue: 'High',
    overallGrade: 'A',
    investmentCostNote: 'pure support role',
    awakenValueNote: 'kit is complete at A0, extremely strong versatility.',
    briefReview: 'Ithos is a top-tier healer, he dominates the healing meta—friendly to F2P players and DMG-reduction powerhouse. His weakness lies in providing almost no offensive buffs, therefore his pick rate is expected to continue declining in the future.'
  },
  {
    name: 'Raziel The Reminisc',
    imageKey: 'Raziel The Reminisc',
    starterGame: 'A', calculation: 'S', bossMaxxing: 'B',
    investmentCost: { tier: 'Average', requirement: null },
    awakenValue: 'Very High',
    overallGrade: 'S',
    investmentCostNote: 'standard gear is sufficient',
    awakenValueNote: 'Her kit at A0 is already quite complete. Ideally, you should only get A0. But her A2 is a powerful damage booster (Waves deals 50% more DMG), supports lots new character and incoming character and also that can be passed to help Connor / Charlotte to make up for the gap between other characters.',
    briefReview: 'Totally the reason of power creep, and a core piece of the Reverengy-Nova system. Her downside is needing a lot of extra draw support, and her other DMG Boost utility is relatively weak.'
  },
  {
    name: 'Raziel',
    imageKey: 'Raziel',
    starterGame: 'B', calculation: 'S', bossMaxxing: 'A',
    investmentCost: { tier: 'Average', requirement: null },
    awakenValue: 'Medium',
    overallGrade: 'A',
    investmentCostNote: 'standard gear is sufficient',
    awakenValueNote: 'a Stat Monster.',
    briefReview: 'Similar role to Ushana. Her edge is less pressure on draw support and more flexible team-building — can run as Main Carry or Sub Carry. In Margiela The Stargazer or Sommer-type teams she can slot in as a Follow-Up ATK unit, and is more stable than Masaki.'
  },
  {
    name: 'Ushana',
    imageKey: 'Ushana',
    starterGame: 'A', calculation: 'S', bossMaxxing: 'A',
    investmentCost: { tier: 'High', requirement: null },
    awakenValue: 'Medium',
    overallGrade: 'A',
    investmentCostNote: 'requires specific gear/affixes and resonance',
    awakenValueNote: 'usable at A0, no current Calculation replacement for the Margiela The Stargazer/Sommer-type lineup.',
    briefReview: "A Stat Monster who can easily survive high pressure with Crimson Prophecy. Her Boss Maxxing performance is starting to show its age but she's still good to run."
  },
  /* HIDDEN (uncomment this block to bring Chloe back)
  {
    name: 'Chloe',
    imageKey: 'Chloe',
    starterGame: 'A', calculation: 'S', bossMaxxing: 'S',
    investmentCost: { tier: 'Average', requirement: null },
    awakenValue: 'Very High',
    overallGrade: 'S',
    investmentCostNote: 'big gap between floor and ceiling',
    awakenValueNote: 'usable from A2, but she is already extremely versatile at A1.',
    briefReview: 'The new Electric God — a character broken in both stats and mechanics. She can go all-in for massive Electric-stacked damage, or pivot to Cost Regen and draw support for resource management — the queen of discard-Electric.'
  }
  */
];
