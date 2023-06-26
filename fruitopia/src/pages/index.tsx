import { Inter } from 'next/font/google'
import { Hero, ProductCards, ProductShowcase, Recipes, Story, Contact } from '@components/index'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="">
      <Hero />
      <ProductCards />
      <ProductShowcase />
      <Recipes />
      <Story />
      <Contact />
    </div>
  )
}
