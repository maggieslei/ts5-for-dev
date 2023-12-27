"use strict";
// narrow down objects
function meetTheFounder(founder) {
    console.log(`Meet your founder ${founder.name}`);
    if (founder.name === 'John Founder') {
        console.log(`I drive an ${founder.car}`);
    }
    if (founder.name === 'Bill Bicycle') {
        console.log(`I don't drive so I have a bicycle called ${founder.bike}`);
    }
}
meetTheFounder({
    name: 'John Founder',
    car: 'Audi',
});
meetTheFounder({
    name: 'Bill Bicycle',
    bike: 'Wheels',
});
