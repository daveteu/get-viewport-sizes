const getInnerHeight = () => {
	const getHeight = () => {
		const vh = document.documentElement.clientHeight * 0.01
		document.documentElement.style.setProperty("--vh", `${vh * 100}px`)
	}

	window.addEventListener("resize", getHeight)
	window.addEventListener("orientationchange", getHeight)

	getWidth()
}

const getInnerWidth = () => {
	const getWidth = () => {
		const vw = document.documentElement.clientWidth * 0.01
		document.documentElement.style.setProperty("--vw", `${vw * 100}px`)
	}

	window.addEventListener("resize", getWidth)
	window.addEventListener("orientationchange", getWidth)

	getWidth()
}

const getSizes = () => {
	if (typeof window !== "undefined") {
		getInnerHeight()
		getInnerWidth()
	}
}
export default getSizes
