import SectionSubtitle from "../section-subtitle";

export default function ArticleSubtitle({ children }) {
  return (
    <SectionSubtitle isAlignedLeft className="pl-0 -ml-2 mt-6 mb-6">
      {children}
    </SectionSubtitle>
  );
}
