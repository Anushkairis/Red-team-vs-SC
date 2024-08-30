// consoleController.js

const axios = require('axios');

const compileCode = async (req, res) => {
    // Getting the required data from the request
    const { code, language, input } = req.body;

    const languageMap = {
        "c": { language: "c", version: "10.2.0" },
        "cpp": { language: "c++", version: "10.2.0" },
        "python": { language: "python", version: "3.10.0" },
        "java": { language: "java", version: "15.0.2" }
    };

    if (!languageMap[language]) {
        return res.status(400).send({ error: "Unsupported language" });
    }

    const data = {
        "language": languageMap[language].language,
        "version": languageMap[language].version,
        "files": [
            {
                "name": "main",
                "content": code
            }
        ],
        "stdin": input
    };

    const config = {
        method: 'post',
        url: 'https://emkc.org/api/v2/piston/execute',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };

    // Calling the code compilation API
    try {
        const response = await axios(config);
        res.json(response.data.run);  // Send the run object directly
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: "Something went wrong" });
    }
};

module.exports = { compileCode };
