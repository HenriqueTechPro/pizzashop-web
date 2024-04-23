import { setupWorker } from 'msw/browser'

import { env } from '@/env'

import { approveOrderMock } from './approve-order-mock'
import { cancelOrderMock } from './cancel-order-mock'
import { deliverOrderMock } from './deliver-order-mock'
import { dispatchOrderMock } from './dispatch-order-mock'
import { getDailyRevenueInPeriodMock } from './get-daily-revenue-in-period-mock'
import { getDayOrderAmountMock } from './get-day-orders-amount-mock'
import { getManagedRestaurantMock } from './get-manager-retaurant-mock'
import { getMonthCanceledOrderAmountMock } from './get-month-canceled-orders-mock'
import { getMonthOrderAmountMock } from './get-month-orders-amount-mock'
import { getMonthRevenueMock } from './get-month-revenue-mock'
import { getOrdersDetailsMock } from './get-order-details-mock'
import { getOrderMock } from './get-orders-mock'
import { getPopularProductsMock } from './get-products-mock'
import { getProfileMock } from './get-profile-mock'
import { registerRestaurantMock } from './register-restaurant-mock'
import { signInMock } from './sign-in-mock'
import { updateProfileMock } from './update-profile-mock'

export const worker = setupWorker(
  signInMock,
  registerRestaurantMock,
  getDayOrderAmountMock,
  getMonthOrderAmountMock,
  getMonthCanceledOrderAmountMock,
  getMonthRevenueMock,
  getDailyRevenueInPeriodMock,
  getPopularProductsMock,
  getProfileMock,
  updateProfileMock,
  getManagedRestaurantMock,
  getOrderMock,
  getOrdersDetailsMock,
  dispatchOrderMock,
  approveOrderMock,
  cancelOrderMock,
  deliverOrderMock,
)

export async function enableMSW() {
  if (env.MODE !== 'test') {
    return
  }
  await worker.start()
}
