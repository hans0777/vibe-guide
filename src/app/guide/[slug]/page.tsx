import { notFound } from "next/navigation";
import { chapters, getChapter } from "@/lib/content";
import { StepPlayer } from "@/components/StepPlayer";

export function generateStaticParams() {
  return chapters.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const chapter = getChapter(slug);
  return { title: chapter ? `챕터 ${chapter.number}. ${chapter.title}` : "가이드" };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const chapter = getChapter(slug);
  if (!chapter) notFound();

  return (
    <div className="max-w-3xl mx-auto px-5 py-10 space-y-6">
      <header>
        <p className="text-[#2ec77f] font-bold text-[15px]">
          챕터 {chapter.number} · 약 {chapter.minutes}분
        </p>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#343433] mt-1">
          {chapter.title}
        </h1>
        <p className="text-stone-500 mt-1">{chapter.subtitle}</p>
      </header>
      <StepPlayer chapter={chapter} />
    </div>
  );
}
