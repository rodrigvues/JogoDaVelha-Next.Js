import Image from 'next/image'

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
      <button>
        <a href="/">Reiniciar</a>
      </button>
    </div>
  )
}
