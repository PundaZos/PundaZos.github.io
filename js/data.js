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
//   imageKey        : filename (no extension) shared by both art folders
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
    investmentCostNote: 'Requires specific gear/affixes and resonance level.',
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
    investmentCostNote: 'Pure support role.',
    awakenValueNote: 'Her A1 makes her versatile, can be a great support for many teams.',
    briefReview: 'Cost Regen support for Electric teams; Strong versatile draw support unit at A1.'
  },
  {
    name: 'Tennie',
    imageKey: 'Tennie',
    starterGame: 'B', calculation: 'A', bossMaxxing: 'B',
    investmentCost: { tier: 'Low', requirement: null },
    awakenValue: 'Medium',
    overallGrade: 'B',
    investmentCostNote: 'Pure support role.',
    awakenValueNote: 'Outside of being a teammate for Connor, she is easily replaceable.',
    briefReview: "Pretty much a must-have teammate for Connor, a great teammate for Nayuta's Aoba Shuffle; optional in Electric teams, but she barely contributes damage in permafreeze teams. She is a strong freeze-team support, but the cost to build her is high, making her poor value for investment."
  },
  {
    name: 'Stella',
    imageKey: 'Stella',
    starterGame: 'S', calculation: 'S', bossMaxxing: 'B',
    investmentCost: { tier: 'High', requirement: null },
    awakenValue: 'High',
    overallGrade: 'S',
    investmentCostNote: 'Requires investment in survivability.',
    awakenValueNote: 'It is profitable even if you lose the 50/50 before her A5.',
    briefReview: 'A versatile deck-cycle unit; performance has softened a bit in the current meta where every support has some unique DMG Boost, but she remains the best pick for easing cycle pressure in early-game and Calculation content.'
  },
  {
    name: 'Anfiya',
    imageKey: 'Anfiya',
    starterGame: 'B', calculation: 'S', bossMaxxing: 'A',
    investmentCost: { tier: 'Low', requirement: null },
    awakenValue: 'High',
    overallGrade: 'A',
    investmentCostNote: 'Pure support role.',
    awakenValueNote: 'A strong, versatile control unit; worth pulling to A5 for Basic-Attack teams.',
    briefReview: "Very strong CC (Crowd Control) support, can play Perma-Coffin when she's the leader."
  },
  {
    name: 'Pelota',
    imageKey: 'Pelota',
    starterGame: 'D', calculation: 'A', bossMaxxing: 'S',
    investmentCost: { tier: 'High', requirement: null },
    awakenValue: 'Low',
    overallGrade: 'D',
    investmentCostNote: 'Used as a sub-carry.',
    awakenValueNote: "Pure Electric Team Support; if subbed into other teams it's only for fun, A1 provides Final DMG reduction, but not a must-pull.",
    briefReview: 'Pelota can give Nicola a huge survival advantage, and right now Nicola is pretty much the only one who can proc her kit properly.'
  },
  {
    name: 'Hayabusa',
    imageKey: 'Hayabusa',
    starterGame: 'A', calculation: 'S', bossMaxxing: 'S',
    investmentCost: { tier: 'High', requirement: null },
    awakenValue: 'Medium',
    overallGrade: 'A',
    investmentCostNote: 'Requires gear affix and more skill level.',
    awakenValueNote: 'Usable from A2. A4 makes him insanely broken, versatile support.',
    briefReview: 'Broken Support at A4 — 40% Final DMG Boost makes him extremely broken for Boss Maxxing. True versatile pick, though he only fully comes handy at A2 and full strength at A4.'
  },
  {
    name: 'Arina',
    imageKey: 'Arina',
    starterGame: 'B', calculation: 'A', bossMaxxing: 'C',
    investmentCost: { tier: 'Average', requirement: null },
    awakenValue: 'Low',
    overallGrade: 'D',
    investmentCostNote: 'Healing is tied to damage dealt.',
    awakenValueNote: 'Stats are lacking, becomes usable at second awakening, fifth awakening improves versatility.',
    briefReview: 'She was introduced as a support character in the early stages of the game, designed to relieve stress, but has gradually faded from meta — no meta team can effectively utilize her.'
  },
  {
    name: 'Margiela',
    imageKey: 'Margiela',
    starterGame: 'B', calculation: 'B', bossMaxxing: 'C',
    investmentCost: { tier: 'Average', requirement: null },
    awakenValue: 'Low',
    overallGrade: 'D',
    investmentCostNote: 'Standard gear is sufficient.',
    awakenValueNote: 'Low awaken is just bad, tied to the Shadowcraft system at A2.',
    briefReview: "Once had her moment of glory in the Purple Card team; might just pull her SP-version. Unless you really like Margiela, you can utilize her in Stargazer's team."
  },
  {
    name: 'Wensheng',
    imageKey: 'Wensheng',
    starterGame: 'B', calculation: 'B', bossMaxxing: 'D',
    investmentCost: { tier: 'Average', requirement: null },
    awakenValue: 'Low',
    overallGrade: 'D',
    investmentCostNote: 'Standard gear is sufficient.',
    awakenValueNote: 'Not much use.',
    briefReview: 'No record found, E Tier guy.'
  },
  {
    name: 'Ren',
    imageKey: 'Ren',
    starterGame: 'D', calculation: 'B', bossMaxxing: 'S',
    investmentCost: { tier: 'High', requirement: null },
    awakenValue: 'Low',
    overallGrade: 'D',
    investmentCostNote: 'Requires specific gear affix and skill level.',
    awakenValueNote: 'A pure Boss Maxxing unit with no versatility. Only recommend A0 or A5.',
    briefReview: 'If you want -1 fatigue each ram hit, get A0 and stop. If you want a Boss Maxxing Beast, get A5.'
  },
  {
    name: 'Margiela The Stargazer',
    imageKey: 'Margiela The Stargazer',
    starterGame: 'S', calculation: 'S', bossMaxxing: 'S',
    investmentCost: { tier: 'Average', requirement: null },
    awakenValue: 'Very High',
    overallGrade: 'S',
    investmentCostNote: 'Big gap between floor and ceiling.',
    awakenValueNote: 'Fully functions at A0, extremely versatile, hard to replace as a Black Star damage dealer.',
    briefReview: "The perfect capstone of the Black Star system — a 'circle within a circle.' Extremely versatile and powerful as a Support/Sub-C, and just as strong running as your Main C. A near all-rounder from tower-climbing to Boss Maxxing."
  },
  {
    name: 'Masaki',
    imageKey: 'Masaki',
    starterGame: 'B', calculation: 'A', bossMaxxing: 'S',
    investmentCost: { tier: 'High', requirement: null },
    awakenValue: 'High',
    overallGrade: 'A',
    investmentCostNote: 'Needs dedicated DEF-affix farming.',
    awakenValueNote: 'Decent versatility, can form a small Familiar sub-team alongside Maid units.',
    briefReview: 'A genuinely well-designed kit; his Boss Maxxing ceiling is high but swingy, and he gives a solid boost to any unit that leans on leader-skill or card-face effects.'
  },
  {
    name: 'Dorothy',
    imageKey: 'Dorothy',
    starterGame: 'A', calculation: 'A', bossMaxxing: 'B',
    investmentCost: { tier: 'High', requirement: null },
    awakenValue: 'Medium',
    overallGrade: 'B',
    investmentCostNote: 'Requires specific gear/affixes and resonance.',
    awakenValueNote: "Very flexible teammate choice, F2P have their own way to run her, but she doesn't really pop off until A4, which is expensive to reach.",
    briefReview: 'A discard-nuke DPS; frequently catches friendly fire from mechanics that target Nayuta.'
  },
  {
    name: 'Ilona',
    imageKey: 'Ilona',
    starterGame: 'D', calculation: 'C', bossMaxxing: 'A',
    investmentCost: { tier: 'Average', requirement: null },
    awakenValue: 'Low',
    overallGrade: 'D',
    investmentCostNote: 'Standard gear is sufficient.',
    awakenValueNote: 'Some versatility, but a kit flaw keeps her from an optimal build, and she needs a high awaken level to shine.',
    briefReview: "She benefits from a lot of buffs/synergies but has always been underwhelming; if you're not a fan you basically won't play her. VA is Yui Ogura, for what it's worth."
  },
  {
    name: 'Shizuru The Summer Chaser',
    imageKey: 'Shizuru The SummerChaser',
    starterGame: 'B', calculation: 'S', bossMaxxing: 'S',
    investmentCost: { tier: 'Average', requirement: null },
    awakenValue: 'Very High',
    overallGrade: 'S',
    investmentCostNote: 'Big gap between floor and ceiling.',
    awakenValueNote: 'Strong draw support who also deals respectable damage herself; this Summer variant basically needs A2 to work.',
    briefReview: "Heals, draws cards, builds combo, and brings freeze CC, plus solid personal damage — you won't regret pulling her, but she's limited."
  },
  {
    name: 'Komugi',
    imageKey: 'Komugi',
    starterGame: 'C', calculation: 'C', bossMaxxing: 'A',
    investmentCost: { tier: 'Average', requirement: null },
    awakenValue: 'Low',
    overallGrade: 'D',
    investmentCostNote: 'Standard gear is sufficient.',
    awakenValueNote: "No playstyle found for her yet outside of being Dorothy's dedicated Support.",
    briefReview: "A fully-built Komugi can push Dorothy's Boss Maxxing past 200e — but basically nobody runs this. Who's even pulling for the furry unit?"
  },
  {
    name: 'Paladi',
    imageKey: 'Paladi',
    starterGame: 'A', calculation: 'A', bossMaxxing: 'S',
    investmentCost: { tier: 'Average', requirement: null },
    awakenValue: 'Medium',
    overallGrade: 'C',
    investmentCostNote: 'Standard gear is sufficient.',
    awakenValueNote: "At low awaken she's just a DMG-reduction support; discard-nuke synergy only kicks in at A2, and her A5 (Final DMG buff) is pricey.",
    briefReview: "The 'armored truck driver' for Burn teams, and a refined ATK-down support on top of that. Fairly controversial — 'fine off-rate, fine without her too' — but her utility skill gives Prison content a solid boost."
  },
  {
    name: 'Lycagia',
    imageKey: 'Lycagia',
    starterGame: 'C', calculation: 'S', bossMaxxing: 'S',
    investmentCost: { tier: 'Average', requirement: null },
    awakenValue: 'Medium',
    overallGrade: 'C',
    investmentCostNote: 'Standard gear is sufficient.',
    awakenValueNote: 'Usable from A2, A4 is the key DMG-reduction unlock; poor value for money, but if you play discard-nuke you have to pull her.',
    briefReview: "This rank assumes A4 by default — at A0 she's worse than an SR."
  },
  {
    name: 'Shire',
    imageKey: 'Shire',
    starterGame: 'S', calculation: 'S', bossMaxxing: 'B',
    investmentCost: { tier: 'High', requirement: null },
    awakenValue: 'High',
    overallGrade: 'B',
    investmentCostNote: 'Requires specific gear/affixes and resonance.',
    awakenValueNote: 'Usable at A0, flexible team comps.',
    briefReview: 'A very strong unit with a huge range of teammate options, though her numbers are starting to show their age. Basically absent from top Boss Maxxing rankings now — top players run Shizuru The Summer Chaser for damage instead.'
  },
  {
    name: 'Connor',
    imageKey: 'Connor',
    starterGame: 'A', calculation: 'A', bossMaxxing: 'C',
    investmentCost: { tier: 'Average', requirement: null },
    awakenValue: 'Medium',
    overallGrade: 'C',
    investmentCostNote: 'Standard gear is sufficient.',
    awakenValueNote: 'Usable at A0, but her stats fall short.',
    briefReview: 'Almost entirely tied to Tennie; her strength is flexible team-building and cheap DMG reduction, and her blue cards hit high card efficiency — her weakness is that her stats are dated. Bluntly put, her numbers are just too weak now.'
  },
  {
    name: 'Charlotte',
    imageKey: 'Charlotte',
    starterGame: 'A', calculation: 'A', bossMaxxing: 'A',
    investmentCost: { tier: 'High', requirement: null },
    awakenValue: 'Low',
    overallGrade: 'D',
    investmentCostNote: 'Requires specific gear/affixes and resonance.',
    awakenValueNote: 'Technically usable from A2, but anything below A5 is rough in the current meta.',
    briefReview: "Thanks to the Mecha-God armor, her DMG reduction caught up with the meta and she's playable again; at A5 she's roughly on par with Nana at A0. Her buff bumped numbers up a bit, but not much — still not recommended. Mostly just her devoted fans running her, quietly, no complaints."
  },
  {
    name: 'Verlaine',
    imageKey: 'Verlaine',
    starterGame: 'B', calculation: 'C', bossMaxxing: 'D',
    investmentCost: { tier: 'Average', requirement: null },
    awakenValue: 'Low',
    overallGrade: 'D',
    investmentCostNote: 'Standard gear is sufficient.',
    awakenValueNote: 'No place in the current meta.',
    briefReview: "A gimmick character with an unclear role and low stats; without a rework she's unlikely to see mainstream play. Right now her only job is as a DMG Boost utility piece for Reeva."
  },
  {
    name: 'Olivien',
    imageKey: 'Olivien',
    starterGame: 'A', calculation: 'A', bossMaxxing: 'S',
    investmentCost: { tier: 'Low', requirement: null },
    awakenValue: 'High',
    overallGrade: 'B',
    investmentCostNote: 'Pure support role.',
    awakenValueNote: 'Kit is complete at A0, great card quality on her own, and strong versatility.',
    briefReview: "Mainly a DMG Boost enabler with an independent multiplier that's hard to dilute; her DMG reduction is more of a bonus. Must-pull if you're prepping a Familiar team."
  },
  {
    name: 'Reeva',
    imageKey: 'Reeva',
    starterGame: 'C', calculation: 'C', bossMaxxing: 'A',
    investmentCost: { tier: 'Average', requirement: null },
    awakenValue: 'Low',
    overallGrade: 'D',
    investmentCostNote: 'Standard gear is sufficient.',
    awakenValueNote: "A Boss Maxxing-focused unit for cycle-heavy content, and her stats still aren't strong enough.",
    briefReview: "Leans on kit synergy over raw numbers; skip her unless you're a big fan (not worth pulling for waifu points). Her discard-deck mechanic looks promising though — worth watching for future support."
  },
  {
    name: 'Ikara',
    imageKey: 'Ikara',
    starterGame: 'A', calculation: 'B', bossMaxxing: 'A',
    investmentCost: { tier: 'High', requirement: null },
    awakenValue: 'Medium',
    overallGrade: 'B',
    investmentCostNote: 'Requires specific gear/affixes and resonance.',
    awakenValueNote: "Several important awaken breakpoints, but since her real value is 'future potential' (current strength is lacking), value for money isn't great right now; her utility skill is excellent though.",
    briefReview: 'The first Dragonkin-system character, with some genuinely fresh design ideas — the Empire update will likely build new units around this system, but for now her stats are just middling. Her story art is gorgeous though.'
  },
  {
    name: 'Katas',
    imageKey: 'Katas',
    starterGame: 'C', calculation: 'C', bossMaxxing: 'C',
    investmentCost: { tier: 'Average', requirement: null },
    awakenValue: 'Medium',
    overallGrade: 'D',
    investmentCostNote: 'Standard gear is sufficient.',
    awakenValueNote: 'Usable as a disposable filler unit at A0.',
    briefReview: "A skill-battery for Pursuit teams; compared to Paladi her edge is better low-awaken performance, but as a Main C she's fallen behind the times — she also had her glory days once. Waiting on an SP."
  },
  {
    name: 'Joshua',
    imageKey: 'Joshua',
    starterGame: 'A', calculation: 'A', bossMaxxing: 'C',
    investmentCost: { tier: 'High', requirement: null },
    awakenValue: 'High',
    overallGrade: 'C',
    investmentCostNote: 'Requires specific gear/affixes and resonance.',
    awakenValueNote: 'Usable right from A0.',
    briefReview: "After a redesign-style buff on his original concept, he's now a viable Cost Regen pick for a secondary Black Card team, though he can't compete with Chloe for Black Card priority. Both his Shadowcraft and Demon-God builds have been phased out."
  },
  {
    name: 'Dustin',
    imageKey: 'Dustin',
    starterGame: 'B', calculation: 'B', bossMaxxing: 'C',
    investmentCost: { tier: 'Average', requirement: null },
    awakenValue: 'Medium',
    overallGrade: 'C',
    investmentCostNote: 'Standard gear is sufficient.',
    awakenValueNote: 'Part of his kit is locked behind awaken levels.',
    briefReview: "Used to be a very strong red-card discard Sub-C thanks to the 'shrink bomb' mechanic; now his stats fall short, and his lack of draw support is an increasingly glaring weakness. His buff didn't fix that."
  },
  {
    name: 'Nayuta',
    imageKey: 'Nayuta',
    starterGame: 'A', calculation: 'S', bossMaxxing: 'S',
    investmentCost: { tier: 'Average', requirement: null },
    awakenValue: 'Very High',
    overallGrade: 'S',
    investmentCostNote: 'Big gap between floor and ceiling.',
    awakenValueNote: 'Kit is complete at A0.',
    briefReview: 'Is Nayuta a design failure?'
  },
  {
    name: 'Sommer',
    imageKey: 'Sommer',
    starterGame: 'A', calculation: 'A', bossMaxxing: 'C',
    investmentCost: { tier: 'Average', requirement: null },
    awakenValue: 'High',
    overallGrade: 'C',
    investmentCostNote: 'Standard gear is sufficient.',
    awakenValueNote: 'Kit is complete at A0, performs great in the early game, flexible team-building, but easily replaceable.',
    briefReview: 'Once a Stat Monster; now her only real strength is being comfortable for the early game.'
  },
  {
    name: 'Lissandra',
    imageKey: 'Lissandra',
    starterGame: 'A', calculation: 'A', bossMaxxing: 'C',
    investmentCost: { tier: 'Average', requirement: null },
    awakenValue: 'High',
    overallGrade: 'C',
    investmentCostNote: 'Standard gear is sufficient.',
    awakenValueNote: 'Kit is complete at A0, an excellent Shadowcraft generator, and her yellow-card experience is solid too.',
    briefReview: 'An early-game powerhouse whose ult is easy to charge and comes with self-heal and party-wide stun; her cards are refined and efficient — one card can clear Purple Card objectives 5 times over. Quite versatile.'
  },
  {
    name: 'Suen',
    imageKey: 'Suen',
    starterGame: 'B', calculation: 'C', bossMaxxing: 'D',
    investmentCost: { tier: 'High', requirement: null },
    awakenValue: 'Low',
    overallGrade: 'D',
    investmentCostNote: 'Requires specific gear/affixes and resonance.',
    awakenValueNote: 'A DMG-reduction piece usable from A2, only fully online at A5, but her real performance has fallen behind the current meta.',
    briefReview: "At A5 she used to be a piece of the 'Infinite Demon God' combo; now, falling behind across the board on kit and numbers, she has no place in the meta and only shows up in gimmick teams."
  },
  {
    name: 'Jalhay',
    imageKey: 'Jalhay',
    starterGame: 'B', calculation: 'S', bossMaxxing: 'A',
    investmentCost: { tier: 'Average', requirement: null },
    awakenValue: 'High',
    overallGrade: 'A',
    investmentCostNote: 'Standard gear is sufficient.',
    awakenValueNote: 'Although she only becomes a viable Main C at A2, her kit is already quite strong at A0.',
    briefReview: "An ATK-down unit for the Purple Card system; the legendary 'full hand at 3-cost' card — her own three cards are basically god-tier hand-compression, and her shuffle refunds cost too. Very high-quality, versatile unit. Her weakness is relatively weak DMG Boost utility."
  },
  {
    name: 'Ithos',
    imageKey: 'Ithos',
    starterGame: 'S', calculation: 'S', bossMaxxing: 'D',
    investmentCost: { tier: 'Low', requirement: null },
    awakenValue: 'High',
    overallGrade: 'A',
    investmentCostNote: 'Pure support role.',
    awakenValueNote: 'Kit is complete at A0, extremely strong versatility.',
    briefReview: 'A dedicated top-tier healer; like Anfiya, she monopolizes her lane — an F2P-friendly, DMG-reduction powerhouse. Her weakness is that she offers almost no offensive-side buffs, so her play rate may keep declining going forward.'
  },
  {
    name: 'Raziel The Reminisce',
    imageKey: 'Raziel The Reminisce',
    starterGame: 'A', calculation: 'S', bossMaxxing: 'B',
    investmentCost: { tier: 'Average', requirement: null },
    awakenValue: 'Very High',
    overallGrade: 'S',
    investmentCostNote: 'Standard gear is sufficient.',
    awakenValueNote: 'Kit is complete at A0, ideally aim for 1 copy; A2 is a strong DMG Boost enabler, and she can be passed to Shizuru The Summer Chaser/Connor to cover stat gaps.',
    briefReview: 'One of the root causes of the 1st-anniversary power creep, and a core piece of the Black Star system; her downside is needing a lot of extra draw support, and her DMG Boost utility is relatively weak.'
  },
  {
    name: 'Raziel',
    imageKey: 'Raziel',
    starterGame: 'B', calculation: 'S', bossMaxxing: 'A',
    investmentCost: { tier: 'Average', requirement: null },
    awakenValue: 'Medium',
    overallGrade: 'A',
    investmentCostNote: 'Standard gear is sufficient.',
    awakenValueNote: 'A Stat Monster.',
    briefReview: 'Similar role to Ushana; her edge is less pressure on draw support and more flexible team-building — can run as Main C or Sub C. In Margiela The Stargazer/Sommer-type teams she can slot in as a Pursuit unit, and is more stable than Masaki.'
  },
  {
    name: 'Ushana',
    imageKey: 'Ushana',
    starterGame: 'A', calculation: 'S', bossMaxxing: 'A',
    investmentCost: { tier: 'High', requirement: null },
    awakenValue: 'Medium',
    overallGrade: 'A',
    investmentCostNote: 'Requires specific gear/affixes and resonance.',
    awakenValueNote: 'Usable at A0, no current tower-climbing replacement for the Margiela The Stargazer/Sommer-type lineup.',
    briefReview: "A Stat Monster who can tank Deep Crimson-tier pressure; her Boss Maxxing performance is starting to show its age but she's still good to run."
  },
  {
    name: 'Chloe',
    imageKey: 'Chloe',
    starterGame: 'A', calculation: 'S', bossMaxxing: 'S',
    investmentCost: { tier: 'Average', requirement: null },
    awakenValue: 'Very High',
    overallGrade: 'S',
    investmentCostNote: 'Big gap between floor and ceiling.',
    awakenValueNote: 'Usable from A2, but already extremely versatile.',
    briefReview: 'The new Electric God — a character gorgeous in both stats and mechanics. She can go all-in for massive Electric-stacked damage, or pivot to Cost Regen and draw support for resource management — the queen of discard-Electric. Reeva, take notes.'
  }
];
