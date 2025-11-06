const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-4 sm:p-6 md:p-8 flex flex-col justify-between'>
      <h2 className='bg-white rounded-full h-10 w-10 sm:h-12 sm:w-12 flex justify-center items-center text-lg sm:text-xl font-bold'>
        {props.id + 1}
      </h2>
      <div>
        <p className='text-white text-sm sm:text-base leading-relaxed mb-6 sm:mb-10'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quam fuga autem distinctio accusamus nobis.
        </p>
        <div className='flex justify-between items-center'>
          <button className='bg-blue-600 text-white font-medium px-5 sm:px-7 py-2 rounded-full text-sm sm:text-base'>
            {props.tag}
          </button>
          <button>
            <i className='ri-arrow-right-line bg-blue-600 text-white font-medium px-3 py-2 rounded-full'></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default RightCardContent
