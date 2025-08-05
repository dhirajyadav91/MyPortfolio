import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript, SiRedux, SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const skills = [
  { skill: "HTML", icon: FaHtml5 },
  { skill: "CSS", icon: FaCss3Alt },
  { skill: "JavaScript", icon: IoLogoJavascript },
  { skill: "TypeScript", icon: SiTypescript },
  { skill: "ReactJS", icon: FaReact },
  { skill: "Redux", icon: SiRedux },
  { skill: "NextJS", icon: SiNextdotjs },
  { skill: "TailwindCSS", icon: RiTailwindCssFill },
];

const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8 my-12">
      {skills.map((item, index) => (
        <motion.div
          key={index}
          variants={fadeIn("up", 0.2 * index)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-col items-center text-center"
        >
          <item.icon className="text-7xl text-orange-500 hover:scale-110 transition-transform duration-300" />
          <p className="mt-4 text-lg font-medium">{item.skill}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default AllSkillsSM;
