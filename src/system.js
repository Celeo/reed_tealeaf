export const allSkills = [
  {
    name: 'Acrobatics',
    attribute: 'Dexterity'
  },
  {
    name: 'Animal Handling',
    attribute: 'Wisdom'
  },
  {
    name: 'Arcana',
    attribute: 'Intelligence'
  },
  {
    name: 'Athletics',
    attribute: 'Strength'
  },
  {
    name: 'Deception',
    attribute: 'Charisma'
  },
  {
    name: 'History',
    attribute: 'Intelligence'
  },
  {
    name: 'Insight',
    attribute: 'wisdom'
  },
  {
    name: 'Intimidation',
    attribute: 'Charisma'
  },
  {
    name: 'Investigation',
    attribute: 'Intelligence'
  },
  {
    name: 'Medicine',
    attribute: 'Wisdom'
  },
  {
    name: 'Nature',
    attribute: 'Intelligence'
  },
  {
    name: 'Perception',
    attribute: 'Wisdom'
  },
  {
    name: 'Performance',
    attribute: 'Charisma'
  },
  {
    name: 'Persuasion',
    attribute: 'Charisma'
  },
  {
    name: 'Religion',
    attribute: 'Intelligence'
  },
  {
    name: 'Sleight of Hand',
    attribute: 'Dexterity'
  },
  {
    name: 'Stealth',
    attribute: 'Dexterity'
  },
  {
    name: 'Survival',
    attribute: 'Wisdom'
  }
]

export const proficiencyBonus = (level) => 1 + Math.ceil(level / 4)

export const attributeModifier = (value) => Math.floor((value - 10) / 2)
