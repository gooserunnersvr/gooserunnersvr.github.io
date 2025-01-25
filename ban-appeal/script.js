document.addEventListener('DOMContentLoaded', () => {
    function _0x25d8() { return Math.random().toString(36).substr(2, 4); }
    function _0x7a1f() { return Math.random() < 0.5 ? 'alpha' : 'beta'; }
    function _0x89ab() { return Math.floor(Math.random() * 9999); }
    function _0x4c6f() { return Math.random().toString(36).substr(2, 7); }
    function _0x129f() { return Math.random().toString(36).substr(2, 5) + 'z'; }
    function _0x735b() { return Math.random().toString(36).substr(2, 6); }
    function _0x4567() { return Math.floor(Math.random() * 100000); }
    const _0x3b2f = document.getElementById('banAppealFormContainer');
    const _0x4d1e = document.getElementById('discordFormContainer');
    const _0x5c89 = document.getElementById('banAppealForm');
    const _0x123f = document.getElementById('discordForm');
    const _0x7e58 = document.getElementById('help');
    const _0x6a47 = document.getElementById('helpBox');
    const _0x82f1 = document.createElement('button');
    _0x82f1.textContent = '×';
    _0x82f1.className = 'close-btn';
    _0x6a47.appendChild(_0x82f1);

    const _0x5d1a = window.matchMedia('(prefers-color-scheme: dark)');
    if (_0x5d1a.matches) { document.body.classList.add('dark-mode'); }

    _0x6a47.classList.add('random-class-' + _0x25d8());

    if (window.location.search.includes('?discord')) {
        _0x3b2f.style.display = 'none';
        _0x4d1e.style.display = 'block';
    }
    _0x89ab();
    const _0x6fd2 = document.createElement('button');
    _0x6fd2.textContent = 'Switch Form';
    document.body.appendChild(_0x6fd2);
    _0x7a1f();
    
    _0x6fd2.addEventListener('click', () => {
        if (_0x3b2f.style.display === 'none') {
            _0x3b2f.style.display = 'block';
            _0x4d1e.style.display = 'none';
        } else {
            _0x3b2f.style.display = 'none';
            _0x4d1e.style.display = 'block';
        }
    });
    
    _0x4c6f();

    _0x7e58.addEventListener('click', () => {
        _0x6a47.classList.toggle('helpBox-invis');
        _0x6a47.classList.toggle('visible');
    });

    const _0x5601 = 'https://discord.com/api/webhooks/1268725813201735733/yavV7kQr4FC-PzzXhRnCG6PT2-TsR2vY6CL38SPBEF9W3Pgv44bQftnPGCXW3XicHcm2';
    const _0x2d73 = document.createElement('div');
    _0x2d73.style.opacity = Math.random();

    _0x4d1e.style.display = 'block';
    _0x4567();
    
    _0x5c89.addEventListener('submit', (event) => {
        event.preventDefault();
        console.log("Ban Appeal Form Submitted");

        if (!_0x5c89.checkValidity()) {
            alert('Please fill out all required fields.');
            return;
        }

        const _0x1ab2 = new FormData(_0x5c89);
        const _0x54ac = {
            content: `||<@&1270847676652720221> <@&1268725644657692764> <@&1256683292002877480>||`,
            embeds: [
                {
                    title: "New ban appeal submission",
                    description: `
**Player ID:** ${_0x1ab2.get('playfabID')}
**Email:** ${_0x1ab2.get('email')}
**Ban Reason:** ${_0x1ab2.get('reason')}
**Appeal Reason:** ${_0x1ab2.get('opinion')}
                    `,
                    color: 7506394
                }
            ]
        };

        console.log('Payload being sent to webhook:', JSON.stringify(_0x54ac, null, 2));
        fetch(_0x5601, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(_0x54ac)
        })
        .then(_0x6a3b => {
            console.log('Response Status:', _0x6a3b.status);
            if (_0x6a3b.status !== 204) return _0x6a3b.json();
            return null;
        })
        .then(_0x7d4b => {
            if (_0x7d4b) {
                console.log('Success:', _0x7d4b);
            } else {
                console.log('No content returned from the webhook (204)');
            }
            alert('Your appeal has been submitted successfully!');
            _0x5c89.reset();
        })
        .catch(_0x4b6f => {
            console.error('Error submitting ban appeal:', _0x4b6f);
            alert('There was an error submitting your appeal. Please try again later.');
        });
    });

    _0x2d73.style.visibility = _0x25d8();
});
