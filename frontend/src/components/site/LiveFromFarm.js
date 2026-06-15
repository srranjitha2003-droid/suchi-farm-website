import { useRef } from "react";
import { Play } from "lucide-react";
import { site } from "@/data/site";

export default function LiveFromFarm() {
  const { liveFromFarm } = site;
  const refs = [useRef(null), useRef(null)];

  const handlePlay = (i) => {
    const v = refs[i].current;
    if (!v) return;
    if (v.paused) v.play();
    else v.pause();
  };

  return (
    <section
      id="live"
      data-testid="live-section"
      className="relative py-24 md:py-36 bg-[#F2EBE1]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
          <p
            data-testid="live-overline"
            className="text-[11px] tracking-[0.35em] uppercase text-[#B85C38] font-semibold mb-6"
          >
            — {liveFromFarm.overline}
          </p>
          <h2
            data-testid="live-title"
            className="font-display text-4xl md:text-5xl lg:text-6xl text-[#1A362D] leading-[1.05] tracking-tight font-medium"
          >
            {liveFromFarm.title}
          </h2>
          <p className="text-[#4A5D54] mt-6 text-base md:text-lg font-light leading-relaxed">
            {liveFromFarm.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {liveFromFarm.videos.map((src, i) => (
            <div
              key={i}
              data-testid={`live-video-card-${i}`}
              className="relative aspect-[4/5] md:aspect-[4/3] rounded-3xl overflow-hidden group bg-[#1A362D]"
            >
              <video
                ref={refs[i]}
                src={src}
                poster={liveFromFarm.posters[i]}
                data-testid={`live-video-${i}`}
                className="w-full h-full object-cover"
                muted
                loop
                playsInline
                autoPlay
                preload="auto"
                onLoadedData={(e) => {
                  e.currentTarget.play().catch(() => {});
                }}
              />
              <button
                onClick={() => handlePlay(i)}
                data-testid={`live-video-toggle-${i}`}
                aria-label="Toggle video playback"
                className="absolute inset-0 flex items-center justify-center bg-[#1A362D]/0 hover:bg-[#1A362D]/15 transition-all duration-300"
              >
                <span className="w-16 h-16 rounded-full bg-[#FAF8F5]/95 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                  <Play className="w-6 h-6 text-[#1A362D] fill-[#1A362D] ml-0.5" />
                </span>
              </button>
              <div className="absolute top-5 left-5 bg-[#FAF8F5]/95 backdrop-blur-md rounded-full px-3 py-1.5 text-[10px] tracking-[0.25em] uppercase text-[#1A362D] font-semibold flex items-center gap-1.5 pointer-events-none">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B85C38] animate-pulse" />
                Live
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
