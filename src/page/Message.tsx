import { useSelector } from "react-redux"
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2"

const Message = () => {
    const mode = useSelector((state: any) => state.mode)
    const form: any = useRef();
    const [formValid, setFormValid] = useState(false);

    const sendEmail = (e: any) => {
        e.preventDefault();

        emailjs
            .sendForm('service_revi8x4', 'template_o2o3fjt', form.current, {
                publicKey: 'yT1FYsOKm4Q75Q1NL',
            })
            .then(
                () => {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Mail successfully sent! 📤📩",
                        showConfirmButton: false,
                        timer: 1500
                    });
                },
                (error) => {
                    Swal.fire({
                        position: "top-end",
                        icon: "error",
                        title: "Error occured",
                        text: `${error?.text}`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                },
            );
    };

    const checkFormValidity: any = () => {
        const inputs = form.current.querySelectorAll('input, textarea');
        let isValid = true;

        inputs.forEach((input: any) => {
            if (input.required && !input.value.trim()) {
                isValid = false;
            }
        });

        setFormValid(isValid);
    };

    return (
        <form ref={form} onSubmit={sendEmail} className="w-full  rounded-lg h-auto">
            <div className="w-full flex justify-between max-md:flex-col items-center">
                <div className="w-[47%]  max-md:w-full h-[50px] mt-5">
                    <label
                        htmlFor="Name"
                        className="relative h-full block rounded-md border border-gray-200 shadow-sm focus-within:border-white focus-within:ring-1 focus-within:ring-white"
                    >
                        <input
                            type="text"
                            name="from_name"
                            required={true}
                            className="peer pl-3 h-full w-full border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                            placeholder="Name"
                            onChange={checkFormValidity} // Check form validity on change
                        />

                        <span
                            className={`pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 ${!mode ? "bg-black text-white" : "bg-white text-black"
                                } p-0.5 text-xs transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs`}
                        >
                            Name
                        </span>
                    </label>
                </div>
                <div className="w-[47%]  max-md:w-full h-[50px] mt-5">
                    <label
                        htmlFor="EmailAddress"
                        className="relative h-full block rounded-md border focus-within:border-white focus-within:ring-1 focus-within:ring-white  "
                    >
                        <input
                            type="text"
                            name="from_email"
                            required={true}
                            className="peer pl-3 h-full w-full border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                            placeholder="Username"
                            onChange={checkFormValidity} // Check form validity on change
                        />

                        <span
                            className={`pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 ${!mode ? "bg-black text-white" : "bg-white text-black"
                                } p-0.5 text-xs transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs`}
                        >
                            EmailAddress
                        </span>
                    </label>
                </div>
            </div>
            <div className="w-full  auto mt-5">
                <label
                    className="relative h-full block rounded-md border border-gray-200 shadow-sm focus-within:border-white focus-within:ring-1 focus-within:ring-white"
                >
                    <textarea
                        id="Message"
                        name="message" required={true}
                        className="peer pl-3 min-h-[50px] w-full mt-1 border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                        placeholder="Username"
                        onChange={checkFormValidity} // Check form validity on change
                    />

                    <span
                        className={`pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 ${!mode ? "bg-black text-white" : "bg-white text-black"
                            } p-0.5 text-xs transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs`}
                    >
                        Write Message Here
                    </span>
                </label>
            </div>
            <div className="w-full items-center flex justify-start mt-3">
                <button type="submit" disabled={!formValid} className={`px-5 hover:scale-[1.1] transition duration-300 py-2 rounded-md ${formValid ? 'bg-[orange] text-white' : 'bg-gray-300 text-gray-500'}`} >
                    Submit
                </button>
            </div>
        </form>
    )
}

export default Message;
