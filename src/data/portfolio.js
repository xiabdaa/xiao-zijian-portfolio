export const contact = {
  email: 'xiaozijian9@gmail.com',
  instagram: '@xiabdaa',
  instagramUrl: 'https://www.instagram.com/xiabdaa',
}

const asset = (path) => `${import.meta.env.BASE_URL}${path}`

export const copy = {
  nav: {
    works: { cn: '作品', en: 'Works' },
    about: { cn: '关于', en: 'About' },
    cv: { cn: '简历', en: 'CV' },
    contact: { cn: '联系', en: 'Contact' },
    menu: { cn: '菜单', en: 'Menu' },
    close: { cn: '关闭', en: 'Close' },
  },
  hero: {
    eyebrow: { cn: '个人作品集 / 视觉艺术 / 策展', en: 'Portfolio / Visual Art / Curating' },
    title: { cn: 'XIAO ZIJIAN', en: 'XIAO ZIJIAN' },
    role: { cn: '视觉艺术家与策展人', en: 'Visual Artist & Curator' },
    intro: {
      cn: 'Xiao Zijian 的创作与策展实践横跨摄影、绘画、展览与素描，关注个人经验、记忆、现实与图像叙事之间的关系。',
      en: 'Xiao Zijian works across photography, painting, exhibitions, and drawing, tracing the relationship between personal experience, memory, reality, and image-based narrative.',
    },
    button: { cn: '查看作品', en: 'View Works' },
    contact: { cn: '联系', en: 'Contact' },
    caption: { cn: '视觉研究 / 代表图像区域', en: 'Visual study / featured image field' },
    image: asset('portfolio/featured-art.jpg'),
  },
  sections: {
    workEyebrow: { cn: '作品目录', en: 'Works Directory' },
    workTitle: { cn: '四个入口，像杂志目录一样展开。', en: 'Four entries, arranged like a magazine index.' },
    aboutEyebrow: { cn: '关于实践', en: 'About Practice' },
    aboutTitle: { cn: '在图像、现场与记忆之间工作。', en: 'Working between image, site, and memory.' },
    aboutText: {
      cn: '我是一名视觉艺术家与策展人，实践包括摄影、绘画、展览与素描。作品关注个人经验如何被图像保存、转译和重新组织，也关注现实场景与记忆叙事之间不断变化的关系。',
      en: 'I am a visual artist and curator working across photography, painting, exhibitions, and sketch-based research. The practice explores how personal experience is preserved, translated, and reorganized through images, while studying the shifting relationship between lived reality and memory.',
    },
    readAbout: { cn: '阅读关于', en: 'Read About' },
  },
  worksPage: {
    eyebrow: { cn: '作品 / 目录', en: 'Works / Directory' },
    title: { cn: '以分类进入作品，让目录本身成为观看方式。', en: 'Enter through categories, where the directory becomes a way of seeing.' },
    intro: {
      cn: '分类目录以摄影、绘画、展览与素描为主要入口，让作品以更接近出版物目录的方式被浏览。',
      en: 'The directory opens through photography, painting, exhibitions, and sketch works, allowing the portfolio to read closer to an editorial index.',
    },
  },
  aboutPage: {
    eyebrow: { cn: '关于 Xiao Zijian', en: 'About Xiao Zijian' },
    title: { cn: '视觉艺术家与策展人。', en: 'Visual Artist & Curator.' },
    intro: {
      cn: '创作实践从个人经验出发，穿过摄影、架上绘画、展览现场与素描档案，建立一种介于现实记录与主观叙事之间的视觉语言。',
      en: 'The practice begins with personal experience and moves through photography, easel painting, exhibition sites, and sketch archives, building a visual language between documentary reality and subjective narrative.',
    },
  },
  cvPage: {
    eyebrow: { cn: 'CV / 框架', en: 'CV / Framework' },
    title: { cn: '展览、教育、项目与文本。', en: 'Exhibitions, education, projects, and texts.' },
  },
  contactPage: {
    eyebrow: { cn: '联系', en: 'Contact' },
    title: { cn: '合作、展览与作品咨询。', en: 'Collaborations, exhibitions, and artwork inquiries.' },
    intro: {
      cn: '如果你想了解作品、展览或策展合作，可以通过邮箱或 Instagram 联系。',
      en: 'For artwork, exhibition, or curatorial inquiries, reach out by email or Instagram.',
    },
  },
}

export const navItems = [
  { path: '/works', label: copy.nav.works },
  { path: '/about', label: copy.nav.about },
  { path: '/cv', label: copy.nav.cv },
  { path: '/contact', label: copy.nav.contact },
]

