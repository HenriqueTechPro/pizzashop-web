import { http, HttpResponse } from 'msw'

import {
  GetOrderDetailsParams,
  GetOrderDetailsResponse,
} from '../get-order-datails'

export const getOrdersDetailsMock = http.get<
  GetOrderDetailsParams,
  never,
  GetOrderDetailsResponse
>('/orders/:orderId', ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: 'Customer Name',
      email: 'customer@example.com',
      phone: '131323123',
    },
    status: 'pending',
    createdAt: new Date().toISOString(),
    totalInCents: 3500,
    orderItems: [
      {
        id: 'order-item 1',
        priceInCents: 1200,
        product: {
          name: 'Pizza Rucula',
        },
        quantity: 2,
      },
      {
        id: 'order-item 2',
        priceInCents: 1100,
        product: { name: 'Pizza Calabresa' },
        quantity: 1,
      },
    ],
  })
})
