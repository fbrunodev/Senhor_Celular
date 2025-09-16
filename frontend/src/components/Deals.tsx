import React, { useState, useEffect } from "react";

interface Time {
  hh: string;
  mm: string;
  ss: string;
}

export default function Countdown() {
  const [time, setTime] = useState<Time>({ hh: "00", mm: "00", ss: "00" });

  useEffect(() => {
    const interval = window.setInterval(() => {
      const now = new Date();
      const end = new Date();
      end.setHours(23, 59, 59, 999);
      let diff = Math.max(0, end.getTime() - now.getTime());

      const hh = String(Math.floor(diff / 3600000)).padStart(2, "0");
      diff %= 3600000;
      const mm = String(Math.floor(diff / 60000)).padStart(2, "0");
      diff %= 60000;
      const ss = String(Math.floor(diff / 1000)).padStart(2, "0");

      setTime({ hh, mm, ss });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="ofertas" className="py-8">
      <div className="mx-auto max-w-7xl px-4 rounded-3xl overflow-hidden border border-gray-200">
        <div className="relative">
          <div className="absolute inset-0 opacity-10"></div>
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 p-6">
            
            {/* Texto */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold">Ofertas Exclusivas</h3>
              <p className="text-gray-600">
                Aproveite antes que acabe! Contagem regressiva para virar o dia.
              </p>
            </div>

            {/* Countdown */}
            <div className="flex items-center gap-2 text-center">
              <div className="flex flex-col items-center">
                <div className="px-3 py-2 rounded-xl font-semibold border min-w-[64px] text-center text-lg bg-animated-blue">
                  {time.hh}
                </div>
                <span className="text-xs text-gray-600 mt-1">Horas</span>
              </div>
              <div className="text-2xl pb-4">:</div>
              <div className="flex flex-col items-center">
                <div className="px-3 py-2 rounded-xl font-semibold border min-w-[64px] text-center text-lg bg-animated-blue">
                  {time.mm}
                </div>
                <span className="text-xs text-gray-600 mt-1">Min</span>
              </div>
              <div className="text-2xl pb-4">:</div>
              <div className="flex flex-col items-center">
                <div className="px-3 py-2 rounded-xl font-semibold border min-w-[64px] text-center text-lg bg-animated-blue">
                  {time.ss}
                </div>
                <span className="text-xs text-gray-600 mt-1">Seg</span>
              </div>
            </div>

            {/* Link */}
            <a
              href="#grid"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl font-medium border bg-animated-blue"
            >
              Ver ofertas →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
