import { CardShelf } from "@/components/card-shelf";
import { contentsConfig } from "@/config/contents";

const contents = contentsConfig.items
  .filter((item) => item.category == "video")
  .reverse();

export default function Page() {
  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <div>
        <CardShelf contents={contents} />
      </div>
    </section>
  );
}
