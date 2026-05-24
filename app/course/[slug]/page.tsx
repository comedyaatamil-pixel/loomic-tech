const courseData: Record<string, any> = {
  python: {
    title: "Python Programming",
    description:
      "Learn Python from beginner to advanced with practical coding, automation, backend development and real-time projects.",
    tools: "Python, Django, Flask, MySQL, REST API",
    duration: "3 Months",
    mode: "Online & Offline",
    certificate: "Internship Certificate Included",
    internship: "Real-Time Project Training Included",
    fee: "₹9,999",
    image:
      "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=1400&auto=format&fit=crop",
  },

  "full-stack": {
    title: "Full Stack Development",
    description:
      "Build complete websites from frontend to backend using real-time project-based learning.",
    tools: "HTML, CSS, JavaScript, React.js, Node.js, MongoDB",
    duration: "4 Months",
    mode: "Online & Offline",
    certificate: "Internship Certificate Included",
    internship: "Live Project Internship Included",
    fee: "₹9,999",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1400&auto=format&fit=crop",
  },

  "ai-ml": {
    title: "AI & Machine Learning",
    description:
      "Learn Artificial Intelligence and Machine Learning with practical implementation and model building.",
    tools: "Python, TensorFlow, NumPy, Pandas",
    duration: "3 Months",
    mode: "Online & Offline",
    certificate: "Internship Certificate Included",
    internship: "AI Project Internship Included",
    fee: "₹9,999",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1400&auto=format&fit=crop",
  },

  "data-science": {
    title: "Data Science",
    description:
      "Learn data analysis, visualization and decision-making using real-world datasets.",
    tools: "Python, Pandas, NumPy, Power BI, Excel",
    duration: "3 Months",
    mode: "Online & Offline",
    certificate: "Internship Certificate Included",
    internship: "Project Internship Included",
    fee: "₹9,999",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=crop",
  },

  "cyber-security": {
    title: "Cyber Security",
    description:
      "Learn ethical hacking, cyber defense and network protection using practical security tools.",
    tools: "Kali Linux, Networking, Security Tools",
    duration: "3 Months",
    mode: "Online & Offline",
    certificate: "Internship Certificate Included",
    internship: "Security Training Included",
    fee: "₹9,999",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1400&auto=format&fit=crop",
  },

  "ui-ux": {
    title: "UI / UX Design",
    description:
      "Learn UI design, UX research, wireframing and prototyping using modern design tools.",
    tools: "Figma, Adobe XD, Wireframing, Prototyping",
    duration: "2 Months",
    mode: "Online & Offline",
    certificate: "Internship Certificate Included",
    internship: "Design Internship Included",
    fee: "₹9,999",
    image:
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=1400&auto=format&fit=crop",
  },

  "cloud-computing": {
    title: "Cloud Computing",
    description:
      "Learn cloud infrastructure, deployment and cloud services with hands-on practical training.",
    tools: "AWS, Azure, Google Cloud, Linux",
    duration: "3 Months",
    mode: "Online & Offline",
    certificate: "Internship Certificate Included",
    internship: "Cloud Project Training Included",
    fee: "₹9,999",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1400&auto=format&fit=crop",
  },

  "mobile-app-development": {
    title: "Mobile App Development",
    description:
      "Build Android and mobile applications using modern app development frameworks.",
    tools: "Flutter, React Native, Firebase",
    duration: "4 Months",
    mode: "Online & Offline",
    certificate: "Internship Certificate Included",
    internship: "App Development Internship Included",
    fee: "₹9,999",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1400&auto=format&fit=crop",
  },

  "software-testing": {
    title: "Software Testing",
    description:
      "Learn manual and automation testing with testing tools and live project practice.",
    tools: "Manual Testing, Selenium, Postman, JIRA",
    duration: "3 Months",
    mode: "Online & Offline",
    certificate: "Internship Certificate Included",
    internship: "Testing Internship Included",
    fee: "₹9,999",
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1400&auto=format&fit=crop",
  },

  devops: {
    title: "DevOps Training",
    description:
      "Learn DevOps workflow, CI/CD pipelines and deployment automation using real-world tools.",
    tools: "Docker, Kubernetes, Jenkins, GitHub Actions",
    duration: "3 Months",
    mode: "Online & Offline",
    certificate: "Internship Certificate Included",
    internship: "DevOps Project Training Included",
    fee: "₹9,999",
    image:
      "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=1400&auto=format&fit=crop",
  },
};

export default async function CoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = courseData[slug];

  if (!course) {
    return <div className="p-10 text-2xl">Course not found</div>;
  }

  return (
    <main className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto">

        <img
          src={course.image}
          alt={course.title}
          className="w-full h-[380px] object-cover rounded-3xl mb-10"
        />

        <h1 className="text-5xl font-bold text-blue-700 mb-6">
          {course.title}
        </h1>

        <p className="text-lg text-gray-700 leading-8 mb-10">
          {course.description}
        </p>

        <div className="bg-slate-50 rounded-3xl p-10 shadow-lg space-y-4">
          <p><strong>Tools & Technologies:</strong> {course.tools}</p>
          <p><strong>Duration:</strong> {course.duration}</p>
          <p><strong>Mode:</strong> {course.mode}</p>
          <p><strong>Certificate:</strong> {course.certificate}</p>
          <p><strong>Internship:</strong> {course.internship}</p>
          <p className="text-3xl font-bold text-green-600">
            Course Fee: {course.fee}
          </p>
        </div>

        <a
          href="YOUR_GOOGLE_FORM_LINK"
          target="_blank"
          className="inline-block mt-10 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold"
        >
          Register Now
        </a>

      </div>
    </main>
  );
}