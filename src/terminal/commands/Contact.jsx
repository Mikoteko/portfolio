import { contact } from "../../constants";

const Contact = () => (
  <div className="flex flex-col gap-1">
    <p>
      email:{" "}
      <a className="underline break-all" href={`mailto:${contact.email}`}>
        {contact.email}
      </a>
    </p>
    <p>
      github:{" "}
      <a
        className="underline break-all"
        href={contact.github}
        target="_blank"
        rel="noreferrer"
      >
        {contact.github}
      </a>
    </p>
    <p>
      linkedin:{" "}
      <a
        className="underline break-all"
        href={contact.linkedin}
        target="_blank"
        rel="noreferrer"
      >
        {contact.linkedin}
      </a>
    </p>
  </div>
);

export default Contact;
