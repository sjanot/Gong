"use client";

import { useState } from "react";
import {
  Billboard,
  getStatusLabel,
  getStatusColor,
} from "@/data/billboards";
import ImageModal from "./ImageModal";

interface BillboardCardProps {
  billboard: Billboard;
}

export default function BillboardCard({ billboard }: BillboardCardProps) {
  const statusLabel = getStatusLabel(billboard.status);
  const statusColor = getStatusColor(billboard.status);
  const isAvailable = billboard.status === "available";
  const [modalOpen, setModalOpen] = useState(false);

  const imageAlt = `${billboard.name} — ${billboard.location}, ${billboard.direction}`;

  return (
    <>
      <div
        className={`group relative overflow-hidden rounded-xl border bg-card-bg shadow-sm transition-all hover:shadow-lg ${
          isAvailable
            ? "border-accent ring-2 ring-accent/30"
            : "border-card-border"
        }`}
      >
        {/* Billboard photo */}
        <div
          className="relative h-44 bg-gradient-to-br from-[#0b5ab5] to-[#073d7a] flex items-center justify-center overflow-hidden cursor-pointer"
          onClick={() => billboard.image && setModalOpen(true)}
        >
          {billboard.image ? (
            <img
              src={billboard.image}
              alt={imageAlt}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="flex flex-col items-center text-blue-200/40">
              <svg
                className="h-12 w-12 mb-1"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v13.5A1.5 1.5 0 003.75 21z"
                />
              </svg>
              <span className="text-xs">5.1 × 2.4 m</span>
            </div>
          )}

          {/* Zoom icon overlay */}
          {billboard.image && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/20">
              <svg
                className="h-8 w-8 text-white opacity-0 transition-opacity group-hover:opacity-80"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6"
                />
              </svg>
            </div>
          )}

          {/* Status badge */}
          <div
            className={`absolute top-3 right-3 ${statusColor} rounded-full px-3 py-1 text-xs font-bold text-white shadow`}
          >
            {statusLabel}
          </div>

          {/* Illuminated badge */}
          {billboard.illuminated && (
            <div className="absolute top-3 left-3 rounded-full bg-yellow-400 px-2 py-1 text-xs font-bold text-yellow-900 shadow">
              Osvetlený
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-bold text-foreground">{billboard.name}</h3>
          <p className="mt-1 text-sm text-muted">
            {billboard.location} — {billboard.direction}
          </p>

          {billboard.gps && (
            <p className="mt-1 text-xs text-muted">
              GPS: {billboard.gps}
            </p>
          )}

          {/* Price */}
          <div className="mt-3 flex items-end justify-between">
            <div>
              <span className="text-2xl font-bold text-accent">
                {billboard.pricePerMonth} €
              </span>
              <span className="text-sm text-muted"> / mesiac</span>
              <p className="text-xs text-muted">bez DPH</p>
            </div>

            {isAvailable ? (
              <a
                href="#objednat"
                className="rounded-lg bg-accent px-4 py-2 text-sm font-bold text-primary-dark shadow transition-all hover:bg-accent-dark hover:shadow-md"
              >
                Do košíka
              </a>
            ) : billboard.status === "reserved" ? (
              <span className="rounded-lg bg-yellow-500/20 px-4 py-2 text-sm font-medium text-yellow-400">
                Rezervovaná
              </span>
            ) : (
              <a
                href="#kontakt"
                className="rounded-lg border border-accent/50 bg-transparent px-4 py-2 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-primary-dark"
              >
                Záujem
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Fullscreen modal */}
      {modalOpen && billboard.image && (
        <ImageModal
          src={billboard.image}
          alt={imageAlt}
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  );
}
