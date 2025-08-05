import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="dhirajdhoni97@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+919242607268" Image={FiPhone} />
      <SingleInfo text="dhiraj Yadav, Egypt" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
