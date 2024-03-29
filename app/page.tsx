import { CardShelf } from "@/components/card-shelf";
import { contentsConfig } from "@/config/contents";

const contents = contentsConfig.items.reverse();

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <div>
        <CardShelf contents={contents} />
      </div>
    </section>
  );
}
