// Datos del juego
const listaPermitidos = ["Victoria", "Emilia", "Rosaura", "Eugenia", "Ignacio", "Arturo", "Ness"];

// Definir los íconos personalizados
const iconos = {
    "Victoria": "🌙❤️",
    "Emilia": "🕯️✨", 
    "Rosaura": "🌸",
    "Eugenia": "🐦",
    "Ignacio": "🔱",
    "Arturo": "🎶",
    "Ness": "🔥"
};

const calaveritas = {
    Victoria: `En el Mictlán la vio la luna brillar,\nVictoria sus pasos no podía ya ocultar.\nEntre sombras y viento su alma temblaba,\ny el recuerdo de errores su pecho ahogaba.\n\nSus sueños dorados flotaban sin cesar,\npero la pereza la hacía titubear.\nLos pétalos caían con un lento rugir,\ny su corazón noble no dejaba de latir.\n\nLos muertos susurraban secretos del ayer,\ny Victoria escuchaba sin saber qué hacer.\nEl río de almas le guiaba la verdad,\nmostrándole caminos de amor y lealtad.\n\nLa noche oscura envolvía su andar,\nsus dudas querían su espíritu quebrar.\nPero un hilo brillante surgió entre el dolor,\nVictoria lo siguió, guiada por el amor.\n\nUn murmullo surgió de un rincón sombrío,\nun hilo brillante que guiaba su desvarío.\nVictoria sonrió y en sus labios brilló,\notro nombre desbloquear, su destino eligió.`,

    Emilia: `Entre la niebla Emilia se abrió paso,\ncon su energía pura, aunque sentía el ocaso.\nSus manos temblaban, su cuerpo frágil estaba,\npero su alma ardiente jamás se rendía, ni callaba.\n\nPétalos dorados la rodeaban al andar,\ny los susurros de Victoria la volvieron a animar.\nEl Mictlán parecía un mundo sin final,\npero un hilo de esperanza iluminó su andar fatal.\n\nEntre tumbas y sombras sus pasos resonaban,\ny voces antiguas su corazón tocaban.\nEl lamento de los muertos la hizo temblar,\npero su risa y arte la volvieron a levantar.\n\nCada rincón oscuro la retaba sin cesar,\nsus manos creativas buscaban cómo escapar.\nEl viento le hablaba de historias por venir,\ny Emilia comprendió que debía persistir.\n\nCon risa y arte, Emilia halló su destino,\ny otro nombre esperaba, un secreto divino.\nSu calavera brilló entre sombras y dolor,\ndesbloquear otro ser era ahora su labor.`,

    Rosaura: `Rosaura avanzaba con pasos de fuego,\nel Mictlán la observaba, cruel y sin ruego.\nSu carácter impetuoso temía que cayera,\npero era su fuerza interior que la elevaba y sostuviera.\n\nEntre lamentos y ecos, el mundo parecía caer,\nsus dudas y temores la querían retener.\nLos pétalos danzaban, girando sin parar,\ny un hilo invisible la invitó a continuar.\n\nEl viento gritaba secretos del dolor,\npero ella avanzaba con ímpetu y valor.\nCada sombra la probaba sin compasión,\npero su alma valiente no conocía rendición.\n\nEn las tinieblas, un hilo dorado apareció,\ny Rosaura comprendió que alguien la guio.\nSus hermanas y familia la aguardaban al final,\ny un nuevo nombre brillaba entre lo abismal.\n\nRosaura entendió que su familia la guiaba,\ny otro nombre aguardaba, mientras la historia avanzaba.\nCon risa and bravura, su destino cambió,\nun nuevo ser en la cadena el Mictlán añadió.`,

    Eugenia: `Eugenia sintió el peso de su hogar,\nel desorden pasado la quería atrapar.\nEntre sombras y susurros la desesperanza crecía,\npero su alma enérgica nunca se rendía.\n\nPétalos dorados como lágrimas caían,\ny la memoria de sus hijas su espíritu encendía.\nEl Mictlán rugía, oscuro y cruel,\npero su mirada firme dibujó un hilo de miel.\n\nEl eco de los muertos le habló sin cesar,\nmostrándole caminos que debía intentar.\nEl caos la llamaba con un grito feroz,\npero Eugenia avanzó con un corazón veloz.\n\nSu fuerza maternal irradiaba luz,\naun cuando la noche deseaba verla en su cruz.\nLos nombres de sus hijas flotaban en el aire,\nguiando su destino con un hilo de oro.\n\nCon determinación, Eugenia avanzó,\ny un nuevo nombre entre sombras encontró.\nGuía y madre eterna, su luz brilló,\ny otra alma al juego de recuerdos sumó.`,

    Ignacio: `Ignacio vagaba entre pasillos sombríos,\ncurioso y sabio, temía mil desvaríos.\nSus pasos eran lentos, sus dudas pesadas,\npero su voz firme guiaba almas desamparadas.\n\nEntre ecos y lamentos, escuchó un rumor,\nun hilo que lo llamaba, un secreto en flor.\nPétalos y brumas danzaban sin fin,\ny su destino se unió al de aquel confín.\n\nLos susurros le contaban historias antiguas,\ny cada palabra despertaba mil intrigas.\nEl viento traía memorias de otro lugar,\ny su sabiduría supo el camino hallar.\n\nSus errores pasados no lo hicieron caer,\nsu valor y experiencia lo ayudaron a vencer.\nCon paso firme, otro nombre desbloqueó,\ny un hilo dorado su destino selló.\n\nCon audacia y experiencia, Ignacio persistió,\ny otro nombre secreto el Mictlán descubrió.\nEntre sombras y luces, su camino trazó,\ny otra alma hacia la historia atrajo.`,

    Arturo: `Arturo sentía la tristeza en su andar,\nla música de la vida parecía callar.\nLejos de Emilia, su alma temblaba,\npero el amor y la esperanza lo sostenían y guiaban.\n\nLos pétalos dorados caían sin cesar,\ny voces de familia lo volvían a animar.\nEntre sombras y ecos de amor y dolor,\npercibió otro nombre que le daba valor.\n\nSu risa temblaba entre muros y gritos,\npero la alegría brotaba en sus pasos benditos.\nEl viento le hablaba de futuros lejanos,\ny su corazón guiaba almas hermanas y hermanos.\n\nEntre risas y lágrimas, un hilo dorado vio,\ny comprendió que otro ser la cadena abrió.\nArturo avanzó, con fuerza y pasión,\ndesbloqueando otra alma con su corazón.`,

    Ness: `Ness caminaba solo, con solo la oscuridad para abrazar,\nsu amor por Victoria no podía olvidar.\nEl Mictlán lo llamaba con ímpetu y dolor,\npero su corazón latía con silencioso ardor.\n\nSus amigos y seres queridos ya hallaban la luz,\npero él permanecía solo encontrando una cruz.\nEntre pétalos dorados y bruma sin fin,\nofreció su sacrificio, por todos al fin.\n\nSus pasos resonaban en corredores sombríos,\ny cada sombra lo tentaba con susurros fríos.\nPero su deseo y amor, fue más fuerte que el miedo y el dolor.\n\nAceptó quedarse con su destino sellado,\npero las almas que amaba fueron salvadas, liberadas.\nEl Mictlán lloró y al fin entendió,\nsu entrega final la eternidad ganó.`
};

