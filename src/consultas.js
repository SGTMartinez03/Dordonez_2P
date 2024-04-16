const conexion = require('./conexion');

const getCampaigns = async () => {
    const [consulta] = await conexion.execute('SELECT * FROM campaigns');
    return consulta;
}

const getCampaignByID = async (id) => {
    const [consulta] = await conexion.execute('SELECT * FROM campaigns WHERE id = ?', [id]);
    return consulta;
}

const insertCampaign = async (nombre, detalles, fecha_inicio, fecha_fin, tipo_campaña, objetivo, presupuesto, estado, conversiones, tasa_clics, roi, responsable, otra_informacion) => {
    const [consulta] = await conexion.execute('INSERT INTO campaigns (nombre, detalles, fecha_inicio, fecha_fin, tipo_campaña, objetivo, presupuesto, estado, conversiones, tasa_clics, roi, responsable, otra_informacion) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [nombre, detalles, fecha_inicio, fecha_fin, tipo_campaña, objetivo, presupuesto, estado, conversiones, tasa_clics, roi, responsable, otra_informacion]);
    return consulta;
}

const updateCampaign = async (id, nombre, detalles, fecha_inicio, fecha_fin, tipo_campaña, objetivo, presupuesto, estado, conversiones, tasa_clics, roi, responsable, otra_informacion) => {
    const [consulta] = await conexion.execute('UPDATE campaigns SET nombre=?, detalles=?, fecha_inicio=?, fecha_fin=?, tipo_campaña=?, objetivo=?, presupuesto=?, estado=?, conversiones=?, tasa_clics=?, roi=?, responsable=?, otra_informacion=? WHERE id=?',
        [nombre, detalles, fecha_inicio, fecha_fin, tipo_campaña, objetivo, presupuesto, estado, conversiones, tasa_clics, roi, responsable, otra_informacion, id]);
    return consulta;
}

const deleteCampaign = async (id) => {
    const [consulta] = await conexion.execute('DELETE FROM campaigns WHERE id=?', [id]);
    return consulta;
}

module.exports = { getCampaigns, getCampaignByID, insertCampaign, updateCampaign, deleteCampaign };
