import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'antd';
import { logoutAction } from './modules/account/business/actions/TokenAction';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logoutAction());
        navigate('/'); // Login sayfasına yönlendirme
    };

    return (
        <Button type="primary" onClick={handleLogout}>
            Çıkış Yap
        </Button>
    );
};

export default Logout;
