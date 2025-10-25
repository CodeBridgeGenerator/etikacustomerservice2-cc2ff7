
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
complainCategory: faker.lorem.sentence(""),
customerName: faker.lorem.sentence(""),
contactNumber: faker.lorem.sentence(""),
emailAddress: faker.lorem.sentence(""),
machineImage: faker.lorem.sentence(""),
additionalDetail: faker.lorem.sentence(""),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
