const courseData: Record<string, any> = {
  python: {
    title: "Python Programming",
    description:
      "Learn Python from basics to advanced with real-time projects, backend development and automation.",
    tools: "Python, Django, Flask, MySQL",
    duration: "3 Months",
    mode: "Online & Offline",
    certificate: "Internship Certificate Included",
    internship: "Real-Time Project Training Included",
    image:
      "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=1400&auto=format&fit=crop",
  },

  "full-stack": {
    title: "Full Stack Development",
    description:
      "Learn frontend and backend development with real-time website projects.",
    tools: "HTML, CSS, JavaScript, React.js, Node.js, MongoDB",
    duration: "4 Months",
    mode: "Online & Offline",
    certificate: "Internship Certificate Included",
    internship: "Live Project Internship Included",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1400&auto=format&fit=crop",
  },

  "ai-ml": {
    title: "AI & Machine Learning",
    description:
      "Build machine learning models with practical implementation and AI tools.",
    tools: "Python, TensorFlow, Pandas, NumPy",
    duration: "3 Months",
    mode: "Online & Offline",
    certificate: "Internship Certificate Included",
    internship: "AI Internship Included",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1400&auto=format&fit=crop",
  },

  "data-science": {
    title: "Data Science",
    description:
      "Learn data analysis, visualization and decision-making with real-world datasets.",
    tools: "Python, Power BI, Pandas, Excel",
    duration: "3 Months",
    mode: "Online & Offline",
    certificate: "Certificate Included",
    internship: "Project Internship Included",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=crop",
  },

  "cyber-security": {
    title: "Cyber Security",
    description:
      "Learn ethical hacking, network security and cyber defense tools.",
    tools: "Kali Linux, Networking, Burp Suite",
    duration: "3 Months",
    mode: "Online & Offline",
    certificate: "Certificate Included",
    internship: "Security Internship Included",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1400&auto=format&fit=crop",
  },

  "ui-ux": {
    title: "UI / UX Design",
    description:
      "Learn interface design, user experience research, prototyping and wireframing.",
    tools: "Figma, Adobe XD, Prototyping",
    duration: "2 Months",
    mode: "Online & Offline",
    certificate: "Certificate Included",
    internship: "Design Internship Included",
    image:
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=1400&auto=format&fit=crop",
  },

  "cloud-computing": {
    title: "Cloud Computing",
    description:
      "Learn cloud deployment, hosting and cloud infrastructure services.",
    tools: "AWS, Azure, Google Cloud",
    duration: "3 Months",
    mode: "Online & Offline",
    certificate: "Certificate Included",
    internship: "Cloud Project Included",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1400&auto=format&fit=crop",
  },

  "mobile-app-development": {
    title: "Mobile App Development",
    description:
      "Build Android and mobile applications using modern frameworks.",
    tools: "Flutter, React Native, Firebase",
    duration: "4 Months",
    mode: "Online & Offline",
    certificate: "Certificate Included",
    internship: "App Internship Included",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1400&auto=format&fit=crop",
  },

  "software-testing": {
    title: "Software Testing",
    description:
      "Learn manual testing and automation testing using real tools.",
    tools: "Selenium, Postman, JIRA",
    duration: "3 Months",
    mode: "Online & Offline",
    certificate: "Certificate Included",
    internship: "Testing Internship Included",
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1400&auto=format&fit=crop",
  },

  devops: {
    title: "DevOps Training",
    description:
      "Learn CI/CD, deployment pipelines and DevOps workflows.",
    tools: "Docker, Kubernetes, Jenkins, GitHub Actions",
    duration: "3 Months",
    mode: "Online & Offline",
    certificate: "Certificate Included",
    internship: "DevOps Project Included",
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
    return <div className="p-10 text-white text-2xl">Course not found</div>;
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-900 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-[380px] object-cover rounded-3xl mb-10"
        />

        <h1 className="text-5xl font-bold text-white mb-6">
          {course.title}
        </h1>

        <p className="text-lg text-slate-200 leading-8 mb-10">
          {course.description}
        </p>

        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 shadow-xl text-white space-y-4">
          <p><strong>Tools & Technologies:</strong> {course.tools}</p>
          <p><strong>Duration:</strong> {course.duration}</p>
          <p><strong>Mode:</strong> {course.mode}</p>
          <p><strong>Certificate:</strong> {course.certificate}</p>
          <p><strong>Internship:</strong> {course.internship}</p>
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdLr-WCuKRVRkU2wk31pXBTTaUkDjNQKyl15f8v-jJA60_T5g/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white px-10 py-4 rounded-2xl font-semibold text-lg"
          >
            Register Now
          </a>
        </div>
      </div>
    </main>
  );
}