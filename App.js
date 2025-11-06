import React, { useState } from 'react';
import { ScrollView, Text, StatusBar, Button, Alert } from 'react-native';
import Question from './Question';

export default function App() {

    const [answer1, setAnswer1] = useState('');
    const [answer2, setAnswer2] = useState('');
    const [answer3, setAnswer3] = useState('');
    const [answer4, setAnswer4] = useState('');

    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#fff', paddingTop: 40 }}>

            <Button
                title="Submit Answers"
                onPress={() => {
                    let score = 0;

                    if (answer1 === 'Cat') score += 1;
                    if (answer2 === 'Dog') score += 1;
                    if (answer3 === 'Elephant') score += 1;

                    Alert.alert('Quiz Results', `You got ${score} out of 3 correct!`);
                }}
            />

            <Text
                style={{
                    fontSize: 18,
                    fontWeight: '600',
                    textAlign: 'center',
                    marginVertical: 10,
                }}>
                Animal Quiz
            </Text>

            <Question
                image={require('./img/cat.jpg')}
                questionText="What animal is this?"
                selectedAnswer={answer1}
                onAnswerChange={(value) => setAnswer1(value)}
            />

            <Question
                image={require('./img/dog.jpg')}
                questionText="What animal is this?"
                selectedAnswer={answer2}
                onAnswerChange={(value) => setAnswer2(value)}
            />

            <Question
                image={require('./img/elephant.jpg')}
                questionText="What animal is this?"
                selectedAnswer={answer3}
                onAnswerChange={(value) => setAnswer3(value)}
            />

            <StatusBar style="auto" />

        </ScrollView>
    );
}




