import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { FaHome } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import RoomMentor from "./RoomMentor";
import { MdPersonAdd } from "react-icons/md";
import Attendance from "./contexts/AttendanceCreateFrom";
import Zoom from "./Zoom";
import { Link, useParams } from "react-router-dom";
import { RiDashboardFill } from "react-icons/ri";
import axios from "axios";

function Students() {
  const { userId, roomId } = useParams();
  const [students, setStudents] = useState([]); //exist , pending , attendence, meet
  const [enroolled, setEnroolled] = useState([]) //enrolled student
  const [pending, setPending] = useState([]) //pending student
  const [studid, setStudid] = useState() //student id
  const [mode, setMode] = useState("room");
  const [loading, setLoading] = useState(true);
  const displayroom = () => {
    setMode("room");
  };
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchEnrolledStudents = async () => {
      try {
        setLoading(true);
        const headers = {
          "Content-Type": "application/json",
        };

        const response = await axios.get(
          `${apiUrl}/api/rooms/${roomId}/enrolled-students`,
          {
            headers: headers,
            withCredentials: true,
          }
        );
        setEnroolled(response.data.enrolledStudents);
        // console.log(enroolled);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching enrolled students:", error);
        setLoading(false);
      }
    };

    fetchEnrolledStudents();
  }, [roomId]);

  useEffect(() => {
    const fetchPendingStudents = async () => {
      try {
        setLoading(true);
        const headers = {
          "Content-Type": "application/json",
        };

        const response = await axios.get(
          `${apiUrl}/api/rooms/${roomId}/pending-students`,
          {
            headers: headers,
            withCredentials: true,
          }
        );
        // console.log(response.data.pendingStudents)
        setPending(response.data.pendingStudents);
        // console.log(pending)
        setLoading(false);
      } catch (error) {
        console.error("Error fetching pending students:", error);
        setLoading(false);
      }
    };

    fetchPendingStudents();

  }, [roomId])

  const allowStudentEnrollment = async (studId) => {
    try {
      setLoading(true);
      const allowData = {
        roomId, studId
      }
      console.log(allowData)
      const headers = {
        "Content-Type": "application/json",
      };

      const response = await axios.post(
        `${apiUrl}/api/rooms/student-allow/${studId}/${roomId}`,allowData,
        {
          headers: headers,
          withCredentials: true,
        }
      );
      // setEnroolled(response.data.enrolledStudents);
      console.log(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching enrolled students:", error);
      setLoading(false);
    }
  };
  

  const displayexist = () => {
    setStudents("exist");
  };
  const displaypending = () => {
    setStudents("pending");
  };
  const displayattendance = () => {
    setStudents("attendance");
  };
  const displayZoom = () => {
    setStudents("zoom");
  };

  return (
    <>
      <Navbar userId = {userId} />
      <div className="flex flex-row ">
        <div className="flex flex-col space-y-5 w-1/5 bg-white border-2  text-black px-1 py-4 min-h-screen">
          {/* Sidebar content here */}
          <ul className="flex flex-col space-y-5  ">
            <div className="bg-sky-400 rounded-xl text-white">
              <li className="">
                <a href="#" className=" flex flex-row items-center p-2 ">
                  <FaHome />
                  
                  <button onClick={displayroom}>
                    <p className="ml-2"> Room</p>
                    </button>
                    
                </a>
              </li>
            </div>

            <div className=" bg-slate-300 rounded-xl text-black">
              <li className="">
                <Link to={`/dashboard/${userId}`} className=" flex flex-row items-center p-2 ">
                  <RiDashboardFill />
                  
                    <button>
                      <p className="ml-2 "> DashBoard</p>
                    </button>
                  
                </Link>
              </li>
            </div>
          </ul>
        </div>
        <div className="w-4/5 p-4 flex flex-row justify-center space-x-3">
          {/* Page content here */}

          <div className="w-4/5">
            <div className="flex flex-row space-x-5">
              <button
                className="border-b-2  border-sky-400  font-Grish text-2xl text-orange-400"
                onClick={displayexist}
              >
                Existing Students{" "}
              </button>
              <button
                className="border-b-2  border-sky-400  font-Grish text-2xl text-orange-400"
                onClick={displaypending}
              >
                {" "}
                Pending Students
              </button>
              <button
                className="border-b-2  border-sky-400  font-Grish text-2xl text-orange-400"
                onClick={displayattendance}
              >
                {" "}
                Attendance
              </button>
              <button
                className="border-b-2  border-sky-400  font-Grish text-2xl text-orange-400"
                onClick={displayZoom}
              >
                {" "}
                Zoom Link
              </button>
            </div>
            <div className="flex flex-col mt-5">
              {students === "exist" && (
                <div>
                  {/* Render your enrolled students list here */}
                  {enroolled.map((enroll, index) => (
                    <div key={index} className="text-xl flex flex-row justify-between items-center w-5/5 p-3 m-2 bg-sky-300 rounded-xl font-semibold"> 
                      <p>Name: {enroll.name}</p>
                      <p>Email: {enroll.email}</p>
                      <img src={enroll.avatar} alt="Student Avatar"  className='h-12'/>
                    </div>
                  ))}
                </div>
              )}
              {students === "pending" && (
                <div>
                {
                  pending.map((stud, index) => (
                    <div key={index}>
                      {/* <p>Email: {stud.email}</p> */}
                  <ul className="">
                    <li className="text-xl flex flex-row justify-between items-center w-5/5 p-3 m-2 bg-sky-300 rounded-xl font-semibold">
                      <img src={stud.avatar} alt="Student Avatar" className='h-12 '/>
                      <p>{stud.name}</p>
                      <p>Class: DSA</p>
                      <button onClick={() => allowStudentEnrollment(stud._id)}>
                      <MdPersonAdd className="w-7 h-10 text-slate-800 " />
                      </button>
                      {/* {console.log(stud)} */}
                    </li>
                  </ul>
                    </div>
                  ))
                }
                </div>
              )}
              {students === "attendance" && <Attendance />}
              {students === "zoom" && <Zoom />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Students;
