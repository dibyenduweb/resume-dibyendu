/* eslint-disable no-unused-vars */
import { useForm } from "@formspree/react";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const refHeading = useRef(null);
    const inViewHeading = useInView(refHeading);
    const refContent = useRef(null);
    const inViewContent = useInView(refContent);
    const form = useRef();

    const [show, setShow] = useState(false);
    const [state, handleSubmit] = useForm("xpzgodpa");
    const [formData, setFormData] = useState({
        user_name: "",
        user_email: "",
        message: "",
    });

    const variants1 = {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        if (state.succeeded) {
            setShow(true);
            setFormData({
                user_name: "",
                user_email: "",
                message: "",
            });

            // Show alert after successful submission
            window.alert("Message sent successfully!");
        }
    }, [state.succeeded]);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_gf57y1l',
                'template_0vr8v9p',
                form.current,
                'jqM0FN2ZA8VbKUbkH'
            )
            .then(
                (result) => {
                    console.log(result.text);

                    // Show alert after successful submission
                    window.alert("Message sent successfully!");

                    // Clear the form fields
                    setFormData({
                        user_name: "",
                        user_email: "",
                        message: "",
                    });
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <section className="sm:px-8 pt-[80px]" id="contact">
            <motion.div
                ref={refHeading}
                variants={variants1}
                initial="initial"
                animate={inViewHeading ? "animate" : "initial"}
                transition={{ duration: 0.6 }}
                className="flex gap-4 items-center"
            >
                <h3 className="text-textWhite text-3xl sm:text-5xl font-[800]">
                    Get In Touch
                </h3>
                <div className="min-w-0 flex-grow mt-2 h-[4px] bg-textWhite"></div>
            </motion.div>
            <div className="grid md:grid-cols-2 mt-4 md:mt-10 py-12 gap-4 relative">
                <motion.div
                    ref={refContent}
                    initial={{ opacity: 0, y: -50 }}
                    animate={
                        inViewContent
                            ? { opacity: 1, y: 0 }
                            : { opacity: 1, y: -50 }
                    }
                    transition={{ duration: 1 }}
                >
                    <h5 className="text-2xl font-bold leading-9 text-textWhite my-2">
                        Let&apos;s Connect
                    </h5>
                    <p className="text-textWhite max-w-md">
                        I am looking for new opportunities and would love to hear from you! Whether you have questions or just want to say hi, feel free to reach out. <br />
                        I will do my best to respond!
                    </p>
                    <div className="flex flex-row gap-5 mt-6">
                        <a
                            href="https://github.com/dibyenduweb"
                            className="relative group hover:-translate-y-[2px] transition-all duration-500 ease-in-out "
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <BsGithub className="w-7 h-7" />
                            <span className="text-textLight text-xs px-2 opacity-0 group-hover:opacity-100 absolute top-10 -left-3 w-fit">
                                Github
                            </span>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/dibyendupramanik/"
                            className="relative group hover:-translate-y-[2px] transition-all duration-500 ease-in-out "
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedin className="w-7 h-7" />
                            <span className="text-textLight text-xs px-2 opacity-0 group-hover:opacity-100 absolute top-10 -left-4 w-fit">
                                Linkedin
                            </span>
                        </a>
                    </div>

                
                    {show && (
                        <div className="mt-6 w-[80%]">
                            <p className="text-md text-textPara text-left">
                                Thank you for reaching out! I appreciate your
                                interest and will get back to you as soon as
                                possible. In the meantime, feel free to explore
                                more of my portfolio.
                            </p>
                        </div>
                    )}
                </motion.div>
                <motion.div
                    ref={refContent}
                    initial={{ opacity: 0, y: -50 }}
                    animate={
                        inViewContent
                            ? { opacity: 1, y: 0 }
                            : { opacity: 1, y: -50 }
                    }
                    transition={{ duration: 1 }}
                    className="mt-10 md:mt-0"
                >
                    <form
                        ref={form}
                        onSubmit={sendEmail}
                        className="max-w-md mx-auto"
                    >
                        <div className="mb-4">
                            <label
                                htmlFor="user_name"
                                className="block text-textWhite text-sm font-medium mb-2"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                name="user_name"
                                id="user_name"
                                className="w-full border-b-2 border-textWhite py-2 px-3 bg-transparent focus:outline-none focus:border-primary"
                                onChange={handleChange}
                                value={formData.user_name}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="user_email"
                                className="block text-textWhite text-sm font-medium mb-2"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                name="user_email"
                                id="user_email"
                                className="w-full border-b-2 border-textWhite py-2 px-3 bg-transparent focus:outline-none focus:border-primary"
                                onChange={handleChange}
                                value={formData.user_email}
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="message"
                                className="block text-textWhite text-sm font-medium mb-2"
                            >
                                Message
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                className="w-full border-b-2 border-textWhite py-2 px-3 bg-transparent focus:outline-none focus:border-primary"
                                onChange={handleChange}
                                value={formData.message}
                                required
                            ></textarea>
                        </div>
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="btn bg-red-600 py-2 px-3 rounded-lg hover:bg-orange-400"
                            >
                                Send
                            </button>
                        </div>
                    </form>
                </motion.div>
            </div>

            <footer className="flex items-center p-6 text-center">
                <span className="w-full text-textPara">
                    All Rights Reserved © {new Date().getFullYear()} - <br />
                    Made with ❤️ by Dibyendu Pramanik
                </span>
            </footer>
        </section>
    );
};

export default Contact;
