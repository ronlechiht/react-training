import { MouseEventHandler } from "react";

function Button({ onClick, children }: {onClick: MouseEventHandler, children: React.ReactNode}) {
  return (
    <button onClick={e => {
      e.stopPropagation();
      onClick(e);
    }}>
      {children}
    </button>
  );
}

export default function Toolbar() {
  return (
    <div className="Toolbar" onClick={() => {
      alert('You clicked on the toolbar!');
    }}>
      <Button onClick={() => alert('Playing!')}>
        Play Movie
      </Button>
      <Button onClick={() => alert('Uploading!')}>
        Upload Image
      </Button>
    </div>
  );
}
