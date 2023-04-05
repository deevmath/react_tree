import ImageHeader from '../img/ImageHeader.jpg'

export function Header() {
  return (
    <div className=" mt-80 h-full w-full flex flex-col justify-center items-center">
      <img
        src={ImageHeader}
        alt=""
        className=" w-32 h-32 rounded-full mt-8 border border-indigo-600"
      />
    </div>
  )
}
