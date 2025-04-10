// Troll Website JavaScript - Redirects all clickable elements to troll pages

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle functionality
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const nav = document.querySelector('nav');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            nav.classList.toggle('mobile-open');
        });
    }
    
    // Fix issue with links not working
    // Get all important navigation links and ensure they work properly
    const importantLinks = document.querySelectorAll('a[href="./reviews/index.html"], a[href="../reviews/index.html"], a[href="troll-university.html"], a[href="index.html"], a[href="spin-wheel.html"]');
    
    importantLinks.forEach(link => {
        // Remove any click event listeners that might be interfering
        const oldLink = link.cloneNode(true);
        oldLink.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent other handlers from interfering
        });
        link.parentNode.replaceChild(oldLink, link);
    });
    
    // Elements that should always work properly (never redirect to troll pages)
    const excludedElements = [
        document.querySelector('.prize-button'),
        document.querySelector('.see-more-reviews'),
        document.getElementById('cursor-chaos'),
        document.getElementById('security-check'),
        document.getElementById('terms-link'),
        document.getElementById('forgot-password')
    ];
    
    // Also exclude nav links and important links
    const navLinks = document.querySelectorAll('nav a, .nav-links a, a[href="./reviews/index.html"], a[href="../reviews/index.html"]');
    // Add nav links to excluded elements
    navLinks.forEach(link => {
        excludedElements.push(link);
    });
    
    // Contact form buttons should work
    const contactButtons = document.querySelectorAll('.contact-form button, #contact button');
    contactButtons.forEach(button => {
        excludedElements.push(button);
    });
    
    // Check if we're on the reviews page
    const isReviewsPage = window.location.pathname.includes('/reviews/index.html');
    
    // Only apply troll behavior to elements with specific class 'troll-redirect'
    const trollRedirects = document.querySelectorAll('.troll-redirect');
    
    trollRedirects.forEach(element => {
        element.addEventListener('click', function(e) {
            // Prevent default action (like form submission or link navigation)
            e.preventDefault();
            
            // List of troll pages
            const trollPages = [
                'troll-pages/troll1/index.html',  // Classic Troll
                'troll-pages/troll2/index.html',  // Animated Troll
                'troll-pages/troll3/index.html',  // Earrape Troll
                'troll-pages/troll4/index.html',  // Fake Loading Troll
                'troll-pages/troll5/index.html',  // Jumpscare Troll
                'troll-pages/troll6/index.html',  // Fake Virus Scanner Troll
                'troll-pages/troll7/index.html'   // Impossible Maze Troll
            ];
            
            // Select a random troll page
            const randomTroll = trollPages[Math.floor(Math.random() * trollPages.length)];
            
            // Redirect to the selected troll page
            window.location.href = randomTroll;
        });
    });
});

// Troll Website Interactive Elements

/* Cursor Follower - REMOVED
document.addEventListener('DOMContentLoaded', function() {
    // Create cursor follower element
    const trollCursor = document.createElement('div');
    trollCursor.className = 'troll-cursor';
    trollCursor.innerHTML = `<img src="./images/5.png" alt="Troll Cursor" width="40" height="40">`;
    document.body.appendChild(trollCursor);

    // Position the follower with a delay
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    
    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function animate() {
        // Add lag to cursor follower
        const dx = mouseX - cursorX;
        const dy = mouseY - cursorY;
        
        cursorX += dx * 0.1;
        cursorY += dy * 0.1;
        
        trollCursor.style.left = cursorX + 'px';
        trollCursor.style.top = cursorY + 'px';
        
        requestAnimationFrame(animate);
    }
    
    animate();
});
*/

// Konami Code Easter Egg
let konamiCodeSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiCodePosition = 0;

document.addEventListener('keydown', function(e) {
    const key = e.key;
    const requiredKey = konamiCodeSequence[konamiCodePosition];
    
    if (key === requiredKey) {
        konamiCodePosition++;
        
        if (konamiCodePosition === konamiCodeSequence.length) {
            activateKonamiCode();
            konamiCodePosition = 0;
        }
    } else {
        konamiCodePosition = 0;
    }
});

