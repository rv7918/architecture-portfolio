import { fetchGraphQL } from "../lib/contentfulGraphql";

export const getHomepageData = async () => {
  const query = `
    {
      siteIntroCollection(limit: 1) {
        items {
          headline
          subheadline
        }
      }
      architectureCaseStudyCollection {
        items {
          sys { id }
          title
          slug
          summary
        }
      }
    }
  `;
  const res = await fetchGraphQL(query);
  return res.data;
};
