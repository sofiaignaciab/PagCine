import { Container } from "react-bootstrap";

const MovieScreen = () => {
    return (
        <Container
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingBottom: 20,
            }}
        >
            <div
                style={{
                    paddingBottom: "15px",
                    height: "200px",
                    background: "white",
                    width: "450px",
                    transform: "rotateX(-30deg) scale(1.1)",
                    perspective: "400px",
                    boxShadow: "0 3px 10px 2px",
                }}
            ></div>
        </Container>
    );
};

export default MovieScreen;
