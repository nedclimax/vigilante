/**
 * 
 * @param {WebGL2RenderingContext} gl 
 * @param {Object} programInfo 
 * @param {Object} buffers 
 */
function drawScene(gl, programInfo, buffers) {
	gl.clearColor(0.2, 0.2, 0.2, 1);
	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

	{
		const numComponents = 2;
		const type = gl.FLOAT;
		const normalize = false;
		const stride = 0;
		const offset = 0;
		gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);
		gl.vertexAttribPointer(programInfo.attribLocations.vertexPosition, numComponents, type, normalize, stride, offset);

		gl.enableVertexAttribArray(programInfo.attribLocations.vertexPosition);
	}

	gl.useProgram(programInfo.program);
}