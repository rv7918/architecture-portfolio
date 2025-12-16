export const fetchGraphQL = async (query: string) => {
    const res = await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${import.meta.env.VITE_CONTENTFUL_SPACE_ID}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_CONTENTFUL_DELIVERY_TOKEN}`,
        },
        body: JSON.stringify({ query }),
      }
    );
  
    if (!res.ok) throw new Error("GraphQL error");
    return res.json();
  };
  