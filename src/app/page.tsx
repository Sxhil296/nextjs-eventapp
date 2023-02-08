import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
          <header>
      <nav>
        <img />
        <a href="/">Home</a>
        <a href="/events">Events</a>
        <a href="/about">About Us</a>
      </nav>
    </header>

    <main>
    <a href="">
            <img src="" alt="" />
            <h2>Events in London</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo autem a odio magni unde dolores eum praesentium libero inventore assumenda corrupti recusandae beatae rem exercitationem tempore, sequi molestias quia hic!</p>
          </a>
          <a href="">
            <img src="" alt="" />
            <h2>Events in London</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo autem a odio magni unde dolores eum praesentium libero inventore assumenda corrupti recusandae beatae rem exercitationem tempore, sequi molestias quia hic!</p>
          </a>
          <a href="">
            <img src="" alt="" />
            <h2>Events in London</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo autem a odio magni unde dolores eum praesentium libero inventore assumenda corrupti recusandae beatae rem exercitationem tempore, sequi molestias quia hic!</p>
          </a>
    </main>
    </div>
  )
}
