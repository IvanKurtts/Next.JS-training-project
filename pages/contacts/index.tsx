import { FC } from "react";
import { contactType } from "../../types";
import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
// import { useState, useEffect } from "react";
import Heading from "../../components/Heading";

type contactsTypeProps = {
  contacts: [contactType]
}

export const getStaticProps:GetStaticProps = async () => {
  const response = await fetch ('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  if (!data) {
    return {notFound: true,}
  }
  return {
    props: {contacts: data},
  }
};

const Contacts:FC<contactsTypeProps> = ({contacts}) => {
  // const [contacts, setContacts] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch ('https://jsonplaceholder.typicode.com/users');
  //     const data = await response.json();
  //     setContacts(data);
  //   }
  //   fetchData();
  // }, []);

  return (
    <>
    <Head>
      <title>Contacts</title>
    </Head>
    <h1>Contacts list:</h1> 
    <ul>
      {contacts && contacts.map(({id, name}) => (
        <li key={id}>
          <Link href={`/contacts/${id}`}><strong>{name}</strong></Link>
        </li>
      ))}
    </ul>
    </>
  );
};
  
export default Contacts;