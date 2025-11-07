import React from 'react';
import { View, Text, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const Question = ({ image, questionText, options, selectedAnswer, onAnswerChange }) => {
    return (
        <View style={{ padding: 10, borderBottomWidth: 1, borderColor: '#ddd' }}>
            <Image
                source={image}
                style={{
                    width: '100%',
                    height: 250,
                    resizeMode: 'cover',
                    borderRadius: 10,
                    marginBottom: 10,
                }}
            />

            <Text
                style={{
                    fontSize: 18,
                    fontWeight: '600',
                    marginBottom: 8,
                    color: '#333',
                }}
            >
                {questionText}
            </Text>

            <Picker
                selectedValue={selectedAnswer}
                onValueChange={(value) => onAnswerChange(value)}
            >
                {/* Default option */}
                <Picker.Item label="Select an answer..." value="" />

                {/* Dynamically render all provided options */}
                {options.map((option, index) => (
                    <Picker.Item key={index} label={option} value={option} />
                ))}
            </Picker>
        </View>
    );
};

export default Question;
