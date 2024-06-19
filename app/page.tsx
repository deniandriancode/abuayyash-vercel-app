import "./home.css";

export default function Home() {
    return (
	<div className="mx-auto md:container">
	    <section className="hero grid justify-center md:justify-start md:grid-cols-2 content-center px-2 md:max-w-screen-md md:px-12 md:mx-auto">
	    {/* <img className="hero-background" src="https://images.unsplash.com/photo-1670893494919-412b65e5e58c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Hero background" /> */}
	    	<div>
	    	<h1 className="hero-title text-4xl md:text-5xl font-black">Abu Ayyash</h1>
	    	<p className="opacity-[.75]">Idea is cheap, execution is expensive</p>
	    	</div>
	    </section>
	</div>
    );
}
