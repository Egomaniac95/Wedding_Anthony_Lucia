/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */



//configuración personalizada
var particlesConfig =  
{
  "particles": {
    "number": {
      "value": 300,
      "density": {
        "enable": false
      }
    },
    "color": {
      "value": ["#e47a2e", "#f7d794", "#b76e79"]
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": ["#000000"]
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.7,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.3,
        "sync": false
      }
    },
    "size": {
      "value": 4,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1.5,
      "direction": "top",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "bubble"
      },
      "onclick": {
        "enable": false,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 200,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 8,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
};
// --- NUEVO CÓDIGO PARA LEER VARIABLES CSS ---

// 1. Espera a que el DOM esté listo
document.addEventListener('DOMContentLoaded', (event) => {

  // 2. Obtiene los estilos computados del :root (donde viven tus variables)
  const rootStyles = window.getComputedStyle(document.documentElement);
  
  // 3. Lee el valor de cada variable de color
  // .trim() es importante para quitar espacios en blanco
  const colorOrange = rootStyles.getPropertyValue('--orange').trim();
  const colorYellow = rootStyles.getPropertyValue('--red-violet').trim();
  const colorRose = rootStyles.getPropertyValue('--dark').trim();

  // 4. Inyecta los colores leídos en el objeto de configuración
  // Solo si se leyeron correctamente
  if (colorOrange && colorYellow && colorRose) {
    particlesConfig.particles.color.value = [colorOrange, colorYellow, colorRose];
  };
// Obtener el ancho de la pantalla
var screenWidth = window.innerWidth;

// Ajustar el número de partículas en función del ancho de la pantalla
if (screenWidth < 576) { // Pantallas más pequeñas que 576px
  particlesConfig.particles.number.value = 250;
  particlesConfig.particles.size.value = 2.5;
  particlesConfig.particles.number.density.enable = false;
}else if (screenWidth < 768) { // Pantallas más pequeñas que 768px
  particlesConfig.particles.number.value = 250;
  particlesConfig.particles.size.value = 2.5;
  particlesConfig.particles.number.density.enable = false;
} else { // Pantallas más grandes que 991px
  particlesConfig.particles.number.value = 350;
  particlesConfig.particles.size.value = 3;
  particlesConfig.particles.number.density.enable = false;
};

particlesJS('particles-js',
 particlesConfig
);
});