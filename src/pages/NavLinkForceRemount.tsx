// import { FC, useState } from 'react';
// import { NavLink, RouteComponentProps } from 'react-router-dom';

// type NavLinkForceRemount = {
//   toStr: string;
// };

// const NavLinkForceRemount: FC<NavLinkForceRemount> = ({ toStr }) => {
//   const [routeUniqueKey, setRouteUniqueKey] = useState(`${Math.random()}`);

//   const to = {
//     pathName: typeof toStr === 'string' ? toStr : '',
//     state: { routeUniqueKey },
//   };

//   return (
//     <>
//       <NavLink onClick={() => setRouteUniqueKey(`${Math.random()}`)} to={to}>
//         <h3>hoge</h3>
//       </NavLink>
//     </>
//   );
// };

// let ROUTE_KEY = "";

// interface Props extends RouteComponentProps<{}> {
// }

// const MakeRouteComponentProps:FC = () => {
//     ROUTE_KEY = ()
// }
