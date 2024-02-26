document.addEventListener('DOMContentLoaded', async () => {
    const gallery = document.getElementById('gallery');

    // Sample data with metadata links, image previews, and descriptions (replace with your own)
    const gamesAndApps = [
        { name: 'Base FarChess♟', metaLink: 'https://zora.co/collect/base:0x5f69da5da41e5472afb88fc291e7a92b7f15fbc5/6?referrer=0xb386c139442a81a482424F11214E70625A2c7109', imageSrc: 'img/bchess.png', 
        description: `A remix of the classic game of chess.<br>
        <br>-Player is the White Team. Refresh the page to reset the game. 
        <br>-Use the mouse to click, drag, and drop pieces on the board to make moves. 
        <br><br>This game uses the "minimax" JavaScript AI chess engine to calculate Black's moves.<br>
        <br>NOTE: If you get a "page unresponsive" Error, ignore it. The algo takes time to calculate, and it WILL move the opponent piece.` },
        { name: 'Chain Sweeper💣', metaLink: 'https://zora.co/collect/base:0x5f69da5da41e5472afb88fc291e7a92b7f15fbc5/2?referrer=0xb386c139442a81a482424F11214E70625A2c7109', imageSrc: 'img/sweep.png', 
        description: `An on-chain spinoff similar to the classic "Mine Sweepers".<br><br>
        -Uncover all the bomb by solving the puzzle and placing flags!<br>
        -10 bombs to find in each round.` },
        { name: 'Builder BLOX💠', metaLink: 'https://zora.co/collect/base:0x5f69da5da41e5472afb88fc291e7a92b7f15fbc5/5?referrer=0xb386c139442a81a482424F11214E70625A2c7109', imageSrc: 'img/bbt.png', 
        description: `Builder BLOX is a game similar to the classic "Tetris".<br>
        <br>Use arrow keys to move, and "up" arrow key to rotate blox.<br>
        <br>Features:
        <br>-Start/Pause
        <br>-Reset Game
        <br>-Difficulty(speed) increase every 20 points earned
        <br>-Point multipliers for clearing multiple rows` },
        { name: 'T-Rex Runner🦖', metaLink: 'https://zora.co/collect/base:0x5f69da5da41e5472afb88fc291e7a92b7f15fbc5/3?referrer=0xb386c139442a81a482424F11214E70625A2c7109', imageSrc: 'img/trex.png', 
        description: `Adapted from the Chrome offline hidden game.<br><br>
        -Click on the frame to focus the browser, then hit the spacebar to start the game.
        <br>-Use spacebar to jump, and down arrow to duck.

        ` },
        // Add more items as needed
    ];

    // Fetch and populate the gallery
    await Promise.all(gamesAndApps.map(async (item) => {
        const card = createCard(item);
        gallery.appendChild(card);
    }));

    // Load utility gallery
    const utilityGallery = document.getElementById('utilityGallery');
    if (utilityGallery) {
        await loadUtilityGallery();
    }
});

async function loadUtilityGallery() {
    const utilities = [
        { name: 'Base Bitcoin Halving Clock', metaLink: 'https://zora.co/collect/base:0x5f69da5da41e5472afb88fc291e7a92b7f15fbc5/1?referrer=0xb386c139442a81a482424F11214E70625A2c7109', imageSrc: 'img/bbc.png', 
        description: `Watch The Bitcoin Halving Countdown LIVE on-chain.<br><br>
        Have access to watching a piece of history right in your NFT collection!`  },
        { name: 'Compound Interest Calculator 98`', metaLink: 'https://zora.co/collect/base:0x5f69da5da41e5472afb88fc291e7a92b7f15fbc5/4?referrer=0xb386c139442a81a482424F11214E70625A2c7109', imageSrc: 'img/calc.png', 
        description: `A handy calculator for finding your accrued compounding interest for an investment over a set period of time.<br>
        <br>Features/Intructions:
        <br>-Set the APY percentage
        <br>-Define how often you add your earned interest into your capitol to earn more yield(Compounding Frequency)
        <br>-Enter your total amount originally invested
        <br>-Choose how long the investment will compound for, in years or months
        <br>-Select "Calculate", and the total shown is the amount of interst you will earn(it does not include your original investment amount)` },
        // Add more utility items as needed
    ];

    // Fetch and populate the utility gallery
    await Promise.all(utilities.map(async (item) => {
        const card = createCard(item);
        utilityGallery.appendChild(card);
    }));
}

// Inside the createCard function in your JavaScript code
function createCard(item) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.style.background = 'linear-gradient(45deg, #FFE018, #FF6C00, #FF0074)';

    const title = document.createElement('h2');
    title.textContent = item.name;

    const description = document.createElement('p');
    description.innerHTML = item.description;

    const imagePreview = document.createElement('img');
    imagePreview.src = item.imageSrc;
    imagePreview.alt = item.name;

    card.appendChild(imagePreview);
    card.appendChild(title);
    card.appendChild(description);

    // Add event listeners for animations
    card.addEventListener('mouseover', () => {
        card.style.transform = 'scale(1.05)';
    });

    card.addEventListener('mouseout', () => {
        card.style.transform = 'scale(1)';
    });

    card.addEventListener('click', () => {
        window.open(item.metaLink, '_blank');
    });

    return card;
}



