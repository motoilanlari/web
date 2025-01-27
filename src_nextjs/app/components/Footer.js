import Link from "next/link";

export default function Footer() {
    return (
        <footer className="flex relative w-full sm:w-6/12 flex-col flex-wrap items-center justify-center my-12">
            <ul className="flex flex-col sm:flex-row sm:space-x-4 text-center">
                <li><Link href="/kullanim-kosullari" className="hover:underline hover:underline-offset-1 transition-all">Kullanım
                    Koşulları</Link></li>
                <li><Link href="/gizlilik-politikasi" className="hover:underline hover:underline-offset-1 transition-all">Gizlilik
                    Politikası</Link></li>
                <li><Link href="/iletisim" className="hover:underline hover:underline-offset-1 transition-all">İletişim</Link>
                </li>
            </ul>
            <div className="flex items-center flex-col mt-6">
                <p>Motoilanlari © 2025 Tüm Hakları Saklıdır.</p>
                <p className={'my-1'}><small>Powered by:</small>
                    <a
                        className="text-xs sm:ml-1 hover:underline hover:underline-offset-1 transition-all"
                        href="https://mahmutyukselmert.github.io/"
                        target="_blank"
                    >
                        Mahmut Yüksel MERT
                    </a>
                </p>
            </div>
        </footer>
    );
}
