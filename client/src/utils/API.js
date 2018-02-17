import axios from "axios";

export default {
  // Gets all users
  getUsers: function() {
    return axios.get("/api/users");
  },
  // returns all inventory items
  getInventory: function(){
    return axios.get("/api/inventory");
  },
  // Gets the instruments with the given id
  getInventoryBySchoolId: function(schoolId) {
    return axios.get("/api/inventory/" + schoolId);
  },
  //Gets the instruments by their specific category ex "Brass"
  getByCat: function(search){
    return axios.get("/api/inventory/category/" + search);
  },
  //Gets the instruments by their specific type ex "Trombone"
  getByInst: function(instrument){
    return axios.get("api/inventory/instruments/" + instrument);
  },
  //Gets all instrument templates (AddPage)
  getInstrumentTemplates: function() {
    return axios.get("api/templates");
  },
  auth: function() {
    return axios.post("api/auth/signup");
  }
};