
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
refundCategory: faker.lorem.sentence(1),
customerName: faker.lorem.sentence(1),
contactNumber: faker.lorem.sentence(1),
emailAddress: faker.lorem.sentence(1),
productImage: faker.lorem.sentence(1),
additionalDetail: faker.lorem.sentence(1),
paymentMethod: faker.lorem.sentence(1),
amount: faker.lorem.sentence(1),
bankName: faker.lorem.sentence(1),
accountNumber: faker.lorem.sentence(1),
accountName: faker.lorem.sentence(1),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
