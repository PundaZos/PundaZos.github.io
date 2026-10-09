// ============================================================
// I18N — translation dictionary and lookup helper. `t(key)` reads
// from the current language, falling back to English if a key is
// ever missing in a translation (so nothing renders blank).
// Character-authored content (names, roles, notes, reviews) is
// NOT translated here — this only covers the site's own UI text.
// ============================================================
const TRANSLATIONS = {
  en: {
    'nav.brand': 'Gacha Tier List',
    'nav.home': 'Home',
    'nav.tierList': 'Tier List',
    'nav.characters': 'Characters',

    'home.welcome': 'Welcome',
    'home.intro1': 'In Resonance Solstice, character synergy plays a crucial role in determining overall performance, making it difficult to evaluate a character\'s strength in isolation. A character\'s effectiveness often depends heavily on their teammates, which makes creating a completely objective individual strength ranking challenging.',
    'home.intro2': 'For this reason, this website features two independent tier lists that answer two different questions: "Should I pull this character?" and "Is it worth investing in higher awakenings?" Each tier list uses different evaluation criteria to reflect these distinct investment decisions.',
    'home.intro3': 'As the game has evolved, character design, power creep, and overall stat scaling have changed significantly. Because of this, the tier lists no longer strictly follow the evaluation system or scope used in earlier versions.',
    'home.intro4': 'Since the primary focus of this website is pull recommendations rather than raw character strength, older characters who have fallen behind the current meta or no longer fit into mainstream team compositions may not receive detailed evaluations. Simply put, if a character isn\'t listed, they are generally not recommended as a pull under the current evaluation criteria.',
    'home.a0Desc': 'Is this character worth pulling for at A0 (their first copy)? This is the best starting point for F2P players and light spenders who want to make the most of their limited resources.',
    'home.highAwakenDesc': 'Is this character worth investing in additional copies to reach key Awakening breakpoints (A2, A4, A5, etc.)? This tier list is aimed at players considering multiple copies or long-term investment, helping them decide whether the benefits of higher Awakenings justify the resources required.',
    'home.rulesTitle': 'Recommended Rules',
    'home.rule1': '<strong>Prioritize new characters over rerun characters.</strong> Newer characters generally offer better long-term value due to power creep and evolving team compositions.',
    'home.rule2': '<strong>Prioritize supports over DPS carries.</strong> Versatile supports tend to remain useful across multiple teams, while DPS carries are more likely to be replaced by stronger alternatives over time.',
    'home.rule3': '<strong>Don\'t feel pressured to pull for future potential.</strong> If a character is expected to become stronger with future releases, it\'s perfectly fine to wait and pull for them when that happens.',
    'home.rule4': '<strong>These are recommendations, not rules.</strong> At the end of the day, if you genuinely like a character, pull for them regardless of their tier ranking. Enjoying the game matters more than following the meta.',
    'home.lastWordsTitle': 'Last Words',
    'home.lastWords': 'To be fair, these tier lists are still somewhat subjective. While I\'ve consulted several top players and considered their feedback, there may still be gaps, inaccuracies, or things I\'ve overlooked. I appreciate your understanding, and feel free to point out any mistakes or share your suggestions. Feedback is always welcome!',

    'tierList.title': 'Gacha Recommendation Tier List',

    'characters.title': 'Characters',
    'characters.searchPlaceholder': 'Search characters…',
    'characters.scrollHint': 'Swipe sideways to see all columns →',

    'shared.modeA0Full': 'A0 Tier List',
    'shared.modeHighAwakenFull': 'High Awaken Tier List',
    'shared.modeA0Short': 'A0',
    'shared.modeHighAwakenShort': 'High Awaken',
    'shared.whatDoTheseMean': 'What do these ratings mean?',
    'shared.tierLabelA0': 'A0 Tier',
    'shared.tierLabelHighAwaken': 'High Awaken Tier',
    'shared.review': 'Brief Summary',
    'shared.noCharactersYet': 'No characters in this list yet.',
    'shared.noMatches': 'No characters match',
    'shared.none': '— none —',
    'shared.tier': 'TIER',
    'shared.day': 'Day',
    'shared.night': 'Night',
    'shared.provisionalShort': 'PROV.',
    'shared.provisionalTitle': 'Provisional — inferred from the supporting ratings, not yet a confirmed editorial verdict.',
    'shared.provisionalSuffix': ' (provisional)',
    'shared.collab': 'Collab',
    'shared.upcomingContent': 'Upcoming Content',
    'shared.upcomingNote': 'This list is still being prepared. Check back soon.',
    'shared.collabTitle': 'Show collaboration characters.',
    'shared.collabBadge': 'Collaboration character',

    'grade.excellent': 'Must Have',
    'grade.strong': 'Strong',
    'grade.solid': 'Solid',
    'grade.situational': 'Situational',
    'grade.notRecommended': 'Not Recommended',

    'field.content': 'Overall Evaluation',
    'field.versatility': 'Versatility',
    'field.longevity': 'Longevity',
    'field.damage': 'Damage / Damage Boost',
    'field.highDifficulty': 'High-Difficulty Performance',
    'field.costRecovery': 'Cost Recovery',
    'field.cardCycling': 'Card Cycling',
    'field.costEffectiveness': 'High Awaken Cost-Effectiveness',

    'fieldDesc.content': 'Evaluates a character\'s practical usefulness throughout game progression and everyday content, including Early Game Content, Calculation Recording, Daily Activities, and Depth Calculus.',
    'fieldDesc.versatility': 'Evaluates how flexibly a character fits into different team compositions and game content, including their ability to perform effectively across multiple roles and strategies.',
    'fieldDesc.longevity': 'Evaluates a character\'s long-term value and ability to remain relevant as the meta evolves, including how likely they are to stay useful in future team compositions rather than being replaced by newer characters.',
    'fieldDesc.damage': 'Personal output and/or ability to raise team damage.',
    'fieldDesc.highDifficulty': 'Reliability and contribution in difficult endgame content.',
    'fieldDesc.costRecovery': 'Ability to recover, generate, or improve resource/action-cost flow.',
    'fieldDesc.cardCycling': 'Ability to draw, cycle, or accelerate access to useful cards.',
    'fieldDesc.costEffectiveness': 'Whether the extra copies required to reach this breakpoint are worth the gain.',

    'explainer.a0': 'How valuable is this character when you obtain their first copy? Use this list if you are mainly deciding whether to pull A0.',
    'explainer.highAwaken': 'How valuable does this character become at an important Awaken breakpoint? Use this list if you are considering multiple copies or long-term investment.',

    'col.character': 'Character',
    'col.role': 'Role',
    'col.a0Tier': 'A0 Tier',
    'col.content': 'Overall Evaluation',
    'col.versatility': 'Versatility',
    'col.longevity': 'Longevity',
    'col.awaken': 'Awaken',
    'col.tier': 'Tier',
    'col.damage': 'Damage / Buff',
    'col.highDifficulty': 'High Difficulty',
    'col.costRecovery': 'Cost Recovery',
    'col.cardCycling': 'Card Cycling',
    'col.costEffectiveness': 'Cost-Effectiveness'
  },
  zh: {
    'nav.brand': '抽卡梯队榜',
    'nav.home': '首页',
    'nav.tierList': '梯队榜',
    'nav.characters': '角色',

    'home.welcome': '欢迎',
    'home.intro1': '在 Resonance Solstice 中，角色之间的联动与配合对整体表现影响极大，因此很难单独评判某个角色的强度。角色的实际效果往往高度依赖队友，这也让制作一份完全客观的个人强度排行变得十分困难。',
    'home.intro2': '基于这个原因，本网站提供两份相互独立的榜单，分别回答两个不同的问题：“这个角色值得抽吗？”和“值得投入更高觉醒吗？”两份榜单采用不同的评价标准，以对应这两种不同的投入决策。',
    'home.intro3': '随着游戏的发展，角色设计、数值膨胀以及整体属性成长都发生了很大变化，因此本榜单不再严格沿用早期版本的评价体系和范围。',
    'home.intro4': '由于本网站的重点是抽卡推荐而非单纯的角色强度，已经落后于当前环境、或不再适配主流队伍的老角色可能不会得到详细评价。简单来说：如果某个角色没有被收录，在当前评价标准下通常不推荐抽取。',
    'home.a0Desc': '这个角色值得 0 觉（第一张）抽取吗？这是零氪玩家和轻度氪金玩家合理利用有限资源的最佳起点。',
    'home.highAwakenDesc': '这个角色值得继续投入更多张数，以达到关键觉醒节点（2觉、4觉、5觉等）吗？本榜单面向考虑多抽或长线投入的玩家，帮助判断高觉醒带来的收益是否值得所需的资源。',
    'home.rulesTitle': '抽卡建议',
    'home.rule1': '<strong>优先抽新角色，而非复刻角色。</strong>由于数值膨胀和队伍环境的变化，新角色通常具有更长期的价值。',
    'home.rule2': '<strong>优先抽辅助，而非输出。</strong>泛用性强的辅助能在多支队伍中长期发挥作用，而输出角色更容易随时间被更强的替代者取代。',
    'home.rule3': '<strong>不必为未来的潜力而焦虑。</strong>如果某个角色预计会在后续版本中变强，等到那时再抽也完全没问题。',
    'home.rule4': '<strong>以上只是建议，并非硬性规则。</strong>归根结底，如果你真心喜欢某个角色，不论其评级如何都可以抽取。享受游戏比追随环境更重要。',
    'home.lastWordsTitle': '写在最后',
    'home.lastWords': '说实话，这些榜单仍带有一定的主观性。虽然我咨询了多位高玩并参考了他们的意见，但仍可能存在疏漏或不准确之处。感谢你的理解，也欢迎指出错误或提出建议，非常欢迎反馈！',

    'tierList.title': '抽卡推荐梯队榜',

    'characters.title': '角色列表',
    'characters.searchPlaceholder': '搜索角色…',
    'characters.scrollHint': '左右滑动查看全部列 →',

    'shared.modeA0Full': '0觉榜',
    'shared.modeHighAwakenFull': '高追榜',
    'shared.modeA0Short': '0觉',
    'shared.modeHighAwakenShort': '高追',
    'shared.whatDoTheseMean': '这些评级代表什么？',
    'shared.tierLabelA0': '0觉评级',
    'shared.tierLabelHighAwaken': '高追评级',
    'shared.review': '简评',
    'shared.noCharactersYet': '该榜单暂无角色。',
    'shared.noMatches': '没有符合条件的角色：',
    'shared.none': '—— 暂无 ——',
    'shared.tier': '级',
    'shared.day': '日间',
    'shared.night': '夜间',
    'shared.provisionalShort': '暂定',
    'shared.provisionalTitle': '暂定评级——由辅助评分自动推算，尚未经过人工最终确认。',
    'shared.provisionalSuffix': '（暂定）',
    'shared.collab': '联动',
    'shared.upcomingContent': '敬请期待',
    'shared.upcomingNote': '本榜单仍在准备中，请稍后再来查看。',
    'shared.collabTitle': '显示联动角色。',
    'shared.collabBadge': '联动角色',

    'grade.excellent': '必抽',
    'grade.strong': '强力',
    'grade.solid': '可用',
    'grade.situational': '看情况',
    'grade.notRecommended': '不推荐',

    'field.content': '整体评价',
    'field.versatility': '泛用',
    'field.longevity': '保值',
    'field.damage': '输出/增伤能力',
    'field.highDifficulty': '高难度内容表现',
    'field.costRecovery': '费用回复能力',
    'field.cardCycling': '过牌能力',
    'field.costEffectiveness': '高追性价比',

    'fieldDesc.content': '在开荒、爬塔、日常及深渊等常见内容中的实际使用价值。',
    'fieldDesc.versatility': '角色能融入多少种阵容与内容。',
    'fieldDesc.longevity': '角色的价值能否长期保持不过时，而不是逐渐退出版本。',
    'fieldDesc.damage': '角色自身输出，及/或提升队伍整体伤害的能力。',
    'fieldDesc.highDifficulty': '在高难度终局内容中的稳定性与贡献度。',
    'fieldDesc.costRecovery': '回复、产生或改善资源/费用循环的能力。',
    'fieldDesc.cardCycling': '抽牌、过牌或加速获取有用卡牌的能力。',
    'fieldDesc.costEffectiveness': '达到该觉醒节点所需的额外抽取，是否物有所值。',

    'explainer.a0': '这个角色在首次获得（0觉）时的价值如何？如果你主要在纠结要不要0觉抽取，请参考本榜单。',
    'explainer.highAwaken': '这个角色在关键觉醒节点的价值如何？如果你在考虑多抽或长线养成，请参考本榜单。',

    'col.character': '角色',
    'col.role': '定位',
    'col.a0Tier': '0觉评级',
    'col.content': '整体评价',
    'col.versatility': '泛用',
    'col.longevity': '保值',
    'col.awaken': '觉醒',
    'col.tier': '评级',
    'col.damage': '输出/增益',
    'col.highDifficulty': '高难度',
    'col.costRecovery': '费用回复',
    'col.cardCycling': '过牌',
    'col.costEffectiveness': '性价比'
  }
};