const finalPoema = `Y en el silencio profundo de aquel río sin orillas,\ndonde las sombras danzaban con las almas sencillas,\nlos pétalos dorados flotaban como susurros de antaño,\ntrazando caminos de luz sobre el oscuro paño.\n\nVictoria, Emilia y Rosaura, unidas en abrazo eterno,\nsus risas quebraron el frío del universo moderno.\nEugenia e Ignacio, guardianes del hogar sagrado,\nvieron sus esfuerzos y virtudes al fin recompensado.\n\nArturo, con su voz, tejió historias entre la penumbra,\ny los ecos del Mictlán se convirtieron en un dulce andar.\nSu amor por Emilia, tierno y fuerte como la vida,\nresplandecía entre las sombras, luz que nunca se olvida.\n\nJuntos compartieron secretos, risas y sus temores,\nsus corazones entrelazados, vencedores de temores.\nPero Ness, en su soledad, vio que su hora llegaba,\ny con un suspiro profundo, su sacrificio entregaba.\n\nAntes de fundirse con la bruma y los pétalos de oro,\nmiró a Victoria, su amor perdido y dijo sonoro:\n"Que tus días brillen sin mí, alma querida,\nmi corazón queda contigo, más allá de esta vida."\n\nSu amor callado, su entrega y su corazón valiente,\nse fundieron con el río de almas, eternamente.\nLas sombras retrocedieron y la bruma se hizo ligera,\nmientras cada nombre resplandecía bajo la luz certera.\n\nEl Mictlán suspiró, los muertos aplaudieron,\ny los pétalos de cempasúchil al viento renacieron.\nPorque en la oscuridad más densa, siempre hay un hilo dorado,\ny las almas que se aman jamás quedan olvidadas.\n\nY así, entre la noche eterna y la luz que no se extingue,\nlos nombres guardados, en un lazo que persiste y distingue,\nbrillan como constelaciones sobre el río sombrío,\ny Ness, silencioso, observa con amor escondido.\n\nEl ciclo se cerró, y la vida y la muerte, en danza infinita,\nentrelazaron destinos, lágrimas y sonrisas benditas.\nEl Mictlán cantó su última canción de amor y entrega,\ny las almas salvadas flotaron, libres, envueltas en un manto de fulgor.`;

