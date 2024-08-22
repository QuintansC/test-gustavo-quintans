import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Slideshow",
  description: "Slideshow page",
};

export default function Slidedshow() {
  return (
    <DefaultLayout>
      teste slideshow
    </DefaultLayout>
  );
}
