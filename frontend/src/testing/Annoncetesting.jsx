// AnnonceForm.js
import React, { useState ,useContext} from "react";
import { client } from '../App' 

import AuthContext from "../conctions/AuthContext";
const Annoncetesting = () => {

  let {user} = useContext(AuthContext)


  const [formData, setFormData] = useState({
    categorie: "",
    service: "",
    img_annonce: null,
    description: "",
    artisan:'',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setFormData({
      ...formData,
      img_annonce: file,
    });
  };


  const handleSubmit = (event) => {
    event.preventDefault();
  
    const jsonData = {
      categorie: formData["categorie"],
      service: formData["service"],
      img_annonce: formData["img_annonce"],
      description: formData["description"],
      artisan: '',
    };
    const formDataObj = new FormData();
    formDataObj.append("categorie", formData["categorie"]);
    formDataObj.append("service", formData["service"]);
    formDataObj.append("img_annonce", formData["img_annonce"]);
    formDataObj.append("description", formData["description"]);
  
    // Append artisan separately since it's not a file
    

  
   
      try {
       
        formDataObj.append("artisan",  user['email']);
       
        console.log(formDataObj)
        // Now, you can make the API request with the user information
        client.post("api/AnnonceCreate/", formDataObj)
          .then((response) => { 
            console.log("Success:", response.data);
          })
          .catch((error) => { 
            console.error("Error:", error);
          });
      } catch (error) {
        console.error("Error fetching user information:", error);
      } 
  };
  


  return (<div>
    <br/><br/><br/><br/><br/><br/><br/> 
    <form onSubmit={handleSubmit}>
   
      <div>
        <label>Category:</label>
        <input
          type="text"
          name="categorie"
          value={formData.categorie}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Service:</label>
        <input
          type="text"
          name="service"
          value={formData.service}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Image:</label>
        <input type="file" name="img_annonce" onChange={handleImageChange} />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
  );
};

export default Annoncetesting;
