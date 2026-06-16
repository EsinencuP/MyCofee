import { MenuItem, Promotion, Advantage, GalleryItem } from './types';

export const MENU_ITEMS: MenuItem[] = [
  // COFFEE
  {
    id: 'm1',
    nameRo: 'Espresso',
    nameRu: 'Эспрессо',
    descriptionRo: 'Un shot dublu extras cu precizie, preparat din boabe 100% Arabica de specialitate proaspăt prăjită, cu o cremă densă și aurie.',
    descriptionRu: 'Насыщенный двойной шот из 100% арабики свежего обжара с плотной золотистой кремá.',
    price: 35,
    image: 'https://images.unsplash.com/photo-1510707513156-466d22c37841?w=600&auto=format&fit=crop&q=80',
    category: 'coffee',
    isPopular: true
  },
  {
    id: 'm2',
    nameRo: 'Americano',
    nameRu: 'Американо',
    descriptionRo: 'Un espresso dublu prelungit cu apă fierbinte filtrată, pentru a obține o ceașcă aromată și echilibrată.',
    descriptionRu: 'Двойной эспрессо с добавлением чистой горячей воды для мягкого сбалансированного вкуса.',
    price: 40,
    image: 'https://images.unsplash.com/photo-1551046713-bc622327ce4e?w=600&auto=format&fit=crop&q=80',
    category: 'coffee'
  },
  {
    id: 'm3',
    nameRo: 'Cappuccino',
    nameRu: 'Капучино',
    descriptionRo: 'Armonia perfectă dintre espresso proaspăt, lapte dulce cremos și spumă fină, texturată impecabil.',
    descriptionRu: 'Идеальный баланс эспрессо, подогретого молока и глянцевой мелкодисперсной пенки.',
    price: 50,
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?w=600&auto=format&fit=crop&q=80',
    category: 'coffee',
    isPopular: true
  },
  {
    id: 'm4',
    nameRo: 'Flat White',
    nameRu: 'Флэт Уайт',
    descriptionRo: 'Pentru iubitorii de intensitate: espresso dublu Ristretto asortat fin cu o peliculă delicată de cremă de lapte.',
    descriptionRu: 'Насыщенный кофейный вкус: двойной шот эспрессо с тонким бархатистым слоем молока.',
    price: 55,
    image: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?w=600&auto=format&fit=crop&q=80',
    category: 'coffee'
  },
  {
    id: 'm5',
    nameRo: 'Caffè Latte',
    nameRu: 'Латте',
    descriptionRo: 'O băutură elegantă și catifelată pe bază de lapte cremos combinat ideal cu un shot de espresso bogat.',
    descriptionRu: 'Нежный кофейный напиток с обилием пропаренного молока и легкой молочной пенкой.',
    price: 55,
    image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fc9f?w=600&auto=format&fit=crop&q=80',
    category: 'coffee'
  },

  // COLD DRINKS
  {
    id: 'm6',
    nameRo: 'Iced Latte',
    nameRu: 'Айс Латте',
    descriptionRo: 'Espresso select extras peste un pahar umplut cu cuburi de gheață și lapte de fermă proaspăt și rece.',
    descriptionRu: 'Освежающий эспрессо, взбитый с холодным молоком, подаваемый на кубиках льда.',
    price: 55,
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=600&auto=format&fit=crop&q=80',
    category: 'cold'
  },
  {
    id: 'm7',
    nameRo: 'Cold Brew',
    nameRu: 'Колд Брю',
    descriptionRo: 'Cafea infuzată la rece timp de 18 ore. Gust extrem de catifelat și fin, cu note bogate de ciocolată și nuci.',
    descriptionRu: 'Кофе холодного настаивания в течение 18 часов. Очень мягкий, шоколадно-ореховый вкус.',
    price: 60,
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=600&auto=format&fit=crop&q=80',
    category: 'cold',
    isPopular: true
  },
  {
    id: 'm8',
    nameRo: 'Frappé',
    nameRu: 'Фраппе',
    descriptionRo: 'Răsfăț dulce de vară: cafea espresso spumată la blender cu gheață pură și sirop de vanilie de Madagascar.',
    descriptionRu: 'Нежный десертный кофе, взбитый в блендере со льдом, натуральным сиропом мадагаскарской ванили.',
    price: 65,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&auto=format&fit=crop&q=80',
    category: 'cold'
  },
  {
    id: 'm9',
    nameRo: 'Iced Mocha',
    nameRu: 'Айс Мокка',
    descriptionRo: 'Un amestec aromat de espresso rece, sos de ciocolată artizanală belgiană, lapte și cuburi de gheață.',
    descriptionRu: 'Шоколадный эспрессо со льдом, холодным молоком и крафтовым какао-соусом.',
    price: 65,
    image: 'https://images.unsplash.com/photo-1517951551104-e3db78f8ec25?w=600&auto=format&fit=crop&q=80',
    category: 'cold'
  },
  {
    id: 'm10',
    nameRo: 'Affogato',
    nameRu: 'Аффогато',
    descriptionRo: 'Un desert legendar: o cupă fină de înghețată cremoasă de vanilie (Plombir) înecată într-un shot fierbinte de espresso.',
    descriptionRu: 'Шарик сливочного ванильного мороженого пломбир, залитый горячим ароматным эспрессо.',
    price: 55,
    image: 'https://images.unsplash.com/photo-1594911774802-8822a707c935?w=600&auto=format&fit=crop&q=80',
    category: 'cold'
  },

  // TEA
  {
    id: 'm11',
    nameRo: 'Earl Grey',
    nameRu: 'Эрл Грей',
    descriptionRo: 'Ceai negru clasic de o calitate excepțională, infuzat cu ulei pur și nobil de bergamotă din Calabria.',
    descriptionRu: 'Классический черный чай с добавлением натурального масла благородного бергамота.',
    price: 45,
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=600&auto=format&fit=crop&q=80',
    category: 'tea'
  },
  {
    id: 'm12',
    nameRo: 'Ceai Verde Sencha',
    nameRu: 'Зеленый чай Сенча',
    descriptionRo: 'Ceai verde organic japonez premium cu note proaspete erbacee și un postgust dulceag reconfortant.',
    descriptionRu: 'Органический японский чай Сенча с чистым травянистым вкусом и бодрящим ароматом.',
    price: 45,
    image: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?w=600&auto=format&fit=crop&q=80',
    category: 'tea'
  },
  {
    id: 'm13',
    nameRo: 'Ceai de Fructe',
    nameRu: 'Фруктовый сбор',
    descriptionRo: 'Un cocktail natural bogat în vitamine: fructe de pădure, flori de hibiscus, măceșe și bucățele dulci de mere.',
    descriptionRu: 'Витаминный сбор из лесных ягод, кусочков сушеного яблока, каркаде и шиповника.',
    price: 48,
    image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?w=600&auto=format&fit=crop&q=80',
    category: 'tea',
    isPopular: true
  },
  {
    id: 'm14',
    nameRo: 'Ceai de Mușețel cu Miere',
    nameRu: 'Ромашковый с медом',
    descriptionRo: 'Infuzie relaxantă din flori întregi de mușețel aromatic, acompaniată de accente subtile de miere de salcâm.',
    descriptionRu: 'Успокаивающий настой из соцветий ромашки с легкими нотками дикого меда и мелиссы.',
    price: 45,
    image: 'https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?w=600&auto=format&fit=crop&q=80',
    category: 'tea'
  },

  // PASTRY
  {
    id: 'm15',
    nameRo: 'Croissant Clasic',
    nameRu: 'Круассан классический',
    descriptionRo: 'Croissant francez autentic realizat cu unt pur franțuzesc de înaltă calitate, fraged, aerat și incredibil de crocant.',
    descriptionRu: 'Классический французский круассан на натуральном сливочном масле, нежный и невероятно хрустящий.',
    price: 35,
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&auto=format&fit=crop&q=80',
    category: 'pastry',
    isPopular: true
  },
  {
    id: 'm16',
    nameRo: 'Cheesecake San Sebastian',
    nameRu: 'Баскский Чизкейк',
    descriptionRo: 'Desert basc copt la temperaturi înalte, cu o crustă caramelizată crocantă și un interior fin și cremos.',
    descriptionRu: 'Нежный выпеченный Сан-Себастьян с карамельной корочкой и нежной кремовой текстурой внутри.',
    price: 65,
    image: 'https://images.unsplash.com/photo-1524351199679-46cddf530c04?w=600&auto=format&fit=crop&q=80',
    category: 'pastry',
    isPopular: true
  },
  {
    id: 'm17',
    nameRo: 'Banana Bread',
    nameRu: 'Банановый хлеб',
    descriptionRo: 'Chec de casă aromat preparat din banane bine coapte și nuci prăjite, servit călduț cu o notă fină de mascarpone.',
    descriptionRu: 'Ароматный домашний кекс со спелыми бананами и грецким орехом. Подается теплым с шариком крем-чиза.',
    price: 48,
    image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=600&auto=format&fit=crop&q=80',
    category: 'pastry'
  },
  {
    id: 'm18',
    nameRo: 'Muffin cu Ciocolată',
    nameRu: 'Шоколадный Маффин',
    descriptionRo: 'Brioșă pufoasă cu miez bogat de ciocolată belgiană topită și fulgi delicioși de alune rumenite.',
    descriptionRu: 'Шоколадный маффин с начинкой из теплого бельгийского шоколада и крошкой лесного ореха.',
    price: 40,
    image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=600&auto=format&fit=crop&q=80',
    category: 'pastry'
  }
];

