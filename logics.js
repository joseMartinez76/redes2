// ==========================================
// VARIABLES GLOBALES
// ==========================================
let currentMode = null;
let currentQuestions = [];
let currentQuestion = 0;
let score = 0;
let userAnswers = [];
let answered = false;
let autoAdvanceTimer = null; // Timer para auto-avance al acertar

// ==========================================
// SELECCIÓN DE MODO
// ==========================================
function selectMode(mode) {
    // Quitar selección previa
    document.querySelectorAll('.mode-card').forEach(card => card.classList.remove('selected'));
    
    // Generar ID dinámico (modeUT1, modeUT2... modeGeneral)
    let elementId = mode === 'general' ? 'modeGeneral' : 'mode' + mode.toUpperCase().replace('-', '');
    
    const element = document.getElementById(elementId);
    if (element) {
        element.classList.add('selected');
        currentMode = mode;
        // Habilitar botón de inicio
        const startBtn = document.getElementById('startBtn');
        if (startBtn) startBtn.disabled = false;
    }
}

// Algoritmo Fisher-Yates para mezclar preguntas
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// Baraja las opciones de una pregunta y actualiza el índice de la correcta
function shuffleQuestionOptions(question) {
    // Guardamos el texto de la opción correcta antes de mezclar
    const correctText = question.options[question.correct];
    
    // Mezclamos las opciones
    const shuffledOptions = shuffleArray(question.options);
    
    // Buscamos dónde quedó la correcta tras el mezclado
    const newCorrectIndex = shuffledOptions.indexOf(correctText);
    
    return {
        ...question,
        options: shuffledOptions,
        correct: newCorrectIndex
    };
}

// Cancela cualquier auto-avance pendiente (al navegar manualmente, fallar, etc.)
function cancelAutoAdvance() {
    if (autoAdvanceTimer) {
        clearTimeout(autoAdvanceTimer);
        autoAdvanceTimer = null;
    }
}

// ==========================================
// INICIO DEL TEST (DINÁMICO PARA CUALQUIER UT)
// ==========================================
function startQuiz() {
    if (!currentMode) return;
    
    if (currentMode === 'general') {
        // Une todas las UTs que existan en el objeto questionsDB automáticamente
        let all = [];
        Object.keys(questionsDB).forEach(key => {
            if (Array.isArray(questionsDB[key])) {
                all.push(...questionsDB[key]);
            }
        });
        // Mezclamos preguntas Y opciones de cada pregunta
        currentQuestions = shuffleArray(all).map(shuffleQuestionOptions);
    } else {
        // Mezclamos preguntas Y opciones también en modo UT específico
        currentQuestions = shuffleArray(questionsDB[currentMode] || []).map(shuffleQuestionOptions);
    }
    
    if (currentQuestions.length === 0) {
        alert("Error: No se han encontrado preguntas en este módulo.");
        return;
    }

    // Resetear estado del juego
    currentQuestion = 0;
    score = 0;
    userAnswers = [];
    answered = false;
    cancelAutoAdvance();
    
    // Cambiar visualización de la interfaz
    document.getElementById('modeSelection').style.display = 'none';
    document.getElementById('quizContainer').classList.add('active');
    document.getElementById('progressContainer').style.display = 'block';
    document.getElementById('backToMenu').classList.remove('hidden');
    
    loadQuestion();
    updateProgressBar();
}

// ==========================================
// GESTIÓN DE PREGUNTAS
// ==========================================
function loadQuestion() {
    const q = currentQuestions[currentQuestion];
    const container = document.getElementById('questionContainer');
    answered = userAnswers[currentQuestion] !== undefined;
    
    // Detectar etiqueta de unidad (UT) de forma dinámica
    let unitLabel = currentMode === 'general' ? "" : currentMode.toUpperCase();
    if (currentMode === 'general') {
        for (const key in questionsDB) {
            if (questionsDB[key].some(uq => uq.question === q.question)) {
                unitLabel = key.toUpperCase().replace('UT', 'UT-');
                break;
            }
        }
    }
    
    container.innerHTML = `
        <div class="question-header">
            <span class="question-number">Pregunta ${currentQuestion + 1} de ${currentQuestions.length}</span>
            <span class="question-topic">${unitLabel} - ${q.topic || ''}</span>
        </div>
        <h2>${q.question}</h2>
        <div class="options">
            ${q.options.map((option, index) => {
                let classList = "option";
                if (userAnswers[currentQuestion] === index) classList += " selected";
                if (answered) {
                    if (index === q.correct) classList += " correct";
                    else if (userAnswers[currentQuestion] === index) classList += " incorrect";
                    classList += " disabled";
                }
                return `
                    <div class="${classList}" onclick="selectOption(${index})">
                        <span class="option-letter">${String.fromCharCode(65 + index)}</span>
                        <span>${option}</span>
                    </div>
                `;
            }).join('')}
        </div>
    `;

    if (answered) {
        showFeedback(userAnswers[currentQuestion] === q.correct);
    } else {
        document.getElementById('feedback').classList.remove('show');
    }
    updateButtons();
}

