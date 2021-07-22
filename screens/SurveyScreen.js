import React, { Component } from 'react';
import { StyleSheet, Button, ScrollView, Text, TextInput, View } from 'react-native';
import { SimpleSurvey } from 'react-native-simple-survey';
import { COLORS } from '../res/validColors';

const GREEN = 'rgba(141,196,63,1)';
const PURPLE = 'rgba(108,48,237,1)';

const survey = [
    {
        questionType: 'Info',
        questionText: 'Welcome to the survey app! Tap next to continue'
    },
    {
        questionType: 'SelectionGroup',
        questionText:
            'What is your biggest strength? ',
        questionId: 'biggestStrength',
        options: [
            {
                optionText: 'independent',
                value: 'independent'
            },
            {
                optionText: 'patient',
                value: 'patient'
            },
            {
                optionText: 'hard-working',
                value: 'hard-working'
            },
            {
                optionText: 'perseverance',
                value: 'perseverance'
            },
        ]
    },
    {
        questionType: 'SelectionGroup',
        questionText:
            'What is your biggest weakness?',
        questionId: 'biggestWeakness',
        options: [
            {
                optionText: 'put too much pressure on myself',
                value: 'put too much pressure on myself'
            },
            {
                optionText: 'ALWAYS trying to please people',
                value: 'ALWAYS trying to please people'
            },
            {
                optionText: 'struggle with time management',
                value: 'struggle with time management'
            },
            {
                optionText: 'indecisive',
                value: 'indecisive'
            },
        ]
    },
    {
        questionType: 'SelectionGroup',
        questionText:
            'What type of friend are you?',
        questionId: 'friendType',
        options: [
            {
                optionText: 'Always thinking about others and putting them first.',
                value: 'Always thinking about others and putting them first.'
            },
            {
                optionText: 'Gives great advice and has excellent intuition.',
                value: 'Gives great advice and has excellent intuition.'
            },
            {
                optionText: 'Leads conversation and enjoys making people laugh',
                value: 'Leads conversation and enjoys making people laugh'
            },
            {
                optionText: 'Always sees the best in their friends and mediates when there’s an argument.',
                value: 'Always sees the best in their friends and mediates when there’s an argument.'
            }
        ]
    },
    {
        questionType: 'SelectionGroup',
        questionText:
            ' Which goal is of the highest priority to you? ',
        questionId: 'goalPriority',
        options: [
            {
                optionText: ' To be the best in my career.',
                value: 'To be the best in my career.'
            },
            {
                optionText: 'To have a healthy body and mind.',
                value: 'To have a healthy body and mind.'
            },
            {
                optionText: 'To have lots of money.',
                value: 'To have lots of money.'
            },
            {
                optionText: 'To travel the world. ',
                value: 'To travel the world. '
            }
        ]
    },
    {
        questionType: 'SelectionGroup',
        questionText:
            'What is your biggest personality pet peeve?',
        questionId: 'singleDefault',
        options: [
            {
                optionText: 'People with no sense of humour.',
                value: 'People with no sense of humour.'
            },
            {
                optionText: 'People who are judgmental. ',
                value: 'People who are judgmental. '
            },
            {
                optionText: 'People who are lazy.',
                value: 'People who are lazy.'
            },
            {
                optionText: 'People who are uptight.',
                value: 'People who are uptight.'
            },
        ]
    },  {
        questionType: 'SelectionGroup',
        questionText:
            'How good are you at saying no to plans with your friends?',
        questionId: 'sayingNo',
        options: [
            {
                optionText: 'Great! I don’t do anything I don’t want to.',
                value: 'Great! I don’t do anything I don’t want to.'
            },
            {
                optionText: 'Awful. I can’t say no to people, especially my friends.',
                value: 'Awful. I can’t say no to people, especially my friends.'
            },
            {
                optionText: 'It depends on what situation and what friends, but generally it’s half and half.',
                value: 'It depends on what situation and what friends, but generally it’s half and half.'
            },
            {
                optionText: 'We had plans? I had no idea.',
                value: 'We had plans? I had no idea.'
            },
        ]
    },
    {
        questionType: 'SelectionGroup',
        questionText:
            'In a group discussion you want to say something but everyone is talking. What will you do? ',
        questionId: 'everyoneTalks',
        options: [
            {
                optionText: 'Just butt in – how else am I going to say my piece?',
                value: 'Just butt in – how else am I going to say my piece?'
            },
            {
                optionText: 'Patiently wait until there’s a gap and pray I am fast enough to speak before someone else does.',
                value: 'Patiently wait until there’s a gap and pray I am fast enough to speak before someone else does.'
            },
            {
                optionText: 'Get frustrated that there’s no order to the discussion and suggest we all take turns to talk. ',
                value: 'Get frustrated that there’s no order to the discussion and suggest we all take turns to talk.'
            },
            {
                optionText: 'Sit back and let everyone else talk. I don’t feel comfortable talking in big groups. ',
                value: 'Sit back and let everyone else talk. I don’t feel comfortable talking in big groups. '
            },
        ]
    },
    {
        questionType: 'SelectionGroup',
        questionText:
        'Do you take the lead in many situation?',
        questionId: 'takeLead',
        options: [
            {
                optionText: 'Yes',
                value: 'Yes'
            },
            {
                optionText: 'No',
                value: 'No'
            },
            {
                optionText: ' Rarely',
                value: 'Rarely'
            },
            {
                optionText: 'Only when I need to.',
                value: 'Only when I need to.'
            },
        ]
    },
    {
        questionType: 'SelectionGroup',
        questionText:
        'Do you pack for a trip the same day you are leaving? ',
        questionId: 'packTrip',
        options: [
            {
                optionText: 'No',
                value: 'No'
            },
            {
                optionText: 'Yes',
                value: 'Yes'
            },
            {
                optionText: 'Most of the time',
                value: 'Most of the time'
            },
            {
                optionText: 'Only the last minute things.',
                value: 'Only the last minute things.'
            },
        
        ]
    },
    {
        questionType: 'SelectionGroup',
        questionText:
        'Are you usually early when going to places?',
        questionId: 'packTrip',
        options: [
            {
                optionText: 'Always',
                value: 'Always'
            },
            {
                optionText: 'No',
                value: 'No'
            },
            {
                optionText: 'Sometimes',
                value: 'Sometimes'
            },
            {
                optionText: '"Usually"',
                value: '"Usually"'
            },
        
        ]
    },

    {
        questionType: 'Info',
        questionText: 'That is all for the survey, tap finish to see your results!'
    },
];

