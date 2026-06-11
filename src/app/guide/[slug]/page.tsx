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
    <div className="space-y-6">
      <header>
        <p className="text-amber-600 font-bold text-[15px]">
          챕터 {chapter.number} · 약 {chapter.minutes}분
        </p>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-900 mt-1">
          {chapter.title}
        </h1>
        <p className="text-stone-500 mt-1">{chapter.subtitle}</p>
      </header>
      <StepPlayer chapter={chapter} />
    </div>
  );
}
