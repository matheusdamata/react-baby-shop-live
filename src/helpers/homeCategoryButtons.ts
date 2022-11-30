import CategoryIconBabies from '../assets/category/babies.png'
import CategoryIconOutfits from '../assets/category/outfits.png'
import CategoryIconKids from '../assets/category/kids.png'
import CategoryIconNurturing from '../assets/category/nurturing.png'
import CategoryIconGirls from '../assets/category/girls.png'
import CategoryIconChildCare from '../assets/category/child-care.png'

export type CategoryButtonsProps = {
  icon: string
  title: string
  color: 'limon' | 'blue' | 'pink'
  border: 'limon' | 'blue' | 'pink'
}

export const homeCategoryButtons = <CategoryButtonsProps[]>[
  {
    icon: CategoryIconBabies,
    title: 'Babies',
    color: 'limon',
    border: 'limon',
  },
  {
    icon: CategoryIconOutfits,
    title: 'Outfits',
    color: 'blue',
    border: 'blue',
  },
  {
    icon: CategoryIconKids,
    title: 'Kids',
    color: 'pink',
    border: 'pink',
  },
  {
    icon: CategoryIconNurturing,
    title: 'Nurturing',
    color: 'limon',
    border: 'limon',
  },
  {
    icon: CategoryIconGirls,
    title: 'Girls',
    color: 'blue',
    border: 'blue',
  },
  {
    icon: CategoryIconChildCare,
    title: 'Child Care',
    color: 'pink',
    border: 'pink',
  },
]
