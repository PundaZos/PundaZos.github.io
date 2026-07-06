const tiers = ["T0", "T1", "T2", "T3", "T4", "T5"];

const tierList = document.getElementById("tier-list");
const detailPanel = document.getElementById("character-detail");
const closeDetailButton = document.getElementById("close-detail");

function buildTierList() {
  tiers.forEach(tier => {
    const tierRow = document.createElement("section");
    tierRow.className = "tier-row";

    const tierLabel = document.createElement("div");
    tierLabel.className = `tier-label ${tier.toLowerCase()}`;
    tierLabel.textContent = tier;

    const characterContainer = document.createElement("div");
    characterContainer.className = "character-container";

    const charactersInTier = characters.filter(character => character.tier === tier);

    charactersInTier.forEach(character => {
      const card = document.createElement("div");
      card.className = "character-card";

      card.innerHTML = `
        <img src="${character.image}" alt="${character.name}">
        <h3>${character.name}</h3>
        <div class="mini-stats">
          <span>${character.stats.area1}</span>
          <span>${character.stats.area2}</span>
          <span>${character.stats.area3}</span>
        </div>
      `;

      card.addEventListener("mouseenter", () => {
        showCharacterDetail(character);
      });

      card.addEventListener("click", () => {
        showCharacterDetail(character);
      });

      characterContainer.appendChild(card);
    });

    tierRow.appendChild(tierLabel);
    tierRow.appendChild(characterContainer);
    tierList.appendChild(tierRow);
  });
}

function showCharacterDetail(character) {
  document.getElementById("detail-image").src = character.image;
  document.getElementById("detail-image").alt = character.name;
  document.getElementById("detail-name").textContent = character.name;
  document.getElementById("detail-tier").textContent = `General Tier: ${character.tier}`;

  document.getElementById("detail-area1").textContent = character.stats.area1;
  document.getElementById("detail-area2").textContent = character.stats.area2;
  document.getElementById("detail-area3").textContent = character.stats.area3;

  document.getElementById("detail-upgrade-cost").textContent = character.upgradeCost;
  document.getElementById("detail-gacha-value").textContent = character.gachaValue;
  document.getElementById("detail-analysis").textContent = character.analysis;

  detailPanel.classList.remove("hidden");
}

closeDetailButton.addEventListener("click", () => {
  detailPanel.classList.add("hidden");
});

buildTierList();
