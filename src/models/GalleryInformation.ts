import type { Photo } from "@/models/Photo.model.ts";

export interface GalleryInformation {
  title: string;
  photos: Photo[];
}