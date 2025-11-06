import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='relative shrink-0 rounded-3xl overflow-hidden w-64 sm:w-72 md:w-80 aspect-4/5'>
      <img className='h-full w-full object-cover' src={props.img} alt='' />
      <RightCardContent tag={props.tag} id={props.id} />
    </div>
  )
}

export default RightCard
