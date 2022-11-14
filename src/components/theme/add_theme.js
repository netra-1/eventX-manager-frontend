import "./add_theme.scss";
import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IconButton } from '@mui/material';
import { AiFillMinusCircle } from "react-icons/ai";
import { HiPlusCircle } from "react-icons/hi";


const AddTheme = () => {

  const [name, setTheme] = useState("");
  const [description, setDescription] = useState("");
  const [speciality, setSpeciality] = useState([]);

  // const config = {
  //   headers: {
  //     Authorization: "Bearer " + localStorage.getItem("adminTicket"),
  //   },
  // };

  const handleClick = async (e) => {
    e.preventDefault();

    const data = {
      name : name,
      description : description,
      speciality : speciality,
    }

    try {
      await axios
        .post("http://localhost:8000/api/theme/", data)
        .then((response) => {
          window.location.replace("/theme");
          toast.success("Successfully added");
          console.log(response.data.msg);
        });
    } catch (e) {
      toast.failed("Failed to add");
      console.log(e);
    }
  };  

  const handleSpecialityChange = (e) => {
    const {
      target: { value, name }
    } = e;
    let toUpdateSpeciality = [...speciality];
    toUpdateSpeciality[name] = value;
    setSpeciality(toUpdateSpeciality);
  };

  const addSpeciality = (e) => {
    e.preventDefault();
    setSpeciality((oldArray) => [...oldArray, ""]);
  };

  const removeSpeciality = (index) => (e) => {
    e.preventDefault();
    setSpeciality((oldArray) => oldArray.filter((val, ind) => ind !== index));
  };

  return (
    <>
      <div className="new">
        <div className="newContainer mt-5">
          <div className="top mb-5">
            <h1 className="text-center pb-4">Add Theme</h1>
          </div>
          <div className="bottom mt-3">
            <div className="right">
            <form class="w-full max-w-lg">
              <div class="flex flex-wrap -mx-3 -mb-6">
                <div class="w-full md:w1/2 px-3 md:mb-0">
                  <label class="block tracking-wide text-gray-700 text-m font-bold mb-2" for="grid-first-name">
                    Name
                  </label>
                  <input size="50" onChange={(e) => setTheme(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Enter theme" />
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 -mb-6">
                <div class="w-full md:w1/2 px-3 md:mb-0">
                  <label class="block tracking-wide text-gray-700 text-m font-bold mb-2" for="grid-first-name">
                    Description
                  </label>
                  <textarea rows="3" cols="50" onChange={(e) => setDescription(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Enter description" />
                </div>
              </div>

                <div class="flex flex-wrap -mx-3 -mb-6">
                <div class="w-full md:w1/2 px-3 md:mb-0">
                  <label class="block tracking-wide text-gray-700 text-m font-bold mb-2" for="grid-first-name">
                    Speciality
                  </label>
              {speciality.map((val, index) => (
                  <div className="flex">
                    <input size="45" onChange={handleSpecialityChange} value={val} name={index} class="me-2 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Enter speciality" />
                    <IconButton onClick={removeSpeciality(index)} color="primary" aria-label="minus button">
                      <AiFillMinusCircle />
                    </IconButton>
                    </div>
                    ))}
                    <IconButton onClick={addSpeciality} color="primary" aria-label="add button">
                      <HiPlusCircle />
                    </IconButton>
                  </div>
                </div>
              <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 mt-3 rounded inline-flex items-center" onClick={handleClick}>
              Add Theme
              </button>
            </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default AddTheme;
