/**
 * Wrapper function for loading a glsl shader
 * @param {WebGL2RenderingContext} gl Global WedGL context
 * @param {Number} type Shader type
 * @param {String} source Shader source
 */
function loadShader(gl, type, source) {
	const shader = gl.createShader(type);

	gl.shaderSource(shader, source);
	gl.compileShader(shader);

	if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
		alert(`Error compiling shaders: ${gl.getShaderInfoLog(shader)}`);
		return null
	}

	return shader;
}

/**
 * Initilizes a shader program
 * @param {WebGL2RenderingContext} gl Global WedGL context
 * @param {String} vsSource Vertex shader source
 * @param {String} fsSource Fragment shader source
 */
function initShaderProgram(gl, vsSource, fsSource) {
	const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
	const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);

	const shaderProgram = gl.createProgram();
	gl.attachShader(shaderProgram, vertexShader);
	gl.attachShader(shaderProgram, fragmentShader);
	gl.linkProgram(shaderProgram);

	if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
		alert(`Error in linking shaders: ${gl.getProgramInfoLog(shaderProgram)}`);
		return null;
	}

	return shaderProgram;
}

export { initShaderProgram, loadShader };