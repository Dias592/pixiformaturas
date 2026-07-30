export const BUSINESS = {
  name: 'Pixi Formaturas',
  slogan: 'Fotógrafo de Formatura Escolar e Universitária · São Paulo',
  headline: 'Sua turma merece Fotos que Emocionam para sempre',
  description:
    'Especialistas em fotografia de formatura escolar e universitária em São Paulo desde 2015. Cobertura completa para 9º ano, 3º ano do Ensino Médio, colação de grau universitária, fotos de turma, ensaio externo e álbum digital em 30 dias. Atendemos todas as zonas da cidade.',
  url: 'https://pixiformaturas.com.br',
  whatsapp: '5511998964797',
  whatsappMsg:
    'Olá! Vim pelo site e gostaria de um orçamento para fotografia de formatura.',
  email: 'contato@pixiformaturas.com.br',
  instagram: 'https://www.instagram.com/pixiformaturas',
  city: 'São Paulo',
  state: 'SP',
  country: 'BR',
  foundingYear: 2015,
  logoUrl: '/images/pixi-formaturas-logo.png',
  ogImage: '/images/og-pixi-formaturas.jpg',
}

export const whatsappLink = (msg?: string) =>
  `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(
    msg || BUSINESS.whatsappMsg
  )}`

export const SERVICES = [
  {
    slug: 'fotos-de-turma',
    name: 'Fotos de Turma',
    shortName: 'Fotos de Turma',
    title: 'Fotos de Turma de Formatura em SP',
    h1: 'Fotos de Turma de Formatura em São Paulo',
    description:
      'Ensaio fotográfico criativo e descontraído que captura a união da turma. Ideal para 9º ano e 3º ano do Ensino Médio. Realizamos em locações internas e externas escolhidas pela turma.',
    tags: ['9º Ano', '3º Médio', 'Ensaio Externo', 'Estúdio'],
    cover: '/images/servicos/fotos-de-turma-capa.jpg',
  },
  {
    slug: 'colacao-de-grau',
    name: 'Colação de Grau',
    shortName: 'Colação de Grau',
    title: 'Fotógrafo para Colação de Grau Oficial em SP',
    h1: 'Fotógrafo para Colação de Grau em São Paulo',
    description:
      'Cobertura fotográfica completa da cerimônia oficial de colação de grau, registrando cada momento solene com discrição e qualidade profissional.',
    tags: ['Cerimônia Oficial', 'Universidade', 'Discrição'],
    cover: '/images/servicos/colacao-de-grau-capa.jpg',
  },
  {
    slug: 'colacao-festiva',
    name: 'Colação Festiva',
    shortName: 'Colação Festiva',
    title: 'Fotógrafo para Colação Festiva e Baile de Gala SP',
    h1: 'Fotógrafo para Colação Festiva em São Paulo',
    description:
      'Cobertura fotográfica completa do baile de gala e da festa de formatura. Registramos cada abraço e emoção com sensibilidade e espontaneidade — do jantar de gala à pista de dança.',
    tags: ['Baile de Gala', 'Jantar Gala', 'Festa Formatura'],
    cover: '/images/servicos/colacao-festiva-capa.jpg',
  },
  {
    slug: 'jantar-baile-de-gala',
    name: 'Jantar e Baile de Gala',
    shortName: 'Baile de Gala',
    title: 'Fotógrafo para Jantar de Gala e Baile de Formatura SP',
    h1: 'Fotógrafo para Jantar de Gala e Baile de Formatura',
    description:
      'Registro completo do jantar de gala e do baile de formatura, com fotos espontâneas e posadas que eternizam a festa de encerramento da turma.',
    tags: ['Jantar de Gala', 'Baile', 'Festa'],
    cover: '/images/servicos/jantar-baile-capa.jpg',
  },
  {
    slug: 'ensaio-personalizado',
    name: 'Ensaio Personalizado',
    shortName: 'Ensaio Personalizado',
    title: 'Ensaio Personalizado de Formatura em SP',
    h1: 'Ensaio Personalizado de Turma em São Paulo',
    description:
      'Ensaio fotográfico personalizado para a turma, com conceito e locação definidos junto à comissão de formatura, criando um registro único e autêntico.',
    tags: ['Personalizado', 'Conceito', 'Locação Externa'],
    cover: '/images/servicos/ensaio-personalizado-capa.jpg',
  },
  {
    slug: 'ensaio-externo',
    name: 'Ensaio Externo',
    shortName: 'Ensaio Externo',
    title: 'Ensaio Externo de Formatura em SP',
    h1: 'Ensaio Externo de Formatura em São Paulo',
    description:
      'Ensaio fotográfico ao ar livre em parques e locações urbanas de São Paulo, como Ibirapuera, Villa-Lobos e Beco do Batman, aproveitando luz natural e cenário externo.',
    tags: ['Ar Livre', 'Luz Natural', 'Parques de SP'],
    cover: '/images/servicos/ensaio-externo-capa.jpg',
  },
  {
    slug: 'photo-day',
    name: 'Photo Day Exclusivo',
    shortName: 'Photo Day',
    title: 'Photo Day de Formatura Escolar em SP',
    h1: 'Photo Day Exclusivo de Formatura em São Paulo',
    description:
      'Um dia inteiro dedicado exclusivamente à turma, com diferentes cenários, looks e poses para criar um álbum completo e diversificado.',
    tags: ['Dia Exclusivo', 'Múltiplos Cenários', 'Turma'],
    cover: '/images/servicos/photo-day-capa.jpg',
  },
  {
    slug: 'pre-eventos',
    name: 'Pré-Eventos Memoráveis',
    shortName: 'Pré-Eventos',
    title: 'Pré-Eventos de Formatura em SP',
    h1: 'Pré-Eventos Memoráveis de Formatura em São Paulo',
    description:
      'Cobertura fotográfica de pré-eventos da formatura, como chá de turma, encontros da comissão e celebrações que antecedem a colação de grau.',
    tags: ['Pré-Evento', 'Chá de Turma', 'Comissão'],
    cover: '/images/servicos/pre-eventos-capa.jpg',
  },
  {
    slug: 'album-digital',
    name: 'Álbum Digital de Formatura',
    shortName: 'Álbum Digital',
    title: 'Álbum Digital de Formatura SP',
    h1: 'Álbum Digital de Formatura em São Paulo',
    description:
      'Galeria online em alta resolução, entregue em até 30 dias, com link de download e compartilhamento para toda a turma.',
    tags: ['Galeria Online', '30 Dias', 'Alta Resolução'],
    cover: '/images/servicos/album-digital-capa.jpg',
  },
  {
    slug: 'album-impresso',
    name: 'Álbum Impresso Personalizado',
    shortName: 'Álbum Impresso',
    title: 'Álbum Impresso de Formatura Personalizado SP',
    h1: 'Álbum Impresso Personalizado de Formatura',
    description:
      'Álbum físico personalizado por turma, com design exclusivo, papel fotográfico de alta qualidade e acabamento premium.',
    tags: ['Físico', 'Personalizado', 'Premium'],
    cover: '/images/servicos/album-impresso-capa.jpg',
  },
  {
    slug: 'identificacao-personalizada',
    name: 'Identificação Personalizada',
    shortName: 'Reconhecimento Facial',
    title: 'Identificação Personalizada em Fotos de Formatura SP',
    h1: 'Identificação Personalizada em Fotografia de Formatura',
    description:
      'Tecnologia de reconhecimento facial que identifica automaticamente cada aluno nas fotos, facilitando a busca de imagens individuais na galeria digital.',
    tags: ['Reconhecimento Facial', 'Tecnologia', 'Praticidade'],
    cover: '/images/servicos/identificacao-personalizada-capa.jpg',
  },
  {
    slug: 'solucoes-digitais',
    name: 'Soluções Digitais para Fotografia de Formatura',
    shortName: 'Soluções Digitais',
    title: 'Soluções Digitais para Fotografia de Formatura SP',
    h1: 'Soluções Digitais para Fotografia de Formatura',
    description:
      'Plataformas digitais completas para entrega, organização e compartilhamento das fotos de formatura, integradas com reconhecimento facial e download em alta resolução.',
    tags: ['Plataforma', 'Integração', 'Galeria Digital'],
    cover: '/images/servicos/solucoes-digitais-capa.jpg',
  },
]