function activateKonamiCode() {
    // Create the ultimate troll overlay
    const konamiOverlay = document.createElement('div');
    konamiOverlay.className = 'konami-overlay';
    konamiOverlay.innerHTML = `
        <div class="konami-content">
            <h2>KONAMI CODE ACTIVATED!</h2>
            <div class="dancing-trolls"></div>
            <p>You have unlocked the secret troll dance party!</p>
            <button id="closeKonami">Close</button>
        </div>
    `;
    document.body.appendChild(konamiOverlay);
    
    // Add dancing trolls
    const dancingTrolls = document.querySelector('.dancing-trolls');
    for (let i = 0; i < 10; i++) {
        const troll = document.createElement('img');
        troll.src = `./images/${(i % 8) + 1}.png`;
        troll.className = 'dancing-troll';
        troll.style.animationDelay = `${Math.random() * 2}s`;
        dancingTrolls.appendChild(troll);
    }
    
    // Play sound
    const audio = new Audio('https://www.myinstants.com/media/sounds/epic.mp3');
    audio.play();
    
    // Add close button functionality
    document.getElementById('closeKonami').addEventListener('click', function() {
        document.body.removeChild(konamiOverlay);
    });
}

// Hidden Easter Eggs
document.addEventListener('DOMContentLoaded', function() {
    // Add hidden clickable areas
    const easterEggAreas = [
        { selector: '.hero h1', sound: 'https://www.myinstants.com/media/sounds/trololo.mp3', message: 'You found the hidden troll song!' },
        { selector: '.footer-bottom', sound: 'https://www.myinstants.com/media/sounds/windows-xp-error.mp3', message: 'System Error: Too much trolling detected' },
        { selector: '.prize-button', sound: 'https://www.myinstants.com/media/sounds/evil-laugh.mp3', message: 'Hahaha! You thought there were real prizes?' }
    ];
    
    easterEggAreas.forEach(egg => {
        const element = document.querySelector(egg.selector);
        if (element) {
            // Add hidden indicator
            const indicator = document.createElement('div');
            indicator.className = 'easter-egg-indicator';
            element.appendChild(indicator);
            
            element.addEventListener('dblclick', function(e) {
                // Play sound
                const audio = new Audio(egg.sound);
                audio.play();
                
                // Show message
                showToast(egg.message);
                
                // Trigger special effect
                element.classList.add('easter-egg-activated');
                setTimeout(() => {
                    element.classList.remove('easter-egg-activated');
                }, 2000);
            });
        }
    });
});

// Daily Troll Quote
document.addEventListener('DOMContentLoaded', function() {
    const trollQuotes = [
        "Problem?",
        "U mad bro?",
        "Challenge accepted.",
        "انا اكره الزنوج 🦝",
        "If you can read this, you've been trolled.",
        "Never gonna give you up, never gonna let you down...",
        "Task failed successfully.",
        "وانت تسحر نص الصحرا ومقطوعة وعندنا نت 100 ميغا",
        "الهندسة العكسية هو كده كده كده الحكومه قفلت المقابر بتاعنا",
        "Delete System32 for better performance!",
        "Alt+F4 for free Bitcoin."
    ];
    
    // Insert after hero section
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.parentNode.insertBefore(quoteContainer, heroSection.nextSibling);
    } else {
        document.querySelector('main').prepend(quoteContainer);
    }
    
    // New quote button
    document.getElementById('newQuote').addEventListener('click', function() {
        document.getElementById('quote').textContent = trollQuotes[Math.floor(Math.random() * trollQuotes.length)];
    });
});

// Dark Mode Toggle
document.addEventListener('DOMContentLoaded', function() {
    // Create toggle button
    const darkModeToggle = document.createElement('button');
    darkModeToggle.className = 'dark-mode-toggle';
    darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    darkModeToggle.title = 'Toggle Night Troll Mode';
    document.body.appendChild(darkModeToggle);
    
    // Toggle functionality
    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            showToast('Night Troll Mode Activated!');
        } else {
            darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            showToast('Day Mode Restored!');
        }
    });
});

// Toast notifications
function showToast(message) {
    // Create toast element
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    // Animation
    setTimeout(() => {
        toast.classList.add('show');
    }, 10);
    
    // Auto-remove
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 500);
    }, 3000);
}