export const ADVANTAGES: Advantage[] = [
  {
    id: 'a1',
    titleRo: 'Cafea Specialty selectă',
    titleRu: 'Спешелти зерно',
    descriptionRo: 'Folosim exclusiv boabe de cafea de specialitate Arabica, prăjite cu măiestrie de experți artizani din Chișinău.',
    descriptionRu: 'Используем зерна только класса Specialty, тщательно отобранные и обжаренные лучшими ростерами Молдовы.',
    icon: 'Bean'
  },
  {
    id: 'a2',
    titleRo: 'Dulzuri calde în mod zilnic',
    titleRu: 'Свежая выпечка каждый день',
    descriptionRo: 'Croissantele și deserturile noastre de patiserie sunt coapte cu grijă la primele ore pentru un gust unic și proaspăt.',
    descriptionRu: 'Наши круассаны и десерты выпекаются каждое утро прямо в кофейне, чтобы радовать вас теплом и хрустом.',
    icon: 'Croissant'
  },
  {
    id: 'a3',
    titleRo: 'Locație Ultracentrală',
    titleRu: 'Удобное расположение',
    descriptionRo: 'Suntem amplasați în inima Chișinăului. Accesibil și foarte simplu de ajuns pentru un popas relaxant.',
    descriptionRu: 'Находимся в самом центре Кишинёва. Удобно зайти перед работой, во время прогулки или встретиться с друзьями.',
    icon: 'MapPin'
  },
  {
    id: 'a4',
    titleRo: 'Atmosferă Confortabilă',
    titleRu: 'Уютная атмосфера',
    descriptionRo: 'Design contemporan cald, selecție pe suport de vinil și lumini blânde pentru un refugiu liniștit.',
    descriptionRu: 'Камерный утонченный интерьер, тихая виниловая музыка и мягкий свет для вашей концентрации или отдыха.',
    icon: 'Heart'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    url: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&auto=format&fit=crop&q=80',
    category: 'process',
    captionRo: 'Pasiune în prăjire și preparare',
    captionRu: 'Обжарка и заваривание'
  },
  {
    id: 'g2',
    url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&auto=format&fit=crop&q=80',
    category: 'interior',
    captionRo: 'Orele matinale liniștite',
    captionRu: 'Тихие утренние часы'
  },
  {
    id: 'g3',
    url: 'https://images.unsplash.com/photo-1507133750040-4a8f57021571?w=800&auto=format&fit=crop&q=80',
    category: 'drinks',
    captionRo: 'Espresso-ul nostru signature',
    captionRu: 'Наши фирменные шоты'
  },
  {
    id: 'g4',
    url: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?w=800&auto=format&fit=crop&q=80',
    category: 'guests',
    captionRo: 'Căldura clipelor cu prietenii',
    captionRu: 'Тепло дружеских встреч'
  },
  {
    id: 'g5',
    url: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&auto=format&fit=crop&q=80',
    category: 'interior',
    captionRo: 'Lumină naturală și spațiu liber',
    captionRu: 'Обилие воздуха и света'
  },
  {
    id: 'g6',
    url: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&auto=format&fit=crop&q=80',
    category: 'drinks',
    captionRo: 'Metode alternative – filter coffee V60',
    captionRu: 'Фильтрованный кофе'
  }
];
