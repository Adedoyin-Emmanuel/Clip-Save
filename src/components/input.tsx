import React from "react";

interface inputProps
{
  onSubmit: (event:any)=> void;
}
const AppInput = ({onSubmit}: inputProps): JSX.Element => {
  return (
    <React.Fragment>
      <form className="input-group mb-3 m-auto input-group-lg width-toggle-2 brand-small-text-2" onSubmit={onSubmit} method="GET">
        <input
          type="text"
          className="form-control search-input-element p-3 brand-small-text-2 text-muted"
          placeholder="Paste youtube link"
          aria-label="Paste youtube link"
          aria-describedby="basic-addon2"
          name="youtubeLink"
          style={{"fontSize":"var(--brand-small-text)"}}
        />
        <button
          className="input-group-button btn custom-input-button text-light brand-bg-primary-color text-capitalize fw-bold"
          id="basic-addon2"
          style={{"fontSize":"var(--brand-small-text)"}}
        >
          submit
        </button>
      </form>
    </React.Fragment>
  );
}



export default AppInput;