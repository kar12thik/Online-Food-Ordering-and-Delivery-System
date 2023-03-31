import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import OrderRequest from '../screens/OrderRequest';
import UserOrderDetails from '../components/UserOrderDetails';
import RestDetailsCover from '../components/RestDetailsCover';
import SingleUserOrderDetail from '../components/SingleUserOrderDetail';
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

const mockReducer = (state = {}, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const mockStore = configureStore({
    reducer: { mockReducer },
});

describe("SingleUserOrderDetail component", () => {
    let store;

    beforeEach(() => {
        store = ({
            mockReducer: { userId: 'mockUserId' },
        });
    });

    it("renders SingleUserOrderDetails component", () => {
        const orderItemList = [
            {
                itemImageUrl: "https://example.com/image1.jpg",
                itemTitle: "Item 1",
                itemIngredients: "Ingredients 1",
                itemPrice: 10.99
            },
            {
                itemImageUrl: "https://example.com/image2.jpg",
                itemTitle: "Item 2",
                itemIngredients: "Ingredients 2",
                itemPrice: 5.99
            }
        ];

        const { getByTestId } = render(
            <Provider store={store}>
                <SingleUserOrderDetail
                    orderId="1234"
                    userUid="5678"
                    order_status="Completed"
                    order_status_color="text-green-500"
                    restaurant_name="Example Restaurant"
                    total_price={16.98}
                    orderItemList={orderItemList}
                    nextaction="Send to in-progress"
                    status=""
                />
            </Provider>
        );

        expect(getByTestId("rest_name")).toBeInTheDocument();
        expect(getByTestId("order_status")).toBeInTheDocument();
    });
});