const assert = require("assert");
const app = require("../../src/app");

describe("refunds service", () => {
  let thisService;
  let refundCreated;

  beforeEach(async () => {
    thisService = await app.service("refunds");
  });

  it("registered the service", () => {
    assert.ok(thisService, "Registered the service (refunds)");
  });

  describe("#create", () => {
    const options = {"refundCategory":"new value","customerName":"new value","contactNumber":23,"emailAddress":"new value","productImage":"new value","additionalDetail":"new value","paymentMethod":"new value","amount":23,"bankName":"new value","accountNumber":23,"accountName":"new value"};

    beforeEach(async () => {
      refundCreated = await thisService.create(options);
    });

    it("should create a new refund", () => {
      assert.strictEqual(refundCreated.refundCategory, options.refundCategory);
assert.strictEqual(refundCreated.customerName, options.customerName);
assert.strictEqual(refundCreated.contactNumber, options.contactNumber);
assert.strictEqual(refundCreated.emailAddress, options.emailAddress);
assert.strictEqual(refundCreated.productImage, options.productImage);
assert.strictEqual(refundCreated.additionalDetail, options.additionalDetail);
assert.strictEqual(refundCreated.paymentMethod, options.paymentMethod);
assert.strictEqual(refundCreated.amount, options.amount);
assert.strictEqual(refundCreated.bankName, options.bankName);
assert.strictEqual(refundCreated.accountNumber, options.accountNumber);
assert.strictEqual(refundCreated.accountName, options.accountName);
    });
  });

  describe("#get", () => {
    it("should retrieve a refund by ID", async () => {
      const retrieved = await thisService.get(refundCreated._id);
      assert.strictEqual(retrieved._id, refundCreated._id);
    });
  });

  describe("#update", () => {
    let refundUpdated;
    const options = {"refundCategory":"updated value","customerName":"updated value","contactNumber":100,"emailAddress":"updated value","productImage":"updated value","additionalDetail":"updated value","paymentMethod":"updated value","amount":100,"bankName":"updated value","accountNumber":100,"accountName":"updated value"};

    beforeEach(async () => {
      refundUpdated = await thisService.update(refundCreated._id, options);
    });

    it("should update an existing refund ", async () => {
      assert.strictEqual(refundUpdated.refundCategory, options.refundCategory);
assert.strictEqual(refundUpdated.customerName, options.customerName);
assert.strictEqual(refundUpdated.contactNumber, options.contactNumber);
assert.strictEqual(refundUpdated.emailAddress, options.emailAddress);
assert.strictEqual(refundUpdated.productImage, options.productImage);
assert.strictEqual(refundUpdated.additionalDetail, options.additionalDetail);
assert.strictEqual(refundUpdated.paymentMethod, options.paymentMethod);
assert.strictEqual(refundUpdated.amount, options.amount);
assert.strictEqual(refundUpdated.bankName, options.bankName);
assert.strictEqual(refundUpdated.accountNumber, options.accountNumber);
assert.strictEqual(refundUpdated.accountName, options.accountName);
    });
  });

  describe("#delete", () => {
  let refundDeleted;
    beforeEach(async () => {
      refundDeleted = await thisService.remove(refundCreated._id);
    });

    it("should delete a refund", async () => {
      assert.strictEqual(refundDeleted._id, refundCreated._id);
    });
  });
});