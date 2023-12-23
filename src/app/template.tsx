const Template = ({
  children,
}: { children: React.ReactNode }) => {
  return (
    <div>
      <header className="bg-grey-10">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-5 laptop:px-8" aria-label="Global">
          <div className="flex laptop:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
            </a>
          </div>
          <div className="laptop:flex laptop:gap-x-12">
            <a href="#" className="text-sm font-semibold leading-6 text-white font-urbanist-regular px-4 py-2 hover:bg-grey-8 hover:outline hover:outline-grey-15 rounded-md">
              Home
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-white font-urbanist-regular px-4 py-2 hover:bg-grey-8 hover:outline hover:outline-grey-15 rounded-md">
              About Us
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-white font-urbanist-regular px-4 py-2 hover:bg-grey-8 hover:outline hover:outline-grey-15 rounded-md">
              Properties
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-white font-urbanist-regular px-4 py-2 hover:bg-grey-8 hover:outline hover:outline-grey-15 rounded-md">
              Services
            </a>
          </div>
          <div className="hidden laptop:flex laptop:flex-1 laptop:justify-end">
            <a href="#" className="text-sm font-semibold leading-6 text-white font-urbanist-regular px-4 py-2 hover:bg-grey-8 hover:outline hover:outline-grey-15 rounded-md">
              Contact
            </a>
          </div>
        </nav>
      </header>
      {
        children
      }
    </div>
  )
}

export default Template