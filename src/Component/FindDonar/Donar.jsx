import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import DonarDetails from "./DonarDetails";
import Loading from "../Pages/Shared/Loading";
const Donar = () => {
  const [donars, setDonars] = useState([]);
  const [donarLoading, setdonarLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/get-all-donar`)
      .then((res) => {
        setDonars(res.data);
        setdonarLoading(false);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  }, []);
  return (
    <>
      {donarLoading ? ( <Loading/>
      ) : (
        <div className="w-full  h-full container mx-auto py-5 p-5">
          <div className="grid grid-cols-1 md:grid-cols-12">
            <div className="col-span-3">
              <h3>Filter</h3>
            </div>
            <div className="col-span-9 ">
              <div className="grid grid-rows-1 md:grid-cols-3 gap-4">
                {donars.map((donar) => (
                  <DonarDetails key={donar.id} donar={donar} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Donar;
