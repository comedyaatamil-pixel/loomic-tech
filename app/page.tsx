export default function Home() {
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
    <main className="bg-white min-h-screen scroll-smooth">

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative">

          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="LOOMIC TECH"
              className="w-14 h-14 object-contain"
            />

            <div>
              <h1 className="text-2xl font-bold text-blue-700">
                LOOMIC TECH
              </h1>
              <p className="text-xs text-gray-500">
                Innovate • Inspire • Elevate
              </p>
            </div>
          </div>

          <nav className="absolute left-1/2 -translate-x-1/2 hidden md:flex gap-10 font-medium text-gray-700">
            <a href="#home">Home</a>
            <a href="#courses">Courses</a>
            <a href="#about">About Us</a>
            <a href="#contact">Contact</a>
          </nav>

          <a
            href="https://wa.me/918807129618"
            target="_blank"
            className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold"
          >
            WhatsApp Us
          </a>
        </div>
      </header>
<section
  id="home"
  className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-900 flex items-center"
>
  {/* glow background */}
  <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
  <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

    {/* LEFT CONTENT */}
    <div className="text-white">
      <p className="uppercase tracking-[4px] text-cyan-300 mb-4 font-semibold">
        Welcome to LOOMIC TECH Pvt Ltd
      </p>

      <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
        Build Your Career in
        <span className="block text-cyan-300 mt-2">
          Technology & Innovation
        </span>
      </h1>

      <p className="text-slate-200 text-xl leading-8 mb-10">
        Learn through real-time projects, internships, certification,
        expert mentors and placement-focused training.
      </p>

      <div className="flex flex-wrap gap-4">
        <a
          href="#courses"
          className="bg-cyan-400 hover:bg-cyan-500 text-black px-8 py-4 rounded-full font-bold transition"
        >
          Explore Courses
        </a>

        <a
          href="https://wa.me/918807129618"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold transition"
        >
          Join Internship
        </a>
      </div>
    </div>

    {/* RIGHT IMAGE */}
    <div className="flex justify-center">
      <img
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop"
        alt="LOOMIC TECH"
        className="w-full max-w-xl rounded-3xl shadow-2xl animate-pulse"
      />
    </div>

  </div>
</section>
      {/* COURSES */}
     <section
  id="courses"
  className="py-24 px-6 bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-900"
>
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
           <h2 className="text-4xl font-bold text-white mb-4">        
              Our Professional Courses
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div
                key={course.slug}
                className="bg-white rounded-3xl overflow-hidden shadow-xl"
              >
                <img
                  src={course.image}
                  alt={course.name}
                  className="w-full h-56 object-cover"
                />

                <div className="p-6">

                  <h3 className="text-2xl font-bold text-blue-700 mb-3">
                    {course.name}
                  </h3>

                  <p className="text-slate-300">{course.tools}</p>

                  <p>✅ Internship Certificate Included</p>
                  <p>✅ Online & Offline Classes</p>
                  <p>✅ Real-Time Projects</p>

                  <div className="flex gap-3">
                    <a
                      href={`/course/${course.slug}`}
                      className="w-full bg-blue-600 text-white py-3 rounded-xl text-center font-semibold"
                    >
                      Details
                    </a>

                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSdLr-WCuKRVRkU2wk31pXBTTaUkDjNQKyl15f8v-jJA60_T5g/viewform?usp=publish-editor"
                      target="_blank"
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
{/* TESTIMONIALS */}
<section
  id="testimonials"
  className="py-24 px-6 bg-gradient-to-b from-blue-50 to-white"
>
  <div className="max-w-7xl mx-auto">

    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
        What Our Students Say
      </h2>

      <p className="text-lg text-gray-600">
        Feedback from students trained at LOOMIC TECH
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="bg-white rounded-3xl shadow-xl p-8">
        <div className="text-4xl mb-4">⭐⭐⭐⭐⭐</div>
        <p className="text-gray-700 leading-8 mb-6">
          LOOMIC TECH gave me practical Python training and real project
          experience. The internship helped me build confidence.
        </p>
        <h4 className="font-bold text-blue-700">
          Aravind Kumar
        </h4>
        <p className="text-sm text-gray-500">
          Python Student
        </p>
      </div>

      <div className="bg-white rounded-3xl shadow-xl p-8">
        <div className="text-4xl mb-4">⭐⭐⭐⭐⭐</div>
        <p className="text-gray-700 leading-8 mb-6">
          Full Stack training was excellent. Trainers explained clearly and
          the live project work was very useful.
        </p>
        <h4 className="font-bold text-blue-700">
          Priya S
        </h4>
        <p className="text-sm text-gray-500">
          Full Stack Student
        </p>
      </div>

      <div className="bg-white rounded-3xl shadow-xl p-8">
        <div className="text-4xl mb-4">⭐⭐⭐⭐⭐</div>
        <p className="text-gray-700 leading-8 mb-6">
          Best place to learn with internship and certificate. Highly
          recommended for students looking for IT careers.
        </p>
        <h4 className="font-bold text-blue-700">
          Naveen Raj
        </h4>
        <p className="text-sm text-gray-500">
          UI/UX Student
        </p>
      </div>

    </div>
  </div>
</section>

    </main>
  );
}
