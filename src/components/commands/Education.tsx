import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Here is my education background!</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "M.Sc in Computer Science",
    desc: "University of Pisa, 2021 - 2023 \nGrade: 110 with honors (GPA: 29.64/30)",
  },
  {
    title: "Apple Foundation Program",
    desc: "Apple Developer Academy, 2020 - 2021",
  },
  {
    title: "B.Sc in Computer Science",
    desc: "University of Salerno, 2018 - 2021\nGrade: 110 with honors (GPA: 29.62/30)",
  },
];

export default Education;
