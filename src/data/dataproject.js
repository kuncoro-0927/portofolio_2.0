const projects = [
  {
    id: 4,
    year: "2025",
    title: "React AI Chatbot",
    subtitle: "React-Based Multi-Model AI Chatbot",
    category: "Web Development",
    github: "https://github.com/kuncoro-0927/react-ai-chatbot",
    desc: `
AI Chatbot is a React-based conversational platform that integrates multiple AI models, including Google AI, OpenAI, DeepSeek AI, Anthropic AI, and xAI. The platform enables users to interact intelligently with different models in one place, providing flexibility, diverse perspectives, and a seamless AI experience.
`,
    slug: "react-ai-chatbot",
    type: "Capstone Project",
    mockup: "/images/react-ai/reactai1.webp",
    role: "Fullstack Developer",

    preview: [
      {
        title: "React AI Chatbot",
        images: ["/images/react-ai/reactai1.webp"],
      },
      {
        title: "React AI Chatbot",
        images: ["/images/react-ai/ra1.webp"],
      },
    ],

    features: [
      "Chat with multiple AI models (Google AI, OpenAI, DeepSeek AI, Anthropic AI, and xAI) in one platform.",
      "You can choose and switch AI models based on your needs.",
      "Conversation history is saved.",
    ],

    details: [
      { icon: "calendar", text: "2025" },
      { icon: "project", text: "Personal Project" },
    ],

    tech: [{ icon: "code", text: "React Js" }],
  },

  {
    id: 3,
    year: "2024",
    title: "Faza Frame",
    subtitle: "E-Commerce Platform for Art and Frames",
    category: "Web Development",
    github: "https://github.com/kuncoro-0927",
    desc: `Faza Frame is an e-commerce website developed to digitize the sales process of Faza Frame. The platform enables product management, transaction handling, and online payments integrated with Midtrans, making the sales process more efficient and easily accessible for customers.`,
    slug: "e-commerce-faza-frame",
    type: "Capstone Project",
    mockup: "/images/faza_frame/mockup.webp",

    preview: [
      { images: ["/images/faza_frame/ff1.webp"] },
      { images: ["/images/faza_frame/ff2.webp"] },
      { images: ["/images/faza_frame/ff3.webp"] },
      { images: ["/images/faza_frame/ff4.webp"] },
    ],

    features: [
      "Online Ordering: Place orders directly through the website.",
      "Product Catalog: Complete product listings with detailed information and images.",
      "Online Payments: Secure payments integrated with Midtrans.",
      "Real-Time Order Status: Track order status instantly.",
      "Shipping Cost Checker: Automatic shipping cost calculation using RajaOngkir.",
      "Stock & Sales Management: Real-time inventory and sales management.",
    ],

    details: [
      { icon: "calendar", text: "2025" },
      { icon: "user", text: "Fullstack Developer" },
      { icon: "project", text: "Final Assignment" },
    ],

    tech: [
      { icon: "code", text: "React Js" },
      { icon: "server", text: "Express Js" },
      { icon: "database", text: "MySql" },
      { icon: "payment", text: "Midtrans" },
      { icon: "shipping", text: "Raja Ongkir" },
      { icon: "tailwind", text: "Tailwind CSS" },
    ],
  },

  {
    id: 2,
    year: "2024",
    title: "Cultivo",
    subtitle: "Agrotourism Ticket Booking Platform",
    category: "Web Development",
    github: "https://github.com/kuncoro-0927",
    desc: `
Cultivo is a web platform that helps users discover and book nature tourism and agricultural destinations across Indonesia. The website showcases various attractions, enables online ticket booking, and delivers an educational and enjoyable experience.
`,
    slug: "cultivo",
    type: "Internship & Independent Study Project",
    mockup: "/images/cultivo/homepage4.png",
    role: "Fullstack Developer",

    preview: [
      { images: ["/images/cultivo/cultivo1.webp"] },
      { images: ["/images/cultivo/cultivo2.webp"] },
      { images: ["/images/cultivo/cultivo3.webp"] },
      { images: ["/images/cultivo/cultivo4.webp"] },
    ],

    features: [
      "Destination Search: Easily find nature and agricultural tourism spots.",
      "Ticket Booking: Purchase tickets directly through the website.",
      "Destination Information: Detailed descriptions and images for each location.",
      "Responsive Interface: Optimized for seamless use across all devices.",
    ],

    details: [
      { icon: "calendar", text: "2024" },
      { icon: "user", text: "Fullstack Developer" },
      { icon: "project", text: "Internship" },
    ],

    tech: [
      { icon: "code", text: "React Js" },
      { icon: "server", text: "Express Js" },
      { icon: "database", text: "MySql" },
      { icon: "payment", text: "Midtrans" },
      { icon: "tailwind", text: "Tailwind CSS" },
    ],
  },

  {
    id: 1,
    year: "2023",
    title: "E-Notulensi",
    subtitle: "Web-Based Meeting Minutes Management System",
    category: "Web Development",
    github: "https://github.com/kuncoro-0927",
    desc: `
E-Notulensi is a web-based platform developed for the Faculty of Vocational Studies at Universitas Brawijaya. The application assists secretaries in recording, managing, and storing meeting minutes in a structured and accessible manner, making the documentation process faster, more organized, and less prone to errors.
`,
    slug: "e-notulensi",
    role: "Backend Developer",

    preview: [
      { images: ["/images/e_notulensi/en1.webp"] },
      { images: ["/images/e_notulensi/en2.webp"] },
      { images: ["/images/e_notulensi/en3.webp"] },
      { images: ["/images/e_notulensi/en4.webp"] },
    ],

    features: [
      "User Management: Manage secretary and meeting participant data (create, update, delete).",
      "Master Data Management: Manage departments and supporting system data.",
      "Dashboard & Meeting Archive: View data summaries and access archived meeting minutes.",
      "Minutes Creation: Create and edit meeting minutes using predefined templates.",
      "Participant Management: Select meeting participants from existing records.",
    ],

    details: [
      { icon: "calendar", text: "2023" },
      { icon: "user", text: "Backend Developer" },
      { icon: "project", text: "Project Based Learning" },
    ],

    tech: [
      { icon: "code", text: "Laravel" },
      { icon: "database", text: "MySql" },
    ],
  },
];

export default projects;
