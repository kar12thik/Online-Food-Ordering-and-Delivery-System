import React from 'react';
import { Provider } from 'react-redux';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from "react-router-dom";
import OrderRequest from '../screens/OrderRequest';
import UserOrderDetails from '../components/UserOrderDetails';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers';
import 'firebase/firestore';

jest.mock('firebase/app', () => {
    return {
        firestore: jest.fn().mockReturnValue({
            collection: jest.fn().mockReturnThis(),
            doc: jest.fn().mockReturnThis(),
            update: jest.fn().mockResolvedValue(),
        }),
    };
});

describe('OrderRequests', () => {
    let store;

    beforeEach(() => {
        store = configureStore({
            reducer: rootReducer,
        });
    });

    test('renders RestDetailsCover and UserDetailsCover component', () => {
        const rest_data = {
            restName: 'Testing Restaurant',
            restDescription: 'RestName Testing',
            userProfileImageUrl: 'restName.jpg'
        };

        render(
            <Provider store={store}>
                <OrderRequest rest_data={rest_data} />
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
            myOrders: { orders: [] },
            orderRequests: { orders: [] },
            loggedInUser: { isRestaurant: false },
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

    test('should switch tabs when clicking on them', async () => {

        render(
            <Provider store={store}>
                <UserOrderDetails />
            </Provider>
        );

        const pendingTab = screen.getByText('Pending');
        await waitFor(() => {
            expect(pendingTab).toBeInTheDocument();
        });
        userEvent.click(pendingTab);
        expect(pendingTab).toBeInTheDocument();

        const inProgressTab = screen.getByText('In Progress');
        await waitFor(() => {
            expect(inProgressTab).toBeInTheDocument();
        });
        userEvent.click(inProgressTab);
        expect(inProgressTab).toBeInTheDocument();

        const deliveredTab = screen.getByText('Delivered');
        await waitFor(() => {
            expect(deliveredTab).toBeInTheDocument();
        });
        userEvent.click(deliveredTab);
        expect(deliveredTab).toBeInTheDocument();
    });

    test("changes orders list to in progress when isRestaurant is true", () => {

        const mockStore = {
            myOrders: { orders: [] },
            orderRequests: { orders: [{ id: 1, status: "PENDING" }] },
            loggedInUser: { isRestaurant: true },
        }

        store = configureStore({
            reducer: rootReducer,
        });

        render(
            <Provider store={store} >
                <BrowserRouter>
                    {" "}
                    <UserOrderDetails mockstore={mockStore} />{" "}
                </BrowserRouter>
            </Provider>
        );

        const pendingTab = screen.getByText('Pending');
        expect(pendingTab).toBeInTheDocument();
        userEvent.click(pendingTab);
        expect(pendingTab).toBeInTheDocument();
        expect(screen.getByTestId("send-to-inprogress")).toBeInTheDocument();
    });

    test("changes orders list to delivered when isRestaurant is true", () => {

        const mockStore = {
            myOrders: { orders: [] },
            orderRequests: { orders: [{ id: 1, status: "IN PROGRESS" }] },
            loggedInUser: { isRestaurant: true },
        }

        store = configureStore({
            reducer: rootReducer,
        });

        render(
            <Provider store={store} >
                <BrowserRouter>
                    {" "}
                    <UserOrderDetails mockstore={mockStore} />{" "}
                </BrowserRouter>
            </Provider>
        );

        const inProgressTab = screen.getByText('In Progress');
        expect(inProgressTab).toBeInTheDocument();
        userEvent.click(inProgressTab);
        expect(inProgressTab).toBeInTheDocument();
        waitFor(() => {
            expect(screen.queryByTestId("send-to-delivered")).toBeInTheDocument();
        });
    });

    test("Render to delivered when isRestaurant is true", () => {

        const mockStore = {
            myOrders: { orders: [] },
            orderRequests: { orders: [{ id: 1, status: "Delivered" }] },
            loggedInUser: { isRestaurant: true },
        }

        store = configureStore({
            reducer: rootReducer,
        });

        render(
            <Provider store={store} >
                <BrowserRouter>
                    {" "}
                    <UserOrderDetails mockstore={mockStore} />{" "}
                </BrowserRouter>
            </Provider>
        );

        const deliveredTab = screen.getByText('Delivered');
        expect(deliveredTab).toBeInTheDocument();
        userEvent.click(deliveredTab);
        expect(deliveredTab).toBeInTheDocument();
        waitFor(() => {
            expect(screen.queryByTestId("delivered-status")).toBeInTheDocument();
        });
    });
});
