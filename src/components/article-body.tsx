import type { ArticleBodyBlock } from "@/lib/content/blog";

export function ArticleBody({ blocks }: { blocks?: ArticleBodyBlock[] }) {
  if (!blocks?.length) return null;

  return (
    <div className="mt-10 space-y-7 text-base leading-8 text-foreground/85 md:text-lg">
      {blocks.map((block, index) => {
        const key = `${block.type}-${index}`;

        switch (block.type) {
          case "paragraph":
            return <p key={key}>{block.text}</p>;

          case "heading":
            return block.level === 3 ? (
              <h3
                key={key}
                id={block.id}
                className="scroll-mt-28 pt-3 font-display text-2xl leading-tight text-foreground md:text-3xl"
              >
                {block.text}
              </h3>
            ) : (
              <h2
                key={key}
                id={block.id}
                className="scroll-mt-28 pt-5 font-display text-3xl leading-tight text-foreground md:text-4xl"
              >
                {block.text}
              </h2>
            );

          case "image":
            return (
              <figure key={key} className="py-3">
                <div className="overflow-hidden rounded-sm bg-muted">
                  <img
                    src={block.src}
                    alt={block.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-auto w-full object-contain"
                  />
                </div>
                {block.caption && (
                  <figcaption className="mt-3 text-center text-sm leading-relaxed text-muted-foreground">
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            );

          case "list": {
            const ListTag = block.ordered ? "ol" : "ul";
            return (
              <ListTag
                key={key}
                className={
                  block.ordered
                    ? "ml-6 list-decimal space-y-3 pl-2"
                    : "ml-6 list-disc space-y-3 pl-2 marker:text-primary"
                }
              >
                {block.items.map((item) => (
                  <li key={item} className="pl-1">
                    {item}
                  </li>
                ))}
              </ListTag>
            );
          }

          case "quote":
            return (
              <blockquote
                key={key}
                className="border-l-2 border-primary bg-secondary/40 px-6 py-5 font-display text-xl leading-relaxed md:px-8 md:text-2xl"
              >
                <p>“{block.text}”</p>
                {block.attribution && (
                  <footer className="mt-3 font-sans text-sm text-muted-foreground">
                    — {block.attribution}
                  </footer>
                )}
              </blockquote>
            );

          case "callout":
            return (
              <aside key={key} className="border border-primary/20 bg-primary/5 px-6 py-5">
                {block.title && (
                  <h3 className="font-display text-xl text-foreground">{block.title}</h3>
                )}
                <p className={block.title ? "mt-2" : ""}>{block.text}</p>
              </aside>
            );
        }
      })}
    </div>
  );
}
