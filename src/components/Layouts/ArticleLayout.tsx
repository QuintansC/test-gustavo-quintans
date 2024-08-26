export default function Article({
  children,
  title,
  footer
}: Readonly<{
    title: string
    children: React.ReactNode;
    footer?: React.ReactNode
}>) {
  return (
    <article className="flex center flex-col items-center">
        <header>
            <h2 className="text-6xl">{title}</h2>
        </header>
        <section className="text-center w-1/2">{children}</section>
        <footer>{footer}</footer>
    </article>
  );  
}
