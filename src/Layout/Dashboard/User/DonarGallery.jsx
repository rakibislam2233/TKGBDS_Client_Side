import axios from "axios";
import { useState } from "react";
import { ImSpinner9 } from "react-icons/im";
import { MdOutlineLibraryAdd } from "react-icons/md";
import Swal from "sweetalert2";
const DonarGallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false)
  const postImageGallery = (e) =>{
    setIsLoading(true)
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.files[0];
    const formData = new FormData();
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMGBB_KEY
    }`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        const imageUrl = imageData.data.display_url;
        const galleryImage = {name,imageUrl}
        axios.post(`https://tkgbds-server-side.vercel.app/post-gallery-image`,galleryImage)
        .then(res=>{
          console.log(res.data)
          if(res.data.insertedId){
            Swal.fire({
              position: 'top-center',
              icon: 'success',
              title: "Thank You for sharing your image",
              showConfirmButton: false,
              timer: 1500
            })
            setIsLoading(false)
            setIsOpen(false)
          }
        })
        .catch((err) => console.log(err.message) )
      })
  }
  return (
    <>
      <div className="w-full p-5">
        <h3 className="text-3xl font-semibold">Gallery</h3>
        {isOpen ? (
          <div className="flex justify-center">
            <form onSubmit={postImageGallery} className="space-y-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  id="name"
                  required
                  className="input-field"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="image">Your Blood Donation Image</label>
                <input
                  type="file"
                  name="image"
                  id="image"
                  required
                  className="input-field"
                />
              </div>
              <div className="flex gap-5">
                <div onClick={() => setIsOpen(false)} className="newBTN">
                  Cancle
                </div>
                <button className="newBTN">
                {isLoading ? (
                  <div className="flex justify-center">
                    <ImSpinner9 className="w-6 h-6 animate-spin"></ImSpinner9>
                  </div>
                ) : (
                  "Submit"
                )}
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div>
            <h3 className="font-semibold text-rose-700 p-5 text-center">
              আপনি  চাইলে  আপনার  রক্ত  দানের  ছবি  এখানে  যুক্ত  করতে  পারেন
            </h3>
            <div className="flex justify-center  items-end pt-20">
              <div
                onClick={() => setIsOpen(!isOpen)}
                className="space-y-3 border  px-5 py-2 rounded-xl  cursor-pointer"
              >
                <MdOutlineLibraryAdd className="w-16 h-16" />
                <h3 className="font-semibold">যুক্ত করুন</h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default DonarGallery;
