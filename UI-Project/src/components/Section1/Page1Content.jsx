import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className='flex flex-col lg:flex-row gap-10 py-10 px-4 sm:px-6 lg:px-10 xl:px-16'>
      <LeftContent />
      <RightContent users={props.users} />
    </div>
  )
}

export default Page1Content
