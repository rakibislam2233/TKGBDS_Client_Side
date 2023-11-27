import createAccount from '../../../assets/How It is work/createAccount.png'
import searching from '../../../assets/How It is work/search.png'
import application from '../../../assets/How It is work/application.png'
const Work = () => {
  return (
    <div className="w-full px-5 py-10">
    <h3 className='text-3xl font-semibold text-center py-5 text-rose-500'>How It Is Work</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-10 text-center">
      <div className="bg-white shadow-lg p-10 rounded-xl space-y-5 text-gray-700">
        <img className="w-20 h-20 mx-auto" src={createAccount} alt="" />
        <h1 className="font-semibold text-xl ">Create Account</h1>
        <h3 className='font-semibold'>Create account on TKGBDS for free very easily</h3>
      </div>
      <div className="bg-white shadow-lg p-10 rounded-xl space-y-5 text-gray-700">
        <img className="w-20 h-20 mx-auto" src={searching} alt="" />
        <h1 className="font-semibold text-xl ">Find Donar</h1>
        <h3 className='font-semibold'>Easily find blood donors using filters like blood group, district , area etc</h3>
      </div>
      <div className="bg-white shadow-lg p-10 rounded-xl space-y-5 text-gray-700">
        <img className="w-20 h-20 mx-auto" src={application} alt="" />
        <h1 className="font-semibold text-xl ">Application For Blood</h1>
        <h3 className='font-semibold'>Once you find your blood donor, you can request blood and speak directly to the blood donor over the phone</h3>
      </div>
    </div>
  </div>
  )
}

export default Work
