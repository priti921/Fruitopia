import React from 'react'
import RecipeCard from '@components/ui/RecipeCard'

const Recipes = () => {

  const cardData = [
    {
      name: "Sunshine Splash",
      price: "$6.9",
      image: "/assets/productbox1.png"
    },
    {
      name: "Mango Tango Twist",
      price: "$6.9",
      image: "/assets/productbox2.png"
    },
    {
      name: "Berry Blaze Burst",
      price: "$6.9",
      image: "/assets/productbox3.png"
    },
    {
      name: "Crimson Crush",
      price: "$6.9",
      image: "/assets/productbox4.png"
    }]

  return (
    <section id="recipes" className="h-full">
      {/* PRODUCT TITLE */}
      <div className="container mx-auto sm:-mt-10 2xl:px-24 pt-36 xl:pt-24 2xl:pt-32">
        <div className="mx-auto text-center  xl:w-1/2 flex flex-col w-full ">
          <div className="flex  items-center justify-center text-xl xl:text-4xl 2xl:text-5xl">
            <span className="font-['Satisfy'] tracking-wider">Our favorite </span>
            <span className="font-[Belanosima] font-medium tracking-wide text-[#6fa720]  mx-3">recipes</span>
          </div>
        </div>
        {/* CARDS */}
        <div className="flex space-x-10 mx-16 sm:my-10">
          {
            cardData.map(({ name, price, image }) => <RecipeCard key={name} name={name} price={price} image={image} />)
          }
        </div>
      </div>
    </section>

  )
}

export default Recipes
