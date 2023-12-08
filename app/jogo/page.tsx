"use client"
import { BsArrowCounterclockwise } from "react-icons/bs";
import { BsFillHouseFill } from "react-icons/bs";
import { BsShare } from "react-icons/bs";


export default function Home() {
  function copyText() {
    // Get the text field
    const copyText = "https://jogo-da-velha-next-peach.vercel.app/";
  
    // Select the text field     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText);
  
    // Alert the copied text
    alert("Link copiado para a área de transferência: ");
  }
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
        <a onClick={copyText}><BsShare /></a>
      </div>
    </div>
  )
}