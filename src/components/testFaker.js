import React from 'react';
import { faker } from '@faker-js/faker';

function testFaker() {
    const mockData = Array.from({ length: 5 }).map(() => ({
        id: faker.datatype.uuid(),
        name: faker.name.fullName(),
        email: faker.internet.email(),
    }));

    return (
        <div>
            <h1>Mock Data</h1>
            <ul>
                {mockData.map((item) => (
                    <li key={item.id}>
                        {item.name} - {item.email}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default testFaker;
