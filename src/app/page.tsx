import Image from "next/image";
import Link from "next/link";
import { TruckIcon, HomeIcon, OfficeIcon, StarIcon, ShieldIcon, LightningIcon, CoinIcon, PhoneIcon, MailIcon, ClockIcon, ArrowRightIcon } from "./icons";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-b from-gray-50/50 to-white overflow-hidden">
        {/* Arkaplan Deseni */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-white" />
        </div>

        {/* Dekoratif Görsel Elemanlar */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-64 top-20 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-gray-100 to-gray-50 blur-3xl opacity-50" />
          <div className="absolute -left-64 bottom-20 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-gray-100 to-gray-50 blur-3xl opacity-50" />
        </div>

        {/* Ana İçerik */}
        <div className="relative h-full flex flex-col justify-center z-20 container mx-auto px-4 pt-20">
          <div className="text-center space-y-8 px-4 max-w-5xl mx-auto">
            <div className="space-y-4">
              <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-gray-900/5 text-gray-900 rounded-full">
                Profesyonel Nakliyat Hizmetleri
              </span>
              <h1 className="text-5xl md:text-7xl font-medium text-gray-900 leading-tight tracking-tight">
                Eşyalarınız Bizimle
                <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
                  Güvende
                </span>
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Modern ve profesyonel nakliye çözümleriyle eşyalarınızı özenle taşıyor, güvenle teslim ediyoruz.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link 
                href="/iletisim" 
                className="group px-8 py-4 bg-gray-900 text-white rounded-2xl hover:bg-gray-800 transition-all duration-300 font-medium text-sm inline-flex items-center justify-center shadow-lg shadow-gray-900/10 hover:shadow-gray-900/20"
              >
                <span>Hemen Teklif Alın</span>
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                  <ArrowRightIcon />
                </span>
              </Link>
              <Link 
                href="/hizmetler" 
                className="px-8 py-4 bg-white text-gray-900 rounded-2xl hover:bg-gray-50 transition-all duration-300 font-medium text-sm inline-flex items-center justify-center border border-gray-200/50 shadow-lg shadow-gray-900/[0.05]"
              >
                Hizmetlerimizi İnceleyin
              </Link>
            </div>

            {/* İstatistikler */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-20">
              <div className="text-center">
                <div className="text-3xl font-semibold text-gray-900 mb-2">10+</div>
                <div className="text-sm text-gray-600">Yıllık Deneyim</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-semibold text-gray-900 mb-2">5000+</div>
                <div className="text-sm text-gray-600">Mutlu Müşteri</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-semibold text-gray-900 mb-2">81</div>
                <div className="text-sm text-gray-600">İl Genelinde</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-semibold text-gray-900 mb-2">%100</div>
                <div className="text-sm text-gray-600">Müşteri Memnuniyeti</div>
              </div>
            </div>

            {/* Güven Göstergeleri */}
            <div className="flex items-center justify-center gap-8 mt-16 pt-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <ShieldIcon />
                <span>Tam Sigorta</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <StarIcon />
                <span>4.9/5 Puan</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <ClockIcon />
                <span>7/24 Hizmet</span>
              </div>
            </div>
          </div>
        </div>

        {/* Alt Dalga Efekti */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Hizmetlerimiz Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-gray-500 text-sm font-medium">HİZMETLERİMİZ</span>
            <h2 className="text-3xl font-medium text-gray-900 mt-4">Size Nasıl Yardımcı Olabiliriz?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-3xl hover:bg-gray-100 transition group">
              <div className="relative w-full aspect-[4/3] mb-8 rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80"
                  alt="Ev Taşıma Hizmeti"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="text-gray-900 mb-6 bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition">
                <HomeIcon />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Ev Taşıma</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Evinizi profesyonel ekibimizle güvenle taşıyoruz.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-3xl hover:bg-gray-100 transition group">
              <div className="relative w-full aspect-[4/3] mb-8 rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80"
                  alt="Ofis Taşıma Hizmeti"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="text-gray-900 mb-6 bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition">
                <OfficeIcon />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Ofis Taşıma</h3>
              <p className="text-gray-600 text-sm leading-relaxed">İş yerinizi minimum kesinti ile yeni adresinize taşıyoruz.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-3xl hover:bg-gray-100 transition group">
              <div className="relative w-full aspect-[4/3] mb-8 rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1601628828688-632f38a5a7d0?auto=format&fit=crop&q=80"
                  alt="Şehirlerarası Nakliyat"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="text-gray-900 mb-6 bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition">
                <TruckIcon />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Şehirlerarası Nakliyat</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{`Türkiye${`'`}nin her yerine güvenli taşımacılık.`}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Neden Biz Section */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        {/* Arkaplan Görseli */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80"
            alt="Neden Biz Arkaplan"
            fill
            className="object-cover opacity-[0.03]"
          />
          <div className="absolute inset-0 bg-gray-50/80 backdrop-blur-sm" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="text-gray-500 text-sm font-medium">NEDEN BİZ?</span>
            <h2 className="text-3xl font-medium text-gray-900 mt-4">Farkımızı Keşfedin</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="text-gray-900 mb-6 bg-white w-20 h-20 rounded-2xl flex items-center justify-center shadow-sm mx-auto group-hover:scale-110 transition">
                <StarIcon />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Deneyimli Ekip</h3>
              <p className="text-gray-600 text-sm">Uzman kadromuzla profesyonel hizmet</p>
            </div>
            <div className="text-center group">
              <div className="text-gray-900 mb-6 bg-white w-20 h-20 rounded-2xl flex items-center justify-center shadow-sm mx-auto group-hover:scale-110 transition">
                <ShieldIcon />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Sigortalı Taşıma</h3>
              <p className="text-gray-600 text-sm">Tüm eşyalarınız sigorta garantisi altında</p>
            </div>
            <div className="text-center group">
              <div className="text-gray-900 mb-6 bg-white w-20 h-20 rounded-2xl flex items-center justify-center shadow-sm mx-auto group-hover:scale-110 transition">
                <LightningIcon />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Hızlı Teslimat</h3>
              <p className="text-gray-600 text-sm">Zamanında ve güvenli teslimat</p>
            </div>
            <div className="text-center group">
              <div className="text-gray-900 mb-6 bg-white w-20 h-20 rounded-2xl flex items-center justify-center shadow-sm mx-auto group-hover:scale-110 transition">
                <CoinIcon />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Uygun Fiyat</h3>
              <p className="text-gray-600 text-sm">Ekonomik ve şeffaf fiyatlandırma</p>
            </div>
          </div>
        </div>
      </section>

      {/* İletişim Section */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1517520287167-4bbf64a00d66?auto=format&fit=crop&q=80"
            alt="İletişim Arkaplan"
            fill
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gray-900/90 backdrop-blur-sm" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-medium text-white mb-8">Hemen İletişime Geçin</h2>
            <p className="text-gray-400 mb-12 text-lg">
              Size özel fiyat teklifimiz için hemen arayın
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+905456564020" className="px-8 py-4 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition font-medium text-sm inline-flex items-center justify-center">
                <PhoneIcon />
                <span className="ml-2">0545 656 40 20</span>
              </a>
              <a href="tel:+905457696165" className="px-8 py-4 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition font-medium text-sm inline-flex items-center justify-center">
                <PhoneIcon />
                <span className="ml-2">0545 769 61 65</span>
              </a>
            </div>
            <a href="mailto:ortaklarkargovekurye@gmail.com" className="mt-6 text-gray-400 hover:text-white transition inline-flex items-center text-sm">
              <MailIcon />
              <span className="ml-2">ortaklarkargovekurye@gmail.com</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
