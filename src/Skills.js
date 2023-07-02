import HTML5 from './HTML5-logo.png'
import CSS from './Css-logo.png'
import JavaScript from './JavaScript-Logo.png'
import React from './React-logo.png'
import Ruby from './Ruby-logo.png'
import Rails from './Rails-logo.png'
import SASS from './SASS-logo.png'
import Node from './node-logo.png'
import Express from './express-logo.png'
import MongoDB from './mongodb-logo.png'
import PostgreSQL from './postgresql-logo.png'
import Heroku from './Heroku-logo.png'
import Git from './git-logo.png'
import Trello from './Trello-logo.png'
import VS from './VS-logo.png'
import Github from './github-logo.png'

export default function Skills() {
  return(
    <div id='skills'>
      <div className="bs-title-container">
        <h3>Skills</h3>
        <div className="bs-title-side"></div>
      </div>
      <div className='skills-container'>
        <div className='skill'>
          <img src={HTML5} width='45rem' />
          <p>
            HTML5
          </p>
        </div>
        <div className='skill'>
          <img src={CSS} width='45rem' />
          <p>
            CSS
          </p>
        </div>
        <div className='skill'>
          <img src={JavaScript} width='45rem' />
          <p>
            JavaScript
          </p>
        </div>
        <div className='skill'>
          <img src={React} width='45rem' />
          <p>
            React
          </p>
        </div>
      </div>
      <div className='skills-container'>
        <div className='skill'>
          <img src={Ruby} width='45rem' />
          <p>
            Ruby
          </p>
        </div>
        <div className='skill'>
          <img src={Rails} width='45rem' />
          <p>
            Ruby on Rails
          </p>
        </div>
        <div className='skill'>
          <img src={SASS} width='45rem' />
          <p>
            SASS
          </p>
        </div>
        <div className='skill'>
          <img src={Node} width='45rem' />
          <p>
            Node.js
          </p>
        </div>
      </div>
      <div className='skills-container'>
        <div className='skill'>
          <img src={Express} width='45rem' />
          <p>
            Express.js
          </p>
        </div>
        <div className='skill'>
          <img src={MongoDB} width='45rem' />
          <p>
            MongoDB
          </p>
        </div>
        <div className='skill'>
          <img src={PostgreSQL} width='45rem' />
          <p>
            PostgreSQL
          </p>
        </div>
        <div className='skill'>
          <img src={Heroku} width='45rem' />
          <p>
            Heroku
          </p>
        </div>
      </div>
      <div className='skills-container'>
        <div className='skill'>
          <img src={Git} width='45rem' />
          <p>
            Git
          </p>
        </div>
        <div className='skill'>
          <img src={Trello} width='45rem' />
          <p>
            Trello
          </p>
        </div>
        <div className='skill'>
          <img src={VS} width='45rem' />
          <p>
            VS Code
          </p>
        </div>
        <div className='skill'>
          <img src={Github} width='45rem' />
          <p>
            Github
          </p>
        </div>
      </div>
    </div>
  ) 
}