import BlogCard from "@/components/global-components/blog-card";
import Footer from "@/components/global-components/footer";
import FullwidthParagraphWithImageOnLeft from "@/components/global-components/fullwidth-paragraph-with-Image-on-left";
import ParagraphWithImageOnTheLeft from "@/components/global-components/paragraph-with-image-on-the-left";
import SectionTitle from "@/components/global-components/section-title";
import TestimonialsCarousel from "@/components/global-components/testimonial-carousel";
import AboutSection from "@/components/main-page/about-section";
import CounterSection from "@/components/main-page/counter-section";
import HeroSection from "@/components/main-page/hero-section";
import HeroSliderSection from "@/components/main-page/hero-slider-section";
import LogoCarousel from "@/components/main-page/logo-carousel";

import ProjectsSection from "@/components/main-page/projects-section";
import Testimonials from "@/components/main-page/testimonials";
import NewsList from "@/components/news-list";
import { TeamSection } from "@/components/organizacja-page/team-section";
import SupervisorsMap from "@/components/superwizja-page/supervisors-map";
import { client } from "@/lib/contentful/client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";

async function getContentfulContent() {
  const resBlueSection = await client.getEntries({
    content_type: "blueSection",
  });

  const resGraySection = await client.getEntries({
    content_type: "graySection",
  });

  const resSlider = await client.getEntries({
    content_type: "slider",
  });

  const resLogos = await client.getEntries({
    content_type: "logos",
  });

  const resTestimonials = await client.getEntries({
    content_type: "testimonials",
  });

  const resNewsPosts = await client.getEntries({
    content_type: "news",
  });

  return {
    slider: resSlider.items,
    blueSection: resBlueSection.items[0],
    graySection: resGraySection.items[0],
    logos: resLogos.items,
    testimonials: resTestimonials.items,
    newsPosts: resNewsPosts.items,
  };
}

export default async function Home() {
  const contentfulContent = await getContentfulContent();
  const slider = contentfulContent.slider;
  const blueSection = contentfulContent.blueSection;
  const graySection = contentfulContent.graySection;
  const logos = contentfulContent.logos;
  const testimonials = contentfulContent.testimonials;
  const newsPosts = contentfulContent.newsPosts;

  return (
    <div>
      <HeroSliderSection slider={slider} />

      <div className="mb-32">
        <AboutSection />
        <CounterSection />
      </div>

      <div className="bg-darkBlue py-8">
        <ParagraphWithImageOnTheLeft
          title={blueSection.fields.title ? blueSection.fields.title : ""}
          contentfulImg={
            blueSection.fields.image ? blueSection.fields.image : ""
          }
          hasBlueBackground
          buttonTitle={
            blueSection.fields.buttonTitle ? blueSection.fields.buttonTitle : ""
          }
          buttonLink={
            blueSection.fields.buttonLink ? blueSection.fields.buttonLink : ""
          }
        >
          {documentToReactComponents(blueSection.fields.body)}
          <span className="block h-4" />
        </ParagraphWithImageOnTheLeft>
      </div>

      <section className="p-6 lg:py-16 py-20">
        <SectionTitle>Okiem ekspertów i praktyków</SectionTitle>
        <TestimonialsCarousel testimonials={testimonials} />
      </section>

      <section className="p-6 lg:py-16 pt-24 bg-slate-200">
        <SectionTitle>
          {graySection.fields.sectionTitle
            ? graySection.fields.sectionTitle
            : ""}
        </SectionTitle>
        <div className="-mt-4">
          <ParagraphWithImageOnTheLeft
            title={graySection.fields.title ? graySection.fields.title : ""}
            contentfulImg={
              graySection.fields.image ? graySection.fields.image : ""
            }
            buttonTitle={
              graySection.fields.buttonTitle
                ? graySection.fields.buttonTitle
                : ""
            }
            buttonLink={
              graySection.fields.buttonLink ? graySection.fields.buttonLink : ""
            }
            hasSectionSubtitle
          >
            {documentToReactComponents(graySection.fields.body)}
          </ParagraphWithImageOnTheLeft>
        </div>
      </section>

      <section className="p-6 lg:py-16 pt-20 pb-12 overflow-x-hidden space-y-20">
        <SectionTitle>Aktualności</SectionTitle>
        <NewsList newsPosts={newsPosts} isOnHomepage />
      </section>

      <section className="p-16 pt-20 pb-12 overflow-x-hidden">
        <SectionTitle>Współpraca</SectionTitle>
        <LogoCarousel logos={logos} />
      </section>
    </div>
  );
}
