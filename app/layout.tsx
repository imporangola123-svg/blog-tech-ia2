import './globals.css'

export const metadata = {
  title: 'TechIA Blog - Tecnologia e Inteligência Artificial',
  description: 'As melhores notícias e tutoriais sobre IA e tecnologia',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>

        <meta name="google-adsense-account" content="ca-pub-7895195042452960" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7895195042452960"
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-gray-50 text-gray-900">
        <header className="bg-

white shadow-sm sticky top-0 z-50">
          <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
            <a href="/" className="text-2xl font-bold text-blue-600">TechIA 🤖</a>
            <nav className="flex gap-6 text-sm font-medium">
              <a href="/" className="hover:text-blue-600">Home</a>
              <a href="/blog" className="hover:text-blue-600">Blog</a>

            </nav>
          </div>
        </header>
        <main className="max-w-4xl mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="text-center py-6 text-sm text-gray-400 mt-12">
          © 2026 TechIA Blog. Todos os direitos reservados.
        </footer>
      </body>
    </html>
  )

}
