exports.roomInvite = (roomName, roomDescription, ageGroup, userId, roomId) => {
    return `
    <html>
        <head>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #F6AD55;
                    padding: 20px;
                }
                .container {
                    background-color: #ffffff;
                    padding: 20px;
                    border-radius: 10px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                }
                h1 {
                    color: rgb(56, 189, 248);
                }
                ul {
                    list-style-type: none;
                    padding: 0;
                }
                ul li {
                    margin-bottom: 10px;
                }
                a.button {
                    display: inline-block;
                    background-color: rgb(56, 189, 248);
                    color: white;
                    padding: 10px 20px;
                    text-decoration: none;
                    border-radius: 5px;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Hello,</h1>
                <p>A new room has been created:</p>
                <ul>
                    <li>Room Name: ${roomName}</li>
                    <li>Room Description: ${roomDescription}</li>
                    <li>Age Group: ${ageGroup}</li>
                </ul>
                <a class="button" href="http://localhost:4000/rooms/apply?userId=${userId}&roomId=${roomId}">Apply It</a>
                <p>Thank you.</p>
            </div>
        </body>
    </html>
    `;
}
