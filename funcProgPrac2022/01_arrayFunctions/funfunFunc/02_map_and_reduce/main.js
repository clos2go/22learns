console.clear()

class Cocktail {
  constructor(name, glassware, spirit, ingredients, build, garnish, funFact) {
    this.name = name
    this.glassware = glassware
    this.spirit = spirit
    this.ingredients = ingredients
    this.build = build
    this.garnish = garnish
    this.funFact = funFact
  }
}

const aperolSpritz = new Cocktail(
  'Aperol Spritz',
  'Wine Glass',
  'Italian Amaro',
  ['2 oz Aperol', '2 oz prosecco', '2 oz Soda'],
  'Add Ice Cubes and lightly stir',
  'Orange Slice',
  'A pre dinner drink'
)

console.log(aperolSpritz)

const oldFashioned = new Cocktail(
  'Old Fashioned',
  'Rocks Glass',
  'Bourbon',
  ['2oz Bourbon', '.75 Simple Syrup', '3 dashes Angostura'],
  'large ice cube and stir',
  'Orange peel',
  'First recorded definition of cocktail (1806), which called for spirit, sugar, and bitters'
)

console.log(oldFashioned)

const sazerac = new Cocktail(
  'Sazerac',
  'Rocks Glass',
  'Bourbon',
  [
    '2oz Knob Creek Rye',
    'Herbsaint',
    '2 dashes Peychauds',
    '2 dashes Angostura'
  ],
  'mixing glass, stir, strain into chilled glass',
  'Lemon Peel',
  'Sazerac was crowned official drink of New Orleans by marketers'
)

console.log(sazerac)

const classicMargarita = new Cocktail(
  'Classic Margarita',
  'Collins',
  'Tequila',
  ['2oz Espolon Silver', '.75 Grand Marnier', '.75 lime juice', '.5 Agave'],
  'Tumbler, shaken, strained over ice, with tajin glass',
  'lime wedge',
  'margs on margs on margs'
)
console.log(classicMargarita)

const negroni = new Cocktail(
  'Negroni',
  'Rocks Glass',
  'Gin',
  ['2oz gin, 1.5 oz Campari, 1.5 oz sweet vermouth'],
  'Mixing glass and stirred, then strained into rocks glass with cube',
  'Orange Peel',
  'Italian'
)

console.log(negroni)