// ========== CONTROL DE MÚSICA ==========
let musicaActiva = true;

function toggleMusica() {
    const audio = document.getElementById("bg-music");
    const botonMusica = document.getElementById("musicToggle");
    
    if (musicaActiva) {
        audio.pause();
        botonMusica.innerHTML = "🎵 Invocar Cánticos";
        botonMusica.style.color = "#00ff88";
        musicaActiva = false;
    } else {
        audio.play().catch(e => console.log("Audio requiere interacción del usuario"));
        botonMusica.innerHTML = "🔇 Silenciar Cánticos";
        botonMusica.style.color = "#ffaa88";
        musicaActiva = true;
    }
}

// También puedes agregar esta función para manejar mejor el audio
function pausarMusica() {
    const audio = document.getElementById("bg-music");
    audio.pause();
    const botonMusica = document.getElementById("musicToggle");
    botonMusica.innerHTML = "🎵 Invocar Cánticos";
    botonMusica.style.color = "#00ff88";
    musicaActiva = false;
}

function reanudarMusica() {
    const audio = document.getElementById("bg-music");
    audio.play().catch(e => console.log("Audio requiere interacción del usuario"));
    const botonMusica = document.getElementById("musicToggle");
    botonMusica.innerHTML = "🔇 Silenciar Cánticos";
    botonMusica.style.color = "#ffaa88";
    musicaActiva = true;
}

// Variables de juego
let randomNumber, invalidAttempts, validAttemptsLeft;
let totalIntentos = 10;
let unlockedNames = [];
let perdidasConsecutivas = 0, perdidasTotales = 0;

// Variables de tracking
let playerData = {
    nombre: "",
    inicioTiempo: null,
    finTiempo: null,
    intentosTotales: 0,
    completado: false,
    dispositivo: "",
    historialIntentos: []
};

