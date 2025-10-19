// Application state - stored in memory only
let appState = {
    users: [
        { name: 'Demo User', email: 'demo@example.com', username: 'demo', password: 'demo123' }
    ],
    currentUser: null,
    currentPage: 'login',
    currentArtwork: null
};

// Artwork data with real image URLs from the provided data
const artworks = [
    {
        id: 1,
        title: "Mona Lisa",
        artist: "Leonardo da Vinci",
        year: 1503,
        description: "The world's most famous artwork, the Mona Lisa draws thousands of visitors to the Louvre Museum each day. The subject's enigmatic smile and mysterious gaze have captivated viewers for centuries. This Renaissance masterpiece showcases da Vinci's mastery of sfumato technique.",
        category: "Renaissance",
        image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/800px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
        similar_works: [
            {
                title: "The Last Supper",
                artist: "Leonardo da Vinci",
                ref_id: 2,
                image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/%C3%9Altima_Cena_-_Da_Vinci_5.jpg/1200px-%C3%9Altima_Cena_-_Da_Vinci_5.jpg"
            },
            {
                title: "Lady with an Ermine",
                artist: "Leonardo da Vinci",
                ref_id: 3,
                image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Lady_with_an_Ermine_-_Leonardo_da_Vinci_-_Google_Art_Project.jpg/800px-Lady_with_an_Ermine_-_Leonardo_da_Vinci_-_Google_Art_Project.jpg"
            }
        ]
    },
    {
        id: 2,
        title: "The Last Supper",
        artist: "Leonardo da Vinci",
        year: 1498,
        description: "This famous fresco depicts Jesus' last supper with his twelve apostles before his betrayal and arrest. The painting showcases Leonardo's mastery of composition and perspective, creating a powerful narrative moment frozen in time.",
        category: "Renaissance",
        image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/%C3%9Altima_Cena_-_Da_Vinci_5.jpg/1200px-%C3%9Altima_Cena_-_Da_Vinci_5.jpg",
        similar_works: [
            {
                title: "Mona Lisa",
                artist: "Leonardo da Vinci",
                ref_id: 1,
                image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/800px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg"
            },
            {
                title: "The Creation of Adam",
                artist: "Michelangelo",
                ref_id: 4,
                image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg/1200px-Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg"
            }
        ]
    },
    {
        id: 3,
        title: "Lady with an Ermine",
        artist: "Leonardo da Vinci",
        year: 1489,
        description: "This portrait is believed to depict Cecilia Gallerani, the mistress of Leonardo's patron. The painting demonstrates Leonardo's knowledge of anatomy and ability to capture personality through posture and expression. The ermine she holds was a symbol of purity.",
        category: "Renaissance",
        image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Lady_with_an_Ermine_-_Leonardo_da_Vinci_-_Google_Art_Project.jpg/800px-Lady_with_an_Ermine_-_Leonardo_da_Vinci_-_Google_Art_Project.jpg",
        similar_works: [
            {
                title: "Mona Lisa",
                artist: "Leonardo da Vinci",
                ref_id: 1,
                image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/800px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg"
            },
            {
                title: "Girl with a Pearl Earring",
                artist: "Johannes Vermeer",
                ref_id: 5,
                image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/1665_Girl_with_a_Pearl_Earring.jpg/800px-1665_Girl_with_a_Pearl_Earring.jpg"
            }
        ]
    },
    {
        id: 4,
        title: "The Creation of Adam",
        artist: "Michelangelo",
        year: 1511,
        description: "This iconic fresco adorns the ceiling of the Sistine Chapel in Vatican City. It depicts God giving life to Adam through the famous near-touching hands. The work represents ideal human form and divine creation, becoming one of the most recognized images in art history.",
        category: "Renaissance",
        image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg/1200px-Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg",
        similar_works: [
            {
                title: "The Last Supper",
                artist: "Leonardo da Vinci",
                ref_id: 2,
                image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/%C3%9Altima_Cena_-_Da_Vinci_5.jpg/1200px-%C3%9Altima_Cena_-_Da_Vinci_5.jpg"
            },
            {
                title: "Mona Lisa",
                artist: "Leonardo da Vinci",
                ref_id: 1,
                image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/800px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg"
            }
        ]
    },
    {
        id: 5,
        title: "Girl with a Pearl Earring",
        artist: "Johannes Vermeer",
        year: 1665,
        description: "Often referred to as the 'Mona Lisa of the North', this masterpiece captures a girl with an enigmatic expression wearing an exotic turban and a large pearl earring. The painting is celebrated for its intimate composition and masterful use of light.",
        category: "Dutch Golden Age",
        image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/1665_Girl_with_a_Pearl_Earring.jpg/800px-1665_Girl_with_a_Pearl_Earring.jpg",
        similar_works: [
            {
                title: "Lady with an Ermine",
                artist: "Leonardo da Vinci",
                ref_id: 3,
                image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Lady_with_an_Ermine_-_Leonardo_da_Vinci_-_Google_Art_Project.jpg/800px-Lady_with_an_Ermine_-_Leonardo_da_Vinci_-_Google_Art_Project.jpg"
            },
            {
                title: "Mona Lisa",
                artist: "Leonardo da Vinci",
                ref_id: 1,
                image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/800px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg"
            }
        ]
    },
    {
        id: 6,
        title: "Starry Night",
        artist: "Vincent van Gogh",
        year: 1889,
        description: "One of the most recognized paintings in modern art, Starry Night depicts the view from Van Gogh's asylum room window at night. The swirling sky, vibrant stars, and cypress tree showcase Van Gogh's unique post-impressionist style and emotional intensity.",
        category: "Post-Impressionism",
        image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1200px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
        similar_works: [
            {
                title: "The Persistence of Memory",
                artist: "Salvador Dali",
                ref_id: 7,
                image_url: "https://upload.wikimedia.org/wikipedia/en/d/dd/The_Persistence_of_Memory.jpg"
            },
            {
                title: "The Scream",
                artist: "Edvard Munch",
                ref_id: 8,
                image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg/800px-Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg"
            }
        ]
    },
    {
        id: 7,
        title: "The Persistence of Memory",
        artist: "Salvador Dali",
        year: 1931,
        description: "This surrealist masterpiece features melting clocks in a dreamlike landscape. The painting represents Dali's theory of 'Softness and Hardness' and has become an iconic symbol of surrealism, exploring themes of time, memory, and reality.",
        category: "Surrealism",
        image_url: "https://upload.wikimedia.org/wikipedia/en/d/dd/The_Persistence_of_Memory.jpg",
        similar_works: [
            {
                title: "Starry Night",
                artist: "Vincent van Gogh",
                ref_id: 6,
                image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1200px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg"
            },
            {
                title: "The Scream",
                artist: "Edvard Munch",
                ref_id: 8,
                image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg/800px-Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg"
            }
        ]
    },
    {
        id: 8,
        title: "The Scream",
        artist: "Edvard Munch",
        year: 1893,
        description: "This iconic expressionist painting depicts an agonized figure against a tumultuous orange sky. The painting represents universal anxiety and existential dread, with the blood-red sunset reflecting the emotional turmoil of the central figure.",
        category: "Expressionism",
        image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg/800px-Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg",
        similar_works: [
            {
                title: "Starry Night",
                artist: "Vincent van Gogh",
                ref_id: 6,
                image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1200px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg"
            },
            {
                title: "The Persistence of Memory",
                artist: "Salvador Dali",
                ref_id: 7,
                image_url: "https://upload.wikimedia.org/wikipedia/en/d/dd/The_Persistence_of_Memory.jpg"
            }
        ]
    }
];

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    // Check if user should be logged in (for demo purposes, we'll start with login page)
    navigateTo('login');
});