export const FOOTER_SERVICES = [
  'Fotografia Profissional de Formaturas',
  'Cobertura Fotográfica de Formatura',
  'Identificação Personalizada (reconhecimento facial)',
  'Photo Day Exclusivo',
  'Pré-Eventos Memoráveis',
  'Colação de Grau — Oficial e Festiva',
  'Jantar de Gala e Baile de Gala',
  'Fotos de Turma',
  'Ensaio Personalizado da Turma',
  'Ensaio Externo de Formatura',
  'Álbum Impresso Personalizado por Turma',
  'Álbum Digital de Formatura',
  'Soluções Digitais para Fotografia de Formatura',
]

export const DIFERENCIAIS = [
  {
    number: '01',
    icon: '🏆',
    title: 'Especialistas em formatura escolar e universitária',
    text: 'Experiência com colégios e faculdades de São Paulo — do 9º ano à colação de grau universitária. Conhecemos cada detalhe do protocolo e da dinâmica de formaturas escolares e universitárias.',
  },
  {
    number: '02',
    icon: '⚡',
    title: 'Entrega rápida: álbum digital em 30 dias',
    text: 'Galeria online em alta resolução entregue em até 30 dias após o evento, com link de download e compartilhamento para toda a turma.',
  },
  {
    number: '03',
    icon: '💳',
    title: 'Parcelamento em até 12X',
    text: 'Facilitamos o pagamento para a comissão de formatura com parcelamento no cartão. Orçamento personalizado por escola, turma e pacote.',
  },
  {
    number: '04',
    icon: '📍',
    title: 'Atendemos todas as zonas de SP',
    text: 'Zona Sul, Zona Norte, Zona Leste, Zona Oeste e Grande São Paulo. Levamos toda a estrutura fotográfica até o colégio ou locação escolhida.',
  },
  {
    number: '05',
    icon: '🤫',
    title: 'Cobertura discreta em cerimônias',
    text: 'Atuação silenciosa em colações oficiais e cerimônias religiosas, sem interferir no protocolo, com equipamento profissional.',
  },
]

