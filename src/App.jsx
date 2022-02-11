import { useState } from "react";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Statistics from "./components/Statistics/Statistics";
import Section from "./components/Section/Section";
import Notification from "./components/Notification/Notification";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const setFeedbackValue = (feedback) => {
    switch (feedback) {
      case "good":
        setGood((state) => state + 1);
        break;
      case "neutral":
        setNeutral((state) => state + 1);
        break;
      case "bad":
        setBad((state) => state + 1);
        break;
      default:
        return;
    }
  };
  const totalFeedback = good + neutral + bad;
  const positiveFeedbackPercentage = Math.floor((good / totalFeedback) * 100);

  return (
    <>
      <Section title={"Please leave feedback"}>
        <FeedbackOptions
          options={{ good, neutral, bad }}
          onLeaveFeedback={setFeedbackValue}
        />
      </Section>
      <Section title={"Statistics"}>
        {totalFeedback > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positiveFeedbackPercentage}
          />
        ) : (
          <Notification message="Be the first to leave a feedback" />
        )}
      </Section>
    </>
  );
}
