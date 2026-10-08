const movies = [
    {
        id: 1,
        title: "3 Idiots",
        language: "Hindi",
        genre: "Comedy",
        year: 2009,
        rating: 8.4,
        description: "Three friends challenge the traditional education system.",
        colors: ["#2563eb", "#1e3a8a"]
    },
    {
        id: 2,
        title: "Dangal",
        language: "Hindi",
        genre: "Sports",
        year: 2016,
        rating: 8.3,
        description: "A father trains his daughters to become wrestling champions.",
        colors: ["#b45309", "#7c2d12"]
    },
    {
        id: 3,
        title: "Jawan",
        language: "Hindi",
        genre: "Action",
        year: 2023,
        rating: 7.0,
        description: "A mysterious jailer fights corruption with a fearless team.",
        colors: ["#991b1b", "#450a0a"]
    },
    {
        id: 4,
        title: "Pathaan",
        language: "Hindi",
        genre: "Action",
        year: 2023,
        rating: 5.8,
        description: "An elite spy returns to protect his country.",
        colors: ["#1d4ed8", "#172554"]
    },
    {
        id: 5,
        title: "Zindagi Na Milegi Dobara",
        language: "Hindi",
        genre: "Drama",
        year: 2011,
        rating: 8.2,
        description: "Three friends discover friendship and freedom on a road trip.",
        colors: ["#ea580c", "#7c2d12"]
    },
    {
        id: 6,
        title: "Lagaan",
        language: "Hindi",
        genre: "Sports",
        year: 2001,
        rating: 8.1,
        description: "Villagers challenge an empire to a historic cricket match.",
        colors: ["#ca8a04", "#713f12"]
    },
    {
        id: 7,
        title: "Kabir Singh",
        language: "Hindi",
        genre: "Romance",
        year: 2019,
        rating: 7.0,
        description: "A troubled surgeon struggles with love and self-destruction.",
        colors: ["#be123c", "#4c0519"]
    },
    {
        id: 8,
        title: "Kalki 2898 AD",
        language: "Telugu",
        genre: "Sci-Fi",
        year: 2024,
        rating: 7.5,
        description: "An epic story connects ancient mythology with a futuristic world.",
        colors: ["#4c1d95", "#172554"]
    },
    {
        id: 9,
        title: "Baahubali: The Beginning",
        language: "Telugu",
        genre: "Epic",
        year: 2015,
        rating: 8.0,
        description: "A young warrior discovers his royal identity.",
        colors: ["#0369a1", "#172554"]
    },
    {
        id: 10,
        title: "Baahubali 2",
        language: "Telugu",
        genre: "Epic",
        year: 2017,
        rating: 8.2,
        description: "A prince uncovers the truth about his royal family.",
        colors: ["#0e7490", "#164e63"]
    },
    {
        id: 11,
        title: "RRR",
        language: "Telugu",
        genre: "Action",
        year: 2022,
        rating: 8.0,
        description: "Two revolutionaries form an unforgettable friendship.",
        colors: ["#b45309", "#7c2d12"]
    },
    {
        id: 12,
        title: "Pushpa: The Rise",
        language: "Telugu",
        genre: "Action",
        year: 2021,
        rating: 7.6,
        description: "A fearless laborer rises through a dangerous criminal world.",
        colors: ["#166534", "#365314"]
    },
    {
        id: 13,
        title: "Arjun Reddy",
        language: "Telugu",
        genre: "Romance",
        year: 2017,
        rating: 8.1,
        description: "A passionate medical student struggles after losing his love.",
        colors: ["#7f1d1d", "#450a0a"]
    },
    {
        id: 14,
        title: "Vikram",
        language: "Tamil",
        genre: "Action",
        year: 2022,
        rating: 8.3,
        description: "A special agent uncovers a dangerous criminal network.",
        colors: ["#991b1b", "#450a0a"]
    },
    {
        id: 15,
        title: "Leo",
        language: "Tamil",
        genre: "Action",
        year: 2023,
        rating: 7.2,
        description: "A peaceful café owner confronts his violent past.",
        colors: ["#334155", "#020617"]
    },
    {
        id: 16,
        title: "Enthiran",
        language: "Tamil",
        genre: "Sci-Fi",
        year: 2010,
        rating: 7.1,
        description: "A scientist creates a powerful robot with dangerous emotions.",
        colors: ["#0891b2", "#164e63"]
    },
    {
        id: 17,
        title: "Ponniyin Selvan",
        language: "Tamil",
        genre: "Epic",
        year: 2022,
        rating: 7.6,
        description: "A historical adventure filled with royal conspiracies.",
        colors: ["#a16207", "#422006"]
    },
    {
        id: 18,
        title: "Jailer",
        language: "Tamil",
        genre: "Action",
        year: 2023,
        rating: 7.0,
        description: "A retired prison officer returns to action.",
        colors: ["#374151", "#111827"]
    },
    {
        id: 19,
        title: "K.G.F Chapter 1",
        language: "Kannada",
        genre: "Action",
        year: 2018,
        rating: 8.2,
        description: "A determined man rises to control a powerful gold empire.",
        colors: ["#ca8a04", "#451a03"]
    },
    {
        id: 20,
        title: "K.G.F Chapter 2",
        language: "Kannada",
        genre: "Action",
        year: 2022,
        rating: 8.3,
        description: "Rocky faces powerful enemies while protecting his empire.",
        colors: ["#92400e", "#1c1917"]
    },
    {
        id: 21,
        title: "Kantara",
        language: "Kannada",
        genre: "Mystery",
        year: 2022,
        rating: 8.6,
        description: "Tradition, nature, and conflict meet in a folk mystery.",
        colors: ["#65a30d", "#365314"]
    },
    {
        id: 22,
        title: "777 Charlie",
        language: "Kannada",
        genre: "Adventure",
        year: 2022,
        rating: 8.8,
        description: "A lonely man discovers a new purpose through a dog.",
        colors: ["#0891b2", "#164e63"]
    },
    {
        id: 23,
        title: "Drishyam",
        language: "Malayalam",
        genre: "Thriller",
        year: 2013,
        rating: 8.6,
        description: "An ordinary family protects itself after an unexpected incident.",
        colors: ["#166534", "#052e16"]
    },
    {
        id: 24,
        title: "Manjummel Boys",
        language: "Malayalam",
        genre: "Adventure",
        year: 2024,
        rating: 8.3,
        description: "Friends risk everything to rescue one of their own.",
        colors: ["#0f766e", "#134e4a"]
    },
    {
        id: 25,
        title: "2018",
        language: "Malayalam",
        genre: "Drama",
        year: 2023,
        rating: 8.0,
        description: "Ordinary people unite during a devastating natural disaster.",
        colors: ["#0284c7", "#075985"]
    },
    {
        id: 26,
        title: "Kumbalangi Nights",
        language: "Malayalam",
        genre: "Drama",
        year: 2019,
        rating: 8.5,
        description: "Four brothers learn about love, family, and belonging.",
        colors: ["#0f766e", "#134e4a"]
    },
    {
        id: 27,
        title: "The Dark Knight",
        language: "English",
        genre: "Action",
        year: 2008,
        rating: 9.0,
        description: "Batman faces a criminal mastermind in Gotham City.",
        colors: ["#111827", "#374151"]
    },
    {
        id: 28,
        title: "Avengers Endgame",
        language: "English",
        genre: "Action",
        year: 2019,
        rating: 8.4,
        description: "The Avengers make one final attempt to reverse a devastating loss.",
        colors: ["#7c2d12", "#1e3a8a"]
    },
    {
        id: 29,
        title: "Avatar",
        language: "English",
        genre: "Sci-Fi",
        year: 2009,
        rating: 7.8,
        description: "A marine discovers a new world and fights for its people.",
        colors: ["#0369a1", "#164e63"]
    },
    {
        id: 30,
        title: "Inception",
        language: "English",
        genre: "Sci-Fi",
        year: 2010,
        rating: 8.8,
        description: "A team enters dreams to plant an idea in a target's mind.",
        colors: ["#4338ca", "#1e1b4b"]
    },
    {
        id: 31,
        title: "Interstellar",
        language: "English",
        genre: "Sci-Fi",
        year: 2014,
        rating: 8.7,
        description: "Explorers travel beyond the galaxy to find a new home.",
        colors: ["#312e81", "#0f172a"]
    },
    {
        id: 32,
        title: "Titanic",
        language: "English",
        genre: "Romance",
        year: 1997,
        rating: 7.9,
        description: "A powerful romance unfolds aboard the historic Titanic.",
        colors: ["#0369a1", "#172554"]
    },
    {
        id: 33,
        title: "Top Gun Maverick",
        language: "English",
        genre: "Action",
        year: 2022,
        rating: 8.2,
        description: "A legendary pilot trains a new generation for a mission.",
        colors: ["#1d4ed8", "#0c4a6e"]
    },
    {
        id: 34,
        title: "The Lord of the Rings",
        language: "English",
        genre: "Fantasy",
        year: 2001,
        rating: 8.8,
        description: "A young hobbit begins a dangerous journey to destroy a ring.",
        colors: ["#365314", "#422006"]
    },
    {
        id: 35,
        title: "Parasite",
        language: "Korean",
        genre: "Thriller",
        year: 2019,
        rating: 8.5,
        description: "Two families from opposite sides of society become connected.",
        colors: ["#334155", "#020617"]
    },
    {
        id: 36,
        title: "Train to Busan",
        language: "Korean",
        genre: "Horror",
        year: 2016,
        rating: 7.6,
        description: "Passengers fight for survival during a zombie outbreak.",
        colors: ["#7f1d1d", "#111827"]
    },
    {
        id: 37,
        title: "The Handmaiden",
        language: "Korean",
        genre: "Mystery",
        year: 2016,
        rating: 8.1,
        description: "A mystery unfolds through deception and hidden identities.",
        colors: ["#9f1239", "#4c0519"]
    },
    {
        id: 38,
        title: "Your Name",
        language: "Japanese",
        genre: "Romance",
        year: 2016,
        rating: 8.4,
        description: "Two teenagers mysteriously switch bodies across time and distance.",
        colors: ["#7c3aed", "#4c1d95"]
    },
    {
        id: 39,
        title: "Spirited Away",
        language: "Japanese",
        genre: "Fantasy",
        year: 2001,
        rating: 8.6,
        description: "A girl enters a magical world to save her parents.",
        colors: ["#0f766e", "#164e63"]
    },
    {
        id: 40,
        title: "Demon Slayer Mugen Train",
        language: "Japanese",
        genre: "Action",
        year: 2020,
        rating: 8.2,
        description: "Demon slayers face a powerful enemy aboard a train.",
        colors: ["#dc2626", "#7f1d1d"]
    },
    {
        id: 41,
        title: "Pan's Labyrinth",
        language: "Spanish",
        genre: "Fantasy",
        year: 2006,
        rating: 8.2,
        description: "A girl escapes into a mysterious fantasy world during wartime.",
        colors: ["#166534", "#14532d"]
    },
    {
        id: 42,
        title: "The Invisible Guest",
        language: "Spanish",
        genre: "Mystery",
        year: 2016,
        rating: 8.0,
        description: "A lawyer and businessman investigate a locked-room mystery.",
        colors: ["#475569", "#0f172a"]
    },
    {
        id: 43,
        title: "Money Heist",
        language: "Spanish",
        genre: "Crime",
        year: 2020,
        rating: 7.8,
        description: "A clever group plans an ambitious robbery.",
        colors: ["#b91c1c", "#450a0a"]
    },
    {
        id: 44,
        title: "Amelie",
        language: "French",
        genre: "Romance",
        year: 2001,
        rating: 8.3,
        description: "A young woman secretly improves the lives of people around her.",
        colors: ["#dc2626", "#713f12"]
    },
    {
        id: 45,
        title: "The Intouchables",
        language: "French",
        genre: "Comedy",
        year: 2011,
        rating: 8.5,
        description: "An unlikely friendship changes two very different lives.",
        colors: ["#0891b2", "#1e40af"]
    },
    {
        id: 46,
        title: "Sairat",
        language: "Marathi",
        genre: "Romance",
        year: 2016,
        rating: 8.2,
        description: "A young couple challenges social boundaries for love.",
        colors: ["#be123c", "#701a75"]
    },
    {
        id: 47,
        title: "Killa",
        language: "Marathi",
        genre: "Drama",
        year: 2014,
        rating: 7.8,
        description: "A boy adjusts to a new town and discovers friendship.",
        colors: ["#0369a1", "#164e63"]
    },
    {
        id: 48,
        title: "Chhichhore",
        language: "Hindi",
        genre: "Drama",
        year: 2019,
        rating: 8.0,
        description: "Friends teach an important lesson about failure and success.",
        colors: ["#7c3aed", "#312e81"]
    },
    {
        id: 49,
        title: "Gully Boy",
        language: "Hindi",
        genre: "Music",
        year: 2019,
        rating: 7.9,
        description: "A young rapper fights social limits to find his voice.",
        colors: ["#db2777", "#4c1d95"]
    },
    {
        id: 50,
        title: "The Greatest Showman",
        language: "English",
        genre: "Music",
        year: 2017,
        rating: 7.5,
        description: "A dreamer creates a spectacular show celebrating individuality.",
        colors: ["#9333ea", "#be123c"]
    }
];