export default class SurveyScreen extends Component {
    static navigationOptions = () => {
        return {
            headerStyle: {
                backgroundColor: GREEN,
                height: 40,
                elevation: 5,
            },
            headerTintColor: '#fff',
            headerTitle: 'Survey',
            headerTitleStyle: {
                flex: 1,
            }
        };
    }

    constructor(props) {
        super(props);
        this.state = { backgroundColor: PURPLE, answersSoFar: '' };
    }

    onSurveyFinished(answers) {
        

        const infoQuestionsRemoved = [...answers];

        const answersAsObj = {};
        for (const elem of infoQuestionsRemoved) { answersAsObj[elem.questionId] = elem.value; }

        this.props.navigation.navigate('SurveyCompleted', { surveyAnswers: answersAsObj });
    }

    
    onAnswerSubmitted(answer) {
        this.setState({ answersSoFar: JSON.stringify(this.surveyRef.getAnswers(), 2) });
        switch (answer.questionId) {
            case 'favoriteColor': {
                if (COLORS.includes(answer.value.toLowerCase())) {
                    this.setState({ backgroundColor: answer.value.toLowerCase() });
                }
                break;
            }
            default:
                break;
        }
    }

    renderPreviousButton(onPress, enabled) {
        return (
            <View style={{ flexGrow: 1, maxWidth: 100, marginTop: 10, marginBottom: 10 }}>
                <Button
                    color={GREEN}
                    onPress={onPress}
                    disabled={!enabled}
                    backgroundColor={GREEN}
                    title={'Previous'}
                />
            </View>
        );
    }

    renderNextButton(onPress, enabled) {
        return (
            <View style={{ flexGrow: 1, maxWidth: 100, marginTop: 10, marginBottom: 10 }}>
                <Button
                    color={GREEN}
                    onPress={onPress}
                    disabled={!enabled}
                    backgroundColor={GREEN}
                    title={'Next'}
                />
            </View>
        );
    }

    renderFinishedButton(onPress, enabled) {
        return (
            <View style={{ flexGrow: 1, maxWidth: 100, marginTop: 10, marginBottom: 10 }}>
                <Button
                    title={'Finished'}
                    onPress={onPress}
                    disabled={!enabled}
                    color={GREEN}
                />
            </View>
        );
    }

