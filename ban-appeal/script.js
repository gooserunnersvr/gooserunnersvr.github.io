document.addEventListener('DOMContentLoaded', () => {
    const banAppealFormContainer = document.getElementById('banAppealFormContainer');
    const discordFormContainer = document.getElementById('discordFormContainer');
    const banAppealForm = document.getElementById('banAppealForm');
    const discordForm = document.getElementById('discordForm');
    const helpButton = document.getElementById('help');
    const helpBox = document.getElementById('helpBox');
    const closeHelpBoxButton = document.createElement('button');
    closeHelpBoxButton.textContent = '×';
    closeHelpBoxButton.className = 'close-btn';
    helpBox.appendChild(closeHelpBoxButton);

    const windowPreferDark = window.matchMedia('(prefers-color-scheme: dark)');

    if (windowPreferDark.matches) {
        document.body.classList.add('dark-mode');
    }

    if (window.location.search.includes('?discord')) {
        banAppealFormContainer.style.display = 'none';
        discordFormContainer.style.display = 'block';
    }

    const switchFormButton = document.createElement('button');
    switchFormButton.textContent = 'Switch Form';
    document.body.appendChild(switchFormButton);

    switchFormButton.addEventListener('click', () => {
        if (banAppealFormContainer.style.display === 'none') {
            banAppealFormContainer.style.display = 'block';
            discordFormContainer.style.display = 'none';
        } else {
            banAppealFormContainer.style.display = 'none';
            discordFormContainer.style.display = 'block';
        }
    });

    helpButton.addEventListener('click', () => {
        helpBox.classList.toggle('helpBox-invis');  // Toggle visibility class
        helpBox.classList.toggle('visible');  // Add/remove 'visible' to show/hide
    });

    closeHelpBoxButton.addEventListener('click', () => {
        helpBox.classList.remove('visible');
        helpBox.classList.add('helpBox-invis');
    });

    const webhookUrl = 'https://discord.com/api/webhooks/1268725813201735733/yavV7kQr4FC-PzzXhRnCG6PT2-TsR2vY6CL38SPBEF9W3Pgv44bQftnPGCXW3XicHcm2';

    // Ban appeal form submission
    banAppealForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        console.log("Ban Appeal Form Submitted");

        if (!banAppealForm.checkValidity()) {
            alert('Please fill out all required fields.');
            return;
        }

        const formData = new FormData(banAppealForm);

        const embed = {
            content: `||<@&1270847676652720221> <@&1268725644657692764> <@&1256683292002877480>||`,
            embeds: [
                {
                    title: "New ban appeal submission",
                    description: `
**Player ID:** ${formData.get('playfabID')}
**Email:** ${formData.get('email')}
**Ban Reason:** ${formData.get('reason')}
**Appeal Reason:** ${formData.get('opinion')}
                    `,
                    color: 7506394
                }
            ]
        };

        console.log('Payload being sent to webhook:', JSON.stringify(embed, null, 2));  // Log payload for debugging

        fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(embed)
        })
        .then(response => {
            console.log('Response Status:', response.status);  // Log the HTTP status code
           if(response.status !== 204) return response.json();
            return null;// Only parse JSON if status is okay
        })
        .then(data => {
            if (data) {
            console.log('Success:', data);
            } else {
            console.log('No content returned from the webhook (204)');
            }
    
            alert('Your appeal has been submitted successfully!');
            banAppealForm.reset();  // Reset the form after successful submission
        })
        .catch(error => {
            console.error('Error submitting ban appeal:', error);
            alert('There was an error submitting your appeal. Please try again later.');
        });
    });

    // Discord form submission
    discordForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        console.log("Discord Appeal Form Submitted");

        if (!discordForm.checkValidity()) {
            alert('Please fill out all required fields.');
            return;
        }

        const formData = new FormData(discordForm);

        const embed = {
            content: `||<@&1270847676652720221> <@&1268725644657692764> <@&1256683292002877480>||`,
            embeds: [
                {
                    title: "New Discord ban appeal submission",
                    description: `
**Discord ID:** ${formData.get('discordID')}
**Additional Info:** ${formData.get('additionalInfo')}
                    `,
                    color: 7506394
                }
            ]
        };

        console.log('Payload being sent to webhook:', JSON.stringify(embed, null, 2));  // Log payload for debugging

        fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(embed)
        })
        .then(response => {
            console.log('Response Status:', response.status);
            return response.json();
        })
        .then(data => {
            console.log('Success:', data);
            alert('Your Discord appeal has been submitted successfully!');
            discordForm.reset();
        })
        .catch(error => {
            console.error('Error submitting Discord appeal:', error);
            alert('There was an error submitting your appeal. Please try again later.');
        });
    });
});