/* Fake Loading - REMOVED
document.addEventListener('DOMContentLoaded', function() {
    // Create loading overlay
    const loadingOverlay = document.createElement('div');
    loadingOverlay.className = 'loading-overlay';
    loadingOverlay.innerHTML = `
        <div class="loading-content">
            <h2>Loading Trolls...</h2>
            <div class="progress-container">
                <div class="progress-bar" id="loadingBar"></div>
            </div>
            <p id="loadingText">0%</p>
        </div>
    `;
    document.body.appendChild(loadingOverlay);
    
    // Simulate loading
    let progress = 0;
    const loadingBar = document.getElementById('loadingBar');
    const loadingText = document.getElementById('loadingText');
    
    const interval = setInterval(() => {
        progress += Math.random() * 10;
        
        if (progress >= 99) {
            progress = 99;
            clearInterval(interval);
            
            // Get stuck at 99%
            loadingText.textContent = "99% - Searching for more trolls...";
            
            // Finally complete after a long wait
            setTimeout(() => {
                loadingBar.style.width = "100%";
                loadingText.textContent = "100% - Trolling complete!";
                
                setTimeout(() => {
                    loadingOverlay.style.opacity = "0";
                    setTimeout(() => {
                        document.body.removeChild(loadingOverlay);
                    }, 500);
                }, 1000);
            }, 5000);
        } else {
            loadingBar.style.width = `${progress}%`;
            loadingText.textContent = `${Math.floor(progress)}%`;
        }
    }, 200);
});
*/

// Fake Notification System
setTimeout(() => {
    const notifications = [
        "Your computer has been upgraded to Windows Troll Edition",
        "Congratulations! You are the 1,000,000th visitor. Click to claim your virus.",
        "Hot trolls in your area want to meet you",
        "Breaking News: Scientists discover trolls are real",
        "System Update: Replace brain.exe with troll.exe?",
        "WARNING: High levels of trolling detected on this page",
        "Your social credit score has decreased by 9000 points"
    ];
    
    // Show random notifications every so often
    let notificationCount = 0;
    
    function showRandomNotification() {
        if (notificationCount < 3) { // Limit to 3 notifications
            const message = notifications[Math.floor(Math.random() * notifications.length)];
            showNotification(message);
            notificationCount++;
            
            // Schedule next notification
            setTimeout(showRandomNotification, Math.random() * 60000 + 30000); // 30-90 seconds
        }
    }
    
    // Start notifications after 30 seconds
    setTimeout(showRandomNotification, 30000);
}, 10000);

function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'fake-notification';
    notification.innerHTML = `
        <div class="notification-header">
            <img src="./images/1.jpeg" alt="Troll Alert" class="notification-icon">
            <span class="notification-title">IMPORTANT ALERT</span>
            <span class="notification-close">&times;</span>
        </div>
        <div class="notification-body">
            ${message}
        </div>
        <div class="notification-footer">
            <button class="notification-button">Accept</button>
            <button class="notification-button">Cancel</button>
        </div>
    `;
    document.body.appendChild(notification);
    
    // Animation
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Close button
    notification.querySelector('.notification-close').addEventListener('click', function() {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 500);
    });
    
    // Buttons also close the notification
    const buttons = notification.querySelectorAll('.notification-button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            showToast('You cannot escape the trolls!');
            notification.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 500);
        });
    });
}

// Detect mobile shake
if (window.DeviceMotionEvent) {
    let lastUpdate = 0;
    let lastX = 0, lastY = 0, lastZ = 0;
    const shakeThreshold = 15;
    
    window.addEventListener('devicemotion', function(e) {
        const current = e.accelerationIncludingGravity;
        const currentTime = new Date().getTime();
        
        if ((currentTime - lastUpdate) > 100) {
            const diffTime = currentTime - lastUpdate;
            lastUpdate = currentTime;
            
            const deltaX = Math.abs(lastX - current.x);
            const deltaY = Math.abs(lastY - current.y);
            const deltaZ = Math.abs(lastZ - current.z);
            
            if ((deltaX > shakeThreshold && deltaY > shakeThreshold) || 
                (deltaX > shakeThreshold && deltaZ > shakeThreshold) || 
                (deltaY > shakeThreshold && deltaZ > shakeThreshold)) {
                // Phone was shaken
                showToast("You've angered the trolls by shaking your phone!");
                
                // Trigger troll shake animation
                document.body.classList.add('shake-effect');
                setTimeout(() => {
                    document.body.classList.remove('shake-effect');
                }, 1000);
            }
            
            lastX = current.x;
            lastY = current.y;
            lastZ = current.z;
        }
    });
}

