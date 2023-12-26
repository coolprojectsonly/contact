import React from "react";

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="container">
        <div className="cover">
          <h1 style={{ textAlign: "center" }}>Contact Form</h1>
          <div className="formWrapper">
            <form onSubmit={handleSubmit} className="form">
              <div className="formItem form1">
                <div className="labelCover">
                  <label for="fname" className="label1">
                    Full Name
                  </label>
                </div>

                <div className="inputContainer">
                  <input type="text" name required />
                  <label for="placeHolder" className="placeHolder">
                    Type here...
                  </label>
                </div>
              </div>

              <div className="formItem form2">
                <div className="labelCover">
                  <label for="name" className="label1">
                    Email Address
                  </label>
                </div>

                <div className="inputContainer">
                  <input type="email" required />
                  <label for="placeHolder" className="placeHolder">
                    Type here...
                  </label>
                </div>
              </div>
              <div className="formItem form3">
                <div className="labelCover">
                  <label for="message" className="">
                    Message
                  </label>
                </div>

                <div style={{ flex: 2 }}></div>
              </div>

              <div className="formItem form4">
                <textarea
                  required
                  placeholder="Enter Message here"
                  rows="5"
                  cols="5"
                ></textarea>
              </div>

              <div className="formItem form5">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
