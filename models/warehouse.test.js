
const  Warehouse  = require("./warehouse");
const  sequelize  =require("../db");

describe ('warehouse Model',() =>{
             beforeAll(async () => {
		await sequelize.sync ({force: true})
	});



test('should have name', async() => {
    const warehouseName = await Warehouse.create({name: "Dallas warehouse"})
        expect(warehouseName.name).toBe('Dallas warehouse')
        
    })
})