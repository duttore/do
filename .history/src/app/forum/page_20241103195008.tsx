// File: src/app/forum.tsx
import Head from 'next/head';
import Link from 'next/link';

export default function ForumPage() {
    return (
        <>
            <Head>
                <title>Forum sulle Macchine da Cucire | Discussioni e Consigli</title>
                <meta name="description" content="Entra nel nostro forum dedicato alle macchine da cucire. Scopri recensioni, consigli, e condividi le tue esperienze. Unisciti alla comunità di appassionati!" />
                <meta name="keywords" content="forum macchine da cucire, consigli cucito, recensioni macchine da cucire, discussioni cucito" />
            </Head>
            <main className="container mx-auto p-4">
                <h1 className="text-4xl font-bold my-4">Forum sulle Macchine da Cucire</h1>
                <section className="my-8">
                    <p>
                        Benvenuti al nostro forum dedicato a tutti gli appassionati di cucito e macchine da cucire. Qui troverai discussioni su:
                    </p>
                    <ul className="list-disc ml-6 my-4">
                        <li>Recensioni e opinioni sui vari modelli di macchine da cucire</li>
                        <li>Consigli su come utilizzare al meglio la tua macchina da cucire</li>
                        <li>Domande e risposte sulle problematiche comuni</li>
                    </ul>
                    <p>
                        Se hai domande o vuoi condividere la tua esperienza, non esitare a partecipare alle discussioni!
                    </p>
                </section>
                <section className="my-8">
                    <Link href="/">
                        <a className="text-blue-500 hover:underline">Torna alla home</a>
                    </Link>
                </section>
            </main>
        </>
    );
}
