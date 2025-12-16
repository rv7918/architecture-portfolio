import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { getCaseStudies } from "./api/caseStudies.graphql";
import { useQuery } from "@tanstack/react-query";

function App() {
  const { data: cases = [], isLoading, error } = useQuery({
    queryKey: ["case-studies"],
    queryFn: getCaseStudies,
  });


  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Architecture Case Studies</h1>
      {isLoading && <p>Loading…</p>}
      {error && <p>Error loading content</p>}
      <ul className="space-y-4">
        {cases.map((c: any) => (
          <li key={c.sys.id} className="border p-4 rounded">
            <h2 className="text-xl font-semibold">{c.title}</h2>
            <p className="text-gray-600">{c.summary}</p><br />
            <div className="text-gray-600">
              {c.body?.json ? documentToReactComponents(c.body.json) : null}
            </div>

            <img src={c.systemDiagram.url} alt={c.title} className="w-full h-auto" />
            <img src={c.dataFlowDiagram.url} alt={c.title} className="w-full h-auto" />
            <img src={c.sequenceDiagram.url} alt={c.title} className="w-full h-auto" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
