import Image from "next/image";
import Girl from "./public/image.jpg";
export default function Home() {
  return (
    <div>

      <div className="homeContainer">
        <div className="childContainer">
          <h1>
            <b> HELLO!</b>
            <br />
            My Name Is <span className="color">Kinzaa.</span>
          </h1>
          <p className="small">
            I am Learning <b>NextJs</b> At <b>GIAIC </b>
            and I want to become an Excellent Web Developer.
          </p>
        </div>
        <div className="picture">
          <Image src={Girl} alt=" A picture" />
        </div>
      </div>
    </div>
  );
}