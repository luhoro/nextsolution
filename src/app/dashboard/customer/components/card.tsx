import { FiTrash2 } from "react-icons/fi"

const Card = () => {
  return (
    <article className="w-full justify-between items-start flex p-3 border rounded-lg hover:bg-gray-50 duration-200">
      <div>
        <h2>
          <span className="font-bold">Nome: </span> Fulano da Silva
        </h2>

        <p>
          <span className="font-bold">E-mail: </span> fulanosilva@gmail.com
        </p>

        <p>
          <span className="font-bold">Número: </span> (00) 99898-9898
        </p>
      </div>

      <button className="w-fit  hover:-translate-y-1 duration-200 rounded-md font-bold">
        <FiTrash2 fill="#F0D6D6" size={24} />
      </button>
    </article>
  )
}

export default Card
