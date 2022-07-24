/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('devices',function(table){
        table.increments()
        table.string('product_name')
        table.string('product_description')
        table.string('product_image_link')
        table.string('product_brand')
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
   return knex.schema.dropTableIfExists('devices')
};
