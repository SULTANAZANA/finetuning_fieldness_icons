import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Path } from "../assets/path.svg";
import { ReactComponent as Ladybird } from "../assets/ladybird.svg";
import { ReactComponent as Spider } from "../assets/spider.svg";
import { ReactComponent as BackArrow } from "../assets/back-arrow.svg";
import "./css/story.css";
import floaters from "../assets/floaters.png";
import floaters2x from "../assets/floaters@2x.png";
import floaters3x from "../assets/floaters@3x.png";
import floatersMid from "../assets/floaters-mid.jpg";
import floatersMid3x from "../assets/floaters-mid@3x.jpg";
import floatersLarge from "../assets/floaters-large.jpg";
import floatersLarge3x from "../assets/floaters-large@3x.jpg";

export const Story = () => {
  const navigate = useNavigate();
  const [pageNumber, setPageNumber] = useState(1);
  const MAX_PAGE_NUMBER = 9;
  const goBack = () => {
    if (pageNumber === 1) {
      navigate(-1);
    } else if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };
  return (
    <main
      className="container story-container"
      onClick={(e) => {
        if (e.target.classList.contains("back_button")) {
          e.preventDefault();
          goBack();
        } else if (pageNumber < MAX_PAGE_NUMBER) {
          setPageNumber(pageNumber + 1);
        } else if (pageNumber === MAX_PAGE_NUMBER) {
          navigate("/question");
        }
      }}
    >
      <StoryPages pageNumber={pageNumber} setPageNumber={setPageNumber} />
      <button className="back_button" onClick={() => goBack()}>
        <BackArrow className="arrow" />
      </button>
    </main>
  );
};

const StoryPages = ({ pageNumber }) => {
  switch (pageNumber) {
    case 1:
      return (
        <div className="story_page_1">
          <Ladybird id="ladybird" />
          <Path />
          <p>Every jouney needs a path</p>
        </div>
      );

    case 2:
      return (
        <div className="story_page_2">
          <Path id="path" />
          <p> Some paths are easier. </p>
          <div>
            <p>
              Others, like mountain paths, are slightly more difficult to find.{" "}
            </p>
          </div>
          <Spider id="spider" />
        </div>
      );

    case 3:
      return (
        <div className="story_page_3">
          <p> Each path has its own story.</p>
          <p>Each path carries knowledge.</p>
          <p> Each path requires a knowledge to pass through it.</p>
        </div>
      );

    case 4:
      return (
        <div className="story_page_4">
          <p> Exploring new territory is in the nature of every being. </p>
          <p>
            Without the possibility of exploration, most beings either die or go
            insane.{" "}
          </p>
          <p>
            Both being ways of leaving behind the limitation of the situation.{" "}
          </p>
        </div>
      );

    case 5:
      return (
        <div className="story_page_5">
          <div>*blink*</div>
        </div>
      );

    case 6:
      return (
        <div className="story_page_6">
          Pause where you are, take a look at your hand holding this device,
          look at your body look up and blink.
        </div>
      );

    case 7:
      return (
        <div className="story_page_7">
          <img
            srcSet={`${floaters}, ${floaters2x} 2x, ${floaters3x} 3x`}
            src={floaters}
            alt="floaters"
          />
        </div>
      );

    case 8:
      return (
        <div className="story_page_8">
          <img
            srcSet={`${floatersMid}, ${floatersMid3x} 3x`}
            src={floatersMid}
            alt="floaters"
          />
        </div>
      );

    case 9:
      return (
        <div
          className="story_page_9"
          style={{
            backgroundImage: `url(${floatersLarge}), url(${floatersLarge3x})`,
          }}
        >
          <p>
            These floaters are an artefact created by the interface between a
            being and the environment
          </p>
          <p>
            If you look at the sky, you may see small wriggly things that look
            alive...
          </p>
          <p>They are not ‘real’.</p>
          <p>They exist somewhere in the middle of our mind and body.</p>
          <p>What artefacts must bats hear?</p>
        </div>
      );

    default:
      console.error("There's been an issue with page numbers");
  }
};
