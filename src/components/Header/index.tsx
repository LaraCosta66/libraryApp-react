import { Container, Content } from "./styles";
import linkedinLogo from "../../assets/linkedin.svg";
import githubImg from "../../assets/github.svg";
import emailImg from "../../assets/email.svg";

interface HeaderProps {
    onOpenBookModal: () => void;
  }
export function Header({onOpenBookModal}:HeaderProps) {
  return (
    <Container>
      <Content>
        <p>My Library</p>
        <button type="button" onClick={onOpenBookModal}>Add a book</button>
      </Content>
      <div className="contact">
      <p>Lara Costa</p>
           <a href="https://www.linkedin.com/in/laracosta64/" target="blank">
     <img src={linkedinLogo} alt="linkedin icon" />
           </a>
  
           <a href="https://github.com/LaraCosta66" target="blank">
     <img src={githubImg} alt="github icon" />
           </a>
           <a href="mailto:larasamilacosta@gmail.com" target="blank">
     <img src={emailImg} alt="email icon" />
           </a>
          
 </div>
    </Container>
  );
}
