// script.js
const form = document.getElementById('serviceForm');
const statusMessage = document.getElementById('statusMessage');

// Zmień to na swój webhook Discorda
const discordWebhookURL = "https://discord.com/api/webhooks/1311387837828169738/KzMTPXMDKZNMzNM2VkNXtselp1Bv29L9y5jYp7VSmUl734Y_p1m0ecFSwan_55BfXPYI";

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Pobierz dane z formularza
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const issue = document.getElementById('issue').value;
    const subject = document.getElementById('subject').value;
    const description = document.getElementById('description').value;
    // Przygotuj payload do wysłania
    const payload = {
        content: "**New Support Ticket Request**",
        embeds: [
            {
                title: "Ticket Request from " + name,
                fields: [
                    { name: "E-mail", value: email },
                    { name: "Needs help with", value: issue },
                    { name: "Subject", value: subject },
                    { name: "Description", value: description }
                ],
                color: 57228// Kolor w HEX (0x58B9FF -> DEC)
            }
        ]
    };

    // Wyślij dane do webhooka
    try {
        const response = await fetch(discordWebhookURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (response.ok) {
            statusMessage.textContent = "Support Request has beent sent! You may close this Tab now.";
            statusMessage.style.color = "green";
            form.style.display ="none";
            form.reset();
        } else {
            throw new Error("It appears to be an error while sending your request, please try again later!");
        }
    } catch (error) {
        statusMessage.textContent = "error: " + error.message;
        statusMessage.style.color = "red";
    }
});