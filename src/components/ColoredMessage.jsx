export const ColoredMessage = ({ color, children }) => {
    const contentBlueStyle = {
        color,
        fontSize: "20px",
    };
    return <p style={contentBlueStyle}>{children}</p>;
};