// ========== FUNCIONES DE PETALOS ==========
function crearPetalos() {
    const esMovil = window.innerWidth <= 768;
    const cantidad = esMovil ? 12 : 18;
    
    for (let i = 0; i < cantidad; i++) {
        const petalo = document.createElement("div");
        petalo.classList.add("petalo");
        petalo.style.left = Math.random() * 100 + "vw";
        petalo.style.animationDuration = (6 + Math.random() * 5) + "s";
        petalo.style.animationDelay = (Math.random() * 3) + "s";
        
        if (esMovil) {
            petalo.style.width = petalo.style.height = (8 + Math.random() * 6) + "px";
        } else {
            petalo.style.width = petalo.style.height = (10 + Math.random() * 8) + "px";
        }
        
        document.body.appendChild(petalo);
        
        setTimeout(() => {
            if (petalo.parentNode) {
                petalo.parentNode.removeChild(petalo);
            }
        }, 12000);
    }
}

// Inicializar pétalos
crearPetalos();
setInterval(crearPetalos, 2000);

window.addEventListener('resize', function() {
    document.querySelectorAll('.petalo').forEach(petalo => petalo.remove());
    crearPetalos();
});

// ========== FUNCIONES DE USABILIDAD ==========
function detectarDispositivo() {
    const ua = navigator.userAgent;
    let dispositivo = "";

    if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
        dispositivo = "Móvil";
    } else if (/Tablet|iPad|PlayBook|Silk|Xoom|SCH-I800|GT-P1000/.test(ua)) {
        dispositivo = "Tablet";
    } else {
        dispositivo = "Escritorio";
    }

    let navegador = "";
    if (ua.includes("Chrome") && !ua.includes("Edg")) navegador = "Chrome";
    else if (ua.includes("Firefox")) navegador = "Firefox";
    else if (ua.includes("Safari") && !ua.includes("Chrome")) navegador = "Safari";
    else if (ua.includes("Edg")) navegador = "Edge";
    else navegador = "Otro";

    return `${dispositivo} - ${navegador}`;
}

function ajustarUI() {
    const esMovil = window.innerWidth <= 768;
    const esTablet = window.innerWidth > 768 && window.innerWidth <= 1024;
    
    if (esMovil) {
        document.body.style.fontSize = '14px';
        setTimeout(() => {
            const input = document.getElementById('guess');
            if (input) input.focus();
        }, 500);
    }
    
    if (esTablet) {
        document.body.style.fontSize = '15px';
    }
}

// Event listeners de usabilidad
window.addEventListener('load', ajustarUI);
window.addEventListener('resize', ajustarUI);

document.addEventListener('touchmove', function(e) {
    if (e.touches.length > 1) {
        e.preventDefault();
    }
}, { passive: false });

document.addEventListener('touchstart', function() {
    const inputJuego = document.getElementById('guess');
    const popup = document.getElementById('popup');
    
    if (inputJuego && popup.style.display === 'none') {
        setTimeout(() => inputJuego.focus(), 100);
    }
});

// ========== EVENT LISTENERS PARA ENTER ==========
document.getElementById("nombreJugador").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        verificarNombre();
    }
});

document.getElementById("guess").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        checkGuess();
    }
});

