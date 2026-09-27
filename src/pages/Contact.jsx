import React, { useState, useEffect } from 'react';

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact Us | A.K. Metal Works';
  }, []);
  const [formData, setFormData] = useState({name: "", contact_info: "", requirement_detail: ""});
  const [statusMessage, setStatusMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e)=>{
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
  });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setStatusMessage("");
    try{
      const response = await fetch("http://localhost:3000/submit/form",{
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });
    const data = await response.json();
    if(response.ok){
      setStatusMessage("form data submitted successfully");
    }
    else{
      setStatusMessage(`Some error occured: ${data.message}`);
    }
  }
  catch(err){
    console.log(err);
    setStatusMessage("some error occured while submitting the form");
  }
  finally{
    setFormData({name: "", contact_info: "", requirement_detail: ""}); // reseting the form
    setIsSubmitted(false);
  }
};
return (
    <main
      className="
        main-container
        w-full
        max-w-[1428px]
        mx-auto
        max-[900px]:px-[17px]
      "
    >
      <section
        className="
          page-wrap
          p-[50px_34px_77px]
          max-[700px]:p-[42px_17px_63px]
        "
      >
        <h1
          className="
    page-title
    animate-page-title
    text-[34px]
    font-[800]
    mb-[13px]
    text-[#111]
    tracking-[-0.5px]
  "
        >
          Hume Sampark Karein
        </h1>

        <div
          className="
            contact-grid
            grid
            grid-cols-2
            max-[700px]:grid-cols-1
            gap-[98px]
            max-[700px]:gap-[49px]
            mt-[42px]
          "
        >
          {/* Left Column: Office Address */}
          <div className="contact-left animate-page-content">
            <h3
              className="
                text-[18px]
                font-bold
                mb-[28px]
                text-[#111]
                max-[700px]:text-[17px]
              "
            >
              Office Address
            </h3>

            <div className="contact-item flex gap-[17px] mb-[27px]">
              <div
                className="
                  icon
                  w-[43px]
                  h-[43px]
                  shrink-0
                  bg-[#fff3dc]
                  text-[#ff6b00]
                  rounded-[11px]
                  flex
                  items-center
                  justify-center
                  text-[21px]
                "
              >
                ⌂
              </div>

              <div>
                <div
                  className="
                    label
                    text-[11px]
                    font-[800]
                    tracking-[0.56px]
                    mb-[7px]
                    text-[#111]
                  "
                >
                  Principal Address
                </div>

                <div
                  className="
                    value
                    text-[14px]
                    leading-[1.5]
                    text-[#111]
                  "
                >
                  11, Mill Approach Road, Kamarhati Road,
                  <br />
                  North 24 Parganas, West Bengal - 700058
                </div>
              </div>
            </div>

            <div className="contact-item flex gap-[17px] mb-[27px]">
              <div
                className="
                  icon
                  w-[43px]
                  h-[43px]
                  shrink-0
                  bg-[#fff3dc]
                  text-[#ff6b00]
                  rounded-[11px]
                  flex
                  items-center
                  justify-center
                  text-[21px]
                "
              >
                ♟
              </div>

              <div>
                <div
                  className="
                    label
                    text-[11px]
                    font-[800]
                    tracking-[0.56px]
                    mb-[7px]
                    text-[#111]
                  "
                >
                  Proprietor Name
                </div>

                <div
                  className="
                    value
                    text-[14px]
                    leading-[1.5]
                    text-[#111]
                  "
                >
                  Mr. Arif Khan
                </div>
              </div>
            </div>

            <div className="contact-item flex gap-[17px] mb-[27px]">
              <div
                className="
                  icon
                  w-[43px]
                  h-[43px]
                  shrink-0
                  bg-[#fff3dc]
                  text-[#ff6b00]
                  rounded-[11px]
                  flex
                  items-center
                  justify-center
                  text-[21px]
                "
              >
                ▤
              </div>

              <div>
                <div
                  className="
                    label
                    text-[11px]
                    font-[800]
                    tracking-[0.56px]
                    mb-[7px]
                    text-[#111]
                  "
                >
                  GSTIN Verification
                </div>

                <div
                  className="
                    value
                    text-[14px]
                    leading-[1.5]
                    text-[#111]
                  "
                >
                  19AZNPK3740R1Z1
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Message Form */}
          <div className="contact-right animate-page-content"
            style={{
              animationDelay: '150ms',
            }}
          >
            <h3
              className="
                text-[18px]
                font-bold
                mb-[28px]
                text-[#111]
                max-[700px]:text-[17px]
              "
            >
              Message Bhejein
            </h3>

            <form onSubmit={handleSubmit}>
              <div className="form-row mb-[18px]">
                <label
                  className="
                    block
                    text-[11px]
                    font-[700]
                    mb-[8px]
                    text-[#111]
                  "
                >
                  Aapka Naam / Company
                </label>

                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  value={formData.name}
                  placeholder="Naam likhiye"
                  className="
                    w-full
                    border
                    border-[#ddd]
                    rounded-[7px]
                    p-[14px]
                    text-[14px]
                    font-sans
                    outline-none
                    text-[#111]
                    focus:border-[#ff6b00]
                    transition-colors
                  "
                />
              </div>

              <div className="form-row mb-[18px]">
                <label
                  className="
                    block
                    text-[11px]
                    font-[700]
                    mb-[8px]
                    text-[#111]
                  "
                >
                  Mobile Number / Email
                </label>

                <input
                  type="text"
                  name="contact_info"
                  onChange={handleChange}
                  value = {formData.contact_info}
                  placeholder="Contact info likhiye"
                  className="
                    w-full
                    border
                    border-[#ddd]
                    rounded-[7px]
                    p-[14px]
                    text-[14px]
                    font-sans
                    outline-none
                    text-[#111]
                    focus:border-[#ff6b00]
                    transition-colors
                  "
                />
              </div>

              <div className="form-row mb-[18px]">
                <label
                  className="
                    block
                    text-[11px]
                    font-[700]
                    mb-[8px]
                    text-[#111]
                  "
                >
                  Requirement ki Details
                </label>

                <textarea
                  placeholder="Metal work ya order requirement ke bare mein bataye..."
                  name="requirement_detail"
                  onChange={handleChange}
                  value={formData.requirement_detail}
                  className="
                    w-full
                    border
                    border-[#ddd]
                    rounded-[7px]
                    p-[14px]
                    text-[14px]
                    font-sans
                    outline-none
                    h-[106px]
                    resize-y
                    text-[#111]
                    focus:border-[#ff6b00]
                    transition-colors
                  "
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitted}
                style={{padding: "10px 16px", cursor: "pointer"}}
                className="
                  submit-btn
                  w-full
                  h-[48px]
                  border-0
                  rounded-[8px]
                  bg-[#050505]
                  text-white
                  text-[13px]
                  font-[700]
                  cursor-pointer
                  hover:bg-[#ff6b00]
                  transition-colors
                  duration-300
                "
              >
                {
                  isSubmitted ? "Saving..." : "Submit"
                }
              </button>
            </form>
            {statusMessage && (
              <p style={{marginTop: "16px", fontWeight: "bold"}}>{statusMessage}</p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}