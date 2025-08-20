const AWS = require('aws-sdk');

const ses = new AWS.SES({
    region: 'us-east-1' // Change to your preferred region
});

exports.handler = async (event) => {
    const { name, email, subject, message } = JSON.parse(event.body);
    
    const params = {
        Destination: {
            ToAddresses: ['asmarfatia@gmail.com']
        },
        Message: {
            Body: {
                Text: {
                    Data: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
                }
            },
            Subject: {
                Data: `Contact Form: ${subject}`
            }
        },
        Source: 'asmarfatia@gmail.com' // Must be verified in SES
    };
    
    try {
        await ses.sendEmail(params).promise();
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'POST'
            },
            body: JSON.stringify({ message: 'Email sent successfully' })
        };
    } catch (error) {
        console.error('Contact form error:', error);
        return {
            statusCode: 500,
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({ error: 'Failed to send email', details: error.message })
        };
    }
};