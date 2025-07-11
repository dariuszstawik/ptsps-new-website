import BlogCard from "@/components/global-components/blog-card";
import Button from "@/components/global-components/button";
import PageHeader from "@/components/global-components/page-header";
import NewsList from "@/components/news-list";
import { client } from "@/lib/contentful/client";

export const metadata = {
  title: "Aktualności | PTSPS",
  description:
    "Aktualności związane z działalnością Polskiego Towarzystwa SUperwizji Pracy Socjalnej",
};

async function getContentfulContent() {
  const resNews = await client.getEntries({
    content_type: "news",
  });

  return resNews.items;
}

export default async function Altualnosci() {
  const newsPosts = await getContentfulContent();
  // const newsAmount = 1;

  // const [maxAmount, setMaxAmount] = useState(4);

  // const increaseMaxAmount = () => {
  //   setMaxAmount(maxAmount + 2);
  // };

  return (
    <div>
      <PageHeader>Aktualności</PageHeader>
      <div className="my-16">
        {newsPosts && <NewsList newsPosts={newsPosts} />}
      </div>
    </div>
  );
}