// Troll translator
document.addEventListener('DOMContentLoaded', function() {
    // Create translator section
    const translatorSection = document.createElement('div');
    translatorSection.className = 'troll-translator';
    translatorSection.innerHTML = `
        <h2>Troll Translator</h2>
        <div class="translator-container">
            <div class="translator-input">
                <label for="normalText">Normal Human Text:</label>
                <textarea id="normalText" placeholder="Type something here..."></textarea>
            </div>
            <button id="translateBtn">Translate to Troll</button>
            <div class="translator-output">
                <label for="trollText">Troll Language:</label>
                <textarea id="trollText" readonly></textarea>
            </div>
        </div>
    `;
    
    // Add to page
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.parentNode.insertBefore(translatorSection, contactForm);
    }
    
    // Translation functionality
    document.getElementById('translateBtn').addEventListener('click', function() {
        const normalText = document.getElementById('normalText').value;
        const trollText = trollTranslate(normalText);
        document.getElementById('trollText').value = trollText;
    });
});

// Troll translation function
function trollTranslate(text) {
    if (!text) return "Y U NO TYPE ANYTHING??? 🤔🤔🤔";
    
    // Troll transformations
    let result = text
        .replace(/i'm/gi, "me is")
        .replace(/I am/gi, "me is")
        .replace(/are/gi, "r")
        .replace(/you/gi, "u")
        .replace(/please/gi, "plz")
        .replace(/people/gi, "ppl")
        .replace(/really/gi, "rly")
        .replace(/what/gi, "wat")
        .replace(/that/gi, "dat")
        .replace(/the/gi, "da")
        .replace(/to/gi, "2")
        .replace(/for/gi, "4")
        .replace(/too/gi, "2")
        .replace(/two/gi, "2")
        .replace(/[!]/g, "!!!!11!1!")
        .replace(/[?]/g, "??? Y U NO???");
    
    // Add random emojis
    const emojis = ["😂", "🤣", "🤔", "🤪", "👌", "💯", "🔥", "👀", "💩", "🦝", "🤡"];
    const words = result.split(" ");
    
    for (let i = 0; i < words.length; i++) {
        if (Math.random() < 0.3) { // 30% chance to add emoji
            words[i] += " " + emojis[Math.floor(Math.random() * emojis.length)];
        }
    }
    
    // Randomly capitalize some words
    for (let i = 0; i < words.length; i++) {
        if (Math.random() < 0.2) { // 20% chance to capitalize
            words[i] = words[i].toUpperCase();
        }
    }
    
    result = words.join(" ");
    
    // Add random Arabic phrase at the end 5% of the time
    if (Math.random() < 0.05) {
        const arabicPhrases = [
            "انا اكره الزنوج 🦝",
            "وانت تسحر نص الصحرا ومقطوعة وعندنا نت 100 ميغا",
            "الهندسة العكسية هو كده كده كده الحكومه قفلت المقابر بتاعنا"
        ];
        result += "\n\n" + arabicPhrases[Math.floor(Math.random() * arabicPhrases.length)];
    }
    
    return result;
}

// Form validation troll
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form form, #contact form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const errorMessages = [
                "Your message is too serious for our troll servers",
                "Please include at least 3 memes in your message",
                "Error: Not enough emojis detected",
                "Our trolls are busy right now, try again when the moon is full",
                "Message rejected: Contains too many real words",
                "Your IP address has been flagged for being too normal"
            ];
            
            showToast(errorMessages[Math.floor(Math.random() * errorMessages.length)]);
        });
    }
});