export const HOME_FAQ = [
  {
    question: 'Quais tipos de formatura a Pixi Formaturas atende?',
    answer:
      'Atendemos todos os níveis escolares: 9º ano do Ensino Fundamental, 3º ano do Ensino Médio, e colações de grau universitárias. Cobrimos fotos de turma, ensaio externo, colação oficial, colação festiva e baile de gala.',
  },
  {
    question: 'A Pixi Formaturas atende escolas públicas?',
    answer:
      'Sim. Atendemos escolas públicas e particulares em toda São Paulo e Grande SP, com orçamento personalizado para cada escola, turma e pacote.',
  },
  {
    question: 'Qual o prazo de entrega das fotos de formatura?',
    answer:
      'O álbum digital é entregue em até 30 dias após o último evento da formatura, em galeria online de alta resolução com link de download para toda a turma.',
  },
  {
    question: 'O que é o reconhecimento facial nas fotos de formatura?',
    answer:
      'É uma tecnologia que identifica automaticamente cada aluno nas fotos, permitindo que cada formando encontre todas as suas imagens de forma fácil e rápida na galeria digital.',
  },
  {
    question: 'Quais regiões de São Paulo a Pixi Formaturas atende?',
    answer:
      'Atendemos todas as zonas de São Paulo (Sul, Norte, Leste, Oeste e Centro) e toda a Grande SP: Guarulhos, Osasco, ABC Paulista, Mogi das Cruzes e região. Levamos toda a estrutura fotográfica até o local.',
  },
  {
    question: 'É possível parcelar a fotografia de formatura?',
    answer:
      'Sim. Facilitamos o pagamento para a comissão de formatura com parcelamento em até 12x no cartão de crédito. O orçamento é personalizado por escola, turma e pacote contratado.',
  },
  {
    question: 'Com quanto tempo de antecedência devo contratar o fotógrafo?',
    answer:
      'Recomendamos contratar com pelo menos 3 a 6 meses de antecedência, especialmente para formaturas de fim de ano (outubro–dezembro), quando a agenda se esgota rapidamente.',
  },
  {
    question: 'A Pixi Formaturas faz cobertura discreta em cerimônias religiosas?',
    answer:
      'Sim. Nossa equipe tem experiência em atuação silenciosa e discreta em colações oficiais e cerimônias religiosas, sem interferir no protocolo, utilizando equipamento profissional adequado para ambientes com restrição de flash ou movimentação.',
  },
]

