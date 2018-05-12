import React from 'react';
import basicStyle from '../../../components/Config/basicStyle';
import LayoutContentWrapper from '../../../components/utility/layoutWrapper';
import bg1 from '../../../images/bg1.png';

const Profile = ({headerText, cardStyle}) => {
    const {colStyle, rowStyle} = basicStyle;
    const gutter = 16;

    return (
        <LayoutContentWrapper style={{
            height: '100%',
            backgroundImage: `url(${bg1})`,
            backgroundColor: '#000000DD',
            padding: '0px'
        }}>
            <div style={{
                display: 'table-cell',
                verticalAlign: 'middle',
                textAlign: 'center',
                width: '100%',
                height: '100%',
                backgroundColor: '#000000DD'
            }}>
                <div style={{
                    position:'relative',
                    top:'50%',
                    transform: 'translateY(-50%)',
                    fontWeight: 'bold',
                    fontSize: '75px',
                    margin: 'auto',
                    width: '80%',
                    border: '3px solid #ffffff',
                    borderRadius: '5px',
                    padding: '10px',
                    textAlign: 'center',
                    backgroundColor: '#00000044',
                    color: '#ffffff',
                    fontFamily: 'Open Sans',
                }}>
                    I'M NDIMBUMI MWAITENDA
                    <p style={{
                        fontWeight: 'normal',
                        fontSize: '25px',
                    }}>A Software Engineer and Penetration Tester in Dar-es-Salaam</p>
                </div>
            </div>
        </LayoutContentWrapper>
    );

}

export default Profile;