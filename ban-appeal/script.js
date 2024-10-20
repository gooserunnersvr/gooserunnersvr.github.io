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
        helpBox.classList.toggle('helpBox-invis');
        helpBox.classList.toggle('helpBox-invis.visible');
    });

    closeHelpBoxButton.addEventListener('click', () => {
        helpBox.classList.remove('helpBox-invis.visible');
        helpBox.classList.add('helpBox-invis');
    });

    const webhookUrl = 'https://discord.com/api/webhooks/1268725813201735733/yavV7kQr4FC-PzzXhRnCG6PT2-TsR2vY6CL38SPBEF9W3Pgv44bQftnPGCXW3XicHcm2';

    banAppealForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

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

        fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(embed)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Success:', data);
            alert('Your appeal has been submitted successfully!');
            banAppealForm.reset();
        })
        .catch(error => {
            console.error('Error submitting ban appeal:', error);
            alert('There was an error submitting your appeal. Please try again later.');
        });
    });

    discordForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

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

        fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(embed)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
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