export const categories = [
  {
    id: 'photography',
    path: '/photography',
    number: '01',
    title: { cn: '摄影作品', en: 'Photography Works' },
    subtitle: { cn: '图像、场景、日常档案', en: 'Image, site, everyday archive' },
    description: {
      cn: '以摄影作为记忆与现实之间的切面，通过安静的灰度研究建立项目节奏。',
      en: 'Photography as a surface between memory and reality, held through quiet grayscale studies.',
    },
    meta: { cn: '摄影 / 档案 / 叙事', en: 'Photography / Archive / Narrative' },
    variant: 'photography',
    image: asset('portfolio/photography-work.jpg'),
    imagePosition: 'center',
    imageScale: 1.1,
  },
  {
    id: 'paintings',
    path: '/paintings',
    number: '02',
    title: { cn: '架上创作', en: 'Easel Paintings' },
    subtitle: { cn: '绘画、材质、观看', en: 'Painting, material, looking' },
    description: {
      cn: '保留画布、笔触和灰阶色面的空间，用于后续放置系列绘画。',
      en: 'A reserved space for canvas, gesture, and tonal fields that can later hold painting series.',
    },
    meta: { cn: '绘画 / 画布 / 形式', en: 'Painting / Canvas / Form' },
    variant: 'paintings',
    image: asset('portfolio/easel-painting.jpg'),
    imagePosition: 'center top',
    parallaxDistance: 28,
    compactParallaxDistance: 20,
    feature: {
      eyebrow: { cn: '架上作品 / 竖版图像', en: 'Easel Work / Portrait Image' },
      title: { cn: '竖版完整作品图', en: 'Full Portrait Work' },
      description: {
        cn: '完整保留竖向画面比例，作为架上作品页面的重点图像展示。',
        en: 'A full portrait-format image held at its original vertical proportion for the easel painting page.',
      },
      image: asset('portfolio/easel-detail-vertical.jpg'),
      imagePosition: 'center',
      fit: 'contain',
    },
  },
  {
    id: 'exhibitions',
    path: '/exhibitions',
    number: '03',
    title: { cn: '艺术展览作品', en: 'Exhibitions' },
    subtitle: { cn: '现场、策展、空间叙事', en: 'Site, curating, spatial narrative' },
    description: {
      cn: '以展览作为作品、观看路径和空间关系的组织方式。',
      en: 'Exhibitions as a way to organize works, viewing paths, and spatial relations.',
    },
    meta: { cn: '展览 / 现场 / 策展', en: 'Exhibition / Site / Curating' },
    variant: 'exhibitions',
    coverImage: asset('portfolio/exhibition-cover.svg'),
    coverImagePosition: 'center',
    coverImageScale: 1,
    parallaxDistance: 28,
    compactParallaxDistance: 20,
    document: {
      eyebrow: { cn: '展览文件 / PDF', en: 'Exhibition File / PDF' },
      title: { cn: 'Design 01', en: 'Design 01' },
      description: {
        cn: '展览相关 PDF 文件，可在页面中预览，也可以单独打开查看。',
        en: 'An exhibition-related PDF file, available to preview in the page or open separately.',
      },
      src: asset('portfolio/exhibition-design-01.pdf'),
    },
  },
  {
    id: 'sketches',
    path: '/sketches',
    number: '04',
    title: { cn: '素描作品', en: 'Sketch Works' },
    subtitle: { cn: '手稿、线条、研究', en: 'Draft, line, study' },
    description: {
      cn: '将素描作为思考的现场，展示线条、手稿和图像研究的过程。',
      en: 'Sketching as a live field of thought, showing line, draft, and image research processes.',
    },
    meta: { cn: '素描 / 手稿 / 研究', en: 'Sketch / Draft / Study' },
    variant: 'sketches',
    image: asset('portfolio/sketch-work.jpg'),
    imagePosition: 'center',
    imageScale: 1.06,
  },
]

