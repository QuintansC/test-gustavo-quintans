export default function Article({
  children,
  title,
  footer,
  className
}: Readonly<{
    title: string
    children: React.ReactNode
    footer?: React.ReactNode
    className?: string
}>) {
  return (
    <article className={"flex center flex-col " + className}>
        <header>
          <h2 className="text-6xl text-white">{title}</h2>
        </header>
        <section className="w-1/2 text-white">{children}</section>
    </article>
  );  
}
