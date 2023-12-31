import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const apiKey = "dd4d2ac72c1a28e75b68085c4db2c5d1";
    const apiSecret = "0649fb77a30fb5c26e1b3a5ba715edd9";

    const encoded = ethereumjs.Buffer.Buffer.from(`${apiKey}:${apiSecret}`).toString('base64');

    fetch('https://api.mailjet.com/v3.1/send',{
      method : 'POST',
      mode : 'no-cors',
      headers : {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${encoded}`,
      },
      body : {
        "Messages":[
          {
            "From": {
              "Email": "emiliepacheco@yahoo.com",
              "Name": "Emilie Pacheco"
            },
            "To": [
              {
                "Email": "emilie.pacheco@orange.fr",
                "Name": "Emilie Pacheco"
              }
            ],
            "TemplateID": 5368748,
            "TemplateLanguage": true,
            "Subject": `Contact portfolio de ${form.firstname}`,
            "Variables": {
              "name": form.firstname,
              "email" : form.email,
              "message": form.message,
            }
          }
        ]
      }
    })
    .then(resp=>resp.json())
    .then(data => {
      console.log('data mailjet', data);
    })
    .catch(err => err)

  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Restons en contact</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Votre nom</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="Quel est votre nom ?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Votre adresse mail</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="Quel est votre adresse email ?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Votre message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder="Qu'est-ce que vous souhaitez dire?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "En cours d'envoi" : "Envoyer"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");