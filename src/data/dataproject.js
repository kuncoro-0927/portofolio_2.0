import { FaCalendar } from "react-icons/fa";
import { RiUser4Fill } from "react-icons/ri";
import { FaLaptopCode } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";
import { FaServer } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { MdLocalShipping } from "react-icons/md";
const projects = [
  {
    id: 4,
    year: "2025",
    title: "React AI Chatbot",
    category: "Web Development",
    desc: `
AI Chatbot adalah platform percakapan berbasis React yang mengintegrasikan berbagai model AI, seperti Google AI, OpenAI, DeepSeek AI, Anthropic AI, dan xAI. Platform ini memungkinkan pengguna berinteraksi secara cerdas dengan berbagai model dalam satu tempat, sehingga memberikan fleksibilitas, beragam sudut pandang, dan pengalaman AI yang mulus.
`,
    slug: "react-ai-chatbot",
    type: "Capstone Project",
    mockup: "/images/react-ai/reactai1.webp",
    // tech: "React, Google AI, Open AI, Deepseek AI, Anthropic AI, xAI",
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
      "Chat dengan banyak model AI (Google AI, OpenAI, DeepSeek AI, Anthropic AI, xAI) dalam satu platform",
      "Bisa pilih dan ganti model AI sesuai kebutuhan",
      "Riwayat percakapan tersimpan",
    ],
    details: [
      { icon: FaCalendar, text: "2025" },
      { icon: FaProjectDiagram, text: "Project Pribadi" },
    ],
    tech: [{ icon: FaLaptopCode, text: "React Js" }],
  },
  {
    id: 3,
    year: "2024",
    title: "Faza Frame",
    category: "Web Development",
    desc: `Faza Frame merupakan website e-commerce yang dikembangkan untuk mendigitalisasi proses penjualan pada Faza Frame. Platform ini memungkinkan pengelolaan produk, transaksi, serta pembayaran online yang terintegrasi dengan Midtrans, sehingga proses penjualan menjadi lebih efisien dan mudah diakses oleh pelanggan.
`,
    slug: "e-commerce-faza-frame",
    type: "Capstone Project",
    mockup: "/images/faza_frame/mockup.webp",
    preview: [
      {
        images: ["/images/faza_frame/ff1.webp"],
      },
      {
        images: ["/images/faza_frame/ff2.webp"],
      },
      {
        images: ["/images/faza_frame/ff3.webp"],
      },
      {
        images: ["/images/faza_frame/ff4.webp"],
      },
    ],
    features: [
      "Pemesanan Online: Pemesanan produk langsung melalui website.",
      "Katalog Produk: Tampilan produk lengkap dengan informasi dan gambar.",
      "Pembayaran Online: Pembayaran aman terintegrasi dengan Midtrans.",
      "Status Pesanan Real-Time: Pemantauan status pesanan secara langsung.",
      "Cek Ongkir: Perhitungan ongkos kirim otomatis menggunakan RajaOngkir.",
      "Manajemen Stok & Penjualan: Pengelolaan stok dan penjualan secara real-time.",
    ],
    details: [
      { icon: FaCalendar, text: "2025" },
      { icon: RiUser4Fill, text: "Fullstack Developer" },
      { icon: FaProjectDiagram, text: "Tugas Akhir" },
    ],
    tech: [
      { icon: FaLaptopCode, text: "React Js" },
      { icon: FaServer, text: "Express Js" },
      { icon: FaDatabase, text: "MySql" },
      { icon: FaCreditCard, text: "Midtrans" },
      { icon: MdLocalShipping, text: "Raja Ongkir" },
      { icon: RiTailwindCssFill, text: "Tailwind CSS" },
    ],
  },
  {
    id: 2,
    year: "2024",
    title: "Cultivo",
    category: "Web Development",
    desc: `
Cultivo adalah platform web yang memudahkan pengguna menemukan dan memesan wisata alam serta destinasi agrikultur di Indonesia. Website ini menampilkan berbagai tempat wisata, memungkinkan pemesanan tiket online, dan menghadirkan pengalaman yang edukatif serta menyenangkan.
`,
    slug: "cultivo",
    type: "Internship & Independent Study Project",
    mockup: "/images/cultivo/homepage4.png",
    role: "Fullstack Developer",
    preview: [
      {
        images: ["/images/cultivo/cultivo1.webp"],
      },
      {
        images: ["/images/cultivo/cultivo2.webp"],
      },
      {
        images: ["/images/cultivo/cultivo3.webp"],
      },
      {
        images: ["/images/cultivo/cultivo4.webp"],
      },
    ],
    features: [
      "Pencarian Destinasi: Mudah menemukan tempat wisata alam dan agrikultur.",
      "Pemesanan Tiket: Membeli tiket langsung di website.",
      "Informasi Destinasi: Detail dan gambar tiap lokasi.",
      "Antarmuka Responsif: Mudah digunakan di semua perangkat.",
    ],
    details: [
      { icon: FaCalendar, text: "2024" },
      { icon: RiUser4Fill, text: "Fullstack Developer" },
      { icon: FaProjectDiagram, text: "Internship" },
    ],
    tech: [
      { icon: FaLaptopCode, text: "React Js" },
      { icon: FaServer, text: "Express Js" },
      { icon: FaDatabase, text: "MySql" },
      { icon: FaCreditCard, text: "Midtrans" },
      { icon: RiTailwindCssFill, text: "Tailwind CSS" },
    ],
  },
  //   {
  //     id: 3,
  //     year: "2024",
  //     title: "Portofolio Website",
  //     category: "Web Development",
  //     desc: `
  // <em style="color:#ffffff;">Portoflio</em>
  // <span style="color:#a6a6a6;"> is a </span>
  // <em style="color:#ffffff;">web-based platform</em>
  // <span style="color:#a6a6a6;"> developed for the Faculty of Vocational Studies, </span>
  // <em style="color:#ffffff;">Universitas Brawijaya</em>.
  // <span style="color:#a6a6a6;"> It helps secretaries efficiently </span>
  // <em style="color:#ffffff;">record, manage, and store meeting minutes</em>
  // <span style="color:#a6a6a6;"> in a structured and accessible way, making documentation </span>
  // <em style="color:#ffffff;">faster, more organized,</em>
  // <span style="color:#a6a6a6;"> and </span>
  // <em style="color:#ffffff;">less error-prone</em>.
  // `,
  //     slug: "portofolio-v1",
  //     type: "Project Based Learning",
  //     mockup: "/images/e_notulensi/dashboardsuperadmin.png",
  //     tech: "PHP, Laravel, Bootstrap",
  //     role: "Backend Developer",
  //     preview: [
  //       {
  //         title: "Portofolio V1",
  //         images: ["/images/portofoliov1/mockup.webp"],
  //       },
  //     ],
  //   },

  //   {
  //     id: 2,
  //     year: "2024",
  //     title: "iTern",
  //     category: "Web Development",
  //     desc: `
  // <em style="color:#ffffff;">Portoflio</em>
  // <span style="color:#a6a6a6;"> is a </span>
  // <em style="color:#ffffff;">web-based platform</em>
  // <span style="color:#a6a6a6;"> developed for the Faculty of Vocational Studies, </span>
  // <em style="color:#ffffff;">Universitas Brawijaya</em>.
  // <span style="color:#a6a6a6;"> It helps secretaries efficiently </span>
  // <em style="color:#ffffff;">record, manage, and store meeting minutes</em>
  // <span style="color:#a6a6a6;"> in a structured and accessible way, making documentation </span>
  // <em style="color:#ffffff;">faster, more organized,</em>
  // <span style="color:#a6a6a6;"> and </span>
  // <em style="color:#ffffff;">less error-prone</em>.
  // `,
  //     slug: "itern",
  //     type: "Project Based Learning",
  //     mockup: "/images/e_notulensi/dashboardsuperadmin.png",
  //     tech: "PHP, Laravel, Bootstrap",
  //     role: "Backend Developer",
  //     preview: [
  //       {
  //         title: "Dashboard",
  //         images: ["/images/itern/itern.webp"],
  //       },
  //     ],
  //   },
  {
    id: 1,
    year: "2023",
    title: "E-Notulensi",
    category: "Web Development",
    desc: `
E-Notulensi adalah platform berbasis web yang dikembangkan untuk Fakultas Vokasi, Universitas Brawijaya. Aplikasi ini membantu sekretaris dalam mencatat, mengelola, dan menyimpan notulensi rapat secara terstruktur dan mudah diakses, sehingga proses dokumentasi menjadi lebih cepat, rapi, dan minim kesalahan.
`,
    slug: "e-notulensi",
    role: "Backend Developer",
    preview: [
      {
        images: ["/images/e_notulensi/en1.webp"],
      },
      {
        images: ["/images/e_notulensi/en2.webp"],
      },
      {
        images: ["/images/e_notulensi/en3.webp"],
      },
      {
        images: ["/images/e_notulensi/en4.webp"],
      },
    ],
    features: [
      "Manajemen Pengguna: Mengelola data sekretaris dan peserta rapat (tambah, edit, hapus).",
      "Manajemen Data Master: Mengelola unit kerja dan data pendukung sistem.",
      "Dashboard & Arsip Notulensi: Melihat ringkasan data serta arsip seluruh notulensi rapat.",
      "Pembuatan Notulensi: Membuat dan mengedit notulensi rapat menggunakan template yang tersedia.",
      "Manajemen Peserta: Memilih peserta rapat dari data yang telah disediakan.",
      "Manajemen Peserta: Memilih peserta rapat dari data yang telah disediakan.",
    ],
    details: [
      { icon: FaCalendar, text: "2023" },
      { icon: RiUser4Fill, text: "Backend Developer" },
      { icon: FaProjectDiagram, text: "Project Based Learning" },
    ],
    tech: [
      { icon: FaLaptopCode, text: "Laravel" },
      { icon: FaDatabase, text: "MySql" },
    ],
  },
];

export default projects;
