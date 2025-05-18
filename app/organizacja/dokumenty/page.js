import Arrow from "@/components/global-components/arrow";
import Collapse from "@/components/global-components/collapse";
import ListItem from "@/components/global-components/list-item";
import PageHeader from "@/components/global-components/page-header";
import ParagraphWithImageOnTheLeft from "@/components/global-components/paragraph-with-image-on-the-left";
import SectionTitle from "@/components/global-components/section-title";
import { client } from "@/lib/contentful/client";
import { List } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

async function getContentfulContent() {
  const resContent = await client.getEntries({
    content_type: "documents",
  });
  return resContent.items;
}

export const metadata = {
  title: "Dokumenty | PTSPS",
  description:
    "Dokumenty związane z działanią Polskiego Towarzystwa SUperwizji Pracy Socjalnej",
};

export default async function DokumentyPage() {
  const documents = await getContentfulContent();

  return (
    <>
      <PageHeader> Organizacja </PageHeader>
      <div className="my-10">
        <ParagraphWithImageOnTheLeft title="Dokumenty" img="/documents.png">
          <ul className="my-4">
            {documents &&
              documents
                .sort((a, b) => a.fields.order - b.fields.order)
                .map((item, i) => {
                  return (
                    <>
                      {item.fields.order <= 50 && (
                        <li key={i}>
                          <ListItem isDocument className="flex">
                            <Link
                              href={`/organizacja/dokumenty/${item.fields.slug}`}
                            >
                              {item.fields.shortTitle
                                ? item.fields.shortTitle
                                : item.fields.title}{" "}
                              <Arrow />
                            </Link>
                          </ListItem>
                        </li>
                      )}
                    </>
                  );
                })}
            <ListItem isDocument className="pt-0 pb-0">
              <Collapse title="Sprawozdania">
                <span className="block my-2">
                  Zasadą Towarzystwa jest całkowita transparentność naszych
                  działań i finansów. Co roku tworzymy sprawozdanie merytoryczne
                  i finansowe z działalności organizacji. Na stronie publikujemy
                  wizualizacje oryginalnych sprawozdań, które składamy do
                  Krajowej Administracji Skarbowej.
                </span>
                <span className="block my-2">2020</span>
                <span className="block my-2">
                  <a
                    href="https://assets.ctfassets.net/zca56pff71z1/4vDuxhtVZmOYgJgBo5c321/83ffd22ad8f432367bd74f22a1c80e09/SF2020.pdf"
                    className="text-primaryBlue"
                  >
                    Sprawozdanie finansowe 2020 <Arrow />
                  </a>
                </span>
                <span className="block my-2">2021</span>
                <span className="block my-2">
                  <a
                    href="https://assets.ctfassets.net/zca56pff71z1/2wXWrQz45hfhMUNjV5J7LK/f728099d03b0d4843391de6eae7b5b3d/SF2021.pdf"
                    className="text-primaryBlue"
                  >
                    Sprawozdanie finansowe 2021 <Arrow />
                  </a>
                </span>
                <span className="block my-2">2022</span>
                <span className="block my-2">
                  <a
                    href="https://assets.ctfassets.net/zca56pff71z1/6YuQY9Dq5isgQgrr6PfNfN/1a6ce08fc0b072ff2d4e1543d6ffc84a/SF2022.pdf"
                    className="text-primaryBlue"
                  >
                    Sprawozdanie finansowe 2022 <Arrow />
                  </a>
                </span>
              </Collapse>
            </ListItem>
            {documents &&
              documents
                .sort((a, b) => a.fields.order - b.fields.order)
                .map((item, i) => {
                  return (
                    <>
                      {item.fields.order > 50 && (
                        <li key={i}>
                          <ListItem isDocument className="flex">
                            <Link
                              href={`/organizacja/dokumenty/${item.fields.slug}`}
                            >
                              {item.fields.shortTitle
                                ? item.fields.shortTitle
                                : item.fields.title}{" "}
                              <Arrow />
                            </Link>
                          </ListItem>
                        </li>
                      )}
                    </>
                  );
                })}
          </ul>
        </ParagraphWithImageOnTheLeft>
      </div>
    </>
  );
}
