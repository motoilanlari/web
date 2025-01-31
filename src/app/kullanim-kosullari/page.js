import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

export default function TermsOfUse() {
    return (
        <div className="items-center justify-items-center font-[family-name:var(--font-geist-sans)]">
            <Header/>
            <main className="flex flex-col w-full px-10 md:px-0 md:w-6/12 items-center sm:items-start mt-10">
                <h1 className="text-2xl font-bold">Kullanım Koşulları</h1>
                <div className="py-6 light:text-gray-800">
                    <ol className="list-decimal list-inside space-y-4">
                        <li>Motoilanlari’’na üye olan her hesap sahibi reşit olmalıdır.</li>
                        <li>
                            ’Motoilanlari’’na üye olan her hesap sahibi ilan oluşturma işlemlerinden önce yasal mevzuat
                            gereği sistem üzerinden
                            kimliklerini doğrulamalıdır. Doğrulama işlemi yapmadıkları takdirde ilgili mevzuat uyarınca
                            ilan
                            veremeyeceklerini kabul eder.
                        </li>
                        <li>
                            Eklenecek olan ilan başlık bölümünde ve ilanın açıklama bölümünde, sadece araç hakkında
                            bilgiler
                            yer almalıdır.
                        </li>
                        <li>
                            Eklenecek olan İlan başlığında ve ilanın açıklama bölümünde reklam ve küfür-argo içerikli
                            yazılar ve ibareler
                            bulunmamalı, URL, link, görsel, sayı dizini, eklenmemelidir.
                        </li>
                        <li>
                            İlana eklenmek istenen araçta kullanılan görsel veya videolar satış/kiralama için istenen
                            araca
                            ait olmak
                            zorundadır. Farklı bilgiler ile farklı görseller eklenen ilanlar devre dışı bırakılır.
                            Verilen
                            ilan bilgileri
                            görselleri yansıtmak zorunda. Yanıltıcı, dolandırıcı bilgi içermemelidir.
                        </li>
                        <li>
                            İlan açıklamasında, detaylarında, başlığında belirtilen (marka model, km bilgisi, fiyat vb.
                            tüm
                            bilgiler) doğru
                            olmak zorunda ve yanlış bilgi eklenmemesi gerekmektedir. Tüm sorumluluk ’Motoilanlari’’na
                            üye
                            olan hesap sahibi,
                            ilanı eklemek isteyen ilan sahibine aittir.
                        </li>
                        <li>
                            İlana eklenmek istenen aracın kullanılan görsel ve videolarında farklı web siteleri, video
                            uygulama logoları,
                            farklı firma isimleri içeren hologramlar ve reklamlar yer almamalıdır.
                        </li>
                        <li>
                            ’Motoilanlari’’na üye olan başka bir kullanıcının ilanı taklit edilmemeli, ilana ait
                            bilgileri
                            içermemeli, farklı
                            ilanın görselleri kullanılmamalıdır.
                        </li>
                        <li>Sadece resmi olarak ruhsat sahibi olduğunuz araçlar ilana koyulabilir. Bir başkasına ait
                            araç
                            ilana eklenemez.
                        </li>
                        <li>
                            Aynı marka model dahi olsa ayrı ilan oluşturulmalı. 1 ilan içeriği ve bilgileri 1 araç için
                            geçerlidir.
                        </li>
                        <li>Eklenen her ilanda farklı görseller kullanılmalıdır. Mükerrer, aynı görseller
                            kullanılamaz.
                        </li>
                        <li>
                            Eklenecek olan her ilanda temsili fiyat bulunamaz. Gerçek fiyat bulundurulmak/yazılmak
                            zorundadır.
                        </li>
                        <li>Alım ilanı açılamaz, aranıyor, alınır, alınacaktır gibi ilanlar devre dışı bırakılır.</li>
                        <li>
                            İlana eklenecek olan her aracın fiyatının ‘’Türk Lirası’’ olarak yazılması zorunludur.
                            Farklı
                            ülkelere ait para
                            birimleri kullanılamaz.
                        </li>
                        <li>
                            Kiralık araç kategorisine eklenecek olan ilanlarda yalnızca günlük/haftalık/aylık kiralama
                            bedeli yazılabilir.
                        </li>
                        <li>
                            Motosiklet kategorisinde verilen tüm ilan kuralları diğer kategorilerde (aksesuar, yedek
                            parça,
                            vb.) verilecek
                            olan ilanlar için de geçerlidir.
                        </li>
                        <li>
                            Motoilanlari hiçbir ilandan ve ilana eklenen bilgilerin doğruluğundan veya yanlışlığından
                            sorumlu değildir. Yasal
                            sorumluluk, ilan veren üyeye aittir.
                        </li>
                        <li>İlan veren her üye tüm bu kuralları ve üyelik şartlarını kabul etmiş olduğunu beyan etmiş
                            sayılır.
                        </li>
                    </ol>
                </div>
            </main>
            <Footer />
        </div>
    );
}
