import { Button, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';

import QuestionsComponent from './QuestionComponent';
import TabsComponent from './TabsComponent';
import AppContainer from '../Dashboard/AppContainer';

const DefaultPage = () => {
    const [tabValue, setTabValue] = useState(0);
    const [answers, setAnswers] = useState(['', '', '', '', '', '', '', '', '', '']);

    const handleChangeTab = (event: any, newValue: React.SetStateAction<number>) => {
        setTabValue(newValue);
    };

    const handleChangeAnswer = (index: number, value: string) => {
        const newAnswers = [...answers];
        newAnswers[index] = value;
        setAnswers(newAnswers);
    };

    const handlePrev = () => {
        setTabValue((prevTabValue) => Math.max(0, prevTabValue - 1));
    };

    const handleNext = () => {
        setTabValue((prevTabValue) => Math.min(3, prevTabValue + 1));
    };

    const questions = [
        "Question 1",
        "Question 2",
        "Question 3",
        "Question 4",
        "Question 5"
    ];

    return (
        <AppContainer>
            <Stack direction="column" spacing={4} paddingY={5}>
                <TabsComponent tabValue={tabValue} handleChange={handleChangeTab} />
                {/* <Typography variant="h6" gutterBottom>
                    {questions[tabValue]} <span style={{ color: 'red' }}>*</span>
                </Typography> */}
                <QuestionsComponent
                    question={questions[tabValue]}
                    answer={answers[tabValue]}
                    handleChange={(value: string) => handleChangeAnswer(tabValue, value)}
                    visible={true}
                />
                <Stack direction="row" spacing={3}>
                    <Button variant="contained" onClick={handlePrev} disabled={tabValue === 0}>Previous</Button>
                    <Button variant="contained" onClick={handleNext} disabled={tabValue === 4}>Next</Button>
                </Stack>
            </Stack>
        </AppContainer>
    );
};

export default DefaultPage;