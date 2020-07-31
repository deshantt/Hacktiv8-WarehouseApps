Warehouse App

Entity Breakdown:
- Warehouse: City, Address, LeaseExpiryDate
- Product: Name, Category, ExpiryDate, Price
- Stock: WarehouseID, ProductID
- Employee: First Name,Last Name, Position, Gender, Salary, username, password, WarehouseID
- EmployeeCredentials: username,password


MVP:
- Warning for Product ExpiryDate (60 days before)
- Warning for Warehouse LeaseExpiryDate (30 days before)
- NodeMailer
- Query Sum of ProductStock on Each Warehouse 

CRUD:
Warehouse and Product have CRUD 

Association:
Employee.belongsTo(models.Warehouse)

Warehouse.belongsToMany(models.Product, { through: models.Stock, foreignKey: "WarehouseId" })
Warehouse.hasMany(models.Employee)

Product.belongsToMany(models.Warehouse, { through: models.Stock, foreignKey: "ProductId" })
// Don't forget to do Eager Loading / include: {model: Warehouse/Produce}. In order to get Query on both models.

Static:
getFullName() or 
BeforeCreate  => Mr/Mrs. based on Registered Gender? 
ProduceExpiredAlert => Product.ExpiredDate - Date(). If less than < 30, then display Alert on EJS/Send Mail to Employee
LeaseExpiredAlert => Warehouse.LeaseExpiryDate - Date(). If less than < 60, then display Alert on EJS/Send Mail to Employee

Helper:
Function: Turn Integer to Redonominate money. For instance: 10000 to 10.000
The regex function is here: https://docs.google.com/presentation/d/12TaX37UJU_IFf7JPxGKXqWYe3Exe6zAH0_AoB1QZdhE/edit#slide=id.g7cb68fa732_0_8