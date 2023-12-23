"use client"

export default function Home() {
  return (
    <div>
      <div className="flex laptop:flex-row-reverse laptop:flex-row mobile:flex-col mobile:flex-col-reverse mx-auto flex max-w-7xl px-5 laptop:px-8">
        <div className="flex-1 py-16">
          <h2 className="font-urbanist-regular text-white text-6xl">
            Discover Your Dream Property with Estatein
          </h2>
          <p className="font-urbanist-regular text-grey-60 mt-5">
            Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.
          </p>
          <div className="my-10">
            <button
              className="border rounded-md py-3 px-5 mr-5 text-white border-grey-15"
            >
              Learn More
            </button>
            <button
              className="rounded-md py-3 px-5 bg-purples-60 text-white"
            >
              Browse Properties
            </button>
          </div>
          <div className="flex gap-5">
            <div className="flex-1 bg-grey-10 outline outline-grey-15 py-3 px-4 rounded-md">
              <h3
                className="text-white text-3xl"
              >
                200+
              </h3>
              <p className="text-sm text-grey-60 ">Happy Customer</p>
            </div>
            <div className="flex-1 bg-grey-10 outline outline-grey-15 py-3 px-4 rounded-md">
              <h3
                className="text-white text-3xl"
              >
                10k+
              </h3>
              <p className="text-sm text-grey-60">Properties For Clients</p>
            </div>
            <div className="flex-1 bg-grey-10 outline outline-grey-15 py-3 px-4 rounded-md">
              <h3
                className="text-white text-3xl"
              >
                16+
              </h3>
              <p className="text-sm text-grey-60">Years of Experience</p>
            </div>
          </div>
        </div>
        <div 
          className="flex-1"
        >
          <img
            src='/hero-image.png'
            alt='hero image'
          />
            
        </div>
      </div>
      <div className='flex gap-2 p-2'>
        <div
          className="flex-1 bg-grey-10 rounded-md p-6"
        >
          1
        </div>
        <div
          className="flex-1 bg-grey-10 rounded-md p-6"
        >
1
        </div>
        <div
          className="flex-1 bg-grey-10 rounded-md p-6"
        >
1
        </div>
        <div
          className="flex-1 bg-grey-10 rounded-md p-6"
        >
1
        </div>
      </div>
    </div>
  )
}
