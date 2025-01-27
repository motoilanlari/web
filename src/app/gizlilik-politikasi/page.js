import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

export default function PrivacyPolicy() {
    return (
        <div className="items-center justify-items-center font-[family-name:var(--font-geist-sans)]">
            <Header/>
            <main className="flex flex-col w-full px-10 md:px-0 md:w-6/12 items-center sm:items-start mt-10">
                <h1 className="text-2xl font-bold">Gizlilik Politikası</h1>
                <div className="py-6 light:text-gray-800">
                    <p className="mb-4">
                        ‘’Motoilanlari’’na üye olan her hesap sahibi yasal mevzuata, ilan verme kurallarına ve Hesap
                        Sözleşmesi’nde belirtilen kurallara
                        uymayı, kanun ve yönetmelikler başta olmak üzere yasal mevzuat gereği alıcıyı yanıltma,
                        dolandırma ihtimali taşıyan açıklamalara
                        ilanda yer vermemeyi kabul ve beyan etmiş sayılır.
                    </p>
                    <p className="mb-4">
                        ‘’Motoilanlari’’na üye olan her hesap sahibi tarafından girilmiş bulunan ilanlardaki iletişim
                        bilgileri sadece ilan hakkında bilgi
                        almak için iletişim kurulması amacıyla kullanılabilir. İlanda yer alabilecek 6698 sayılı Kişisel
                        Verilerin Korunması Hakkında Kanun
                        kapsamında koruma altında olan ilan verene ait veya üçüncü kişilere ait kişisel veriler veya
                        özel nitelikli kişisel veriler,
                        görseller, başkaca bir amaçla kullanılamaz, kopyalanamaz, başka platformlarda ilanı veren
                        kişiden habersiz doğrudan veya dolaylı
                        olarak yayınlanamaz, başka veri tabanlarına aktarılarak üçüncü kişilerin erişimine ve
                        kullanımına açılamaz.
                    </p>
                    <p className="mb-4">
                        ‘’Motoilanlari’’na üye olan her hesap sahibi, küfür, argo, sözlü taciz, gibi suç teşkil edecek
                        unsurlar ve faaliyetlerde bulunduğunda
                        üyelik hesabının ‘’MOTOİLANLARİ’’ Tarafından Kapatılmasını, askıya alınmasını, dondurulmasını,
                        etkisiz hale getirilmesini kabul etmiş
                        sayılır. Eklenen ilanların, kişisel verilerin onayı (K.V.K.K) ilan sahibi tarafından onaylanmış
                        olup, tarafımızca herkese açık
                        paylaşımı yapılmaktadır. ’Motoilanlari’’na üye olan her hesap sahibi tarafından eklennmek
                        istenen ilanlardaki İlan verme kuralları ve
                        hesap sözleşmesi kabul edilmiş olur. Motoilanlari, hiçbir ilandan sorumlu ve kefil değildir.
                        Kapora dolandırıcılığına karşı,
                        görmediğiniz bilmediğiniz, tanımadığınız insanlara kapora vermeyin, almayın. İlanların
                        sorumluluğu alıcı ve satıcı arasındadır.
                    </p>
                    <p className="mb-4">
                        ‘’MOTOİLANLARİ’’ herhangi bir zamanda gerekçe göstermeden, bildirimde bulunmadan, tazminat, ceza
                        vb. herhangi bir yükümlülüğü
                        bulunmaksızın “Hesap Sözleşmesi”ni tek taraflı olarak feshedebilir, “Hesap Sahibi”nin hesabını
                        kapatabilir veya geçici olarak
                        dondurabilir. Platformda belirtilen kurallara aykırılık halleri, “Hesap Sahibi”nin
                        “MOTOİLANLARİ” bilgi güvenliği sistemine risk
                        oluşturması halleri hesabının kapatılması veya hesabın geçici olarak durdurulmasını taahhüt
                        eder.
                    </p>
                    <p className="mb-4">
                        ‘’Motoilanlari’’na üye olan her hesap sahibi girişte kullandığı “kullanıcı adı” ve “şifre”nin
                        güvenliğini sağlamak kendi
                        sorumluluğunda olup, “kullanıcı adı” ve “şifre”sini kendisi kullanması, üçüncü kişilerden
                        saklaması gerekmektedir. Bu konuda ihmal
                        veya kusurlarından dolayı ve yaşanan olumsuz durumlar neticesinde diğer hesap sahiplerini
                        ve/veya “MOTOİLANLARİ”ni sorumlu tutamaz.
                        üçüncü kişiler tarafından uğradığı veya uğrayabileceği maddi, manevi her tür zararlardan “Hesap
                        Sahibi” sorumludur.
                    </p>
                    <p className="text-sm light:text-gray-500 mt-6">
                        Bu Sözleşme Motoilanlari Tarafından Hazırlanmış Olup Her Hakkı Saklıdır. Kopyalanamaz Farklı
                        Mecra ve platformlarda bizim adımıza kullanılamaz.
                    </p>
                </div>
            </main>
            <Footer/>
        </div>
    );
}
