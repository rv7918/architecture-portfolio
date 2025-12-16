import { contentfulClient } from "../lib/contentful";

export const getCaseStudies = async () => {
  const res = await contentfulClient.getEntries({
    content_type: "architectureCaseStudy",
  });
  return res.items;
};