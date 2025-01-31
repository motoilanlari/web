import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

export default function Home() {
  return (
    <div className="items-center justify-items-center content-center h-screen font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main className="flex flex-col w-full px-10 sm:px-0 sm:w-8/12 md:w-8/12 lg:w-5/12 items-center sm:items-start mt-10">
        <div className="text-md lg:text-center">
          <p>
            Türkiye’nin en büyük motosiklet alım satım platformu!
          </p>
          <p className="mt-2">
            Motoilanlari artık mobil platformlarda yayında! Motoilanlari ile EIDS uyumlu motosiklet ilanları yayınlayın,
            hayalinizdeki
            motoru kolayca bulun. Hızlı, güvenilir ve kullanıcı dostu mobil uygulama ile motor alım satımı şimdi çok
            daha
            kolay!
          </p>
          <p className="mt-2">
            Üstelik Motoilanları uygulamasında açılışa özel ilan yayınlamak ücretsiz!
          </p>
        </div>
        <div className="flex w-full space-x-4 my-10 items-start justify-center flex-row">
          <a href="https://play.google.com/store/apps/details?id=com.motoilanlari" target="_blank"
             className="flex cursor-pointer hover:touch-pinch-zoom transition duration-200">
            <img src="/google-play-logo.webp"
                   alt="Motoilanlari Google Play'den İndirin" className="w-[130px] h-[40px]" width={130} height={40}/>
          </a>
          <a href="#" target="_blank"
             className="flex cursor-pointer hover:touch-pinch-zoom transition duration-200">
            <img src="/apple-store-logo.webp"
                   alt="Motoilanlari Apple Store'dan İndirin" className="w-[130px] h-[40px]" width={130} height={40}/>
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
