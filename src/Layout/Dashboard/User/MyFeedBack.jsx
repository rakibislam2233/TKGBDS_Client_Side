import { useState } from "react";
import useUser from "../../../hook/UseUser";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import axios from "axios";
import Swal from "sweetalert2";
import { ImSpinner9 } from "react-icons/im";
import { Helmet } from "react-helmet-async";
const MyFeedBack = () => {
  const [rating, setRating] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [user] = useUser();
  const handleSubmit = (e) => {
    setIsLoading(true);
    e.preventDefault();
    const from = e.target;
    const message = from.message.value;
    const feedback = {
      name: user?.displayName,
      email: user?.email,
      message,
      rating,
      imageUrl : user?.photoURL
    };
    axios
      .post(
        `https://tkgbds-server-side-ttxc.vercel.app/feedback`,
        feedback
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Thank You for sharing your feedback!",
            showConfirmButton: false,
            timer: 1500,
          });
          setIsLoading(false);
          from.reset()
          setRating(0)
        }
      })
      .catch((err) => console.log(err.message));
  };
  return (
   <>
    <Helmet>
            <title>Feedback | TKGBDS </title>
          </Helmet>
    <div className="w-full p-5">
      <h3 className="text-3xl font-semibold py-5">Feedback</h3>
      <form onSubmit={handleSubmit} className="space-y-5 border rounded p-8">
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            id="name"
            defaultValue={user?.displayName}
            readOnly
            className="input-field"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            defaultValue={user?.email}
            id="name"
            readOnly
            className="input-field"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="image">Message</label>
          <textarea
            className="input-field"
            name="message"
            id="message"
            cols="30"
            rows="5"
            required
          ></textarea>
        </div>
        <Rating
          style={{ maxWidth: 120 }}
          value={rating}
          onChange={setRating}
          isRequired
        />
        <button className="newBTN">
          {isLoading ? (
            <div className="flex justify-center">
              <ImSpinner9 className="w-6 h-6 animate-spin"></ImSpinner9>
              Loading..
            </div>
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </div>
   </>
  );
};

export default MyFeedBack;
