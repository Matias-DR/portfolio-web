import {
  AboutMeCard,
  ContactCard,
  EducationCard,
  ExperienceCard,
  KnowledgesCard
} from '@/pages/components/cards/'

const cards: {
  [key: string]: {
    title: string
    element: any
  }
} = {
  'knowledges': {
    title: 'Conocimientos',
    element: KnowledgesCard
  },
  'experience': {
    title: 'Experiencia',
    element: ExperienceCard
  },
  'education': {
    title: 'Educación',
    element: EducationCard
  },
  'contact': {
    title: 'Contacto',
    element: ContactCard
  },
  'about-me': {
    title: 'Sobre mí',
    element: AboutMeCard
  },
}

export default cards