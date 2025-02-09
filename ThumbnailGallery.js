const images = [
    { filename: "versusthumbnail11.png", tags: "blue, versus, 1v1, red vs blue, fight" },
    { filename: "GoldCrownedTank.png", tags: "Gold, yellow, crowned, tank, first, montage" },
    { filename: "Royalty.png", tags: "Royalty, montage, music, orange, gold, leader" },
    { filename: "HowProsDoIT.png", tags: "Gold, coins, gems, turorial, tips, guide, montage" },
    { filename: "WeaponStrategy.png", tags: "red, Weapons, strategy, turorial, tips, guide" },
    { filename: "Tetris.png", tags: "Tetris, colorful, montage, edit, music, blade" },
    { filename: "NewSeason.png", tags: "red, New, update, New Season, season, christmas, winter" },
    { filename: "BladeMontage.png", tags: "blue, blade, montage, aura, tank" },
    { filename: "RedMontage.png", tags: "Red, Montage, Tanks, leaders, versus" },
    { filename: "In The Sky.png", tags: "Blue, In the sky, music, tank, aura, montage" },
    { filename: "RBRMontages.png", tags: "Blue, green, brown, Logo, Montage, edit" },
    { filename: "Seaofproblems.png", tags: "Red, default, tank, music, aura, Sea of problems, Seaofproblems, montage" },
    { filename: "versusthumbnail12.png", tags: "colorful, versus, gold, black, dozer, tank, 1v1" },
    { filename: "Edit1.png", tags: "black, Edit, first, montage, edit, music" },
    { filename: "SecondVideo.png", tags: "blue, second, montage, aura, edit, New, tank" },
    { filename: "First Video.png", tags: "red, first, montage, aura, edit, New, tank" },
    { filename: "ERROR.png", tags: "Red, Glitch, music, montage, ERROR" },
    { filename: "FirstPlaceMontage.png", tags: "Gold, yellow, crowned, tank, first, montage, aura" },
    { filename: "Top10RBR.png", tags: "gold, yellow, video, top 10, leader" },
    { filename: "BiggestLegends.png", tags: "Gold, coins, crown, first, video, Biggest Rocket bot royale llegends, biggest legends" },
    { filename: "NoEscape.png", tags: "No escape, creepypasta, horror, black" },
    { filename: "Hamburger.png", tags: "Orange, food, montage, hamburger" },
    { filename: "FlakMeta.png", tags: "Yellow, Flak, montage, tips, tutorial, information" },
    { filename: "NostalgiaMontage2.png", tags: "white, red, nostalgia montage, montage" },
    { filename: "NostalgiaMontage1.png", tags: "white, blue, nostalgia montage, montage" },
    { filename: "versusthumbnail13.png", tags: "red, green, black, versus, colorful, montage, 1v1" },
    { filename: "bluemontage.png", tags: "blue, montage, purple, tank, music" },
    { filename: "Ratingmaps.png", tags: "Rating maps, informational, regular, maps, tips, guide" },
    { filename: "versusthumbnail10.png", tags: "orange, blue, versus, 1v1, tanks" },
    { filename: "versusthumbnail9.png", tags: "blue, red, versus, 1v1, tanks" },
    { filename: "versusthumbnail8.png", tags: "blue, red, versus, 1v1, tanks" },
    { filename: "versusthumbnail7.png", tags: "blue, yellow, purple, versus, 1v1, tanks" },
    { filename: "versusthumbnail6.png", tags: "black, blue, yellow, versus, 1v1, tanks" },
    { filename: "versusthumbnail5.png", tags: "yellow, blue, versus, 1v1, tanks" },
    { filename: "MakeCoolThumbnails.png", tags: "Make cool thuumbnails, tutorials, tips, youtube, guide, blue" },
    { filename: "versusthumbnail4.png", tags: "blue, red, versus, 1v1, tanks" },
    { filename: "versusthumbnail3.png", tags: "blue, red, versus, 1v1, tanks" },
    { filename: "versusthumbnail2.png", tags: "blue, red, versus, 1v1, tanks" },
    { filename: "Thumbnails.png", tags: "Rocket bot royale sercrets, hidden, cool, rbr secrets, guide, tips and tricks" },
    { filename: "Controllerprogression.png", tags: "controller progression, rocket bot royale, blue, montage, gameplay" },
    { filename: "Rankedchaos.png", tags: "blue, ranked, trophy, trophies, versus" },
    { filename: "100SubsMontage2.png", tags: "red, youtube, 100 subscribers, montage, special" },
    { filename: "100SubsMontage.png", tags: "red, youtube, 100 subscribers, montage, special" },
    { filename: "MusicalMontage.png", tags: "grey, blue, montage, music, fog" },
    { filename: "RBRGLITCH.png", tags: "glitch, tricks, secrets, youtube, rocket bot royale" },
    { filename: "RBR tips thumbnail.png", tags: "rocket bot royale, blue, tips, tricks, tutorials, videos, gameplay, youtube" },
    { filename: "redportal.png", tags: "red, portal, light, montage, gameplay" },
    { filename: "redtwistedlight.png", tags: "red, portal, light, aura, montage, gameplay" },
    { filename: "triplekill.png", tags: "triplekill, yellow, gold, blue, gameplay, montage" },
    { filename: "goldportalaura.png", tags: "gold, portal, light, aura, montage, gameplay" },
    { filename: "redportalaura.png", tags: "red, portal, light, aura, montage, gameplay" },
    { filename: "redblueportalaura.png", tags: "red, blue, portal, light, aura, montage, gameplay" },
    { filename: "cyanaura.png", tags: "cyan, blue, portal, light, aura, montage, gameplay" },
    { filename: "purpleportalaura.png", tags: "purple, portal, light, aura, montage, gameplay" },
    { filename: "trollingnoobs.png", tags: "blue, tank, trolling noobs, meme, montage, red, funny, goofy" },
    { filename: "newmemes.png", tags: "blue, tank, memes, new memes, montage, funny, goofy" },
    { filename: "newupdate.png", tags: "cyan, blue, new update, seasonal, change, informational" },
    { filename: "whiteray2.png", tags: "black, white, light, aura, montage, gameplay" },
    { filename: "whiteray1.png", tags: "white, black, light, aura, montage, gameplay" },
    { filename: "meme.png", tags: "memes, funny, montage, edit, goofy, silly, blue, dessert" },
    { filename: "trophy.png", tags: "trophy, gold, montage, edit, gain, winner, top" },
    { filename: "versus1.png", tags: "blue, red, versus, 1v1, video, montage, battle" },
    { filename: "versus2.png", tags: "blue, red, versus, 1v1, video, montage, battle" },
    { filename: "blueaura.png", tags: "blue, portal, light, aura, montage, gameplay" },
    { filename: "goldauramontage.png", tags: "gold, portal, light, aura, montage, gameplay, music" },
    { filename: "goldaura.png", tags: "gold, music, light, aura, montage, gameplay" },
    { filename: "goldwave.png", tags: "gold, gold wave, montage, cool, perspective, tank, music" },
    { filename: "crownedwoodentank.png", tags: "brown, wood, wood crown, tank, montage, first, beta" },
    { filename: "woodcrown.png", tags: "brown, first, wood, crown, beta, first place, monatge, early" },
    { filename: "boatswimmingongems.png", tags: "green, emerald, gems, boat, swimming, bling, aura, rich, montage, edit" },
    { filename: "first.png", tags: "gold, first place, crown, montage, edit, music" },
    { filename: "quadkill500.png", tags: "gold, gold badge, quad kill 500, montage, edit, music" },
    { filename: "quadkill100.png", tags: "purple, purple badge, quad kill 100, montage, edit, music" },
    { filename: "quadkill50.png", tags: "blue, blue badge, quad kill 50, montage, edit, music" },
    { filename: "quadkill25.png", tags: "green, green badge, quad kill 25, montage, edit, music" },
    { filename: "quadkill10.png", tags: "white, cyan, white badge, quad kill 10, montage, edit, music" },
    { filename: "quadkill.png", tags: "grey, grey badge, quad kill, montage, edit, music" },
    { filename: "youtubebadge.png", tags: "red, 100 subscribers, youtube, badge, milestone, montage, edit" },
    { filename: "goldtwitch.png", tags: "gold, gold badge, extra cool streamer, milestone, twitch, montage, edit, music" },
    { filename: "goldyoutube.png", tags: "gold, gold badge, youtube, 500 subscribers, milestone, montage, edit, music" }
    ];

