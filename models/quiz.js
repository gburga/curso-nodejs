// Definición del modelo de Quiz

// Nombre de la tabla
// Objeto con los campos de la tabla
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Quiz',
			    { pregunta: {
				type: DataTypes.STRING, 
				validate: { notEmpty: { msg: "-> Falta Pregunta" }}
			    }, 
			    respuesta: { 
				type: DataTypes.STRING, 
				validate: { notEmpty: { msg: "-> Falta Respuesta"}}
			    }
			    }
			   );
}