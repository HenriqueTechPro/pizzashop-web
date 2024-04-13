import { http, HttpResponse } from 'msw'

import { GetManagedRestaurantResponse } from '../get-managed-restaurant'

export const getManagedRestaurantMock = http.get<
  never,
  never,
  GetManagedRestaurantResponse
>('/managed-restaurant', () => {
  return HttpResponse.json({
    id: 'custom-id',
    managerId: 'custom-managed-id',
    name: 'Test Shop',
    description: 'custom-restaurant-description',
    createdAt: new Date(),
    updatedAt: null,
  })
})
