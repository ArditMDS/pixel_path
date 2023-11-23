import React from "react";
import BigTitle from "../../components/BigTitle";
import SecondaryTitle from "../../components/SecondaryTitle";
import Background from "../../components/Background";
import NormalText from "../../components/NormalText";
import Input from "../../components/Input";
import ButtonSubmit from "../../components/ButtonSubmit";
import Form from "../../components/Form";

function homepage() {
    return (
        <Background>
            <BigTitle>Pixel Path</BigTitle>
            <SecondaryTitle>Easter Egg</SecondaryTitle>
            <NormalText>
                Well done ! You have found the easter egg, you win the right to brag
                about it to the other teams that didn’t find it. Write down the name of your
                team so the other teams can know you were here:
            </NormalText>
            <Form>
                <Input placeholder="Write your team name here" type="text"/>
                <ButtonSubmit type="submit">Submit</ButtonSubmit>
            </Form>
        </Background>
    )
}

export default homepage