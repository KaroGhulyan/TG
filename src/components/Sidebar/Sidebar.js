import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectCities } from '../../features/appSlice';
import { SidebarWrapper,Cities } from './style';

function Sidebar({ open }) {
  
  const cities = useSelector(selectCities);
  
  return (
    <SidebarWrapper open={open}>
      <Cities>
        {cities.map(({ city, id }) => (
          <li key={id}>
            <Link to={`/${city}`} key={id}>
              {city}
            </Link>
          </li>
        ))}
      </Cities>
    </SidebarWrapper>
  );
}

export default Sidebar;
