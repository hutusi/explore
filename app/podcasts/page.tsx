import { CardShelf } from "@/components/card-shelf";
import { contentsConfig } from "@/config/contents";

const contents = contentsConfig.items
  .filter((item) => item.category == "podcast")
  .reverse();

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div>
        <CardShelf contents={contents} />
      </div>
    </section>
  );
}
