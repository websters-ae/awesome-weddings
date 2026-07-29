import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, Expand, Images, LoaderCircle, X } from "lucide-react";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      {
        title: "Wedding Portfolio | Awesome Events Weddings Dubai",
      },
      {
        name: "description",
        content:
          "Explore luxury weddings, elegant décor, destination celebrations, beach weddings, and unforgettable events planned by Awesome Events Weddings across Dubai and the UAE.",
      },
      {
        property: "og:title",
        content: "Wedding Portfolio | Awesome Events Weddings Dubai",
      },
      {
        property: "og:description",
        content:
          "Discover luxury wedding celebrations and bespoke event designs created across Dubai and the UAE.",
      },
    ],
  }),

  component: PortfolioPage,
});

const portfolioModules = import.meta.glob("/src/assets/portfolio/*.webp", {
  eager: true,
  import: "default",
  query: "?url",
}) as Record<string, string>;

type PortfolioImage = {
  src: string;
  filename: string;
  alt: string;
};

type LoadedPortfolioImage = PortfolioImage & {
  width: number;
  height: number;
};

type PortfolioCardProps = {
  image: LoadedPortfolioImage;
  index: number;
  total: number;
  onOpen: () => void;
};

const INITIAL_IMAGE_COUNT = 20;
const IMAGES_PER_BATCH = 16;

/*
  Read the image's real dimensions before rendering it.

  Because the exact width and height are available before the card appears,
  CSS can reserve the correct space and prevent layout shifting.

  Loading the image through Image() also warms the browser cache, so the
  visible <img> normally appears quickly afterwards.
*/
function loadImageMetadata(image: PortfolioImage): Promise<LoadedPortfolioImage> {
  return new Promise((resolve) => {
    const preloadImage = new Image();

    preloadImage.decoding = "async";

    preloadImage.onload = () => {
      resolve({
        ...image,
        width: preloadImage.naturalWidth || 4,
        height: preloadImage.naturalHeight || 5,
      });
    };

    preloadImage.onerror = () => {
      /*
        Use a safe fallback ratio if an image cannot be read.
        The image card remains visible rather than breaking the page.
      */
      resolve({
        ...image,
        width: 4,
        height: 5,
      });
    };

    preloadImage.src = image.src;
  });
}

function createReadableAlt(filename: string, index: number) {
  const readableName = filename
    .replace(/\.webp$/i, "")
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());

  if (readableName.toLowerCase().startsWith("portfolio") || readableName.trim().length === 0) {
    return `Luxury wedding portfolio image ${index + 1}`;
  }

  return `${readableName} — Awesome Events Weddings`;
}

