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
  getByCat: function(search){
    return axios.get("/api/inventory/category/" + search);
  },

  //Gets all instrument templates (AddPage)
  getInstrumentTemplates: function() {
    return axios.get("api/templates");
  }
};