// Navigation functions
function navigateTo(page, artworkId = null) {
    showLoading();
    
    setTimeout(() => {
        // Hide all pages
        document.querySelectorAll('.page-container').forEach(container => {
            container.classList.remove('active');
        });
        
        // Update navigation active states
        updateNavigation(page);
        
        // Handle different pages
        switch(page) {
            case 'login':
                showPage('login-page');
                hideNavbar();
                break;
            case 'signup':
                showPage('signup-page');
                hideNavbar();
                break;
            case 'gallery-home':
                if (!appState.currentUser) {
                    navigateTo('login');
                    return;
                }
                showPage('gallery-home-page');
                showNavbar();
                break;
            case 'art-display':
                if (!appState.currentUser) {
                    navigateTo('login');
                    return;
                }
                showPage('art-display-page');
                loadArtGrid();
                showNavbar();
                break;
            case 'art-detail':
                if (!appState.currentUser) {
                    navigateTo('login');
                    return;
                }
                if (artworkId) {
                    showPage('art-detail-page');
                    loadArtDetail(artworkId);
                    showNavbar();
                }
                break;
        }
        
        appState.currentPage = page;
        hideLoading();
    }, 300);
}

function showPage(pageId) {
    const page = document.getElementById(pageId);
    if (page) {
        page.classList.add('active');
    }
}