function PortfolioCard({ image, index, total, onOpen }: PortfolioCardProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`Open image ${index + 1} of ${total}`}
      className="group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-sm bg-muted text-left shadow-sm outline-none transition duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      style={{
        /*
          Preserve this image's exact natural aspect ratio.
          This reserves the correct height before it is painted.
        */
        aspectRatio: `${image.width} / ${image.height}`,

        /*
          Allow the browser to skip painting distant cards.
        */
        contentVisibility: "auto",

        /*
          Off-screen fallback size used by browsers that support
          content-visibility.
        */
        containIntrinsicSize: `${image.width}px ${image.height}px`,
      }}
    >
      {/* Placeholder occupies the exact final image dimensions */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 bg-muted transition-opacity duration-400 ${
          isLoaded ? "opacity-0" : "animate-pulse opacity-100"
        }`}
      />

      <img
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        loading={index < 6 ? "eager" : "lazy"}
        fetchPriority={index < 4 ? "high" : "auto"}
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-500 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100" />

      <div className="pointer-events-none absolute bottom-4 right-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-white/95 text-black opacity-0 shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
        <Expand className="h-4 w-4" />
      </div>
    </button>
  );
}

function PortfolioPage() {
  const images = useMemo<PortfolioImage[]>(() => {
    return Object.entries(portfolioModules)
      .sort(([pathA], [pathB]) =>
        pathA.localeCompare(pathB, undefined, {
          numeric: true,
          sensitivity: "base",
        }),
      )
      .map(([path, src], index) => {
        const filename = path.split("/").pop() ?? "";

        return {
          src,
          filename,
          alt: createReadableAlt(filename, index),
        };
      });
  }, []);

  const [loadedImages, setLoadedImages] = useState<LoadedPortfolioImage[]>([]);

  const [requestedCount, setRequestedCount] = useState(INITIAL_IMAGE_COUNT);

  const [isLoadingBatch, setIsLoadingBatch] = useState(false);

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const [isLightboxImageLoaded, setIsLightboxImageLoaded] = useState(false);

  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  /*
    Tracks how many files have already had their dimensions loaded.
    This prevents duplicate metadata requests.
  */
  const processedCountRef = useRef(0);

  const hasMoreImages = loadedImages.length < images.length;

  const selectedImage = selectedIndex !== null ? loadedImages[selectedIndex] : null;

  const closeLightbox = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  const showPrevious = useCallback(() => {
    setSelectedIndex((currentIndex) => {
      if (currentIndex === null || loadedImages.length === 0) {
        return currentIndex;
      }

      return currentIndex === 0 ? loadedImages.length - 1 : currentIndex - 1;
    });
  }, [loadedImages.length]);

  const showNext = useCallback(() => {
    setSelectedIndex((currentIndex) => {
      if (currentIndex === null || loadedImages.length === 0) {
        return currentIndex;
      }

      return currentIndex === loadedImages.length - 1 ? 0 : currentIndex + 1;
    });
  }, [loadedImages.length]);

  /*
    Load dimensions for only the requested image batch.

    The batch is not added to the DOM until every image in that batch has a
    known width and height. This means the layout is stable from the moment
    the new cards appear.
  */
  useEffect(() => {
    const startIndex = processedCountRef.current;
    const endIndex = Math.min(requestedCount, images.length);

    if (startIndex >= endIndex) {
      return;
    }

    let isCancelled = false;

    async function prepareBatch() {
      setIsLoadingBatch(true);

      const batch = images.slice(startIndex, endIndex);

      const preparedBatch = await Promise.all(batch.map(loadImageMetadata));

      if (isCancelled) {
        return;
      }

      setLoadedImages((current) => [...current, ...preparedBatch]);

      processedCountRef.current = endIndex;
      setIsLoadingBatch(false);
    }

    void prepareBatch();

    return () => {
      isCancelled = true;
    };
  }, [requestedCount, images]);

  /*
    Request the next batch before the user reaches the bottom.
  */
  useEffect(() => {
    const target = loadMoreRef.current;

    if (!target || !hasMoreImages || isLoadingBatch) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return;
        }

        setRequestedCount((current) => Math.min(current + IMAGES_PER_BATCH, images.length));
      },
      {
        rootMargin: "900px 0px",
      },
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, [hasMoreImages, isLoadingBatch, images.length]);

  /*
    Preload the neighbouring lightbox images for fast navigation.
  */
  useEffect(() => {
    if (selectedIndex === null || loadedImages.length === 0) {
      return;
    }

    setIsLightboxImageLoaded(false);

    const previousIndex = selectedIndex === 0 ? loadedImages.length - 1 : selectedIndex - 1;

    const nextIndex = selectedIndex === loadedImages.length - 1 ? 0 : selectedIndex + 1;

    [loadedImages[previousIndex], loadedImages[nextIndex]].forEach((image) => {
      if (!image) {
        return;
      }

      const preloadImage = new Image();
      preloadImage.decoding = "async";
      preloadImage.src = image.src;
    });
  }, [selectedIndex, loadedImages]);

  useEffect(() => {
    if (selectedIndex === null) {
      return;
    }

    function handleKeyboard(event: KeyboardEvent) {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        showNext();
      }

      if (event.key === "Escape") {
        event.preventDefault();
        closeLightbox();
      }
    }

    window.addEventListener("keydown", handleKeyboard);

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyboard);

      document.body.style.overflow = previousOverflow;
    };
  }, [selectedIndex, showPrevious, showNext, closeLightbox]);

  return (
    <>
      <main>
        {/* Portfolio heading */}
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

              {/* {images.length > 0 && (
                <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Images className="h-4 w-4" />

                  <span>
                    {images.length} portfolio {images.length === 1 ? "image" : "images"}
                  </span>
                </div>
              )} */}
            </div>
          </div>
        </section>

        {/* Portfolio collage */}
        <section className="pb-16 md:pb-24">
          <div className="container-page">
            {images.length > 0 ? (
              <>
                {loadedImages.length > 0 ? (
                  <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
                    {loadedImages.map((image, index) => (
                      <PortfolioCard
                        key={image.filename || image.src}
                        image={image}
                        index={index}
                        total={images.length}
                        onOpen={() => setSelectedIndex(index)}
                      />
                    ))}
                  </div>
                ) : (
                  /*
                    Stable first-load placeholder while the initial batch's
                    dimensions are being prepared.
                  */
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {Array.from({
                      length: 12,
                    }).map((_, index) => (
                      <div key={index} className="aspect-[4/5] animate-pulse rounded-sm bg-muted" />
                    ))}
                  </div>
                )}

                {/* <div
                  ref={loadMoreRef}
                  className="mt-6 flex min-h-12 items-center justify-center"
                  aria-live="polite"
                >
                  {hasMoreImages ? (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      {isLoadingBatch && <LoaderCircle className="h-4 w-4 animate-spin" />}

                      <span>
                        {isLoadingBatch ? "Preparing more images…" : "Scroll to load more"} Showing{" "}
                        {loadedImages.length} of {images.length}
                      </span>
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground">
                      All {images.length} images loaded
                    </p>
                  )}
                </div> */}
              </>
            ) : (
              <div className="mx-auto max-w-2xl rounded-sm border border-dashed border-border bg-secondary/30 px-6 py-16 text-center">
                <Images className="mx-auto h-10 w-10 text-muted-foreground" />

                <h2 className="mt-5 font-display text-2xl">Portfolio images coming soon</h2>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Add your WebP images to{" "}
                  <code className="rounded bg-muted px-1.5 py-1 text-xs">src/assets/portfolio</code>{" "}
                  and they will automatically appear here.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Full-screen lightbox */}
      {selectedImage && selectedIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Portfolio image ${selectedIndex + 1} of ${loadedImages.length}`}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-3 backdrop-blur-sm sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeLightbox();
            }
          }}
        >
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Close image"
            className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white transition hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white md:right-6 md:top-6"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="absolute left-4 top-4 z-20 rounded-full border border-white/15 bg-black/50 px-4 py-2 text-xs tracking-wide text-white/90 backdrop-blur-md md:left-6 md:top-6">
            {selectedIndex + 1} / {loadedImages.length}
          </div>

          {loadedImages.length > 1 && (
            <button
              type="button"
              onClick={showPrevious}
              aria-label="View previous image"
              className="absolute left-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white transition hover:scale-105 hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white md:left-7 md:h-14 md:w-14"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          )}

          <div className="relative flex h-full w-full items-center justify-center px-12 py-16 md:px-20">
            {!isLightboxImageLoaded && (
              <div
                className="absolute left-1/2 top-1/2 w-[70vw] max-w-4xl -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-sm bg-white/10"
                style={{
                  aspectRatio: `${selectedImage.width} / ${selectedImage.height}`,
                }}
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
              onLoad={() => setIsLightboxImageLoaded(true)}
              className={`max-h-full max-w-full select-none object-contain shadow-2xl transition-opacity duration-300 ${
                isLightboxImageLoaded ? "opacity-100" : "opacity-0"
              }`}
              draggable={false}
            />
          </div>

          {loadedImages.length > 1 && (
            <button
              type="button"
              onClick={showNext}
              aria-label="View next image"
              className="absolute right-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white transition hover:scale-105 hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white md:right-7 md:h-14 md:w-14"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          )}

          <div className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 rounded-full border border-white/15 bg-black/50 px-4 py-2 text-xs text-white/70 backdrop-blur-md sm:block">
            Use ← and → to browse · Press Esc to close
          </div>
        </div>
      )}
    </>
  );
}
