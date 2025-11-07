import React, { useState } from 'react';
import { ScrollView, Text, StatusBar, Button, Alert } from 'react-native';
import Question from './Question';

export default function App() {

    const [answer1, setAnswer1] = useState('');
    const [answer2, setAnswer2] = useState('');
    const [answer3, setAnswer3] = useState('');
    const [answer4, setAnswer4] = useState('');
    const [answer5, setAnswer5] = useState('');

    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#fff', paddingTop: 40 }}>

            <Button
                title="Submit Answers"
                onPress={() => {
                    let score = 0;

                    if (answer1 === 'Manchester City') score += 1;
                    if (answer2 === 'Rodrigo') score += 1;
                    if (answer3 === 'Napoli') score += 1;
                    if (answer4 === 'Hungary') score += 1;
                    if (answer5 === 'Goalkeeper') score += 1;

                    Alert.alert('Quiz Results', `You got ${score} out of 5 correct!`);
                }}
            />

            <Text
                style={{
                    fontSize: 18,
                    fontWeight: '600',
                    textAlign: 'center',
                    marginVertical: 10,
                }}>
                ⚽ Football Knowledge Quiz ⚽
            </Text>

            <Question
                image={require('./img/ucl.jpg')}
                questionText="Who won the Champions League final in 2023?"
                options={['Manchester City', 'Real Madrid', 'PSG', 'Inter Milan']}
                selectedAnswer={answer1}
                onAnswerChange={(value) => setAnswer1(value)}
            />

            <Question
                image={require('./img/ballondor.jpg')}
                questionText="Who won the Ballon D'or Award in 2023?"
                options={['Vinicius Jr', 'Messi', 'Haaland', 'Rodrigo', 'Mbappe']}
                selectedAnswer={answer2}
                onAnswerChange={(value) => setAnswer2(value)}
            />

            <Question
                image={require('./img/kdb.jpg')}
                questionText="What club does this player play for currently?"
                options={['Manchester United', 'Barcelona', 'Napoli', 'Bayern', 'Al Nassr']}
                selectedAnswer={answer3}
                onAnswerChange={(value) => setAnswer3(value)}
            />

            <Question
                image={require('./img/Puskás_Aréna_01.jpg')}
                questionText="Where will the Champions League final be held in 2026?"
                options={['England', 'Spain', 'France', 'Turkey', 'Hungary']}
                selectedAnswer={answer4}
                onAnswerChange={(value) => setAnswer4(value)}
            />

            <Question
                image={require('./img/donnarumma.jpg')}
                questionText="What position does this player play in?"
                options={['Defender', 'Goalkeeper', 'Midfielder', 'Striker', 'Winger']}
                selectedAnswer={answer5}
                onAnswerChange={(value) => setAnswer5(value)}
            />

            <StatusBar style="auto" />
        </ScrollView>
    );
}