function selectOption(index) {
    if (answered) return;
    const q = currentQuestions[currentQuestion];
    userAnswers[currentQuestion] = index;
    answered = true;
    const isCorrect = (index === q.correct);
    if (isCorrect) score++;
    loadQuestion();

    // Auto-avance a los 3s SOLO si se ha acertado
    // En caso de fallo, se queda quieto para que puedas leer la explicación
    if (isCorrect) {
        cancelAutoAdvance();
        autoAdvanceTimer = setTimeout(() => {
            autoAdvanceTimer = null;
            // Si es la última pregunta y todas están respondidas → resultados
            // Si no, avanzamos a la siguiente
            if (currentQuestion < currentQuestions.length - 1) {
                nextQuestion();
            } else if (userAnswers.length === currentQuestions.length) {
                showResults();
            }
        }, 2000);
    }
}

function showFeedback(isCorrect) {
    const feedback = document.getElementById('feedback');
    feedback.className = `feedback show ${isCorrect ? 'correct' : 'incorrect'}`;
    feedback.innerHTML = `
        <strong>${isCorrect ? '✅ ¡Correcto!' : '❌ Incorrecto'}</strong><br>
        ${currentQuestions[currentQuestion].explanation}
    `;
}

// ==========================================
// NAVEGACIÓN
// ==========================================
function previousQuestion() {
    cancelAutoAdvance(); // Si vuelves atrás, cancela cualquier auto-avance pendiente
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
        updateProgressBar();
    }
}

function nextQuestion() {
    cancelAutoAdvance(); // Si pulsas Siguiente manualmente, cancela el auto-avance
    if (currentQuestion < currentQuestions.length - 1) {
        currentQuestion++;
        loadQuestion();
        updateProgressBar();
    } else if (userAnswers.length === currentQuestions.length) {
        showResults();
    }
}

function updateButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    if (prevBtn) prevBtn.disabled = currentQuestion === 0;
    if (nextBtn) {
        nextBtn.textContent = (currentQuestion === currentQuestions.length - 1) ? 'Ver Resultados' : 'Siguiente';
        nextBtn.disabled = !answered;
    }
}

function updateProgressBar() {
    const progress = ((currentQuestion + 1) / currentQuestions.length) * 100;
    const progressBar = document.getElementById('progressBar');
    if (progressBar) {
        progressBar.style.width = progress + '%';
        progressBar.textContent = Math.round(progress) + '%';
    }
}

