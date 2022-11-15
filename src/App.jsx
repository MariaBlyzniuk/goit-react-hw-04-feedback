import { useState } from 'react';
import { Statistics } from "./components/Statistics/Statistics";
import { Section } from "./components/Section/Section";
import { FeedbackOptions } from "./components/FeedbackOptions/FeedbackOptions";
import { Notification } from "./components/Notification/Notification";
import { Container } from "./components/Container.styled";

export function App(){
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);


    const onLeaveFeadback = options => {
    switch (options) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      default:
        return;
    }
    };

    const countTotalFeedback = () => {
      return good + neutral + bad;
    
  };
    
    const countPositiveFeedbackPercentage = () => {
      return Math.round((good / countTotalFeedback()) * 100) || 0;
    }

    return (
        <Container> <Section title='Please live feedback'>
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={onLeaveFeadback}></FeedbackOptions>
            </Section>

            <Section title='Statistics'>
            {countTotalFeedback() ? (<Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              percentage={countPositiveFeedbackPercentage()}
            ></Statistics>) : (<Notification message="No feedback given" />)}
            </Section>
    </Container>
    )
}
