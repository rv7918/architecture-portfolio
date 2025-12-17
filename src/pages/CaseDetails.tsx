import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "react-router-dom";
import { getCaseStudyBySlug } from "../api/caseStudy.graphql";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const CaseDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: caseStudy, isLoading, error } = useQuery({
    queryKey: ["case-study", slug],
    queryFn: () => getCaseStudyBySlug(slug!),
    enabled: !!slug,
  });

  if (isLoading) return <div className="container mx-auto px-4 py-8"><p>Loading…</p></div>;
  if (error) return <div className="container mx-auto px-4 py-8"><p>Error loading case study</p></div>;
  if (!caseStudy) return <div className="container mx-auto px-4 py-8"><p>Case study not found</p></div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/home" className="text-blue-500 hover:underline mb-4 inline-block">
        ← Back to Home
      </Link>
      <article className="space-y-6">
        <h1 className="text-4xl font-bold">{caseStudy.title}</h1>
        <p className="text-xl text-gray-600">{caseStudy.summary}</p>
        
        {caseStudy.body?.json && (
          <div className="prose max-w-none">
            {documentToReactComponents(caseStudy.body.json)}
          </div>
        )}

        {caseStudy.systemDiagram?.url && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">System Diagram</h2>
            <img 
              src={caseStudy.systemDiagram.url} 
              alt={`${caseStudy.title} - System Diagram`} 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        )}

        {caseStudy.dataFlowDiagram?.url && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Data Flow Diagram</h2>
            <img 
              src={caseStudy.dataFlowDiagram.url} 
              alt={`${caseStudy.title} - Data Flow Diagram`} 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        )}

        {caseStudy.sequenceDiagram?.url && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Sequence Diagram</h2>
            <img 
              src={caseStudy.sequenceDiagram.url} 
              alt={`${caseStudy.title} - Sequence Diagram`} 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        )}
      </article>
    </div>
  );
};

export default CaseDetails;

