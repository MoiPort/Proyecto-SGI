const AyudateSesion = {
	verificarSesion(){
		let sesion = localStorage.getItem('id')
		if(sesion) return true
		return false
	},

	obtenerDatosSesion(){
		const id = localStorage.getItem('id')
		const usuario = localStorage.getItem('usuario')
		const nombre = localStorage.getItem('nombre')
		const rol_id = localStorage.getItem('rol_id')
		const rol = localStorage.getItem('rol')

		return {
			id: id,
			usuario: usuario,
			nombre: nombre,
			rol_id: rol_id,
			rol: rol,
		}
	},

	establecerSesion(usuario){
		localStorage.setItem('id', usuario.id)
		localStorage.setItem('usuario', usuario.usuario)
		localStorage.setItem('nombre', usuario.nombre)
		localStorage.setItem('rol_id', usuario.rol_id)
		localStorage.setItem('rol', usuario.rol)
	},

	establecerDatosNegocio(datos){
		localStorage.setItem('nombreNegocio', datos.nombre)
		localStorage.setItem('telefonoNegocio', datos.telefono)
		localStorage.setItem('logoNegocio', datos.logo)
	},	

	obtenerDatosNegocio(){
		return {
			nombre: localStorage.getItem('nombreNegocio'),
			telefono: localStorage.getItem('telefonoNegocio'),
			logo: localStorage.getItem('logoNegocio')
		}
	},

	cerrarSesion(){
		localStorage.removeItem('id')
		localStorage.removeItem('usuario')
		localStorage.removeItem('nombre')
		localStorage.removeItem('rol_id')
		localStorage.removeItem('rol')
		location.reload()
	}
}

export default AyudateSesion