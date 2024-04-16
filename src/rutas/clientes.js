const { Router } = require('express');
const consultas = require('../consultas');
const router = Router();

// Ruta para obtener todas las campañas
router.get('/', async (req, res) => {
    const consulta = await consultas.getCampaigns();
    return res.status(200).json(consulta);
});

// Ruta para obtener el detalle de una campaña por su ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const consulta = await consultas.getCampaignByID(id);
    if (consulta.length === 0) {
        return res.status(400).json({ mensaje: "Campaña no encontrada" });
    }
    return res.status(200).json(consulta);
});

// Ruta para agregar una nueva campaña
router.post('/', async (req, res) => {
    const { nombre, detalles, fecha_inicio, fecha_fin, tipo_campaña, objetivo, presupuesto, estado, conversiones, tasa_clics, roi, responsable, otra_informacion } = req.body;
    const consulta = await consultas.insertCampaign(nombre, detalles, fecha_inicio, fecha_fin, tipo_campaña, objetivo, presupuesto, estado, conversiones, tasa_clics, roi, responsable, otra_informacion);
    return res.status(200).json(consulta);
});

// Ruta para editar una campaña
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { nombre, detalles, fecha_inicio, fecha_fin, tipo_campaña, objetivo, presupuesto, estado, conversiones, tasa_clics, roi, responsable, otra_informacion } = req.body;
    const consulta = await consultas.updateCampaign(id, nombre, detalles, fecha_inicio, fecha_fin, tipo_campaña, objetivo, presupuesto, estado, conversiones, tasa_clics, roi, responsable, otra_informacion);
    if (consulta === null) {
        return res.status(400).json({ mensaje: 'Campaña no encontrada' });
    }
    return res.status(200).json({ mensaje: 'Campaña actualizada correctamente' });
});

// Ruta para eliminar una campaña
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const consulta = await consultas.deleteCampaign(id);
    if (consulta === null) {
        return res.status(400).json({ mensaje: 'Campaña no encontrada' });
    }
    return res.status(200).json({ mensaje: 'Campaña eliminada correctamente' });
});

module.exports = router;
