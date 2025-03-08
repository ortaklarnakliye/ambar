import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon, TruckIcon } from "./icons";
import MobileMenu from "./components/MobileMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bodrum Ambar - Nakliye ve Taşımacılık Hizmetleri",
  description: "Bodrum'un güvenilir nakliye ve taşımacılık firması. Ev, ofis taşıma ve depolama hizmetleri.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${inter.className} bg-gray-50/30`}>
        <header className="fixed w-full backdrop-blur-xl bg-white/70 z-50 border-b border-gray-200/30">
          <nav className="container mx-auto px-4 py-5">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-2xl font-medium text-gray-900">
                Bodrum Ambar
              </Link>
              <div className="hidden md:flex space-x-8">
                <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Ana Sayfa</Link>
                <Link href="/hizmetler" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Hizmetler</Link>
                <Link href="/hakkimizda" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Hakkımızda</Link>
                <Link href="/iletisim" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">İletişim</Link>
              </div>
              <MobileMenu />
            </div>
          </nav>
        </header>
        <div className="min-h-screen pt-16">
          {children}
        </div>
        <footer className="bg-white border-t border-gray-200/30">
          <div className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-6">Bodrum Ambar</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Güvenilir ve profesyonel nakliye hizmetleri ile eşyalarınızı özenle taşıyoruz.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-6">İletişim</h3>
                <div className="space-y-3">
                  <p className="text-gray-600 text-sm flex items-center">
                    <MapPinIcon />
                    <span className="ml-2">Bodrum, Muğla</span>
                  </p>
                  <a href="tel:+905456564020" className="text-gray-600 text-sm flex items-center hover:text-gray-900 transition-colors">
                    <PhoneIcon />
                    <span className="ml-2">0545 656 40 20</span>
                  </a>
                  <a href="tel:+905457696165" className="text-gray-600 text-sm flex items-center hover:text-gray-900 transition-colors">
                    <PhoneIcon />
                    <span className="ml-2">0545 769 61 65</span>
                  </a>
                  <a href="mailto:ortaklarkargovekurye@gmail.com" className="text-gray-600 text-sm flex items-center hover:text-gray-900 transition-colors">
                    <MailIcon />
                    <span className="ml-2">ortaklarkargovekurye@gmail.com</span>
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-6">Çalışma Saatleri</h3>
                <div className="space-y-3">
                  <p className="text-gray-600 text-sm flex items-center">
                    <ClockIcon />
                    <span className="ml-2">7 Gün 24 Saat</span>
                  </p>
                  <p className="text-gray-600 text-sm flex items-center">
                    <TruckIcon />
                    <span className="ml-2">{`Türkiye${`'`}nin Her Yerine Nakliyat`}</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-200/30 mt-12 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-500 text-sm">
                  © {new Date().getFullYear()} Bodrum Ambar. Tüm hakları saklıdır.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <a href="https://sehirlerarasinakliyat.vip/" target="_blank" className="text-gray-500 hover:text-gray-900 transition text-sm">
                    Şehirler Arası Nakliyat
                  </a>
                  <a href="https://bodrumambar.tr/" target="_blank" className="text-gray-500 hover:text-gray-900 transition text-sm">
                    Bodrum Ambar
                  </a>
                  <a href="https://istanbulmobiltasima.com/" target="_blank" className="text-gray-500 hover:text-gray-900 transition text-sm">
                    İstanbul Mobil Taşıma
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
