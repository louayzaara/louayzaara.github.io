import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'

// USE THIS METHODE IF YOU HAVE A PORTFOLIO WITH LIVE DEMOS ---(just select the code and press CTRL + /) //

// const data = [
//   {
//     id: 1,
//     image: IMG1,
//     title: 'Portfolio 1 item name',
//     github: 'https://github.com',
//     demo: 'link of the portfolio live demos'
//   },
//   {
//     id: 2,
//     image: IMG2,
//     title: 'Portfolio 2 item name',
//     github: 'https://github.com',
//     demo: 'link of the portfolio live demos'
//   },
//   {
//     id: 3,
//     image: IMG3,
//     title: 'Portfolio 3 item name',
//     github: 'https://github.com',
//     demo: 'link of the portfolio live demos'
//   },
//   {
//     id: 4,
//     image: IMG4,
//     title: 'Portfolio 4 item name',
//     github: 'https://github.com',
//     demo: 'link of the portfolio live demos'
//   },
//   {
//     id: 5,
//     image: IMG5,
//     title: 'Portfolio 5 item name',
//     github: 'https://github.com',
//     demo: 'link of the portfolio live demos'
//   },
//   {
//     id: 6,
//     image: IMG6,
//     title: 'Portfolio 6 item name',
//     github: 'https://github.com',
//     demo: 'link of the portfolio live demos'
//   },
// ]


// const portfolio = () => {
//   return (
//     <section id='portfolio'>
//       <h5>My Recent Work</h5>
//       <h2>Portfolio</h2>

//       <div className="container portfolio__container">
//         {
//           data.map(({id, image, title, github, demo}) => {
//             return (
//               <article key={id} className='portfolio__item'>
//               <div className="portfolio__item-image">
//                 <img src={image} alt={title}/>
//               </div>
//               <h3>This is a portfolio item title</h3>
//               <div className="portfolio__item-cta">
//                 <a href={github} className='btn' target='_blank'>Github</a>
//                 <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
//               </div>
//             </article>
//             )
//           })
//         }
//       </div>
//     </section>
//   )
// }

// export default portfolio

 /*-----------------------------------------*/
 // DELETE THIS IF YOU GONA USE THE LIVE DEMOS METHODE //
const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt=""/>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="#" className='btn' target='_blank'>Github</a>
            <a href="#" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt=""/>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="#" className='btn' target='_blank'>Github</a>
            <a href="#" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt=""/>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="#" className='btn' target='_blank'>Github</a>
            <a href="#" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt=""/>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="#" className='btn' target='_blank'>Github</a>
            <a href="#" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt=""/>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="#" className='btn' target='_blank'>Github</a>
            <a href="#" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt=""/>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="#" className='btn' target='_blank'>Github</a>
            <a href="#" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default portfolio