import React, { useState } from "react";

function StudAttendance() {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (selectedOption === 'option1') {
            alert('Your attendance is marked!');
        } else {
            alert('Incorrect option selected. Please choose the correct answer.');
        }
    };

    return (
        <div className="flex flex-col items-center">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col space-y-1 shadow-xl p-3 px-5 "
                style={{ width: "460px" }}
            >
                <h1 className="text-center text-4xl font-Grish text-orange-400">
                    Attendance Question
                </h1>
                <div className="mb-6 pt-3 flex flex-col mt-10 ">
                    <label className="block text-lg text-black " htmlFor="name">
                        What is datatype a=12
                    </label>
                </div>

                <div className="mb-6 pt-3 flex flex-row mt-10 ">
                    <input
                        checked={selectedOption === 'option1'}
                        onChange={handleChange}
                        value="option1"
                        type="radio"
                        id="option1"
                        className={` mr-3 `}
                    />
                    <label className="block text-lg text-black " htmlFor="description">
                        Number
                    </label>
                </div>
                <div className="mb-6 pt-3 flex flex-row mt-10 ">
                    <input
                        checked={selectedOption === 'option2'}
                        onChange={handleChange}
                        value="option2"
                        type="radio"
                        id="option2"
                        className={` mr-3 `}
                    />
                    <label className="block text-lg text-black " htmlFor="description">
                        String
                    </label>
                </div>
                <div className="mb-6 pt-3 flex flex-row mt-10 ">
                    <input
                        checked={selectedOption === 'option3'}
                        onChange={handleChange}
                        value="option3"
                        type="radio"
                        id="option3"
                        className={` mr-3 `}
                    />
                    <label className="block text-lg text-black " htmlFor="description">
                        Boolean
                    </label>
                </div>

                <button
                    className="bg-orange-400 w-full text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
                    type="submit"
                    style={{ marginTop: "20px" }}
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default StudAttendance;
