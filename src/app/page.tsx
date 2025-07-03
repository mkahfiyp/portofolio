import Image from "next/image";
import { CgProfile } from "react-icons/cg";
import { CiMail } from "react-icons/ci";
import { FaGithub, FaInstagram, FaLinkedin, FaReact } from "react-icons/fa";
import { FaLaravel, FaPhp } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import { IoLogoJavascript, IoLogoNodejs, IoLogoPython } from "react-icons/io5";
import { SiMysql, SiNextdotjs, SiTypescript } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";


export default function Home() {
  return (
    // SECTION : 1. Hero | 2. About Me | 3. Skills | 4. Portofolio | 5. Experience | 6. Testimonials | 7. Contact
    <div className="">
      <div className="h-screen bg-[url('/assets/bg-image-1.png')] bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center px-[5%] md:px-[20%]">
        <h1 id="head" className="text-4xl md:text-6xl font-bold text-white mb-2">
          I’m Kahfi
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold text-teal-400 mb-4">
          Full-Stack Web Developer
        </h2>
        <h3 className="text-base md:text-lg text-gray-300 italic max-w-xl text-center mb-[20px]">
          &quot;I help bring ideas to life through clean, efficient, and user-focused web development.&quot;
        </h3>

        <div className="flex gap-5">
          <span className="">
            {/* <Link href="https://www.instagram.com/mkahfiyp/"><i className="fab fa-instagram fa-2xl text-white"></i></Link> */}
            {/* <a href="https://www.instagram.com/mkahfiyp/" target="_blank"><i className="fab fa-instagram fa-2xl text-white"></i></a> */}
            <a href="https://www.instagram.com/mkahfiyp/" target="_blank"><FaInstagram size={35} color="white" /></a>
          </span>
          <span className="">
            {/* <Link href="https://github.com/mkahfi467"><i className="fa-brands fa-github fa-2xl text-[#ffffff]"></i></Link> */}
            {/* <a href="https://github.com/mkahfi467" target="_blank"><i className="fa-brands fa-github fa-2xl text-[#ffffff]"></i></a> */}
            <a href="https://github.com/mkahfiyp" target="_blank"><FaGithub size={35} color="white" /></a>
          </span>
          <span className="">
            {/* <Link href=""><i className="fab fa-linkedin fa-2xl text-white"></i></Link> */}
            {/* <a href="https://www.linkedin.com/in/mkahfiyp/" target="_blank"><i className="fab fa-linkedin fa-2xl text-white"></i></a> */}
            <a href="https://www.linkedin.com/in/mkahfiyp/" target="_blank"><FaLinkedin size={35} color="white" /></a>
          </span>
        </div>
        {/* <img src="/assets/Socmed.png" alt="" /> */}
      </div>

      <div id="about" className="flex flex-col pt-[64px] items-center px-[5%] md:px-[20%]">
        <h1 className="rounded-full px-5 py-2 mb-4 judul-section dark:text-black">About Me</h1>
        <div className="">
          <Image src="/assets/image-1.png" alt="" />
        </div>

        <div className="flex flex-col items-center my-4 gap-0">
          <h2>I&apos;m Kahfi</h2>
        </div>

        <div className="flex flex-col gap-4 md:w-full indent-8 md:indent-0">
          {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero soluta, assumenda impedit aperiam itaque dolores, tempore esse fugit nulla eum deleniti saepe fuga, aliquid nam! Eius aspernatur earum animi natus unde quibusdam iste blanditiis qui ipsam et, rem, asperiores quidem at necessitatibus doloribus maiores vero quaerat tenetur hic voluptas! Doloremque inventore, ipsam corrupti mollitia dolorum quaerat, asperiores exercitationem facilis minus hic, quae ea ipsa minima voluptates. Natus aut neque iusto veniam amet explicabo asperiores corporis possimus ad accusantium. Iure placeat aperiam impedit, architecto sed error quasi? Laboriosam facilis quibusdam aut iusto quaerat, tenetur vitae, quam natus, ipsa veritatis voluptas itaque.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero soluta, assumenda impedit aperiam itaque dolores, tempore esse fugit nulla eum deleniti saepe fuga, aliquid nam! Eius aspernatur earum animi natus unde quibusdam iste blanditiis qui ipsam et, rem, asperiores quidem at necessitatibus doloribus maiores vero quaerat tenetur hic voluptas! Doloremque inventore, ipsam corrupti mollitia dolorum quaerat, asperiores exercitationem facilis minus hic, quae ea ipsa minima voluptates. Natus aut neque iusto veniam amet explicabo asperiores corporis possimus ad accusantium. Iure placeat aperiam impedit, architecto sed error quasi? Laboriosam facilis quibusdam aut iusto quaerat, tenetur vitae, quam natus, ipsa veritatis voluptas itaque.</p> */}
          <p className="text-justify indent-8">Halo! Saya Muhammad Kahfi Yulian Prakarsa, seorang pengembang perangkat lunak yang berfokus pada pengembangan aplikasi web dan mobile. Latar belakang saya di bidang Teknik Informatika membuat saya terbiasa berpikir logis dan sistematis dalam membangun solusi digital. Saya memiliki pengalaman dalam menggunakan berbagai teknologi seperti Laravel, Flutter, dan Next.js untuk membangun aplikasi yang efisien, responsif, dan ramah pengguna. Selain itu, saya juga tertarik pada penerapan algoritma seperti Collaborative Filtering untuk menciptakan sistem rekomendasi yang cerdas dan adaptif. Dalam setiap proyek, saya selalu berusaha menggabungkan fungsionalitas dengan pengalaman pengguna yang baik, karena saya percaya bahwa teknologi harus mudah digunakan dan menyelesaikan masalah nyata.</p>
          <p className="text-justify indent-8">Selama perjalanan saya di dunia teknologi, saya telah terlibat dalam berbagai proyek, mulai dari sistem informasi kampus, aplikasi penyewaan lapangan olahraga, hingga platform adopsi hewan. Saya menikmati proses belajar dan eksplorasi teknologi baru, karena saya percaya bahwa dunia digital terus berkembang dan menuntut kita untuk terus beradaptasi. Ketika tidak sedang mengoding, saya senang membaca tentang tren teknologi terbaru atau berdiskusi dengan rekan-rekan untuk bertukar ide. Melalui website pribadi ini, saya ingin berbagi karya, pengalaman, dan cerita perjalanan saya di dunia teknologi. Harapan saya, siapa pun yang berkunjung ke sini dapat menemukan inspirasi atau bahkan menjalin kolaborasi di masa mendatang.</p>
        </div>
      </div>

      <div id="skill" className="flex flex-col items-center pt-[64px] px-[5%] md:px-[20%]">

        <h1 className="rounded-full px-5 py-2 mb-4 judul-section dark:text-black">Skills</h1>
        <h2 className="mb-8 italic text-center text-gray-600 dark:text-gray-300 text-[20px]">&quot;These are the technologies and tools I use daily to bring ideas to life and solve real-world problems.&quot;</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 w-full mt-12">
          <div className="m-auto flex flex-col items-center gap-y-2">
            <IoLogoJavascript size={64} color="yellow" className="bg-black" />
            <p className="text-[18px] text-gray-600">Javascript</p>
          </div>

          <div className="m-auto flex flex-col items-center gap-y-2">
            <SiTypescript size={64} color="#3178C6" />
            <p className="text-[18px] text-gray-600">Typescript</p>
          </div>

          <div className="m-auto flex flex-col items-center gap-y-2">
            <FaReact size={64} color="#087EA4" />
            <p className="text-[18px] text-gray-600">React</p>
          </div>

          <div className="m-auto flex flex-col items-center gap-y-2">
            <SiNextdotjs size={64} />
            <p className="text-[18px] text-gray-600">Next.js</p>
          </div>

          <div className="m-auto flex flex-col items-center gap-y-2">
            <IoLogoNodejs size={64} color="#5FA04E" />
            <p className="text-[18px] text-gray-600">Node.js</p>
          </div>

          <div className="m-auto flex flex-col items-center gap-y-2">
            <FaPhp size={64} color="black" className="bg-[#606390]" />
            <p className="text-[18px] text-gray-600">PHP</p>
          </div>

          <div className="m-auto flex flex-col items-center gap-y-2">
            <IoLogoPython size={64} className="text-black dark:text-white" />
            <p className="text-[18px] text-gray-600">Python</p>
          </div>

          <div className="m-auto flex flex-col items-center gap-y-2">
            <TbBrandCSharp size={64} color="white" className="bg-[#77318A]" />
            <p className="text-[18px] text-gray-600">C#</p>
          </div>

          <div className="m-auto flex flex-col items-center gap-y-2">
            <FaLaravel size={64} color="#CC2115" />
            <p className="text-[18px] text-gray-600">Laravel</p>
          </div>

          <div className="m-auto flex flex-col items-center gap-y-2">
            <SiMysql size={64} className="bg-[#35718E]" color="white" />
            <p className="text-[18px] text-gray-600">MySQL</p>
          </div>

        </div>


        {/* <div className="grid divide-y-2 divide-gray-200 gap-4 mt-4"> */}
        {/* <div className="divide-y-2 w-full">
          <div className="">
            <h1>Front-end Development</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio totam nesciunt sapiente, ducimus culpa dolores in ullam voluptate quos repellat?</p>
          </div>
          <div className="">
            <h1>Front-end Development</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio totam nesciunt sapiente, ducimus culpa dolores in ullam voluptate quos repellat?</p>
          </div>
          <div className="">
            <h1>Front-end Development</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio totam nesciunt sapiente, ducimus culpa dolores in ullam voluptate quos repellat?</p>
          </div>
        </div> */}
      </div>

      <div id="portofolio" className="flex flex-col items-center pt-[64px] px-[5%] md:px-[20%]">
        <h1 className="rounded-full px-5 py-2 mb-4 judul-section dark:text-black">Portfolio</h1>
        <h2 className="mb-8 italic text-center text-gray-600 dark:text-gray-300 text-[20px]">&quot;Here are some of the projects I&apos;ve worked on — each one taught me something new and helped me grow as a developer.&quot;</h2>

        <div className="grid md:grid-cols-3 gap-4">

          <div className="w-full px-[24px] py-[21px] rounded-xl shadow-md dark:bg-[#1F2937]">
            <div className="skill-card-heading">
              {/* <img src="/assets/Frame1.png" alt="" className="w-full h-[100px]" /> */}
              {/* <img src="https://asset.ayo.co.id/image/venue/171039967951519.image_cropper_CF1FDE7D-DC1B-4E0B-87D5-85324ADDAC6D-7938-000005DDF263C401_middle.jpg" alt="" className="w-full h-[150px] rounded-t-lg" /> */}
              <Image src="https://asset.ayo.co.id/image/venue/171039967951519.image_cropper_CF1FDE7D-DC1B-4E0B-87D5-85324ADDAC6D-7938-000005DDF263C401_middle.jpg" alt="" className="w-full h-[150px] rounded-t-lg"/>
              <h1 className="font-bold">Front-end Development</h1>
            </div>
            <p>Lom ipsum dolo, sit amet consectetu adpisicing elit, rem voluptas sed blanditiis</p>
          </div>

          <div className="w-full px-[24px] py-[21px] rounded-xl shadow-md dark:bg-[#1F2937]">
            <div className="skill-card-heading">
              <Image src="/assets/Frame2.png" alt="" />
              <h1>UI/UX Designer</h1>
            </div>
            <p>Lom ipsum dolo, sit amet consectetu adpisicing elit, rem voluptas sed blanditiis</p>
          </div>
          <div className="w-full px-[24px] py-[21px] rounded-xl shadow-md dark:bg-[#1F2937]">
            <div className="skill-card-heading">
              <Image src="/assets/Frame2.png" alt="" />
              <h1>UI/UX Designer</h1>
            </div>
            <p>Lom ipsum dolo, sit amet consectetu adpisicing elit, rem voluptas sed blanditiis</p>
          </div>
          <div className="w-full px-[24px] py-[21px] rounded-xl shadow-md dark:bg-[#1F2937]">
            <div className="skill-card-heading">
              <Image src="/assets/Frame2.png" alt="" />
              <h1>UI/UX Designer</h1>
            </div>
            <p>Lom ipsum dolo, sit amet consectetu adpisicing elit, rem voluptas sed blanditiis</p>
          </div>
          <div className="w-full px-[24px] py-[21px] rounded-xl shadow-md dark:bg-[#1F2937]">
            <div className="skill-card-heading">
              <Image src="/assets/Frame2.png" alt="" />
              <h1>UI/UX Designer</h1>
            </div>
            <p>Lom ipsum dolo, sit amet consectetu adpisicing elit, rem voluptas sed blanditiis</p>
          </div>
        </div>
      </div>

      {/* <div id="portofolio" className="flex flex-col items-center pt-[64px] px-[5%] md:px-[20%]"> */}
      <div id="experience" className="pt-16 px-[5%] md:px-[20%] text-gray-600 dark:text-gray-300">
        <h1 className="rounded-full px-5 py-2 mb-4 judul-section w-fit m-auto dark:text-black">Experience</h1>
        <h2 className="mb-8 italic text-center text-gray-600 dark:text-gray-300 text-[20px]">&quot;Here&apos;s a glimpse into my journey so far — the roles I&apos;ve taken, the teams I&apos;ve joined, and the lessons I&apos;ve learned along the way.&quot;</h2>

        <div className="grid gap-4">
          <div className="w-full px-6 py-5 rounded-xl shadow-md md:grid md:grid-cols-5 dark:bg-[#1F2937]">
            <div className="">
              <Image src="/assets/Frame2.png" alt="" className="m-auto" />
            </div>
            <div className="col-span-3 p-1">
              <h1 className="text-gray-900 text-[20px] font-semibold dark:text-white">Sr. Frontend Developer</h1>
              <ul className="list-disc list-inside">
                <li className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li className="">Ut pretium arcu et massa semper, id fringilla leo semper.</li>
                <li className="">Sed quis justo ac magna.</li>
                <li className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              </ul>
            </div>
            <div className="text-right">
              <p className="text-gray-700 dark:text-gray-400">Nov 2021 - Present</p>
            </div>
          </div>
        </div>
      </div>

      <div id="testimonials" className="pt-16 px-[5%] md:px-[20%] text-gray-600 dark:text-gray-300">
        <h1 className="rounded-full px-5 py-2 mb-4 judul-section w-fit m-auto dark:text-black">Testimonials</h1>
        <h2 className="mb-8 italic text-center text-gray-600 dark:text-gray-300 text-[20px]">&quot;I&apos;ve been lucky to work with some amazing people. Here&apos;s what they&apos;ve said about working with me.&quot;</h2>

        <div className="overflow-x-auto grid gap-4 md:flex md:flex-nowrap md:max-w-full p-4">
          <div className="w-full px-6 py-5 rounded-xl shadow-md flex flex-col items-center text-left gap-6 md:min-w-94 md:max-w-94 dark:bg-[#1F2937]">
            <CgProfile size={64} />
            <p className="w-full">“Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.”</p>

            <div className="text-center">
              <h1 className="text-gray-900 dark:text-white font-semibold text-[20px]">John Doe</h1>
              <h2 className="text-[14px]">Founder - xyz.com</h2>
            </div>
          </div>
          <div className="w-full px-6 py-5 rounded-xl shadow-md flex flex-col items-center text-left gap-6 md:min-w-94 md:max-w-94 dark:bg-[#1F2937]">
            <CgProfile size={64} />
            <p className="w-full">“Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.”</p>

            <div className="text-center">
              <h1 className="text-gray-900 dark:text-white font-semibold text-[20px]">John Doe</h1>
              <h2 className="text-[14px]">Founder - xyz.com</h2>
            </div>
          </div>
          <div className="w-full px-6 py-5 rounded-xl shadow-md flex flex-col items-center text-left gap-6 md:min-w-94 md:max-w-94 dark:bg-[#1F2937]">
            <CgProfile size={64} />
            <p className="w-full">“Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.”</p>

            <div className="text-center">
              <h1 className="text-gray-900 dark:text-white font-semibold text-[20px]">John Doe</h1>
              <h2 className="text-[14px]">Founder - xyz.com</h2>
            </div>
          </div>
          <div className="w-full px-6 py-5 rounded-xl shadow-md flex flex-col items-center text-left gap-6 md:min-w-94 md:max-w-94 dark:bg-[#1F2937]">
            <CgProfile size={64} />
            <p className="w-full">“Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.”</p>

            <div className="text-center">
              <h1 className="text-gray-900 dark:text-white font-semibold text-[20px]">John Doe</h1>
              <h2 className="text-[14px]">Founder - xyz.com</h2>
            </div>
          </div>
          <div className="w-full px-6 py-5 rounded-xl shadow-md flex flex-col items-center text-left gap-6 md:min-w-94 md:max-w-94 dark:bg-[#1F2937]">
            <CgProfile size={64} />
            <p className="w-full">“Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.”</p>

            <div className="text-center">
              <h1 className="text-gray-900 dark:text-white font-semibold text-[20px]">John Doe</h1>
              <h2 className="text-[14px]">Founder - xyz.com</h2>
            </div>
          </div>
        </div>
      </div>

      <div id="contact" className="pt-16 px-[5%] md:px-[20%] mb-24 text-gray-900 dark:text-gray-300">
        <h1 className="rounded-full px-5 py-2 mb-4 judul-section w-fit m-auto dark:text-black">Contact</h1>
        <h2 className="mb-8 italic text-center text-gray-600 dark:text-gray-300 text-[20px]">&quot;Have a question, idea, or opportunity? I&apos;d love to hear from you! Don&apos;t hesitate to drop me a message.&quot;</h2>

        <div className="flex flex-col items-center justify-center gap-y-5">
          <div className="flex flex-col md:flex-row gap-5">
            <CiMail size={44} className="m-auto" />
            <h3 className="font-semibold text-2xl md:text-4xl">mkahfi467@gmail.com</h3>
          </div>
          <div className="flex flex-col md:flex-row gap-5">
            <FiPhone size={44} className="m-auto" />
            <h3 className="font-semibold text-2xl md:text-4xl">+62 812-3456-7890</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
