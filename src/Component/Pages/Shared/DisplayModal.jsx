/* eslint-disable react/prop-types */
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
  const [btnLoading, setbtnLoading] = useState(false);
  const naviget = useNavigate();
  const [user] = useUser();
  const handelSubmit = (e) => {
    e.preventDefault();
    setbtnLoading(true);
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
      রোগীরসমস্যা: patientProblem,
      রক্তেরপরিমাণ: amountBlood + "" + "bag",
      রক্তদানেরতারিখ: formattedDate,
      রক্তদানেরসময়: donateTime,
      রক্তদানেরস্থান: donatePlace,
      যোগাযোগ: contact,
      bloodGroup: singleDonar?.bloodGroup,
      appliedPersonName: user?.displayName,
      appliedPersonEmail: user?.email,
      donarEmail: singleDonar?.email,
    };
    axios
      .post(
        "https://tkgbds-server-side.up.railway.app/send-email-data",
        sendEmailInfo
      )
      .then((res) => {
        if (res.data.accepted) {
          axios
            .post(
              `https://tkgbds-server-side.up.railway.app/post-applicattionForBlood`,
              applicationForBlood
            )
            .then((res) => {
              if (res.data.insertedId) {
                Swal.fire({
                  position: "top-center",
                  icon: "success",
                  title: "Your application has been successfully please wait",
                  showConfirmButton: false,
                  timer: 1500,
                });
                setbtnLoading(false);
                form.reset();
                setIsOpen(false);
                naviget("/find-donar");
              }
            })
            .catch((err) => console.log(err.message));
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <form onSubmit={handelSubmit} className="text-gray-900 space-y-2">
        <div className="flex flex-col gap-1">
          <label htmlFor="patientProblem">Patient Problem</label>
          <input
            type="text"
            name="patientProblem"
            id="patientProblem"
            placeholder="Enter Patient Problem "
            required
            className="input-field"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="amountBlood"> Amount Of Blood</label>
          <input
            type="number"
            name="amountBlood"
            placeholder="Enter Amount Of Blood"
            id="amountBlood"
            required
            className="input-field"
            min={1}
            max={10}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="donateDate">Date Of Blood Donation</label>
          <input
            type="date"
            name="donateDate"
            placeholder="Enter Date Of Blood Donation"
            id="donateDate"
            className="input-field"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="donateTime">Blood Donation Time</label>
          <input
            type="text"
            name="donateTime"
            placeholder="Enter Blood Donation Time"
            id="donateTime"
            className="input-field"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="donatePlace"> Blood Donation Place</label>
          <input
            type="text"
            name="donatePlace"
            id="donatePlace"
            placeholder="Enter Blood Donation Place"
            required
            className="input-field"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="contact">Contact Number</label>
          <input
            type="number"
            name="contact"
            id="contact"
            placeholder="Enter Your Contact Number"
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
          <button type="submit" className="newBTN">
            {btnLoading ? (
              <div className="flex justify-center">
                <ImSpinner9 className="w-6 h-6 animate-spin"></ImSpinner9>
                Loading...
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