// ========== FUNCIONES PRINCIPALES DEL JUEGO ==========
function verificarNombre() {
    const nombre = document.getElementById("nombreJugador").value.trim();
    const mensaje = document.getElementById("mensajeAcceso");
    if (!/^[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+$/.test(nombre)) {
        mensaje.innerHTML = "💀 Tu nombre debe comenzar con mayúscula y ser una sola palabra, como un susurro en la noche.";
        mensaje.style.color = "#ffaa88";
        return;
    }
    if (!listaPermitidos.includes(nombre)) {
        mensaje.innerHTML = `"${nombre}" no está en el altar de los recordados. Tu alma aún no ha sido invocada.`;
        mensaje.style.color = "#ff9999";
        return;
    }

    // INICIALIZAR TRACKING
    playerData = {
        nombre: nombre,
        inicioTiempo: new Date(),
        finTiempo: null,
        intentosTotales: 0,
        completado: false,
        dispositivo: detectarDispositivo(),
        historialIntentos: []
    };

    // Audio
    const audio = document.getElementById("bg-music");
    audio.volume = 0.3;
    audio.play().catch((err) => console.log("Audio bloqueado."));

    // Mostrar juego
    document.getElementById("popup").style.display = "none";
    document.getElementById("gameContainer").style.display = "flex";
    document.getElementById("juego").style.display = "block";
    document.getElementById("poemaLateral").style.display = "block";
    mostrarCalaverita(nombre);
    unlockedNames.push(nombre);
    actualizarUnlockedNames();
    iniciarJuego();
}

function mostrarCalaverita(nombre) {
    document.getElementById("poema-titulo").innerText = nombre;
    document.getElementById("poema-contenido").innerText = calaveritas[nombre];
}

function actualizarUnlockedNames() {
    const div = document.getElementById("unlockedNames");
    div.innerHTML = "";
    unlockedNames.forEach((n) => {
        const btn = document.createElement("button");
        btn.innerHTML = `${iconos[n]} ${n}`; // Agregar ícono al botón
        btn.className = "name-button";
        btn.style.display = "inline-block";
        btn.onclick = () => mostrarCalaverita(n);
        div.appendChild(btn);
    });
}

function crearBarraIntentos() {
    const barra = document.getElementById("barraIntentos");
    barra.innerHTML = "";
    for (let i = 0; i < totalIntentos; i++) {
        const bloque = document.createElement("div");
        bloque.classList.add("intento-bloque");
        barra.appendChild(bloque);
    }
}

function actualizarBarra() {
    const bloques = document.querySelectorAll(".intento-bloque");
    bloques.forEach((b, i) => b.classList.toggle("inactivo", i >= validAttemptsLeft));
}

function iniciarJuego() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    invalidAttempts = 0;
    validAttemptsLeft = totalIntentos;
    document.getElementById("guess").value = "";
    document.getElementById("feedback").innerText = "";
    document.getElementById("intentos").innerText = `Tienes ${totalIntentos} intentos`;
    crearBarraIntentos();
    actualizarBarra();
}

function checkGuess() {
    const input = document.getElementById("guess");
    const val = input.value.trim();
    input.value = "";
    input.focus();
    const feedback = document.getElementById("feedback");

    // Registrar intento
    playerData.intentosTotales++;

    if (val === "" || isNaN(val)) {
        invalidAttempts++;
        feedback.innerText = `Ofrenda vana... (${invalidAttempts}/2) Tu alma se debilita.`;
        feedback.style.color = "orange";
        if (invalidAttempts >= 2) {
            perdidasConsecutivas++;
            perdidasTotales++;
            setTimeout(() => reinicioUltimaOportunidad(), 2000);
        }
        return;
    }
    const guess = Number(val);
    if (guess < 1 || guess > 100) {
        invalidAttempts++;
        feedback.innerText = `Tu ofrenda debe estar entre 1 y 100 (${invalidAttempts}/2). El camino se oscurece.`;
        feedback.style.color = "orange";
        if (invalidAttempts >= 2) {
            perdidasConsecutivas++;
            perdidasTotales++;
            setTimeout(() => reinicioUltimaOportunidad(), 2000);
        }
        return;
    }
    invalidAttempts = 0;
    if (guess === randomNumber) {
        feedback.innerText = "🌺 ¡Acertaste! Una ofrenda de luz te espera en el Mictlán... 💀";
        feedback.style.color = "#00ff88";
        setTimeout(() => desbloquearSiguienteNombre(), 1000);
    } else {
        validAttemptsLeft--;
        actualizarBarra();
        document.getElementById("intentos").innerText = `Intentos restantes: ${validAttemptsLeft}`;
        feedback.innerText = guess < randomNumber ? "🌑 Tu ofrenda es muy baja..." : "🔥 Tu ofrenda es muy alta...";
        feedback.style.color = "red";
        if (validAttemptsLeft <= 0) {
            perdidasConsecutivas++;
            perdidasTotales++;
            setTimeout(() => reinicioUltimaOportunidad(), 2000);
        }
    }
}

