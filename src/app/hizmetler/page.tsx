import Image from "next/image";

export default function Hizmetler() {
  return (
    <main className="pt-24 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Hizmetlerimiz</h1>

        <div className="max-w-6xl mx-auto">
          {/* Ev Taşıma */}
          <section className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Ev Taşıma</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Evinizi taşırken tüm eşyalarınızı özenle paketliyor, güvenle taşıyor ve yeni evinizde
                  istediğiniz şekilde yerleştiriyoruz. Profesyonel ekibimiz ve özel paketleme malzemelerimizle
                  eşyalarınız güvende.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li>✓ Profesyonel paketleme hizmeti</li>
                  <li>✓ Mobilya sökme ve kurma</li>
                  <li>✓ Beyaz eşya taşıma</li>
                  <li>✓ Sigortalı taşımacılık</li>
                  <li>✓ Yerinde keşif hizmeti</li>
                </ul>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80"
                  alt="Ev Taşıma Hizmeti"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* Ofis Taşıma */}
          <section className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 relative h-[400px] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80"
                  alt="Ofis Taşıma Hizmeti"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold mb-6">Ofis Taşıma</h2>
                <p className="text-lg text-gray-600 mb-6">
                  İş yerinizi minimum kesinti ile taşıyoruz. Ofis mobilyalarınız, elektronik
                  cihazlarınız ve tüm evraklarınız özel olarak paketleniyor ve güvenle taşınıyor.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li>✓ Hafta sonu taşıma imkanı</li>
                  <li>✓ Elektronik cihaz taşıma uzmanlığı</li>
                  <li>✓ Ofis mobilya demontaj/montaj</li>
                  <li>✓ Arşiv ve evrak taşıma</li>
                  <li>✓ Sigortalı taşımacılık</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Şehirlerarası Nakliyat */}
          <section className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Şehirlerarası Nakliyat</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Türkiye'nin her noktasına güvenli ve hızlı nakliyat hizmeti sunuyoruz.
                  Modern araç filomuz ve deneyimli şoförlerimizle eşyalarınız güvende.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li>✓ Türkiye'nin her iline hizmet</li>
                  <li>✓ GPS takip sistemi</li>
                  <li>✓ Kapalı kasa araçlar</li>
                  <li>✓ Parsiyel taşıma imkanı</li>
                  <li>✓ Tam sigorta kapsamı</li>
                </ul>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1601628828688-632f38a5a7d0?auto=format&fit=crop&q=80"
                  alt="Şehirlerarası Nakliyat Hizmeti"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* Depolama */}
          <section className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 relative h-[400px] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80"
                  alt="Depolama Hizmetleri"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold mb-6">Depolama Hizmetleri</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Eşyalarınızı güvenli ve klimatik kontrollü depolama alanlarımızda
                  istediğiniz süre boyunca muhafaza ediyoruz.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li>✓ 7/24 güvenlik</li>
                  <li>✓ Klimatik kontrollü ortam</li>
                  <li>✓ Esnek depolama süreleri</li>
                  <li>✓ Sigortalı depolama</li>
                  <li>✓ İstenildiğinde teslimat</li>
                </ul>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gray-900 text-white p-12 rounded-2xl text-center relative overflow-hidden">
            <div className="absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1517520287167-4bbf64a00d66?auto=format&fit=crop&q=80"
                alt="İletişim Arkaplan"
                fill
                className="object-cover opacity-10"
              />
              <div className="absolute inset-0 bg-gray-900/90 backdrop-blur-sm" />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6">Hemen Teklif Alın</h2>
              <p className="text-lg mb-8">
                Size özel fiyat teklifimiz için ücretsiz keşif randevusu oluşturun.
              </p>
              <a 
                href="/iletisim"
                className="inline-block bg-white text-gray-900 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition"
              >
                Ücretsiz Keşif İsteyin
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
} 