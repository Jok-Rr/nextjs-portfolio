import { Container } from "../atom/Container";
import { Heading2 } from "../atom/Heading2";
import { useForm } from "react-hook-form";
import { Alert } from "../atom/Alert";

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
          className={`bg-lightdark rounded-xl h-12 w-full px-4 focus:border-4  outline-none mb-3 transition-colors ${
            errors.fullName ? "border-red-400 border-4" : "border-neonblue"
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
          className={`bg-lightdark rounded-xl h-12 w-full px-4 focus:border-4  outline-none mb-3 transition-colors ${
            errors.subject ? "border-red-400 border-4" : "border-neonblue"
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
          className={`bg-lightdark rounded-xl h-12 w-full px-4 focus:border-4  outline-none mb-3 transition-colors ${
            errors.email ? "border-red-400 border-4" : "border-neonblue"
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
          className={`bg-lightdark rounded-xl h-36 w-full p-4 focus:border-4 outline-none mb-3 ${
            errors.message ? "border-red-400 border-4" : "border-neonblue"
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
          className="bg-neonblue rounded-xl text-xl font-semibold py-2.5 px-8"
        >
          Envoyer mon message
        </button>
      </form>
    </Container>
  );
};