function reinicioUltimaOportunidad() {
    // GUARDAR DATOS CUANDO PIERDE
    playerData.finTiempo = new Date();
    playerData.completado = false;

    const historial = JSON.parse(localStorage.getItem("historialMictlan") || "[]");
    historial.push({
        ...playerData,
        tiempoTotal: playerData.finTiempo - playerData.inicioTiempo,
        fechaAcceso: playerData.inicioTiempo.toISOString()
    });
    localStorage.setItem("historialMictlan", JSON.stringify(historial));

    if (perdidasConsecutivas >= 2 || perdidasTotales >= 5) {
        if (confirm("Tu alma tambalea en el Mictlán. Los dioses te ofrecen una última oportunidad: adivina un número del 1 al 5. ¿Aceptas este don final?")) {
            const numeroAleatorio = Math.floor(Math.random() * 5) + 1;
            const respuestaUsuario = prompt("Escribe tu número entre 1 y 5, viajero del más allá");

            if (Number(respuestaUsuario) === numeroAleatorio) {
                iniciarJuego();
                return;
            } else {
                alert("El Mictlán te ha reclamado... Tu viaje termina aquí.");
                location.reload();
            }
        } else {
            alert("El Mictlán te ha reclamado... Tu viaje termina aquí.");
            location.reload();
        }
    } else {
        iniciarJuego();
    }
}

function desbloquearSiguienteNombre() {
    const siguiente = listaPermitidos.find((n) => !unlockedNames.includes(n));

    if (!siguiente) {
        mostrarFinal();
        return;
    }

    unlockedNames.push(siguiente);
    mostrarCalaverita(siguiente);
    actualizarUnlockedNames();

    if (unlockedNames.length === listaPermitidos.length) {
        setTimeout(mostrarFinal, 1500);
    } else {
        iniciarJuego();
    }
}

function mostrarFinal() {
    // GUARDAR DATOS CUANDO GANA
    playerData.finTiempo = new Date();
    playerData.completado = true;

    const historial = JSON.parse(localStorage.getItem("historialMictlan") || "[]");
    historial.push({
        ...playerData,
        tiempoTotal: playerData.finTiempo - playerData.inicioTiempo,
        fechaAcceso: playerData.inicioTiempo.toISOString()
    });
    localStorage.setItem("historialMictlan", JSON.stringify(historial));

    document.getElementById("gameContainer").style.display = "none";
    const pdfScreen = document.getElementById("pdfScreen");
    pdfScreen.style.display = "block";

    // Generar lista de poemas
    const listaPoemas = document.getElementById("poemasLista");
    listaPoemas.innerHTML = "";

    // Agregar PRIMERO "El Último Susurro" como botón
    const itemFinal = document.createElement("button");
    itemFinal.className = "poema-item activo";
    itemFinal.innerHTML = "💀 El Último Susurro";
    itemFinal.onclick = function () {
        document.querySelectorAll(".poema-item").forEach((el) => {
            el.classList.remove("activo");
        });
        this.classList.add("activo");
        document.getElementById("poemaContenido").innerHTML =
            `<h3 style="color: #8B0000; text-align: center; margin-bottom: 20px;">💀 El Último Susurro del Mictlán</h3>
             <div class="poema-texto-final">${finalPoema}</div>`;
    };
    listaPoemas.appendChild(itemFinal);

    // Luego agregar los nombres como botones con íconos
    listaPermitidos.forEach((nombre) => {
        const item = document.createElement("button");
        item.className = "poema-item";
        item.innerHTML = `${iconos[nombre]} ${nombre}`;
        item.onclick = function () {
            document.querySelectorAll(".poema-item").forEach((el) => {
                el.classList.remove("activo");
            });
            this.classList.add("activo");
            document.getElementById("poemaContenido").innerHTML =
                `<h3 style="color: #ff8c00; text-align: center; margin-bottom: 20px;">${iconos[nombre]} ${nombre} ${iconos[nombre]}</h3>
                 <div class="poema-texto-final">${calaveritas[nombre]}</div>`;
        };
        listaPoemas.appendChild(item);
    });

    // Mostrar automáticamente "El Último Susurro"
    itemFinal.click();
}