    renderButton(data, index, isSelected, onPress) {
        return (
            <View
                key={`selection_button_view_${index}`}
                style={{ marginTop: 5, marginBottom: 5, justifyContent: 'flex-start' }}
            >
                <Button
                    title={data.optionText}
                    onPress={onPress}
                    color={isSelected ? GREEN : PURPLE}
                    style={isSelected ? { fontWeight: 'bold' } : {}} 
                    key={`button_${index}`}
                />
            </View>
        );
    }

    renderQuestionText(questionText) {
        return (
            <View style={{ marginLeft: 10, marginRight: 10 }}>
                <Text numLines={1} style={styles.questionText}>{questionText}</Text>
            </View>
        );
    }

    renderTextBox(onChange, value, placeholder, onBlur) {
        return (
            <View>
                <TextInput
                    style={styles.textBox}
                    onChangeText={text => onChange(text)}
                    numberOfLines={1}
                    underlineColorAndroid={'white'}
                    placeholder={placeholder}
                    placeholderTextColor={'rgba(184,184,184,1)'}
                    value={value}
                    multiline
                    onBlur={onBlur}
                    blurOnSubmit
                    returnKeyType='done'
                />
            </View>
        );
    }

    renderNumericInput(onChange, value, placeholder, onBlur) {
        return (<TextInput 
            style={styles.numericInput}
            onChangeText={text => { onChange(text); }}
            underlineColorAndroid={'white'}
            placeholderTextColor={'rgba(184,184,184,1)'}
            value={String(value)}
            placeholder={placeholder}
            keyboardType={'numeric'}
            onBlur={onBlur}
            maxLength={3}
        />);
    }

    renderInfoText(infoText) {
        return (
            <View style={{ marginLeft: 10, marginRight: 10 }}>
                <Text style={styles.infoText}>{infoText}</Text>
            </View>
        );
    }

    render() {
        return (
            <View style={[styles.background, { backgroundColor: this.state.backgroundColor }]}>
                <View style={styles.container}>
                    <SimpleSurvey
                        ref={(s) => { this.surveyRef = s; }}
                        survey={survey}
                        renderSelector={this.renderButton.bind(this)}
                        containerStyle={styles.surveyContainer}
                        selectionGroupContainerStyle={styles.selectionGroupContainer}
                        navButtonContainerStyle={{ flexDirection: 'row', justifyContent: 'space-around' }}
                        renderPrevious={this.renderPreviousButton.bind(this)}
                        renderNext={this.renderNextButton.bind(this)}
                        renderFinished={this.renderFinishedButton.bind(this)}
                        renderQuestionText={this.renderQuestionText}
                        onSurveyFinished={(answers) => this.onSurveyFinished(answers)}
                        onAnswerSubmitted={(answer) => this.onAnswerSubmitted(answer)}
                        renderTextInput={this.renderTextBox}
                        renderNumericInput={this.renderNumericInput}
                        renderInfo={this.renderInfoText}
                    />
                    
                </View>
                
                {/* <ScrollView style={styles.answersContainer}>
                    <Text style={{textAlign:'center'}}>JSON output</Text>
                    <Text>{this.state.answersSoFar}</Text>
                </ScrollView> */}
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        minWidth: '70%',
        maxWidth: '90%',
        alignItems: 'stretch',
        justifyContent: 'center',
        
        elevation: 20,
        borderRadius: 10,
        flex: 1, 
    },
    answersContainer: {
        width: '90%',
        maxHeight: '20%',
        marginTop: 50,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBottom: 20,
        backgroundColor: 'white',
        elevation: 20,
        borderRadius: 10,
    },
    surveyContainer: {
        width: 'auto',
        alignSelf: 'center',
        backgroundColor: 'white',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        alignContent: 'center',
        padding: 5,
        flexGrow: 0,
    },
    selectionGroupContainer: {
        flexDirection: 'column',
        backgroundColor: 'white',
        alignContent: 'flex-end',
    },
    background: {
        flex: 1,
        minHeight: 800,
        maxHeight: 800,
        justifyContent: 'center',
        alignItems: 'center',
    },
    questionText: {
        marginBottom: 20,
        fontSize: 20
    },
    textBox: {
        borderWidth: 1,
        borderColor: 'rgba(204,204,204,1)',
        backgroundColor: 'white',
        borderRadius: 10,
        
        padding: 10,
        textAlignVertical: 'top',
        marginLeft: 10,
        marginRight: 10
    },
    numericInput: {
        borderWidth: 1,
        borderColor: 'rgba(204,204,204,1)',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        textAlignVertical: 'top',
        marginLeft: 10,
        marginRight: 10
    },
    infoText: {
        marginBottom: 20,
        fontSize: 20,
        marginLeft: 10
    },
});
