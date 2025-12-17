import { fetchGraphQL } from "../lib/contentfulGraphql";

export const getCaseStudyBySlug = async (slug: string) => {
  const query = `
    {
      architectureCaseStudyCollection(where: { slug: "${slug}" }, limit: 1) {
        items {
          sys { id }
          title
          slug
          summary
          body { json }
          systemDiagram { url }
          dataFlowDiagram { url }
          sequenceDiagram { url }
        }
      }
    }
  `;
  const res = await fetchGraphQL(query);
  const items = res.data.architectureCaseStudyCollection.items;
  return items.length > 0 ? items[0] : null;
};

