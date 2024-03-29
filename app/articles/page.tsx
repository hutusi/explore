import { CardShelf } from "@/components/card-shelf";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div>
        <CardShelf heading="article" />
      </div>
    </section>
  );
}
