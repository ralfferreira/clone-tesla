import styled from 'styled-components';
import imgModelOne from '../../assets/img/car1.jpeg';
import imgModelTwo from '../../assets/img/car2.jpg';
import imgModelThree from '../../assets/img/car3.jpeg';
import imgModelFour from '../../assets/img/car4.jpeg';
import imgModelFive from '../../assets/img/car5.jpeg';
import imgModelSix from '../../assets/img/car6.jpeg';
import imgModelSeven from '../../assets/img/car7.jpeg';

export const Container = styled.div`
    .colored:nth-child(1) {
    background-image: url(${imgModelOne});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    }
    .colored:nth-child(2) {
    background: url(${imgModelTwo});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    }
    .colored:nth-child(3) {
    background: url(${imgModelThree});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    }
    .colored:nth-child(4) {
    background: url(${imgModelFour});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    }
    .colored:nth-child(5) {
    background: url(${imgModelFive});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    }
    .colored:nth-child(6) {
    background: url(${imgModelSix});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    }
    .colored:nth-child(7) {
    background: url(${imgModelSeven});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    }
`;