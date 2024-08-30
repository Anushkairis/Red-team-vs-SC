import React from "react";

const Footer = () => {
    const getFooterStyle = () => {
        const isMobile = window.innerWidth <= 600; // Adjust this breakpoint as needed

        return {
            textAlign: "center",
            marginBottom: isMobile ? "20px" : "10px", // Responsive margin
            fontFamily: "Arial, sans-serif",
            padding: isMobile ? "10px" : "20px", // Responsive padding
            backgroundColor: isMobile ? "#f8f9fa" : "#e9ecef", // Responsive background color
            fontSize: isMobile ? "14px" : "16px", // Responsive font size
        };
    };

    return (
        <div style={getFooterStyle()}>
            Made by{" "}
            <a
                href="https://www.youtube.com/roadsidecoder"
                style={{
                    cursor: "pointer",
                    color: "#007bff",
                    textDecoration: "none",
                }}
                onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
                onMouseOut={(e) => (e.target.style.textDecoration = "none")}
            >
                CDAC PATNA
            </a>
        </div>
    );
};

export default Footer;
