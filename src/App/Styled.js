import styled from "styled-components";

export const Div = styled.div`
background: url('https://p4.wallpaperbetter.com/wallpaper/755/233/85/dark-stripes-vertical-pattern-wallpaper-preview.jpg');
color: white;
font-family: 'Quicksand', sans-serif;


.divDeTodo{
  width: 80%;
  margin: auto;
}

h4{
  color: white;
  display: flex;
  justify-content: center;
}

.contsaludo{
  display: flex;
  justify-content: flex-start;
}


.animated {
  position: relative;
}

.animated-info {
  display: inline-block;
  vertical-align: top;
  min-width: 450px;
  position: relative;
}


.animated-item {
  color: #9046bb;
  font-size: 38px;
  line-height: inherit;
  display: block;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  animation: BottomTotop 6s linear infinite 0s;
}
.animated-item:nth-child(2n+2) {
  animation-delay: 2s;
}
.animated-item:nth-child(3n+3) {
  animation-delay: 4s;
}

@keyframes BottomTotop {
  0% {
    opacity: 0;
  }
  5% {
    opacity: 0;
    transform: translateY(5px);
  }
  10% {
    opacity: 1;
    transform: translateY(0px);
  }
  25% {
    opacity: 1;
    transform: translateY(0px);
  }
  30% {
    opacity: 0;
    transform: translateY(5px);
  }
  80% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

.info{
  line-height: 24pt;
  padding: 25px 25px 30px 65px;
  display: flex;
  align-items: center;
}

.info-text{
  padding-left: 50px;
}

.image img{
  border-radius: 35px;
  box-shadow: 0px 3px 20px 2px rgba(255,255,255,0.75);
}

.box-1{
  margin-top: 20px;
  display: flex;
  justify-content:center;
}

.btn {
	padding: 10px;
	height: 50px;
	text-align: center;
	width: 150px;
	cursor: pointer;
  text-decoration: none;

}
.btn-one {
  font-size: 20px;
	color: #FFF;
	transition: all 0.3s;
	position: relative;
}
.btn-one span {
	transition: all 0.3s;
}
.btn-one::before {
	content: '';
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 1;
	opacity: 0;
	transition: all 0.3s;
	border-top-width: 1px;
	border-bottom-width: 1px;
	border-top-style: solid;
	border-bottom-style: solid;
	border-top-color: rgba(255,255,255,0.5);
	border-bottom-color: rgba(255,255,255,0.5);
	transform: scale(0.1, 1);
}
.btn-one:hover span {
	letter-spacing: 2px;
}
.btn-one:hover::before {
	opacity: 1;	
	transform: scale(1, 1);	
}
.btn-one::after {
	content: '';
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 1;
	transition: all 0.3s;
	background-color: rgba(255,255,255,0.1);
}
.btn-one:hover::after {
	opacity: 0;	
	transform: scale(0.1, 1);
}

.tituloskills{
  padding-top: 100px;
}


.wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    padding-top: 120px;
  }
  
  .wrapper a{
    color: #474559;
  }

  
  .wrapper .icon {
    position: relative;
    background-color: #ffffff;
    border-radius: 50%;
    padding: 15px;
    margin: 10px;
    width: 18px;
    height: 18px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  
  .wrapper .tooltip {
    position: absolute;
    top: 0;
    font-size: 14px;
    background-color: #ffffff;
    color: #ffffff;
    padding: 5px 8px;
    border-radius: 5px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  
  .wrapper .tooltip::before {
    position: absolute;
    content: "";
    height: 8px;
    width: 8px;
    background-color: #ffffff;
    bottom: -3px;
    left: 50%;
    transform: translate(-50%) rotate(45deg);
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  
  .wrapper .icon:hover .tooltip {
    top: -45px;
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }
  
  .wrapper .icon:hover span,
  .wrapper .icon:hover .tooltip {
    text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
  }
  
  .wrapper .linkedin:hover,
  .wrapper .linkedin:hover .tooltip,
  .wrapper .linkedin:hover .tooltip::before {
    background-color: #3b5999;
    color: #ffffff;
  }
  
  .wrapper .github:hover,
  .wrapper .github:hover .tooltip,
  .wrapper .github:hover .tooltip::before {
    background-color: #333333;
    color: #ffffff;
  }
  
  
  .wrapper .whatsapp:hover,
  .wrapper .whatsapp:hover .tooltip,
  .wrapper .whatsapp:hover .tooltip::before {
    background-color: #00bb2d ;
    color: #ffffff;
  }

  
.all-logos{
  border-radius: 25px;
  padding: 15px;
  display: grid; 
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr; 
  grid-template-rows: 1fr 1fr; 
  gap: 0px 0px; 
  background-color: rgba(220, 199, 232, 0.627);
}

.logo{
  display:flex;
  justify-content: center;
}

.proyectos{
  padding-top: 100px;
}

a{
  color: white;
}

.imagecards{
  border-radius: 25px;
  display: flex;
  justify-content: center;

}

.weatherTitle{
  padding-top: 25px;
}

.linkapp{
  color: rgb(180, 122, 214);
}

.imageCountries{
  padding-top: 10px;
  border-radius: 25px;
  display: flex;
  justify-content: center;
}

.contacto{
  padding-top: 25px;
}

.talk{
  color: rgb(163, 75, 240);
}

.contactForm{
  width: 35%;
  border-radius: 25px;
  display:flex;
  justify-content: center;
  background-color: rgba(127, 123, 252, 0.68);
}

.contAll{
  display: flex;
  height: 350px;
  width: 110%;
  justify-content: center;
  padding-bottom: 25px;
}

input{
  color:white;
  font-family: 'Quicksand', sans-serif;
}

textarea{
  color: white;
  font-family: 'Quicksand', sans-serif;
}

.contact-form .form-control {
  display: flex;
  justify-content: center;
  width: 350px;
  background: rgb(8, 1, 38);
  border-radius: 15px;
  outline: none;
  box-shadow: none;
  font-weight: bold;
  margin: 20px 0;
}
.contact-form .form-control:not(textarea) {
  height: 55px;
}

.botonEnviar {
  color: white;
  background-color: black;
  border: 2px solid white;
  border-radius: 20px;
  padding: 10px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.4s ease;
}

.botonEnviar:hover {
  background: #474559;
}

.boton{
  display: flex;
  justify-content: center;
  
}


`