function showNavbar() {
    const navbar = document.getElementById('navbar');
    const mainContent = document.querySelector('.main-content');
    navbar.style.display = 'block';
    mainContent.classList.add('with-navbar');
    
    // Update user name in navbar
    if (appState.currentUser) {
        document.getElementById('currentUser').textContent = appState.currentUser.name;
    }
}

function hideNavbar() {
    const navbar = document.getElementById('navbar');
    const mainContent = document.querySelector('.main-content');
    navbar.style.display = 'none';
    mainContent.classList.remove('with-navbar');
}

function updateNavigation(currentPage) {
    document.querySelectorAll('.nav-link[data-page]').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-page') === currentPage) {
            link.classList.add('active');
        }
    });
}

// Loading functions
function showLoading() {
    document.getElementById('loadingOverlay').classList.add('show');
}

function hideLoading() {
    document.getElementById('loadingOverlay').classList.remove('show');
}

// Authentication functions
function handleLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    const errorDiv = document.getElementById('loginError');
    
    // Find user
    const user = appState.users.find(u => u.username === username && u.password === password);
    
    if (user) {
        appState.currentUser = user;
        navigateTo('gallery-home');
        document.getElementById('loginForm').reset();
        errorDiv.style.display = 'none';
    } else {
        errorDiv.textContent = 'Invalid username or password';
        errorDiv.style.display = 'block';
        
        // Add shake animation to form
        const form = document.getElementById('loginForm');
        form.style.animation = 'shake 0.5s ease-in-out';
        setTimeout(() => {
            form.style.animation = '';
        }, 500);
    }
}

function handleSignup(event) {
    event.preventDefault();
    
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;
    const errorDiv = document.getElementById('signupError');
    const successDiv = document.getElementById('signupSuccess');
    
    // Check if username already exists
    const existingUser = appState.users.find(u => u.username === username);
    
    if (existingUser) {
        errorDiv.textContent = 'Username already exists';
        errorDiv.style.display = 'block';
        successDiv.style.display = 'none';
        return;
    }
    
    // Check if email already exists
    const existingEmail = appState.users.find(u => u.email === email);
    
    if (existingEmail) {
        errorDiv.textContent = 'Email already registered';
        errorDiv.style.display = 'block';
        successDiv.style.display = 'none';
        return;
    }
    
    // Add new user
    const newUser = { name, email, username, password };
    appState.users.push(newUser);
    
    // Show success message
    successDiv.textContent = 'Account created successfully! Redirecting to login...';
    successDiv.style.display = 'block';
    errorDiv.style.display = 'none';
    
    // Reset form
    document.getElementById('signupForm').reset();
    
    // Redirect to login after 2 seconds
    setTimeout(() => {
        navigateTo('login');
    }, 2000);
}

function logout() {
    appState.currentUser = null;
    navigateTo('login');
}

// Art gallery functions
function loadArtGrid() {
    const artGrid = document.getElementById('artGrid');
    artGrid.innerHTML = '';
    
    artworks.forEach(artwork => {
        const artCard = createArtCard(artwork);
        artGrid.appendChild(artCard);
    });
}

function createArtCard(artwork) {
    const col = document.createElement('div');
    col.className = 'col-lg-4 col-md-6 col-sm-12';
    
    col.innerHTML = `
        <div class="art-card animate-fade-in" onclick="navigateTo('art-detail', ${artwork.id})">
            <div class="position-relative overflow-hidden">
                <img src="${artwork.image_url}" 
                     alt="${artwork.title} by ${artwork.artist}" 
                     class="art-card-image" 
                     loading="lazy"
                     onerror="this.src='https://via.placeholder.com/400x250/667eea/ffffff?text=Image+Not+Available'">
                <div class="position-absolute top-0 end-0 m-2">
                    <span class="badge bg-primary">${artwork.category}</span>
                </div>
            </div>
            <div class="art-card-body">
                <h5 class="art-card-title">${artwork.title}</h5>
                <p class="art-card-artist">by ${artwork.artist}</p>
                <div class="d-flex justify-content-between align-items-center">
                    <small class="text-muted">${artwork.year}</small>
                    <button class="btn btn-outline-primary btn-sm" onclick="event.stopPropagation(); navigateTo('art-detail', ${artwork.id})">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    `;
    
    return col;
}

