
    module.exports = function (app) {
        const modelName = "commercials";
        const mongooseClient = app.get("mongooseClient");
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            commercialCategory: { type:  String , minLength: 2, index: true, trim: true, default: "", comment: "Commercial Category, p, false, true, true, true, true, true, true, , , , ," },
customerName: { type:  String , minLength: 2, index: true, trim: true, default: "", comment: "Customer Name, p, false, true, true, true, true, true, true, , , , ," },
contactNumber: { type: Number, comment: "Contact Number, p_number, false, true, true, true, true, true, true, , , , ," },
emailAddress: { type:  String , minLength: 2, index: true, trim: true, default: "", comment: "Email Address, p, false, true, true, true, true, true, true, , , , ," },
machineAddress: { type:  String , minLength: 2, index: true, trim: true, default: "", comment: "Machine Address, p, false, true, true, true, true, true, true, , , , ," },
additionalDetail: { type:  String , minLength: 2, index: true, trim: true, default: "", comment: "Additional Detail, p, false, true, true, true, true, true, true, , , , ," },
rentOrPurchase: { type: String , enum: ["Rent","Purchase"], comment: "Rent Or Purchase, dropdownArray, false, true, true, true, true, true, true, , , , ," },
machineQuantity: { type: Number, comment: "Machine Quantity, p_number, false, true, true, true, true, true, true, , , , ," },
tenancyPeriod: { type: [Date], comment: "Tenancy Period, calendar_range, false, true, true, true, true, true, true, , , , ," },
newOutlet: { type:  String , minLength: 2, index: true, trim: true, default: "", comment: "New Outlet, p, false, true, true, true, true, true, true, , , , ," },
sellType: { type: String , enum: ["Own Products","Engage Etika Services"], comment: "Sell Type, dropdownArray, false, true, true, true, true, true, true, , , , ," },

            createdBy: { type: Schema.Types.ObjectId, ref: "users", required: true },
            updatedBy: { type: Schema.Types.ObjectId, ref: "users", required: true }
          },
          {
            timestamps: true
        });
      
       
        if (mongooseClient.modelNames().includes(modelName)) {
          mongooseClient.deleteModel(modelName);
        }
        return mongooseClient.model(modelName, schema);
        
      };