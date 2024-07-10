import Head from "next/head";
import { FaWhatsapp, FaRobot } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white">
      <Head>
        <title>MinBot - Bot WhatsApp Pintar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-16">
        <nav className="flex justify-between items-center mb-16">
          <div className="text-3xl font-bold flex items-center">
            <FaRobot className="mr-2" />
            MinBot
          </div>
          <a
            href="https://wa.me/6289654630320"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="mr-2" />
            Hubungi Kami
          </a>
        </nav>

        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Selamat Datang di MinBot</h1>
          <p className="text-xl mb-8">Bot WhatsApp pintar untuk bisnis Anda</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white bg-opacity-20 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Cepat</h2>
            <p>Respon instan untuk pelanggan Anda, 24/7</p>
          </div>
          <div className="bg-white bg-opacity-20 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Pintar</h2>
            <p>Didukung oleh AI untuk menjawab pertanyaan kompleks</p>
          </div>
          <div className="bg-white bg-opacity-20 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Mudah</h2>
            <p>Integrasi sederhana dengan WhatsApp bisnis Anda</p>
          </div>
        </div>

        <div className="text-center">
          <a
            href="https://wa.me/6289654630320"
            className="bg-white text-blue-500 font-bold py-3 px-8 rounded-full text-xl hover:bg-opacity-90"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mulai Sekarang
          </a>
        </div>
      </main>
      {/* Tambahkan ini sebelum tag footer */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Past Project</h2>
        <div className="bg-white bg-opacity-20 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">
            Bot Pertolongan Pertama Psikologis
          </h3>
          <p className="mb-4">
            Kami telah mengembangkan bot WhatsApp khusus untuk memberikan
            pertolongan pertama psikologis. Bot ini dirancang untuk memberikan
            dukungan awal dan menghubungkan pengguna dengan sumber daya yang
            tepat.
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Respon cepat untuk situasi krisis</li>
            <li>Panduan langkah-demi-langkah untuk teknik penenangan diri</li>
            <li>Rujukan ke profesional kesehatan mental</li>
            <li>Informasi tentang layanan dukungan lokal</li>
          </ul>
          <a
            href="https://wa.me/6285179764631"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
            target="_blank"
            rel="noopener noreferrer"
          >
            Coba Bot Psikologis
          </a>
        </div>
      </section>

      <footer className="text-center py-8">
        <p>&copy; 2024 MinBot. Semua hak dilindungi.</p>
      </footer>
    </div>
  );
}