export const projects = {
  photography: [
    {
      title: { cn: '夜间档案', en: 'Nocturne Archive' },
      year: '2026',
      type: { cn: '摄影系列', en: 'Photo Series' },
      description: {
        cn: '从夜间环境中抽取片段，形成一组关于观看和记忆的图像档案。',
        en: 'Fragments drawn from nocturnal spaces form an image archive about looking and memory.',
      },
    },
    {
      title: { cn: '灰街研究', en: 'Grey Street Study' },
      year: '2025',
      type: { cn: '影像研究', en: 'Image Study' },
      description: {
        cn: '城市表面、行走路径与个人记忆的图像研究。',
        en: 'A study of urban surfaces, walking routes, and personal memory.',
      },
    },
    {
      title: { cn: '室内天气', en: 'Interior Weather' },
      year: '2025',
      type: { cn: '摄影 / 装置草案', en: 'Photography / Installation Draft' },
      description: {
        cn: '围绕室内光线和情绪痕迹建立的图像研究。',
        en: 'A visual study around interior light and emotional traces.',
      },
    },
  ],
  paintings: [
    {
      title: { cn: '未命名灰阶', en: 'Untitled Greyscale' },
      year: '2026',
      type: { cn: '布面绘画', en: 'Painting on Canvas' },
      description: {
        cn: '以克制的灰阶和覆盖关系，建立一组介于物象与表面之间的绘画。',
        en: 'Restrained greyscale and layered covering build paintings between object and surface.',
      },
    },
    {
      title: { cn: '记忆表面', en: 'Surface of Memory' },
      year: '2025',
      type: { cn: '绘画研究', en: 'Painting Study' },
      description: {
        cn: '通过色面与遮盖关系组织视觉层次。',
        en: 'A study of tonal planes, concealment, and visual layers.',
      },
    },
    {
      title: { cn: '静物之后', en: 'After Still Life' },
      year: '2025',
      type: { cn: '系列草案', en: 'Series Draft' },
      description: {
        cn: '把静物观看转化为图像结构的绘画研究。',
        en: 'A painting study that turns still-life looking into image structure.',
      },
    },
  ],
  exhibitions: [
    {
      title: { cn: '暂定展览一', en: 'Provisional Exhibition I' },
      year: '2026',
      type: { cn: '展览项目', en: 'Exhibition Project' },
      description: {
        cn: '围绕现场、作品列表和策展文本展开的展览项目。',
        en: 'An exhibition project structured around site, work lists, and curatorial text.',
      },
    },
    {
      title: { cn: '图像之后的房间', en: 'A Room After Images' },
      year: '2025',
      type: { cn: '策展项目', en: 'Curatorial Project' },
      description: {
        cn: '围绕空间、图像和观看路线的展览研究。',
        en: 'An exhibition study around space, image, and viewing paths.',
      },
    },
    {
      title: { cn: '开放档案', en: 'Open Archive' },
      year: '2024',
      type: { cn: '展览研究', en: 'Exhibition Research' },
      description: {
        cn: '为研究型展览保留的目录结构。',
        en: 'A directory structure reserved for research-led exhibitions.',
      },
    },
  ],
  sketches: [
    {
      title: { cn: '线条笔记', en: 'Line Notes' },
      year: '2026',
      type: { cn: '素描', en: 'Drawing' },
      description: {
        cn: '以线条笔记记录观看发生之前的判断、停顿和修正。',
        en: 'Line notes record judgment, pause, and revision before an image settles.',
      },
    },
    {
      title: { cn: '每日研究', en: 'Daily Studies' },
      year: '2025',
      type: { cn: '纸本研究', en: 'Works on Paper' },
      description: {
        cn: '以日常观察为基础的纸本练习。',
        en: 'Works on paper based on daily observation.',
      },
    },
    {
      title: { cn: '图像草稿', en: 'Image Drafts' },
      year: '2025',
      type: { cn: '手稿档案', en: 'Manuscript Archive' },
      description: {
        cn: '用于承接后续手稿和过程图像。',
        en: 'An archive for drafts, process images, and visual notes.',
      },
    },
  ],
}

export const cvSections = [
  {
    title: { cn: '教育经历', en: 'Education' },
    items: [
      { year: '20XX', text: { cn: '学校 / 专业 / 城市', en: 'School / Program / City' } },
      { year: '20XX', text: { cn: '工作坊、驻留或研究项目', en: 'Workshop, residency, or research program' } },
    ],
  },
  {
    title: { cn: '展览', en: 'Exhibitions' },
    items: [
      { year: '20XX', text: { cn: '展览名称，空间，城市', en: 'Exhibition Title, Venue, City' } },
      { year: '20XX', text: { cn: '群展 / 个展信息', en: 'Group / solo exhibition entry' } },
    ],
  },
  {
    title: { cn: '策展项目', en: 'Curatorial Projects' },
    items: [
      { year: '20XX', text: { cn: '项目名称，空间，城市', en: 'Project Title, Space, City' } },
      { year: '20XX', text: { cn: '研究、公共项目或合作项目', en: 'Research, public, or collaborative project' } },
    ],
  },
  {
    title: { cn: '出版与文本', en: 'Publications & Texts' },
    items: [
      { year: '20XX', text: { cn: '出版物、文章或艺术家文本', en: 'Publication, article, or artist text' } },
    ],
  },
]
