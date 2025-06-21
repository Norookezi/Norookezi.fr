import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/panda-32.png" />
        <link rel="icon" type="image/png" sizes="64x64" href="/assets/panda-64.png" />
        <link rel="icon" type="image/png" sizes="128x128" href="/assets/panda-128.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/assets/panda-192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/assets/panda-512.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://norookezi.fr" />
        <link rel="apple-touch-icon" href="/assets/panda-128.png" />
        <link rel="manifest" href="/manifest.json" />
        <title>Norookezi.fr - Fullstack Developer & DevOps Portfolio</title>

        {/* SEO Meta Tags */}
        <meta name="description" content="Portfolio of Norookezi, a fullstack developer and DevOps specialist. Explore projects, studies, and experiences in web, mobile, and data engineering." />
        <meta name="keywords" content="Norookezi, fullstack developer, DevOps, portfolio, web development, software engineer, TypeScript, React, Node.js, JavaScript, Python, PHP, HTML5, CSS3, VueJS, Angular, Express.js, Fastify, Flutter, Laravel, Symfony, PostgreSQL, ArcGIS, data analyst, data engineering, mobile development, Scrum, project management, software development, internship, help desk technician, Caux Seine Agglo, SeaFrigo, La Manu, CESI, Le Havre, Rouen, Lillebonne, Normandie, dashboard, API, Git, Gitlab, Jira, technical documentation, team management, app design, application development, web app, mobile app, REST, SocketIO, Wordpress, Arduino, GoLang, DotNet, C++, software projects, studies, experiences, France" />
        <meta name="author" content="Norookezi" />
        <meta name="robots" content="all" />
        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Norookezi.fr - Fullstack Developer & DevOps Portfolio" />
        <meta property="og:description" content="Portfolio of Norookezi, a fullstack developer and DevOps specialist. Explore projects, studies, and experiences in web, mobile, and data engineering." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://norookezi.fr/" />
        <meta property="og:image" content="/assets/norookezi.webp" />

        {/* Twitter SEO Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@norookezi" />
        <meta name="twitter:creator" content="@norookezi" />
        <meta name="twitter:title" content="Norookezi.fr - Fullstack Developer & DevOps Portfolio" />
        <meta name="twitter:description" content="Portfolio of Norookezi, a fullstack developer and DevOps specialist. Explore projects, studies, and experiences in web, mobile, and data engineering." />
        <meta name="twitter:image" content="/assets/norookezi.webp" />
        <meta name="twitter:image:alt" content="Norookezi's profile picture and logo" />

        <link rel="preload" as="image" href="/assets/norookezi.webp" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
