import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import './styles/main.scss';

import phoneImage from '../public/images/PhoneMockup.png';
import padImage from '../public/images/PadMockup.png';
import laptopImage from '../public/images/LaptopMockup.png';
import watchImage from '../public/images/WatchMockup.png';
import headphonesImage from '../public/images/HeadphonesMockup.png';
import chargerImage from '../public/images/ChargerMockuppng.png';
import usbHubImage from '../public/images/USBhub.png';
import caseImage from '../public/images/CaseMockup.png';
import lampImage from '../public/images/SmartLamp.png';

const App = () => {
    const [products, setProducts] = useState([
        {
            id: 1,
            title: 'GizmoPhone X1',
            description: 'Новый флагманский смартфон с 6.7-дюймовым OLED-экраном, 128 ГБ памяти и камерой 108 МП',
            price: 999,
            image: phoneImage
        },
        {
            id: 2,
            title: 'GizmoPad 10',
            description: 'Профессиональный планшет с 12.9-дюймовым экраном, 128 ГБ памяти и поддержкой 4G LTE',
            price: 1450,
            image: padImage
        },
        {
            id: 3,
            title: 'GizmoBook Pro',
            description: 'Мощный ноутбук с 15.6-дюймовым 4K экраном, процессором Intel i9 и 1 ТБ SSD',
            price: 1799,
            image: laptopImage
        },
        {
            id: 4,
            title: 'GizmoWatch Pro',
            description: 'Умные часы с AMOLED-дисплеем, мониторингом сердечного ритма и водонепроницаемостью до 50 метров',
            price: 350,
            image: watchImage
        },
        {
            id: 5,
            title: 'GizmoBuds 2',
            description: 'Беспроводные наушники с активным шумоподавлением и временем работы до 24 часов',
            price: 220,
            image: headphonesImage
        },
        {
            id: 6,
            title: 'GizmoCharger 65W',
            description: 'Универсальное зарядное устройство на 65 Вт с поддержкой быстрой зарядки',
            price: 49,
            image: chargerImage
        },
        {
            id: 7,
            title: 'GizmoHub USB-C',
            description: 'Многофункциональный USB-C хаб с HDMI, USB 3.0 и Ethernet портами',
            price: 79,
            image: usbHubImage
        },
        {
            id: 8,
            title: 'GizmoCase Armor',
            description: 'Прочный чехол для смартфона с защитой от ударов и падений',
            price: 30,
            image: caseImage
        },
        {
            id: 9,
            title: 'GizmoLight LED',
            description: 'Умная LED-лампа с регулировкой яркости и цвета через приложение',
            price: 69,
            image: lampImage
        },
    ]);
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cartItems')) || []);
    const [isCartOpen, setIsCartOpen] = useState(false);

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    useEffect(() => {
        const cartButton = document.getElementById('cart-button');
        cartButton.addEventListener('click', toggleCart);
        return () => {
            cartButton.removeEventListener('click', toggleCart);
        };
    }, []);

    const addToCart = (product) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === product.id);
            if (existingItem) {
                return prevItems.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevItems, { ...product, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (product) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== product.id));
    };

    const updateQuantity = (product, quantity) => {
        setCartItems(prevItems => prevItems.map(item =>
            item.id === product.id ? { ...item, quantity: parseInt(quantity) } : item
        ));
    };

    const purchaseItems = () => {
        console.log(JSON.stringify(cartItems, null, 2));
    };

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    return (
        <div className="app">
            <div className="product-list">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} addToCart={addToCart} />
                ))}
            </div>
            <div className={`cart-sidebar ${isCartOpen ? 'open' : 'close'}`}>
                <Cart
                    cartItems={cartItems}
                    removeFromCart={removeFromCart}
                    updateQuantity={updateQuantity}
                    purchaseItems={purchaseItems}
                    toggleCart={toggleCart}
                />
            </div>
        </div>
    );
};

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
