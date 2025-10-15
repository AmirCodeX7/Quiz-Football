
        // Game State
        let gameState = {
            currentLanguage: 'en',
            playerName: '',
            selectedAvatar: '⚽',
            coins: 100, // Starting coins
            currentQuestion: 0,
            questions: [],
            userAnswers: [],
            score: 0,
            gameMode: 'solo', // 'solo' or 'ai'
            gameSettings: {
                difficulty: 'easy',
                questionCount: 10,
                coinQuestions: true,
                music: true,
                animations: true
            },
            aiOpponent: {
                score: 0,
                currentQuestion: 0
            },
            lastSpinTime: 0,
            ownedItems: [],
            gameHistory: []
        };

        // Question Bank
        const questionBank = {
            easy: [
                {
                    en: "How many players are on a football team on the field at one time?",
                    fa: "چند بازیکن در یک تیم فوتبال همزمان در زمین حضور دارند؟",
                    options: {
                        en: ["9", "10", "11", "12"],
                        fa: ["۹", "۱۰", "۱۱", "۱۲"]
                    },
                    correct: 2,
                    coinQuestion: true
                },
                {
                    en: "What is the duration of a standard football match?",
                    fa: "مدت زمان یک بازی استاندارد فوتبال چقدر است؟",
                    options: {
                        en: ["80 minutes", "90 minutes", "100 minutes", "120 minutes"],
                        fa: ["۸۰ دقیقه", "۹۰ دقیقه", "۱۰۰ دقیقه", "۱۲۰ دقیقه"]
                    },
                    correct: 1,
                    coinQuestion: false
                },
                {
                    en: "Which body part can't be used to touch the ball in football (except goalkeepers)?",
                    fa: "کدام قسمت بدن نمی‌تواند برای لمس توپ در فوتبال استفاده شود (به جز دروازه‌بان)؟",
                    options: {
                        en: ["Head", "Chest", "Hands", "Feet"],
                        fa: ["سر", "سینه", "دست", "پا"]
                    },
                    correct: 2,
                    coinQuestion: true
                },
                {
                    en: "What is the shape of a football field?",
                    fa: "شکل زمین فوتبال چگونه است؟",
                    options: {
                        en: ["Square", "Rectangle", "Circle", "Triangle"],
                        fa: ["مربع", "مستطیل", "دایره", "مثلث"]
                    },
                    correct: 1,
                    coinQuestion: false
                },
                {
                    en: "How many goals are there on a football field?",
                    fa: "چند دروازه در زمین فوتبال وجود دارد؟",
                    options: {
                        en: ["1", "2", "3", "4"],
                        fa: ["۱", "۲", "۳", "۴"]
                    },
                    correct: 1,
                    coinQuestion: true
                }
            ],
            medium: [
                {
                    en: "Which country won the first FIFA World Cup in 1930?",
                    fa: "کدام کشور اولین جام جهانی فیفا را در سال ۱۹۳۰ برد؟",
                    options: {
                        en: ["Brazil", "Argentina", "Uruguay", "Italy"],
                        fa: ["برزیل", "آرژانتین", "اروگوئه", "ایتالیا"]
                    },
                    correct: 2,
                    coinQuestion: true
                },
                {
                    en: "What is the maximum number of substitutions allowed in a match?",
                    fa: "حداکثر تعداد تعویض مجاز در یک بازی چقدر است؟",
                    options: {
                        en: ["3", "5", "7", "Unlimited"],
                        fa: ["۳", "۵", "۷", "نامحدود"]
                    },
                    correct: 1,
                    coinQuestion: false
                },
                {
                    en: "Which player has won the most Ballon d'Or awards?",
                    fa: "کدام بازیکن بیشترین توپ طلا را برده است؟",
                    options: {
                        en: ["Cristiano Ronaldo", "Lionel Messi", "Michel Platini", "Johan Cruyff"],
                        fa: ["کریستیانو رونالدو", "لیونل مسی", "میشل پلاتینی", "یوهان کرایف"]
                    },
                    correct: 1,
                    coinQuestion: true
                }
            ],
            hard: [
                {
                    en: "In which year was the offside rule introduced in football?",
                    fa: "قانون آفساید در فوتبال در چه سالی معرفی شد؟",
                    options: {
                        en: ["1863", "1866", "1925", "1990"],
                        fa: ["۱۸۶۳", "۱۸۶۶", "۱۹۲۵", "۱۹۹۰"]
                    },
                    correct: 1,
                    coinQuestion: true
                },
                {
                    en: "Which club has won the most UEFA Champions League titles?",
                    fa: "کدام باشگاه بیشترین عنوان لیگ قهرمانان اروپا را کسب کرده است؟",
                    options: {
                        en: ["Barcelona", "Real Madrid", "AC Milan", "Liverpool"],
                        fa: ["بارسلونا", "رئال مادرید", "آث میلان", "لیورپول"]
                    },
                    correct: 1,
                    coinQuestion: false
                }
            ],
            expert: [
                {
                    en: "Who scored the fastest goal in World Cup history?",
                    fa: "چه کسی سریع‌ترین گل تاریخ جام جهانی را زده است؟",
                    options: {
                        en: ["Hakan Şükür", "Alan Shearer", "Clint Dempsey", "Tim Cahill"],
                        fa: ["هاکان شوکور", "آلن شیرر", "کلینت دمپسی", "تیم کهیل"]
                    },
                    correct: 0,
                    coinQuestion: true
                }
            ]
        };

        // Shop Items
        const shopItems = [
            {
                id: 'cursor_football',
                name: { en: 'Football Cursor', fa: 'نشانگر فوتبال' },
                price: 20,
                type: 'cursor',
                icon: '⚽'
            },
            {
                id: 'cursor_trophy',
                name: { en: 'Trophy Cursor', fa: 'نشانگر جام' },
                price: 30,
                type: 'cursor',
                icon: '🏆'
            },
            {
                id: 'theme_stadium',
                name: { en: 'Stadium Theme', fa: 'تم استادیوم' },
                price: 50,
                type: 'theme',
                icon: '🏟️'
            },
            {
                id: 'avatar_frame_gold',
                name: { en: 'Golden Frame', fa: 'قاب طلایی' },
                price: 40,
                type: 'frame',
                icon: '🥇'
            }
        ];

        // Initialize Game
        function initGame() {
            loadGameData();
            setupEventListeners();
            createFloatingFootballs();
            updateLanguage();
            updateUI();
            checkSpinCooldown();
        }

        // Load saved game data
        function loadGameData() {
            const saved = localStorage.getItem('footballQuizData');
            if (saved) {
                const data = JSON.parse(saved);
                gameState = { ...gameState, ...data };
            }
        }

        // Save game data
        function saveGameData() {
            localStorage.setItem('footballQuizData', JSON.stringify(gameState));
        }

        // Setup Event Listeners
        function setupEventListeners() {
            // Language toggle
            document.getElementById('langToggle').addEventListener('click', toggleLanguage);
            
            // Avatar selection
            document.querySelectorAll('.avatar-option').forEach(avatar => {
                avatar.addEventListener('click', () => selectAvatar(avatar.dataset.avatar));
            });
            
            // Game mode buttons
            document.getElementById('soloModeBtn').addEventListener('click', () => startGameSetup('solo'));
            document.getElementById('aiModeBtn').addEventListener('click', () => startGameSetup('ai'));
            
            // Navigation buttons
            document.getElementById('shopBtn').addEventListener('click', showShop);
            document.getElementById('profileBtn').addEventListener('click', showProfile);
            document.getElementById('backToLanding').addEventListener('click', showLanding);
            document.getElementById('backToLandingFromShop').addEventListener('click', showLanding);
            document.getElementById('backToLandingFromProfile').addEventListener('click', showLanding);
            
            // Game settings
            document.getElementById('startGameBtn').addEventListener('click', startQuiz);
            
            // Quiz navigation
            document.getElementById('prevBtn').addEventListener('click', previousQuestion);
            document.getElementById('nextBtn').addEventListener('click', nextQuestion);
            document.getElementById('submitBtn').addEventListener('click', submitQuiz);
            
            // Results buttons
            document.getElementById('playAgainBtn').addEventListener('click', showGameSettings);
            document.getElementById('shareResultBtn').addEventListener('click', shareResult);
            document.getElementById('reviewAnswersBtn').addEventListener('click', reviewAnswers);
            document.getElementById('backToMenuBtn').addEventListener('click', showLanding);
            
            // Spin wheel
            document.getElementById('spinButton').addEventListener('click', spinWheel);
            
            // Music controls
            document.getElementById('musicToggle').addEventListener('click', toggleMusic);
            document.getElementById('volumeSlider').addEventListener('input', adjustVolume);
            
            // Option selection
            document.querySelectorAll('.option-card').forEach(option => {
                option.addEventListener('click', () => selectOption(parseInt(option.dataset.option)));
            });
            
            // Player name input
            document.getElementById('playerName').addEventListener('input', (e) => {
                gameState.playerName = e.target.value;
                saveGameData();
            });
        }

        // Language Functions
        function toggleLanguage() {
            gameState.currentLanguage = gameState.currentLanguage === 'en' ? 'fa' : 'en';
            updateLanguage();
            saveGameData();
        }

        function updateLanguage() {
            const isRTL = gameState.currentLanguage === 'fa';
            document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
            document.documentElement.lang = gameState.currentLanguage;
            
            // Update language toggle button
            document.getElementById('langText').textContent = gameState.currentLanguage === 'en' ? 'فارسی' : 'English';
            
            // Update all translatable elements
            document.querySelectorAll('[data-en]').forEach(element => {
                const text = element.getAttribute(`data-${gameState.currentLanguage}`);
                if (text) {
                    element.textContent = text;
                }
            });
            
            // Update select options
            document.querySelectorAll('select option[data-en]').forEach(option => {
                const text = option.getAttribute(`data-${gameState.currentLanguage}`);
                if (text) {
                    option.textContent = text;
                }
            });
        }

        // Avatar Selection
        function selectAvatar(avatar) {
            gameState.selectedAvatar = avatar;
            document.querySelectorAll('.avatar-option').forEach(opt => opt.classList.remove('selected'));
            document.querySelector(`[data-avatar="${avatar}"]`).classList.add('selected');
            saveGameData();
        }

        // UI Update Functions
        function updateUI() {
            document.getElementById('coinCount').textContent = gameState.coins;
            document.getElementById('gameCoins').textContent = gameState.coins;
            document.getElementById('shopCoins').textContent = gameState.coins;
            document.getElementById('profileCoins').textContent = gameState.coins;
            
            if (gameState.playerName) {
                document.getElementById('playerName').value = gameState.playerName;
            }
            
            selectAvatar(gameState.selectedAvatar);
        }

        // Screen Navigation
        function showScreen(screenId) {
            document.querySelectorAll('[id$="Screen"]').forEach(screen => {
                screen.classList.add('hidden');
            });
            document.getElementById(screenId).classList.remove('hidden');
            
            if (gameState.animations) {
                gsap.from(`#${screenId}`, { duration: 0.5, opacity: 0, y: 50 });
            }
        }

        function showLanding() {
            showScreen('landingScreen');
            updateUI();
        }

        function showGameSettings() {
            showScreen('gameSettingsScreen');
        }

        function showShop() {
            showScreen('shopScreen');
            populateShop();
        }

        function showProfile() {
            showScreen('profileScreen');
            updateProfile();
        }

        // Game Setup
        function startGameSetup(mode) {
            gameState.gameMode = mode;
            showGameSettings();
        }

        function startQuiz() {
            // Get settings
            gameState.gameSettings.difficulty = document.getElementById('difficultySelect').value;
            gameState.gameSettings.questionCount = parseInt(document.getElementById('questionCountSelect').value);
            gameState.gameSettings.coinQuestions = document.getElementById('coinQuestionsToggle').checked;
            gameState.gameSettings.music = document.getElementById('musicToggleSettings').checked;
            gameState.gameSettings.animations = document.getElementById('animationsToggle').checked;
            
            // Generate questions
            generateQuestions();
            
            // Reset game state
            gameState.currentQuestion = 0;
            gameState.userAnswers = [];
            gameState.score = 0;
            gameState.aiOpponent = { score: 0, currentQuestion: 0 };
            
            // Show quiz screen
            showScreen('quizScreen');
            
            // Setup AI opponent if needed
            if (gameState.gameMode === 'ai') {
                document.getElementById('aiOpponent').classList.remove('hidden');
            } else {
                document.getElementById('aiOpponent').classList.add('hidden');
            }
            
            // Load first question
            loadQuestion();
            
            // Start background music
            if (gameState.gameSettings.music) {
                playBackgroundMusic();
            }
        }

        function generateQuestions() {
            const difficulty = gameState.gameSettings.difficulty;
            const count = gameState.gameSettings.questionCount;
            const availableQuestions = [...questionBank[difficulty]];
            
            // Add questions from other difficulties if needed
            if (availableQuestions.length < count) {
                Object.keys(questionBank).forEach(diff => {
                    if (diff !== difficulty) {
                        availableQuestions.push(...questionBank[diff]);
                    }
                });
            }
            
            // Shuffle and select questions
            gameState.questions = shuffleArray(availableQuestions).slice(0, count);
            
            // Filter coin questions if disabled
            if (!gameState.gameSettings.coinQuestions) {
                gameState.questions.forEach(q => q.coinQuestion = false);
            }
        }

        function shuffleArray(array) {
            const shuffled = [...array];
            for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
            }
            return shuffled;
        }

        // Quiz Functions
        function loadQuestion() {
            const question = gameState.questions[gameState.currentQuestion];
            const lang = gameState.currentLanguage;
            
            // Update question counter
            document.getElementById('currentQuestion').textContent = gameState.currentQuestion + 1;
            document.getElementById('totalQuestions').textContent = gameState.questions.length;
            
            // Update progress bar
            const progress = ((gameState.currentQuestion + 1) / gameState.questions.length) * 100;
            document.getElementById('progressBar').style.width = `${progress}%`;
            
            // Update difficulty badge
            document.getElementById('difficultyBadge').textContent = 
                gameState.gameSettings.difficulty.charAt(0).toUpperCase() + gameState.gameSettings.difficulty.slice(1);
            
            // Show/hide coin question badge
            if (question.coinQuestion) {
                document.getElementById('coinQuestionBadge').classList.remove('hidden');
            } else {
                document.getElementById('coinQuestionBadge').classList.add('hidden');
            }
            
            // Update question text
            document.getElementById('questionText').textContent = question[lang];
            
            // Update options
            const optionCards = document.querySelectorAll('.option-card');
            optionCards.forEach((card, index) => {
                const optionText = card.querySelector('.option-text');
                optionText.textContent = question.options[lang][index];
                
                // Reset card state
                card.classList.remove('selected', 'correct', 'incorrect');
                
                // Restore previous selection if exists
                if (gameState.userAnswers[gameState.currentQuestion] === index) {
                    card.classList.add('selected');
                }
            });
            
            // Update navigation buttons
            document.getElementById('prevBtn').disabled = gameState.currentQuestion === 0;
            document.getElementById('nextBtn').disabled = gameState.userAnswers[gameState.currentQuestion] === undefined;
            
            // Show/hide submit button
            if (gameState.currentQuestion === gameState.questions.length - 1) {
                document.getElementById('nextBtn').classList.add('hidden');
                document.getElementById('submitBtn').classList.remove('hidden');
                document.getElementById('submitBtn').disabled = gameState.userAnswers[gameState.currentQuestion] === undefined;
            } else {
                document.getElementById('nextBtn').classList.remove('hidden');
                document.getElementById('submitBtn').classList.add('hidden');
            }
            
            // Animate question if enabled
            if (gameState.animations) {
                gsap.from('#questionText', { duration: 0.5, opacity: 0, y: 30 });
                gsap.from('.option-card', { duration: 0.5, opacity: 0, y: 20, stagger: 0.1 });
            }
            
            // Simulate AI opponent
            if (gameState.gameMode === 'ai') {
                simulateAIAnswer();
            }
        }

        function selectOption(optionIndex) {
            // Clear previous selection
            document.querySelectorAll('.option-card').forEach(card => {
                card.classList.remove('selected');
            });
            
            // Select new option
            document.querySelector(`[data-option="${optionIndex}"]`).classList.add('selected');
            
            // Save answer
            gameState.userAnswers[gameState.currentQuestion] = optionIndex;
            
            // Enable navigation
            document.getElementById('nextBtn').disabled = false;
            document.getElementById('submitBtn').disabled = false;
            
            // Play sound effect
            playSound('select');
        }

        function nextQuestion() {
            if (gameState.currentQuestion < gameState.questions.length - 1) {
                gameState.currentQuestion++;
                loadQuestion();
            }
        }

        function previousQuestion() {
            if (gameState.currentQuestion > 0) {
                gameState.currentQuestion--;
                loadQuestion();
            }
        }

        function submitQuiz() {
            calculateResults();
            showResults();
        }

        function calculateResults() {
            let correctCount = 0;
            let coinsFromQuestions = 0;
            
            gameState.questions.forEach((question, index) => {
                const userAnswer = gameState.userAnswers[index];
                if (userAnswer === question.correct) {
                    correctCount++;
                    gameState.score += 10; // Base points per correct answer
                    
                    // Coin questions
                    if (question.coinQuestion) {
                        coinsFromQuestions++;
                    }
                }
            });
            
            // Calculate accuracy
            const accuracy = (correctCount / gameState.questions.length) * 100;
            
            // Calculate bonus coins based on accuracy
            let bonusCoins = 0;
            const difficultyMultiplier = {
                easy: 1,
                medium: 1.5,
                hard: 2,
                expert: 3
            }[gameState.gameSettings.difficulty];
            
            if (accuracy >= 100) {
                bonusCoins = Math.floor(10 * difficultyMultiplier);
            } else if (accuracy >= 90) {
                bonusCoins = Math.floor(5 * difficultyMultiplier);
            } else if (accuracy >= 70) {
                bonusCoins = Math.floor(2 * difficultyMultiplier);
            }
            
            // Add coins to total
            const totalCoinsEarned = coinsFromQuestions + bonusCoins;
            gameState.coins += totalCoinsEarned;
            
            // Store results
            gameState.lastResults = {
                score: gameState.score,
                correctCount,
                incorrectCount: gameState.questions.length - correctCount,
                accuracy: Math.round(accuracy),
                coinsEarned: totalCoinsEarned,
                coinsFromQuestions,
                bonusCoins
            };
            
            // Update game history
            gameState.gameHistory.push({
                date: new Date().toISOString(),
                score: gameState.score,
                accuracy: Math.round(accuracy),
                difficulty: gameState.gameSettings.difficulty,
                mode: gameState.gameMode
            });
            
            // Simulate AI results if in AI mode
            if (gameState.gameMode === 'ai') {
                const aiAccuracy = Math.random() * 0.4 + 0.5; // 50-90% accuracy
                gameState.aiOpponent.score = Math.floor(aiAccuracy * gameState.questions.length * 10);
            }
            
            saveGameData();
        }

        function showResults() {
            showScreen('resultsScreen');
            
            const results = gameState.lastResults;
            
            // Update result displays
            document.getElementById('finalScore').textContent = results.score;
            document.getElementById('accuracy').textContent = `${results.accuracy}%`;
            document.getElementById('correctCount').textContent = results.correctCount;
            document.getElementById('incorrectCount').textContent = results.incorrectCount;
            document.getElementById('coinsEarned').textContent = results.coinsEarned;
            
            // Performance message
            let message = '';
            if (results.accuracy >= 90) {
                message = gameState.currentLanguage === 'en' ? 
                    'Outstanding! You\'re a football expert!' : 
                    'فوق‌العاده! شما یک متخصص فوتبال هستید!';
            } else if (results.accuracy >= 70) {
                message = gameState.currentLanguage === 'en' ? 
                    'Great job! Keep practicing to improve!' : 
                    'عالی! به تمرین ادامه دهید تا بهتر شوید!';
            } else {
                message = gameState.currentLanguage === 'en' ? 
                    'Good effort! Study more football facts!' : 
                    'تلاش خوبی! بیشتر در مورد فوتبال مطالعه کنید!';
            }
            document.getElementById('performanceMessage').textContent = message;
            
            // AI results
            if (gameState.gameMode === 'ai') {
                document.getElementById('aiResults').classList.remove('hidden');
                document.getElementById('playerFinalScore').textContent = results.score;
                document.getElementById('aiFinalScore').textContent = gameState.aiOpponent.score;
                
                const winnerMessage = results.score > gameState.aiOpponent.score ? 
                    (gameState.currentLanguage === 'en' ? 'You Win!' : 'شما برنده شدید!') :
                    (gameState.currentLanguage === 'en' ? 'AI Wins!' : 'هوش مصنوعی برنده شد!');
                document.getElementById('winnerMessage').textContent = winnerMessage;
            } else {
                document.getElementById('aiResults').classList.add('hidden');
            }
            
            // Animate trophy
            if (gameState.animations) {
                gsap.from('#trophyIcon', { duration: 1, scale: 0, rotation: 360, ease: "bounce.out" });
            }
            
            // Play result sound
            if (results.accuracy >= 70) {
                playSound('correct');
            } else {
                playSound('incorrect');
            }
            
            updateUI();
        }

        // AI Simulation
        function simulateAIAnswer() {
            const aiThinkingTime = Math.random() * 3000 + 1000; // 1-4 seconds
            
            setTimeout(() => {
                const question = gameState.questions[gameState.currentQuestion];
                const aiAccuracy = {
                    easy: 0.8,
                    medium: 0.7,
                    hard: 0.6,
                    expert: 0.5
                }[gameState.gameSettings.difficulty];
                
                const isCorrect = Math.random() < aiAccuracy;
                const aiAnswer = isCorrect ? question.correct : Math.floor(Math.random() * 4);
                
                // Update AI progress
                const aiProgress = ((gameState.currentQuestion + 1) / gameState.questions.length) * 100;
                document.getElementById('aiProgress').style.width = `${aiProgress}%`;
                
                // Update AI status
                document.getElementById('aiStatus').textContent = 
                    gameState.currentLanguage === 'en' ? 'Answered!' : 'پاسخ داد!';
                
                setTimeout(() => {
                    document.getElementById('aiStatus').textContent = 
                        gameState.currentLanguage === 'en' ? 'Thinking...' : 'در حال فکر...';
                }, 1000);
                
            }, aiThinkingTime);
        }

        // Spin Wheel Functions
        function spinWheel() {
            const now = Date.now();
            const cooldownTime = 24 * 60 * 60 * 1000; // 24 hours
            
            if (now - gameState.lastSpinTime < cooldownTime) {
                return; // Still in cooldown
            }
            
            const wheel = document.getElementById('spinWheel');
            const button = document.getElementById('spinButton');
            
            // Disable button
            button.disabled = true;
            
            // Spin animation
            const spins = Math.random() * 1440 + 1440; // 4-8 full rotations
            wheel.style.transform = `rotate(${spins}deg)`;
            wheel.style.transition = 'transform 3s ease-out';
            
            setTimeout(() => {
                // Determine reward
                const rewards = [5, 10, 15, 20, 25, 30];
                const reward = rewards[Math.floor(Math.random() * rewards.length)];
                
                // Add coins
                gameState.coins += reward;
                gameState.lastSpinTime = now;
                
                // Show reward
                showCoinAnimation(reward);
                
                // Update UI
                updateUI();
                checkSpinCooldown();
                
                // Reset wheel
                wheel.style.transition = 'none';
                wheel.style.transform = 'rotate(0deg)';
                
                saveGameData();
            }, 3000);
        }

        function checkSpinCooldown() {
            const now = Date.now();
            const cooldownTime = 24 * 60 * 60 * 1000; // 24 hours
            const timeLeft = cooldownTime - (now - gameState.lastSpinTime);
            
            if (timeLeft > 0) {
                document.getElementById('spinButton').style.display = 'none';
                document.getElementById('spinCooldown').classList.remove('hidden');
                
                // Update countdown timer
                const updateTimer = () => {
                    const remaining = cooldownTime - (Date.now() - gameState.lastSpinTime);
                    if (remaining <= 0) {
                        document.getElementById('spinButton').style.display = 'block';
                        document.getElementById('spinCooldown').classList.add('hidden');
                        return;
                    }
                    
                    const hours = Math.floor(remaining / (1000 * 60 * 60));
                    const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
                    const seconds = Math.floor((remaining % (1000 * 60)) / 1000);
                    
                    document.getElementById('cooldownTimer').textContent = 
                        `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
                    
                    setTimeout(updateTimer, 1000);
                };
                updateTimer();
            } else {
                document.getElementById('spinButton').style.display = 'block';
                document.getElementById('spinCooldown').classList.add('hidden');
            }
        }

        // Shop Functions
        function populateShop() {
            const container = document.getElementById('shopItems');
            container.innerHTML = '';
            
            shopItems.forEach(item => {
                const isOwned = gameState.ownedItems.includes(item.id);
                const canAfford = gameState.coins >= item.price;
                
                const itemElement = document.createElement('div');
                itemElement.className = 'col-md-6 col-lg-4';
                itemElement.innerHTML = `
                    <div class="shop-item glass-card p-4 text-white text-center ${isOwned ? 'owned' : ''}">
                        <div style="font-size: 3rem; margin-bottom: 1rem;">${item.icon}</div>
                        <h5>${item.name[gameState.currentLanguage]}</h5>
                        <div class="coin-counter mb-3">
                            <i class="fas fa-coins me-2"></i>
                            ${item.price}
                        </div>
                        <button class="btn ${isOwned ? 'btn-secondary' : (canAfford ? 'btn-primary' : 'btn-outline-secondary')} w-100" 
                                ${isOwned || !canAfford ? 'disabled' : ''} 
                                onclick="buyItem('${item.id}')">
                            ${isOwned ? 
                                (gameState.currentLanguage === 'en' ? 'Owned' : 'خریداری شده') : 
                                (canAfford ? 
                                    (gameState.currentLanguage === 'en' ? 'Buy' : 'خرید') : 
                                    (gameState.currentLanguage === 'en' ? 'Not enough coins' : 'سکه کافی نیست')
                                )
                            }
                        </button>
                    </div>
                `;
                container.appendChild(itemElement);
            });
        }

        function buyItem(itemId) {
            const item = shopItems.find(i => i.id === itemId);
            if (!item || gameState.coins < item.price || gameState.ownedItems.includes(itemId)) {
                return;
            }
            
            gameState.coins -= item.price;
            gameState.ownedItems.push(itemId);
            
            // Apply item effect
            applyItemEffect(item);
            
            updateUI();
            populateShop();
            saveGameData();
            
            // Show purchase animation
            showCoinAnimation(-item.price);
        }

        function applyItemEffect(item) {
            switch (item.type) {
                case 'cursor':
                    document.body.style.cursor = `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><text y="24" font-size="24">${item.icon}</text></svg>'), auto`;
                    break;
                case 'theme':
                    // Apply theme changes
                    break;
            }
        }

        // Profile Functions
        function updateProfile() {
            const totalGames = gameState.gameHistory.length;
            const bestScore = Math.max(0, ...gameState.gameHistory.map(g => g.score));
            const avgAccuracy = totalGames > 0 ? 
                Math.round(gameState.gameHistory.reduce((sum, g) => sum + g.accuracy, 0) / totalGames) : 0;
            
            document.getElementById('totalGames').textContent = totalGames;
            document.getElementById('bestScore').textContent = bestScore;
            document.getElementById('avgAccuracy').textContent = `${avgAccuracy}%`;
            
            // Update unlocked items
            const unlockedContainer = document.getElementById('unlockedItems');
            if (gameState.ownedItems.length === 0) {
                unlockedContainer.innerHTML = `<p>${gameState.currentLanguage === 'en' ? 'No items unlocked yet' : 'هنوز آیتمی باز نشده'}</p>`;
            } else {
                unlockedContainer.innerHTML = gameState.ownedItems.map(itemId => {
                    const item = shopItems.find(i => i.id === itemId);
                    return `<div class="mb-2">${item.icon} ${item.name[gameState.currentLanguage]}</div>`;
                }).join('');
            }
        }

        // Audio Functions
        function playBackgroundMusic() {
            const music = document.getElementById('backgroundMusic');
            music.play().catch(() => {
                // Handle autoplay restrictions
            });
        }

        function toggleMusic() {
            const music = document.getElementById('backgroundMusic');
            const button = document.getElementById('musicToggle');
            
            if (music.paused) {
                music.play();
                button.innerHTML = '<i class="fas fa-music"></i>';
            } else {
                music.pause();
                button.innerHTML = '<i class="fas fa-volume-mute"></i>';
            }
        }

        function adjustVolume() {
            const volume = document.getElementById('volumeSlider').value / 100;
            document.getElementById('backgroundMusic').volume = volume;
            document.getElementById('correctSound').volume = volume;
            document.getElementById('incorrectSound').volume = volume;
            document.getElementById('coinSound').volume = volume;
        }

        function playSound(type) {
            const soundMap = {
                correct: 'correctSound',
                incorrect: 'incorrectSound',
                coin: 'coinSound',
                select: 'correctSound' // Reuse correct sound for selection
            };
            
            const audio = document.getElementById(soundMap[type]);
            if (audio) {
                audio.currentTime = 0;
                audio.play().catch(() => {});
            }
        }

        // Animation Functions
        function createFloatingFootballs() {
            const container = document.getElementById('floating-footballs');
            
            for (let i = 0; i < 5; i++) {
                const football = document.createElement('div');
                football.className = 'floating-football';
                football.textContent = '⚽';
                football.style.left = Math.random() * 100 + '%';
                football.style.top = Math.random() * 100 + '%';
                container.appendChild(football);
                
                // Animate floating
                gsap.to(football, {
                    duration: Math.random() * 10 + 10,
                    x: (Math.random() - 0.5) * 200,
                    y: (Math.random() - 0.5) * 200,
                    rotation: 360,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut"
                });
            }
        }

        function showCoinAnimation(amount) {
            const coin = document.createElement('div');
            coin.className = 'coin-animation';
            coin.innerHTML = `<i class="fas fa-coins"></i> ${amount > 0 ? '+' : ''}${amount}`;
            coin.style.left = '50%';
            coin.style.top = '50%';
            document.body.appendChild(coin);
            
            gsap.fromTo(coin, 
                { scale: 0, opacity: 1 },
                { 
                    scale: 1.5, 
                    y: -100, 
                    opacity: 0, 
                    duration: 2,
                    ease: "power2.out",
                    onComplete: () => coin.remove()
                }
            );
            
            playSound('coin');
        }

        // Utility Functions
        function shareResult() {
            const results = gameState.lastResults;
            const text = gameState.currentLanguage === 'en' ? 
                `I scored ${results.score} points with ${results.accuracy}% accuracy in Football Quiz Pro! 🏆⚽` :
                `من در کوییز فوتبال حرفه‌ای ${results.score} امتیاز با دقت ${results.accuracy}% کسب کردم! 🏆⚽`;
            
            if (navigator.share) {
                navigator.share({ text });
            } else {
                navigator.clipboard.writeText(text).then(() => {
                    alert(gameState.currentLanguage === 'en' ? 'Result copied to clipboard!' : 'نتیجه در کلیپ‌بورد کپی شد!');
                });
            }
        }

        function reviewAnswers() {
            // This would show a detailed review of all questions and answers
            alert(gameState.currentLanguage === 'en' ? 'Answer review feature coming soon!' : 'قابلیت بررسی پاسخ‌ها به زودی!');
        }

        // Initialize the game when page loads
        document.addEventListener('DOMContentLoaded', initGame);