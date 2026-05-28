import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "h5zlakbl",
  dataset: "production",
  apiVersion: "2026-05-28",
  useCdn: true,
});
