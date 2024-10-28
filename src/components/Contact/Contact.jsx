import { IoPersonCircleSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import styles from "./Contact.module.css";

const Contact = ({ id, name, number, onDeleteContact }) => {
  return (
    <li className={styles.contact}>
      <div className={styles.contactInfo}>
        <IoPersonCircleSharp className={styles.icon} />
        <span>{name}</span>
      </div>
      <div className={styles.contactInfo}>
        <FaPhoneAlt className={styles.icon} />
        <span>{number}</span>
      </div>
      <button
        className={styles.button}
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
