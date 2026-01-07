import fs from "fs";
import path from "path";

/**
 * Get all image filenames from /public/gallery
 */
export function getGalleryImages(): string[] {
  const galleryDir = path.join(process.cwd(), "public/gallery");
  if (!fs.existsSync(galleryDir)) return [];

  return fs
    .readdirSync(galleryDir)
    .filter((file) => /\.(jpg|jpeg|png|webp|gif)$/i.test(file));
}

/**
 * Generate SEO-friendly alt text from filename
 */
export function getAltText(filename: string, idx: number): string {
  const name = filename
    .replace(/\.[^.]+$/, "")
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return `Poovar boating, Poovar island boating, Kayaloram Resort photo: ${
    name || `Gallery image ${idx + 1}`
  }`;
}
