import Head from "next/head";
import { Container } from "../src/components/atom/Container";

const INFO = {
  FULLNAME: "Tom Bost",
  EMAIL: "tom.bost.pro@gmail.com",
  ADRESS: "Sens, Yonne",
  PHONENUMBER: "0641970576",
  HOST: "Vercel Inc",
  ADRESSHOST: "340 S Lemon Ave #4133 Walnut, CA 91789 privacy@vercel.com",
  STACK: "NextJs & React",
};

const legalMention = () => {
  return (
    <>
      <Head>
        <title>Tom Bost | Mentions légales</title>
      </Head>
      <Container className={"pt-3 lg:pt-36 lg:text-left"}>
        <h1 className="col-span-4 lg:col-span-12">Mentions légales</h1>
        <div className="col-span-4 lg:col-span-12">
          <strong> Propriétaire du site : </strong> {INFO.FULLNAME}
          <br /> <strong> Adresse :</strong> {INFO.ADRESS}
          <br /> <strong>Téléphone :</strong> {INFO.PHONENUMBER} <br />
          <strong>Email : </strong>
          {INFO.EMAIL}
          <br />
          <strong>Directeur de la publication : </strong>
          {INFO.FULLNAME}
          <br />
          <strong> Hébergeur :</strong> {INFO.HOST} <br />
          <strong> Adresse :</strong> {INFO.ADRESSHOST} <br />
          <br />
          Ce site a été créé à l&rsquo;aide de {INFO.STACK} et est protégé par
          la loi sur le droit d&rsquo;auteur. <br />
          Toute reproduction ou utilisation de ce site ou de son contenu est
          interdite sans l&rsquo;accord préalable du propriétaire du site. Les
          informations contenues sur ce site sont données à titre indicatif et
          ne sont pas exhaustives.
          <br />
          <br />
          Bien que nous nous efforçons de mettre à jour régulièrement le contenu
          de ce site, nous ne pouvons pas garantir que les informations
          qu&rsquo;il contient sont exactes, complètes et à jour. Nous déclinons
          donc toute responsabilité pour toute erreur ou omission qui pourrait
          s&rsquo;y trouver. Nous vous invitons à contacter le propriétaire du
          site pour toute question ou demande d&rsquo;information.
        </div>
      </Container>
    </>
  );
};

export default legalMention;