export const ZONAS_SP = [
  {
    zona: 'Zona Sul',
    bairros: [
      'Ipiranga',
      'Saúde',
      'Jabaquara',
      'Campo Limpo',
      'Capão Redondo',
      "M'Boi Mirim",
      'Parelheiros',
      'Cidade Dutra',
      'Vila Mariana',
      'Moema',
      'Brooklin',
      'Santo Amaro',
      'Interlagos',
    ],
  },
  {
    zona: 'Zona Norte',
    bairros: [
      'Santana',
      'Tucuruvi',
      'Jaçanã',
      'Tremembé',
      'Pirituba',
      'Perus',
      'Casa Verde',
      'Limão',
      'Mandaqui',
    ],
  },
  {
    zona: 'Zona Leste',
    bairros: [
      'Penha',
      'Mooca',
      'Tatuapé',
      'Vila Prudente',
      'Sapopemba',
      'Itaquera',
      'São Mateus',
      'Guaianases',
      'Ermelino Matarazzo',
      'Cidade Tiradentes',
    ],
  },
  {
    zona: 'Zona Oeste',
    bairros: [
      'Lapa',
      'Pinheiros',
      'Butantã',
      'Perdizes',
      'Vila Leopoldina',
      'Jaguaré',
      'Morumbi',
      'Itaim Bibi',
    ],
  },
  {
    zona: 'Centro',
    bairros: ['República', 'Sé', 'Bela Vista', 'Liberdade', 'Santa Cecília', 'Consolação'],
  },
  {
    zona: 'Grande SP',
    bairros: [
      'Guarulhos',
      'Osasco',
      'Mogi das Cruzes',
      'Suzano',
      'Santo André',
      'São Caetano do Sul',
      'São Bernardo do Campo',
      'Diadema',
      'Mauá',
      'Ribeirão Pires',
    ],
  },
]

export const TESTIMONIALS = [
  {
    name: 'Comissão de Formatura — 9º Ano · Zona Sul',
    text: 'A Pixi acompanhou cada etapa da nossa formatura com muito profissionalismo. As fotos ficaram lindas e o álbum digital chegou antes do prazo!',
  },
  {
    name: 'Comissão de Formatura — 3º Médio · Zona Oeste',
    text: 'Equipe super discreta durante a cerimônia e muito animada no baile. Conseguiram capturar exatamente o clima da nossa turma.',
  },
  {
    name: 'Comissão de Formatura — Colação de Grau · Centro',
    text: 'Cobertura impecável da colação de grau. Fotos de altíssima qualidade e entrega rápida via galeria online com reconhecimento facial.',
  },
  {
    name: 'Comissão de Formatura — 9º Ano · Zona Norte',
    text: 'Recomendamos a Pixi para qualquer escola que queira um trabalho sério. Parcelamento facilitou muito para a turma toda.',
  },
  {
    name: 'Comissão de Formatura — Ensaio Externo · Zona Leste',
    text: 'O ensaio externo foi incrível, a equipe escolheu um ótimo local e todo mundo amou as fotos. Super recomendo!',
  },
  {
    name: 'Comissão de Formatura — Baile de Gala · Grande SP',
    text: 'Vieram até Guarulhos com toda a estrutura. Registraram cada momento do baile com muita sensibilidade. Álbum maravilhoso!',
  },
]

export const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Solicite o orçamento pelo WhatsApp',
    text: 'Entre em contato e conte sobre a sua turma, escola e tipo de evento.',
  },
  {
    step: '02',
    title: 'Reunião de alinhamento com a comissão',
    text: 'Definimos juntos os detalhes do pacote, datas e locações.',
  },
  {
    step: '03',
    title: 'Dia da fotografia — estrutura completa no local',
    text: 'Nossa equipe leva todo o equipamento profissional até o colégio ou locação.',
  },
  {
    step: '04',
    title: 'Álbum digital entregue em até 30 dias',
    text: 'Galeria online em alta resolução com link de download para toda a turma.',
  },
]
