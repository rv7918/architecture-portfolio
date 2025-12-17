import { Link } from "react-router-dom";

const HomeCard = ({ caseStudy }: { caseStudy: any }) => {
  return (
    <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow bg-gray-100">
      <Link
        key={caseStudy.sys.id}
        to={`/case/${caseStudy.slug}`}
        className=""
      >
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{caseStudy.title}</h3>
        <p className="text-gray-600 mb-5 text-gray-800">{caseStudy.summary}</p>
        <img
          src={caseStudy.thumbnail?.url}
          alt={caseStudy.title}
          className="w-full h-auto "
        />
      </Link>
    </div>
  );
};

export default HomeCard;
