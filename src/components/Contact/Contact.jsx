import { Container } from "../atom/Container";
import { Heading2 } from "../atom/Heading2";
import { useState } from "react";
import { useForm } from "react-hook-form";

export const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        console.log("Response received", res);
        if (res.status === 200) {
          console.log("Response succeeded!");
          // toast("Thank you for contacting us!");
        } else {
          console.log("Email/Password is invalid.");
          // toast("Email/Password is invalid.");
        }
      })
      .catch((e) => console.log(e));
    reset();
  };

  return (
    <Container id="contact">
      <Heading2>
        Un projet ? <br />
        Contactez-moi 👾
      </Heading2>
      <p className="col-span-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec
        eros nisl. Curabitur non urna hendrerit, consequat massa non.
      </p>
      <form
        className="col-span-4"
        method="POST"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="text"
          name="fullName"
          id="fullName"
          autoComplete="name"
          className="bg-lightdark rounded-xl h-12 w-full px-4 focus:border-4 border-neonblue outline-none mb-3"
          placeholder={"Nom & Prénom"}
          {...register("fullName", { required: true })}
        />
        <input
          type="text"
          name="subject"
          id="subject"
          autoComplete="sujet"
          className="bg-lightdark rounded-xl h-12 w-full px-4 focus:border-4 border-neonblue outline-none mb-3"
          placeholder={"Sujet"}
          {...register("subject", { required: true })}
        />
        <input
          type="text"
          name="email"
          id="email"
          autoComplete="email"
          className="bg-lightdark rounded-xl h-12 w-full px-4 focus:border-4 border-neonblue outline-none mb-3"
          placeholder={"Email"}
          {...register("email", { required: true })}
        />
        <textarea
          name="message"
          id="message"
          rows="4"
          placeholder="Message"
          style={{ resize: "none" }}
          className="bg-lightdark rounded-xl h-36 w-full p-4 focus:border-4 border-neonblue outline-none mb-3"
          defaultValue={""}
          {...register("message", { required: true })}
        ></textarea>
        <button
          type="submit"
          className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </form>
    </Container>
  );
};
