import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

export default function Contact() {
    return (
        <div className="items-center justify-items-center content-center h-screen font-[family-name:var(--font-geist-sans)]">
            <Header />
            <main className="flex flex-col w-full md:w-6/12 items-center sm:items-start mt-10">
                <div className="flex justify-center space-x-4 content-center items-center w-[250px] h-auto mx-auto">
                    <a href="https://www.instagram.com/motoilanlari" target="_blank" title="Instagram">
                        <img src="/instagram.svg"
                             alt="instagram @motoilanlari" className="w-[90px] h-[90px] md:w-[125px] md:h-[125px]" width={125}
                             height={125}/>
                    </a>
                    <a href="https://wa.me/+905373209432" target="_blank" title="WhatsApp">
                        <img src="/whatsapp.svg" alt="Motoilanlari WhatsApp iletişim hattı +905373209432" className="w-[85px] h-[85px] md:w-[120px] md:h-[120px]" width={125}
                             height={125}/>
                    </a>
                </div>
            </main>
            <Footer/>
        </div>
    );
}
