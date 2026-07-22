/**
 * Imagery for co2.africa
 * Source: Higgsfield AI (soul_location model) + Unsplash fallbacks
 */

const HF = "https://d8j0ntlcm91z4.cloudfront.net/user_3E7JAVPwA7DZLNJSwAYUmbE0qfD";
const UNS = "https://images.unsplash.com";

export const IMAGES = {
  /** Hero: African savanna at golden hour — Higgsfield soul_location */
  hero: `${HF}/hf_20260528_230927_a0056119-1b18-4aa8-89e9-aa6469a77a7e.png`,

  /** Congo Basin rainforest aerial */
  congoForest: `${UNS}/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=75&fm=webp`,

  /** East African savanna landscape */
  savanna: `${UNS}/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1600&q=75&fm=webp`,

  /** Coastal mangroves */
  mangroves: `${UNS}/photo-1559827291-72f590e49386?auto=format&fit=crop&w=1600&q=75&fm=webp`,

  /** Sahel dryland / afforestation */
  sahel: `${UNS}/photo-1530521954074-e64f6810b32d?auto=format&fit=crop&w=1600&q=75&fm=webp`,

  /** Community land stewardship */
  community: `${UNS}/photo-1532375810709-75b1da00537c?auto=format&fit=crop&w=1600&q=75&fm=webp`,
} as const;

export type ImageKey = keyof typeof IMAGES;
