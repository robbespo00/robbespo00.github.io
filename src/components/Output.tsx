import About from "./commands/About";
import Blog from "./commands/Blog";
import Clear from "./commands/Clear";
import Echo from "./commands/Echo";
import Education from "./commands/Education";
import Email from "./commands/Email";
import GeneralOutput from "./commands/GeneralOutput";
import Gui from "./commands/Gui";
import Help from "./commands/Help";
import Welcome from "./commands/Welcome";
import History from "./commands/History";
import Projects from "./commands/Projects";
import Socials from "./commands/Socials";
import Themes from "./commands/Themes";
import Work from "./commands/Work";
import { OutputContainer, UsageDiv } from "./styles/Output.styled";
import { termContext } from "./Terminal";
import { useContext } from "react";
import { useEffect, useState } from "react";

type Props = {
  index: number;
  cmd: string;
};

const Output: React.FC<Props> = ({ index, cmd }) => {
  const { arg } = useContext(termContext);
  const [ipAddress, setIpAddress] = useState<string>("");

  const specialCmds = ["projects", "socials", "themes", "echo", "blog"];

  useEffect(() => {
    if (cmd === "whoami") {
      // Fetch the user's IP address from a public API
      fetch("https://api.ipify.org?format=json")
        .then((response) => response.json())
        .then((data) => {
          setIpAddress(data.ip);  // Set the user's IP address
        })
        .catch((error) => {
          console.error("Error fetching IP address:", error);
          setIpAddress("Unable to fetch IP");
        });
    }
  }, [cmd]);

  // return 'Usage: <cmd>' if command arg is not valid
  if (!specialCmds.includes(cmd) && arg.length > 0)
    return <UsageDiv data-testid="usage-output">Usage: {cmd}</UsageDiv>;

  return (
    <OutputContainer data-testid={index === 0 ? "latest-output" : null}>
      {
        {
          about: <About />,
          blog: <Blog />,
          clear: <Clear />,
          echo: <Echo />,
          education: <Education />,
          email: <Email />,
          gui: <Gui />,
          help: <Help />,
          history: <History />,
          projects: <Projects />,
          pwd: <GeneralOutput>/home/roberto</GeneralOutput>,
          socials: <Socials />,
          themes: <Themes />,
          welcome: <Welcome />,
          whoami: <GeneralOutput>{"Loading public IP address... " + ipAddress}</GeneralOutput>,
          work: <Work />,
        }[cmd]
      }
    </OutputContainer>
  );
};

export default Output;