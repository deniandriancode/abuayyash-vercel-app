import "./home.css";

export default function Home() {
    return (
	<div className="mx-auto md:container">
	    <section className="hero grid justify-center md:justify-start md:grid-cols-2 content-center px-2 md:max-w-screen-md md:px-10 md:mx-auto">
	    	<div>
	    	<h1 className="hero-title text-5xl md:text-6xl font-black">Abu Ayyash</h1>
	    	<p className="opacity-[.75]">Idea is cheap, execution is expensive</p>
	    	</div>
	    </section>
	</div>
    );
}
