"use client";
import { useState } from "react";
import StudentReviews from "./components/StudentReviews";
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const courses = [
    {
      name: "Python Programming",
      slug: "python",
      image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=1200&auto=format&fit=crop",
      tools: "Python, Django, Flask, MySQL",
    },
    {
      name: "Full Stack Development",
      slug: "full-stack",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
      tools: "HTML, CSS, JavaScript, React.js, Node.js, MongoDB",
    },
    {
      name: "AI & Machine Learning",
      slug: "ai-ml",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
      tools: "Python, TensorFlow, Pandas, NumPy",
    },
    {
      name: "Data Science",
      slug: "data-science",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
      tools: "Python, Power BI, Pandas, Excel",
    },
    {
      name: "Cyber Security",
      slug: "cyber-security",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop",
      tools: "Ethical Hacking, Kali Linux, Networking",
    },
    {
      name: "UI / UX Design",
      slug: "ui-ux",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=1200&auto=format&fit=crop",
      tools: "Figma, Adobe XD, Prototyping",
    },
    {
      name: "Cloud Computing",
      slug: "cloud-computing",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
      tools: "AWS, Azure, Google Cloud, Linux",
    },
    {
      name: "Mobile App Development",
      slug: "mobile-app-development",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop",
      tools: "Flutter, React Native, Firebase",
    },
    {
      name: "Software Testing",
      slug: "software-testing",
      image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1200&auto=format&fit=crop",
      tools: "Manual Testing, Selenium, Postman",
    },
    {
      name: "DevOps Training",
      slug: "devops",
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=1200&auto=format&fit=crop",
      tools: "Docker, Kubernetes, Jenkins, GitHub",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-100">
    <>
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          {/* LOGO */}
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Loomic Tech"
              className="w-12 h-12 object-contain"
            />

            <h1 className="text-xl md:text-2xl font-bold text-blue-700">
              LOOMIC TECH
            </h1>
          </div>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex gap-8 font-medium text-gray-700">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-3xl text-blue-700"
          >
            ☰
          </button>
        </div>

        {/* MOBILE MENU DROPDOWN */}
        {menuOpen && (
          <div className="md:hidden bg-white px-6 pb-6 shadow-md">
            <div className="flex flex-col gap-4 text-gray-700 font-medium">
              <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
              <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
              <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
              <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </header>
    </>

<section
  id="home"
  className="relative min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-900 flex items-center py-16 overflow-hidden"
>
 <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

    {/* LEFT */}
    <div className="text-white">

      <p className="uppercase tracking-[4px] text-blue-300 mb-4 font-semibold text-sm">
        Welcome To Loomic Tech
      </p>

      <h1 className="text-4xl md:text-6xl font-bold leading-tight">
        Start Smart Learning
        <span className="block text-blue-400 mt-2">
          Today
        </span>
      </h1>

      <p className="text-slate-200 text-lg leading-8 mt-8 max-w-xl">
        Industry-oriented internship conducted by Loomic Tech Solutions
        to make students job-ready with hands-on training and real-world projects.
      </p>
      {/* STATS */}
      <div className="flex flex-wrap gap-10 mt-10 items-center">

        <div>
          <h3 className="text-3xl font-bold text-green-400">750+</h3>
          <p className="text-slate-300">Students</p>
        </div>

        <div>
          <div className="text-yellow-400 text-2xl">
            ⭐⭐⭐⭐⭐
          </div>
          <p className="text-slate-300">Trusted by many</p>
        </div>

      </div>

      {/* BUTTONS */}
      <div className="flex flex-wrap gap-4 mt-10">
        <a
          href="#courses"
          className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold"
        >
          Explore Courses
        </a>

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdLr-WCuKRVRkU2wk31pXBTTaUkDjNQKyl15f8v-jJA60_T5g/viewform?usp=publish-editor"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold"
        >
          Join Internship
        </a>
      </div>
    </div>

    {/* RIGHT IMAGE */}
  <div className="flex justify-center">
  <img
    src="/hero-image.png"
    alt="Loomic Tech"
    className="w-full max-w-xl rounded-3xl shadow-2xl float-image"
  />
</div>
  </div>
</section>{/* COURSES */}
<section
  id="courses"
  className="py-20 px-6 bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-900"
>
  <div className="max-w-7xl mx-auto">
  <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-14">
  Our Professional Courses
</h2>
  <p className="text-center text-slate-300 text-lg mb-12 max-w-3xl mx-auto">
  Explore industry-focused courses designed with practical training,
  internships and real-world projects to build your future career.
</p>
<div className="overflow-hidden">
  <div className="course-slider gap-6">
      {courses.map((course) => (
        <div
          key={course.slug}
          className="min-w-[280px] bg-white rounded-2xl shadow-lg overflow-hidden flex-shrink-0"
        >
          <img
            src={course.image}
            alt={course.name}
            className="w-full h-48 object-cover"
          />

          <div className="p-5">
            <h3 className="text-xl font-bold text-blue-700">
              {course.name}
            </h3>

            <p className="text-gray-600 mt-2">
              {course.tools}
            </p>

            <p className="mt-3">✅ Internship Certificate Included</p>
            <p>✅ Online & Offline Classes</p>
            <p>✅ Real-Time Projects</p>

            <div className="flex gap-3 mt-5">
              <a
                href={`/course/${course.slug}`}
                className="w-full bg-blue-600 text-white py-3 rounded-xl text-center font-semibold"
              >
                Details
              </a>

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdLr-WCuKRVRkU2wk31pXBTTaUkDjNQKyl15f8v-jJA60_T5g/viewform?usp=publish-editor"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-green-500 text-white py-3 rounded-xl text-center font-semibold"
              >
                Register
              </a>
            </div>

          </div>
        </div>
      ))}
    </div>
</div>
  </div>
</section>
{/* WHY CHOOSE US + STATS */}
<section className="py-24 px-6 bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-900 text-white">
  <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <div className="text-center mb-16">
      <span className="bg-orange-100 text-blue-500 px-6 py-2 rounded-full text-sm font-semibold">
        Why Choose Us
      </span>

      <h2 className="text-4xl md:text-5xl font-bold mt-6">
        Why Choose <span className="text-blue-400">LOOMIC TECH</span>
      </h2>

      <p className="text-slate-300 mt-6 text-lg max-w-3xl mx-auto">
        Empowering Skills. Building Careers. Your success is our mission.
      </p>
    </div>

    {/* Cards */}
    <div className="grid md:grid-cols-4 gap-8 mb-20">

      <div className="bg-white text-slate-900 rounded-3xl p-8 text-center shadow-xl">
        <div className="text-5xl mb-5">👨‍🏫</div>
        <h3 className="text-2xl font-bold mb-4">Industry Experts</h3>
        <p className="text-gray-600">
          Learn from professionals with real-world experience.
        </p>
      </div>

      <div className="bg-white text-slate-900 rounded-3xl p-8 text-center shadow-xl">
        <div className="text-5xl mb-5">🎯</div>
        <h3 className="text-2xl font-bold mb-4">Hands-on Training</h3>
        <p className="text-gray-600">
          Practical training with projects and live coding sessions.
        </p>
      </div>

      <div className="bg-white text-slate-900 rounded-3xl p-8 text-center shadow-xl">
        <div className="text-5xl mb-5">🏅</div>
        <h3 className="text-2xl font-bold mb-4">Certificate Provided</h3>
        <p className="text-gray-600">
          Certification after successful completion.
        </p>
      </div>

      <div className="bg-white text-slate-900 rounded-3xl p-8 text-center shadow-xl">
        <div className="text-5xl mb-5">💼</div>
        <h3 className="text-2xl font-bold mb-4">Internship Opportunities</h3>
        <p className="text-gray-600">
          Internship and placement support for students.
        </p>
      </div>

    </div>

    {/* Stats */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

      <div>
        <h2 className="text-5xl font-bold text-green-400">50+</h2>
        <p className="mt-3 text-slate-300">Workshops Conducted</p>
      </div>

      <div>
        <h2 className="text-5xl font-bold text-green-400">1000+</h2>
        <p className="mt-3 text-slate-300">Students Trained</p>
      </div>

      <div>
        <h2 className="text-5xl font-bold text-green-400">95%</h2>
        <p className="mt-3 text-slate-300">Satisfaction Rate</p>
      </div>

      <div>
        <h2 className="text-5xl font-bold text-green-400">200+</h2>
        <p className="mt-3 text-slate-300">Industry Partners</p>
      </div>

    </div>

    {/* Button */}
    <div className="flex justify-center mt-16">
      <a
        href="#contact"
        className="bg-green-500 hover:bg-orange-600 text-white px-10 py-4 rounded-2xl text-lg font-semibold"
      >
        💬 Get in Touch
      </a>
    </div>

  </div>
</section>{/* WHY CHOOSE US */}
<section className="py-24 px-6 bg-gradient-to-b from-[#081028] via-[#0b1f4d] to-[#102b6a] text-white">
  <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold">
        Key Features of <span className="text-blue-400">LOOMIC TECH</span>
      </h2>

      <p className="text-slate-300 mt-5 text-lg max-w-3xl mx-auto">
        Empowering Skills. Building Careers. Your success is our mission.
      </p>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

      {[
        {
          title: "Industry Experts",
          icon: "👨‍🏫",
          desc: "Learn from experienced professionals with real-time industry knowledge.",
        },
        {
          title: "Guaranteed Internship",
          icon: "🎯",
          desc: "Internship opportunities with practical project exposure.",
        },
        {
          title: "Job Placement Assistance",
          icon: "💼",
          desc: "Resume support and interview guidance for students.",
        },
        {
          title: "Certification",
          icon: "📄",
          desc: "Industry-recognized course completion certification.",
        },
        {
          title: "Career Guidance",
          icon: "🧭",
          desc: "Personalized career guidance and mentoring.",
        },
        {
          title: "Hackathons & Events",
          icon: "🚀",
          desc: "Participate in workshops, coding events and hackathons.",
        },
        {
          title: "Lifetime Access",
          icon: "🔐",
          desc: "Access learning resources anytime.",
        },
        {
          title: "Live Projects",
          icon: "💻",
          desc: "Work on real-time projects with practical experience.",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-3xl p-8 text-slate-900 shadow-xl cursor-pointer transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:bg-green-500 hover:text-white"
          >
          <h3 className="text-2xl font-bold mb-4">
            {item.icon} {item.title}
          </h3>

          <p className="text-gray-600 text-lg leading-8">
            {item.desc}
          </p>
        </div>
      ))}

    </div>

    {/* Button */}
    <div className="flex justify-center mt-16">
      <a
        href="#contact"
        className="bg-green-500 hover:bg-blue-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl transition"
      >
        Get in Touch
      </a>
    </div>

  </div>
</section>{/* GET 10% SCHOLARSHIP SECTION */}
<section
  className="py-24 px-6 min-h-screen bg-gradient-to-br from-blue-100 via-white to-green-100"
>
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

    {/* LEFT IMAGE */}
    <div className="flex justify-center">
      <img
        src="/scholarship.png"
        alt="Get 10% Scholarship"
        className="w-full max-w-md rounded-3xl shadow-2xl hover:scale-105 transition duration-500"
      />
    </div>

    {/* RIGHT CONTENT */}
    <div>
      <span className="bg-green-100 text-green-700 px-5 py-2 rounded-full font-semibold">
        🎓 Scholarship Program
      </span>

      <h2 className="text-4xl md:text-5xl font-bold mt-6 leading-tight text-slate-900">
        Get
        <span className="text-blue-600"> 10% Scholarship </span>
        at
        <span className="text-green-600"> Loomic Tech</span>
      </h2>

      <p className="text-gray-600 mt-6 text-lg leading-8">
        Start your learning journey with Loomic Tech and unlock
        a special 10% scholarship on selected courses.
        Learn with real-time projects, internship training,
        expert mentors and career guidance.
      </p>

      <div className="mt-8 space-y-4 text-slate-800">

        <div className="flex gap-3 items-center">
          <span className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center">✓</span>
          10% Scholarship on Selected Courses
        </div>

        <div className="flex gap-3 items-center">
          <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center">✓</span>
          Internship & Real-Time Projects
        </div>

        <div className="flex gap-3 items-center">
          <span className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center">✓</span>
          Certificate & Placement Support
        </div>

      </div>

      <div className="flex flex-wrap gap-4 mt-10">
        <a
    href="https://docs.google.com/forms/d/e/1FAIpQLSdLr-WCuKRVRkU2wk31pXBTTaUkDjNQKyl15f8v-jJA60_T5g/viewform"
          target="_blank"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg"
        >
          Apply Scholarship
        </a>

        <a
          href="https://wa.me/918807129618"
          target="_blank"
          className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg"
        >
          Get in Touch
        </a>
      </div>

    </div>

  </div>
</section>{/* WHY LOOMIC TECH IS BEST */}
<section className="py-24 px-6 bg-gradient-to-b from-[#020617] via-[#081028] to-[#0b1f4d] text-white">
  <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-6xl font-bold">
        Why Choose <span className="text-blue-400">Loomic Tech</span>
      </h2>

      <p className="text-slate-300 mt-5 text-lg">
        Learn faster. Build real projects. Start your career with confidence.
      </p>
    </div>

    {/* Top Labels */}
    <div className="grid grid-cols-3 gap-4 mb-8 text-center font-semibold">
      <div></div>

      <div className="bg-blue-600 rounded-xl py-3">
        ⭐ LOOMIC TECH
      </div>

      <div className="text-slate-400 py-3">
        Others
      </div>
    </div>

    {/* Comparison Rows */}
    {[
      "Job Oriented Syllabus + Career Guidance",
      "Internship Training",
      "Lifetime Access + Updates",
      "Certificate After Completion",
      "Hackathons & Events",
      "Industry Mentorship",
    ].map((item, i) => (
      <div
        key={i}
        className="grid grid-cols-3 items-center bg-white/10 border border-white/10 rounded-2xl px-8 py-6 mb-5"
      >
        <div className="text-left text-lg">{item}</div>

        <div className="text-center text-green-400 text-3xl">✓</div>

        <div className="text-center text-red-400 text-3xl">✕</div>
      </div>
    ))}

    {/* Progress Bar */}
    <div className="mt-16 border-t border-white/10 pt-12">

      <div className="flex justify-between mb-3">
        <span className="font-semibold">LOOMIC TECH</span>
        <span className="text-green-400">100% Features</span>
      </div>

      <div className="w-full bg-slate-700 rounded-full h-4">
        <div className="bg-gradient-to-r from-blue-500 to-cyan-400 h-4 rounded-full w-full"></div>
      </div>

      <div className="flex justify-between mt-10 mb-3">
        <span className="font-semibold">Others</span>
        <span className="text-slate-400">Average</span>
      </div>

      <div className="w-full bg-slate-700 rounded-full h-4">
        <div className="bg-slate-500 h-4 rounded-full w-2/3"></div>
      </div>

    </div>

    {/* Bottom Text */}
    <div className="text-center mt-16">
      <h3 className="text-3xl md:text-4xl font-bold">
        Your dream career starts with
        <span className="text-blue-400"> Loomic Tech ⚡</span>
      </h3>
    </div>

    {/* Buttons */}
    <div className="flex flex-wrap justify-center gap-5 mt-12">
      <a
        href="#courses"
        className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold"
      >
        Explore Courses
      </a>

      <a
        href="https://wa.me/918807129618"
        target="_blank"
        className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-xl font-semibold"
      >
        Get in Touch
      </a>
    </div>
  </div>
</section>
<section className="py-24 px-6 bg-gradient-to-b from-[#03132d] via-[#07224d] to-[#0b3570] overflow-hidden">
  <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <div className="text-center mb-14">
      <h2 className="text-4xl md:text-6xl font-bold text-white">
        Our Learners Work At
      </h2>

      <p className="text-slate-300 mt-5 text-lg max-w-3xl mx-auto">
        Join thousands of successful Loomic Tech learners now working at leading companies worldwide
      </p>
    </div><div className="overflow-hidden mt-16">
  <div className="flex gap-8 animate-marquee w-max items-center">

    {[
      ["Amazon","https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"],
      ["Google","https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"],
      ["Infosys","https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg"],
      ["IBM","https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"],
      ["Capgemini","https://upload.wikimedia.org/wikipedia/commons/9/9d/Capgemini_201x_logo.svg"],
      ["Cognizant","https://upload.wikimedia.org/wikipedia/commons/4/43/Cognizant_logo_2022.svg"],

      /* repeat for smooth loop */
      ["Amazon","https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"],
      ["Google","https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"],
      ["Infosys","https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg"],
    ].map(([name, logo], i) => (
      <div
        key={i}
        className="bg-white rounded-2xl shadow-xl px-8 py-6 min-w-[220px] h-32 flex flex-col items-center justify-center hover:scale-105 transition"
      >
        <img
          src={logo}
          alt={name}
          className="h-10 object-contain"
        />

        <p className="mt-3 font-semibold text-slate-800">
          {name}
        </p>
      </div>
    ))}

  </div>
</div>

    {/* Bottom Button */}
    <div className="mt-14 flex flex-col md:flex-row justify-center gap-5 items-center">

      <div className="bg-white/10 backdrop-blur-md border border-white/10 text-white px-8 py-4 rounded-full">
        🚀 Be part of this success story Start Your Journey Today
      </div>

      <a
        href="#contact"
        className="bg-green-500 hover:bg-green-600 text-white px-10 py-4 rounded-2xl font-semibold shadow-lg"
      >
        Get in Touch
      </a>

    </div>
  </div>
</section>
      {/* ABOUT */}
     {/* ABOUT US */}
<section
  id="about"
  className="py-28 px-6 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white"
>
  <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <div className="text-center mb-20">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        About LOOMIC TECH
      </h2>

      <p className="max-w-4xl mx-auto text-lg text-slate-300 leading-8">
        LOOMIC TECH Pvt Ltd is a modern technology training and software
        solutions company focused on creating skilled professionals through
        practical learning, internships, real-time projects and expert mentorship.
      </p>
    </div>

    {/* Founder */}
    <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 shadow-2xl mb-14 border border-white/10">
      <h3 className="text-3xl font-bold text-cyan-300 mb-4">
        Founder – Tamil Selvam
      </h3>

      <p className="text-slate-200 leading-8 text-lg">
        LOOMIC TECH was founded by <strong>Tamil Selvam</strong> with the vision
        of helping students learn industry-ready technology skills through
        practical exposure, project development and career-focused IT training.
      </p>
    </div>

    {/* Vision + Mission */}
    <div className="grid md:grid-cols-2 gap-10 mb-14">

      <div className="bg-white/10 rounded-3xl p-8 border border-cyan-400/20">
        <h3 className="text-2xl font-bold text-cyan-300 mb-4">
          Our Vision
        </h3>

        <p className="text-slate-200 leading-8">
          To become a trusted technology learning platform where students build
          practical skills, gain confidence and grow into successful IT professionals.
        </p>
      </div>

      <div className="bg-white/10 rounded-3xl p-8 border border-green-400/20">
        <h3 className="text-2xl font-bold text-cyan-300 mb-4">
          Our Mission
        </h3>

        <p className="text-slate-200 leading-8">
          To provide affordable, practical and industry-focused training with
          internships, certifications, live projects and placement support.
        </p>
      </div>

    </div>

    {/* Features */}
    <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">

      <div className="bg-white/10 rounded-2xl p-6 text-center">
        <div className="text-4xl mb-3">💻</div>
        <h4 className="font-semibold">Live Training</h4>
      </div>

      <div className="bg-white/10 rounded-2xl p-6 text-center">
        <div className="text-4xl mb-3">🚀</div>
        <h4 className="font-semibold">Real-Time Projects</h4>
      </div>

      <div className="bg-white/10 rounded-2xl p-6 text-center">
        <div className="text-4xl mb-3">📜</div>
        <h4 className="font-semibold">Certificate</h4>
      </div>

      <div className="bg-white/10 rounded-2xl p-6 text-center">
        <div className="text-4xl mb-3">👨‍🏫</div>
        <h4 className="font-semibold">Expert Mentors</h4>
      </div>

      <div className="bg-white/10 rounded-2xl p-6 text-center">
        <div className="text-4xl mb-3">🎯</div>
        <h4 className="font-semibold">Placement Support</h4>
      </div>

      <div className="bg-white/10 rounded-2xl p-6 text-center">
        <div className="text-4xl mb-3">🏆</div>
        <h4 className="font-semibold">Internship Program</h4>
      </div>

    </div>

    {/* Stats */}
    <div className="grid md:grid-cols-3 gap-8 mt-16">

      <div className="bg-cyan-500 rounded-3xl p-10 text-center text-black font-bold">
        <h3 className="text-4xl mb-2">700+</h3>
        <p>Projects Completed</p>
      </div>

      <div className="bg-green-500 rounded-3xl p-10 text-center text-black font-bold">
        <h3 className="text-4xl mb-2">1200+</h3>
        <p>Students Trained</p>
      </div>

      <div className="bg-purple-500 rounded-3xl p-10 text-center text-black font-bold">
        <h3 className="text-4xl mb-2">150+</h3>
        <p>Company Tie-Ups</p>
      </div>

    </div>

  </div>
 </section>
<StudentReviews />
      {/* CONTACT */}
     {/* CONTACT INFO */}
<section
  id="contact"className="py-24 px-6 bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-900 text-white"
>
  <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-5">
        Contact Information
      </h2>

      <p className="text-gray-300 text-lg">
        Reach out to LOOMIC TECH anytime
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-12">

      {/* Left */}
      <div className="bg-white/5 rounded-3xl p-10 space-y-6 border border-white/10">

        <div>
          <h3 className="text-xl font-semibold mb-2">📞 Mobile Number</h3>
          <p className="text-gray-300">+91 8807129618</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">💬 WhatsApp</h3>
          <a
            href="https://wa.me/918807129618"
            target="_blank"
            className="text-green-400 hover:text-green-300"
          >
            Chat with us on WhatsApp
          </a>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">📧 Email</h3>
          <p className="text-gray-300">
         loomictechinnovation@gmail.com 
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">📍 Location</h3>
          <p className="text-gray-300">
            Krishnagiri, Tamil Nadu, India
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">🏢 Office Address</h3>

          <p className="text-gray-300 leading-8">
            Friends Collection,<br />
            Subramaniyapuram,<br />
            SKD Palkouva(opp),<br />
            Thimmapuraam(post),<br />
            Krishnagiri – 635112
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">🕒 Working Hours</h3>
          <p className="text-gray-300">
            Monday – Saturday | 9:00 AM – 7:00 PM
          </p>{/* SOCIAL MEDIA + REGISTER */}
<div className="mt-8 space-y-4">

  <a
    href="https://docs.google.com/forms/d/e/1FAIpQLSdLr-WCuKRVRkU2wk31pXBTTaUkDjNQKyl15f8v-jJA60_T5g/viewform"
    target="_blank"
    rel="noopener noreferrer"
    className="block w-full text-center bg-cyan-400 hover:bg-cyan-500 text-black font-bold py-4 rounded-2xl transition"
  >
    📝 Register for Course
  </a>

  <a
    href="https://instagram.com/loomic_tech"
    target="_blank"
    rel="noopener noreferrer"
    className="block w-full text-center bg-pink-500 hover:bg-pink-600 text-white font-semibold py-4 rounded-2xl transition"
  >
    📸 Follow us on Instagram — @loomic_tech
  </a>

  <a
    href="https://facebook.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-2xl transition"
  >
    👍 Follow us on Facebook — Loomic Tech innovation
  </a>

</div>
        </div>

      </div>
   
      {/* Right */}
      <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">

        <iframe
          src="https://www.google.com/maps?q=Krishnagiri&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          loading="lazy"
          className="min-h-[500px] w-full border-0"
        ></iframe>

      </div>

    </div>

  </div>
</section>
<a
  href="https://wa.me/918807129618"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl text-3xl"
>
  💬
</a>
    </main>
  );
}
