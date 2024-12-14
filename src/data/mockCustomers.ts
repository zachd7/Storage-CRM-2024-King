import { faker } from '@faker-js/faker';
import { v4 as uuidv4 } from 'uuid';
import { Customer, StorageUnitType } from '../types';
import { subYears, subDays } from 'date-fns';

const storageUnitTypes: StorageUnitType[] = [
  'Small Trailer',
  'Medium Trailer',
  'Large Trailer',
  'Camper',
  'Car',
  'Boat',
  'ATV',
  'Motorhome',
  'Snowmobile Trailer',
  'Other'
];

function generateMockCustomer(): Customer {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const gender = faker.person.sex();
  
  return {
    id: uuidv4(),
    firstName,
    lastName,
    dateOfBirth: faker.date.between({ 
      from: subYears(new Date(), 80), 
      to: subYears(new Date(), 18) 
    }),
    email: faker.internet.email({ firstName, lastName }),
    phone: faker.phone.number('(###) ###-####'),
    profilePicture: faker.image.avatar(),
    address: {
      street: faker.location.streetAddress(),
      city: faker.location.city(),
      state: faker.location.state(),
      zipCode: faker.location.zipCode(),
    },
    storageUnits: [
      {
        id: uuidv4(),
        number: faker.string.alphanumeric(5).toUpperCase(),
        type: faker.helpers.arrayElement(storageUnitTypes),
        size: faker.helpers.arrayElement(['10x10', '10x20', '10x30', '20x20']),
        price: faker.number.int({ min: 50, max: 300 }),
        status: faker.helpers.arrayElement(['available', 'occupied', 'maintenance']),
        startDate: subDays(new Date(), faker.number.int({ min: 1, max: 365 })),
      }
    ],
    documents: [
      {
        id: uuidv4(),
        type: 'contract',
        name: 'Storage Agreement',
        url: 'https://example.com/contracts/storage-agreement.pdf',
        uploadedAt: new Date(),
      },
      {
        id: uuidv4(),
        type: 'image',
        name: 'ID Document',
        url: 'https://example.com/documents/id.jpg',
        uploadedAt: new Date(),
      }
    ],
    createdAt: faker.date.past(),
  };
}

export const mockCustomers: Customer[] = Array.from({ length: 50 }, generateMockCustomer);