import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div className='flex flex-nowrap gap-6 overflow-x-auto w-full lg:w-2/3 p-4 xl:p-6'>
      {props.users.map((elem, idx) => (
        <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag} />
      ))}
    </div>
  )
}

export default RightContent