let watchlist = JSON.parse(
    localStorage.getItem("cineverseWatchlist")
) || [];

let watchedMovies = JSON.parse(
    localStorage.getItem("cineverseWatched")
) || [];

const movieGrid = document.getElementById("movieGrid");
const watchlistGrid = document.getElementById("watchlistGrid");
const emptyState = document.getElementById("emptyState");
const emptyWatchlist = document.getElementById("emptyWatchlist");

const searchInput = document.getElementById("searchInput");
const languageFilter = document.getElementById("languageFilter");
const genreFilter = document.getElementById("genreFilter");
const statusFilter = document.getElementById("statusFilter");
const languageChips = document.getElementById("languageChips");

const totalMovies = document.getElementById("totalMovies");
const watchlistCount = document.getElementById("watchlistCount");
const watchedCount = document.getElementById("watchedCount");
const languageCount = document.getElementById("languageCount");

const toast = document.getElementById("toast");
const themeToggle = document.getElementById("themeToggle");

function getUniqueValues(property) {
    return [...new Set(movies.map(movie => movie[property]))].sort();
}

function setupFilters() {
    getUniqueValues("language").forEach(language => {
        languageFilter.innerHTML += `
            <option value="${language}">${language}</option>
        `;

        languageChips.innerHTML += `
            <button
                class="language-chip"
                data-language="${language}"
            >
                ${language}
            </button>
        `;
    });

    getUniqueValues("genre").forEach(genre => {
        genreFilter.innerHTML += `
            <option value="${genre}">${genre}</option>
        `;
    });

    document.querySelectorAll(".language-chip").forEach(chip => {
        chip.addEventListener("click", () => {
            const language = chip.dataset.language;

            if (languageFilter.value === language) {
                languageFilter.value = "all";
            } else {
                languageFilter.value = language;
            }

            updateLanguageChips();
            renderMovies();
        });
    });
}