// Forgot Password Prank
document.addEventListener('DOMContentLoaded', function() {
    const forgotPasswordLink = document.getElementById('forgot-password');
    const universityForgotPasswordLink = document.getElementById('university-forgot-password');
    const passwordModal = document.getElementById('password-modal');
    const closeModalBtns = document.querySelectorAll('.close-modal');
    const passwordRecoveryForm = document.getElementById('password-recovery-form');
    
    // Function to show the password recovery modal
    function showPasswordModal(e) {
        e.preventDefault();
        passwordModal.style.display = 'flex';
    }
    
    // Main navigation forgot password link
    if (forgotPasswordLink && passwordModal) {
        forgotPasswordLink.addEventListener('click', showPasswordModal);
    }
    
    // University section forgot password link
    if (universityForgotPasswordLink && passwordModal) {
        universityForgotPasswordLink.addEventListener('click', showPasswordModal);
    }
    
    // Close buttons for the modal
    if (closeModalBtns) {
        closeModalBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                passwordModal.style.display = 'none';
            });
        });
        
        // Click outside to close
        window.addEventListener('click', function(e) {
            if (e.target === passwordModal) {
                passwordModal.style.display = 'none';
            }
        });
    }
    
    // Form submission
    if (passwordRecoveryForm) {
        passwordRecoveryForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Troll response
            passwordModal.style.display = 'none';
            showToast("Password recovery failed successfully! Your new password is the same as your old password, which we don't know either!");
        });
    }
});

// Security Check Functionality
document.addEventListener('DOMContentLoaded', function() {
    const securityBtn = document.getElementById('security-check');
    const scannerModal = document.getElementById('scanner-modal');
    const closeScannerBtns = document.querySelectorAll('.close-modal');
    
    if (securityBtn && scannerModal) {
        securityBtn.addEventListener('click', function(e) {
            e.preventDefault();
            scannerModal.style.display = 'flex';
            startFakeScan();
        });
        
        closeScannerBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                scannerModal.style.display = 'none';
            });
        });
        
        // Click outside to close
        window.addEventListener('click', function(e) {
            if (e.target === scannerModal) {
                scannerModal.style.display = 'none';
            });
        });
    }
    
    function startFakeScan() {
        const scanProgress = document.getElementById('scanProgress');
        const scanStatus = document.getElementById('scan-status');
        const threatList = document.getElementById('threat-list');
        
        threatList.innerHTML = '';
        let progress = 0;
        
        const threats = [
            "Found: TrollVirus.exe in system32 folder",
            "Suspicious activity: Someone is watching cat videos on your PC",
            "Warning: Your CPU temperature is over 9000 degrees",
            "Alert: Too many memes detected in your downloads folder",
            "Critical: System has detected you haven't touched grass in 7 days",
            "Danger: Your browser history is at risk of being sent to your mother",
            "MemeLord.dll is consuming too much RAM",
            "Security risk: Your password 'password123' has been breached",
            "Found 37 instances of unclosed parentheses in your code"
        ];
        
        const interval = setInterval(() => {
            progress += Math.random() * 5;
            
            if (progress >= 100) {
                progress = 100;
                clearInterval(interval);
                
                scanStatus.textContent = "Scan complete! Multiple threats detected!";
                scanStatus.style.color = "red";
                
                setTimeout(() => {
                    // Fake system error
                    window.alert("WARNING: Critical system error detected! Your system is at risk!");
                    
                    // Close the modal after alert
                    scannerModal.style.display = 'none';
                }, 2000);
            } else {
                scanProgress.style.width = `${progress}%`;
                scanStatus.textContent = `Scanning system... ${Math.floor(progress)}% complete`;
                
                // Randomly add threats
                if (Math.random() < 0.2 && progress > 20) {
                    const threat = document.createElement('div');
                    threat.className = 'detected-threat';
                    const randomThreat = threats[Math.floor(Math.random() * threats.length)];
                    threat.innerHTML = `<i class="fas fa-exclamation-triangle"></i> ${randomThreat}`;
                    threatList.appendChild(threat);
                    
                    // Scroll to bottom
                    threatList.scrollTop = threatList.scrollHeight;
                }
            }
        }, 200);
    }
});