function loadArtDetail(artworkId) {
    const artwork = artworks.find(art => art.id === artworkId);
    if (!artwork) return;
    
    appState.currentArtwork = artwork;
    
    // Update breadcrumb
    document.getElementById('artBreadcrumb').textContent = artwork.title;
    
    // Update main content
    const artDetailImage = document.getElementById('artDetailImage');
    artDetailImage.src = artwork.image_url;
    artDetailImage.alt = `${artwork.title} by ${artwork.artist}`;
    artDetailImage.loading = 'eager';
    artDetailImage.onerror = function() {
        this.src = 'https://via.placeholder.com/800x600/667eea/ffffff?text=Image+Not+Available';
    };
    document.getElementById('artDetailTitle').textContent = artwork.title;
    document.getElementById('artDetailArtist').textContent = artwork.artist;
    document.getElementById('artDetailYear').textContent = artwork.year;
    document.getElementById('artDetailCategory').textContent = artwork.category;
    document.getElementById('artDetailDescription').textContent = artwork.description;
    
    // Load similar artworks
    loadSimilarArtworks(artwork.similar_works);
}

function loadSimilarArtworks(similarWorks) {
    const container = document.getElementById('similarArtworks');
    container.innerHTML = '';
    
    similarWorks.forEach(work => {
        // Use the image_url directly from similar_works data or find the artwork
        const imageUrl = work.image_url || (function() {
            const similarArt = artworks.find(art => art.id === work.ref_id);
            return similarArt ? similarArt.image_url : 'https://via.placeholder.com/300x150/764ba2/ffffff?text=Image+Not+Available';
        })();
        
        const col = document.createElement('div');
        col.className = 'col-lg-4 col-md-6 col-sm-12';
        
        col.innerHTML = `
            <div class="similar-art-card" onclick="navigateTo('art-detail', ${work.ref_id})">
                <img src="${imageUrl}" 
                     alt="${work.title} by ${work.artist}" 
                     class="similar-art-image" 
                     loading="lazy"
                     onerror="this.src='https://via.placeholder.com/300x150/764ba2/ffffff?text=Image+Not+Available'">
                <div class="similar-art-body">
                    <h6 class="similar-art-title">${work.title}</h6>
                    <p class="similar-art-artist mb-0">by ${work.artist}</p>
                </div>
            </div>
        `;
        
        container.appendChild(col);
    });
}

// Form validation enhancement
function setupFormValidation() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        const inputs = form.querySelectorAll('input');
        
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateInput(this);
            });
            
            input.addEventListener('input', function() {
                if (this.classList.contains('is-invalid')) {
                    validateInput(this);
                }
            });
        });
    });
}

function validateInput(input) {
    const isValid = input.checkValidity();
    
    if (isValid) {
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
    } else {
        input.classList.remove('is-valid');
        input.classList.add('is-invalid');
    }
    
    return isValid;
}

// Initialize form validation when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    setupFormValidation();
});

// Add CSS animation for shake effect
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 20%, 40%, 60%, 80%, 100% {
            transform: translateX(0);
        }
        10%, 30%, 50%, 70%, 90% {
            transform: translateX(-10px);
        }
    }
`;
document.head.appendChild(style);

// Smooth scrolling for internal navigation
document.addEventListener('click', function(e) {
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});

// Handle browser back/forward buttons
window.addEventListener('popstate', function(e) {
    if (e.state && e.state.page) {
        navigateTo(e.state.page, e.state.artworkId);
    }
});

// Add history state when navigating
function addToHistory(page, artworkId = null) {
    const state = { page, artworkId };
    const url = artworkId ? `#${page}-${artworkId}` : `#${page}`;
    history.pushState(state, '', url);
}