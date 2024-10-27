import './globals.css'; 
import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
      </head>
      <body>
        <header>
          <nav>
            <ul>
              <li>
                <Link href="/home">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/rota-com-erro">Erro</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <p>© 2024 Minha Aplicação. Todos os direitos reservados.</p>
        </footer>
      </body>
    </html>
  );
}
