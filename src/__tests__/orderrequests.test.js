import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import OrderRequest from '../screens/OrderRequest';
import UserOrderDetails from '../components/UserOrderDetails';
import RestDetailsCover from '../components/RestDetailsCover';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers';

describe('OrderRequests', () => {
    let store;

    beforeEach(() => {
        store = configureStore({
            reducer: rootReducer,
        });
    });

    test('renders OrderRequests component', () => {
        render(
            <Provider store={store}>
                <OrderRequest />
            </Provider>
        );

        const restDetailsCover = screen.getByTestId('rest-details-cover');
        const userOrderDetails = screen.getByTestId('user-order-details');

        expect(restDetailsCover).toBeInTheDocument();
        expect(userOrderDetails).toBeInTheDocument();
    });
});

describe('UserOrderDetails', () => {
    let store;

    beforeEach(() => {
        store = configureStore({
            reducer: rootReducer,
        });
    });

    test('renders UserOrderDetails component', () => {
        render(
            <Provider store={store}>
                <UserOrderDetails />
            </Provider>
        );

        const pendingTab = screen.getByText('Pending');
        const inProgressTab = screen.getByText('In Progress');
        const deliveredTab = screen.getByText('Delivered');

        expect(pendingTab).toBeInTheDocument();
        expect(inProgressTab).toBeInTheDocument();
        expect(deliveredTab).toBeInTheDocument();
    });
});
