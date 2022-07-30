<template>

	<div class="slideshow-container">

		<div class="mySlides">
	    	<img src="@/assets/slides/slide1.jpeg" style="width:100%" />
		</div>

		<div class="mySlides">
	    	<img src="@/assets/slides/slide2.jpeg" style="width:100%" />
		</div>

		<a class="prev" @click="plusSlides(-1)">❮</a>
		<a class="next" @click="plusSlides(1)">❯</a>

		<div class="navigate">
			<span class="dot" @click="currentSlide(1)"></span> 
			<span class="dot" @click="currentSlide(2)"></span>
		</div>

	</div>
</template>

<script>
	export default {
    	name: 'SlideShow',
    	data(){
    		return {
    			slideIndex: 1,
    			interval: '',
    		}
    	},
    	methods: {
    		plusSlides(n) {
	  			this.showSlides(this.slideIndex += n);
			},

			currentSlide(n) {
				this.showSlides(this.slideIndex = n);
			},

			runSlide(){
				this.tenterval = setInterval(function(){
					this.showSlides(this.slideIndex += 1);
				}.bind(this), 3500);
			},

			showSlides(n) {
				let i;
				let slides = document.getElementsByClassName("mySlides");
				let dots = document.getElementsByClassName("dot");
				if (n > slides.length){
					this.slideIndex = 1
				}    
				if (n < 1) {
					this.slideIndex = slides.length
				}
				for (i = 0; i < slides.length; i++) {
			    	slides[i].style.display = "none";  
				}
				for (i = 0; i < dots.length; i++) {
			    	dots[i].className = dots[i].className.replace(" active", "");
				}
				if(slides.length > 0){
					slides[this.slideIndex-1].style.display = "block";  
					dots[this.slideIndex-1].className += " active";
				}
			},
    	},
    	mounted(){
    		this.showSlides(1);
    		this.runSlide();
    		
    	}
	}
</script>

<style scoped>
	a {text-decoration:none;}
	.mySlides {display: none;}
	img {vertical-align: middle;}

	/* Slideshow container */
	.slideshow-container {
	  width:100%;
	  position: relative;
	  margin: auto;
	}

	/* Next & previous buttons */
	.prev, .next {
	  cursor: pointer;
	  position: absolute;
	  top: 50%;
	  width: auto;
	  padding: 16px;
	  margin-top: -22px;
	  color: white;
	  font-weight: bold;
	  font-size: 18px;
	  transition: 0.6s ease;
	  border-radius: 0 3px 3px 0;
	  user-select: none;
	}

	/* Position the "next button" to the right */
	.next {
	  right: 0;
	  border-radius: 3px 0 0 3px;
	}

	/* On hover, add a black background color with a little bit see-through */
	.prev:hover, .next:hover {
	  background-color: rgba(0,0,0,0.8);
	}


	/* The dots/bullets/indicators */
	div.navigate {width:100%; position:absolute; right:10px; bottom:10px; z-index:5; display:flex; justify-content:right;}
	.dot {
	  cursor: pointer;
	  height: 12px;
	  width: 12px;
	  margin: 0 4px;
	  background-color: #bbb;
	  border-radius: 50%;
	  display: inline-block;
	  transition: background-color 0.6s ease;
	}

	.active {
	  background-color: #ff8800;
	}

	/* Fading animation */
	.fade {
	  animation-name: fade;
	  animation-duration: 1.5s;
	}

	@keyframes fade {
	  from {opacity: 0.4;} 
	  to {opacity: 1;}
	}

	/* On smaller screens, decrease text size */
	@media only screen and (max-width: 300px) {
	  .prev, .next {font-size: 11px;}
	}
</style>