const projects = [
  {
    id: 2,
    year: "2024",
    title: "Faza Frame",
    category: "Web Development",
    desc: `
<em style="color:#ffffff;">Faza Frame</em>
<span style="color:#a6a6a6;"> is an </span>
<em style="color:#ffffff;">e-commerce website</em>
<span style="color:#a6a6a6;"> from Pacitan, offering high-quality </span>
<em style="color:#ffffff;">picture frames</em>
<span style="color:#a6a6a6;"> and </span>
<em style="color:#ffffff;">paintings</em>.
<br /><br />
<span style="color:#a6a6a6;">Customers can </span>
<em style="color:#ffffff;">browse products</em>,
<em style="color:#ffffff;">purchase online</em>,
<span style="color:#a6a6a6;"> and </span>
<em style="color:#ffffff;">complete payments securely</em>
<span style="color:#a6a6a6;"> via </span>
<em style="color:#ffffff;">Midtrans</em>.
<span style="color:#a6a6a6;"> Automated shipping ensures transparent and efficient transactions.</span>
`,
    slug: "e-commerce-faza-frame",
    type: "Capstone Project",
    mockup: "/images/faza_frame/mockup.png",
    tech: "React, Express, MySql, Midtrans, RajaOngkir",
    role: "Fullstack Developer",
    preview: [
      {
        title: "Login Modal",
        images: ["/images/faza_frame/loginmobile.png"],
      },
      {
        title: "Home Page",
        images: ["/images/faza_frame/mockup.png"],
      },
    ],
  },
  {
    id: 3,
    year: "2024",
    title: "Cultivo",
    category: "Web Development",
    desc: "Cultivo is a tourism ticketing website focused on agrotourism destinations across various regions in Indonesia. The platform is designed to make it easier for travelers to discover, book, and purchase tickets online with a seamless and efficient experience. In addition, Cultivo empowers local tourism operators to expand their market reach, enhance their promotion efforts, and provide broader access for travelers to explore the unique potential of Indonesia’s agrotourism sector.",
    slug: "cultivo",
    type: "Internship & Independent Study Project",
    mockup: "/images/cultivo/homepage4.png",
    tech: "React, Express, MySql, Midtrans",
    role: "Fullstack Developer",
    preview: [
      {
        title: "Home Page",
        images: ["/images/cultivo/home.png"],
      },

      {
        title: "Checkout Page",
        images: [
          "/images/cultivo/datepage.png",
          "/images/cultivo/checkoutpage.png",
        ],
      },

      {
        title: "Payment Page",
        images: [
          "/images/cultivo/paymentpage1.png",
          "/images/cultivo/paymentpage2.png",
        ],
      },
    ],
  },
  {
    id: 6,
    year: "2023",
    title: "E-Notulensi",
    category: "Web Development",
    desc: "E-Notulensi is a web-based platform developed for the Faculty of Vocational Studies, Universitas Brawijaya. It provides an efficient solution for secretaries to record, manage, and store meeting minutes in a structured and easily accessible way. With e-Notulensi, documenting discussions, decisions, and follow-ups during meetings becomes faster, more organized, and less error-prone.",
    slug: "e-notulensi",
    type: "Project Based Learning",
    mockup: "/images/e_notulensi/dashboardsuperadmin.png",
    tech: "PHP, Laravel, Bootstrap",
    role: "Backend Developer",
    preview: [
      {
        title: "Login Page",
        images: ["/images/e_notulensi/login.png"],
      },
      {
        title: "Dashboard Superadmin",
        images: ["/images/e_notulensi/dashboardspradm.png"],
      },
      {
        title: "Data Notulensi",
        images: ["/images/e_notulensi/datanotulensi.png"],
      },
      // {
      //   title: "Data Sekretaris",
      //   images: ["/images/e_notulensi/datasekre.png"],
      // },
      // {
      //   title: "Data Peserta",
      //   images: ["/images/e_notulensi/datapeserta.png"],
      // },
      // {
      //   title: "Dashboard Sekretaris",
      //   images: ["/images/e_notulensi/dashboardsekre.png"],
      // },
      // {
      //   title: "Buat Notula",
      //   images: ["/images/e_notulensi/sekrebuatnotula.png"],
      // },
      // {
      //   title: "Upload Berkas Notula",
      //   images: ["/images/e_notulensi/uploadberkasnotula.png"],
      // },
      // {
      //   title: "Profil Sekretaris",
      //   images: ["/images/e_notulensi/profilsekre.png"],
      // },
    ],
  },
];

export default projects;
