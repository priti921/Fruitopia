import React, { FC } from 'react'
import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Story: FC = () => {


  const carouselItems = [
    { id: 1, text: 'Experience the refreshing taste of our organic juices, crafted from carefully selected fruits grown without any harmful pesticides or synthetic fertilizers.' },
    { id: 2, text: 'Indulge in the true essence of fruits with our natural juices, bursting with vibrant flavors and essential nutrients, free from artificial additives and sweeteners.' },
    { id: 3, text: 'Embrace a healthier lifestyle with our range of nutritious juices, thoughtfully designed to boost your well-being, packed with vitamins, antioxidants, and minerals.' },
    { id: 4, text: 'Treat yourself to the pure essence of nature with every sip, as our juices deliver nourishment to your body and soul, capturing the true goodness of fruits.' },
  ];



  return (
    <section className="" id="story">
      <div className="container mx-auto flex flex-col justify-center items-center text-center">
        <div className="my-5">
          <Image
            src="/assets/bottomfruit.png"
            alt="orange"
            height={2000}
            width={2000}
            className="w-[200px]"
          />
        </div>
        <div className='w-full mx-auto'>
          {/* HEADLINE */}
          <div className="flex  space-x-5 justify-center items-center text-center text-5xl mb-6">
            <p className='font-[Satisfy] tracking-tighter'>Our amaing</p>
            <p className='font-[Belanosima] font-medium text-[#6fa720] '>story</p>
          </div>
          <div className='my-5'>
            <p className='uppercase font-[Belanosima] text-gray-500 tracking-widest'>the history</p>
            {/* CAROUSEL */}
            <Carousel showStatus={false} showIndicators={true} infiniteLoop={true} autoPlay
              renderIndicator={(clickHandler, isSelected, index) => (
                <li
                  className={`inline-block mx-1 w-2 h-2 rounded-full ${isSelected ? 'bg-slate-800' : 'bg-slate-300'
                    }`}
                  onClick={clickHandler}
                  key={index}
                  role="button"
                  tabIndex={0}
                />
              )}
            >
              {carouselItems.map(item => (
                <div key={item.id} className="sm:w-1/2 sm:h-20 mx-5 sm:mx-auto mt-7 mb-16 flex justify-center items-center text-slate-600 ">
                  <p className="text-xl">{item.text}</p>
                </div>
              ))}
            </Carousel>

          </div>
        </div>
      </div>

    </section>
  )
}

export default Story
