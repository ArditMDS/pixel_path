import React, {useEffect, useState} from "react";
import BigTitle from "../../components/BigTitle";
import SecondaryTitle from "../../components/SecondaryTitle";
import Background from "../../components/Background";
import NormalText from "../../components/NormalText";
import Form from "../../components/Form";
import {ContainerDivWheel, ContainerWheel, Message, Wheel} from "./style";
import Slice from "../../components/Slice";
import SpinButton from "../../components/SpinButton";

function Homepage() {
    const [data, setData] = useState([]);
    const [count, setCount] = useState(0);
    const [rotation, setRotation] = useState(0);
    useEffect(() => {
        if(localStorage.getItem('Data')) {
            const storedData = localStorage.getItem('Data');
            setCount(data.length)
            const parsedData = JSON.parse(storedData);
            setData(parsedData || []);
        }
    }, [data.length]);

    const handleSubmit = (playerName) => {
        if(playerName !== null && playerName !== "") {
            const newData = [...data, playerName];
            setData(newData);
            localStorage.setItem('Data', JSON.stringify(newData));
        }
    };

    const handleClick = () => {
        const randomRotation = Math.floor(Math.random() * 3600) + 720; // Rotate at least two full circles
        setRotation(rotation + randomRotation);
    }
    return (
        <Background>
            <BigTitle>Pixel Path</BigTitle>
            <SecondaryTitle>Who gets to play first ?</SecondaryTitle>
            <NormalText>
                Welcome on our random first player selector ! Write down all the players name and then click on the wheel to start the random selection.
            </NormalText>
            <ContainerWheel>
                <Form setData={setData} onSubmit={handleSubmit} />
                <ContainerDivWheel>
                    <SpinButton onClick={handleClick}>Spin</SpinButton>
                    <Wheel rotate={rotation}>
                        {data.length > 0 ? (
                            data.map((player, index) => {
                                const result = index * 360 / count;
                                return (
                                    <Slice result={result} index={index}>{player}</Slice>
                                )
                            })
                        ) : (
                            <Message>No players added yet</Message>
                        )}
                    </Wheel>
                </ContainerDivWheel>
            </ContainerWheel>
        </Background>
    )
}

export default Homepage;