import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';

import {
  reserveRocket,
  storeRockets,
  cancelReservation,
} from '../../redux/rockets/rocketsReducer';
import Rockets from '../__mock__/Rockets';

describe('Dispatch actions tests', () => {
  const middlewares = [];
  const mockStore = configureStore(middlewares);

  it('should dispatch Reserve Rocket action', () => {
    const initialState = {};
    const store = mockStore(initialState);

    // Dispatch the action
    store.dispatch(reserveRocket());

    // Test if your store dispatched the expected actions
    const actions = store.getActions();
    const expectedPayload = { type: 'RESERVE_ROCKET' };
    expect(actions).toEqual([expectedPayload]);
  });

  it('should dispatch cancel Reservation action', () => {
    const initialState = {};
    const store = mockStore(initialState);

    // Dispatch the action
    store.dispatch(cancelReservation());

    // Test if your store dispatched the expected actions
    const actions = store.getActions();
    const expectedPayload = { type: 'CANCEL_ROCKET' };
    expect(actions).toEqual([expectedPayload]);
  });

  it('should dispatch store Rockets action', () => {
    const initialState = {};
    const store = mockStore(initialState);

    // Dispatch the action
    store.dispatch(storeRockets());

    // Test if your store dispatched the expected actions
    const actions = store.getActions();
    const expectedPayload = { type: 'FETCH_ROCKET' };
    expect(actions).toEqual([expectedPayload]);
  });
});

describe('Rockets component snapshot tests', () => {
  const mockStore = configureStore();

  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={mockStore({})}>
          <Rockets />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
