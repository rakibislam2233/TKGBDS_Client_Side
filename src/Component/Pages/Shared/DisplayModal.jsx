import axios from "axios";
import moment from "moment";
import { useState } from "react";
import toast from "react-hot-toast";
import { ImSpinner9 } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useUser from "../../../hook/UseUser";
import Modal from "./Modal/Modal";
const DisplayModal = ({ isOpen, setIsOpen, singleDonar }) => {
  const [btnLoading,setbtnLoading] = useState(false)
  const naviget = useNavigate()
  const [user] = useUser();
  const handelSubmit = (e) => {
    e.preventDefault();
    setbtnLoading(true)
    const form = e.target;
    const patientProblem = form.patientProblem.value;
    const amountBlood = form.amountBlood.value;
    const donateDate = form.donateDate.value;
    const donateTime = form.donateTime.value;
    const donatePlace = form.donatePlace.value;
    const contact = form.contact.value;
    const formattedDate = moment(donateDate).format("DD MMM YYYY");
    const applicationForBlood = {
      patientProblem,
      amountBlood,
      donateDate: formattedDate,
      donateTime,
      donatePlace,
      contact,
      donarEmail: singleDonar?.email,
      donarName: singleDonar?.name,
      appliedPersonEmail: user?.email,
      status: "pending",
      bloodGroup: singleDonar?.bloodGroup,
      patientName: user?.displayName,
      bloodReq: "true",
    };
    const sendEmailInfo = {
      রোগীরসমস্যা : patientProblem,
      রক্তেরপরিমাণ : amountBlood  + '' + "bag" ,
      রক্তদানেরতারিখ :  formattedDate,
      রক্তদানেরসময় : donateTime,
      রক্তদানেরস্থান : donatePlace ,
      যোগাযোগ : contact,
      bloodGroup: singleDonar?.bloodGroup ,
      appliedPersonName: user?.displayName,
      appliedPersonEmail: user?.email,
      donarEmail: singleDonar?.email,
    }
    axios.post('https://tkgbds-server-side.vercel.app/send-email-data',sendEmailInfo)
      .then(res => {
         if(res.data.accepted) {
          axios
          .post(
            `https://tkgbds-server-side.vercel.app/post-applicattionForBlood`,
            applicationForBlood
          )
          .then((res) => {
            if (res.data.insertedId) {
              Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Your application has been successfully please wait',
                showConfirmButton: false,
                timer: 1500
              })
              setbtnLoading(false)
              form.reset();
              setIsOpen(false);
              naviget('/find-donar')
            }
          })
          .catch((err) => console.log(err.message));
         }
      })
      .catch(error => {
        toast.error(error.message);
      });
    
  };
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
            className="input-field"
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
            className="input-field"
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
            className="input-field"
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
            className="input-field"
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
            className="input-field"
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
            className="input-field"
          />
        </div>
        <div className="flex justify-end gap-4 pt-5">
          <div
            onClick={() => setIsOpen(false)}
            className="py-2 px-5 bg-gradient-to-r from-rose-600 to-pink-500 rounded-full text-white cursor-pointer"
          >
            Cancel
          </div>
          <button
                type="submit"
                className="newBTN"
              >
                {btnLoading ? (
                  <div className="flex justify-center">
                  <ImSpinner9 className="w-6 h-6 animate-spin"></ImSpinner9>Loading...
                </div>
                ) : (
                  "Continue"
                )}
              </button>
        </div>
      </form>
    </Modal>
  );
};

export default DisplayModal;
