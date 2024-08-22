import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Slideshow",
  description: "Slideshow page",
};

export default function Home() {
  return (
    <DefaultLayout>
      <article>
        <h2>Gustavo Quintans</h2>
        <p> Im a passionate software developer</p>
      </article>
    </DefaultLayout>
  );
}
