import React from 'react';

const NavMessage = () => {
  return (
    <li className="nav-item dropdown">
      <a href="#" className="nav-link nav-icon" data-bs-toggle="dropdown">
        <i className="bi bi-chat-left-text"></i>
        <span className="badge bg-success badge-number">3</span>
      </a>

      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
        <li className="dropdown-header">
          You have 3 new messages
          <a href="#">
            <span className="badge rounded-pill bg-primary p-2 ms-2">
              View All
            </span>
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li className="message-item">
          <a href="#">
            <img src='assets/img/messages-1.jpg'
                 alt=""
                 className='rounded-circle'
            />
            <div>
              <h4>Maria Maria</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse recusandae, officia quas consequuntur debitis porro accusamus numquam ad sequi..
              </p>
              <p>4 hrs. ago</p>
            </div>
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li className="message-item">
          <a href="#">
            <img src='assets/img/messages-1.jpg'
                 alt=""
                 className='rounded-circle'
            />
            <div>
              <h4>David Gilmore</h4>
              <p>
                Reiciendis excepturi qui, accusamus nesciunt officiis veritatis nemo eligendi, quaerat itaque minima laudantium culpa necessitatibus?
              </p>
              <p>6 hrs. ago</p>
            </div>
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li className="message-item">
          <a href="#">
            <img src='assets/img/messages-1.jpg'
                 alt=""
                 className='rounded-circle'
            />
            <div>
              <h4>Elon Musk</h4>
              <p>
                necessitatibus ea iste, velit vel tempora facere expedita. Asperiores sunt ab eaque!
              </p>
              <p>8 hrs. ago</p>
            </div>
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li className="dropdown-footer">
          <a href="#">Show all notifications</a>
        </li>
      </ul>
    </li>
  )
}

export default NavMessage;