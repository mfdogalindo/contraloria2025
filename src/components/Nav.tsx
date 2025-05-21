import React from 'react';
import { NavLink } from 'react-router-dom';
import type { NavItem } from '../types';

const navItems: NavItem[] = [
  { href: '/inicio', label: 'Inicio' },
  { href: '/el-concurso', label: 'El Concurso' },
  { href: '/sobre-la-cgr', label: 'Sobre la CGR' },
  { href: '/marco-normativo', label: 'Marco Normativo' },
  { href: '/las-pruebas', label: 'Las Pruebas' },
  { href: '/plan-de-estudio', label: 'Plan de Estudio' },
  { href: '/recomendaciones', label: 'Recomendaciones' },
];

const Nav: React.FC = () => {
  return (
    <nav className="bg-stone-50 border-b border-stone-200">
      <div className="container mx-auto px-4">
        <ul className="flex flex-wrap justify-center space-x-1 py-2">
          {navItems.map((item) => (
            <li key={item.href}>
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  `nav-link-base ${isActive ? 'nav-link-active' : ''}`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;