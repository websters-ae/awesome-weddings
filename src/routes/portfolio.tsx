import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, Expand, Images, LoaderCircle, X } from "lucide-react";
import { portfolioManifest, type PortfolioManifestItem } from "@/lib/generated/portfolio-manifest";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Wedding Portfolio | Awesome Events Weddings Dubai" },
      {
        name: "description",
        content:
          "Explore luxury weddings, elegant décor, destination celebrations, beach weddings, and unforgettable events planned by Awesome Events Weddings across Dubai and the UAE.",
      },
    ],
  }),
  component: PortfolioPage,
});

const originalModules = import.meta.glob("/src/assets/portfolio/*.webp", {
  eager: true,
  import: "default",
  query: "?url",
}) as Record<string, string>;

type PortfolioImage = PortfolioManifestItem & {
  src: string;
  alt: string;
};

const INITIAL_IMAGE_COUNT = 24;
const IMAGES_PER_BATCH = 20;

function createReadableAlt(filename: string, index: number) {
  const readableName = filename
    .replace(/\.webp$/i, "")
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());

  return readableName.toLowerCase().startsWith("portfolio") || !readableName.trim()
    ? `Luxury wedding portfolio image ${index + 1}`
    : `${readableName} — Awesome Events Weddings`;
}

function PortfolioCard({
  image,
  index,
  total,
  onOpen,
}: {
  image: PortfolioImage;
  index: number;
  total: number;
  onOpen: () => void;
}) {
  const cardRef = useRef<HTMLButtonElement | null>(null);
  const [shouldLoadFull, setShouldLoadFull] = useState(index < 4);
  const [isFullLoaded, setIsFullLoaded] = useState(false);

  useEffect(() => {
    if (shouldLoadFull) return;
    const target = cardRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setShouldLoadFull(true);
        observer.disconnect();
      },
      { rootMargin: "500px 0px" },
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [shouldLoadFull]);

  return (
    <button
      ref={cardRef}
      type="button"
      onClick={onOpen}
      aria-label={`Open image ${index + 1} of ${total}`}
      className="group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-sm bg-muted text-left shadow-sm outline-none transition duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      style={{
        aspectRatio: `${image.width} / ${image.height}`,
        contentVisibility: "auto",
        containIntrinsicSize: `${image.width}px ${image.height}px`,
      }}
    >
      <img
        src={image.previewSrc}
        alt=""
        aria-hidden="true"
        width={image.width}
        height={image.height}
        loading={index < 12 ? "eager" : "lazy"}
        decoding="async"
        className={`absolute inset-0 h-full w-full object-cover transition duration-500 ${
          isFullLoaded ? "opacity-0" : "scale-[1.02] opacity-100 blur-[2px]"
        }`}
      />

      {shouldLoadFull && (
        <img
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          loading={index < 4 ? "eager" : "lazy"}
          fetchPriority={index < 4 ? "high" : "auto"}
          decoding="async"
          onLoad={(event) => {
            void event.currentTarget
              .decode()
              .catch(() => undefined)
              .finally(() => setIsFullLoaded(true));
          }}
          className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out ${
            isFullLoaded ? "scale-100 opacity-100" : "scale-[1.01] opacity-0"
          } group-hover:scale-[1.035]`}
        />
      )}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100" />
      <div className="pointer-events-none absolute bottom-4 right-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-white/95 text-black opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
        <Expand className="h-4 w-4" />
      </div>
    </button>
  );
}

function PortfolioPage() {
  const images = useMemo<PortfolioImage[]>(() => {
    const originals = new Map<string, string>();
    Object.entries(originalModules).forEach(([path, src]) => {
      const filename = path.split("/").pop();
      if (filename) originals.set(filename, src);
    });

    return portfolioManifest
      .map((item, index) => {
        const src = originals.get(item.filename);
        if (!src) return null;
        return { ...item, src, alt: createReadableAlt(item.filename, index) };
      })
      .filter((image): image is PortfolioImage => image !== null);
  }, []);

  const [visibleCount, setVisibleCount] = useState(INITIAL_IMAGE_COUNT);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isLightboxImageLoaded, setIsLightboxImageLoaded] = useState(false);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  const visibleImages = images.slice(0, visibleCount);
  const hasMoreImages = visibleCount < images.length;
  const selectedImage = selectedIndex !== null ? images[selectedIndex] : null;

  const closeLightbox = useCallback(() => setSelectedIndex(null), []);
  const showPrevious = useCallback(() => {
    setSelectedIndex((current) =>
      current === null ? current : current === 0 ? images.length - 1 : current - 1,
    );
  }, [images.length]);
  const showNext = useCallback(() => {
    setSelectedIndex((current) =>
      current === null ? current : current === images.length - 1 ? 0 : current + 1,
    );
  }, [images.length]);

  useEffect(() => {
    const target = loadMoreRef.current;
    if (!target || !hasMoreImages) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setVisibleCount((current) => Math.min(current + IMAGES_PER_BATCH, images.length));
      },
      { rootMargin: "900px 0px" },
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [hasMoreImages, images.length]);

  useEffect(() => {
    if (selectedIndex === null || images.length === 0) return;
    setIsLightboxImageLoaded(false);

    const previous = selectedIndex === 0 ? images.length - 1 : selectedIndex - 1;
    const next = selectedIndex === images.length - 1 ? 0 : selectedIndex + 1;

    [images[previous], images[next]].forEach((image) => {
      if (!image) return;
      const preload = new Image();
      preload.src = image.src;
    });
  }, [selectedIndex, images]);

  useEffect(() => {
    if (selectedIndex === null) return;
    const handleKeyboard = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
      if (event.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleKeyboard);
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyboard);
      document.body.style.overflow = oldOverflow;
    };
  }, [selectedIndex, showPrevious, showNext, closeLightbox]);

  return (
    <>
      <main>
        <section className="section-y">
          <div className="container-page">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">Our Portfolio</p>
              <h1 className="mt-4 font-display text-4xl leading-tight md:text-5xl lg:text-6xl">
                Celebrations Designed to Be Remembered
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Explore a selection of luxury weddings, bespoke décor, destination celebrations, and
                unforgettable moments created across Dubai and the UAE.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-16 md:pb-24">
          <div className="container-page">
            {images.length > 0 ? (
              <>
                <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
                  {visibleImages.map((image, index) => (
                    <PortfolioCard
                      key={image.filename}
                      image={image}
                      index={index}
                      total={images.length}
                      onOpen={() => setSelectedIndex(index)}
                    />
                  ))}
                </div>
                <div ref={loadMoreRef} className="mt-6 flex min-h-10 items-center justify-center">
                  {hasMoreImages && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <LoaderCircle className="h-4 w-4 animate-spin" />
                      <span>Loading more images…</span>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <div className="mx-auto max-w-2xl rounded-sm border border-dashed border-border bg-secondary/30 px-6 py-16 text-center">
                <Images className="mx-auto h-10 w-10 text-muted-foreground" />
                <h2 className="mt-5 font-display text-2xl">Portfolio images coming soon</h2>
              </div>
            )}
          </div>
        </section>
      </main>

      {selectedImage && selectedIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-3 backdrop-blur-sm sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeLightbox();
          }}
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="absolute left-4 top-4 z-20 rounded-full bg-black/50 px-4 py-2 text-xs text-white">
            {selectedIndex + 1} / {images.length}
          </div>

          <button
            type="button"
            onClick={showPrevious}
            className="absolute left-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white md:left-7"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div className="relative flex h-full w-full items-center justify-center px-12 py-16 md:px-20">
            {!isLightboxImageLoaded && (
              <img
                src={selectedImage.previewSrc}
                alt=""
                aria-hidden="true"
                className="absolute max-h-full max-w-full object-contain opacity-80 blur-md"
              />
            )}
            <img
              key={selectedImage.src}
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={selectedImage.width}
              height={selectedImage.height}
              decoding="async"
              fetchPriority="high"
              onLoad={(event) => {
                void event.currentTarget
                  .decode()
                  .catch(() => undefined)
                  .finally(() => setIsLightboxImageLoaded(true));
              }}
              className={`max-h-full max-w-full select-none object-contain shadow-2xl transition-opacity duration-500 ${
                isLightboxImageLoaded ? "opacity-100" : "opacity-0"
              }`}
              draggable={false}
            />
          </div>

          <button
            type="button"
            onClick={showNext}
            className="absolute right-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white md:right-7"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </>
  );
}