function mostrarUltimoSusurro() {
    // Simplemente mostrar "El Último Susurro" sin generar PDF
    document.querySelectorAll(".poema-item").forEach((el) => {
        el.classList.remove("activo");
    });
    
    // Activar el botón "El Último Susurro"
    const itemFinal = document.querySelector(".poema-item");
    if (itemFinal) {
        itemFinal.classList.add("activo");
    }
    
    document.getElementById("poemaContenido").innerHTML =
        `<h3 style="color: #8B0000; text-align: center; margin-bottom: 20px;">💀 El Último Susurro del Mictlán</h3>
         <div class="poema-texto-final">${finalPoema}</div>`;
}

function downloadPDF() {
    // Descargar el PDF desde el repositorio de GitHub
    const pdfUrl = "doc/crónicasDelMictlán.pdf";
    
    // Crear un enlace temporal para descargar el PDF
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Crónicas_del_Mictlán.pdf";
    link.target = "_blank";
    
    // Simular clic en el enlace
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// ========== PANEL ADMINISTRATIVO ==========
function solicitarPasswordAdmin() {
    const password = prompt("🔐 Contraseña de administrador:");
    if (password === "mictlan2024") {
        mostrarPanelAdmin();
    } else if (password) {
        alert("❌ Contraseña incorrecta");
    }
}

function mostrarPanelAdmin() {
    if (document.getElementById("panelAdmin")) {
        document.getElementById("panelAdmin").style.display = "block";
        return;
    }

    const panelHTML = `
<div id="panelAdmin" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.9); z-index: 9999; overflow-y: auto; padding: 20px;">
    <div style="max-width: 1200px; margin: 0 auto; background: #1a0606; border: 2px solid #ffbf00; border-radius: 12px; padding: 20px; color: white;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
            <h2 style="color: #ffcc00;">✨🌙 Panel de Administración 🕯️</h2>
            <button onclick="cerrarPanelAdmin()" style="background: #8B0000; color: white; border: none; padding: 10px 15px; border-radius: 5px; cursor: pointer;">Cerrar</button>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin-bottom: 20px;">
            <div style="background: rgba(255,255,255,0.1); padding: 15px; border-radius: 8px; text-align: center;">
                <div style="font-size: 24px; font-weight: bold; color: #ffdd99;" id="adminTotalPlayers">0</div>
                <div style="color: #ffaa88; font-size: 12px;">Total Jugadores</div>
            </div>
            <div style="background: rgba(255,255,255,0.1); padding: 15px; border-radius: 8px; text-align: center;">
                <div style="font-size: 24px; font-weight: bold; color: #ffdd99;" id="adminCompleted">0</div>
                <div style="color: #ffaa88; font-size: 12px;">Completados</div>
            </div>
            <div style="background: rgba(255,255,255,0.1); padding: 15px; border-radius: 8px; text-align: center;">
                <div style="font-size: 24px; font-weight: bold; color: #ffdd99;" id="adminAvgAttempts">0</div>
                <div style="color: #ffaa88; font-size: 12px;">Intentos Promedio</div>
            </div>
        </div>
        
        <div style="display: flex; gap: 10px; margin-bottom: 20px; flex-wrap: wrap;">
            <button onclick="adminExportCSV()" style="padding: 10px 15px; background: orange; color: #2b0a0a; border: none; border-radius: 5px; cursor: pointer;">📊 Exportar CSV</button>
            <button onclick="adminClearData()" style="padding: 10px 15px; background: #8B0000; color: white; border: none; border-radius: 5px; cursor: pointer;">🗑️ Limpiar Datos</button>
            <button onclick="adminRefresh()" style="padding: 10px 15px; background: #2b0a0a; color: orange; border: 1px solid orange; border-radius: 5px; cursor: pointer;">🔄 Actualizar</button>
        </div>
        
        <div style="overflow-x: auto;">
            <table style="width: 100%; border-collapse: collapse;">
                <thead>
                    <tr style="background: rgba(139,0,0,0.3);">
                        <th style="padding: 12px; text-align: left; color: #ffcc00;">Nombre</th>
                        <th style="padding: 12px; text-align: left; color: #ffcc00;">Fecha</th>
                        <th style="padding: 12px; text-align: left; color: #ffcc00;">Completado</th>
                        <th style="padding: 12px; text-align: left; color: #ffcc00;">Intentos</th>
                        <th style="padding: 12px; text-align: left; color: #ffcc00;">Tiempo</th>
                        <th style="padding: 12px; text-align: left; color: #ffcc00;">Dispositivo</th>
                    </tr>
                </thead>
                <tbody id="adminTableBody"></tbody>
            </table>
            <div id="adminEmptyMessage" style="text-align: center; padding: 40px; color: #ffaa88; display: none;">No hay datos de jugadores disponibles.</div>
        </div>
    </div>
</div>`;

    document.body.insertAdjacentHTML("beforeend", panelHTML);
    adminRefresh();
}

function cerrarPanelAdmin() {
    document.getElementById("panelAdmin").style.display = "none";
}

function adminRefresh() {
    const historial = JSON.parse(localStorage.getItem("historialMictlan") || "[]");
    const tableBody = document.getElementById("adminTableBody");
    const emptyMessage = document.getElementById("adminEmptyMessage");

    if (historial.length === 0) {
        tableBody.innerHTML = "";
        emptyMessage.style.display = "block";
    } else {
        emptyMessage.style.display = "none";
        historial.sort((a, b) => new Date(b.fechaAcceso) - new Date(a.fechaAcceso));

        tableBody.innerHTML = historial
            .map(
                (player) => `
      <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
        <td style="padding: 10px;">${player.nombre}</td>
        <td style="padding: 10px;">${new Date(player.fechaAcceso).toLocaleString()}</td>
        <td style="padding: 10px; color: ${player.completado ? "#00ff88" : "#ff4444"};">${player.completado ? "SÍ" : "NO"}</td>
        <td style="padding: 10px;">${player.intentosTotales}</td>
        <td style="padding: 10px;">${Math.round(player.tiempoTotal / 1000 / 60)}m ${Math.round((player.tiempoTotal / 1000) % 60)}s</td>
        <td style="padding: 10px;">${player.dispositivo}</td>
      </tr>
    `
            )
            .join("");
    }

    const totalPlayers = historial.length;
    const completedGames = historial.filter((p) => p.completado).length;
    const avgAttempts = totalPlayers > 0 ? Math.round(historial.reduce((sum, p) => sum + p.intentosTotales, 0) / totalPlayers) : 0;

    document.getElementById("adminTotalPlayers").textContent = totalPlayers;
    document.getElementById("adminCompleted").textContent = completedGames;
    document.getElementById("adminAvgAttempts").textContent = avgAttempts;
}

function adminExportCSV() {
    const historial = JSON.parse(localStorage.getItem("historialMictlan") || "[]");

    if (historial.length === 0) {
        alert("No hay datos para exportar.");
        return;
    }

    const headers = ["Nombre", "Fecha", "Completado", "Intentos", "Tiempo (min)", "Dispositivo"];
    const csvData = historial.map((player) => [
        player.nombre,
        new Date(player.fechaAcceso).toLocaleString(),
        player.completado ? "SÍ" : "NO",
        player.intentosTotales,
        Math.round(player.tiempoTotal / (60 * 1000)),
        player.dispositivo
    ]);

    const csvContent = [headers.join(","), ...csvData.map((row) => row.join(","))].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `estadisticas_mictlan_${new Date().toISOString().split("T")[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function adminClearData() {
    if (confirm("¿Estás seguro de que quieres eliminar todo el historial? Esta acción no se puede deshacer.")) {
        localStorage.removeItem("historialMictlan");
        adminRefresh();
        alert("Historial eliminado correctamente.");
    }

}
