const API = 'http://localhost:8080';

export async function fetchFromAPI(endpoint, opts) {
    const { method, body } = { method: 'POST', body: null, ...opts };

    try {
        const res = await fetch(`${API}/${endpoint}`, {
            method,
            ...(body && { body: JSON.stringify(body) }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }

        return res.json();
    } catch (error) {
        console.error('Error fetching data from API:', error);
        throw error; // Rethrow the error to handle it at the caller's level
    }
}

// then make call to create  session in the stripe-checkout component


// "line_items": [
//     {
//         "quantity": 1,
//         "price_data": {
//             "currency": "usd",
//             "unit_amount": 2800,
//             "product_data": {
//                 "name": "watch",
//                 "description": "waterproof resistance apology",
//                 "images": [
//                     "https://i.ibb.co/NtpJ0XQ/cumolus-olive.png"
//                 ]
//             }
//         }
//     }
// ],
// "customer_email": "andre@gmail.com"
// }
