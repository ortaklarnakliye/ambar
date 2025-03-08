import Image from "next/image";

export default function Hakkimizda() {
  const heroText = `2010${`'`}DAN BERİ`;
  const turkiyeText = `Türkiye${`'`}nin önde gelen nakliyat firmalarından biri olarak, modern teknoloji ve yenilikçi çözümlerle müşterilerimize en iyi hizmeti sunmak ve sektörde lider konuma ulaşmaktır.`;

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-white" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-gray-500 text-sm font-medium">{heroText}</span>
            <h1 className="text-4xl md:text-6xl font-medium mt-4 text-gray-900">
              Güvenilir Nakliyat
              <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
                Çözüm Ortağınız
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* Ana İçerik */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hakkımızda */}
          <section className="mb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[500px] rounded-2xl overflow-hidden order-2 md:order-1">
                <Image
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80"
                  alt="Bodrum Ambar Araç Filosu"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="order-1 md:order-2">
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Bodrum Ambar, 2010 yılından bu yana Bodrum ve tüm Türkiye genelinde profesyonel nakliye ve
                  taşımacılık hizmetleri sunan güvenilir bir firmadır. Deneyimli ekibimiz ve modern araç filomuzla,
                  ev ve ofis taşıma, şehirlerarası nakliyat ve depolama hizmetleri sunmaktayız.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Müşteri memnuniyetini her zaman ön planda tutan firmamız, eşyalarınızın güvenli bir şekilde
                  taşınması için sigortalı taşımacılık hizmeti sunmaktadır.
                </p>
              </div>
            </div>
          </section>

          {/* Misyon & Vizyon */}
          <section className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h2 className="text-2xl font-medium mb-6 text-gray-900">Misyonumuz</h2>
              <p className="text-gray-600 leading-relaxed">
                Müşterilerimize en kaliteli, güvenilir ve ekonomik nakliye hizmetini sunmak,
                eşyalarının güvenli bir şekilde taşınmasını sağlamak ve sektörde örnek
                gösterilen bir firma olmaktır.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h2 className="text-2xl font-medium mb-6 text-gray-900">Vizyonumuz</h2>
              <p className="text-gray-600 leading-relaxed">{turkiyeText}</p>
            </div>
          </section>

          {/* Hizmet Standartları */}
          <section className="mb-24">
            <div className="relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&q=80"
                  alt="Hizmet Standartları Arkaplan"
                  fill
                  className="object-cover opacity-10"
                />
                <div className="absolute inset-0 bg-gray-900/90 backdrop-blur-sm" />
              </div>
              <div className="relative z-10 p-12 text-center">
                <h2 className="text-3xl font-medium mb-12 text-white">Hizmet Standartlarımız</h2>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                  {[
                    "Profesyonel Ekip",
                    "Sigortalı Taşımacılık",
                    "Modern Araç Filosu",
                    "Güvenli Paketleme",
                    "7/24 Müşteri Desteği"
                  ].map((standart, index) => (
                    <div key={index} className="text-center">
                      <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">✓</span>
                      </div>
                      <p className="text-white text-sm">{standart}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Rakamlarla Biz */}
          <section className="text-center">
            <h2 className="text-3xl font-medium mb-12 text-gray-900">Rakamlarla Biz</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="bg-gray-50 p-8 rounded-2xl">
                <div className="text-4xl font-medium text-gray-900 mb-2">14+</div>
                <p className="text-gray-600">Yıllık Deneyim</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl">
                <div className="text-4xl font-medium text-gray-900 mb-2">10K+</div>
                <p className="text-gray-600">Mutlu Müşteri</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl">
                <div className="text-4xl font-medium text-gray-900 mb-2">20+</div>
                <p className="text-gray-600">Araç Filosu</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl">
                <div className="text-4xl font-medium text-gray-900 mb-2">81</div>
                <p className="text-gray-600">İl Genelinde</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
} 