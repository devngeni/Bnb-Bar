import {
  BodyContainer,
  BodyWrapper,
  Card,
  Container,
  Container1,
  ImageContainer,
  TH,
  Table,
  TableCell,
  TableContainer,
  TableRow,
  TextHeader
} from "@/styles/Landing";
// import React, { useEffect, useState } from "react";

const itemData = {
  whiskey: [
    {
      name: "Johny Walker Double black 1Ltr",
      ksh: "11,000.00",
      usd: "$78.57"
    },
    {
      name: "Johny Walker Black Label 1Ltr",
      ksh: "6,500.00",
      usd: "$46.43"
    },
    {
      name: "Jack Daniels 1ltr",
      ksh: "6,500.00",
      usd: "$46.43"
    },
    {
      name: "Monkey Shoulder 1ltr",
      ksh: "8,000.00",
      usd: "$57.14"
    }
  ],
  Vodka: [
    {
      name: "Ciroc 1ltr",
      ksh: "8,500.00",
      usd: "$60.71"
    },
    {
      name: "Smirnoff Vodka 1ltr",
      ksh: "4,000.00",
      usd: "$28.57"
    },
    {
      name: "Kettel One 1ltr",
      ksh: "7,000.00",
      usd: "$50.00"
    },
    {
      name: "Absolute Vodka 1ltr",
      ksh: "4,000.00",
      usd: "$28.57"
    }
  ],
  Gin: [
    {
      name: "Bombay 750ml",
      ksh: "4,500.00",
      usd: "$32.14"
    },
    {
      name: "Gordon's Dry Gin 1ltr",
      ksh: "4,500.00",
      usd: "$32.14"
    },
    {
      name: "Tanqueray",
      ksh: "6,000.00",
      usd: "$42.86"
    },
    {
      name: "Tanqueray Sevilla 1ltr",
      ksh: "6,000.00",
      usd: "$42.86"
    },
    {
      name: "Hendrix 700ml",
      ksh: "7,000.00",
      usd: "$50.00"
    }
  ],
  Liquor: [
    {
      name: "Bailey's Original 1ltr",
      ksh: "5,000.00",
      usd: "$35.71"
    },
    {
      name: "Amarula 1ltr",
      ksh: "4,000.00",
      usd: "$28.57"
    },
    {
      name: "Jagermeister 1ltr",
      ksh: "5,000.00",
      usd: "$35.71"
    },
    {
      name: "Don Julio Blanco 750ml",
      ksh: "12,000.00",
      usd: "$85.71"
    },
    {
      name: "Jose Cuervo Silver 1ltr",
      ksh: "6,000.00",
      usd: "$42.86"
    },
    {
      name: "Jose Cuervo Gold 1ltr",
      ksh: "6,000.00",
      usd: "$42.86"
    },
    {
      name: "Camino Clear 750ml",
      ksh: "3,500.00",
      usd: "$25.00"
    }
  ],
  Cognac: [
    {
      name: "Hennesey VS 750ml",
      ksh: "8,500.00",
      usd: "$60.71"
    },
    {
      name: "Hennesey 1ltr",
      ksh: "10,000.00",
      usd: "$71.43"
    },
    {
      name: "Hennesey VSOP 750ml",
      ksh: "15,000.00",
      usd: "$107.14"
    }
  ],
  Rum: [{ name: "Bacardi Gold 1ltr", ksh: "4,000.00", usd: "$28.57" }],

  Beer: [
    {
      name: "Tusker Can 500ml",
      ksh: "400.00",
      usd: "$2.86"
    },
    {
      name: "Tusker Malt Can 500ml",
      ksh: "400.00",
      usd: "$2.86"
    },
    {
      name: "Tusker Cider Can",
      ksh: "400.00",
      usd: "$2.86"
    },
    {
      name: "Guinness Can",
      ksh: "400.00",
      usd: "$2.86"
    },
    {
      name: "White Cap Can",
      ksh: "400.00",
      usd: "$2.86"
    },
    {
      name: "Heineken",
      ksh: "400.00",
      usd: "$2.86"
    },
    {
      name: "Hunters Dry Cider",
      ksh: "350.00",
      usd: "$2.50"
    },
    {
      name: "Snapp can",
      ksh: "300.00",
      usd: "$2.14"
    },
    {
      name: "K.O all flavours",
      ksh: "400.00",
      usd: "$2.86"
    },
    {
      name: "Balozi Can 500ml",
      ksh: "400.00",
      usd: "$2.86"
    }
  ],
  Soft_Drinks: [
    {
      name: "Fanta pineapple 2 litres",
      ksh: "300.00",
      usd: "$2.14"
    },
    {
      name: "Fanta pineapple 1 litre",
      ksh: "270.00",
      usd: "$1.93"
    },
    {
      name: "Sprite 1 litre",
      ksh: "300.00",
      usd: "$2.14"
    },
    {
      name: "Sprite 2 litres",
      ksh: "270.00",
      usd: "$1.93"
    },
    {
      name: "Krest 1 litre",
      ksh: "300.00",
      usd: "$2.14"
    },
    {
      name: "Coke can 330 ml",
      ksh: "270.00",
      usd: "$1.93"
    },
    {
      name: "Fanta orange 1 litre",
      ksh: "300.00",
      usd: "$2.14"
    },
    {
      name: "Fanta orange 2 litres",
      ksh: "270.00",
      usd: "$1.93"
    },
    {
      name: "Coke light 1 litre",
      ksh: "300.00",
      usd: "$2.14"
    },
    {
      name: "Coke light 2 litres",
      ksh: "270.00",
      usd: "$1.93"
    },
    {
      name: "Sprite can 330 ml",
      ksh: "300.00",
      usd: "$2.14"
    },
    {
      name: "Coke zero 1 litre",
      ksh: "270.00",
      usd: "$1.93"
    },
    {
      name: "Coke zero 2 litres",
      ksh: "300.00",
      usd: "$2.14"
    },
    {
      name: "Fanta orange can 330 ml",
      ksh: "270.00",
      usd: "$1.93"
    },
    {
      name: "Coke 1 litre",
      ksh: "300.00",
      usd: "$2.14"
    },
    {
      name: "Coke 2 litres",
      ksh: "270.00",
      usd: "$1.93"
    },
    {
      name: "Fitch & leedes pink tonic 200 ml",
      ksh: "300.00",
      usd: "$2.14"
    },
    {
      name: "Schweppes Ginger Ale 330 ml",
      ksh: "270.00",
      usd: "$1.93"
    },
    {
      name: "Stoney Tangawizi 1 litre",
      ksh: "300.00",
      usd: "$2.14"
    },
    {
      name: "Fanta Passion 2 litre",
      ksh: "270.00",
      usd: "$1.93"
    },
    {
      name: "Fanta Passion 1 litre",
      ksh: "300.00",
      usd: "$2.14"
    }
  ],
  Vapes: [
    {
      name: "5000 Puffs Rechargeable",
      ksh: "2,000.00",
      usd: "$14.29"
    }
  ]
};

