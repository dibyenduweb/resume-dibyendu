// /* eslint-disable react/no-unescaped-entities */
// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";

// const Experience = () => {
//     const refHeading = useRef(null);
//     const inViewHeading = useInView(refHeading);

//     const variants1 = {
//         initial: { opacity: 0, y: 50 },
//         animate: { opacity: 1, y: 0 },
//     };

//     return (
// <>
// <section className=" sm:px-8 py-[80px]" id="experience">
//             <motion.div
//                 ref={refHeading}
//                 variants={variants1}
//                 initial="initial"
//                 animate={inViewHeading ? "animate" : "initial"}
//                 transition={{ duration: 0.6 }}
//                 className="flex gap-4 items-center"
//             >
//                 <h3 className="text-textWhite text-3xl sm:text-5xl font-[800]">
//                 Experience
//                 </h3>
//                 <div className="min-w-0 flex-grow mt-2 h-[4px] bg-textWhite"></div>
//             </motion.div>
//         </section>

//        <div className="lg:flex lg:justify-evenly">
//         <div>
//    <h2 className="w-[800px] lg:my-4 text-4xl font-bold">
//    My Learning Experience with programing hero
//    </h2>
//    <p className="lg:w-[500px]">
//    My transformative web development journey with Programming Hero has been life-changing. The course is impactful, providing insights into things I've never encountered before. It's a focused and dynamic learning experience, fostering a deep passion for acquiring new skills. I never imagined tackling a MERN stack project, and I'm proud of my achievements. Grateful to Programming Hero for this enriching experience.
//     </p>

//     <h2 className="w-[800px] lg:my-4 text-2xl font-bold">
//    Working Experience in web development
//    </h2>
//    <p className="lg:w-[500px]">
//    Completed Programming Hero assignments, gaining hands-on experience in frontend and full projects. Now engaged in a unique project and freelancing for web development. Excited for the opportunities ahead! Currently exploring cutting-edge technologies to enhance my skills and deliver innovative solutions. Need code help? Share details for personalized assistance!
//     </p>
//         </div>

//         <div>
//             <img
//               src="https://i.ibb.co/sbTBMt4/earthgif.gif"
//               alt="Globe animation representing technology and innovation"
//               className="lg:w-[600px] rounded-3xl lg:my-14"
//             />
//           </div>
//         </div>
      
// </>
        
//     );
// };
  
// export default Experience;
  //Experience


 /* eslint-disable react/no-unescaped-entities */
 import { motion, useInView } from "framer-motion";
 import { useRef } from "react";
 
 const Experience = () => {
     const refHeading = useRef(null);
     const inViewHeading = useInView(refHeading);
 
     const variants1 = {
         initial: { opacity: 0, y: 50 },
         animate: { opacity: 1, y: 0 },
     };
 
     return (
 <>
 <section className=" sm:px-8 py-[80px]" id="experience">
             <motion.div
                 ref={refHeading}
                 variants={variants1}
                 initial="initial"
                 animate={inViewHeading ? "animate" : "initial"}
                 transition={{ duration: 0.6 }}
                 className="flex gap-4 items-center"
             >
                 <h3 className="text-textWhite text-3xl sm:text-5xl font-[800]">
                 Experience
                 </h3>
                 <div className="min-w-0 flex-grow mt-2 h-[4px] bg-textWhite"></div>
             </motion.div>
         </section>
 
        <div className="lg:flex lg:justify-evenly">
         <div>
    <h2 className="lg:w-[800px] lg:my-4 text-4xl font-bold">
    My Learning Experience with programing hero
    </h2>
    <p className="lg:w-[500px]">
    My transformative web development journey with Programming Hero has been life-changing. The course is impactful, providing insights into things I've never encountered before. It's a focused and dynamic learning experience, fostering a deep passion for acquiring new skills. I never imagined tackling a MERN stack project, and I'm proud of my achievements. Grateful to Programming Hero for this enriching experience.
     </p>
 
     <h2 className="lg:w-[800px] lg:my-4 text-2xl font-bold">
    Working Experience in web development
    </h2>
    <p className="lg:w-[500px]">
    Completed Programming Hero assignments, gaining hands-on experience in frontend and full projects. Now engaged in a unique project and freelancing for web development. Excited for the opportunities ahead! Currently exploring cutting-edge technologies to enhance my skills and deliver innovative solutions. Need code help? Share details for personalized assistance!
     </p>
         </div>
 
         <div>
             <img
               src="https://i.ibb.co/sbTBMt4/earthgif.gif"
               alt="Globe animation representing technology and innovation"
               className="lg:w-[600px] rounded-3xl lg:my-14"
             />
           </div>
         </div>
       
 </>
         
     );
 };
   
 export default Experience;