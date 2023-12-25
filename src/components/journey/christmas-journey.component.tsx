import Story from "../story/story.component";
import Title from "../title/title.component";
import Riddle from "../riddle/riddle.component";
import squarePuzzle from "../../assets/img/squares.png";
import { useState } from "react";

interface ChristmasJourneyProps {
  handleEnd: any;
  playSong: any;
  finale: any;
  krampus: any;
}

export const ChristmasJourney = ({
  handleEnd,
  playSong,
  finale,
  krampus,
}: ChristmasJourneyProps) => {
  const [showStory, setShowStory] = useState(true);
  const [riddle, setRiddle] = useState(<></>);
  const [index, setIndex] = useState(Number);

  const increment = () => {
    index === storyArray?.length - 1 ? handleEnd() : setIndex(index + 1);
  };

  const handleRiddle = (riddle: number) => {
    setShowStory(false);
    switch (riddle) {
      case 1:
        setRiddle(
          <Riddle
            question={"Why didn't the teddy bear eat his lunch?"}
            answer={["stuffed", "he was stuffed", "because he was stuffed"]}
            setShowElement={setShowStory}
          />
        );
        break;
      case 2:
        setRiddle(
          <Riddle
            question={
              <>
                <p>D, D, P, V, C, C, D, ?, R</p>
                <p>
                  To show your understanding, you'll need more than just the
                  letter…
                </p>
              </>
            }
            answer={["blitzen"]}
            setShowElement={setShowStory}
          />
        );
        break;
      case 3:
        setRiddle(
          <Riddle
            question={
              <>
                <a
                  href="https://mywordle.strivemath.com/?word=fccoj"
                  target="_blank"
                  rel="noreferrer"
                >
                  Click here to continue...
                </a>
              </>
            }
            answer={["jolly"]}
            setShowElement={setShowStory}
          />
        );
        break;
      case 4:
        setRiddle(
          <Riddle
            question={
              <>
                <a
                  href="https://connections.swellgarfo.com/game/-NmMqmx8orAb1oQnUu2i"
                  target="_blank"
                  rel="noreferrer"
                >
                  Click here to continue...
                </a>
              </>
            }
            answer={[
              "snow, polar, northern, jingle",
              "snow polar northern jingle",
              "snowpolarnorthernjingle",
            ]}
            setShowElement={setShowStory}
          />
        );
        break;
      case 5:
        setRiddle(
          <Riddle
            question={
              "I fulfilled my duties for years, and now I am tired. I am ready to retire. Who am I?"
            }
            answer={["elfward"]}
            setShowElement={setShowStory}
          />
        );
        break;
      case 6:
        setRiddle(
          <Riddle
            question={"Buck, Cod, Dahlia, Rook, Cuckoo, Rail, Haddock, ?"}
            answer={["cub"]}
            setShowElement={setShowStory}
          />
        );
        break;
      case 7:
        setRiddle(
          <Riddle
            question={"What do you call a bear with no teeth?"}
            answer={["a gummy bear", "gummy bear"]}
            setShowElement={setShowStory}
          />
        );
        break;
      case 8:
        setRiddle(
          <Riddle
            question={
              <>
                North, south, east, or west
                <br />
                I won't tell you which way is best.
                <br />
                I'll point you in any direction you guess
                <br />
                But I can't reach the destination myself.
              </>
            }
            answer={["compass", "a compass"]}
            setShowElement={setShowStory}
          />
        );
        break;
      case 9:
        setRiddle(
          <Riddle
            question={"Vixen, Madison, Delta, Mars"}
            answer={[
              "four",
              "4",
              "fourth",
              "4th",
              "fourth in a series",
              "4th in a series",
              "4 in a series",
              "four in a series",
            ]}
            setShowElement={setShowStory}
          />
        );
        break;
      case 10:
        setRiddle(
          <Riddle
            question={
              <>
                <img src={squarePuzzle} alt="square puzzle" />
                <br />
                How many squares do you see?
              </>
            }
            answer={["40", "forty"]}
            setShowElement={setShowStory}
          />
        );
        break;
      case 11:
        setRiddle(
          <Riddle
            question={"Who is the Christmas king?"}
            answer={["stocking"]}
            setShowElement={setShowStory}
          />
        );
        break;
      case 12:
        setRiddle(
          <Riddle
            question={
              <>
                In our house, all four walls face south.
                <br />
                What color is the bear who walks past?
              </>
            }
            answer={["white"]}
            setShowElement={setShowStory}
          />
        );
        break;
      case 13:
        setRiddle(
          <Riddle
            question={
              <>
                Black as night, white as snow
                <br />
                Shrouded in cloaks from head to toe
                <br />
                We fly from south, to east, west, north
                <br />
                Two of a kind at opposite sides of the earth.
              </>
            }
            answer={["rook", "a rook", "rooks"]}
            setShowElement={setShowStory}
          />
        );
        break;
      case 14:
        setRiddle(
          <Riddle
            question={
              <>
                Walk on the living, they don't even mumble. <br />
                Walk on the dead, they mutter and grumble.
              </>
            }
            answer={["leaves", "leaf"]}
            setShowElement={setShowStory}
          />
        );
        break;
      case 15:
        setRiddle(
          <Riddle
            question={"Too much heat may cause me to freeze. What am I?"}
            answer={[
              "computer",
              "a computer",
              "engine",
              "an engine",
              "criminal",
              "a criminal",
              "electronics",
            ]}
            setShowElement={setShowStory}
          />
        );
        break;
      case 16:
        setRiddle(
          <Riddle
            question={
              <>
                I don't know what I am, but I know what I'm not.
                <br />
                I am not somebody who likes this season a lot.
                <br />
                I am not anyone who brings gifts and cheer.
                <br />
                I am not someone that nobody fears.
                <br />
                Who am I not?
              </>
            }
            answer={["santa", "santa claus"]}
            setShowElement={setShowStory}
          />
        );
        break;
      case 17:
        setRiddle(
          <Riddle
            question={
              <>
                If you're good, you needn't fear me.
                <br />
                If you're bad, you will be seeing me.
                <br />
                On Christmas Eve only I will smile.
                <br />
                Spare the rod and spoil the child.
              </>
            }
            answer={["krampus"]}
            setShowElement={setShowStory}
          />
        );
        break;
      case 18:
        setRiddle(
          <Riddle
            question={
              <>
                If you throw me out the window,
                <br />
                I'll leave a grieving wife.
                <br />
                But bring me back through the door,
                <br />
                And you'll see someone giving life.
              </>
            }
            answer={["n", "the letter n"]}
            setShowElement={setShowStory}
          />
        );
        break;
      case 19:
        setRiddle(
          <Riddle
            question={
              <>
                To avoid the calf, I veered sharply to the left.
                <br />
                Meeting friends after work helps executives network effectively.
                <br />
                My parents told me to never cross the road without looking.
              </>
            }
            answer={["521", "5 2 1"]}
            setShowElement={setShowStory}
          />
        );
        break;
      default:
        return null;
    }
  };

  const storyArray = [
    <Title title="> Elfward." />,
    <Story story={`You slowly turn around.`} />,
    <Story
      story={`At the other end of the room stands a large and mysterious teddy bear.`}
    />,
    <Story
      story={`He seems to loom over you by at least a couple of inches.`}
    />,
    <Story story={`You don't know whether to be afraid or confused.`} />,
    <Title title="> Mysterious Teddy Bear." />,
    <Story story={`You did not create this advent calendar.`} />,
    <Story story={`You do not know who created it.`} />,
    <Story story={`You do not know who created you.`} />,
    <Story
      story={`Yet you have lived inside this advent calendar for as long as you can remember.`}
    />,
    <Story
      story={`You think you have been waiting your whole life for this moment.`}
    />,
    <Story story={`Slowly, you cross the room.`} />,
    <Story
      story={`The elf backs away, pressing himself against the far wall.`}
    />,
    <Story story={`You hold out a sheet of paper.`} />,
    <>
      <div onClick={() => handleRiddle(1)}>
        <Story
          story={`Something is scrawled on it in your own childlike handwriting...`}
        />
      </div>
    </>,
    <Story
      story={`You are so pleased that the elf has solved your very own riddle!`}
    />,
    <Story story={`You excitedly gesture to the rest of the riddles.`} />,
    <Title title="> Elfward." />,
    <Story
      story={`It seems that this mysterious teddy bear would like you to continue.`}
    />,
    <Story
      story={`You were going to anyway, but now you have a very intimidating overseer.`}
    />,
    <Story story={`So that's just great.`} />,
    <Story story={`You touch the next riddle.`} />,
    <Story story={`Away it goes!`} />,
    <Title title="> Santa Lizzy." />,
    <Story story={`There's a light at the end of your hallway.`} />,
    <Story
      story={`You've been walking so long that you can barely believe it.`}
    />,
    <Story story={`The closer you get, the brighter it becomes.`} />,
    <Story story={`All of a sudden, your way is blocked!`} />,
    <Story story={`There's some sort of translucent barrier.`} />,
    <Story story={`You press against it, but it's no use.`} />,
    <>
      <div onClick={() => handleRiddle(2)}>
        <Story story={`There are letters on the floor in front of you...`} />
      </div>
    </>,
    <Story story={`Oh man, you miss Blitzen.`} />,
    <Story story={`You miss Donner, and Dancer, and...all of them!`} />,
    <Story story={`You hope they're doing okay without you.`} />,
    <Story story={`And you hope you'll see them soon.`} />,
    <Story story={`You take a deep breath and rush into the light!`} />,
    <Title title="> GoodWill Toward Men." />,
    <Story story={`You have been running at top speed FOR HOURS.`} />,
    <Story story={`(Possibly more like 5 minutes.)`} />,
    <Story story={`You're not sure where you're going.`} />,
    <Story story={`But you are going to get there as fast as possible!`} />,
    <Story
      story={`You are running so fast that you don't see the shimmering air in front of you.`}
    />,
    <Story story={`You slam facefirst into an invisible barrier!`} />,
    <Story story={`That's got to hurt...`} />,
    <Story
      story={`You pull yourself together and take a look at the shimmering barrier.`}
    />,
    <>
      <div onClick={() => handleRiddle(3)}>
        <Story story={`It looks like some sort of grid...`} />
      </div>
    </>,
    <Story story={`JOLLY?!??!?!`} />,
    <Story story={`What kind of cruel joke is this?`} />,
    <Story story={`YOU ARE NOT FEELING JOLLY.`} />,
    <Story story={`But at least the barrier has disappeared.`} />,
    <Story story={`You see a light at the end of the passage.`} />,
    <Story story={`You race towards it!`} />,
    <Title title="> La Befellena." />,
    <Story
      story={`You are just minding your own business and not being indecisive at all.`}
    />,
    <Story story={`You hear footsteps coming from all around you.`} />,
    <Story
      story={`You're sure this must be the evil thing behind the advent calendar.`}
    />,
    <Story story={`You fervently wish your magic worked here.`} />,
    <Story
      story={`Though you are quite elderly, you get into a fighting stance --`}
    />,
    <Story story={`Just as GoodWill Toward Men and Santa Lizzy race in!`} />,
    <Story story={`You are so glad to see your friends.`} />,
    <Story story={`And they are so glad to see you!`} />,
    <Story
      story={`You have a brief celebration before the next riddle arrives.`}
    />,
    <>
      <div onClick={() => handleRiddle(4)}>
        <Story story={`It seems to fill the entire floor...`} />
      </div>
    </>,
    <Title title="> Mysterious Teddy Bear." />,
    <Story story={`You are very pleased that the riddles are being solved!`} />,
    <Story
      story={`You have been here for many years and never seen anything like this.`}
    />,
    <Story
      story={`Something tells you that if enough riddles are solved...`}
    />,
    <Story story={`...you might be able to leave the advent calendar!`} />,
    <Story story={`This seems so scary to you.`} />,
    <Story story={`The advent calendar is the only home you've ever known.`} />,
    <Story
      story={`But you have always dreamed of being a child's beloved toy.`}
    />,
    <Story story={`Maybe that dream will finally come true!`} />,
    <Story story={`You can scarcely dare to allow yourself to hope.`} />,
    <Title title="> Elfward." />,
    <Story
      story={`The mysterious teddy bear excitedly gestures towards another riddle.`}
    />,
    <Story story={`You're getting into a bit of a rhythm:`} />,
    <Story story={`The teddy bear selects a riddle and you send it out.`} />,
    <Story
      story={`They're getting solved almost as fast as you can send them.`}
    />,
    <Story story={`This may be a good thing, since it is Christmas Eve.`} />,
    <Story story={`And you never really intended to ruin Christmas...`} />,
    <Story story={`But you can't help but feel disappointed.`} />,
    <Story story={`You've come here for a reason, after all.`} />,
    <Story
      story={`To make your friends understand it's time for you to go.`}
    />,
    <Story story={`You are simply ready to leave the North Pole.`} />,
    <Story story={`And they're not ready to let you.`} />,
    <Story story={`But that's too bad.`} />,
    <Story story={`It's simply time.`} />,
    <Story story={`You pull a pen out of your pocket.`} />,
    <Story
      story={`You scribble your own riddle over the one the teddy bear gestured to.`}
    />,
    <Story story={`The teddy bear seems distressed.`} />,
    <Story story={`He waves his arms frantically.`} />,
    <Story story={`You ignore him and send your riddle out.`} />,
    <Title title="> Santa Lizzy." />,
    <Story story={`A scrap of paper appears in front of you --`} />,
    <Story story={`In front of all of you, really.`} />,
    <Story
      story={`You take a closer look and realize that you recognize the handwriting.`}
    />,
    <Story story={`How could you not?`} />,
    <>
      <div onClick={() => handleRiddle(5)}>
        <Story
          story={`Elfward has been your most trusted advisor for hundreds of years.`}
        />
      </div>
    </>,
    <Story story={`You guess riddles aren't Elfward's strong suit.`} />,
    <Story
      story={`You are very angry that he trapped you in an advent calendar to...`}
    />,
    <Story story={`...make a dumb point about retirement?`} />,
    <Story story={`He could have just asked you nicely.`} />,
    <Story story={`You don't even think he's ever mentioned retiring.`} />,
    <Story story={`Well, maybe once a couple hundred years ago.`} />,
    <Story
      story={`You literally just pointed out that Aruba would melt him...`}
    />,
    <Story story={`He could have retired to Canada or something.`} />,
    <Title title="> GoodWill Toward Men." />,
    <Story story={`Santa Lizzy has shown Elfward's riddle around.`} />,
    <Story story={`And, well, you kinda get it.`} />,
    <Story story={`Not the criminal misconduct part.`} />,
    <Story story={`You will be arresting Elfward on sight.`} />,
    <Story story={`But the North Pole doesn't really need him anymore...`} />,
    <Story story={`They have you, after all!`} />,
    <>
      <div onClick={() => handleRiddle(6)}>
        <Story
          story={`As if grateful for the understanding, a riddle appears in your hand.`}
        />
      </div>
    </>,
    <Title title="> Mysterious Teddy Bear." />,
    <Story
      story={`You are deeply distraught that Elfward edited a riddle!!!`}
    />,
    <Story story={`They are sacred.`} />,
    <Story story={`You are terrified something bad will happen.`} />,
    <Story
      story={`But after some time of riddles being sent out and solved, you calm down.`}
    />,
    <Story story={`Maybe the riddles are not so sacred after all?`} />,
    <Story
      story={`You wonder if you can write another of your own riddles.`}
    />,
    <Story story={`Being in here for so long has given you a lot of ideas.`} />,
    <Story
      story={`But you wouldn't dare desecrate a riddle...just in case.`}
    />,
    <Story
      story={`You write your own riddle on a scrap of paper and offer it to Elfward.`}
    />,
    <Title title="> Elfward." />,
    <Story story={`Uhhhh, you guess you're solving this riddle now.`} />,
    <>
      <div onClick={() => handleRiddle(7)}>
        <Story story={`You hope they won't all be bear themed.`} />
      </div>
    </>,
    <Story story={`Ugh. They're definitely all going to be bear themed.`} />,
    <Story
      story={`You quickly send the next riddle before the teddy bear can give you another.`}
    />,
    <Title title="> Santa Squad." />,
    <Story story={`You are all arguing about which hallway to take.`} />,
    <Story
      story={`Another riddle is rather abruptly thrown into your room.`}
    />,
    <>
      <div onClick={() => handleRiddle(8)}>
        <Story story={`You gather round...`} />
      </div>
    </>,
    <Story story={`This riddle seems to be mocking you.`} />,
    <Story
      story={`Maybe you should just pick a direction and get on with it.`}
    />,
    <Story
      story={`You spin GoodWill Toward Men in a circle until he's dizzy.`}
    />,
    <Story story={`When he faces east, you all head that way.`} />,
    <Title title="> Elfward." />,
    <Story story={`The next riddle you touch doesn't move.`} />,
    <Story
      story={`You've learned from experience that this is for you to solve.`}
    />,
    <Story story={`You can see the mysterious teddy bear scribbling again.`} />,
    <Story story={`You figure you'll give him a taste of his own medicine.`} />,
    <Story story={`You offer your riddle to him...`} />,
    <Title title="> Mysterious Teddy Bear." />,
    <Story story={`Your VERY OWN RIDDLE?!?!`} />,
    <Story
      story={`You are so overcome with emotion you don't even know what to do.`}
    />,
    <Story
      story={`If you could cry, there would be tears in your little button eyes.`}
    />,
    <>
      <div onClick={() => handleRiddle(9)}>
        <Story story={`You gently reach out for the riddle...`} />
      </div>
    </>,
    <Story story={`You are so happy. You are so proud.`} />,
    <Story
      story={`Though you have lived here for many years, you never thought about solving the riddles.`}
    />,
    <Story story={`(After all, your brain is full of fluff.)`} />,
    <Story
      story={`But now that you have a taste for riddles, you want to solve them all!!!`}
    />,
    <Title title="> Santa Squad." />,
    <Story
      story={`You have been walking down the passage for some time now.`}
    />,
    <>
      <div onClick={() => handleRiddle(10)}>
        <Story story={`You reach a door with a mysterious pattern on it...`} />
      </div>
    </>,
    <Story story={`The door opens, revealing...`} />,
    <Story story={`Many more doors.`} />,
    <Story
      story={`A room containing a large number of square doors, in fact.`}
    />,
    <Story story={`All adorned with backwards numbers.`} />,
    <Story story={`Time to get excited:`} />,
    <Story story={`This must be the front of the advent calendar!`} />,
    <Story
      story={`Some of the doors are already open, but they lead to nothing.`}
    />,
    <Story story={`You all count to find there are still 9 doors closed.`} />,
    <Story story={`One of the doors begins shaking.`} />,
    <>
      <div onClick={() => handleRiddle(11)}>
        <Story story={`It opens to reveal a riddle inside:`} />
      </div>
    </>,
    <Title title="> Elfward." />,
    <Story story={`This whole thing has been such a bust.`} />,
    <Story story={`You're almost out of riddles and for what?`} />,
    <Story
      story={`You don't think your friends understood the point at all.`}
    />,
    <Story story={`Now you might have ruined Christmas for nothing.`} />,
    <Story
      story={`You wanted to leave the North Pole, but not in disgrace...`}
    />,
    <Story story={`The teddy bear seems to sense your distress.`} />,
    <Story story={`He places his paw gently on your shoulder.`} />,
    <Story
      story={`You look at the teddy bear -- really look at him -- for the first time.`}
    />,
    <Story story={`Something about him seems familiar...`} />,
    <Story story={`You just can't think of what it might be.`} />,
    <Title title="> Mysterious Teddy Bear." />,
    <Story story={`You pity this little elf.`} />,
    <Story story={`You know just what will make him feel better.`} />,
    <>
      <div onClick={() => handleRiddle(12)}>
        <Story story={`Another handmade riddle!!!`} />
      </div>
    </>,
    <Title title="> Elfward." />,
    <Story story={`At least his riddles are getting a little better.`} />,
    <Story story={`The next riddle you touch doesn't go anywhere either.`} />,
    <>
      <div onClick={() => handleRiddle(13)}>
        <Story story={`This calendar must really want you to solve it...`} />
      </div>
    </>,
    <Story story={`The riddles are humming excitedly.`} />,
    <Story story={`As if they're excited to be solved.`} />,
    <Story story={`Several fly away without even being touched...`} />,
    <Title title="> Santa Squad." />,
    <Story story={`Three doors fly open at once.`} />,
    <Story story={`You split up to handle the riddles.`} />,
    <Title title="> GoodWill Toward Men." />,
    <>
      <div onClick={() => handleRiddle(14)}>
        <Story
          story={`You are confident in your ability to solve any riddle.`}
        />
      </div>
    </>,
    <Title title="> Santa Lizzy." />,
    <>
      <div onClick={() => handleRiddle(15)}>
        <Story story={`You just want to go home...`} />
      </div>
    </>,
    <Title title="> La Befellena." />,
    <Story story={`You approach your riddle with trepidation.`} />,
    <>
      <div onClick={() => handleRiddle(16)}>
        <Story story={`Something just seems a little off about this...`} />
      </div>
    </>,
    <Story story={`You feel very uneasy about your answer.`} />,
    <Story
      story={`It's as if whatever lives in this advent calendar was talking to you.`}
    />,
    <Story story={`As if it wants you to be afraid.`} />,
    <Story story={`You are quite sure you know what this entity is now.`} />,
    <Story story={`But you wouldn't dare to speak it aloud.`} />,
    <Title title="> Elfward." />,
    <Story story={`This next riddle is for you.`} />,
    <>
      <div onClick={() => handleRiddle(17)}>
        <Story story={`It seems quite different from the rest...`} />
      </div>
    </>,
    <Story story={`You know the answer, but how could you say it?`} />,
    <Story story={`Suddenly you're filled with dread.`} />,
    <Story story={`How could he be behind this advent calendar?`} />,
    <Story story={`How could you have helped him?`} />,
    <Story story={`The riddle rumbles in your hands.`} />,
    <Story story={`It demands an answer.`} />,
    <Title title="> Mysterious Teddy Bear." />,
    <Story story={`The elf stares grimly at the riddle.`} />,
    <Story story={`You don't know much, but you know something is wrong.`} />,
    <Story story={`Maybe he doesn't know the answer.`} />,
    <Story story={`You look over his shoulder.`} />,
    <Story
      story={`After some consideration, it occurs to you that you know the answer!`}
    />,
    <Story story={`It takes you some effort, but you manage to say it...`} />,
    <Story story={`And then everything goes black.`} />,
    <Title title="> Elfward." />,
    <Story
      story={`When the teddy bear speaks, a dark energy explodes out of the riddle.`}
    />,
    <Story story={`It enters the teddy bear through his mouth.`} />,
    <Story story={`And then suddenly everything is gone --`} />,
    <Story story={` -- the teddy bear, the puzzles --`} />,
    <Story story={`And you're alone.`} />,
    <Title title="> Santa Squad." />,
    <Story story={`The advent calendar begins to rumble and shake.`} />,
    <Story story={`It feels like it's coming down around you!`} />,
    <Story story={`The door reading 24 flies open.`} />,
    <Story story={`You can see the North Pole through the door.`} />,
    <Story story={`You all leap through the door...`} />,
    <Story story={`...and suddenly, you're all back!`} />,
    <Title title="> La Befellena." />,
    <Story story={`Something is wrong.`} />,
    <Story story={`The advent calendar is still shaking on the floor.`} />,
    <Story
      story={`It's shaking violently, like something is trying to come through...`}
    />,
    <Story story={`You try to close the door!`} />,
    <Story story={`But it's too late.`} />,
    <Story story={`A small, mysterious teddy bear tumbles out.`} />,
    <Story story={`And the advent calendar is silent.`} />,
    <Title title="> Elfward." />,
    <Story story={`You are still inside the advent calendar.`} />,
    <Story story={`Everything has gone quiet.`} />,
    <Story story={`The room you're in is now completely empty.`} />,
    <Story story={`And there's no way out.`} />,
    <Story story={`This is not the retirement you'd hoped for.`} />,
    <Story story={`You scour the pitch black room for something, anything.`} />,
    <>
      <div onClick={() => handleRiddle(18)}>
        <Story story={`Something glows faintly in the corner...`} />
      </div>
    </>,
    <Story story={`The floor opens up!`} />,
    <Story story={`You tumble down, and down, and down...`} />,
    <Title title="> Mysterious Teddy Bear." />,
    <Story story={`You are not quite yourself anymore.`} />,
    <Story
      story={`There are many conflicting thoughts in your little bear head.`}
    />,
    <Story story={`But one thing is very clear:`} />,
    <Story story={`Christmas is a travesty.`} />,
    <Story story={`Gifts are given to children who don't deserve them.`} />,
    <Story story={`And children are no longer punished as they should be.`} />,
    <Story story={`This must be made right.`} />,
    <Story story={`It's time to take the North Pole back.`} />,
    <Title title="> Santa Lizzy." />,
    <Story story={`You recognize this mysterious teddy bear.`} />,
    <Story
      story={`You remember every toy ever made at the North Pole, after all.`}
    />,
    <Story story={`This teddy bear was made here hundreds of years ago.`} />,
    <Story story={`He had been meant for a little girl long gone.`} />,
    <Story
      story={`How could he have wound up in this ancient advent calendar?`}
    />,
    <Story story={`You guess he must have wandered away somehow...`} />,
    <Story story={`Maybe touched the pretty carvings...`} />,
    <Story story={`And that could have been enough.`} />,
    <Story story={`Your heart aches for him.`} />,
    <Story story={`A teddy bear is meant for the love of a child.`} />,
    <Story story={`And this one must have been so lonely.`} />,

    <Title title="> GoodWill Toward Men." />,
    <Story story={`Suddenly, Elfward tumbles out of the advent calendar!`} />,
    <Story story={`You rush to arrest him.`} />,
    <Story
      story={`Unfortunately, your cuffs must have gotten lost at some point.`}
    />,
    <Story story={`You settle for tackling him to the ground.`} />,
    <Title title="> Elfward." />,
    <Story story={`You suppose you deserve this.`} />,
    <Story
      story={`Santa Lizzy reminds you that you were the one who made the teddy bear.`}
    />,
    <Story
      story={`And every toy made by an elf at the North Pole has one thing in common.`}
    />,
    <Story story={`They have a secret reset code.`} />,
    <Story story={`(Just in case of rogue sentient robots and such.)`} />,
    <>
      <div onClick={() => handleRiddle(19)}>
        <Story story={`It's always a 3 digit numeric code...`} />
      </div>
    </>,
    <Story story={`"521!" you shout.`} />,
    <>
      <div onClick={() => playSong(finale, krampus)}>
        <Story story={`The teddy bear slumps to the ground.`} />{" "}
      </div>
    </>,

    <Title title="> La Befellena." />,
    <Story
      story={`You're able to work your magic to banish Krampus forever.`}
    />,
    <Story story={`As for the advent calendar, it's harmless now.`} />,
    <Story story={`But you destroy it just to be extra sure.`} />,
    <Story
      story={`Plus you're kinda mad about the whole trapped for a month thing.`}
    />,
    <Title title="> No Longer Mysterious Teddy Bear." />,
    <Story story={`You don't remember anything that's happened here.`} />,
    <Story story={`As far as you're concerned, you were born today.`} />,
    <Story
      story={`It's Christmas Eve, and you're so excited to go out on the sleigh!`}
    />,
    <Story story={`You'd love to be a beloved toy.`} />,
    <Story
      story={`Occasionally you think you might feel something...strange inside you.`}
    />,
    <Story story={`But surely not.`} />,
    <Story story={`You're just a teddy bear, after all.`} />,
    <Title title="> Elfward." />,
    <Story
      story={`You spend quite a bit of time thinking about improving your communication skills.`}
    />,
    <Story story={`You talk things over with your friends.`} />,
    <Story story={`You apologize profusely.`} />,
    <Story story={`They suggest you retire to Banff or Juneau.`} />,
    <Story story={`You quite like those suggestions...`} />,
    <Story story={`But you find yourself thinking about the teddy bear.`} />,
    <Story
      story={`You're the only one who could have remembered that override code...`}
    />,
    <Story story={`You suppose they might just need you here after all.`} />,
    <Story story={`Maybe you'll even try for head elf again!`} />,
    <Title title="> GoodWill Toward Men." />,
    <Story story={`You advocate to have Elfward put to death.`} />,
    <Story story={`But despite the OBVIOUS SECURITY RISK!!!`} />,
    <Story story={`Everybody else insists that is "too extreme."`} />,
    <Story story={`You are furious at this lack of consequences.`} />,
    <Story story={`You'll be watching Elfward very closely from now on...`} />,
    <Title title="> Santa Lizzy." />,
    <Story story={`You're just happy to be back in time for Christmas.`} />,
    <Story story={`You're happy Elfward has come to his senses.`} />,
    <Story
      story={`And you're happy the teddy bear has been freed from the calendar.`}
    />,
    <Story story={`You can't stand to think of a toy in pain.`} />,
    <Story story={`You have just the right child in mind for him.`} />,
    <Story story={`You can't wait to bring joy to both child and bear!`} />,
    <Story story={`Your sleigh is packed to the brim.`} />,
    <Story story={`You and La Befellena rise into the air.`} />,
    <Story story={`The elves cheer you from below.`} />,
    <Story story={`The teddy bear rides happily in the back.`} />,
    <>
      <span onClick={() => handleEnd()}>
        <Story
          story={`You just know it's going to be a very merry Christmas!!!`}
        />
      </span>
    </>,
  ];

  return (
    <>
      {showStory ? (
        <div className="story" onClick={increment}>
          {storyArray[index]}
        </div>
      ) : (
        <div>{riddle}</div>
      )}
    </>
  );
};