function createMovieCard(movie) {
    const isSaved = watchlist.includes(movie.id);
    const isWatched = watchedMovies.includes(movie.id);

    return `
        <article class="movie-card">
            <div
                class="movie-poster"
                style="
                    --poster-one: ${movie.colors[0]};
                    --poster-two: ${movie.colors[1]};
                "
            >
                <div class="poster-top">
                    <span class="language-badge">
                        ${movie.language}
                    </span>

                    <span class="rating-badge">
                        ⭐ ${movie.rating}
                    </span>
                </div>

                <div>
                    <h3 class="poster-title">
                        ${movie.title}
                    </h3>

                    <p class="poster-year">
                        ${movie.year}
                    </p>
                </div>
            </div>

            <div class="movie-info">
                <h3>${movie.title}</h3>

                <div class="movie-meta">
                    <span>${movie.genre}</span>
                    <span>${movie.language}</span>
                </div>

                <p class="movie-description">
                    ${movie.description}
                </p>

                <div class="card-actions">
                    <button
                        class="watchlist-button ${isSaved ? "saved" : ""}"
                        data-action="watchlist"
                        data-id="${movie.id}"
                    >
                        ${isSaved ? "✓ Saved" : "+ Watchlist"}
                    </button>

                    <button
                        class="watched-button ${isWatched ? "done" : ""}"
                        data-action="watched"
                        data-id="${movie.id}"
                    >
                        ${isWatched ? "✓ Watched" : "Mark Watched"}
                    </button>
                </div>
            </div>
        </article>
    `;
}

