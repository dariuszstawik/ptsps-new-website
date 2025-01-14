import SectionSubtitle from "@/components/global-components/section-subtitle";
import TeamMember from "../team-member";
import BlueTitle from "@/components/global-components/blue-title";
import ListItem from "@/components/global-components/list-item";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function TeamSection({
  boardMember,
  komisjaRewizyjna,
  komisjaEtyczna,
}) {
  return (
    <div className="px-4 py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-10 pb-20">
      <img src="/stowarzyszenie.jpg" className="w-full mb-20" />
      <div className=" mb-16 mt-10">
        <SectionSubtitle>Zarząd Stowarzyszenia</SectionSubtitle>
      </div>
      <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-3 lg:max-w-screen-lg">
        {boardMember.map((member) => (
          <TeamMember
            name={member.fields.name}
            role={member.fields.role}
            img={member.fields.image.fields.file.url}
          >
            {documentToReactComponents(member.fields.body)}
          </TeamMember>
        ))}

        {/* <TeamMember
          name="Maciej Sosnowski"
          role="Prezes zarządu"
          img="/msosnowski2.jpg"
        >
          Zasiada w zarządzie od 2021 roku, wcześniej pełnił funkcję członka
          Komisji Rewizyjnej PTSPS. Jest pracownikiem socjalnym, pedagogiem,
          mediatorem, trenerem pracy, trenerem organizacji pozarządowych,
          metodykiem i superwizorem pracy socjalnej. Jest autorem publikacji z
          obszaru superwizji pracy socjalnej i aktywizacji zawodowej osób
          wykluczonych.
        </TeamMember>
        <TeamMember
          name="Marek Lasota"
          role="Członek zarządu"
          img="/mlasota2.jpg"
        >
          Zasiada w zarządzie od 2020 roku. Jest pracownikiem socjalnym,
          psychoterapeutą psychodynamicznym i superwizorem pracy socjalnej.
        </TeamMember>
        <TeamMember
          name="Marek Jaros"
          role="Członek zarządu"
          img="/mjaros2.jpg"
        >
          Założyciel PTSPS, członek pierwszego zarządu. Członek zarządu od 2020
          roku. Jest psychologiem, psychoterapeutą i superwizorem pracy
          socjalnej. Zarządzał pierwszym projektem Towarzystwa realizowanym we
          współpracy z UNICEF (2022/2024). Jest redaktorem kwartalnika
          Superwizja Pracy Socjalnej.
        </TeamMember> */}
      </div>
      {/* </div> */}
      <div className="flex flex-col xl:flex-row justify-center items-center gap-16 mt-16">
        <div className="w-4/5 xl:w-2/5">
          <SectionSubtitle>Komisja rewizyjna</SectionSubtitle>
          <ul className="mt-8">
            {komisjaRewizyjna.map((member) => (
              <ListItem>{member.fields.name}</ListItem>
            ))}
            {/* <ListItem>Gabriela Konarzewska - przewodnicząca</ListItem>
            <ListItem>Anna Olech - członkini</ListItem>
            <ListItem>Bożena Wołoszyn - członkini</ListItem> */}
          </ul>
        </div>
        <div className="w-4/5 xl:w-2/5">
          <SectionSubtitle>Komisja etyczna</SectionSubtitle>
          <ul className="mt-8">
            {komisjaEtyczna.map((member) => (
              <ListItem>{member.fields.name}</ListItem>
            ))}
            {/* <ListItem>Karolina Busk</ListItem>
            <ListItem>Elżbieta Danielska-Konopacka</ListItem>
            <ListItem>Mariola Krasnodębska</ListItem> */}
          </ul>
        </div>
      </div>
    </div>
  );
}
