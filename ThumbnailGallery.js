const images = [
    { filename: "pinkbubbles.png", tags: "pink, black, bubbles, wave, montage" },
    { filename: "pinkglass.png", tags: "pink, warm, tank, montage, beautiful thumbnail" },
    { filename: "pixel.png", tags: "pixel, blue, white, season points, season xp, grinding, montage" },
    { filename: "pixels.png", tags: "pixel, rays, blue, white, season points, season xp, grinding, montage" },
    { filename: "portalbottom1.png", tags: "gold, black, portal, ray, shine, cool, montage, tank" },
    { filename: "portalbottom2.png", tags: "blue, black, portal, ray, shine, cool, montage, tank" },
    { filename: "portalbottom3.png", tags: "blue, black, portal, ray, shine, cool, montage, tank" },
    { filename: "portalbottom4.png", tags: "gold, black, portal, ray, shine, cool, montage, tank" },
    { filename: "RBRGuide.png", tags: "guide, tutorial, tips and tricks, gold, helpful, explaining" },
    { filename: "100Hours.png", tags: "red, blue, 100 hours, montage" },
    { filename: "100Hours2.png", tags: "red, 100 hours, montage" },
    { filename: "Addict.png", tags: "Blue, Addict, montage" },
    { filename: "blueglass.png", tags: "Blue, blue glass, montage, simple" },
    { filename: "blueportalaura.png", tags: "Blue, Portal, aura, montage" },
    { filename: "crate.png", tags: "crate, grey, gray, opening" },
    { filename: "crates.png", tags: "crates, grey, gray, gold, opening" },
    { filename: "cratestanks.png", tags: "crates, colorful, blue, opening, mystery, tanks" },
    { filename: "crown.png", tags: "crown, gold, blue" },
    { filename: "crownedtank.png", tags: "crown, gold, tank, blue" },
    { filename: "elitecrate.png", tags: "gold, crate, opening, elite crate" },
    { filename: "escape1.png", tags: "escape, montage, tank, red" },
    { filename: "escape2.png", tags: "escape, montage, tank, blue" },
    { filename: "escape3.png", tags: "escape, montage, tank, white" },
    { filename: "escape4.png", tags: "escape, montage, wave, cyan, blue" },
    { filename: "glassbubble.png", tags: "pink, glass, bubble, tank, montage, black" },
    { filename: "gold leader.png", tags: "gold, crown, tank, montage, winner" },
    { filename: "goldrays.png", tags: "gold, black, rays, tank, montage" },
    { filename: "goldshine.png", tags: "gold, black, shine, tank, montage" },
    { filename: "goldspotlight.png", tags: "gold, black, shine, ray, spotlight, tank, rocket bot royale" },
    { filename: "How to design thumbnail.png", tags: "blue, tutorial, how to design thumbnail, how to design free rocket bot royale thumbnail" },
    { filename: "Islands.png", tags: "Blue, blade, black, Islands, montage" },
    { filename: "level50.png", tags: "level 50, gold, rocket bot royal level 50" },
    { filename: "light1.png", tags: "black, cyan, blue, light, spotlight, tank, montage" },
    { filename: "light2.png", tags: "black, blue, light, spotlight, tank, montage" },
    { filename: "light3.png", tags: "black, yellow, light, spotlight, tank, montage" },
    { filename: "light4.png", tags: "black, red, light, spotlight, tank, montage" },
    { filename: "nostalgialight.png", tags: "nostalgia, white, black, tank, montage" },
    { filename: "redlightbottom.png", tags: "spotlight, shine, red, black, tank, montage" },
    { filename: "redspotlight.png", tags: "spotlight, red, blue, black, tank, montage" },
    { filename: "switch games.png", tags: "Challenge, contest, blue, games, I lose, I switch games" },
    { filename: "tank.png", tags: "simple, tank, blue, montage" },
    { filename: "versusthumbnail1.png", tags: "versus, 1v1, fighting, montage, video, red vs blue" },
    { filename: "whitespotlight.png", tags: "white, spotlight, montage, black, tank, beautiful, rays, shine" },
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

// Create image elements (SEO-friendly but minimal)
function createImageElement(image) {
    const div = document.createElement("div");
    div.className = "image-item";
    div.setAttribute("data-tags", image.tags.toLowerCase());

    const img = document.createElement("img");
    img.src = `images/${image.filename}`;
    img.alt = image.tags; // Simple SEO alt text
    img.title = image.tags; // SEO title
    img.loading = "lazy"; // Native lazy loading (no extra JS)

    img.onerror = function () {
        this.src = "ui/fallback.png";
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

// Display images
function displayImages(imagesToDisplay = images) {
    gallery.innerHTML = "";
    imagesToDisplay.forEach(image => gallery.appendChild(createImageElement(image)));
}

// Search function (tags-based)
function searchImages() {
    let query = document.getElementById("searchInput").value.toLowerCase();
    let filteredImages = images.filter(image => image.tags.toLowerCase().includes(query));
    displayImages(filteredImages);
}

// Load all images initially
displayImages();