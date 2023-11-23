// components/Form.js
import React, { useState } from 'react';
import Input from "../Input";
import ButtonSubmit from "../ButtonSubmit";
import {FormStyle} from "./style";

const Form = ({ onSubmit }) => {
    const [playerName, setPlayerName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Call the parent component's onSubmit function with the playerName
        onSubmit(playerName);
        // Clear the input field after submitting
        setPlayerName('');
    };

    const handleChange = (event) => {
        setPlayerName(event.target.value);
    };

    return (
        <FormStyle onSubmit={handleSubmit}>
            <Input
                type="text"
                placeholder="Add a player"
                value={playerName}
                onChange={handleChange}
            />
            <ButtonSubmit type="submit">Submit</ButtonSubmit>
        </FormStyle>
    );
};

export default Form;
