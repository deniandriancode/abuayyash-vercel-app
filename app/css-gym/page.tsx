import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Css Gym"
};

function ColsSample() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
        <div className="bg-red-300">
          <h5>1</h5>
        </div>

        <div className="bg-blue-300">
          <h5>2</h5>
        </div>

        <div className="bg-green-300">
          <h5>3</h5>
        </div>

        <div className="bg-orange-300">
          <h5>4</h5>
        </div>

        <div className="bg-teal-300">
          <h5>5</h5>
        </div>

        <div className="bg-yellow-300">
          <h5>6</h5>
        </div>

        <div className="bg-slate-300">
          <h5>7</h5>
        </div>

        <div className="bg-pink-300">
          <h5>8</h5>
        </div>

        <div className="bg-violet-300">
          <h5>9</h5>
        </div>

        <div className="bg-amber-300">
          <h5>10</h5>
        </div>

        <div className="bg-cyan-300">
          <h5>11</h5>
        </div>

        <div className="bg-fuchsia-300">
          <h5>12</h5>
        </div>
      </div>
    </>
  );
}

function ContainerSample() {
  return (
    <>
      <div className="bg-blue-500 md:container max-w-screen-md mx-auto">
          Currently, the elements in our Navbar are stretched to full width and touch the left and right edges of the browser window.

It would be nice if we could give them some space on the sides and center them.

This is the perfect opportunity to make use of the container.


Currently, the elements in our Navbar are stretched to full width and touch the left and right edges of the browser window.

It would be nice if we could give them some space on the sides and center them.

This is the perfect opportunity to make use of the container.


Currently, the elements in our Navbar are stretched to full width and touch the left and right edges of the browser window.

It would be nice if we could give them some space on the sides and center them.

This is the perfect opportunity to make use of the container.

Currently, the elements in our Navbar are stretched to full width and touch the left and right edges of the browser window.

It would be nice if we could give them some space on the sides and center them.

This is the perfect opportunity to make use of the container.
</div>
    </>
  );
}

export default function CssGym() {
  return (
    <section>
      <ContainerSample />
    </section>
  );
}