function getFilteredMovies() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const selectedLanguage = languageFilter.value;
    const selectedGenre = genreFilter.value;
    const selectedStatus = statusFilter.value;

    return movies.filter(movie => {
        const searchableText = `
            ${movie.title}
            ${movie.language}
            ${movie.genre}
            ${movie.description}
        `.toLowerCase();

        const matchesSearch = searchableText.includes(searchTerm);

        const matchesLanguage =
            selectedLanguage === "all" ||
            movie.language === selectedLanguage;

        const matchesGenre =
            selectedGenre === "all" ||
            movie.genre === selectedGenre;

        let matchesStatus = true;

        if (selectedStatus === "watchlist") {
            matchesStatus = watchlist.includes(movie.id);
        }

        if (selectedStatus === "watched") {
            matchesStatus = watchedMovies.includes(movie.id);
        }

        if (selectedStatus === "unwatched") {
            matchesStatus = !watchedMovies.includes(movie.id);
        }

        return (
            matchesSearch &&
            matchesLanguage &&
            matchesGenre &&
            matchesStatus
        );
    });
}

function renderMovies() {
    const filteredMovies = getFilteredMovies();

    movieGrid.innerHTML = filteredMovies
        .map(movie => createMovieCard(movie))
        .join("");

    emptyState.classList.toggle(
        "hidden",
        filteredMovies.length > 0
    );

    attachButtonEvents();
    updateStats();
}

