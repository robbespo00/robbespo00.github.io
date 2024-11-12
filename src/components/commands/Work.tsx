import { WorkIntro, WorkList } from "../styles/Work.styled";
import { Wrapper } from "../styles/Output.styled";

const Work: React.FC = () => {
  return (
    <Wrapper data-testid="work">
      <WorkIntro>Here is my work experience!</WorkIntro>
      <br />
      {workBg.map(({ title, desc }) => (
        <WorkList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
          <br />
        </WorkList>
      ))}
    </Wrapper>
  );
};

const workBg = [
  {
    title: "Research Engineer @ Weaviate, Jul. 2024 - Present",
    desc: "",
  },
  {
    title: "Software Engineer @ Leonardo, Nov. 2023 - Jun. 2024",
    desc: " -Developed different communication protocols with a focus on security and performance (∼2ms)\n",
  },
  {
    title: "Research Fellowship @ University of Pisa, Dec. 2022 - Oct. 2023",
    desc: " -Implemented a search engine in Rust for K-NN problem saving ∼90% memory occupancy through quantization\n -Improved by ∼30% Faiss (Meta's framework) performance",
},
{
    title: "Teaching Assistant @ University of Pisa, Sep. 2022 - Jan. 2023",
    desc: " -Coached ∼100 students for the course of Algorithms and Data Structures",
},
{
    title: "Software Developer @ Computer City, Jan. 2017 - Dec. 2019",
    desc: " -Built websites for small and medium-sized companies",
  },
];

export default Work;
