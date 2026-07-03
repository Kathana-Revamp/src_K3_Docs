// @ts-check

const sidebars = {
  mainSidebar: [
    {
      type: 'category',
      label: 'Start Here',
      collapsed: false,
      items: [
        'start/getting-started',
        'start/account-client-setup',
        'start/launcher-patch-notes',
      ],
    },
    {
      type: 'category',
      label: 'Gameplay Guides',
      collapsed: false,
      items: [
        'gameplay/game-features',
        'gameplay/character-basics',
        'gameplay/items-equipment',
        'gameplay/skills-progression',
        'gameplay/maps-travel',
        'gameplay/party-guild-pvp',
      ],
    },
    {
      type: 'category',
      label: 'Support',
      collapsed: false,
      items: [
        'support/troubleshooting',
        'support/known-issues',
        'support/report-a-bug',
        'support/request-a-feature',
      ],
    },
    {
      type: 'category',
      label: 'Community',
      collapsed: false,
      items: [
        'community/wiki-contributions',
        'community/discussions',
        'community/rules-safety',
      ],
    },
  ],
};

module.exports = sidebars;
