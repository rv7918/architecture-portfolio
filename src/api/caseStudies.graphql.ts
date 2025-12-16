import { fetchGraphQL } from "../lib/contentfulGraphql";

export const getCaseStudies = async () => {
  const query = `
    {
      architectureCaseStudyCollection {
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
  return res.data.architectureCaseStudyCollection.items;
};
