import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from '../page/Home';
import FloorPage from '../page/Floor';
import { PopupContent } from '../notion/types';

interface appRoutesProps {
    headerHeight: number;
    data: PopupContent[];
}

export const floorPath = (floor: string) => floor === 'A1' ? '/adl-orf/atelier1' : `/adl-orf/${floor.toLowerCase()}`;

const AppRoutes: React.FC<appRoutesProps> = ({headerHeight, data}) => {
    const [currentModal, setCurrentModal] = useState<number>(0);
    const navigate = useNavigate()
    // 番号順（booth）で前後に移動する
    const ordered = [...data].sort((a, b) => a.booth.localeCompare(b.booth));
    const step = (delta: number) => {
        if (ordered.length === 0) return;
        const i = ordered.findIndex(c => c.id === currentModal);
        const next = ordered[(i + delta + ordered.length) % ordered.length];
        setCurrentModal(next.id);
    }

    useEffect(() => {
        const current = data.find(c => c.id === currentModal);
        if (current) {
            navigate(floorPath(current.floor), { state: { shouldFade: true } });
        }
    }, [currentModal, data, navigate]);

    const floorProps = {
        currentModal, setCurrentModal,
        handleNextModal: () => step(1),
        handlePrevModal: () => step(-1),
        headerHeight, data,
    };

    return(
        <Routes>
            <Route path='/adl-orf' element={<Home headerHeight={headerHeight} />} />
            <Route path='/adl-orf/1f' element={<FloorPage floor="1F" {...floorProps} />} />
            <Route path='/adl-orf/2f' element={<FloorPage floor="2F" {...floorProps} />} />
            <Route path='/adl-orf/atelier1' element={<FloorPage floor="A1" {...floorProps} />} />
        </Routes>
    )
}

export default AppRoutes
