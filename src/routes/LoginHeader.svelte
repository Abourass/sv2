<script lang="ts">
	import type svelteParticles from 'svelte-particles';
	import { onMount } from 'svelte';
	import anime from 'animejs';
	import { loadFull } from "tsparticles";

	const particlesConfig = {
  "fullScreen": false,
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
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
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 4,
      "direction": "none",
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
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
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
  "detectRetina": true
};

	let ParticlesComponent: svelteParticles['default'];

	onMount(async() => {
		const module = await import('svelte-particles');

		ParticlesComponent = module.default;

		anime.timeline({ loop: !1 }).add({
			targets: '.line',
			opacity: [0.5, 1],
			scaleX: [0, 1],
			easing: 'easeInOutExpo',
			duration: 700,
		}).add({
			targets: '.line',
			duration: 600,
			easing: 'easeOutExpo',
			translateY: function(b: any, a: number): string { return `${-0.555 + 1.11 * a}em`; },
		}).add({
			targets: '.letters-left',
			opacity: [0, 1],
			translateX: ['0.5em', 0],
			easing: 'easeOutExpo',
			duration: 600,
			offset: '-=300',
		}).add({
			targets: '.letters-right',
			opacity: [0, 1],
			translateX: ['-0.5em', 0],
			easing: 'easeOutExpo',
			duration: 600,
			offset: '-=600',
		});
	});

	let onParticlesLoaded = (event: { detail: { particles: any; }; }) => {
    const particlesContainer = event.detail.particles;
    // you can use particlesContainer to call all the Container class (from the core library) methods like play, pause, refresh, start, stop
  };

    let particlesInit = async(engine: any) => {
        // you can use main to customize the tsParticles instance adding presets or custom shapes
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    };
</script>

<main class="auth">
	<header class="auth-header" id="auth-header">
		<svelte:component
			this="{ParticlesComponent}"
			options="{particlesConfig}"
			id="particleHeader"
			on:particlesLoaded="{onParticlesLoaded}"
			particlesInit="{particlesInit}"
		/>
		<h1 class="text-center ml5">
			<span class="text-wrapper">
				<span class="line line1 animated fadeOut delay-2s"></span>
				<span class="letters letters-left ">Asset</span>
				<span class="letters letters-right">Val</span>
				<span class="line line2 animated fadeOut delay-2s"></span>
			</span>
		</h1>
		<p class="register-text">Don't have an account? <a href="/reg/register">Create One</a></p>
	</header>
</main>

<style lang="scss">
	.animated {
		animation-duration: 1s;
		animation-fill-mode: both;

		&.delay-2s { animation-delay: 2s; }
	}

	@-webkit-keyframes fadeOut {
		0% { opacity: 1 }
		to { opacity: 0 }
	}

	@keyframes fadeOut {
		0% { opacity: 1 }
		to { opacity: 0 }
	}

	.fadeOut {
		-webkit-animation-name: fadeOut;
		animation-name: fadeOut
	}

	main.auth {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		min-height: 100%;
		background-color: #ececec;

		> header {
			display: block;

			&.auth-header {
				position: relative;
				padding: 0;
				width: 100%;
				background-color: #105f9e;
				color: #fff;
				text-align: center;
				background-size: cover;
				max-height: 27dvh;

				> p.register-text {
					position: relative;
					top: -18dvh;
					> a {
						color: #e0bf2b;
						text-decoration: none;
						transition: color .3s ease-in-out;

						&:hover { color: #f0e9b0; }
					}
				}
			}

			@media (min-width: 768px) {
				&.auth-header { margin-bottom: -3rem; } 
			}

			> .ml5 {
				position: relative;
				color: #fff;
				top: -21dvh;

				> .text-wrapper {
					position: relative;
					display: inline-flex;
					padding-top: .1em;
					padding-right: .05em;
					padding-bottom: .15em;
					line-height: 1em;
					font-size: 4.5rem;
					font-weight: 300;

					> .line {
						position: absolute;
						left: 0;
						top: 0;
						bottom: 0;
						margin: auto;
						height: 3px;
						width: 100%;
						background-color: #fff;
						transform-origin: .5 0;
					}

					> .letters {
						display: inline-block;
						opacity: 0;
					}
				}
			}
		}
	}
</style>