// Terms & Conditions Modal
document.addEventListener('DOMContentLoaded', function() {
    const termsLink = document.getElementById('terms-link');
    const termsModal = document.getElementById('terms-modal');
    const closeTermsBtns = document.querySelectorAll('.close-modal');
    const acceptTermsBtn = document.getElementById('accept-terms');
    
    if (termsLink && termsModal) {
        termsLink.addEventListener('click', function(e) {
            e.preventDefault();
            termsModal.style.display = 'flex';
        });
        
        closeTermsBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                termsModal.style.display = 'none';
            });
        });
        
        // Click outside to close
        window.addEventListener('click', function(e) {
            if (e.target === termsModal) {
                termsModal.style.display = 'none';
            });
        });
        
        // Accept button troll
        if (acceptTermsBtn) {
            acceptTermsBtn.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Make button run away
                acceptTermsBtn.style.position = 'absolute';
                
                const moveButton = () => {
                    const x = Math.random() * (termsModal.offsetWidth - acceptTermsBtn.offsetWidth);
                    const y = Math.random() * (termsModal.offsetHeight - acceptTermsBtn.offsetHeight);
                    
                    acceptTermsBtn.style.left = x + 'px';
                    acceptTermsBtn.style.top = y + 'px';
                };
                
                // Move button when hovered
                acceptTermsBtn.addEventListener('mouseover', moveButton);
                
                // Move button anyway every few seconds
                setInterval(moveButton, 2000);
                
                // Initial move
                moveButton();
            });
        }
    }
    
    // Secret key sequence in terms
    let secretPressed = [];
    const secretCode = ['Shift', 'Q', 'Shift', 'Q', 'Shift', 'Q'];
    
    document.addEventListener('keydown', function(e) {
        if (termsModal.style.display === 'flex') {
            secretPressed.push(e.key);
            
            // Keep only the last 6 keys
            if (secretPressed.length > 6) {
                secretPressed.shift();
            }
            
            // Check for secret code
            if (secretPressed.join('') === secretCode.join('')) {
                showToast("🎉 SECRET UNLOCKED: You've found the hidden discount: 100% OFF ON EVERYTHING! (Terms apply: Everything means nothing)");
                termsModal.style.display = 'none';
                secretPressed = [];
            }
        }
    });
});

// Feature cards random movement
document.addEventListener('DOMContentLoaded', function() {
    const features = document.querySelectorAll('.feature');
    
    features.forEach(feature => {
        feature.addEventListener('mouseover', function() {
            if (Math.random() < 0.3) { // 30% chance
                const currentTop = parseInt(window.getComputedStyle(feature).getPropertyValue('transform').split(',')[5]);
                const randomOffset = Math.random() * 50 - 25; // Random value between -25 and 25
                
                feature.style.transform = `translateY(${randomOffset}px)`;
                
                // Reset after animation
                setTimeout(() => {
                    feature.style.transform = '';
                }, 500);
            }
        });
    });
});

// Easter egg in contact form
document.addEventListener('DOMContentLoaded', function() {
    const formInputs = document.querySelectorAll('.contact-form input, .contact-form textarea');
    
    formInputs.forEach(input => {
        // Connect each input to its datalist
        if (input.id) {
            const datalistId = `${input.id}-suggestions`;
            const datalist = document.getElementById(datalistId);
            
            if (datalist) {
                input.setAttribute('list', datalistId);
            }
        }
        
        // Random form field trolling
        input.addEventListener('focus', function() {
            if (Math.random() < 0.2) { // 20% chance
                const placeholders = [
                    "Don't bother typing, we won't read this",
                    "Type something funny here, I dare you",
                    "This form goes straight to /dev/null",
                    "Your data is being sent to aliens",
                    "Each keystroke increases your troll level"
                ];
                
                input.setAttribute('placeholder', placeholders[Math.floor(Math.random() * placeholders.length)]);
            }
        });
    });
});

// Analytics module for visitor tracking
document.addEventListener('DOMContentLoaded', function() {
    // Google Analytics is already configured in the <head> section
    // This is just a placeholder for any additional analytics you might want to add
    
    // Log page view to console in debug mode
    if (localStorage.getItem('debug_mode')) {
        console.log('Page viewed:', window.location.pathname);
        console.log('Screen size:', window.screen.width, 'x', window.screen.height);
    }
});