const Landing = () => {
  const { whiskey, Vodka, Gin, Liquor, Cognac, Rum, Beer, Soft_Drinks, Vapes } =
    itemData;
  return (
    <BodyContainer>
      <BodyWrapper>
        <Container1>
          <Card>
            <TableContainer>
              <TextHeader>Whiskey</TextHeader>
              <Table>
                <thead style={{ borderBottom: "0.1px dashed gray" }}>
                  <tr>
                    <TH>Product</TH>
                    <TH>Price (Ksh)</TH>
                    <TH>Price (USD)</TH>
                  </tr>
                </thead>
                <tbody>
                  {whiskey.map((product, index) => (
                    <TableRow
                      key={index}
                      style={{ borderBottom: "0.1px dashed gray" }}
                    >
                      <TableCell align="left">{product.name}</TableCell>
                      <TableCell align="center">{product.ksh}</TableCell>
                      <TableCell align="center">{product.usd}</TableCell>
                    </TableRow>
                  ))}
                </tbody>
              </Table>
            </TableContainer>
          </Card>
          <Card>
            <ImageContainer
              imageUrl="whiskey.png"
              style={{ backgroundSize: "contain" }}
            />
          </Card>
        </Container1>
        <Container>
          <Card>
            <ImageContainer imageUrl="vodka.png" />
          </Card>
          <Card>
            <TableContainer>
              <TextHeader>Vodka</TextHeader>

              <Table>
                <thead style={{ borderBottom: "0.1px dashed gray" }}>
                  <tr>
                    <TH>Product</TH>
                    <TH>Price (Ksh)</TH>
                    <TH>Price (USD)</TH>
                  </tr>
                </thead>
                <tbody>
                  {Vodka.map((product, index) => (
                    <TableRow
                      key={index}
                      style={{ borderBottom: "0.1px dashed gray" }}
                    >
                      <TableCell align="left">{product.name}</TableCell>
                      <TableCell align="center">{product.ksh}</TableCell>
                      <TableCell align="center">{product.usd}</TableCell>
                    </TableRow>
                  ))}
                </tbody>
              </Table>
            </TableContainer>
          </Card>
        </Container>
        <Container1>
          <Card>
            <TableContainer>
              <TextHeader>Gin</TextHeader>
              <Table>
                <thead style={{ borderBottom: "0.1px dashed gray" }}>
                  <tr>
                    <TH>Product</TH>
                    <TH>Price (Ksh)</TH>
                    <TH>Price (USD)</TH>
                  </tr>
                </thead>
                <tbody>
                  {Gin.map((product, index) => (
                    <TableRow
                      key={index}
                      style={{ borderBottom: "0.1px dashed gray" }}
                    >
                      <TableCell align="left">{product.name}</TableCell>
                      <TableCell align="center">{product.ksh}</TableCell>
                      <TableCell align="center">{product.usd}</TableCell>
                    </TableRow>
                  ))}
                </tbody>
              </Table>
            </TableContainer>
          </Card>
          <Card>
            <ImageContainer imageUrl="gin.png" />
          </Card>
        </Container1>
        <Container>
          <Card>
            <ImageContainer imageUrl="liqour.png" />
          </Card>
          <Card>
            <TableContainer>
              <TextHeader>Liquor</TextHeader>

              <Table>
                <thead style={{ borderBottom: "0.1px dashed gray" }}>
                  <tr>
                    <TH>Product</TH>
                    <TH>Price (Ksh)</TH>
                    <TH>Price (USD)</TH>
                  </tr>
                </thead>
                <tbody>
                  {Liquor.map((product, index) => (
                    <TableRow
                      key={index}
                      style={{ borderBottom: "0.1px dashed gray" }}
                    >
                      <TableCell align="left">{product.name}</TableCell>
                      <TableCell align="center">{product.ksh}</TableCell>
                      <TableCell align="center">{product.usd}</TableCell>
                    </TableRow>
                  ))}
                </tbody>
              </Table>
            </TableContainer>
          </Card>
        </Container>
        <Container1>
          <Card>
            <TableContainer>
              <TextHeader>Cognac</TextHeader>
              <Table>
                <thead style={{ borderBottom: "0.1px dashed gray" }}>
                  <tr>
                    <TH>Product</TH>
                    <TH>Price (Ksh)</TH>
                    <TH>Price (USD)</TH>
                  </tr>
                </thead>
                <tbody>
                  {Cognac.map((product, index) => (
                    <TableRow
                      key={index}
                      style={{ borderBottom: "0.1px dashed gray" }}
                    >
                      <TableCell align="left">{product.name}</TableCell>
                      <TableCell align="center">{product.ksh}</TableCell>
                      <TableCell align="center">{product.usd}</TableCell>
                    </TableRow>
                  ))}
                </tbody>
              </Table>
            </TableContainer>
          </Card>
          <Card>
            <ImageContainer imageUrl="cognac.png" />
          </Card>
        </Container1>
        <Container>
          <Card>
            <ImageContainer imageUrl="rum.png" />
          </Card>
          <Card>
            <TableContainer>
              <TextHeader>Rum</TextHeader>

              <Table>
                <thead style={{ borderBottom: "0.1px dashed gray" }}>
                  <tr>
                    <TH>Product</TH>
                    <TH>Price (Ksh)</TH>
                    <TH>Price (USD)</TH>
                  </tr>
                </thead>
                <tbody>
                  {Liquor.map((product, index) => (
                    <TableRow
                      key={index}
                      style={{ borderBottom: "0.1px dashed gray" }}
                    >
                      <TableCell align="left">{product.name}</TableCell>
                      <TableCell align="center">{product.ksh}</TableCell>
                      <TableCell align="center">{product.usd}</TableCell>
                    </TableRow>
                  ))}
                </tbody>
              </Table>
            </TableContainer>
          </Card>
        </Container>

        <Container1>
          <Card>
            <TableContainer>
              <TextHeader>Beers</TextHeader>

              <Table>
                <thead style={{ borderBottom: "0.1px dashed gray" }}>
                  <tr>
                    <TH>Product</TH>
                    <TH>Price (Ksh)</TH>
                    <TH>Price (USD)</TH>
                  </tr>
                </thead>
                <tbody>
                  {Beer.map((product, index) => (
                    <TableRow
                      key={index}
                      style={{ borderBottom: "0.1px dashed gray" }}
                    >
                      <TableCell align="left">{product.name}</TableCell>
                      <TableCell align="center">{product.ksh}</TableCell>
                      <TableCell align="center">{product.usd}</TableCell>
                    </TableRow>
                  ))}
                </tbody>
              </Table>
            </TableContainer>
          </Card>
          <Card>
            <ImageContainer imageUrl="beers.png" />
          </Card>
        </Container1>
        <Container>
          <Card>
            <ImageContainer
              imageUrl="sweetdrinks.png"
              style={{ height: "600px" }}
            />
          </Card>
          <Card>
            <TableContainer>
              <TextHeader>Soft-Drinks</TextHeader>

              <Table>
                <thead style={{ borderBottom: "0.1px dashed gray" }}>
                  <tr>
                    <TH>Product</TH>
                    <TH>Price (Ksh)</TH>
                    <TH>Price (USD)</TH>
                  </tr>
                </thead>
                <tbody>
                  {Soft_Drinks.map((product, index) => (
                    <TableRow
                      key={index}
                      style={{ borderBottom: "0.1px dashed gray" }}
                    >
                      <TableCell align="left">{product.name}</TableCell>
                      <TableCell align="center">{product.ksh}</TableCell>
                      <TableCell align="center">{product.usd}</TableCell>
                    </TableRow>
                  ))}
                </tbody>
              </Table>
            </TableContainer>
          </Card>
        </Container>
        <Container1>
          <Card>
            <TableContainer>
              <TextHeader style={{ color: "#FFA500" }}>Vapes</TextHeader>

              <Table>
                <thead style={{ borderBottom: "0.1px dashed gray" }}>
                  <tr>
                    <TH>Product</TH>
                    <TH>Price (Ksh)</TH>
                    <TH>Price (USD)</TH>
                  </tr>
                </thead>
                <tbody>
                  {Vapes.map((product, index) => (
                    <TableRow
                      key={index}
                      style={{ borderBottom: "0.1px dashed gray" }}
                    >
                      <TableCell align="left">{product.name}</TableCell>
                      <TableCell align="center">{product.ksh}</TableCell>
                      <TableCell align="center">{product.usd}</TableCell>
                    </TableRow>
                  ))}
                </tbody>
              </Table>
            </TableContainer>
          </Card>
          <Card>
            <ImageContainer imageUrl="vapes.png" />
          </Card>
        </Container1>
      </BodyWrapper>
    </BodyContainer>
  );
};

export default Landing;
