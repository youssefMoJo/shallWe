import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Email = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const res = await fetch(
      "https://simplify-598c6-default-rtdb.firebaseio.com/emails.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      }
    );
    if (res.ok) {
      setEmail("");
      toast.success("Thanks for subscribing ;)", {
        position: "top-center",
        autoClose: 6500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      toast.error("Sorry, please try again later :(", {
        position: "top-center",
        autoClose: 6500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <form className="emailForm" onSubmit={handleSubmit}>
      <div>
        <ToastContainer />
        <input
          className="email"
          type="email"
          placeholder="Enter your email address"
          required
          onChange={changeEmail}
          value={email}
        />
      </div>

      <button className="subscribeButton" type="submit">
        Subscribe
      </button>
    </form>
  );
};

export default Email;
