import React from 'react';
import styled from "styled-components";

const Title = styled.h1`
  text-transform: uppercase;
  font-size: 40px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif ;
  font-weight: 500;
`;
const Subtitle = styled.h3`
  text-transform: uppercase;
  font-size: 28px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif ;
  font-weight: 500;
  margin: 25px;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Img = styled.img`
  height: 200px;
  margin: 0 10px;
`;
const Card = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 0;
`;

const categoriesData = [
    {
        id: 1,
        title: 'posters',
        img: "posters.jpg",
    },
    {
        id: 2,
        title: 'apparel',
        img: "apparel.jpg",
    },
    {
        id: 3,
        title: 'stickers',
        img: "stickers.jpg",
    },
    {
        id: 4,
        title: 'cups',
        img: "cups.jpg",
    },
    {
        id: 5,
        title: 'calendars',
        img: 'calendars.jpg',
    },
]

function Task2() {
  return (
    <div>
      <h3>Task 2</h3>
        <CardsDiv >
            <Title>Categories</Title>
            <Card>
                {categoriesData.map((item) => {
                    return (
                        <Div key={item.id} >
                            <Img src={`./img/${item.img}`} alt=''/>
                            <Subtitle>{item.title}</Subtitle>
                        </Div>

                    )})}
            </Card>

        </CardsDiv>
    </div>
  );
}

export default Task2;

/* TASK 2
Atkurkite šį komponentą: https://prnt.sc/1296ht1

Paveikslėliai:
- posters: https://per4mmedia.com/wp-content/uploads/2021/03/posters.jpg
- apparel" https://per4mmedia.com/wp-content/uploads/2021/03/apparel.jpg
- stickers: https://per4mmedia.com/wp-content/uploads/2021/03/stickers.jpg
- cups: https://per4mmedia.com/wp-content/uploads/2021/03/cups.jpg
- calendars" https://per4mmedia.com/wp-content/uploads/2021/03/calendars.jpg

Pastaba: paveikslėlius talpinti projekto aplanke.
*/
