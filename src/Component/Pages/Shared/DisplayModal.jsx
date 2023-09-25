import axios from "axios";
import Modal from "./Modal/Modal";
import toast from "react-hot-toast";
import { useContext } from "react";
import { UserContext } from "../../../Provider/AuthProvider/AuthProvider";
import useUser from "../../../hook/UseUser";


const DisplayModal = ({ isOpen, setIsOpen,singleDonar }) => {
  const [user] = useUser()
    const handelSubmit = (e)=>{
        e.preventDefault();
        const form = e.target;
        const patientProblem = form.patientProblem.value;
        const amountBlood = form.amountBlood.value;
        const donateDate  = form.donateDate.value;
        const donateTime = form.donateTime.value;
        const donatePlace = form.donatePlace.value;
        const contact = form.contact.value;
        const applicationForBlood = {patientProblem,amountBlood,donateDate,donateTime,donatePlace,contact,donarEmail: singleDonar?.email,donarName:singleDonar?.name,appliedPersonEmail:user?.email,status:"pending",bloodGroup:singleDonar?.bloodGroup,patientName:user?.displayName}
        axios.post(`http://localhost:5000/post-applicattionForBlood`,applicationForBlood)
        .then(res=>{
            if(res.data.insertedId){
                toast.success("Your application has been successfully")
                form.reset()
                setIsOpen(false)
            }
        })
        .catch(err => toast.error(err.message))
        
    }
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <form onSubmit={handelSubmit} className="text-gray-900 space-y-2">
        <div className="flex flex-col gap-1">
          <label htmlFor="patientProblem">রোগীর সমস্যা</label>
          <input
            type="text"
            name="patientProblem"
            id="patientProblem"
            placeholder="রোগীর সমস্যা লিখুন"
            required
            className="w-full outline-none focus:outline-1 focus:outline-red-500 py-2 px-3 bg-gray-200 text-gray-900 rounded"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="amountBlood"> রক্তের পরিমাণ</label>
          <input
            type="number"
            name="amountBlood"
            placeholder="রক্তের পরিমাণ লিখুন"
            id="amountBlood"
            required
            className="w-full outline-none focus:outline-1 focus:outline-red-500 py-2 px-3 bg-gray-200 text-gray-900 rounded"
            min={1}
            max={10}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="donateDate">রক্তদানের তারিখ</label>
          <input
            type="date"
            name="donateDate"
            placeholder="রক্তদানের তারিখ লিখুন"
            id="donateDate"
            className="w-full outline-none focus:outline-1 focus:outline-red-500 py-2 px-3 bg-gray-200 text-gray-900 rounded"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="donateTime">রক্তদানের সময়</label>
          <input
            type="text"
            name="donateTime"
            placeholder="রক্তদানের সময় লিখুন"
            id="donateTime"
            className="w-full outline-none focus:outline-1 focus:outline-red-500 py-2 px-3 bg-gray-200 text-gray-900 rounded"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="donatePlace"> রক্তদানের স্থান</label>
          <input
            type="text"
            name="donatePlace"
            id="donatePlace"
            placeholder="রক্তদানের স্থান লিখুন"
            required
            className="w-full outline-none focus:outline-1 focus:outline-red-500 py-2 px-3 bg-gray-200 text-gray-900 rounded"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="contact">যোগাযোগ</label>
          <input
            type="number"
            name="contact"
            id="contact"
            placeholder="যোগাযোগ নাম্বার লিখুন"
            required
            className="w-full outline-none focus:outline-1 focus:outline-red-500 py-2 px-3 bg-gray-200 text-gray-900 rounded"
          />
        </div>
        <div className="flex justify-end gap-4 pt-5">
          <div
            onClick={() => setIsOpen(false)}
            className="py-2 px-5 bg-gradient-to-r from-rose-600 to-pink-500 rounded-full text-white cursor-pointer"
          >
            Cancel
          </div>
          <button className="py-2 px-5 bg-gradient-to-r from-rose-600 to-pink-500 rounded-full text-white">
            Submit
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default DisplayModal;
