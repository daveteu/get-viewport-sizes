"use strict";
const debounce = (func, timeout = 300) => {
	let timer;
	return (...args) => {
	  clearTimeout(timer);
	  timer = setTimeout(() => { func.apply(this, args); }, timeout);
	};
  }

const getInnerHeight = () => {
	const getHeight = () => {
		const vh = document.documentElement.clientHeight * 0.01
		document.documentElement.style.setProperty("--vh", `${vh * 100}px`)
	}

	window.addEventListener("resize", debounce(getHeight, 200))
	window.addEventListener("orientationchange", debounce(getHeight, 200))

	getWidth()
}

const getInnerWidth = () => {
	const getWidth = () => {
		const vw = document.documentElement.clientWidth * 0.01
		document.documentElement.style.setProperty("--vw", `${vw * 100}px`)
	}

	window.addEventListener("resize", debounce(getWidth, 200))
	window.addEventListener("orientationchange", debounce(getWidth, 200))

	getWidth()
}

const getSizes = () => {
	if (typeof window !== "undefined") {
		getInnerHeight()
		getInnerWidth()
	}
}
export default getSizes
