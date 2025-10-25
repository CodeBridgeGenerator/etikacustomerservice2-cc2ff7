const assert = require("assert");
const app = require("../../src/app");

describe("complaints service", () => {
  let thisService;
  let complaintCreated;

  beforeEach(async () => {
    thisService = await app.service("complaints");
  });

  it("registered the service", () => {
    assert.ok(thisService, "Registered the service (complaints)");
  });

  describe("#create", () => {
    const options = {"complainCategory":"new value","customerName":"new value","contactNumber":23,"emailAddress":"new value","machineImage":"new value","additionalDetail":"new value"};

    beforeEach(async () => {
      complaintCreated = await thisService.create(options);
    });

    it("should create a new complaint", () => {
      assert.strictEqual(complaintCreated.complainCategory, options.complainCategory);
assert.strictEqual(complaintCreated.customerName, options.customerName);
assert.strictEqual(complaintCreated.contactNumber, options.contactNumber);
assert.strictEqual(complaintCreated.emailAddress, options.emailAddress);
assert.strictEqual(complaintCreated.machineImage, options.machineImage);
assert.strictEqual(complaintCreated.additionalDetail, options.additionalDetail);
    });
  });

  describe("#get", () => {
    it("should retrieve a complaint by ID", async () => {
      const retrieved = await thisService.get(complaintCreated._id);
      assert.strictEqual(retrieved._id, complaintCreated._id);
    });
  });

  describe("#update", () => {
    let complaintUpdated;
    const options = {"complainCategory":"updated value","customerName":"updated value","contactNumber":100,"emailAddress":"updated value","machineImage":"updated value","additionalDetail":"updated value"};

    beforeEach(async () => {
      complaintUpdated = await thisService.update(complaintCreated._id, options);
    });

    it("should update an existing complaint ", async () => {
      assert.strictEqual(complaintUpdated.complainCategory, options.complainCategory);
assert.strictEqual(complaintUpdated.customerName, options.customerName);
assert.strictEqual(complaintUpdated.contactNumber, options.contactNumber);
assert.strictEqual(complaintUpdated.emailAddress, options.emailAddress);
assert.strictEqual(complaintUpdated.machineImage, options.machineImage);
assert.strictEqual(complaintUpdated.additionalDetail, options.additionalDetail);
    });
  });

  describe("#delete", () => {
  let complaintDeleted;
    beforeEach(async () => {
      complaintDeleted = await thisService.remove(complaintCreated._id);
    });

    it("should delete a complaint", async () => {
      assert.strictEqual(complaintDeleted._id, complaintCreated._id);
    });
  });
});