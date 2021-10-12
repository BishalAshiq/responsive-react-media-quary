import React from 'react';
import mechanic1 from '../../../images/mechanic/mechanic-1.jpg'
import mechanic2 from '../../../images/mechanic/mechanic-2.jpg'
import mechanic3 from '../../../images/mechanic/mechanic-3.jpg'
import mechanic4 from '../../../images/mechanic/mechanic-4.jpg'
import mechanic5 from '../../../images/mechanic/mechanic-5.jpg'
import Expert from '../Expert/Expert';

const experts =[
    {
        img: mechanic1,
        name: 'Samim Hawlader',
        expertize: '-Alrounder Expert-' 
    },
    {
        img: mechanic2,
        name: 'Turjo Bisswas',
        expertize: '-Car Expert-' 
    },
    {
        img: mechanic3,
        name: 'Sumon Picchi',
        expertize: '-Borof Expert-' 
    },
    {
        img: mechanic4,
        name: 'Rashik Bondhopaddhai',
        expertize: '-Daraz Expert-' 
    },
    {
        img: mechanic5,
        name: 'No-man ',
        expertize: '-Female Expert-' 
    },
]

const Experts = () => {
    return (
        <div className="container">
            <h2 className="text-primary mt-5">Our Experts</h2>
            <div className="row">
                {
                    experts.map(expert => <Expert
                     key={expert.name}
                     expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;