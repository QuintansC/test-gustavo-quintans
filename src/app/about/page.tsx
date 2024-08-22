import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  description: "About page",
};

export default function About() {
  return (
    <DefaultLayout>
      teste about
    </DefaultLayout>
  );
}
