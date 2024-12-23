import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useState } from "react";

function MediumCard(props) {
    const { mainWord, onIncrement } = props;
    const [bgColor, setBgColor] = useState("white");
    const [buttonsVisible, setButtonsVisible] = useState(true);

    const handleButtonClick = (color) => {
        setBgColor(color);
        setButtonsVisible(false);
        onIncrement();
    };

    return (
        <Card
            sx={{
                width: "90vw",
                maxWidth: 320,
                height: "70vh",
                maxHeight: 300,
                padding: 2,
                position: "relative",
                backgroundColor: bgColor,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                margin: "auto",
            }}
        >
            <CardContent
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                }}
            >
                <Typography
                    variant="h3"
                    component="div"
                    gutterBottom
                    textAlign="center"
                    sx={{
                        flex: "1 0 auto",
                        fontSize: "2.5rem",
                        fontWeight: "bold",
                        marginBottom: "1rem",
                        paddingTop: "2rem",
                    }}
                >
                    {mainWord}
                </Typography>
            </CardContent>
            {buttonsVisible && (
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "0 10px",
                        marginBottom: 2,
                    }}
                >
                    <Button
                        variant="contained"
                        sx={{ width: 70, height: 40, backgroundColor: "#006400" }}
                        onClick={() => handleButtonClick("#006400")}
                    >
                    </Button>
                    <Button
                        variant="contained"
                        sx={{ width: 70, height: 40, backgroundColor: "#22b922" }}
                        onClick={() => handleButtonClick("#22b922")}
                    >
                    </Button>
                    <Button
                        variant="contained"
                        sx={{ width: 70, height: 40, backgroundColor: "#7CFC00" }}
                        onClick={() => handleButtonClick("#7CFC00")}
                    >
                    </Button>
                    <Button
                        variant="contained"
                        sx={{ width: 70, height: 40, backgroundColor: "#FF0000" }}
                        onClick={() => handleButtonClick("#FF0000")}
                    >
                    </Button>
                </Box>
            )}
        </Card>
    );
}

export default MediumCard;
