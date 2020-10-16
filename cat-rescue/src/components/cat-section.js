import React from 'react';
import CatCard from "./cat-card.js";
function CatSection() {
  return (
  	<div id = "Cats">
  		<h1>Cats</h1>
  		<CatCard/>
  		<CatCard/>
  		<CatCard/>
  		<CatCard/>
  		<CatCard/>
  		<CatCard/>
  	</div>
  );
}

export default CatSection;