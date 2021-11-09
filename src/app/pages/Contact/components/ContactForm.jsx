import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { Label, Error } from "./components";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const toastifySuccess = () => {
    toast("Form sent!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: "submit-feedback success",
      toastId: "notifyToast",
    });
  };

  const onSubmit = async (data) => {
    const { name, email, message } = data;

    try {
      const templateParams = {
        name,
        email,
        message,
      };
      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      );
      reset();
      toastifySuccess();
      console.log("yah");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="w-full md:w-3/4 bg-gray-100 border border-transparent rounded-md shadow mb-auto">
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="w-full p-10 flex flex-col gap-4"
      >
        <div>
          <Label htmlFor="name">Name</Label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="e.g. John Doe"
            {...register("name", {
              required: { value: true, message: "Please enter your name" },
              maxLength: {
                value: 30,
                message: "Please use 30 characters or less",
              },
            })}
            className="w-full h-10 border border-gray-300 rounded-md my-1 px-4 text-sm font-light tracking-wide"
          />
          {errors.name && <Error>{errors.name.message}</Error>}
        </div>
        <div>
          <Label htmlFor="email">E-mail</Label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="e.g. jonny@example.com"
            {...register("email", {
              required: true,
              pattern:
                /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            })}
            className="w-full h-10 border border-gray-300 rounded-md my-1 px-4 text-sm font-light tracking-wide"
          />
          {errors.email && <Error>Please enter a valid email address</Error>}
        </div>
        <div>
          <Label htmlFor="message">Message</Label>
          <textarea
            id="message"
            name="message"
            placeholder="e.g. Any topics are welcome ..."
            {...register("message", {
              required: true,
            })}
            className="w-full h-36 border border-gray-300 rounded-md my-1 p-4 text-sm font-light tracking-wide"
          />
          {errors.message && <Error>Please enter a message</Error>}
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white p-2 border border-transparent rounded-md"
        >
          Send
        </button>
        <ToastContainer />
      </form>
    </div>
  );
}
