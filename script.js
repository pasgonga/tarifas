const productos = [
  {
    nombre: "ORBIS WEB",
    precioAlta: "204 € x p",
    descripcion: "Gestión comercial en la nube",
    link: "https://www.pipeline.es/productos/orbis_web.htm",
    planes: [
      { nombre: "Junior", alta: "", precio: "34,50 € x p" },
      { nombre: "Profesional", alta: "", precio: "52,50 € x p" }
    ]
  },
  {
    nombre: "ORBIS BOOKING",
    precioAlta: "15.990 €",
    descripcion: "Motor de reservas",
    link: "https://www.pipeline.es/productos/orbis_booking.htm",
    planes: [
      { nombre: "Base", alta: "", precio: "315 €" }, // Añadido aquí
      { nombre: "XML Hoteles", alta: "5.200 €", precio: "114 € (1er prov) + 28 € x prov adicional" },
      { nombre: "XML Clientes", alta: "3.600 €", precio: "114 €" },
      { nombre: "XML Renfe", alta: "3.600 €", precio: "0 €" },
      { nombre: "XML Aéreos", alta: "3.600 €", precio: "28 € x GDS + 1 € x billete + 0,50 € x billete tren" },
      { nombre: "ExperTicket", alta: "999 €", precio: "0 €" }
    ]
  },
  {
    nombre: "ORBIS BOOKING RAILMIX",
    precioAlta: "desde 6.000 €",
    descripcion: "Gestión y venta de paquetes turísticos con transporte terrestre",
    link: "https://www.pipeline.es/productos/orbis_booking_railmix.htm",
    planes: [
      { nombre: "Mantenimiento", alta: "", precio: "desde 100 €" }
    ]
  },
  {
    nombre: "ORBIS PORTAL",
    precioAlta: "3.800 €",
    descripcion: "Web avanzada para venta a cliente final",
    link: "https://www.pipeline.es/productos/orbis-portal.htm",
    planes: [
      { nombre: "Mantenimiento", alta: "", precio: "179 €" }
    ]
  },
  {
    nombre: "ORBIS VENDING",
    precioAlta: "286 €",
    descripcion: "La web de su agencia",
    link: "https://www.pipeline.es/productos/orbis_vending.htm",
    planes: [
      { nombre: "Mantenimiento", alta: "", precio: "50 €" }
    ]
  },
  {
    nombre: "ORBIS SEGUROS",
    precioAlta: "0 €",
    descripcion: "Comercialización de seguros de asistencia en viaje",
    link: "https://www.pipeline.es/productos/orbis_seguros.htm",
    planes: [
      { nombre: "Integración", alta: "", precio: "Incluido en Orbis" }
    ]
  },
  {
    nombre: "ORBIS RECLAMA",
    precioAlta: "0 €",
    descripcion: "Gestión de reclamaciones de vuelos",
    link: "https://www.pipeline.es/productos/orbis_reclama.htm",
    planes: [
      { nombre: "Servicio", alta: "", precio: "Gratis con Orbis" }
    ]
  },
  {
    nombre: "ORBIS SII",
    precioAlta: "1.670 €",
    descripcion: "Suministro Inmediato de Información (SII) para IVA",
    link: "https://www.pipeline.es/productos/orbis_sii.htm",
    planes: [
      { nombre: "Mantenimiento", alta: "", precio: "desde 71,50 €" }
    ]
  },
  {
    nombre: "ORBIS SES HOSPEDAJES",
    precioAlta: "",
    descripcion: "Cumplimiento del Real Decreto 933/2021 para hospedajes",
    link: "https://www.pipeline.es/productos/orbis_ses_hospedajes.htm",
    planes: [
      { nombre: "Integración", alta: "", precio: "3 € x sucursal" }
    ]
  },
  {
    nombre: "ORBIS SMS",
    precioAlta: "",
    descripcion: "Servicio de mensajería móvil integrado",
    link: "https://www.pipeline.es/productos/orbis_sms.htm",
    planes: [
      { nombre: "Paquetes", alta: "", precio: "Según volumen" }
    ]
  },
  {
    nombre: "BSP CONVERT",
    precioAlta: "0 €",
    descripcion: "Liquidación automática del BSP desde PDF",
    link: "https://www.pipeline.es/productos/bsp_convert.htm",
    planes: [
      { nombre: "Servicio", alta: "", precio: "Gratis con Orbis" }
    ]
  },
  {
    nombre: "ORBIS HOTELES",
    precioAlta: "",
    descripcion: "Búsqueda y reserva profesional de hoteles",
    link: "https://www.pipeline.es/productos/orbis_hoteles_pro.htm",
    planes: [
      { nombre: "Integración", alta: "", precio: "" }
    ]
  },
  {
    nombre: "ORBIS BACKUP",
    precioAlta: "",
    descripcion: "Copias de seguridad integradas",
    link: "https://www.pipeline.es/productos/orbis_backup.htm",
    planes: [
      { nombre: "Servicio", alta: "", precio: "desde 9,75 €" }
    ]
  },
  {
    nombre: "INTEGRACIÓN DE ORBIS CON CLIENTIFY",
    precioAlta: "108 €",
    descripcion: "Gestión de clientes y automatización de ventas",
    link: "https://www.pipeline.es/productos/clientify.htm",
    planes: [
      { nombre: "Suscripción", alta: "", precio: "52,50 €" }
    ]
  }
];

const productosContainer = document.getElementById('productos');

productos.forEach(producto => {
  const div = document.createElement('div');
  div.classList.add('producto');
  div.innerHTML = `
    <div class="producto-header">
      <div class="title-desc">
        <a href="${producto.link}" target="_blank">${producto.nombre}</a>
        <div class="descripcion">${producto.descripcion}</div>
      </div>
      <div class="column-titles">
        <span>Precio</span>
        <span class="mto-title">Mto.</span>
      </div>
    </div>
    <ul class="precios-list">
      <li>
        <span class="nombre">Base</span>
        <span class="alta">${producto.precioAlta}</span>
        <span class="precio">${producto.planes.find(plan => plan.nombre === 'Base')?.precio || '-'}</span>
      </li>
      ${producto.planes.filter(plan => plan.nombre !== 'Base').map(plan => `
        <li>
          <span class="nombre">${plan.nombre}</span>
          <span class="alta">${plan.alta || '-'}</span>
          <span class="precio">${plan.precio}</span>
        </li>
      `).join('')}
    </ul>
  `;
  productosContainer.appendChild(div);
});

// Función para exportar a PDF
function exportToPDF() {
  const element = document.body;
  const opt = {
    margin: 0.5,
    filename: 'Catalogo_Pipeline_2025.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
  };
  html2pdf().set(opt).from(element).save();
}