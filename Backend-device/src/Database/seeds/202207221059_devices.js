/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('devices').del()
  await knex('devices').insert([
  {product_name: "IPhone XR", 
    product_description: "Rede celular 5G Tela Retina HD de 4,7 polegadas Sistema avançado de câmera única (grande-angular) de 12 MP; HDR Inteligente 4, Estilos Fotográficos, modo Retrato e vídeo 4K até 60 qpsCâmera FaceTime HD de 7 MP com HDR Inteligente 4, Estilos Fotográficos, modo Retrato e gravação de vídeo de 1080p Chip A15 Bionic para um desempenho impressionante",
    product_image_link:"https://i.zst.com.br/thumbs/12/26/30/-30088824.jpg",
    product_brand:"Apple"
  },
  ]);
};
