import configureStore from 'redux-mock-store';

import { reserveRocket, storeRockets, cancelReservation } from '../../redux/rockets/rocketsReducer';

const middlewares = []
const mockStore = configureStore(middlewares)

it('should dispatch Reserve Rocket action', () => {

  const initialState = {}
  const store = mockStore(initialState)

  // Dispatch the action
  store.dispatch(reserveRocket())

  // Test if your store dispatched the expected actions
  const actions = store.getActions()
  const expectedPayload = { type: 'RESERVE_ROCKET' }
  expect(actions).toEqual([expectedPayload])
})

it('should dispatch cancel Reservation action', () => {

  const initialState = {}
  const store = mockStore(initialState)

  // Dispatch the action
  store.dispatch(cancelReservation())

  // Test if your store dispatched the expected actions
  const actions = store.getActions()
  const expectedPayload = { type: 'CANCEL_ROCKET' }
  expect(actions).toEqual([expectedPayload])
})
