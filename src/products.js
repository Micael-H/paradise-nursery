export const categories = [
  { id: 'tropicais', title: 'Verdes tropicais', subtitle: 'Um toque de floresta dentro de casa.' },
  { id: 'faceis', title: 'Fáceis de cuidar', subtitle: 'Para começar sua coleção sem complicação.' },
  { id: 'especiais', title: 'Flores & folhagens', subtitle: 'Cores e formas que roubam a cena.' },
]

export const products = [
  { id: 'monstera', name: 'Costela-de-adão', scientific: 'Monstera deliciosa', price: 89.90, category: 'tropicais', imageIndex: 0, tag: 'Mais vendida' },
  { id: 'ficus-lira', name: 'Ficus-lira', scientific: 'Ficus lyrata', price: 119.90, category: 'tropicais', imageIndex: 1 },
  { id: 'strelitzia', name: 'Ave-do-paraíso', scientific: 'Strelitzia nicolai', price: 139.90, category: 'tropicais', imageIndex: 2 },
  { id: 'ficus-elastica', name: 'Ficus-elástica', scientific: 'Ficus elastica', price: 79.90, category: 'tropicais', imageIndex: 3 },
  { id: 'filodendro', name: 'Filodendro', scientific: 'Philodendron scandens', price: 64.90, category: 'tropicais', imageIndex: 4 },
  { id: 'areca', name: 'Palmeira-areca', scientific: 'Dypsis lutescens', price: 99.90, category: 'tropicais', imageIndex: 5 },
  { id: 'espada', name: 'Espada-de-são-jorge', scientific: 'Dracaena trifasciata', price: 54.90, category: 'faceis', imageIndex: 6, tag: 'Pouca água' },
  { id: 'zamioculca', name: 'Zamioculca', scientific: 'Zamioculcas zamiifolia', price: 69.90, category: 'faceis', imageIndex: 7 },
  { id: 'jiboia', name: 'Jiboia', scientific: 'Epipremnum aureum', price: 49.90, category: 'faceis', imageIndex: 8 },
  { id: 'clorofito', name: 'Clorofito', scientific: 'Chlorophytum comosum', price: 39.90, category: 'faceis', imageIndex: 9 },
  { id: 'jade', name: 'Planta-jade', scientific: 'Crassula ovata', price: 44.90, category: 'faceis', imageIndex: 10 },
  { id: 'babosa', name: 'Babosa', scientific: 'Aloe vera', price: 42.90, category: 'faceis', imageIndex: 11 },
  { id: 'lirio', name: 'Lírio-da-paz', scientific: 'Spathiphyllum wallisii', price: 59.90, category: 'especiais', imageIndex: 12 },
  { id: 'anturio', name: 'Antúrio', scientific: 'Anthurium andraeanum', price: 74.90, category: 'especiais', imageIndex: 13, tag: 'Cor o ano todo' },
  { id: 'orquidea', name: 'Orquídea', scientific: 'Phalaenopsis', price: 89.90, category: 'especiais', imageIndex: 14 },
  { id: 'begonia', name: 'Begônia', scientific: 'Begonia rex', price: 49.90, category: 'especiais', imageIndex: 15 },
  { id: 'calathea', name: 'Calatéia', scientific: 'Calathea roseopicta', price: 69.90, category: 'especiais', imageIndex: 16 },
  { id: 'hoya', name: 'Flor-de-cera', scientific: 'Hoya carnosa', price: 64.90, category: 'especiais', imageIndex: 17 },
]

export const formatPrice = (value) => new Intl.NumberFormat('pt-BR', {
  style: 'currency', currency: 'BRL',
}).format(value)
