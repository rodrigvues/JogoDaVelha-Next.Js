import { BsArrowCounterclockwise } from "react-icons/bs";
import { BsFillHouseFill } from "react-icons/bs";
import { BsShare } from "react-icons/bs";


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
      <div className='button'>
        <a href="/jogo"><BsArrowCounterclockwise /></a>
        <a href="/"><BsFillHouseFill /></a>
        <a href="/"><BsShare /></a>
      </div>
    </div>
  )
}