/// ==========================================
// REPORTE DE RESULTADOS (PÁGINA COMPLETA - JOSE ACADEMY 🤖)
// ==========================================
function showResults() {
    cancelAutoAdvance();
    document.getElementById('quizContainer').classList.remove('active');
    document.getElementById('resultsScreen').style.display = 'block';
    document.getElementById('progressContainer').style.display = 'none';

    const total = currentQuestions.length;
    const percentage = Math.round((score / total) * 100);
    
    document.getElementById('scoreText').textContent = percentage + '%';
    document.getElementById('correctCount').textContent = score;
    document.getElementById('incorrectCount').textContent = total - score;
    document.getElementById('totalQuestions').textContent = total;

    const scoreProgress = document.getElementById('scoreProgress');
    if (scoreProgress) {
        const offset = 565 - (565 * percentage / 100);
        setTimeout(() => scoreProgress.style.strokeDashoffset = offset, 100);
    }

    const tableContainer = document.getElementById('resultsTableContainer');

    // Filtrar solo las preguntas falladas para la tabla de revisión
    const failedItems = currentQuestions
        .map((q, index) => ({ q, index, isCorrect: userAnswers[index] === q.correct }))
        .filter(item => !item.isCorrect);

    let tableHTML = "";

    if (failedItems.length === 0) {
        // Pleno: ningún fallo que mostrar
        tableHTML = `
            <div style="margin-top: 30px; text-align: center; padding: 30px; background: #f0fff4; border: 1px solid #c3e6cb; border-radius: 15px;">
                <div style="font-size: 2.5em; margin-bottom: 10px;">🏆</div>
                <h3 style="color: #28a745; margin-bottom: 10px;">Pleno de aciertos</h3>
                <p style="color: #155724; margin: 0;">Has respondido correctamente las <strong>${total}</strong> preguntas. No hay fallos que revisar.</p>
            </div>
        `;
    } else {
        // 1. Tabla solo con fallos
        tableHTML = `
            <div style="margin-top: 30px; text-align: left;">
                <h3 style="margin-bottom: 20px; padding-left: 10px; border-left: 5px solid #dc3545; color: #333;">
                    Revisión de Fallos (${failedItems.length} de ${total})
                </h3>
                <div style="overflow-x: auto;">
                    <table style="width: 100%; border-collapse: separate; border-spacing: 0 10px; font-size: 0.9em;">
                        <thead>
                            <tr style="color: #666; text-transform: uppercase; font-size: 0.8em; letter-spacing: 1px;">
                                <th style="padding: 15px; text-align: center;">Nº</th>
                                <th style="padding: 15px;">Pregunta</th>
                                <th style="padding: 15px;">Tu Respuesta / Correcta</th>
                            </tr>
                        </thead>
                        <tbody>
        `;

        failedItems.forEach(({ q, index }) => {
            tableHTML += `
                <tr style="background-color: #fff5f5; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
                    <td style="padding: 20px; text-align: center; font-weight: bold; border-radius: 10px 0 0 10px; border: 1px solid #eee; border-right: none;">${index + 1}</td>
                    <td style="padding: 20px; border-top: 1px solid #eee; border-bottom: 1px solid #eee;">
                        <span style="font-weight: 500; color: #333;">${q.question}</span>
                    </td>
                    <td style="padding: 20px; border: 1px solid #eee; border-left: none; border-radius: 0 10px 10px 0;">
                        <div style="color: #dc3545; text-decoration: line-through; font-size: 0.85em;">
                            ${q.options[userAnswers[index]] || 'Sin responder'}
                        </div>
                        <div style="color: #28a745; font-weight: bold; margin-top: 5px;">
                            → ${q.options[q.correct]}
                        </div>
                    </td>
                </tr>
            `;
        });

        tableHTML += `</tbody></table></div></div>`;
    }
    
    // 2. Bloque de Certificación Jose Academy
    let certificationHTML = "";
    if (percentage >= 50) {
        certificationHTML = `
            <div style="background: #f0fff4; border: 1px solid #c3e6cb; padding: 25px; border-radius: 15px; margin-top: 30px; text-align: center; box-shadow: 0 4px 15px rgba(40, 167, 69, 0.1);">
                <div style="font-size: 2em; margin-bottom: 10px;">🌟</div>
                <strong style="color: #28a745; font-size: 1.4em; text-transform: uppercase; letter-spacing: 1px;">¡Certificación Obtenida!</strong>
                <p style="margin: 15px 0; color: #155724; font-size: 1.1em;">Has superado con éxito la evaluación oficial de <strong>Jose Academy</strong> con un rendimiento del <strong>${percentage}%</strong>.</p>
            </div>
        `;
    } else {
        certificationHTML = `
            <div style="background: #fff5f5; border: 1px solid #f5c6cb; padding: 25px; border-radius: 15px; margin-top: 30px; text-align: center; box-shadow: 0 4px 15px rgba(220, 53, 69, 0.1);">
                <div style="font-size: 2em; margin-bottom: 10px;">📚</div>
                <strong style="color: #dc3545; font-size: 1.4em; text-transform: uppercase; letter-spacing: 1px;">Revisión Necesaria</strong>
                <p style="margin: 15px 0; color: #721c24; font-size: 1.1em;">No has superado con éxito la puntuación mínima requerida en la evaluación oficial de <strong>Jose Academy</strong>. Revisa los puntos de mejora y vuelve a intentarlo.</p>
            </div>
        `;
    }

    // 3. Sello de Pie de Página Profesional
    const reportFooter = `
        <div style="margin-top: 50px; padding: 30px 20px; border-top: 2px solid #667eea; text-align: center; color: #444; font-size: 0.9em;">
            <div style="font-weight: bold; margin-bottom: 8px; font-size: 1.1em; color: #333;">🤖 Jose Academy — Digital Credentials</div>
            <div style="color: #666;">ID de Verificación: JA-${Math.floor(Math.random() * 90000) + 10000} | Ciclo Académico 2026</div>
            <div style="margin-top: 10px; color: #667eea; font-weight: bold; font-size: 0.8em; text-transform: uppercase; letter-spacing: 2px;">Evaluación Profesional de IT</div>
        </div>
    `;

    // Inyección final en el contenedor
    tableContainer.innerHTML = tableHTML + certificationHTML + reportFooter;
}

// ==========================================
// UTILIDADES
// ==========================================
function returnToMenu() {
    cancelAutoAdvance();
    document.getElementById('resultsScreen').style.display = 'none';
    document.getElementById('quizContainer').classList.remove('active');
    document.getElementById('modeSelection').style.display = 'block';
    document.getElementById('backToMenu').classList.add('hidden');
    document.querySelectorAll('.mode-card').forEach(card => card.classList.remove('selected'));
    document.getElementById('startBtn').disabled = true;
}

function restartSameMode() {
    cancelAutoAdvance();
    document.getElementById('resultsScreen').style.display = 'none';
    startQuiz();
}

// Bloquear salida accidental
window.addEventListener('beforeunload', function (e) {
    if (userAnswers.length > 0 && document.getElementById('quizContainer').classList.contains('active')) {
        e.preventDefault();
        e.returnValue = '';
    }
});
