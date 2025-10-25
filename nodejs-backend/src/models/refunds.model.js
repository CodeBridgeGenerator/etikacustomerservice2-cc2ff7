
    module.exports = function (app) {
        const modelName = "refunds";
        const mongooseClient = app.get("mongooseClient");
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            refundCategory: { type:  String , minLength: 2, index: true, trim: true, default: "", comment: "Refund Category, p, false, true, true, true, true, true, true, , , , ," },
customerName: { type:  String , minLength: 2, index: true, trim: true, default: "", comment: "Customer Name, p, false, true, true, true, true, true, true, , , , ," },
contactNumber: { type: Number, comment: "Contact Number, p_number, false, true, true, true, true, true, true, , , , ," },
emailAddress: { type:  String , minLength: 2, index: true, trim: true, default: "", comment: "Email Address, p, false, true, true, true, true, true, true, , , , ," },
productImage: { type:  [Schema.Types.ObjectId], ref: "document_storages" , minLength: 2, index: true, trim: true, default: "", comment: "Product Image, file_upload, false, true, true, true, true, true, true, , , , ," },
additionalDetail: { type:  String , minLength: 2, index: true, trim: true, default: "", comment: "Additional Detail, p, false, true, true, true, true, true, true, , , , ," },
paymentMethod: { type:  String , minLength: 2, index: true, trim: true, default: "", comment: "Payment Method, p, false, true, true, true, true, true, true, , , , ," },
amount: { type: Number, comment: "Amount, p_number, false, true, true, true, true, true, true, , , , ," },
bankName: { type:  String , minLength: 2, index: true, trim: true, default: "", comment: "Bank Name, p, false, true, true, true, true, true, true, , , , ," },
accountNumber: { type: Number, comment: "Account Number, p_number, false, true, true, true, true, true, true, , , , ," },
accountName: { type:  String , minLength: 2, index: true, trim: true, default: "", comment: "Account Name, p, false, true, true, true, true, true, true, , , , ," },

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