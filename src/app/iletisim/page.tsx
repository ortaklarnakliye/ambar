import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon, WhatsAppIcon } from "../icons";

export default function Iletisim() {
  return (
    <main className="pt-24 min-h-screen bg-gray-50/30">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-medium text-gray-900">İletişim</h1>
            <p className="text-gray-600 mt-4">Size yardımcı olmak için buradayız</p>
          </div>

          {/* İletişim Bilgileri */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 mb-8">
            <h2 className="text-2xl font-medium text-gray-900 mb-8">İletişim Bilgileri</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-2">Adres</h3>
                  <p className="text-gray-600 flex items-center">
                    <MapPinIcon />
                    <span className="ml-2">Bodrum, Muğla</span>
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-2">Telefon</h3>
                  <div className="space-y-2">
                    <a href="tel:+905456564020" className="text-gray-600 hover:text-gray-900 transition flex items-center">
                      <PhoneIcon />
                      <span className="ml-2">0545 656 40 20</span>
                    </a>
                    <a href="tel:+905457696165" className="text-gray-600 hover:text-gray-900 transition flex items-center">
                      <PhoneIcon />
                      <span className="ml-2">0545 769 61 65</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-2">E-posta</h3>
                  <a href="mailto:ortaklarkargovekurye@gmail.com" className="text-gray-600 hover:text-gray-900 transition flex items-center">
                    <MailIcon />
                    <span className="ml-2">ortaklarkargovekurye@gmail.com</span>
                  </a>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-2">Çalışma Saatleri</h3>
                  <p className="text-gray-600 flex items-center">
                    <ClockIcon />
                    <span className="ml-2">7 Gün 24 Saat Hizmet</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Hızlı İletişim */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 mb-8">
            <h2 className="text-2xl font-medium text-gray-900 mb-6">Hızlı İletişim</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="tel:+905456564020" className="bg-gray-900 text-white py-4 rounded-xl hover:bg-gray-800 transition font-medium flex items-center justify-center">
                <PhoneIcon />
                <span className="ml-2">Hemen Arayın</span>
              </a>
              <a href="https://wa.me/905456564020" className="bg-green-600 text-white py-4 rounded-xl hover:bg-green-700 transition font-medium flex items-center justify-center">
                <WhatsAppIcon />
                <span className="ml-2">WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Harita */}
          <div className="bg-white p-2 rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100170.2434830144!2d27.349878787072756!3d37.03674211343845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14be6c3f7f85cfb7%3A0x9d4f9b3c31e97a04!2sBodrum%2C%20Mu%C4%9Fla!5e0!3m2!1str!2str!4v1709764547492!5m2!1str!2str"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
} 