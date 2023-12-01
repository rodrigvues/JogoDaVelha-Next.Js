import Image from 'next/image'
import { IoMdRefresh } from "react-icons/io";


export default function Home() {
  return (
    <div>
      <h1>Jogo da Velha</h1>
      <h2>jogue com moderação</h2>
      <table>
        <tbody>
          <tr>
            <td>X</td>
            <td>X</td>
            <td>X</td>
          </tr>
          <tr>
            <td>X</td>
            <td>X</td>
            <td>X</td>
          </tr>
          <tr>
            <td>X</td>
            <td>X</td>
            <td>X</td>
          </tr>
        </tbody>
      </table>
      <a href="/"> <IoMdRefresh /> </a>
    </div>
  )
}
