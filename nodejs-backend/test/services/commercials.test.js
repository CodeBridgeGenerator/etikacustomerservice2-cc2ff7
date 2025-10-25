const assert = require("assert");
const app = require("../../src/app");

describe("commercials service", () => {
  let thisService;
  let commercialCreated;

  beforeEach(async () => {
    thisService = await app.service("commercials");
  });

  it("registered the service", () => {
    assert.ok(thisService, "Registered the service (commercials)");
  });

  describe("#create", () => {
    const options = {"commercialCategory":"new value","customerName":"new value","contactNumber":23,"emailAddress":"new value","machineAddress":"new value","additionalDetail":"new value","rentOrPurchase":["new value"],"machineQuantity":23,"tenancyPeriod":1761403369398,"newOutlet":"new value","sellType":["new value"]};

    beforeEach(async () => {
      commercialCreated = await thisService.create(options);
    });

    it("should create a new commercial", () => {
      assert.strictEqual(commercialCreated.commercialCategory, options.commercialCategory);
assert.strictEqual(commercialCreated.customerName, options.customerName);
assert.strictEqual(commercialCreated.contactNumber, options.contactNumber);
assert.strictEqual(commercialCreated.emailAddress, options.emailAddress);
assert.strictEqual(commercialCreated.machineAddress, options.machineAddress);
assert.strictEqual(commercialCreated.additionalDetail, options.additionalDetail);
assert.strictEqual(commercialCreated.rentOrPurchase, options.rentOrPurchase);
assert.strictEqual(commercialCreated.machineQuantity, options.machineQuantity);
assert.strictEqual(commercialCreated.tenancyPeriod, options.tenancyPeriod);
assert.strictEqual(commercialCreated.newOutlet, options.newOutlet);
assert.strictEqual(commercialCreated.sellType, options.sellType);
    });
  });

  describe("#get", () => {
    it("should retrieve a commercial by ID", async () => {
      const retrieved = await thisService.get(commercialCreated._id);
      assert.strictEqual(retrieved._id, commercialCreated._id);
    });
  });

  describe("#update", () => {
    let commercialUpdated;
    const options = {"commercialCategory":"updated value","customerName":"updated value","contactNumber":100,"emailAddress":"updated value","machineAddress":"updated value","additionalDetail":"updated value","rentOrPurchase":["updated value"],"machineQuantity":100,"tenancyPeriod":null,"newOutlet":"updated value","sellType":["updated value"]};

    beforeEach(async () => {
      commercialUpdated = await thisService.update(commercialCreated._id, options);
    });

    it("should update an existing commercial ", async () => {
      assert.strictEqual(commercialUpdated.commercialCategory, options.commercialCategory);
assert.strictEqual(commercialUpdated.customerName, options.customerName);
assert.strictEqual(commercialUpdated.contactNumber, options.contactNumber);
assert.strictEqual(commercialUpdated.emailAddress, options.emailAddress);
assert.strictEqual(commercialUpdated.machineAddress, options.machineAddress);
assert.strictEqual(commercialUpdated.additionalDetail, options.additionalDetail);
assert.strictEqual(commercialUpdated.rentOrPurchase, options.rentOrPurchase);
assert.strictEqual(commercialUpdated.machineQuantity, options.machineQuantity);
assert.strictEqual(commercialUpdated.tenancyPeriod, options.tenancyPeriod);
assert.strictEqual(commercialUpdated.newOutlet, options.newOutlet);
assert.strictEqual(commercialUpdated.sellType, options.sellType);
    });
  });

  describe("#delete", () => {
  let commercialDeleted;
    beforeEach(async () => {
      commercialDeleted = await thisService.remove(commercialCreated._id);
    });

    it("should delete a commercial", async () => {
      assert.strictEqual(commercialDeleted._id, commercialCreated._id);
    });
  });
});