// Get gallery container
const gallery = document.getElementById("imageGallery");

// Function to create image elements but defer loading
function createImageElement(image) {
    const div = document.createElement("div");
    div.className = "image-item";
    div.setAttribute("data-tags", image.tags.toLowerCase());

    const img = document.createElement("img");
    img.dataset.src = `images/${image.filename}`; 
    img.alt = image.filename;
    img.classList.add("lazy"); // Add lazy class

    img.onerror = function () {
        this.src = "ui/fallback.png"; // Fallback for missing images
    };

    const downloadBtn = document.createElement("a");
    downloadBtn.href = `images/${image.filename}`;
    downloadBtn.download = image.filename;
    downloadBtn.className = "download-button";
    downloadBtn.textContent = "Download";

    div.appendChild(img);
    div.appendChild(downloadBtn);
    return div;
}

// Function to display all images without loading them
function displayImages() {
    images.forEach(image => {
        gallery.appendChild(createImageElement(image));
    });

    // Activate lazy loading after adding all images
    lazyLoadImages();
}

// Lazy Load Function
function lazyLoadImages() {
    const lazyImages = document.querySelectorAll("img.lazy");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src; // Load image when in viewport
                img.classList.remove("lazy");
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => observer.observe(img));
}

// Search Function
function searchImages() {
    let query = document.getElementById("searchInput").value.toLowerCase();
    gallery.innerHTML = ""; // Clear gallery
    let filteredImages = images.filter(image => image.tags.toLowerCase().includes(query));

    filteredImages.forEach(image => {
        gallery.appendChild(createImageElement(image));
    });

    lazyLoadImages(); // Apply lazy loading after search
}

// Sort by Random
function sortByRandom() {
    const shuffledImages = [...images].sort(() => Math.random() - 0.5);
    displayImages(shuffledImages);
}

// Load all images initially
displayImages();