let currentLanguage = 'en';

// Both default to false: future and collab characters are hidden
// until the visitor explicitly opts in via the topbar toggles.
let showFutureCharacters = false;
let showCollabCharacters = false;

function t(key){
  return (TRANSLATIONS[currentLanguage] && TRANSLATIONS[currentLanguage][key])
    || TRANSLATIONS.en[key]
    || key;
}

// A character's own `name` stays the stable identifier used for
// data-character attributes, lookups, and sort/expand state — it
// never changes with language. This only affects what's shown to
// the reader: the Chinese name when available and selected,
// otherwise the English one.
function getDisplayName(character){
  return (currentLanguage === 'zh' && character.nameZh) ? character.nameZh : character.name;
}

// Same idea as getDisplayName, generalized to any text field on a
// mode's data object (role, review, per-field notes). Looks for a
// `<key>Zh` sibling field; falls back to the English one when the
// Chinese version doesn't exist yet.
function getLocalizedField(data, key){
  const zhKey = key + 'Zh';
  return (currentLanguage === 'zh' && data[zhKey]) ? data[zhKey] : data[key];
}

// Walks every element carrying a data-i18n* attribute and fills it
// in from the current language. Separate attributes for plain text,
// HTML (paragraphs that contain a <strong>), and input placeholders,
// since each needs a different DOM property set.
function applyStaticTranslations(){
  document.title = t('tierList.title');
  document.querySelectorAll('[data-i18n]').forEach(element => {
    element.textContent = t(element.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-html]').forEach(element => {
    element.innerHTML = t(element.dataset.i18nHtml);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
    element.setAttribute('placeholder', t(element.dataset.i18nPlaceholder));
  });
  document.querySelectorAll('[data-i18n-title]').forEach(element => {
    element.setAttribute('title', t(element.dataset.i18nTitle));
  });
}
