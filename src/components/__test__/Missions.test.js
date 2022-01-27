import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';

import Rockets from '../__mock__/Rockets';
import {
  joinMission,
  leaveMission,
  storeMissions,
} from '../../redux/missions/missions';

describe('Dispatch actions tests', () => {
  const middlewares = [];
  const mockStore = configureStore(middlewares);

  it('should dispatch Reserve Rocket action', () => {
    const initialState = {};
    const store = mockStore(initialState);

    // Dispatch the action
    store.dispatch(joinMission());

    // Test if your store dispatched the expected actions
    const actions = store.getActions();
    const expectedPayload = { type: 'JOIN_MISSION' };
    expect(actions).toEqual([expectedPayload]);
  });

  it('should dispatch cancel Reservation action', () => {
    const initialState = {};
    const store = mockStore(initialState);

    // Dispatch the action
    store.dispatch(leaveMission());

    // Test if your store dispatched the expected actions
    const actions = store.getActions();
    const expectedPayload = { type: 'LEAVE_MISSION' };
    expect(actions).toEqual([expectedPayload]);
  });

  it('should dispatch store Rockets action', () => {
    const initialState = {};
    const store = mockStore(initialState);

    // Dispatch the action
    store.dispatch(storeMissions());

    // Test if your store dispatched the expected actions
    const actions = store.getActions();
    const expectedPayload = { type: 'STORE' };
    expect(actions).toEqual([expectedPayload]);
  });
});

describe('Missions component snapshot tests', () => {
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
