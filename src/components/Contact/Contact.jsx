import { Container } from "../atom/Container";
import { FakeButton } from "../atom/FakeButton";
import { Heading2 } from "../atom/Heading2";
import { Input } from "./Input";
import { Textarea } from "./Textarea";

export const Contact = () => {
  return (
    <Container>
      <Heading2>
        Un projet ? <br />
        Contactez-moi 👾
      </Heading2>
      <p className="col-span-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec
        eros nisl. Curabitur non urna hendrerit, consequat massa non.
      </p>
      <div className="col-span-4">
        <Input type="text" placeholder="Nom & Prénom" />
        <Input type="email" placeholder="Email" />
        <Input type="text" placeholder="Sujet" />
        <Textarea placeholder="Message..." />
        <FakeButton>Envoyer mon message</FakeButton>
      </div>
    </Container>
  );
};