function renderWatchlist() {
    const savedMovies = movies.filter(movie =>
        watchlist.includes(movie.id)
    );

    watchlistGrid.innerHTML = savedMovies
        .map(movie => createMovieCard(movie))
        .join("");

    emptyWatchlist.classList.toggle(
        "hidden",
        savedMovies.length > 0
    );

    attachButtonEvents();
}

function attachButtonEvents() {
    document
        .querySelectorAll("[data-action='watchlist']")
        .forEach(button => {
            button.addEventListener("click", () => {
                const movieId = Number(button.dataset.id);
                toggleWatchlist(movieId);
            });
        });

    document
        .querySelectorAll("[data-action='watched']")
        .forEach(button => {
            button.addEventListener("click", () => {
                const movieId = Number(button.dataset.id);
                toggleWatched(movieId);
            });
        });
}

function toggleWatchlist(movieId) {
    if (watchlist.includes(movieId)) {
        watchlist = watchlist.filter(id => id !== movieId);
        showToast("Removed from watchlist");
    } else {
        watchlist.push(movieId);
        showToast("Added to watchlist");
    }

    saveData();
    renderMovies();
    renderWatchlist();
}

function toggleWatched(movieId) {
    if (watchedMovies.includes(movieId)) {
        watchedMovies = watchedMovies.filter(id => id !== movieId);
        showToast("Marked as unwatched");
    } else {
        watchedMovies.push(movieId);
        showToast("Marked as watched");
    }

    saveData();
    renderMovies();
    renderWatchlist();
}

function saveData() {
    localStorage.setItem(
        "cineverseWatchlist",
        JSON.stringify(watchlist)
    );

    localStorage.setItem(
        "cineverseWatched",
        JSON.stringify(watchedMovies)
    );
}

function updateStats() {
    const languages = new Set(
        movies.map(movie => movie.language)
    );

    totalMovies.textContent = movies.length;
    watchlistCount.textContent = watchlist.length;
    watchedCount.textContent = watchedMovies.length;
    languageCount.textContent = languages.size;
}

function updateLanguageChips() {
    document.querySelectorAll(".language-chip").forEach(chip => {
        chip.classList.toggle(
            "active",
            chip.dataset.language === languageFilter.value
        );
    });
}

function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2200);
}

function loadTheme() {
    const savedTheme = localStorage.getItem("cineverseTheme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");

        if (themeToggle) {
            themeToggle.textContent = "☀️ Light Mode";
        }
    }
}

searchInput.addEventListener("input", renderMovies);

languageFilter.addEventListener("change", () => {
    updateLanguageChips();
    renderMovies();
});

genreFilter.addEventListener("change", renderMovies);
statusFilter.addEventListener("change", renderMovies);

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    const darkMode = document.body.classList.contains("dark-mode");

    themeToggle.textContent = darkMode
        ? "☀️ Light Mode"
        : "🌙 Dark Mode";

    localStorage.setItem(
        "cineverseTheme",
        darkMode ? "dark" : "light"
    );
});

setupFilters();
loadTheme();
renderMovies();
renderWatchlist();
updateStats();