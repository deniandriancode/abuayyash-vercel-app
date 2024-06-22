export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="flex justify-center items-center my-10 px-2 md:max-w-[867px] md:mx-auto">
      <p className="text-gray-600 text-center">Copyright © {year} Abu Ayyash</p>
    </footer>
  )
}
