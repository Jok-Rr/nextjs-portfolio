import { Container } from "../atom/Container";
import { Heading2 } from "../atom/Heading2";
import { useForm } from "react-hook-form";
import { Alert } from "../atom/Alert";
import illustrationContact from "/public/vectors/contact.svg";
import Image from "next/image";

export const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
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
      <div className="col-span-4 lg:col-span-8 lg:text-left">
        <Heading2>Un projet ? Contactez-moi 👾</Heading2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec
          eros nisl. Curabitur non urna hendrerit, consequat massa non.
        </p>
      </div>
      <form
        className="col-span-4 lg:col-span-8 lg:text-left"
        method="POST"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="text"
          name="fullName"
          id="fullName"
          autoComplete="name"
          className={`mb-3  h-12 w-full rounded-xl bg-lightdark px-4 outline-none transition-colors focus:border-4 ${
            errors.fullName ? "border-4 border-red-400" : "border-neonblue"
          }`}
          placeholder={"Nom & Prénom"}
          {...register("fullName", {
            required: {
              value: true,
              message: "Votre nom et prénom sont requis.",
            },
            pattern: {
              value: /^([a-z A-Z]*)$/gm,
              message: "Votre nom et prénom ne doit pas contenir de chiffres",
            },
            minLength: {
              value: 3,
              message: "Votre nom et prénom doit être plus long.",
            },
          })}
          aria-invalid={errors.fullName ? "true" : "false"}
        />
        <Alert errors={errors.fullName} type="error" />
        <input
          type="text"
          name="subject"
          id="subject"
          autoComplete="sujet"
          className={`mb-3 h-12 w-full rounded-xl bg-lightdark px-4  outline-none transition-colors focus:border-4 ${
            errors.subject ? "border-4 border-red-400" : "border-neonblue"
          }`}
          placeholder={"Sujet"}
          {...register("subject", {
            required: {
              value: true,
              message: "Le sujet est requis.",
            },
            minLength: {
              value: 10,
              message: "Le sujet doit être plus long.",
            },
          })}
        />
        <Alert errors={errors.subject} type="error" />
        <input
          type="text"
          name="email"
          id="email"
          autoComplete="email"
          className={`mb-3 h-12 w-full rounded-xl bg-lightdark px-4  outline-none transition-colors focus:border-4 ${
            errors.email ? "border-4 border-red-400" : "border-neonblue"
          }`}
          placeholder={"Email"}
          {...register("email", {
            required: {
              value: true,
              message: "L'email est requis.",
            },
            pattern: {
              value:
                /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,
              message: "Votre email est incorrect.",
            },
          })}
        />
        <Alert errors={errors.email} type="error" />
        <textarea
          name="message"
          id="message"
          rows="4"
          placeholder="Message"
          style={{ resize: "none" }}
          className={`mb-3 h-36 w-full rounded-xl bg-lightdark p-4 outline-none focus:border-4 ${
            errors.message ? "border-4 border-red-400" : "border-neonblue"
          }`}
          defaultValue={""}
          {...register("message", {
            required: {
              value: true,
              message: "Le message est requis.",
            },
            minLength: {
              value: 50,
              message: `Votre message doit faire au moins 50 caractères`,
            },
          })}
        ></textarea>
        <Alert errors={errors.message} type="error" />
        <Alert
          errors={isSubmitSuccessful}
          type="sucess"
          message={"Le formulaire à bien été envoyé."}
        />

        <button
          type="submit"
          className="rounded-xl bg-neonblue py-2.5 px-8 text-xl font-semibold transition-transform duration-300 ease-in-out hover:scale-105"
        >
          Envoyer mon message
        </button>
      </form>
      <div className="hidden lg:relative lg:col-span-4 lg:block">
        <Image
          src={illustrationContact}
          alt="logo-tb"
          className="lg:absolute lg:-right-7 lg:top-0 lg:max-w-xs"
        ></Image>
      </div>
    </Container>
  );
};
